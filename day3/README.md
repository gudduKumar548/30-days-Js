# 🧠 To Be or Not To Be – JavaScript

## 🔗 Problem Link
LeetCode: https://leetcode.com/problems/to-be-or-not-to-be/

---

## 📌 Problem Statement
Write a function `expect` that helps developers test their code. It should take in any value `val` and return an object with the following two functions:
- `toBe(val)` → returns `true` if values are strictly equal (`===`), else throws `"Not Equal"`
- `notToBe(val)` → returns `true` if values are not equal (`!==`), else throws `"Equal"`

---

## 🧪 Examples
Input: `func = () => expect(5).toBe(5)` → Output: `{"value": true}`  
Input: `func = () => expect(5).toBe(null)` → Output: `{"error": "Not Equal"}`  
Input: `func = () => expect(5).notToBe(null)` → Output: `{"value": true}`  

---

## 💡 Approach
Return an object with two methods that compare values using strict equality and throw errors when conditions fail.

---

## 🚀 Key Concepts
- Strict Equality (`===`)
- Error Handling (`throw`)
- Object Methods

---

## 🧩 Complexity
- Time Complexity: `O(1)`
- Space Complexity: `O(1)`