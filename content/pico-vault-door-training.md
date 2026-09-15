# vault-door-training

**Category:** Reverse Engineering
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Description

Java source code for a "vault door" password checker is given. Need to read the code to find the hardcoded password.

## Solution

Read the provided source:

```bash
cat VaultDoorTraining.java
```

Key part of the code:

```java
public boolean checkPassword(String password) {
    return password.equals("w4rm1ng_Up_w1tH_jAv4_000wYdiGTvt");
}
```

The password is hardcoded directly in the `checkPassword` method as a plaintext string comparison. The program also expects input wrapped in the `picoCTF{...}` format (it strips those wrapper characters before checking), so the password itself becomes the flag content.

## Flag

```
picoCTF{w4rm1ng_Up_w1tH_jAv4_000wYdiGTvt}
```

## Takeaway

Storing a password as a plaintext string literal in source code is a classic vulnerability — anyone with source access (or a decompiled binary) can read it directly, no cracking required.
