---
title: Insertion Sort
date: '03-15-2021'
image:
excerpt: Javascript implementation of insertion sort
category: sorting-algorithms
---

## Complexities:
Time: O(n^2)

Space: O(1)

---

## Description:
Insertion sort builds our sorted array one element at a time by *inserting*
the current element into the correct position in the already sorted part of the array

---

## Steps:
1. Iterate over the array (i) starting at index 1

2. Hold a reference to our current value (array[i])

3. Create an inner loop (j) where we'll iterate backwards, starting at i - 1, as long as array[j] > current

4. Break out of the loop once array[j] < our current value OR j < 0

5. Set array[j + 1] equal to our current value

6. Once iterations are done, return sorted array

```js
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    // We need to declare j out here due to scope when we "insert" the value
    let j;
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = current;
  }
  return arr
}
```

### Alternative:
In case the weird for loop confuses you too

```js
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j+1] = arr[j]
      j--;
    }
    arr[j+1] = current;
  }
  return arr
}
```