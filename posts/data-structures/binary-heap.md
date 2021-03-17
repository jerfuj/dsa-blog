---
title: Binary Heap
date: '03-15-2021'
image:
excerpt: Javascript implementation of a max binary heap
category: data-structures
---

## A binary heap is similar to a binary tree, but with some unique characteristics:

1. In a max binary heap, the value of the parent node is always greater than its child nodes (max value is at the root)

2. Each level of a tree is filled in before starting a new level, left children are added first

3. Inserting into the heap triggers a "bubbling" of that node to a valid position

4. Extracting (removing the root of the tree) involves swapping the root with the last node, then "sinking" the node down to a valid position

5. Suitable to be stored in an array

## Calculating a parent or child index:

- Given a parent index (n): Children are at indices **2n + 1 (left) and 2n + 2 (right)**

- Given a child index (n): Parent is at index **Math.floor((n - 1) / 2)**


```js
class MaxBinaryHeap {
  constructor() {
    // This is where we store the nodes of the tree
    this.values = [];
  }
```
## Inserting:
To insert into the binary heap, we push to the end of the array, then swap (or don't) with its parent until it's
in the correct position.
```js
  insert(val) {
    this.values.push(val);

    let currentIdx = this.values.length - 1;
    let parentIdx;

    while (currentIdx > 0) {
      parentIdx = Math.floor((currentIdx - 1) / 2);
      // If the parent value is greater than our current value, we know the current node's position is valid
      if (this.values[parentIdx] >= this.values[currentIdx]) break;
      // Otherwise, swap the child with the parent
      [this.values[parentIdx], this.values[currentIdx]] = [this.values[currentIdx], this.values[parentIdx]];
      // Change the current index to the parent index (bubble up)
      currentIdx = parentIdx;
    }
    return this.values;
  }
```
## Extracting the max:
To extract the max value from the binary heap, we swap it with the last value of the array, then pop it off the end.
We then "sink" the new first value down into its correct position.
```js
  extractMax() {
    // Edge cases
    if (!this.values.length) return null;
    if (this.values.length === 1) return this.values.pop();

    // Swap the max with the last last value, then pop the max off the end and save it
    const end = this.values.length - 1;
    [this.values[0], this.values[end]] = [this.values[end], this.values[0]]
    const max = this.values.pop();

    // Use helper function sinkDown to "sink" the new root down to a valid position
    this.sinkDown();

    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const sinking = this.values[0];

    while (idx < length) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      // swapIdx tells us which index we need to swap with
      // Or break out of the loop if it remains null
      let swapIdx = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > sinking) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        // Two checks before swapping with right index:
        // 1. swapIdx is still null and rightChild > sinking OR
        // 2. swapIdx === leftChildIdx and rightChild > leftChild
        if (!swapIdx && rightChild > sinking || swapIdx && rightChild > leftChild) {
          swapIdx = rightChildIdx;
        }
      }

      if (!swapIdx) break;
      // Make the swap if there is one to make
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = sinking;
      // idx is now the index we swapped with
      idx = swapIdx;
    }
  }
}
```