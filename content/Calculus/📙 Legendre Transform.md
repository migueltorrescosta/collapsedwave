---
date: 2023-10-21
---
The Legendre transform is an [[📘 Linear Operator#Involuntory Operator]] that converts convex functions into convex functions. defined via the equation below.

$f^\star(x^\star) := \sup_{x \in I} (x^\star x - f(x))$ for $x^\star \in I^\star , x \in I$

>[!info]-
> 1. $I \subset \mathbb{R}$ is an [[interval]] in the [[real line]]
> 2. $f : I \rightarrow \mathbb{R}$ is a [[📘 Convex function]]
> 3. $I^\star := \{ x^\star \in \mathbb{R} : f^\star(x^\star) < \infty \}$
> 4. $\sup$ is the [[supremum operator]]

It is used to convert functions of one quantity into the [[conjugate]] quantity, such as

| Variable | Conjugate variable |
| ---- | ---- |
| position | momentum |
| pressure | volume |
| temperature | entropy |
 
It is still unclear how the Legendre Transform should be visualised. [[Help me ❓]]

# Converting between Lagrangian and Hamiltonian mechanics

We can use Legendre Transformations to convert between Lagrangian and Hamiltonian mechanics. Since position and momentum are conjugate variables, we can convert the Lagrangian $\mathscr{L}(q,\dot q, t)$ and the Hamiltonian $\mathscr{H}(q,p,t)$.

A detailed explanation on this conversion can be found on [NYU's lecture notes for mechanics, lecture 6](https://math.nyu.edu/~cerfon/mechanics_notes/Lecture_6.pdf).