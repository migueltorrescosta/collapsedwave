---
tags:
  - "#dashboard"
---

```dataview
TABLE WITHOUT ID
cday as "Created on",
rows.file.link as "Most recent 20 notes"
SORT file.ctime DESC
LIMIT 20
GROUP BY file.cday as cday
SORT cday DESC
```


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
file.link as "Disconnected pages"
WHERE !file.outlinks and !file.inlinks
```


```dataview
TABLE WITHOUT ID
mday as "Last edited on",
rows.file.link as "Stale files"
SORT file.mtime ASC
LIMIT 20
GROUP BY file.mday as mday
```
