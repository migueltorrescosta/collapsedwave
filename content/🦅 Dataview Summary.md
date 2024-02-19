[Dataview](https://blacksmithgu.github.io/obsidian-dataview/) is an [Obsidian](https://obsidian.md/) Plugin that summarises my notes in a tabular form. This is very valuable locally, however it does not render nicely on the website.

```dataview
TABLE WITHOUT ID
tags as "All Tags",
length(rows) as Count
WHERE tags
FLATTEN tags
GROUP BY tags
SORT length(rows) DESC
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

## The tables below should be empty

```tasks

```

```dataview
TABLE WITHOUT ID
file.link as "Work in Progress",
file.cday as "Last edited"
SORT file.ctime DESC
WHERE contains(file.outlinks.file.name, "Help me")
```

```dataview
TABLE without id 
out AS "Uncreated files",
length(rows.file.link) as "Mentions"
FLATTEN file.outlinks as out
WHERE !(out.file) AND !contains(meta(out).path, "/")
GROUP BY out
SORT length(rows.file.link) DESC
LIMIT 10
```

```dataview
TABLE without id 
out AS "Sublinks",
file.link as "Origin"
FLATTEN file.outlinks as out
WHERE contains(meta(out).display, " > ")
SORT length(rows.file.link) DESC
LIMIT 10
```
