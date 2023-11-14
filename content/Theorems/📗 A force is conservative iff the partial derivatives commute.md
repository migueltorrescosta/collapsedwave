---
date: 2023-10-12
---
$F$ is a [[📘 Conservative force]] iff $\frac{\delta F_j}{\delta x_k} = \frac{\delta F_k}{\delta x_j}$ for the domain $U$ of $F$ 
### ✍️ Notation
- $U$ is a simply connected domain in $\mathbb{R}^n$ 
- $F: U \rightarrow \mathbb{R}^n$ is a smooth function
- $V$ is the [[📘 Potential energy]] associated with the force $F$.

### 🧠 Proof
If $F$ is conservative, $\exists V : F = -\nabla V$ . Hence $$\frac{\partial F_j}{\partial x_k} = \frac{\partial^2 V}{\partial x_k \partial x_j} = \frac{\partial^2 V}{\partial x_j \partial x_k} = \frac{\partial F_k}{\partial x_j}$$
Conversely, If $F$ satisfies $\frac{\partial F_j}{\partial x_k} = \frac{\partial F_k}{\partial x_j}$ we can use path integrals to define $V$, and use [[📗 Stokes theorem]] to show that the integral is independent of the choice of paths.