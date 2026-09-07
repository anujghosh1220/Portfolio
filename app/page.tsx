import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BackgroundEffects from '@/components/BackgroundEffects';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Cybersecurity from '@/components/Cybersecurity';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import GitHubSection from '@/components/GitHubSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Cybersecurity />
        <Education />
        <Certifications />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
