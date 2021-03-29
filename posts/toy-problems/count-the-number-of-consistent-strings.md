---
title: Count the Number of Consistent Strings
date: '03-22-2021'
image:
excerpt: Leetcode problem 1684 (easy)
category: toy-problems
---
[Link to Leetcode Problem](https://leetcode.com/problems/count-the-number-of-consistent-strings/)  

## Description:

You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

---

### Example 1:
**Input:** allowed = "ab", words = ["ad", "bd", "aaab", "baa", "badab"]  
**Output:** 2  
**Explanation:** Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.  

---

### Example 2:  
**Input:** allowed = "abc", words = ["a", "b", "c", "ab", "ac", "bc", "abc"]  
**Output:** 7  
**Explanation:** All strings are consistent.  

---

### Example 3:  
**Input:** allowed = "cad", words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]  
**Output:** 4  
**Explanation:** Strings "cc", "acd", "ac", and "d" are consistent.  

---

### Constraints:
1 <= words.length <= 104  
1 <= allowed.length <= 26  
1 <= words[i].length <= 10  
The characters in allowed are distinct.  
words[i] and allowed contain only lowercase English letters

---

## Solution:
1. Keep a counter for strings that are not consistent
2. Iterate over each letter within each word
3. If we find a letter not in our 'allowed' string, increment the counter and break the inner loop
4. Return the words array's length minus the counter
```js
const countConsistentStrings = (allowed, words) => {
  let notConsistent = 0;
  for (let word of words) {
      for (let letter of word) {
          if (!allowed.includes(letter)) {
              notConsistent++;
              break;
          }
      }
  }
  return words.length - notConsistent;
};
```

#### Runtime: 97.70%
#### Memory: 71.20%