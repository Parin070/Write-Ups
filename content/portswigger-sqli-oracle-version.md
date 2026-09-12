# SQL Injection Attack — Querying Database Type and Version on Oracle

**Lab:** SQL injection attack, querying the database type and version on Oracle
**Source:** PortSwigger Web Security Academy
**Category:** SQL Injection
**Difficulty:** Practitioner

## Description

The product category filter is vulnerable to SQL injection, with results reflected in the response. The database backend is Oracle. Goal is to use a UNION attack to display the database version string.

## Solution

### Step 1: Recall column count

From prior labs, the query returns 2 columns, one of which accepts string data.

### Step 2: Query Oracle's version

Oracle stores version info in the `v$version` table, in a column called `banner`. Unlike a plain `SELECT` on Oracle (which normally requires `FROM dual` for expressions with no real table), `v$version` is itself a queryable table, so no `dual` is needed here.

First attempt was wrong — tried selecting the table name itself as if it were a column:

```sql
' UNION SELECT v$version FROM dual
```

This fails because `v$version` is a table, not a column/value.

Corrected the query to select the `banner` column from `v$version`, padding the second (unused) column with `NULL`:

```sql
' UNION SELECT banner, NULL FROM v$version--
```

Full injection in the category parameter:

```
Gifts' UNION SELECT banner, NULL FROM v$version--
```

### Result

The response displayed the Oracle version string:

```
CORE 11.2.0.2.0 Production
```

Lab solved.

![Lab solved confirmation with version string](content/assets/portswigger_sqli_oracle_version/01-lab-solved.png)

## Flag / Result

```
CORE 11.2.0.2.0 Production
```

## Takeaway

On Oracle, database version info lives in `v$version.banner`, not a `@@version`-style variable like MySQL/MSSQL. Remember: `v$version` is a table you `SELECT FROM`, not a column you `SELECT` directly.
