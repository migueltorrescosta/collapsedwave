---
date: 2023-10-12
tags:
  - "#classical-mechanics"
---
A conserved quantity for a given [[📘 Trajectory]]. This is true of the [[📘 Total Energy]] of a system, however other quantities can also be constants of motion

# Properties

## For a velocity independent force, an energy function is conserved iff the potential energy gradient is the symmetric of the force

$E(x, \dot x) = \frac{1}{2}m \| \dot x \|^2 + V(x)$ is a [[📘 Constant of Motion]] $\Leftrightarrow - \nabla V = F$, where

- $E(x, \dot x) = \frac{1}{2}m \| \dot x \|^2 + V(x)$ is the [[Energy function]] aka the [[📘 Total Energy]]
- $V(x) : \mathbb{R}^n \rightarrow \mathbb{R}^n$ is the [[📘 Potential energy]]
- $F(x(t)) = m\ddot x$ is the velocity-independent [[force]]

### Proof
We differentiate the potential energy to get

$$\begin{array}{rll}
\frac{d}{dt} \left ( \frac{1}{2}m \| \dot x \|^2 + V(x) \right ) & = m \sum_{j=1}^{n}\dot x_j\ddot x_j + \sum_{j=1}^{n}\frac{\partial V}{\partial x_j}\dot x_j \\
& = \dot x \cdot \| m \ddot x + \nabla V \| \\
& = \dot x \cdot \| F(x) + \nabla V \| \\
\end{array}
$$
Since $\dot x(t)$ changes over time, the derivative is zero iff $F(x) + \nabla V = 0$
## For a velocity dependent force, an energy function is conserved iff the force can be decomposed into a component resulting from potential energy, and a component where the force is orthogonal to the velocity

$E(x, \dot x) = \frac{1}{2}m \| \dot x \|^2 + V(x)$ is a [[📘 Constant of Motion]] $\Leftrightarrow v \cdot F_2(x,\dot x)=0$, where
- $E(x, \dot x) = \frac{1}{2}m \| \dot x \|^2 + V(x)$ , the [[Energy function]] aka the [[📘 Total Energy]]
- $V(x) : \mathbb{R}^n \rightarrow \mathbb{R}^n$ , a smooth function representing the [[📘 Potential energy]]
- $F(x,v) := - \nabla V(x) + F_2(x,v)$ , the velocity-dependent [[force]]
- $F_2 : \mathbb{R}^n \times \mathbb{R}^n \rightarrow \mathbb{R}^n$, the [[force]] component not explained by the [[📘 Potential energy]]
- $v = \dot x$ is the velocity

### Proof
$$
\begin{array}{rll}
\frac{d}{dt} \left ( \frac{1}{2}m \| \dot x \|^2 + V(x(t)) \right ) & = m \sum_{j=1}^{n}\dot x_j(t)\ddot x_j(t) + \sum_{j=1}^{n}\frac{\partial V}{\partial x_j}\dot x_j(t) \\
& = \dot x(t) \cdot \left [ m \ddot x(t) + \nabla V \right ]
\end{array}
$$

 Since the force $m \ddot x = F(x, v)$ is decomposed as $F(x,v) = - \nabla V + F_2(x,v)$ , we get
 $$
 \begin{array}{rll}
 \frac{d}{dt} \left ( \frac{1}{2}m \| \dot x \|^2 + V(x(t)) \right ) & = \dot x(t) \cdot \left [ F(x) + \nabla V \right ] \\
 & = \dot x(t) \cdot [ - \nabla V + F_2(x,v) + \nabla V ] \\
 & = \dot x(t) \cdot F_2(x,v)
 \end{array}
 $$

 Hence the Energy is constant iff $F_2$ is orthogonal to the velocity $v = \dot x$ .

I need to rename the results above so that they fit into nice notes. [[Help me ❓]]