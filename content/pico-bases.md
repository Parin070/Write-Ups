# Bases — PicoCTF

**Category:** General Skills
**Difficulty:** Very Easy

## Challenge

Decode the Base64 string `bDNhcm5fdGgzX3IwcDM1`.

## Process

The string is encoded in Base64 (indicated by the standard alphanumeric character set and base hint).

Decode via Linux CLI using `base64`:

```bash
echo "bDNhcm5fdGgzX3IwcDM1" | base64 -d
# Output: l3arn_th3_r0p35
```

Alternatively via Python:

```python
import base64
print(base64.b64decode("bDNhcm5fdGgzX3IwcDM1").decode())
```

## Flag

```
picoCTF{l3arn_th3_r0p35}
```

## Takeaway

Base64 is a common 64-character encoding format (A-Z, a-z, 0-9, +, /). Essential skill for decoding payloads, cookies, and data streams in CTFs.
