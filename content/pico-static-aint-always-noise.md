# Static ain't always noise

**Category:** General Skills
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Description

A compiled binary (`static`) and a disassembly helper script (`ltdis.sh`) are provided. The goal is to inspect the data inside the binary to find the hidden flag.

## Solution

Downloaded `static` and `ltdis.sh`, gave the script execution permissions, and ran it against the binary:

```bash
chmod +x ltdis.sh
./ltdis.sh static
```

Output:

```
Attempting disassembly of static ...
Disassembly successful! Available at: static.ltdis.x86_64.txt
Ripping strings from binary with file offsets...
Any strings found in static have been written to static.ltdis.strings.txt with file offset
```

The script generated two output files: `static.ltdis.x86_64.txt` (disassembly) and `static.ltdis.strings.txt` (extracted text strings with file offsets).

Inspected the strings output file:

```bash
cat static.ltdis.strings.txt
```

Found the flag embedded directly in the binary's string table:

```
3020 picoCTF{d15a5m_t34s3r_20335e41}
```

Or by grepping directly:

```bash
grep "picoCTF" static.ltdis.strings.txt
```

## Flag

```
picoCTF{d15a5m_t34s3r_20335e41}
```

## Takeaway

Compiled binaries often contain hardcoded plaintext strings (like error messages or flags) in their data sections. Tools like `strings` (or helper scripts wrapper around `strings` / `objdump`) extract these readable strings directly, making it unnecessary to reverse-engineer or execute the binary.
