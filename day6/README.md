# 🧠 Custom Filter Function (JavaScript)

## 🔗 Problem Link

* LeetCode: https://leetcode.com/problems/filter-elements-from-array/

---

## 📌 Problem Statement

Given an integer array `arr` and a filtering function `fn`, return a filtered array `filteredArr`.

The function `fn` takes:

* `arr[i]` → current element
* `i` → index

Return only those elements for which `fn(arr[i], i)` evaluates to a **truthy value**.

> ❗ Do NOT use the built-in `Array.filter()` method.

---

## 🚀 Approach

We implement a custom `filter` function using:

* A loop to iterate through the array
* A callback function (`fn`) to decide whether to keep an element
* Truthy/falsy evaluation for filtering

---

## 🧾 Code

```js
var filter = function (arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
};

// Example 1
const arr1 = [0, 10, 20, 30];
const ans1 = filter(arr1, (n) => n > 10);
console.log(ans1); // [20, 30]

// Example 2
const arr2 = [1, 2, 3];
const ans2 = filter(arr2, (n, i) => i === 0);
console.log(ans2); // [1]

// Example 3
const arr3 = [-2, -1, 0, 1, 2];
const ans3 = filter(arr3, (n) => n + 1);
console.log(ans3); // [-2, 0, 1, 2]
```

---

## 🧠 Key Concepts

### 🔹 Truthy vs Falsy

JavaScript converts return values into boolean:

Falsy values:

```
false, 0, "", null, undefined, NaN
```

Everything else is truthy.

---

### 🔹 Filter vs Map

| Function | Purpose              |
| -------- | -------------------- |
| `filter` | Keep/remove elements |
| `map`    | Transform elements   |

---

## ⏱️ Complexity

* Time: `O(n)`
* Space: `O(n)`

---

## ✅ Summary

* Custom filter implemented without built-in methods
* Uses callback function for dynamic conditions
* Supports both value and index-based filtering
* Handles truthy/falsy logic correctly

---

## 💡 Author

* 🚀 Practicing DSA in JavaScript
* Focus: Core concepts + clean logic
