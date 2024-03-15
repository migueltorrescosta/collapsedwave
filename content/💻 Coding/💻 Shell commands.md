---
tags:
  - "#diagram"
---
Originally we had the Bourne shell ( `sh` ), which later originated the Bourne Again shell ( `bash` ) , Z Shell ( `zsh` ) and others.
Some commands are specific to the shell being used. In the diagram below we make shell specific commands explicit.

```mermaid
stateDiagram
	classDef shell stroke-width:2px,stroke:yellow;
	class sh shell
	class bash shell
	class zsh shell
	class fish shell
		
	sh --> bash
	sh --> zsh

	sh --> su
	sh --> cat
	sh --> touch
	
	bash --> source
```
