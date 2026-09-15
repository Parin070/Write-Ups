# Big Zip

**Category:** General Skills
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Description

A zip archive with a huge, deeply nested folder structure is given. The flag is buried somewhere inside one of many files, and there's no obvious filename to search for.

## Solution

Unzipped the archive and navigated into it:

```bash
cd big-zip-files/
```

First tried searching for a file with "flag" in its name:

```bash
find . -type f -name "*flag*"
```

No results — the flag wasn't in a conveniently named file.

Switched to searching file *contents* instead of filenames, recursively grepping for the flag pattern across every nested folder:

```bash
grep -r "picoCTF" .
```

This found the flag buried deep inside a randomly-named text file several folders down:

```
./folder_pmbymkjcya/folder_cawigcwvgv/folder_ltdayfmktr/folder_fnpfclfyee/whzxrpivpqld.txt:information on the record will last a billion years. Genes and brains and books encode picoCTF{gr3p_15_m4g1c_ef8790dc}
```

## Flag

```
picoCTF{gr3p_15_m4g1c_ef8790dc}
```

## Takeaway

When `find` on filenames comes up empty, search file *contents* instead. `grep -r "pattern" .` recursively searches every file under the current directory regardless of how deep or randomly named the folder structure is — far faster than manually browsing.
