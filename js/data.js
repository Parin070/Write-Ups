const siteData = {
    profile: {
        name: "Parin Arora",
        bio: "Cybersecurity enthusiast, Blue Teamer, and CTF player. Welcome to my digital notebook. These are my notes and writeups from various platforms.",
        skills: ["Log Analysis", "Homelab", "Network Analysis", "Cryptography", "SIEM", "Incident Response"]
    },
    latestWriteup: {
        name: "Bandit",
        category: "Linux",
        platform: "OverTheWire",
        linkTarget: "overthewire"
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
        overthewire: {
            bandit: [
                { id: "otw-bandit-0-1", name: "Level 0 -> Level 1", difficulty: "Very Easy", category: "Linux", markdownFile: "content/otw-bandit-0-1.md" },
                { id: "otw-bandit-1-2", name: "Level 1 -> Level 2", difficulty: "Very Easy", category: "Linux", markdownFile: "content/otw-bandit-1-2.md" },
                { id: "otw-bandit-2-3", name: "Level 2 -> Level 3", difficulty: "Very Easy", category: "Linux", markdownFile: "content/otw-bandit-2-3.md" },
                { id: "otw-bandit-3-4", name: "Level 3 -> Level 4", difficulty: "Very Easy", category: "Linux", markdownFile: "content/otw-bandit-3-4.md" },
                { id: "otw-bandit-4-5", name: "Level 4 -> Level 5", difficulty: "Very Easy", category: "Linux", markdownFile: "content/otw-bandit-4-5.md" },
                { id: "otw-bandit-5-6", name: "Level 5 -> Level 6", difficulty: "Very Easy", category: "Linux", markdownFile: "content/otw-bandit-5-6.md" },
                { id: "otw-bandit-6-7", name: "Level 6 -> Level 7", difficulty: "Very Easy", category: "Linux", markdownFile: "content/otw-bandit-6-7.md" },
                { id: "otw-bandit-7-8", name: "Level 7 -> Level 8", difficulty: "Very Easy", category: "Linux", markdownFile: "content/otw-bandit-7-8.md" },
                { id: "otw-bandit-8-9", name: "Level 8 -> Level 9", difficulty: "Very Easy", category: "Linux", markdownFile: "content/otw-bandit-8-9.md" },
                { id: "otw-bandit-9-10", name: "Level 9 -> Level 10", difficulty: "Very Easy", category: "Linux", markdownFile: "content/otw-bandit-9-10.md" }
            ]
        },
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
