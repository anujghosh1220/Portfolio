export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["Python", "C++", "Java", "JavaScript", "SQL", "PHP"]
  },
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"]
  },
  {
    category: "Backend",
    skills: ["Flask", "Node.js", "Core PHP"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "SQLite", "MongoDB"]
  },
  {
    category: "Tools",
    skills: ["Git", "Visual Studio Code"]
  },
  {
    category: "Cybersecurity",
    skills: ["Wireshark", "Nmap", "Burp Suite"]
  },
  {
    category: "Development Concepts",
    skills: [
      "Authentication",
      "Session Management",
      "Role-Based Access Control",
      "Input Validation",
      "Secure Coding",
      "CRUD",
      "Database Integration",
      "Debugging"
    ]
  }
];
