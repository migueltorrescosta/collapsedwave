---
tags:
  - "#dashboard"
  - "#meta"
---
The topics of the classes are spread over multiple notes. For each class below, I summarise and link to the topics covered.
See the [[🦅 Core Dashboard]] for other key information.

```dataview
TABLE WITHOUT ID
file.link as Class,
lecturer as Lecturer
FROM "🎓 Classes"
WHERE lecturer
sort Class ASC
```

# Clarifications needed

```dataview
TABLE WITHOUT ID
"(" + length(rows.file.outlinks) + ") " + inlink as Class,
rows.file.link as File

FLATTEN file.inlinks as inlink
FLATTEN file.outlinks as outlink

WHERE contains(inlink.file.folder, "Classes")
AND !contains(inlink.file.name, "🦅")
AND contains(outlink.file.name, "Help me")

GROUP BY inlink
SORT length(rows.file.link) DESC
```
