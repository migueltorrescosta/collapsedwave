---
date: 2023-11-25
tags:
  - "#graph-theory"
---

A [[k-ary search tree]] where the node key is represented by it's position in the tree

>[!tip]
> ![[trie.png]]


## We can find all keys with a given prefix in a trie in $O(k)$ time

Given a [[📘 Trie]] and a string $s$ of length $k$, we can return a pointer to the subtree associated with it in $O(k)$ time.

>[!success] Proof sketch
> We traverse the [[📘 Trie]] following the characters given by the prefix. Following a link is $O(1)$, and we have to follow $k$ links $\blacksquare$. 