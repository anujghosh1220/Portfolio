'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MotionConfig, motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  FaArrowDown,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaShieldHalved,
  FaArrowUp,
} from 'react-icons/fa6';
import { personalInfo } from '@/lib/data/personal';
import { experiences } from '@/lib/data/experience';
import { projects } from '@/lib/data/projects';
import { skillCategories } from '@/lib/data/skills';
import { securityAreas, securityTools } from '@/lib/data/cybersecurity';
import { education } from '@/lib/data/education';
import { certifications } from '@/lib/data/certifications';
import { useReducedMotion } from './animations';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Contact', href: '#contact' },
];

const toolkitLabels: Record<string, string> = {
  Programming: 'Languages',
  Frontend: 'Frontend',
  Backend: 'Backend',
  Databases: 'Data systems',
  Tools: 'Tools & infrastructure',
  Cybersecurity: 'Security',
  'Development Concepts': 'Engineering practice',
};

export default function PrecisionPortfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 900], [0, prefersReducedMotion ? 0 : 30]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const sections = navItems.map((item) => document.querySelector(item.href));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0.1, 0.35, 0.7] });
    sections.forEach((section) => section && observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
    <div className="precision-site">
      <div className="precision-rail" aria-hidden="true"><span>PRECISION</span><i /></div>
      <header className={`precision-nav ${isScrolled ? 'is-scrolled' : ''}`}>
        <Link href="#home" className="precision-mark" aria-label="Back to home">
          <span>AG</span>
          <small>Software / 01</small>
        </Link>
        <nav aria-label="Primary navigation" className="precision-nav-links">
          {navItems.map((item) => (
            <Link className={activeSection === item.href.slice(1) ? 'is-active' : ''} href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>
        <Link href="/resume" className="precision-nav-cta">Resume <FaArrowUpRightFromSquare size={11} /></Link>
      </header>

      <main>
        <section id="home" className="precision-hero precision-shell">
          <div className="hero-copy">
            <motion.p className="eyebrow" initial="hidden" animate="visible" variants={reveal}>
              <span className="eyebrow-rule" /> Software engineered with precision
            </motion.p>
            <motion.h1 initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.08 }}>
              ANUJ<br /><em>GHOSH</em>
            </motion.h1>
            <motion.p className="hero-role" initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.16 }}>
              Software Engineer <span>·</span> AI Builder <span>·</span> Problem Solver
            </motion.p>
            <motion.p className="hero-intro" initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.24 }}>
              I build practical software, intelligent workflows, and full-stack systems that turn complex problems into clear, dependable products.
            </motion.p>
            <motion.div className="hero-actions" initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.32 }}>
              <Link href="#projects" className="precision-button precision-button-primary">Explore the work <FaArrowRight size={13} /></Link>
              <Link href="#contact" className="precision-button precision-button-quiet">Start a conversation</Link>
            </motion.div>
            <motion.div className="hero-meta" initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.4 }}>
              <span><FaLocationDot size={12} /> {personalInfo.location}</span>
              <span className="meta-status"><i /> Open to opportunities</span>
            </motion.div>
          </div>

          <motion.div className="hero-portrait-wrap" style={{ y: portraitY }} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15 }}>
            <div className="hero-portrait-frame">
              <Image
                src="/images/Anuj_Ghosh.webp"
                alt="Anuj Ghosh in a black suit holding a katana"
                fill
                priority
                sizes="(max-width: 900px) 92vw, 52vw"
                className="hero-portrait"
              />
              <div className="portrait-shade" />
              <div className="portrait-caption"><span>01</span><Image src="/images/Anuj Ghosh Signature.png" alt="Anuj Ghosh signature" width={180} height={48} className="portrait-signature" /></div>
            </div>
            <div className="hero-coordinate coordinate-top">26.7271° N / 88.3953° E</div>
            <div className="hero-coordinate coordinate-bottom">BUILD / SECURE / IMPROVE</div>
            <span className="hero-crosshair crosshair-one" /><span className="hero-crosshair crosshair-two" />
          </motion.div>
          <Link href="#about" className="hero-scroll" aria-label="Scroll to about section"><span>Scroll to explore</span><FaArrowDown size={12} /></Link>
        </section>

        <section className="precision-proof precision-shell" aria-label="Engineering focus">
          <div><strong>01</strong><span>Full-stack systems</span></div>
          <div><strong>02</strong><span>AI & automation</span></div>
          <div><strong>03</strong><span>Security-minded delivery</span></div>
          <div><strong>04</strong><span>Quietly obsessive craft</span></div>
        </section>

        <section id="about" className="precision-section precision-shell">
          <SectionIntro index="01" label="The approach" title="Every system should be intentional." />
          <div className="about-grid">
            <motion.div className="about-lead" whileInView="visible" initial="hidden" viewport={{ once: true, margin: '-80px' }} variants={reveal}>
              <p className="display-copy">I care about the space between an idea and the moment it becomes useful.</p>
              <p className="body-copy">As a Software Development Engineer and full-stack developer, I work across frontend, backend, databases, and secure application flows. My focus is practical: understand the problem, make the system legible, and ship something people can rely on.</p>
            </motion.div>
            <motion.div className="about-notes" whileInView="visible" initial="hidden" viewport={{ once: true, margin: '-80px' }} variants={reveal}>
              <div className="note-line"><span>Focus</span><strong>{personalInfo.focus}</strong></div>
              <div className="note-line"><span>Primary stack</span><strong>{personalInfo.primaryLanguages}</strong></div>
              <div className="note-line"><span>Working principle</span><strong>Clarity before complexity.</strong></div>
              <div className="note-line"><span>Interests</span><strong>{personalInfo.interests.join(' / ')}</strong></div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="precision-section precision-shell section-muted">
          <SectionIntro index="02" label="Selected experience" title="A record of deliberate execution." />
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <motion.article className="experience-row" key={experience.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={reveal} transition={{ delay: index * 0.08 }} whileHover={{ x: prefersReducedMotion ? 0 : 5 }}>
                <div className="experience-index">0{index + 1}</div>
                <div className="experience-period">{experience.period}</div>
                <div className="experience-main">
                  <div className="experience-heading"><h3>{experience.title}</h3>{experience.current && <span className="current-label">Current</span>}</div>
                  <p className="experience-company">{experience.company}{experience.location ? ` / ${experience.location}` : ''}</p>
                  <ul>{experience.responsibilities.slice(0, 4).map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>
                </div>
                <div className="experience-tech">{experience.technologies?.map((technology) => <span key={technology}>{technology}</span>)}</div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="precision-section precision-shell">
          <SectionIntro index="03" label="Engineered projects" title="Useful things, built to hold up." />
          <div className="project-list">
            {projects.map((project, index) => (
              <motion.article className="project-row" key={project.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={reveal} transition={{ delay: index * 0.06 }} whileHover={{ x: prefersReducedMotion ? 0 : 5 }}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-content">
                  <div className="project-heading"><h3>{project.title}</h3><FaArrowUpRightFromSquare size={15} /></div>
                  <p>{project.longDescription || project.description}</p>
                  {project.problem && <p className="project-problem"><span>Problem</span>{project.problem}</p>}
                  <div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                  <details className="project-details"><summary>View engineering details</summary><ul>{(project.engineering || project.features).slice(0, 5).map((feature) => <li key={feature}>{feature}</li>)}</ul></details>
                </div>
                <div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer"><FaGithub size={15} /> Source</a>}{project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noreferrer"><FaArrowUpRightFromSquare size={13} /> Live</a>}</div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="toolkit" className="precision-section precision-shell section-muted">
          <SectionIntro index="04" label="Technical toolkit" title="The tools change. The standard stays." />
          <div className="toolkit-grid">
            {skillCategories.map((category, index) => (
              <motion.article className="toolkit-item" key={category.category} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={reveal} transition={{ delay: index * 0.05 }} whileHover={{ y: prefersReducedMotion ? 0 : -4 }}>
                <div className="toolkit-top"><span>0{index + 1}</span><FaCode size={14} /></div>
                <h3>{toolkitLabels[category.category] || category.category}</h3>
                <div className="toolkit-tags">{category.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </motion.article>
            ))}
          </div>
          <div className="security-note"><FaShieldHalved size={18} /><div><span>Security-minded by default</span><p>{securityAreas.slice(0, 3).map((area) => area.title).join(' / ')}. Tools include {securityTools.map((tool) => tool.name).join(', ')}.</p></div></div>
        </section>

        <section className="precision-section precision-shell credentials-section">
          <div className="credentials-column"><SectionIntro index="05" label="Education" title="Foundations that keep compounding." />{education.map((item) => <div className="credential-row" key={item.id}><span>{item.period}</span><div><strong>{item.degree}</strong><small>{item.institution}</small></div></div>)}</div>
          <div className="credentials-column"><SectionIntro index="06" label="Certifications" title="Curiosity, made concrete." />{certifications.map((item) => <div className="credential-row" key={item.id}><span>Verified</span><div><strong>{item.title}</strong><small>{item.issuer}</small></div></div>)}</div>
        </section>

        <section id="contact" className="contact-section precision-shell">
          <div className="contact-line" />
          <div className="contact-content"><p className="eyebrow"><span className="eyebrow-rule" /> Final pass</p><h2>Ready to build<br /><em>something precise?</em></h2><p>For roles, collaborations, or a difficult problem worth untangling, I would like to hear from you.</p><div className="contact-actions"><a className="precision-button precision-button-primary" href={`mailto:${personalInfo.email}`}>Send an email <FaEnvelope size={13} /></a><Link className="precision-button precision-button-quiet" href="/resume">View resume <FaArrowRight size={13} /></Link></div></div>
          <div className="contact-links"><a href={personalInfo.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a><a href={personalInfo.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a><a href={`mailto:${personalInfo.email}`}><FaEnvelope /> {personalInfo.email}</a></div>
        </section>
      </main>

      <footer className="precision-footer precision-shell"><span>© {new Date().getFullYear()} Anuj Ghosh</span><span>Designed & engineered with precision.</span><Link href="#home"><FaArrowUp size={12} /> Top</Link></footer>
    </div>
    </MotionConfig>
  );
}

function SectionIntro({ index, label, title }: { index: string; label: string; title: string }) {
  return <motion.div className="section-intro" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={reveal}><div className="section-label"><span>{index}</span>{label}</div><h2>{title}</h2></motion.div>;
}
