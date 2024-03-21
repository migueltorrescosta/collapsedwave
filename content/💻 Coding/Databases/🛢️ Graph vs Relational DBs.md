---
tags:
  - "#database"
---
Choosing which DB is best often depends on the types of query being done. My rule of thumb:
- Fetch 10k records with 1 relationship : better in [[🛢️ Relational DBs]], as a binary search quickly finds all relevant rows
- Fetch 10 records with a relationship depth of 30 : better in [[🛢️ Graph DBs]], as following 30 links is faster than scanning 30 tables.