export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features: string[];
  engineering?: string[];
  github?: string;
  liveDemo?: string;
  problem?: string;
  solution?: string;
  developmentNotes?: string;
  security?: string[];
}

export const projects: Project[] = [
  {
    id: "draping-threads",
    title: "Draping Threads",
    description: "Tailoring Management System",
    longDescription: "A comprehensive tailoring management system designed to streamline business operations for tailoring businesses.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Bootstrap", "SQLite/MySQL"],
    features: [
      "Customer management",
      "Order tracking",
      "Measurement handling",
      "Pattern generation",
      "PDF invoicing"
    ],
    engineering: [
      "Authentication",
      "Sessions",
      "Input validation",
      "Middleware",
      "Role-based access control",
      "Database integration"
    ],
    github: "https://github.com/anujghosh1220"
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    description: "Complete restaurant operations management platform",
    longDescription: "A full-featured restaurant management system handling menu management, orders, payments, and reporting.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Bootstrap", "SQLite/MySQL"],
    features: [
      "Menu CRUD operations",
      "GST calculation",
      "Discount engine",
      "Shopping cart",
      "Checkout process",
      "UPI/Card/COD payment workflows",
      "Order tracking",
      "Revenue reporting"
    ],
    engineering: [
      "Authentication",
      "Session management",
      "Input validation",
      "Database design",
      "Payment integration workflows"
    ],
    github: "https://github.com/anujghosh1220"
  },
  {
    id: "real-time-auction",
    title: "Real-Time Auction with Predictive Bidding",
    description: "Dynamic auction platform with intelligent bidding algorithms",
    longDescription: "A real-time auction system featuring predictive bidding algorithms and dynamic monitoring capabilities.",
    technologies: ["React.js", "Node.js", "MongoDB", "JavaScript"],
    features: [
      "Real-time auction flow",
      "Predictive bidding algorithm",
      "Dynamic monitoring",
      "Access control"
    ],
    engineering: [
      "Secure coding principles",
      "Real-time data handling",
      "Access control implementation",
      "Algorithm design"
    ],
    github: "https://github.com/anujghosh1220"
  },
  {
    id: "quotext",
    title: "Quotext",
    description: "Quotes & Chatting Web Application",
    longDescription: "A web application for sharing inspirational quotes with real-time chat functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Inspirational quote sharing",
      "Real-time chat functionality",
      "Authentication",
      "Frontend validation"
    ],
    engineering: [
      "Basic security measures",
      "Frontend validation",
      "Authentication implementation"
    ],
    github: "https://github.com/anujghosh1220"
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description: "Task management application with CRUD operations",
    longDescription: "A task management application built with PHP for efficient task organization and tracking.",
    technologies: ["Core PHP", "MySQL", "MySQLi"],
    features: [
      "Create tasks",
      "Edit tasks",
      "Update tasks",
      "Delete tasks",
      "Status management",
      "Organized task listing"
    ],
    engineering: [
      "Backend validation",
      "Secure input processing",
      "Database operations",
      "CRUD implementation"
    ],
    github: "https://github.com/anujghosh1220"
  }
];
