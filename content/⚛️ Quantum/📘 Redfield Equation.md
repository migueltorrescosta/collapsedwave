---
tags: #quantum-theory 
---
The Redfield equation is the [[📘 Markovian Master Equation]] $\frac{d}{dt}\rho_S^I(t) = - \sum_\alpha ([S_\alpha^I(t), B_\alpha^I(t)\rho_S^I(t)] + [\rho_S^I(t)C_\alpha^I(t), S_\alpha^I(t)])$, where

- $[ \cdot , \cdot ]$ is the [[📘 Commutator]]
- $B_\alpha^I(t) = \frac{1}{\hbar ^2}\sum_\beta \int_0^t C_{\alpha \beta}(t-s) S_\beta^I(s)ds$
- $C_\alpha^I(t) = \frac{1}{\hbar ^2}\sum_\beta \int_0^t C_{\beta \alpha}(s-t) S_\beta^I(s)ds$
- $C_{\alpha \beta}(\tau)$ is the [[📘 2-time correlation function]].
- $S_\alpha^I(s)$ is the .. [[Help me ❓]].
- The upper index $I$ represents that we are working in the [[📘 Interaction Picture]].

I don't know where the Redfield equation comes from. [[Help me ❓]]

By applying the [[📘 Markov Approximation]] and moving the equation back to the [[Schrodinger picture]], we get the [[📘 Master equation]]:

$\frac{d}{dt}\rho_S^I(t) = - \frac{i}{\hbar} [H_S, \rho_S(t)] + \frac{2}{\hbar} \sum_{\alpha \beta}C_{\alpha \beta}(S_\beta \rho S_\alpha - \frac{1}{2} \{S_\alpha S_\beta^\dagger , \rho_S(t)\} )$, where

- $\{ \cdot , \cdot \}$ is the [[anti-commutator]].
- $C_{\alpha \beta}$ are elements of the [[📘 Kossohowski Matrix]].