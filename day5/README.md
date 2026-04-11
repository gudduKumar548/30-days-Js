# 📌 Apply Transform Over Each Element in Array (JavaScript)

🔗 **Problem Link:** [LeetCode - Apply Transform Over Each Element in Array](https://leetcode.com/problems/apply-transform-over-each-element-in-array/)

---

## 📝 Problem

Given an integer array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element.

The returned array should satisfy:returnedArray[i] = fn(arr[i], i)

> ⚠️ Do not use the built-in `Array.map()` method.

---

## 📌 Examples

### Example 1
```js
Input:  arr = [1, 2, 3], fn = function plusone(n) { return n + 1; }
Output: [2, 3, 4]
```

### Example 2
```js
Input:  arr = [1, 2, 3], fn = function plusI(n, i) { return n + i; }
Output: [1, 3, 5]
```

### Example 3
```js
Input:  arr = [10, 20, 30], fn = function constant() { return 42; }
Output: [42, 42, 42]
```

---

## 🔒 Constraints

- `0 <= arr.length <= 1000`
- `-10⁹ <= arr[i] <= 10⁹`
- `fn` returns an integer

---

## ✅ Solution

```js
var map = function(arr, fn) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i);
    }

    return result;
};
```

