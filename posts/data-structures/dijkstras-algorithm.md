---
title: Dijkstra's Algorithm
date: '03-17-2021'
image:
excerpt: Dijkstra's algorithm using a binary heap
category: data-structures
---

Dijkstra's algorithm finds the shortest path between two vertices on a graph.

In this implementation, we'll be using the same [priority queue](./priority-queue) class we
defined before.

```js
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);

    let currentIdx = this.values.length - 1;
    let parentIdx;

    while (currentIdx > 0) {
      parentIdx = Math.floor((currentIdx - 1) / 2);
      if (this.values[parentIdx].priority <= this.values[currentIdx].priority) break;
      [this.values[parentIdx], this.values[currentIdx]] = [this.values[currentIdx], this.values[parentIdx]];
      currentIdx = parentIdx;
    }
    return this.values;
  }

  dequeue() {
    if (!this.values.length) return null;
    if (this.values.length === 1) return this.values.pop();
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    this.sinkDown();

    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swapIdx = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (!swapIdx && rightChild.priority < element.priority || swapIdx && rightChild.priority < leftChild.priority) {
          swapIdx = rightChildIdx;
        }
      }

      if (!swapIdx) break;
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = element;
      idx = swapIdx;
    }
  }
}
```
The simple weighted graph class we're using in this example only has the bare essentials: addVertex and addEdge.
```js
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight })
    this.adjacencyList[v2].push({ node: v1, weight })
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    // holds the current shortest distance from 'start' to the vertex (key)
    const distances = {};
    // keys are the vertices and each value is the 'closest' vertex that it came from
    const previous = {};
    // this is what we're returning at the end
    const path = []

    // remember: the adjacencyList is an object with vertices and their edges
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        // this will give us our starting point
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0)
      } else {
        // initialize the rest of the vertices to Infinity because we don't know the distances yet
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      // no previous values are known yet, so we initialize to null
      previous[vertex] = null;
    }
    let smallest;
    // as long as the queue's not empty
    while (nodes.values.length) {
      // smallest is the vertex with the current shortest distance from 'start'
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest]
        }
        path.push(start);
        path.reverse();
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        // remember: neighbor looks like this: { node: 'A', weight: 1 }
        for (let neighbor of this.adjacencyList[smallest]) {
          // dist is the sum of shortest dist from 'start' to 'smallest' PLUS neighbor's weight
          let dist = distances[smallest] + neighbor.weight;
          // neighborNode is the name, or letter in this case, of the node
          let neighborNode = neighbor.node
          // if we've found a shorter distance to the neighbor
          if (dist < distances[neighborNode]) {
            // updating new smallest distance to neighbor
            distances[neighborNode] = dist;
            // updating previous - how we got to neighbor
            previous[neighborNode] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(neighborNode, dist)
          }
        }
      }
    }
    return path;
  }
}
```