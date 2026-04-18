const siteData = {
    profile: {
        name: "Parin Arora",
        bio: "Cybersecurity enthusiast, Blue Teamer, and CTF player. Welcome to my digital notebook. These are my notes and writeups from various platforms.",
        skills: ["Log Analysis", "Homelab", "Network Analysis", "Cryptography", "SIEM", "Incident Response"]
    },
    latestWriteup: {
        name: "Introduction to Digital Forensics",
        category: "DFIR",
        platform: "Security Blue Team",
        linkTarget: "sbt"
    },
    writeups: {
        htb: {
            challenges: [],
            machines: [],
            sherlocks: [
                {
                    id: "htb-brutus",
                    name: "Brutus",
                    difficulty: "Very Easy",
                    category: "DFIR",
                    markdownFile: "content/htb-sherlocks-brutus.md"
                }
            ]
        },
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
            },
            {
                id: "sbt-intro-network",
                name: "Introduction to Network Analysis",
                difficulty: "Easy",
                category: "Network Analysis",
                markdownFile: "content/sbt-intro-network.md"
            },
            {
                id: "sbt-intro-forensics",
                name: "Introduction to Digital Forensics",
                difficulty: "Easy",
                category: "DFIR",
                markdownFile: "content/sbt-intro-forensics.md"
            }
        ]
    }
};
