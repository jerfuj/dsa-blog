---
title: Spiral Traverse
date: '04-09-2021'
image:
excerpt: AlgoExpert (medium)
category: toy-problems
---

## Description:

Write a function that takes in an n x m two-dimensional array and returns a one-dimensional array of all the array's elements in spiral order.

Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and then proceeds in a spiral pattern all the way until every element has been visited.

---

## Example:
```js
Input: [  
  [1, 2, 3, 4],  
  [12, 13, 14, 5],  
  [11, 16, 15, 6],  
  [10, 9, 8, 7]  
]

Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
```
---

## Solution:

The idea of this approach is to keep track of the edges of the outer perimeter of the current rectangle, and then move them inward as we spiral. 

```js
function spiralTraverse(array) {
  const res = [];
  const expectedLength = array.length * array[0].length;

  let top = 0;
  let right = array[0].length - 1;
  let bottom = array.length - 1;
  let left = 0;

  while (res.length < expectedLength) {
    // TOP EDGE
    for (let i = left; i <= right; i++) {
      res.push(array[top][i]);
    }
    if (res.length === expectedLength) break;
    top++;

    // RIGHT EDGE
    for (let i = top; i <= bottom; i++) {
      res.push(array[i][right]);
    }
    if (res.length === expectedLength) break;
    right--;

    // BOTTOM EDGE
    for (let i = right; i >= left; i--) {
      res.push(array[bottom][i]);
    }
    if (res.length === expectedLength) break;
    bottom--;

    // LEFT EDGE
    for (let i = bottom; i >= top; i--) {
      res.push(array[i][left]);
    }
    left++;
  }
  return res;
}
```