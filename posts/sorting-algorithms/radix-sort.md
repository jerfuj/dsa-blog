---
title: Radix Sort
date: '03-27-2021'
image:
excerpt: Javascript implementation of radix sort
category: sorting-algorithms
---

## Complexities:
Time: O(nk)

Space: O(n + k)

---

## Description:
The idea of Radix Sort is to iteratively compare and place numbers in buckets according to the current digit. We start
at the ones digit then move left as long as one of the numbers has places remaining.

---

### getDigit (helper function):
getDigit gets the digit at the current place (i). For example, if the input num is 1234 and we want the tens place,
getDigit will return 3.
```js
const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i) % 10);
}
```
### digitCount (helper function):
digitCount simply returns the number of digit in the given number.
```js
const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}
```
### mostDigits (helper function):
mostDigits uses digitCount to determine the most amount of digits any of the given numbers contains.
```js
const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
```
## Steps:
1. Find the maximum amount of digits of a single number within the array.
2. Loop this ^  many times.
3. Create the 10 buckets, one for each possible digit (0-9).
4. Create an inner loop and iterate over the input array.
5. Place each number in the correct bucket, according to the current digit.
6. Concatenate all of the buckets, then move the the next "place" in the iteration.
7. Return the sorted array.
```js
const radixSort = (nums) => {
  const maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
```