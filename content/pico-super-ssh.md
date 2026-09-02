# Super SSH — PicoCTF

**Category:** General Skills
**Difficulty:** Very Easy

## Challenge

Launch instance. Connect via SSH. Flag shown on login.

## Process

Launch challenge instance, get host + port + credentials.

SSH in:

```bash
ssh ctf-player@titan.picoctf.net -p 57095
```

Accept host key, enter password. Flag prints in welcome banner on successful login.

## Flag

picoCTF{s3cur3_c0nn3ct10n_8306c99d}


## Takeaway

Basic SSH usage challenge. Confirms comfort connecting to remote instances, a skill needed for most later pwn/web challenges.
