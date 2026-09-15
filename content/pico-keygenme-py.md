# keygenme-py

**Category:** Reverse Engineering
**Platform:** CyLab/picoCTF
**Difficulty:** Medium

## Description

A Python "trial version" program (`keygenme-trial.py`) asks for a license key. Entering a valid key decrypts and writes out the "full version" source code — which contains the flag. Need to reverse-engineer the key derivation logic to generate a valid key.

## Solution

### Step 1: Read the trial source

```bash
cat keygenme-trial.py
```

Key globals:

```python
username_trial = "BENNETT"
bUsername_trial = b"BENNETT"

key_part_static1_trial = "picoCTF{1n_7h3_kk3y_of_"
key_part_dynamic1_trial = "xxxxxxxx"
key_part_static2_trial = "}"
key_full_template_trial = key_part_static1_trial + key_part_dynamic1_trial + key_part_static2_trial
```

The full license key is a static prefix + an 8-character dynamic part + a static suffix (`}`).

### Step 2: Reverse the dynamic part from `check_key`

```python
def check_key(key, username_trial):
    ...
    if key[i] != hashlib.sha256(username_trial).hexdigest()[4]: return False
    ...
    if key[i] != hashlib.sha256(username_trial).hexdigest()[5]: return False
    ...
    if key[i] != hashlib.sha256(username_trial).hexdigest()[3]: return False
    ...
    if key[i] != hashlib.sha256(username_trial).hexdigest()[6]: return False
    ...
    if key[i] != hashlib.sha256(username_trial).hexdigest()[2]: return False
    ...
    if key[i] != hashlib.sha256(username_trial).hexdigest()[7]: return False
    ...
    if key[i] != hashlib.sha256(username_trial).hexdigest()[1]: return False
    ...
    if key[i] != hashlib.sha256(username_trial).hexdigest()[8]: return False
    return True
```

Each of the 8 dynamic characters comes from a specific index into `sha256(bUsername_trial).hexdigest()`, in this order: `[4, 5, 3, 6, 2, 7, 1, 8]`.

### Step 3: Understand the decryption

```python
def decrypt_full_version(key_str):
    key_base64 = base64.b64encode(key_str.encode())
    f = Fernet(key_base64)
    full_version_code = f.decrypt(full_version)
    ...
```

The full valid license key string itself, base64-encoded, is used directly as the Fernet decryption key for the embedded `full_version` ciphertext blob.

### Step 4: Write a keygen/solver script

```python
import hashlib
from cryptography.fernet import Fernet
import base64

bUsername_trial = b"BENNETT"
h = hashlib.sha256(bUsername_trial).hexdigest()

dynamic_key = h[4] + h[5] + h[3] + h[6] + h[2] + h[7] + h[1] + h[8]
key_str = "picoCTF{1n_7h3_kk3y_of_" + dynamic_key + "}"
print("License key:", key_str)

full_version = b"""<paste full_version blob from source>"""

key_base64 = base64.b64encode(key_str.encode())
f = Fernet(key_base64)
decrypted = f.decrypt(full_version.strip())
print(decrypted.decode())
```

Ran it — this generated the valid license key and decrypted the embedded `full_version` blob, printing the full source of the "paid" version of the program.

### Result

Inspected the decrypted full-version source for the flag:

```bash
grep -i "picoCTF" keygenme.py
```

Found it embedded in the full-version source.

## Flag

```
picoCTF{1n_7h3_kk3y_of_08c46aa4}
```

## Takeaway

Fernet keys must be exactly 32 url-safe base64-encoded bytes — here the program constructed that key deterministically from a hardcoded username, meaning the "license key" could be fully derived offline without any brute-forcing, just by reversing the `check_key` index order and replicating it in a small script.
