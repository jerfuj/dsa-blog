---
title: Binary Search Tree
date: '03-13-2021'
image:
excerpt: Javascript implementation of a binary search tree
category: data-structures
---

```js
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (current) {
      if (val === current.val) return;
      if (val > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = node;
          return this;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          current.left = node;
          return this;
        }
      }
    }
  }


  find(val) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (current.val === val) return current;
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

}
```