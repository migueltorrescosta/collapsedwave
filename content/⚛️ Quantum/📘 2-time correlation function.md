---
tags:
  - "#quantum-theory"
---
$C_{\alpha\beta} := \mathrm{Tr}^E[E_\alpha^I(t)E_\beta^I(s)\rho_B]$ where
- $H_E$ is the [[📘 Hamiltonian Operator]] describing the evolution of the environment.
- $H_{int} := \sum_\alpha S_\alpha \bigotimes E_\alpha$ is the [[📘 Hamiltonian Operator]] describing the interaction terms between the environment and the [[📘 Reduced system]], where $S_\alpha$ acts on our system and $E_\alpha$ acts on our environment
- $E_\alpha^I(t) := \exp(\frac{iH_et}{\hbar})E_\alpha\exp(\frac{-iH_et}{\hbar})$ describes the time evolution of our environment operator $E_\alpha$ under the [[📘 Interaction Picture]].
- $\rho_B$ is the [[📘 Statistical Operator|Density Matrix]] associated with the [[📘 Thermal Bath]]
- $\mathrm{Tr}^E$ is the [[📘 Partial Trace]] operator, tracing over the environment.