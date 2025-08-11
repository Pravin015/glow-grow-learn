export type Module = {
  title: string;
  icon: string; // lucide icon key name we map in UI
};

export type Course = {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  modules: Module[];
  careers: string[];
};

export const courses: Course[] = [
  {
    slug: "master-in-cyber-security",
    name: "Master in Cyber Security",
    tagline: "From hacker mindset to defense expert",
    overview:
      "Master offensive and defensive security with real-world labs covering networks, apps, cloud and cryptography.",
    modules: [
      { title: "Ethical Hacking Basics", icon: "lock" },
      { title: "Network Scanning", icon: "globe" },
      { title: "Vulnerability Analysis", icon: "alert-triangle" },
      { title: "Malware & Threats", icon: "bug" },
      { title: "Social Engineering", icon: "user" },
      { title: "SQL Injection", icon: "terminal" },
      { title: "Cloud Security", icon: "cloud" },
      { title: "Cryptography", icon: "key" }
    ],
    careers: [
      "SOC Analyst",
      "Penetration Tester",
      "Security Consultant",
      "Incident Responder"
    ]
  },
  {
    slug: "advanced-diploma-in-cybersecurity",
    name: "Advanced Diploma in Cybersecurity",
    tagline: "Deep-dive into advanced security testing",
    overview:
      "Level up to advanced offensive techniques across web, API, and infrastructure with escalations and bypasses.",
    modules: [
      { title: "Penetration Testing", icon: "wrench" },
      { title: "Web App Security", icon: "globe" },
      { title: "API Security", icon: "link" },
      { title: "Advanced SQL Injection", icon: "terminal" },
      { title: "Host Header Injection", icon: "server" },
      { title: "Privilege Escalation", icon: "arrow-up-right" }
    ],
    careers: ["Web Security Engineer", "Application Security Analyst"]
  },
  {
    slug: "mobile-penetration-testing",
    name: "Mobile Penetration Testing",
    tagline: "Secure the apps in your pocket",
    overview:
      "Hands-on Android and iOS testing: reverse engineering, SSL pinning bypass, traffic capture and more.",
    modules: [
      { title: "Android Pen Testing", icon: "smartphone" },
      { title: "iOS Pen Testing", icon: "apple" },
      { title: "APK Decompiling", icon: "folder-open" },
      { title: "SSL Pinning Bypass", icon: "shield" },
      { title: "Traffic Capture", icon: "radio" }
    ],
    careers: ["Mobile Security Analyst", "App Security Tester"]
  },
  {
    slug: "api-pen-testing",
    name: "API Pen Testing",
    tagline: "Protecting the digital connections",
    overview:
      "Test REST/GraphQL endpoints for authz/authn flaws, injections and business-logic abuses.",
    modules: [
      { title: "API Fundamentals", icon: "book" },
      { title: "Enumeration", icon: "search" },
      { title: "Authorization Attacks", icon: "ban" },
      { title: "Authentication Attacks", icon: "key-round" },
      { title: "BOLA & BFLA", icon: "link-2" }
    ],
    careers: ["API Security Specialist", "Backend Security Analyst"]
  },
  {
    slug: "grc-governance-risk-compliance",
    name: "GRC (Governance, Risk & Compliance)",
    tagline: "Governance and compliance made simple",
    overview:
      "Learn frameworks, risk assessment, security awareness and incident processes to drive compliance.",
    modules: [
      { title: "Risk Management", icon: "bar-chart-3" },
      { title: "Compliance (ISO 27001, GDPR)", icon: "file-text" },
      { title: "Security Awareness", icon: "graduation-cap" },
      { title: "Incident Management", icon: "bell-ring" }
    ],
    careers: ["GRC Analyst", "Risk Manager", "Compliance Officer"]
  },
  {
    slug: "cyber-forensics",
    name: "Cyber Forensics",
    tagline: "Investigate and uncover digital evidence",
    overview:
      "Acquire and analyze evidence across endpoints, cloud and dark web with chain-of-custody best practices.",
    modules: [
      { title: "Windows Forensics", icon: "laptop" },
      { title: "Linux/Mac Forensics", icon: "laptop" },
      { title: "Cloud Forensics", icon: "cloud" },
      { title: "Dark Web Investigation", icon: "search" },
      { title: "Email & Database Forensics", icon: "inbox" }
    ],
    careers: ["Forensic Investigator", "Incident Response Specialist"]
  },
  {
    slug: "certified-bug-bounty-hunter",
    name: "Certified Bug Bounty Hunter",
    tagline: "Hunt vulnerabilities, earn rewards",
    overview:
      "Master reconnaissance to exploitation workflows, reporting, and bounty program strategies.",
    modules: [
      { title: "Bug Bounty Basics", icon: "trophy" },
      { title: "Reconnaissance", icon: "binoculars" },
      { title: "CSRF & SSRF", icon: "globe" },
      { title: "RCE & Injection Attacks", icon: "code" }
    ],
    careers: ["Bug Bounty Researcher", "Vulnerability Analyst"]
  },
  {
    slug: "soc-analyst",
    name: "SOC Analyst",
    tagline: "Defend enterprises from cyber threats",
    overview:
      "Operate SIEMs, parse logs, triage alerts, and produce threat intel in realistic blue-team scenarios.",
    modules: [
      { title: "SOC Operations", icon: "building" },
      { title: "Linux Fundamentals", icon: "laptop" },
      { title: "SIEM & Splunk", icon: "bar-chart-3" },
      { title: "Log Parsing", icon: "file-text" },
      { title: "Alert Management", icon: "bell-ring" }
    ],
    careers: ["SOC Analyst", "Threat Intelligence Analyst"]
  },
  {
    slug: "full-stack-development-java",
    name: "Full Stack Development – Java",
    tagline: "End-to-end Java development mastery",
    overview:
      "Build robust web apps with modern frontends, RESTful services, SQL and cloud deployment.",
    modules: [
      { title: "HTML, CSS, JS", icon: "code" },
      { title: "React", icon: "code" },
      { title: "SQL & Databases", icon: "database" },
      { title: "Java & Spring Boot", icon: "server" },
      { title: "AWS & Cloud", icon: "cloud" }
    ],
    careers: ["Full Stack Developer", "Java Backend Engineer"]
  },
  {
    slug: "full-stack-development-python-django",
    name: "Full Stack Development – Python (Django)",
    tagline: "Python-powered full stack apps",
    overview:
      "Deliver modern products using React, Django, relational databases and cloud services.",
    modules: [
      { title: "HTML, CSS, JS", icon: "code" },
      { title: "React", icon: "code" },
      { title: "SQL & Databases", icon: "database" },
      { title: "Python & Django", icon: "code" },
      { title: "AWS & Cloud", icon: "cloud" }
    ],
    careers: ["Python Developer", "Django Full Stack Engineer"]
  },
  {
    slug: "data-science-analytics-ai",
    name: "Data Science & Analytics with AI",
    tagline: "Turn data into powerful insights",
    overview:
      "Analyze data, build ML models, and deploy AI solutions with modern Python tooling.",
    modules: [
      { title: "Excel & Power BI", icon: "bar-chart-3" },
      { title: "SQL & Databases", icon: "database" },
      { title: "Python for Data", icon: "code" },
      { title: "Machine Learning", icon: "brain" },
      { title: "AI & NLP", icon: "message-square" }
    ],
    careers: ["Data Scientist", "AI Engineer", "Business Analyst"]
  },
  {
    slug: "devops-with-aws",
    name: "DevOps with AWS",
    tagline: "Automate and optimize development workflows",
    overview:
      "Automate CI/CD, container orchestration and infra-as-code while deploying on AWS.",
    modules: [
      { title: "Jenkins CI/CD", icon: "settings" },
      { title: "Docker", icon: "ship" },
      { title: "Kubernetes", icon: "boxes" },
      { title: "Terraform & Ansible", icon: "scroll" },
      { title: "AWS Cloud", icon: "cloud" }
    ],
    careers: ["DevOps Engineer", "Cloud Infrastructure Specialist"]
  },
  {
    slug: "masters-in-cybersecurity-ccna-track",
    name: "Masters in Cybersecurity (CCNA Track)",
    tagline: "Networking and security expertise combined",
    overview:
      "Build strong networking fundamentals and security skills mapped to CCNA objectives.",
    modules: [
      { title: "Network Fundamentals", icon: "globe" },
      { title: "IP Services", icon: "radio" },
      { title: "Security Fundamentals", icon: "shield" },
      { title: "CCNA Certification Prep", icon: "book-open" }
    ],
    careers: ["Network Security Engineer", "CCNA Specialist"]
  }
];

export const courseMap = Object.fromEntries(courses.map((c) => [c.slug, c]));

export const getAllCourses = () => courses;
