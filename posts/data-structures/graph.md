---
title: Graph
date: '03-16-2021'
image:
excerpt: Basic JS implementation of a graph
category: data-structures
---

A graph is a collection of nodes (vertices) and edges that connect the nodes to one another. This
basic implementation of an undirected graph uses an adjacency list to model nodes and edges.

```js
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
```
## Adding a vertex:
When using an adjacency list, adding a vertex is as easy as adding a key (vertex value) and a value (empty array)
to the adjacency list object.
```js
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
```
## Adding an edge:
Because this is an undirected graph, we add the first vertex into the second's array and vice versa.
```js
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
```
## Removing an edge:
Using the built-in filter method, we can just filter the first vertext out of the second's array and vice versa.
```js
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1)
  }
```
## Removing a vertex:
To remove a vertex from our graph, we can reuse the removeEdge method we just created, and call it for every
one of the vertex's edges. After that's finished, just delete from the adjacency list object.
```js
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      this.removeEdge(this.adjacencyList[vertex].pop(), vertex)
    }
    delete this.adjacencyList[vertex];
  }
```
## Depth first search (recursive):
```js
  DFSRecursive(start) {
    const res = [];
    const visited = {};

    const DFS = (vertex) => {
      res.push(vertex);
      visited[vertex] = true;
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          DFS(neighbor);
        }
      })
    }
    DFS(start);
    return res;
  }
```
## Depth first search (iterative):
```js
  DFSIterative(start) {
    const res = [];
    const visited = {};
    const stack = [start];

    visited[start] = true;

    let current;
    while (stack.length) {
      current = stack.pop();
      res.push(current);

      this.adjacencyList[current].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      })
    }
    return res;
  }
```
## Breadth first search:
```js
  breadthFirstSearch(start) {
    const res = [];
    const visited = {};
    const queue = [start];
    visited[start] = true;

    let current;
    while (queue.length) {
      current = queue.shift();
      res.push(current);

      this.adjacencyList[current].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return res;
  }
}
```