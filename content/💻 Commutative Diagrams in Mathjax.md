---
tags:
  - "#coding"
  - "#mathjax"
---
It is possible to render commutative diagrams in MathJax. The following provide 2 such possibilities:

# Example 1
$\begin{CD} K(X) @>{ch}>> H(X;\mathbb Q);\\ @VVV @VVV \\ K(Y) @>{ch}>> H(Y;\mathbb Q); \end{CD}$

# Example 2
$\begin{array}{ccccccccc} 0 & \xrightarrow{i} & A & \xrightarrow{f} & B & \xrightarrow{q} & C & \xrightarrow{d} & 0\\ \downarrow & \searrow & \downarrow & \nearrow & \downarrow & \searrow & \downarrow & \nearrow & \downarrow\\ 0 & \xrightarrow{j} & D & \xrightarrow{g} & E & \xrightarrow{r} & F & \xrightarrow{e} & 0 \end{array}$

There is a [nice online mathjax editor](https://cortexjs.io/mathlive/demo/), useful to build the initial version of the latex code.