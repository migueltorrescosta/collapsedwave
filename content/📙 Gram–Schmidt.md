---
date: 2023-11-23
tags:
  - methodology
---
The Gram-Schmidt methodology is a process that generates an [[orthonormal basis]] from a [[linearly independent basis]].

We iteratively apply the procedure from $1$ to $n$ to the original vectors $v_1, v_2, \dots v_n$: 
1. Normalize the vector $v_i$ by setting $w_i=\frac{v_i}{\| v_i \|}$ 
2. Replace the remaining vectors with new ones by removing the $w_i$ component, i.e. the vector $v_j$ becomes $v_j - \braket{v_j,w_j}w_j \forall j > i$.

The resulting vectors $w_1, w_2, \dots w_n$ form an [[orthonormal basis]].