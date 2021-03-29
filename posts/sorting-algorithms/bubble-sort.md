---
title: Bubble Sort
date: '03-15-2021'
image:
excerpt: Javascript implementation of bubble sort
category: sorting-algorithms
---

## Complexities:
Time: O(n^2)

Space: O(1)

---

## Description:
Bubble sort is a sorting algorithm where adjacent values are compared and swapped if needed
until the list is sorted.

---

## Steps:
1. Iterate over the array backwards (i)

2. Within the loop, iterate over the array forwards (j), up to 1 less than the current i

3. If array[j] > array[j + 1], we need to make the swap, so swap the two values

4. Once iterations are finished, return the sorted array

```js
const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}
```

### Optimization:
Right now, we're continuing to loop the entire way regardless if the array is already fully sorted
sometime before the end. By introducing a new variable to check if we've made any swaps within a j iteration,
we're able to break out of the outer loop early to save time.

```js
const bubbleSort = (arr) => {
  let noSwapsMade;
  for (let i = arr.length; i > 0; i--) {
    noSwapsMade = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        noSwapsMade = false;
      }
    }
    if (noSwapsMade) break;
  }
  return arr;
}
```