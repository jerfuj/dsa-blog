---
title: Count Items Matching a Rule
date: '03-28-2021'
excerpt: Leetcode problem 1773 (easy)
category: toy-problems
---
[Link to Leetcode Problem](https://leetcode.com/problems/count-items-matching-a-rule/)  

## Description:

You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

---

### Example 1:

Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"  
Output: 1  
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

---

### Example 2:

Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"  
Output: 2  
Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.

---

## Constraints:

1 <= items.length <= 104  
1 <= typei.length, colori.length, namei.length, ruleValue.length <= 10  
ruleKey is equal to either "type", "color", or "name".  
All strings consist only of lowercase letters.

---

## Solution:
1. Since the items are always ordered [type, color, name], we first find the index we're looking to match.
2. Use array.reduce to find items that match the rule and keep a running total. Return the total.

```js
const countMatches = (items, ruleKey, ruleValue) => {
  const keys = ['type', 'color', 'name'];
  const keyIdx = keys.indexOf(ruleKey);
  return items.reduce((count, item) => {
    if (item[keyIdx] === ruleValue) count++;
    return count;
  }, 0)
};
```

#### Runtime: 100%
#### Memory: 78.31%