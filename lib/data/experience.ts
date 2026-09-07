export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  period: string;
  responsibilities: string[];
  technologies?: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "sde-vayunex",
    title: "Software Development Engineer I",
    company: "Vayunex Technologies",
    period: "2026 – Present",
    current: true,
    responsibilities: [
      "Feature development",
      "Writing clean, maintainable and efficient code",
      "Testing and debugging",
      "Manual testing and software reliability",
      "Daily engineering collaboration",
      "Sprint planning",
      "Peer code reviews",
      "Troubleshooting production issues",
      "Identifying bottlenecks and fixing bugs"
    ]
  },
  {
    id: "fullstack-intern",
    title: "Full Stack Developer Intern",
    company: "Aditya Maheshwari & Co.",
    location: "Siliguri, India",
    period: "Aug 2025 – Feb 2026",
    responsibilities: [
      "Developed Draping Threads tailoring management system",
      "Built Restaurant Management System",
      "Implemented authentication and session management",
      "Created input validation and middleware",
      "Developed role-based access control",
      "Built complete frontend, backend and database solutions"
    ],
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Bootstrap", "SQLite/MySQL"]
  }
];
