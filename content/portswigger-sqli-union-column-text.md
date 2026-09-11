# SQL Injection UNION Attack — Finding a Column Containing Text

**Lab:** SQL injection UNION attack, finding a column containing text
**Source:** PortSwigger Web Security Academy
**Category:** SQL Injection
**Difficulty:** Practitioner

## Description

The product category filter is vulnerable to SQL injection. Query results are reflected in the response, making a UNION attack possible. Goal is to find which column in the query accepts string data, then use it to return a specific value provided by the lab.

## Solution

### Step 1: Determine number of columns

Used `ORDER BY` to find the column count, incrementing until an error occurred:

```
Gifts' ORDER BY 3--
```

This worked (no error), but `ORDER BY 4--` would fail — confirming the query returns **3 columns**.

![ORDER BY 3 result](content/assets/portswigger_sqli_union_column_text/01-orderby-result.png)

### Step 2: Identify which column accepts strings

With column count known, tried a `UNION SELECT` using `NULL` placeholders, putting a test string in different positions until one didn't error:

```sql
' UNION SELECT NULL,NULL,NULL--
' UNION SELECT 'a',NULL,NULL--
' UNION SELECT NULL,'a',NULL--
```

Column 2 accepted the string without error.

### Step 3: Return the lab's required value

Used the same technique but with the specific value the lab required (`6JFILc`), placed in the working string column:

```sql
' UNION SELECT NULL,'6JFILc',NULL--
```

Full injection in the category parameter:

```
Gifts' UNION SELECT NULL,'6JFILc',NULL--
```

### Result

The value `6JFILc` was reflected in the product listing on the page, confirming column 2 is the string-compatible column. Lab solved.

![6JFILc reflected in results](content/assets/portswigger_sqli_union_column_text/02-reflected-result.png)

## Takeaway

When building a UNION attack, `NULL` is a safe placeholder for unknown/incompatible columns since it's valid for any data type. Swap `NULL` for a test string in one column at a time to find which position accepts text without breaking the query.
