---
title: Binary Search Tree
date: '03-13-2021'
image:
excerpt: Javascript implementation of a binary search tree
category: data-structures
---

A binary search tree is a special kind of binary tree where a parent node's left subtree
contain values less than it, and the parent node's right subtree contains values greater than it.

![binary search tree](binary-search-tree.png)

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

  BFS() {
    const visited = [];
    const queue = [this.root];
    let current;

    while (queue.length) {
      current = queue.shift();
      visited.push(current);
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }

    return visited;
  }

  DFSPreOrder() {
    const data = [];

    const traverse = (node) => {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    const data = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    const data = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}
```