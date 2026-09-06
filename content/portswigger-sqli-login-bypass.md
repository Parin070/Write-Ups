# SQL Injection — Login Bypass

**Lab:** SQL injection vulnerability allowing login bypass
**Source:** PortSwigger Web Security Academy
**Category:** SQL Injection
**Difficulty:** Apprentice

## Goal
Bypass the authentication mechanism to log in as the `administrator` user using SQL injection.

## Vulnerability Analysis
The application constructs its database queries by directly concatenating user-supplied input from the login form without proper sanitization or parameterization.

The underlying backend query is likely structured as:
```sql
SELECT * FROM users WHERE username = 'INPUT' AND password = 'INPUT'
```

## Exploitation Steps

1. **Access the Lab:** Open the lab target page in your browser.

![Lab open](content/assets/portswigger_sqli_login_bypass/01-lab-open.png)

2. **Inject the Payload:** Navigate to the login page and enter `administrator'--` into the **Username** field. Set the **Password** field to any arbitrary value (e.g., `x`).

![Payload entered](content/assets/portswigger_sqli_login_bypass/03-payload-entered.png)

3. **Submit:** Click the **Log in** button to send the request.

## Technical Explanation
The injected single quote (`'`) breaks out of the `username` string literal, while the double-dash sequence (`--`) tells SQL to treat the remainder of the query line as a comment.

This modifies the executing SQL query into:
```sql
SELECT * FROM users WHERE username = 'administrator'--' AND password = 'x'
```

Because everything following `--` is ignored by the database parser, the password validation check is completely bypassed. The query evaluates to return the `administrator` user record regardless of the password supplied.

## Result
The application authenticates the session as the `administrator` user, successfully solving the lab.

![Lab solved](content/assets/portswigger_sqli_login_bypass/04-lab-solved.png)

## Remediation & Fix
To prevent login bypass via SQL injection:
- Use **parameterized queries** (prepared statements) for all database operations.
- Never concatenate raw user input directly into SQL statements.
