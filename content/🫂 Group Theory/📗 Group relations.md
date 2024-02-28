---
tags:
  - "#group-theory"
  - "#diagram"
---
The table below summarises the relations between frequently used groups


```mermaid
flowchart LR
	MF[n by n matrices over F]
	MR[n by n matrices over the real line]
	GL[General Linear Group over F]
	U[Unitary Group over F]
	SL[Special Linear Group over F]
	SU[Special Unitary Group over F]
	O[Orthogonal Group]
	SO[Special Orthogonal Group]
	MF-. non-zero determinant .-> GL
	GL-. determinant equals 1 .-> SL
	U-. determinant equals 1 .-> SU
	MR-. stuff .-> O
	O-. stuff .-> SO
	GL-. preserves inner products .-> U
	SL-. determinant equals 1 .-> SU
	U-. stuff .-> O
	SU-. stuff .-> SO
```


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
	M_n(F) --> GL(n,F)
	GL(n,F) --> SL(n,F)
	U(n,F) --> SU(n,F)
	M_n(R) --> O(n)
	O(n) --> SO(n)
	GL(n,F) --> U(n,F)
	SL(n,F) --> SU(n,F)
	U(n,F) --> O(n)
	SU(n,F) --> SO(n)
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