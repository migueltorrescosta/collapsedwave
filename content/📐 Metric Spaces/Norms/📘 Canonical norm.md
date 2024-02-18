---
tags:
  - "#algebra"
---

[[📘 Inner Product]]s $\braket{\cdot,\cdot}$ define a canonical  $p: X \rightarrow \mathbb{R}$  via $p(x) := \sqrt{\braket{x,x}}$ . We can check that this satisfies all of the [[📘 Norm]] axioms:

1. $p(x+y)^2=\braket{x+y,x+y}=\braket{x,x}+\braket{y,y}+\braket{x,y}+\braket{y,x}=p(x)^2+p(y)^2+2|\braket{x,y}| \leq p(x)^2+p(y)^2+2p(x)p(y) = (p(x)+p(y))^2$, where the inequality is the result of using the [[📗 Cauchy-Schwarz inequality]] . Taking square roots, this gives us the [[triangle inequality]].
2. $p(sx)=\sqrt{\braket{sx,sx}}=\sqrt{s\overline{s}\braket{x,x}}= \| s \|s \sqrt{x,x} = \| s \| p(x)$, showing us that we have [[absolute homogeneity]]
3. $p(x)=0 \Rightarrow \sqrt{\braket{x,x}}=0 \Rightarrow \braket{x,x}=0 \Rightarrow x=0$, giving us [[point separation]] 

