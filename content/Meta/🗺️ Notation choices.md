---
tags: []
---
 There is variability in the way authors write their mathematics and physics. In this webpage we've made some choices:

# Frequently used icons
Notation consistency removes the mental overhead of understanding notation when jumping through different contexts. I (try to) use the symbols below consistently across all notes.

| Symbol                    | Meaning                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------ |
| $X^\dagger$               | [[📘 Adjoint Operator]] of a [[matrix]] $X$                                                            |
| $X^\top$                  | [[Transpose]] of a [[matrix]] $X$                                                                      |
| $\overline{X}$            | [[complex conjugate]] of $X$. $X$ can be a [[matrix]], a [[scalar]], a [[function]], etc               |
| $[ \cdot , \cdot ]$       | [[📘 Commutator]]                                                                                      |
| $\mathbb{E}[ \cdot ]$     | [[expectation operator]]                                                                               |
| $\mathbb{P}[A]$           | Probability of an event $A$                                                                            |
| $\mathbb{L}$              | [[📘 Quantum Dynamical Semigroup generator]]                                                           |
| $\mathrm{Tr}[ \cdot ]$    | [[Trace]]                                                                                              |
| $\mathrm{Tr}^E [ \cdot ]$ | [[📘 Partial Trace]] over a subspace $E$. This is usually referred to as tracing an operator over $E$. |
| $f(x) \propto g(x)$       | $f$ is proportional to $g$, meaning that $\frac{f}{g}$ is a constant                                   |
|                           |                                                                                                        |
# Hat operators
Hat over operators, such as $\hat \rho$ and $\hat U_t^\dagger$, are often skipped in favour of $\rho$ and $U_t^\dagger$. I try to make operators clear from context, and writing the hat on top of every symbol is time consuming.

# Super / sub scripts
Indices are subscript, powers are superscripts.

It takes as much work to write $K_\alpha$ as it does $K^\alpha$. This standardisation allows me to immediately know that $K_\alpha$ is the $K$ operator indexed by $\alpha$, whereas $K^\alpha$ is $K$ to the power of $\alpha$. If we have multiple scripts, we can keep them ordered, for example as $K_{ijkl}$.

# Integrands
We always use $dt$ as one of the delimiters of the integrand, i.e. we always write $\int t^2dt$ and never $\int dt t^2$. This choice clarifies what the integrand is, for instance, $\int_0^t\rho ds$ is the integral with integrand $\rho(s)$, even though we decided to omit the parameterization of $\rho$ as a function of $s$.

# "Identity" function
I often use the function $\mathbb{I}_A =  \begin{cases}1 & \text{ if } x \in A \\0 & \text{ if } x \notin A \end{cases}$ in unusual places. This notation is very powerful as it is easy to memorise, and it replaces a lot of custom functions, such as: 

- Heaviside step function: $\theta(x) = \mathbb{I}_{x \geq 0}$
- Kronecker delta: $\delta_{ij} = \mathbb{I}_{ i = j }$ 
- Step function: $\mathbb{I}_{x \in [0,1]}$ 

It also come very handy as a way of preventing the branching of equations: I can write any branched equation

$f(x) = \begin{cases}g(x) & \text{ if } x \in B \\h(x) & \text{ if } x \in C \end{cases}$

where $B \cap C = \varnothing$  as $f(x) = g(x)\mathbb{I}_{x \in B} + h(x)\mathbb{I}_{x \in C}$. I find the latter easier to reason with during algebraic manipulations.