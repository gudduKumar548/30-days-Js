# 🧠 Counter Function (Closure) – JavaScript

## 🔗 Problem Link

LeetCode: https://leetcode.com/problems/counter/

---

## 📌 Problem Statement

Given an integer `n`, return a **counter function**.

This counter function:

* Initially returns `n`
* Then returns **1 more than the previous value** every time it is called

### 🔁 Sequence:

```
n → n+1 → n+2 → n+3 ...
```

---

## 🧪 Examples

### Example 1:

**Input:**

```
n = 10
["call","call","call"]
```

**Output:**

```
[10, 11, 12]
```

**Explanation:**

```
counter() → 10
counter() → 11
counter() → 12
```

---

### Example 2:

**Input:**

```
n = -2
["call","call","call","call","call"]
```

**Output:**

```
[-2, -1, 0, 1, 2]
```

---

## ⚙️ Constraints

* `-1000 <= n <= 1000`
* `0 <= calls.length <= 1000`
* `calls[i] === "call"`

---

## 💡 Approach (Using Closure)

We use the concept of **closure** in JavaScript.

👉 The idea:

* Store `n` inside a function
* Return another function
* That inner function **remembers `n`**
* Every call:

  * Return current value
  * Then increment it

---

## 🧾 Solution Code

```javascript
var createCounter = function(n) {
    return function() {
        return n++;
    };
};
```

---

## 🧠 How It Works

### Step-by-step:

1. `createCounter(n)` is called
2. It returns an **inner function**
3. That inner function has access to `n` (closure)
4. Every time you call it:

   * It returns current `n`
   * Then increments `n`

---

## 🔄 Dry Run

```javascript
const counter = createCounter(10);

counter(); // 10
counter(); // 11
counter(); // 12
```

---

## 🚀 Key Concepts

* ✅ Closure
* ✅ Function returning function
* ✅ Persistent state without global variables

---

## 🧩 Complexity

* **Time Complexity:** `O(1)` per call
* **Space Complexity:** `O(1)`

---

## 🔥 Pro Tip

Instead of:

```javascript
return n + 1;
```

We use:

```javascript
return n++;
```

👉 Because:

* `n++` returns current value first
* Then increments automatically

---

## 🏁 Conclusion

This problem is a classic example of:

> “How closures help maintain state across multiple function calls.”

Mastering this will make concepts like:

* callbacks
* async/await
* React state

much easier to understand 🚀

---
