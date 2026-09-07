import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anuj Ghosh | Software Development Engineer & Full-Stack Developer",
  description: "Portfolio of Anuj Ghosh, a Software Development Engineer and Full-Stack Developer specializing in Python, JavaScript, React.js, Node.js, backend development and secure web applications.",
  keywords: ["Software Development Engineer", "Full-Stack Developer", "Python", "React.js", "Node.js", "Web Development", "Cybersecurity"],
  authors: [{ name: "Anuj Ghosh" }],
  openGraph: {
    title: "Anuj Ghosh | Software Development Engineer & Full-Stack Developer",
    description: "Portfolio of Anuj Ghosh, a Software Development Engineer and Full-Stack Developer specializing in Python, JavaScript, React.js, Node.js, backend development and secure web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuj Ghosh | Software Development Engineer & Full-Stack Developer",
    description: "Portfolio of Anuj Ghosh, a Software Development Engineer and Full-Stack Developer specializing in Python, JavaScript, React.js, Node.js, backend development and secure web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
