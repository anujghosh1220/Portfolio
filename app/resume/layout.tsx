import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anuj Ghosh | Resume",
  description: "Resume of Anuj Ghosh, Software Development Engineer and Full-Stack Developer specializing in Python, JavaScript, React.js, Node.js and secure web application development.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
