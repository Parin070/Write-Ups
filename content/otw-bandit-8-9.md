## Bandit: Level 8 → Level 9

### **Level Information**
**Goal:** Find the password for the next level stored in the file **data.txt** as the only line of text that occurs exactly once.

---

### **Commands Used**
```bash
# Log in to the server
ssh bandit8@bandit.labs.overthewire.org -p 2220

# Sort the data and filter for the unique line
cat data.txt | sort | uniq -u
```

---

### **Approach**
1.  **Logging In:** Accessed the level using the username `bandit8` and the password `dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc`.

2.  **The Challenge:** The file `data.txt` contains many lines of text, most of which are repeated multiple times. The goal is to find the one line that is unique.

3.  **The Solution:** I chained three commands together using pipes:
    * `cat data.txt`: Reads the file content.
    * `sort`: The `uniq` command only detects duplicate lines if they are adjacent (next to each other). Sorting the file ensures all identical lines are grouped together.
    * `uniq -u`: The `-u` (unique) flag tells the command to only print lines that appear exactly once in the input.

4.  **Discovery:** The combination of sorting and filtering revealed the single unique string.

---

### **Proof of Learning**
* **Command Chaining:** Used pipes (`|`) to create a data processing pipeline.

* **The `sort` Utility:** Learned that sorting is a prerequisite for many text-processing tools to function correctly.

* **The `uniq` Command:** Mastered the use of `uniq -u` to find non-repeating data entries within a large dataset.

**Next Level Password:** `4CKMh1JI91bUIZZPXDqGanal4xvAg0JM`

---

### **Important Note on Passwords**

The passwords for OverTheWire levels are frequently updated or rotated. The password I found (**4CKMh1JI91bUIZZPXDqGanal4xvAg0JM**) is specific to this session. You must follow the steps above in your own terminal to retrieve the current active password for your own "Proof of Learning."

---

### **Key Takeaways**
* `uniq` is a powerful tool for deduplication, but it **requires** the input to be sorted first.
* This technique is frequently used in log analysis to find outliers or rare events in a system.