---
title: Merge Sort
date: '03-16-2021'
image:
excerpt: Javascript implementation of merge sort
category: sorting-algorithms
---

## Complexities:
Time: O(n log(n))

Space: O(n)

## Description:
Merge sort uses a divide and conquer approach by recursively splitting the array into mini-arrays,
then merging them back together to form a sorted array.

## Steps (merge function):
First we'll create a merging function that will merge two sorted arrays into one.
1. Create a result array and two pointer variables (i & j) to track where we are in each array.

2. Start up a loop that runs while i and j are both still in bounds.

3. Between arr1[i] and arr2[j], find which is smaller and push the value into the results array. Increment the
corresponding variable.

4. Once that first loop is done, we still have some items left over in one of the arrays, so we push the rest of
those values into the results array.

5. Return the results array.

```js
const merge = (arr1, arr2) => {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  if (j === arr2.length) {
    while (i < arr1.length) {
      res.push(arr1[i]);
      i++;
    }
  } else {
    while (j < arr2.length) {
      res.push(arr2[j]);
      j++;
    }
  }
  return res;
}
```
## Steps (mergeSort):
1. Recursive base case: If the array length is 0 or 1, return the array.

2. Find the midpoint of the input array.

3. Create a variable "left" that will hold the value of the recurive call on the left half of the array.

4. Create a variable "right" that will hold the value of the recurive call on the right half of the array.

5. Return the value of calling merge on our left and right variables

```js
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
```