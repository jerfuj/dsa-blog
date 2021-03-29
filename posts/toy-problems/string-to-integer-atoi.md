---
title: String to Integer (atoi)
date: '03-22-2021'
image:
excerpt: Leetcode problem 8 (medium)
category: toy-problems
---
[Link to Leetcode Problem](https://leetcode.com/problems/string-to-integer-atoi/)  

Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).  

The algorithm for myAtoi(string s) is as follows:  

1. Read in and ignore any leading whitespace.
2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
3. Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
6. Return the integer as the final result.  

**Note:**

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

---

## Solution:

```js
const myAtoi = (s) => {
  let max = 2147483647;
  let min = -2147483648;
  s = s.trim();

  let isNegative = false;
  if (s[0] === '-' || s[0] === '+') {
    if (s[0] === '-') isNegative = true;
    s = s.slice(1);
  }

  let num = 0;
  for (let i = 0; i < s.length; i++) {
    // charCodeAt - 48 gives us the number value of the char
    let current = s.charCodeAt(i) - 48;
    // if current isn't between 0 - 9, the current char isn't a number
    if (current > 9 || current < 0) break;
    // building the number as we go
    num = num * 10 + current
  }

  if (isNegative) {
    if (-num < min) return min;
    return -num;
  }
  if (num > max) return max;
  return num;
};
```

#### Runtime: 76.37%
#### Memory: 60.20%