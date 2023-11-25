---
date: 2023-11-25
tags:
  - theorem
  - graph-theory
---

Given a [[📘 Trie]] and a string $s$ of length $k$, we can return a pointer to the subtree associated with it in $O(k)$ time.

### ✍️ Notation

- $O(k)$ follows [[O-notation]]

### 🧠 Proof

We traverse the [[📘 Trie]] following the characters given by the prefix. Following a link is $O(1)$, and we have to follow $k$ links $\blacksquare$. 