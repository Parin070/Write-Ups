# SQL Injection UNION Attack — Determining Column Count

**Lab:** SQL injection UNION attack, determining the number of columns returned by the query
**Source:** PortSwigger Web Security Academy
**Category:** SQL Injection
**Difficulty:** Apprentice

## Goal
This lab focuses on identifying how many columns a vulnerable SQL query returns, which is the essential first step before performing a full UNION-based data extraction attack.

## Vulnerability
The product category filter passes user input directly into a SQL query, and since the results of that query are reflected in the page response, we can use it to enumerate the structure of the underlying table.

## Steps

1. Logged into the lab site to access the product listing page.

![Logged in](content/assets/portswigger_sqli_union_column_count/01-logged-in.png)

2. Started probing the category filter using `ORDER BY` clauses to figure out how many columns the original query selects. This works because `ORDER BY` will only succeed if the column index you specify actually exists in the result set.
   - `Gifts' ORDER BY 1--` → succeeded
   - `Gifts' ORDER BY 2--` → succeeded
   - `Gifts' ORDER BY 3--` → succeeded

![Order by 3 succeeds](content/assets/portswigger_sqli_union_column_count/02-orderby-3.png)

3. Tried `Gifts' ORDER BY 4--` and this time the application threw an error, indicating there is no 4th column. That means the query returns exactly 3 columns.

![Order by 4 errors out](content/assets/portswigger_sqli_union_column_count/03-orderby-4-error.png)

4. Confirmed this by switching to a UNION-based payload with three NULL placeholders, since a UNION SELECT must match the column count of the original query exactly:
   - `Gifts' UNION SELECT NULL,NULL,NULL--`
   - This returned successfully with no error, confirming that 3 is indeed the correct column count.

![Null count matched, lab solved](content/assets/portswigger_sqli_union_column_count/04-null-match.png)

## Result
The lab was solved by confirming the query returns 3 columns, which sets up the next stage of a UNION attack (injecting actual data instead of NULLs).

## Mitigation
This class of vulnerability is prevented by using parameterized queries (prepared statements) instead of directly concatenating user input into SQL statements, along with strict input validation on the category parameter.
