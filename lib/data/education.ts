export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

export const education: Education[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications",
    institution: "PES University",
    period: "Sep 2023 – Jul 2025"
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications",
    institution: "Siliguri Institute of Technology",
    period: "Mar 2020 – Jun 2023"
  }
];
