## Bandit: Level 11 → Level 12

### **Level Information**
**Goal:** Find the password for the next level stored in **data.txt**, where all lowercase (a-z) and uppercase (A-Z) letters have been rotated by 13 positions.

---

### **Commands Used**
```bash
# Log in to the server
ssh bandit11@bandit.labs.overthewire.org -p 2220

# Use the tr command to shift the alphabet by 13 places (ROT13)
cat data.txt | tr "[a-zA-Z]" "[n-za-mN-ZA-M]"
```

---

### **Approach**
1.  **Logging In:** Accessed the level using the username `bandit11` and the password `dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr`.

2.  **Identifying the Cipher:** The level description implies a **ROT13** (Rotate by 13) substitution cipher. In this cipher, 'A' becomes 'N', 'B' becomes 'O', and so on.

3.  **The Solution:** I used the `tr` (translate) command. 
    * The first set `[a-zA-Z]` defines the input range (the standard alphabet).
    * The second set `[n-za-mN-ZA-M]` defines what each letter should map to. By starting the second set at 'n' (the 14th letter), the command effectively shifts every letter by 13.

4.  **Discovery:** Piping the content of `data.txt` through this transformation un-scrambled the text and revealed the password.

---

### **Proof of Learning**
* **The `tr` Command:** Mastered the use of `tr` for character-level transformation and substitution.

* **ROT13 Basics:** Understood the mechanics of a simple Caesar cipher where the alphabet is rotated by a fixed number of positions.

* **Character Mapping:** Learned how to define custom ranges in the shell to manipulate text data without needing a dedicated decryption tool.

**Next Level Password:** `7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4`

---

### **Important Note on Passwords**

The passwords for OverTheWire levels are frequently updated or rotated. The password I found (**7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4**) is specific to this session. You must follow the steps above in your own terminal to retrieve the current active password for your own "Proof of Learning."

---

### **Key Takeaways**
* ROT13 is a self-inverse cipher; running the same transformation twice returns the original text.
* The `tr` command is perfect for simple character swaps but cannot handle multi-character strings or complex logic.