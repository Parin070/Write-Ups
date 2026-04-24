## Bandit: Level 14 → Level 15

### **Level Information**
**Goal:** Submit the current password to port **30000** on **localhost** to retrieve the password for Level 15.

---

### **Commands Used**
```bash
# Send the current password to the listener on port 30000
echo "MU4VWeTyJk8ROof1qqmcBPaLh7lDCPvS" | nc localhost 30000
```

---

### **Approach**
1.  **Service Interaction:** The password for Level 15 is not stored in a file; it is held by a network service listening on the server.

2.  **Using Netcat:** I used `nc` (Netcat) to establish a TCP connection to `localhost` (the server itself) on port `30000`.

3.  **Piping Input:** By piping the current password into the `nc` command, I provided the required "handshake" string the service was looking for.

4.  **Verification:** The service responded with "Correct!" and printed the password for the next level.

---

### **Proof of Learning**
* **Network Communication:** Practiced sending data to a specific network socket using the command line.

* **Standard Input/Output:** Used the pipe (`|`) to direct the output of `echo` into the input of a network utility.

* **Localhost Utilities:** Reinforced that `localhost` (or `127.0.0.1`) refers to the machine you are currently logged into.

**Next Level Password:** `8xCjnmgoKbGLhHFAZlGE5Tmu4M2tKJQo`

---

### **Key Takeaways**
* `nc` is the standard tool for interacting with raw network ports when no specialized client is available.
* Network-based challenges require precise input; the "Correct!" message confirms the service received the exact string expected.