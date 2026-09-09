# Strings It

**Category:** General Skills
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Description

A binary file named `strings` contains a hidden flag buried among its printable text. The `strings` command is the tool for the job.

## Solution

The challenge gives a binary called `strings`. Running the Linux `strings` utility on it dumps every human-readable text sequence inside the file:

```bash
strings strings
```

This outputs a large amount of text, since binaries contain plenty of non-flag strings (symbols, library references, etc.). To cut through the noise and find the flag quickly, piped the output through `grep` to filter for the `picoCTF` prefix:

```bash
strings strings | grep "pico"
```

Output:
```
picoCTF{5tRIng5_1T_60eA8fdA}
```

## Flag

```
picoCTF{5tRIng5_1T_60eA8fdA}
```

## Takeaway

`strings` is the go-to tool for pulling readable text out of a binary. When output is large, piping into `grep` for a known prefix (like `picoCTF`) saves time versus scrolling through everything manually.
