---
title: Hash Table
date: '03-16-2021'
image:
excerpt: Basic JS implementation of a hash table
category: data-structures
---


```js
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const hash = this._hash(key);
    if (!this.keyMap[hash]) {
      this.keyMap[hash] = [];
    }
    for (let arr of this.keyMap[hash]) {
      if (arr[0] === key) {
        arr[1] = value;
        return;
      }
    }
    this.keyMap[hash].push([key, value]);
  }

  get(key) {
    const hash = this._hash(key);
    if (this.keyMap[hash]) {
      for (let arr of this.keyMap[hash]) {
        if (arr[0] === key) return arr[1];
      }
    }
    return undefined;
  }

  values() {
    const values = new Set();
    for (let bucket of this.keyMap) {
      if (bucket) {
        for (let arr of bucket) {
          values.add(arr[1])
        }
      }
    }
    return [...values];
  }

  keys() {
    const keys = [];
    for (let bucket of this.keyMap) {
      if (bucket) {
        for (let arr of bucket) {
          keys.push(arr[0])
        }
      }
    }
    return [...keys];
  }
}
```
