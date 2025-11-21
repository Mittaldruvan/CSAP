const articles = [
    {
        id: 1,
        title: "Understanding Phishing Attacks",
        excerpt: "Learn to identify and protect yourself from phishing scams.",
        author: "Dr. Sarah Chen",
        role: "Cybersecurity Expert",
        date: "Nov 15, 2025",
        content: "Phishing attacks use fraudulent emails, messages, or websites to trick you into revealing sensitive information. Always verify sender's email, check for spelling errors, never click suspicious links, and contact organizations directly if unsure."
    },
    {
        id: 2,
        title: "The Importance of Two-Factor Authentication",
        excerpt: "Why 2FA is your best defense against unauthorized account access.",
        author: "Michael Rodriguez",
        role: "Security Analyst",
        date: "Nov 10, 2025",
        content: "Two-factor authentication adds an extra security layer requiring two forms of verification. Even if someone steals your password, they can't access without the second factor. Enable 2FA on email, banking, and social media accounts."
    },
    {
        id: 3,
        title: "Creating Strong Passwords: Best Practices",
        excerpt: "Master the art of creating unbreakable passwords.",
        author: "Emma Thompson",
        role: "IT Security Manager",
        date: "Nov 5, 2025",
        content: "Strong passwords need 12+ characters mixing uppercase, lowercase, numbers, and symbols. Never reuse passwords. Use password managers like LastPass or Bitwarden for secure storage and generation."
    },
    {
        id: 4,
        title: "Recognizing Social Engineering Tactics",
        excerpt: "How cybercriminals manipulate human psychology.",
        author: "James Wilson",
        role: "Cyber Threat Intelligence",
        date: "Oct 28, 2025",
        content: "Social engineering exploits psychology rather than technical vulnerabilities. Be skeptical of unsolicited requests, verify identities before sharing data, and never let pressure tactics rush your decisions."
    },
    {
        id: 5,
        title: "Securing Your Home Network",
        excerpt: "Essential steps to protect your home Wi-Fi.",
        author: "Lisa Anderson",
        role: "Network Security Specialist",
        date: "Oct 20, 2025",
        content: "Change default router passwords, use WPA3 encryption, create strong Wi-Fi passwords, disable WPS, keep firmware updated, and use VPN for additional security when browsing."
    },
    {
        id: 6,
        title: "Mobile Device Security Essentials",
        excerpt: "Protect your smartphone and tablet.",
        author: "David Park",
        role: "Mobile Security Researcher",
        date: "Oct 15, 2025",
        content: "Keep OS and apps updated, download from official stores, review permissions, enable encryption and biometrics, use security software, avoid public Wi-Fi, and backup data regularly."
    }
];

const quizQuestions = [
    {
        question: "What is phishing?",
        options: [
            "A type of fishing technique",
            "An attempt to steal sensitive information through fake communications",
            "A computer virus",
            "A firewall setting"
        ],
        correct: 1
    },
    {
        question: "What makes a strong password?",
        options: [
            "Using your name and birthday",
            "At least 12 characters with mixed case, numbers, and symbols",
            "A simple word that's easy to remember",
            "Using the same password everywhere"
        ],
        correct: 1
    },
    {
        question: "What does 2FA stand for?",
        options: [
            "Two-Factor Authentication",
            "Two-File Access",
            "Total Firewall Authorization",
            "Trusted Friend Access"
        ],
        correct: 0
    },
    {
        question: "What should you do if you receive a suspicious email?",
        options: [
            "Click all links to investigate",
            "Reply with your personal information",
            "Delete it and report it as phishing",
            "Forward it to all your contacts"
        ],
        correct: 2
    },
    {
        question: "Which is the most secure Wi-Fi encryption?",
        options: [
            "WEP",
            "WPA",
            "WPA2",
            "WPA3"
        ],
        correct: 3
    },
    {
        question: "What is social engineering?",
        options: [
            "Building software",
            "Manipulating people to reveal confidential information",
            "Designing social media platforms",
            "Network engineering"
        ],
        correct: 1
    },
    {
        question: "Should you use public Wi-Fi for banking?",
        options: [
            "Yes, always",
            "Only if it has a password",
            "No, it's not secure without a VPN",
            "Only on weekends"
        ],
        correct: 2
    },
    {
        question: "What is ransomware?",
        options: [
            "Free software",
            "Malware that encrypts your files and demands payment",
            "Antivirus software",
            "A type of browser"
        ],
        correct: 1
    },
    {
        question: "How often should you update your passwords?",
        options: [
            "Never",
            "Once a year",
            "Every 3-6 months or immediately if compromised",
            "Every day"
        ],
        correct: 2
    },
    {
        question: "What does HTTPS indicate?",
        options: [
            "The website is government-owned",
            "The connection is secure and encrypted",
            "The website is unsafe",
            "High-speed internet"
        ],
        correct: 1
    }
];
