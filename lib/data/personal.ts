export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  rotatingTitles: string[];
  location: string;
  email: string;
  github: string;
  linkedin: string;
  focus: string;
  currentRole: string;
  primaryLanguages: string;
  interests: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Anuj Ghosh",
  title: "Software Development Engineer",
  subtitle: "Full-Stack Developer",
  tagline: "Building secure, scalable and user-focused web applications.",
  rotatingTitles: [
    "Software Development Engineer",
    "Full-Stack Developer",
    "Python Developer",
    "Web Application Builder",
    "Security-Minded Engineer"
  ],
  location: "Siliguri, West Bengal, India",
  email: "anujghosh588@gmail.com",
  github: "https://github.com/anujghosh1220",
  linkedin: "https://www.linkedin.com/in/anuj-ghosh-416964239",
  focus: "Full-Stack Development",
  currentRole: "Software Development Engineer I",
  primaryLanguages: "Python / JavaScript",
  interests: [
    "Software Engineering",
    "Web Development",
    "Cybersecurity"
  ]
};
