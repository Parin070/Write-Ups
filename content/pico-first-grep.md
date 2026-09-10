# First Grep

**Category:** General Skills
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Description

A file is given containing a lot of text. The flag is hidden somewhere inside it, and `grep` is the tool to find it.

## Solution

The challenge provides a file with a large amount of content. Instead of scrolling through it manually, used `grep` to search for the `picoCTF` prefix directly:

```bash
grep "picoCTF" <filename>
```

This immediately isolated the line containing the flag from the rest of the file.

## Flag

```
picoCTF{grep_is_good_to_find_things_e3C4b360}
```

## Takeaway

`grep` is essential for searching large text files quickly — searching for a known pattern (like `picoCTF{`) is far faster than manual inspection.
