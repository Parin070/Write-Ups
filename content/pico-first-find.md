# First Find

**Category:** General Skills
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Description

A zip archive with a deeply nested folder structure hides a file called `uber-secret.txt`. Task is to locate it without manually digging through every folder.

## Solution

Unzipped the archive:

```bash
unzip files.zip
```

Extraction output showed the file's path scroll by, but rather than relying on that, used `find` to locate it directly by name:

```bash
find -type f -name uber-secret.txt
```

Output:
```
./files/adequate_books/more_books/.secret/deeper_secrets/deepest_secrets/uber-secret.txt
```

Read the file:

```bash
cat files/adequate_books/more_books/.secret/deeper_secrets/deepest_secrets/uber-secret.txt
```

Output:
```
picoCTF{f1nd_15_f457_ab443fd1}
```

## Flag

```
picoCTF{f1nd_15_f457_ab443fd1}
```

## Takeaway

`find -name <filename>` locates a specific file instantly regardless of how deeply nested the directory structure is — much faster than manually navigating folder by folder.
