## Bandit: Level 13 → Level 14

### **Level Information**
**Goal:** Use the private SSH key found in the `bandit13` home directory to log in as user **bandit14** and retrieve the password from the system files.

---

### **Commands Used**
```bash
# Log in to Level 14 using the private key
ssh -i sshkey.private bandit14@localhost -p 2220

# Retrieve the actual password for the next level from the system path
cat /etc/bandit_pass/bandit14
```

---

### **Approach**
1.  **Direct Login:** Used the provided RSA private key (`sshkey.private`) with the `-i` flag to authenticate. This allowed access to the `bandit14` account without needing a password string for the initial login.

2.  **Path Retrieval:** Navigated to the absolute path `/etc/bandit_pass/bandit14`. 

3.  **Extraction:** Used `cat` to read the file. Since I was successfully logged in as `bandit14`, I had the necessary permissions to view this protected file.

---

### **Proof of Learning**
* **Identity-Based Access:** Confirmed that SSH keys act as a digital "passcard," bypassing interactive password prompts.

* **Absolute Paths:** Used the direct system path `/etc/bandit_pass/` to locate level credentials.

* **Linux Permissions:** Verified that level passwords on this server are owned by their respective users, requiring a successful identity switch (via SSH key in this case) to read them.

**Next Level Password:** `MU4VWeTyJk8ROof1qqmcBPaLh7lDCPvS`

---

### **Key Takeaways**
* Logging in with a key and then `cat`-ing the password file is a common pattern for privilege escalation levels in OverTheWire.
* The file in `/etc/bandit_pass/` is the authoritative source for the next level's credentials.