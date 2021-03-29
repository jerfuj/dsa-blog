---
title: Goal Parser Interpretation
date: '03-22-2021'
image:
excerpt: Leetcode problem 1678 (easy)
category: toy-problems
---
[Link to Leetcode Problem](https://leetcode.com/problems/goal-parser-interpretation/)  

## Description:

You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

---

### Example 1:  
**Input:** command = "G()(al)"  
**Output:** "Goal"  
**Explanation:** The Goal Parser interprets the command as follows:  
    G -> G  
    () -> o  
    (al) -> al  
    The final concatenated result is "Goal".  

---

### Example 2:  
    **Input:** command = "G()()()()(al)"  
    **Output:** "Gooooal"  

---

### Example 3:  
    **Input:** command = "(al)G(al)()()G"  
    **Output:** "alGalooG"  

---

### Constraints:  
    1 <= command.length <= 100  
    command consists of "G", "()", and/or "(al)" in some order.  

---

## Solution:
1. Create a result variable that starts as an empty string. We'll be adding to it.
```js
var interpret = function(command) {
  let res = '';
```
2. Iterate over the string
3. If the current character is a 'G', add a 'G' to the result string then continue
```js
  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') {
      res += 'G';
      continue;
    }
```
4. If the character is a '(', we check to see if the next character is a ')'. If so, we add an 'o' to the result and continue. Otherwise, we add 'al' to the result.
```js
    if (command[i] === '(') {
      if (command[i + 1] === ')') {
        res += 'o';
        continue;
      } else {
        res += 'al';
      }
    }
  }
  return res;
};
```

#### Runtime: 81.79%
#### Memory: 55.28%