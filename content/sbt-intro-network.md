# HTB Sherlock: Alexis

## Case Study: Internal Network Traffic Analysis

**Target Environment:** Alexis Fictional Cybersecurity Internal Network

## Mission Objective
An attacker gained unauthorized physical access to the Alexis premises, connecting a rogue laptop to an internal switch port. My objective was to analyze the captured network traffic to identify the attacker's hardware signature, determine the nature of the interception attack, extract sensitive employee data exfiltrated via insecure protocols, and recover the Domain Administrator's SSH credentials.

---

### **⚠️ Disclaimer & Technical Setup**
**Legal Notice:** This investigation was conducted for educational purposes within a controlled legal environment. 
**Technical Stack:** Traffic analysis was performed using **Wireshark** on a **Kali Linux VM** to dissect packet hierarchies and follow TCP streams.

![Starting Wireshark analysis](content/assets/sbt_network/starting-wireshark-analysis.png)

---

## Phase 1: Attacker Identification & MAC Discovery
The investigation began by identifying the hardware signature of the rogue device connected to the switch. By analyzing the initial packets in the capture, I was able to isolate the attacker's unique identifier.

* **Attacker MAC Address:** `08:00:27:3d:27:5d`

![Identifying the attacker MAC address](content/assets/sbt_network/attacker-mac-address.png)

---

## Phase 2: Protocol Hierarchy & Attack Vector Analysis
Using Wireshark’s **Protocol Hierarchy Statistics**, I noticed a significant presence of the **FTP** protocol. The nature of the traffic indicated that the attacker was successfully intercepting communications between the central server and other hosts.

* **Attack Type:** **Man In The Middle (MITM)**
* **Protocol Observed:** File Transfer Protocol (FTP)

![Analyzing protocol hierarchy](content/assets/sbt_network/protocol-hierarchy.png)
![Isolating FTP traffic packets](content/assets/sbt_network/isolating-ftp-traffic.png)

---

## Phase 3: Data Exfiltration & File Extraction
By following the **TCP Stream** of the FTP traffic, I located the specific file being transferred from the central server. The attacker managed to exfiltrate a comprehensive list of corporate personnel data.

* **Exfiltrated File:** `Alevis_Employee_Information_Chart.csv`

![Following the TCP stream for file extraction](content/assets/sbt_network/tcp-stream-file-extraction.png)

---

## Phase 4: OSINT & Internal Personnel Mapping
I utilized the **Find** feature within the intercepted TCP streams to search for specific high-value employees. By analyzing the internal CSV data, I mapped the organizational structure of the target company.

* **Target:** Borden Danilevich
* **Result:** Identified as a member of the **Sales** department.

![Searching for personnel data](content/assets/sbt_network/searching-personnel-data.png)
![Confirming department placement](content/assets/sbt_network/confirming-department.png)

---

## Phase 5: Credential Harvesting
The final stage of the investigation focused on the attacker's primary goal: collecting SSH credentials for the central server. By searching for "Domain Admin" within the captured streams, I recovered the plaintext password for the highest-privileged account on the network.

* **Credential Recovered:** `gMR<4eXf]e6W`

![Recovering the Domain Admin SSH password](content/assets/sbt_network/domain-admin-ssh-password.png)

---

## Final Intelligence Report (Q&A)

| # | Question | Answer |
| :--- | :--- | :--- |
| **1** | **What is the MAC address of the attacker?** | `08:00:27:3d:27:5d` |
| **2** | **What is the type of attack which is taking place that allows the attacker to listen in on conversations between the central server and another host?** | Man In The Middle |
| **3** | **What is the file which was downloaded from the central server?** | `Alevis_Employee_Information_Chart.csv` |
| **4** | **What department does Borden Danilevich work in?** | Sales |
| **5** | **What is the SSH password of the Domain Administrator?** | `gMR<4eXf]e6W` |

---
**Mission Outcome:** Attacker signature identified and full data exfiltration chain reconstructed. All compromised credentials and personnel data have been documented for corporate remediation.