# 🧩 Create Hello World Function

## 🔗 Problem Link

👉 https://leetcode.com/problems/create-hello-world-function/

---

## 📝 Problem Description

You need to implement a function `createHelloWorld` that returns another function.
The returned function should **always return `"Hello World"`**, no matter what arguments are passed to it.

---

## 📌 Examples

### Example 1:

```javascript
const f = createHelloWorld();
f(); // "Hello World"
```

### Example 2:

```javascript
const f = createHelloWorld();
f({}, null, 42); // "Hello World"
```

---

## 🚀 Approach

* We use the concept of **closures in JavaScript**
* `createHelloWorld` returns an **inner function**
* That inner function ignores all arguments and simply returns `"Hello World"`

---

## 💻 Solution

```javascript
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    };
};
```

---

## 🧠 Key Concepts

* **Closure** → Function returning another function
* **Rest Parameters (`...args`)** → Allows handling any number of arguments
* Ignoring inputs → Always returning constant output

---

## ⏱️ Complexity

* **Time Complexity:** O(1)
* **Space Complexity:** O(1)

---

## 🎯 Summary

No matter what arguments are passed, the returned function always outputs:

```text
Hello World
```

---
