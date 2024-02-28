---
tags:
  - "#group-theory"
  - "#diagram"
---
The table below summarises the inclusion relations between frequently used groups


```mermaid
stateDiagram
	M_n(F)
	GL(n,F)
	SL(n,F)
	U(n,F)
	SU(n,F)
	M_n(R)
	O(n)
	SO(n)
	M_n(F) --> GL(n,F) : invertible matrices
	GL(n,F) --> SL(n,F) : determinant equals 1
	U(n,F) --> SU(n,F) : determinant equals 1
	M_n(R) --> O(n) : preserves inner products
	O(n) --> SO(n) : determinant equals 1
	GL(n,F) --> U(n,F) : preserves inner products
	SL(n,F) --> SU(n,F) : preserves inner products
	U(n,F) --> O(n) : real matrices only
	SU(n,F) --> SO(n) : real matrices only
```

Where, up to LaTeX formatting, we have the following groups:
- $\mathbb{F}$ is a [[field]]
- $\mathbb{R}$ is the [[real line]]
- $M_n(\mathbb{F})$ is the set of $n \times n$ matrices over $\mathbb{F}$ 
- $M_n(\mathbb{R})$ is  the set of $n \times n$ matrices over $\mathbb{R}$ 
- $GL(n, \mathbb{F})$ is the [[General Linear Group]]
- $SL(n, \mathbb{F})$ is the [[Special Linear Group]]
- $U(n, \mathbb{F})$ is the [[Unitary Group]]
- $SU(n, \mathbb{F})$ is the [[Special Unitary Group]]
- $O(n)$ is the [[Orthogonal Group]]
- $SO(n)$ is the [[Special Orthogonal Group]]