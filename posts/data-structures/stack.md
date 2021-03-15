---
title: Stack
date: '03-13-2021'
image: pancakes.jpg
excerpt: Javascript implementation of a stack
category: data-structures
---

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Adding to front
  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      const temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    return ++this.size;
  }

  // Removing from front
  pop() {
    if (this.size === 0) return null;
    const temp = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temp.val;
  }
}
```