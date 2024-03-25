---
tags:
  - "#dashboard"
---
This page summarises my file system. See the [[🦅 Core Dashboard]] for other key information.

```dataview
TABLE WITHOUT ID
cday as "Created on",
join(rows.file.link, ", ") as "Notes"
SORT file.ctime DESC
LIMIT 40
GROUP BY file.cday as cday
SORT cday DESC
```

```dataview
TABLE WITHOUT ID
mday as "Last modified on",
join(rows.file.link, ", ") as "Notes"
SORT file.mtime DESC
LIMIT 40
GROUP BY file.mday as mday
SORT mday DESC
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
join(rows.file.link, ", ") as "Disconnected pages"
WHERE !file.outlinks and !file.inlinks
GROUP BY 1
```

```dataview
TABLE WITHOUT ID
join(rows.file.link, ", ") as "Files with no tags"
WHERE !file.tags
GROUP BY 1
```


```dataview
TABLE WITHOUT ID
mday as "Last edit",
join(rows.file.link, ", ") as "Stale files"
SORT file.mtime ASC
LIMIT 50
GROUP BY file.mday as mday
```
