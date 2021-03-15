---
title: Queue
date: '03-13-2021'
image: queue.jpg
excerpt: Javascript implementation of a queue
category: data-structures
---

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    const dequeued = this.first;
    if (this.first === this.last) {
      this.last === null;
    }
    this.first = this.first.next;
    this.size--;
    return dequeued.val;
  }
}
```