const siteData = {
    profile: {
        name: "Parin Arora",
        bio: "Cybersecurity enthusiast, Blue Teamer, and CTF player. Welcome to my digital notebook. These are my notes and writeups from various platforms.",
        skills: ["Log Analysis", "Homelab", "Network Analysis", "Cryptography", "SIEM", "Incident Response"]
    },
    latestWriteup: {
        name: "DDoS Simulation",
        category: "Network Defense",
        platform: "Homelab",
        linkTarget: "homelab"
    },
    writeups: {
        htb: [],
        tryhackme: [],
        overthewire: [],
        picoctf: [],
        homelab: [
            {
                id: "homelab-cowrie",
                name: "Cowrie Honeypot Lab",
                difficulty: "Medium",
                category: "Network Defense",
                markdownFile: "content/homelab-cowrie.md"
            },
            {
                id: "homelab-ddos",
                name: "DDoS Simulation",
                difficulty: "Easy",
                category: "Network Defense",
                markdownFile: "content/homelab-ddos.md"
            }
        ],
        sbt: [
            {
                id: "sbt-intro-osint",
                name: "Introduction To OSINT",
                difficulty: "Easy",
                category: "OSINT",
                markdownFile: "content/sbt-intro-osint.md"
            },
            {
                id: "sbt-intro-darkweb",
                name: "Introduction To Dark Web Operations",
                difficulty: "Easy",
                category: "Dark Web",
                markdownFile: "content/sbt-intro-darkweb.md"
            }
        ]
    }
};
