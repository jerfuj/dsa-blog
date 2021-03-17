---
title: Selection Sort
date: '03-15-2021'
image:
excerpt: Javascript implementation of selection sort
category: sorting-algorithms
---

## Complexities:
Time: O(n^2)

Space: O(1)

## Description:
Selection sort loops through the array, and at each iteration, finds the smallest value
within the rest of the array and swaps it with the current value.

## Steps:
1. Iterate over the array (i)

2. Create a variable to hold the index of the lowest value we find, initialize with i

3. Within the loop, iterate over the array (j) starting at i + 1

4. If we find a value lower than our current lowest, set lowest to the index of the value we found

5. If the current index in our i iteration isn't also the "lowest," swap array[i] with array[lowest]

6. Once iterations are done, return the sorted array

```js
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  return arr;
}
```