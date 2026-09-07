export interface SecurityArea {
  title: string;
  description: string;
}

export const securityAreas: SecurityArea[] = [
  {
    title: "Network Security & Monitoring",
    description: "Understanding network protocols, traffic analysis, and security monitoring techniques."
  },
  {
    title: "Vulnerability Assessment",
    description: "Identifying and evaluating security vulnerabilities in systems and applications."
  },
  {
    title: "Penetration Testing Concepts",
    description: "Knowledge of penetration testing methodologies and security assessment approaches."
  },
  {
    title: "Incident Response",
    description: "Understanding incident response procedures and security event handling."
  },
  {
    title: "Threat Analysis",
    description: "Analyzing potential security threats and implementing defensive measures."
  },
  {
    title: "Secure Coding",
    description: "Writing secure code with input validation, authentication, and access control."
  },
  {
    title: "Access Control",
    description: "Implementing role-based access control and permission management systems."
  }
];

export const securityTools = [
  {
    name: "Wireshark",
    description: "Network protocol analyzer for traffic monitoring and analysis"
  },
  {
    name: "Nmap",
    description: "Network discovery and security auditing tool"
  },
  {
    name: "Burp Suite",
    description: "Web application security testing platform"
  }
];
