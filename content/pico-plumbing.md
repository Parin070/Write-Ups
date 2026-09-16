# plumbing

**Category:** General Skills
**Platform:** CyLab/picoCTF
**Difficulty:** Medium

## Description

A remote program streams a lot of output over a network connection. The flag is buried somewhere in that output, and needs to be found without saving everything to a file first.

## Solution

Connected to the remote service and piped its output directly into `grep`, filtering for the flag pattern on the fly:

```bash
nc fickle-tempest.picoctf.net 54566 | grep picoCTF
```

(Note: the port number is dynamic — it's generated fresh each time the challenge instance is launched, so it will differ from the one shown here.)

The pipe (`|`) passes the program's stdout stream straight into `grep` without ever writing it to disk, letting `grep` isolate just the line containing the flag from all the other output.

## Flag

```
picoCTF{digital_plumb3r_0BAc587E}
```

## Takeaway

Unix pipes (`|`) let you chain a program's output directly into another tool like `grep`, `awk`, or `sed` — no need to redirect to a file first when you just need to filter or search streamed data.
