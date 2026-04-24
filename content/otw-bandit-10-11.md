## Bandit: Level 10 → Level 11

### **Level Information**
**Goal:** The password for the next level is stored in the file **data.txt**, which contains base64 encoded data.

---

### **Commands Used**
```bash
# Log in to the server
ssh bandit10@bandit.labs.overthewire.org -p 2220

# View the encoded content
cat data.txt

# Decode the base64 encoded file
base64 -d data.txt
```

---

### **Approach**
1.  **Logging In:** Accessed the level using the username `bandit10` and the password `FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey`.

2.  **Observation:** Running `cat data.txt` displayed a string ending in `==`. This padding is a primary indicator of **Base64 encoding**, a method used to represent binary data in an ASCII string format.

3.  **The Solution:** I used the `base64` command with the `-d` (decode) flag. 
    * *Note:* Running `base64 data.txt` without the flag would simply encode the already encoded data further, resulting in a different hash.

4.  **Discovery:** The decoded output provided the plaintext password for the next level.

---

### **Proof of Learning**
* **Base64 Identification:** Recognised the specific character set (A-Z, a-z, 0-9, +, /) and the `=` padding used in Base64.

* **Decoding vs. Encoding:** Distinguished between the default behavior of the `base64` utility (encoding) and the necessary flag for retrieval (`-d`).

* **Data Representation:** Understood that Base64 is an encoding scheme, not encryption, meaning it can be easily reversed if the utility is available.

**Next Level Password:** `dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr`

---

### **Important Note on Passwords**

The passwords for OverTheWire levels are frequently updated or rotated. The password I found (**dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr**) is specific to this session. You must follow the steps above in your own terminal to retrieve the current active password for your own "Proof of Learning."

---

### **Key Takeaways**
* Base64 is a 6-bit encoding that makes binary data "safe" for transport over text-only protocols.
* Always use `base64 -d` when your goal is to read the original contents of an encoded file.