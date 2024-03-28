---
tags:
  - "#quantum-theory"
  - "#coding"
---
We want to find $x \in A$, given an [[📘 Unitary Operator]] $U_f := (-1)^f(x)\ket{x}$, where $f(x) := \mathbb{1}_A$. Grover's algorithm solves this when $A$ has a single element by:
1. Getting our system into the [[superposition]] $\ket{\psi_0} = H^{\otimes n} \ket{0}^n$.
2. Apply the loop
	1. Apply our oracle 
	2. Invert amplitudes around the mean through the diffusion operator $U_d := 2\ket{\psi}\bra{\psi} -1$, where $\ket{\psi} := \frac{1}{\sqrt{N}}\sum_x{\ket{x}}$.
3. After $t$ iterations we moved our [[📘 Quantum state]] in the direction of the solution by an angle of $2(t+1)\frac{\theta}{2}$. We want to choose $t$ to make this as close as possible to $\frac{\pi}{2}$, and then make a measurement to find the solution. I still need to write this out.
4. Read the result, where the amplitude now is mostly centred in the set around $f(x) = 0$

It would be cool to do the above when the set $A$ has
1. A known number $n$ of solutions. 
2. An unknown number of solutions.
[[Help me ❓]]

