---
date: 2024-01-17
tags:
  - "#quantum-theory"
  - "#diagram"
---
Quantum Field Theory joins the ideas behind [[quantum theory]] and [[special relativity]]. There are multiple field theories that apply to different forces:

| Theory | Force |
| ---- | ---- |
| QED: [[Quantum Electrodynamics]] | [[Electromagnetic force]] |
| QCD: [[Quantum Chromodynamics]] | [[Strong nuclear force]] |
| [[Electroweak Theory]] | [[Weak nuclear force]] |

There is yet to be found a [[quantum theory of gravity]]. A good overview over attempts made to unify physical theories is provided by the cGh cube, seen in the diagram below:



```mermaid
stateDiagram
	SpecialRelativity
	QuantumFieldTheory
	TheoryOfEverything
	QuantumMechanics
	NonRelativisticQuantumGravity
	ClassicalMechanics
	Gravitation
	GeneralRelativity
	
	ClassicalMechanics --> Gravitation : Add gravity
	QuantumMechanics --> NonRelativisticQuantumGravity : Add gravity
	QuantumFieldTheory --> TheoryOfEverything : Add gravity
	SpecialRelativity --> GeneralRelativity : Add gravity

	ClassicalMechanics --> QuantumMechanics : Add spoky action
	Gravitation --> NonRelativisticQuantumGravity : Add spoky action
	SpecialRelativity --> QuantumFieldTheory : Add spoky action
	GeneralRelativity --> TheoryOfEverything : Add spoky action

	ClassicalMechanics --> SpecialRelativity : Add space-time curvature
	QuantumMechanics --> QuantumFieldTheory : Add space-time curvature
	Gravitation --> GeneralRelativity : Add space-time curvature
	NonRelativisticQuantumGravity --> TheoryOfEverything : Add space-time curvature
```
