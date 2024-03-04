---
tags:
  - "#dashboard"
---
The topics of the classes are spread over multiple notes. For each class below, I summarise and link to the topics covered

```dataview
TABLE WITHOUT ID
lecturer as Lecturer,
file.link as Class
FROM "🎓 Classes"
WHERE lecturer
sort Class ASC
```

# Questions to ask

```dataview
TABLE WITHOUT ID
"(" + length(rows.file.outlinks) + ") " + inlink as Class,
rows.file.link as File

FLATTEN file.inlinks as inlink
FLATTEN file.outlinks as outlink

WHERE contains(inlink.file.folder, "Classes")
AND contains(outlink.file.name, "Help me")

GROUP BY inlink
SORT length(rows.file.link) DESC
```
