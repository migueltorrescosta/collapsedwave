---
tags:
  - "#theorem"
  - "#algebra"
---
By definition, if $A$ is an [[📘 Hermitian Operator]] then $A^*=A$. In particular, $A^*$ had the same domain as $A$, so $A: \braket{Ax, y} = \braket{x, Ay}, \forall x,y \in H$, making $A$ a [[📘 Self-Adjoint Operator]] operator.

>[!warning] The reverse is not always true
> To find a counter-example we NEED to go to infinite dimensional spaces, and find an operator with mismatching domains. Take the [[📘 Position Operator]] $X$ as an example, defined with support on the [[Schwartz Space]] with support on $\mathbb{R}_{\geq 1}$. $X$ has full support in this space as $\|Xf \|_2 = \int_{\mathbb{R}_{\geq 1}}x^2\|f(x)\|dx$, and any function $f$ in the [[Schwartz Space]] decays faster than any polynomial.
> 
> However,
> - $\mathbb{I}_{x \leq 2} \notin Dom (X)$ since $f$ is not a smooth function, hence it does not below to the [[Schwartz Space]]
> - $\mathbb{I}_{x \leq 2} \in Dom (X^*)$ since $\forall g \in Dom (X)$ , we have $\braket{\mathbb{I}_{x \leq 2}, Xg}=\int_{\mathbb{R}_{\geq 1}} x \mathbb{I}_{x \leq 2}(x)g(x)dx = \int_1^2 xg(x)dx = \braket{x\mathbb{I}_{x \leq 2}, g}$, which is well-defined for all $g \in Dom (X)$. 
>
> Since we have a domain mismatch, $X \neq X^*$, so $X$ is not a [[📘 Self-Adjoint Operator]]
