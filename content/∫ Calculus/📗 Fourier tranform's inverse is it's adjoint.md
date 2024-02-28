---
tags:
  - "#calculus"
---
$\mathcal{F}^\dagger = \mathcal{F}^{-1}$, where the [[📘 Fourier Transform]] $\mathcal{F}$ has an [[📘 Adjoint Operator]] $\mathcal{F}^\dagger$ and [[Inverse Operator]] $\mathcal{F}^{-1}$. 

# Proof

We will show that $\braket{\mathcal{F}^{-1}f, g} = \braket{f, \mathcal{F}g} \forall f,g$. I still need to write this down below.

|                                                                                     | Action                                           |
| ----------------------------------------------------------------------------------- | ------------------------------------------------ |
| $\braket{\mathcal{F}^{-1}f,g}$                                                      | Using the [[📘 Fourier Transform]]'s inverse     |
| $\braket{\int_{\mathbb{R}}f(x)e^{2 \pi i t x}dx, g}$                                | Using the definition of [[📘 Inner Product]]     |
| $\int_{\mathbb{R}} \overline{ \int_{\mathbb{R}}f(x)e^{2 \pi i t x}dx } g(t)dt$      | Absorbing the complex conjugate                  |
| $\int_{\mathbb{R}} \int_{\mathbb{R}} \overline{ f(x) }e^{- 2 \pi i t x}dx g(t)dt$   | Rearranging the expression                       |
| $\int_{\mathbb{R}} \overline{ f(x)} \int_{\mathbb{R} }e^{- 2 \pi i t x} g(t) dt dx$ | Using the definition of [[📘 Fourier Transform]] |
| $\int_{\mathbb{R}} \overline{ f(x)} \mathcal{F} g(x) dx$                            | Using the definition of [[📘 Inner Product]]     |
| $\braket{f,\mathcal{F} g}$                                                          |                                                  |

Since the $f, g$ were arbitrary, the above together with [[Riesz Representation Theorem]] implies that $\mathcal{F}^\dagger = \mathcal{F}^{-1}$. 
