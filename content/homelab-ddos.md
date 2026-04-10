# DDoS Simulation - Testing Writeup

## Objective
Simulate a volumetric HTTP flood attack on a local server and analyze the resulting network traffic using Wireshark to understand how DDoS attacks appear at the packet level.

## Environment
- **OS:** Kali Linux
- **Target:** Local Python HTTP server (`127.0.0.1:8080`)
- **Tools:** Python 3, Wireshark
- **Interface captured:** Loopback (lo)
- **For more info (Scripts):** [DDoS Simulation](https://github.com/Parin070/Security-Toolkit/tree/main/DDoS-Simulation)

## Setup

### Step 1 — Start the target server
```bash
python3 -m http.server 8080
```
![Server initiation](content/assets/homelab_ddos/server.png)

### Step 2 — Open Wireshark
- Selected the **lo (loopback)** interface
- Started capture before running the script

### Step 3 — Run the script
```bash
python3 ddos_script.py
```
- Target: `127.0.0.1`
- Port: `8080`

## Results

### Packet Flood
Packet count jumped from just ~24 packets to **155,000+ packets in just over 1 minute**.

![Packet count: 24](content/assets/homelab_ddos/initial.png)
![Packet count: 158501](content/assets/homelab_ddos/final.png)

### Traffic Analysis
- Massive spike in TCP connections visible in Wireshark
- Hundreds of simultaneous HTTP GET requests from 500 threads
- Server struggled to handle the volume of incoming connections

![Wireshark Analysis 02](content/assets/homelab_ddos/wireshark01.png)
![Wireshark Analysis 01](content/assets/homelab_ddos/wireshark02.png)

## Observations
- 500 threads generating continuous TCP connections created significant load almost instantly
- The spoofed Host header is visible in the HTTP request headers in Wireshark
- A real-world attack would use actual source IP spoofing at the network level — this script only spoofs at the application layer
- Basic rate limiting or a firewall rule would mitigate this type of attack easily

## Conclusion
Even a basic multithreaded script with no optimization can generate significant traffic volume on a local network. This demonstrates why rate limiting, connection throttling, and traffic filtering are essential defenses against volumetric attacks.