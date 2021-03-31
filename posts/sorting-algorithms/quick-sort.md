---
title: Quick Sort
date: '03-22-2021'
image:
excerpt: Javascript implementation of quick sort
category: sorting-algorithms
---

## Complexities:
Time:  
    Average: O(n log(n))  
    Worst: O(n^2)

Space: O(log(n))

---

## Description:
Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. - [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)

---

## Steps (partition function):
1. There are many ways to choose the pivot, but in this example, we'll using the first element of the array.

2. swapIdx will start at the first index, but will move as we do more swaps. (Everything left of, and including swapIdx will be less than the pivot)

3. Iterate over the rest of the array starting at left + 1, since our pivot is at left.
4. Check if the current element is less than the pivot. If so, increment swapIdx, then swap the element at swapIdx with the current element.

5. After the loop, swap the pivot with the element at swapIdx.

6. Return the swapIdx.

```js
const partition = (arr, left, right) => {
  let pivot = arr[left];
  let swapIdx = left;

  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  [arr[left], arr[swapIdx]] = [arr[swapIdx], arr[left]];
  return swapIdx;
}
```
## Steps (quickSort function):
1. If left < right, there are still sub-arrays to sort.
2. Get pivotIndex from calling pivot on the array with left and right.
3. Recursively call quickSort on the left side of pivotIndex and the right side.
4. Return the sorted array.
```js
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
```