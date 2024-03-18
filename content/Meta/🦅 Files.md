---
tags:
  - "#dashboard"
---
```dataview
TABLE WITHOUT ID
" (" + length(rows.file.links) + ") " + out AS "Missing File",
join(rows.file.link, ", ") as Mentions
FLATTEN file.outlinks as out
WHERE !(out.file) AND !contains(meta(out).path, "/")
GROUP by out
WHERE length(rows.file.links)>2
SORT length(rows.file.link) DESC
```

```dataview
TABLE WITHOUT ID
file.link as "Recently edited files",
join(file.tags, ", ") as Tags
SORT file.mtime DESC
LIMIT 10
```

```dataview
TABLE WITHOUT ID
file.link as "Stale files",
join(file.tags, ", ") as Tags,
file.mtime as "Last edited at"
SORT file.mtime ASC
LIMIT 20
```



