export interface Certification {
  id: string;
  title: string;
  issuer: string;
  skills?: string[];
}

export const certifications: Certification[] = [
  {
    id: "saviynt",
    title: "Saviynt Identity Security for AI Age",
    issuer: "Saviynt"
  },
  {
    id: "tinder-gdsc",
    title: "Tinder Clone",
    issuer: "Google Developer Student Clubs",
    skills: ["HTML", "CSS"]
  },
  {
    id: "tinder-mlsa",
    title: "Tinder Clone",
    issuer: "Microsoft Learn Student Ambassador",
    skills: ["HTML", "CSS"]
  }
];
