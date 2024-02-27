---
tags:
  - "#quantum-theory"
---
I.e. $\braket{\mathcal{F} f, \mathcal{F} g} = \braket{f,g} \forall f,g$, where $\mathcal{F}$ is the [[📘 Fourier Transform]] and $f,g$ are arbitrary functions in $\mathcal{L}^2(\mathbb{F})$ for $\mathbb{F}$ being either the [[field]] of reals or complex numbers.

# Proof

Since [[📗 Fourier tranform's inverse is it's adjoint]], we have $\braket{\mathcal{F}f, \mathcal{F}g} = \braket{\mathcal{F}^\dagger \mathcal{F}f, g} = \braket{f, g}$. Since all [[📘 Inner Product]]s are preserved, so are [[📘 Distance]]s, showing that the [[📘 Fourier Transform]] is an [[📘 Isometry]].