---
tags:
  - "#calculus"
---
We define the Matrix Exponential, denoted by $e^X$, for generic [[matrix]] pair $X, Y \in M_n( \mathbb{C})$, by:
1. $e^0 = \mathbb{1}$
2. $e^{\overline{X}} = \overline{(e^{X})}$ and $e^{X^*} = (e^X)^*$, where $\overline{X}$ is the [[Transpose]] and $X^*$ is the [[complex conjugate]].
3. $e^{AXA^{-1}} = Ae^XA^{-1}$ holds $\forall A \in GL_n(\mathbb{C})$.
4. $\det(e^X) = e^{\mathrm{Tr}[X]}$, where $\mathrm{Tr}[ \cdot ]$ is the [[Trace]]
5. $XY = YX \Rightarrow e^{X+Y} = e^X e^Y$
6. $e^X \in GL_n(\mathbb{C}) \forall X$, i.e. $e^X$ is always an [[invertible matrix]]
7. $(e^X)^{-1} = e^{-X}$
8. $e^{X+Y} = \underset{m \rightarrow \infty}{\lim} \left ( e^{X/m}e^{Y/m} \right )^m \qquad \forall X,Y \in M_n{\mathbb{C}}$

I need to learn how to:
1. Calculate the exponential explicitly
2. Calculate the logarithm ( i.e. invert the exponential ) explicitly