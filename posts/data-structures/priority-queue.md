---
title: Priority Queue
date: '03-15-2021'
image:
excerpt: Priority queue using a min binary heap
category: data-structures
---

This example uses a min binary heap to implement a priority queue. The heap is sorted according to each node's "priority."

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
        if (!swapIdx && rightChild.priority < element.priority ||
            swapIdx && rightChild.priority < leftChild.priority) {
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