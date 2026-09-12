# SQL Injection Attack — Querying Database Type and Version on MySQL and Microsoft

**Lab:** SQL injection attack, querying the database type and version on MySQL and Microsoft
**Source:** PortSwigger Web Security Academy
**Category:** SQL Injection
**Difficulty:** Practitioner

## Description

The product category filter is vulnerable to SQL injection, with results reflected in the response. The database backend is MySQL or Microsoft SQL Server. Goal is to use a UNION attack to display the database version string.

## Solution

### Step 1: Recall column count

From prior labs, the query returns 2 columns, with the second column accepting string data.

### Step 2: Query the version

Both MySQL and MSSQL expose the version via the `@@version` global variable. First attempt:

```sql
' UNION SELECT NULL, @@version--
```

This returned an error.

### Step 3: Fix the comment syntax

The issue was the trailing `--` comment. On MSSQL, a bare `--` at the very end of the request can get trimmed (trailing whitespace stripped), breaking the comment and leaving leftover query syntax that causes an error. Fixed by adding a space and a dummy character after the comment marker so it isn't stripped:

```sql
' UNION SELECT NULL, @@version-- -
```

Full injection in the category parameter:

```
Gifts' UNION SELECT NULL, @@version-- -
```

### Result

The response displayed the database version string. Lab solved.

![Lab solved confirmation with version string](content/assets/portswigger_sqli_mysql_mssql_version/01-lab-solved.png)

## Flag / Result

```
Lab solved — database version string displayed via @@version
```

## Takeaway

`@@version` works on both MySQL and MSSQL to retrieve the version string. When a UNION payload errors for no obvious reason on MSSQL, check the comment terminator — end with `-- -` instead of a bare `--` to prevent trailing whitespace from being stripped and breaking the comment.
