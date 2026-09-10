# Where are the robots?

**Category:** Web Exploitation
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Description

Every website can have a `robots.txt` file telling web crawlers which pages not to index. Sometimes that file accidentally reveals hidden pages.

## Solution

Navigated to the site's `robots.txt`:

```
/robots.txt
```

Contents:

```
User-agent: *
Disallow: /cc6b1.html
```

The `Disallow` line points to a page the site owner didn't want crawled — `cc6b1.html`. Since `robots.txt` is just a suggestion for crawlers and not an access restriction, visited the page directly:

```
/cc6b1.html
```

The page contained the flag:

```
picoCTF{ca1cu1at1ng_Mach1n3s_cc6b1}
```

## Flag

```
picoCTF{ca1cu1at1ng_Mach1n3s_cc6b1}
```

## Takeaway

`robots.txt` is meant to guide search engine crawlers, not to enforce security. Disallowed paths are often a map straight to content the owner wanted hidden — always check it.
