---
tags:
  - "#dashboard"
---
The dataview below allows me to see a summary of all seminars. It is REALLY useful locally, but it doesn't render on the web.

```dataview
TABLE WITHOUT ID
date as When,
file.link as Talk,
lecturer as By,
location as Where
FROM "🎤 Seminars"
WHERE date
sort date ASC
```
