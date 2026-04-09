const siteData = {
    profile: {
        name: "Parin Arora",
        bio: "Cybersecurity enthusiast, Blue Teamer, and CTF player. Welcome to my digital notebook. These are my notes and writeups from various platforms.",
        skills: ["Log Analysis", "Homelab", "Network Analysis", "Cryptography", "SIEM", "Incident Response"]
    },
    latestWriteup: {
        name: "Introduction To Dark Web Operations",
        category: "Dark Web",
        platform: "Security Blue Team",
        linkTarget: "sbt"
    },
    writeups: {
        htb: [],
        tryhackme: [],
        overthewire: [],
        picoctf: [],
        homelab: [],
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
