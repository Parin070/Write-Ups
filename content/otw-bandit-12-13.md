## Bandit: Level 12 → Level 13

### **Level Information**
**Goal:** Extract the password from a file (**data.txt**) that is a hexdump of a file that has been repeatedly compressed.

---

### **Commands Used**
```bash
# Setup a workspace in /tmp
mktemp -d
cp data.txt /tmp/tmp.bY0iNpfDUu
cd /tmp/tmp.bY0iNpfDUu

# Reverse the hexdump
xxd -r data.txt out

# Repeated decompression cycle:
file out              # Check type
mv out out.gz         # Rename to correct extension
gunzip out.gz         # Decompress

# (Repeat using appropriate tools: bunzip2, tar xf, gunzip)
cat data
```

---

### **Approach**
1.  **Preparation:** Since I needed to create many intermediate files, I used `mktemp -d` to create a private directory in `/tmp`. This is a crucial habit for SOC/Forensics work to avoid cluttering home directories or running into permission issues.

2.  **Reversing the Hexdump:** The original file was a text-based hexdump. I used `xxd -r` to convert it back into a binary file.

3.  **The "Nesting Doll" Extraction:** I entered a loop of using the `file` command to identify the compression type and then using the corresponding tool to extract it:
    * **GZip:** Use `mv file file.gz` then `gunzip file.gz`.
    * **BZip2:** Use `mv file file.bz2` then `bunzip2 file.bz2`.
    * **Tar:** Use `mv file file.tar` then `tar xf file.tar`.

4.  **Final Extraction:** After roughly 7-8 layers of compression (including nested `.tar` and `.bin` files), the file finally identified as **ASCII text**.

---

### **Proof of Learning**
* **Hexdump Reversal:** Used `xxd -r` to transform text representations of hex back into functional binary data.
* **File Identification:** Relied heavily on the `file` command rather than trusting file extensions, as the level intentionally uses vague names like `data5.bin`.

* **Archive Management:** Mastered the different syntax requirements for `gzip` (which expects a specific extension) vs. `tar` (which allows you to specify filenames).

* **Temporary Workspaces:** Practiced using `/tmp` and `mktemp` for safe, isolated file manipulation.

**Next Level Password:** `FO5dwFsc0cbaIiH0h8J2eUks2vdTDwAn`

---

### **Important Note on Passwords**

The passwords for OverTheWire levels are frequently updated. The password found here (**FO5dwFsc0cbaIiH0h8J2eUks2vdTDwAn**) is specific to this session. You must manually decompress the layers in your own session to find the current active password.

---

### **Key Takeaways**
* Extensions in Linux are often just hints; the `file` command is the only way to know what a file actually is.
* The `gzip` utility is picky—if the file doesn't end in `.gz`, it often refuses to decompress it, necessitating the use of `mv`.
* Automation (like a bash script) could solve this faster, but doing it manually reinforces the "magic bytes" signature of different compression formats.