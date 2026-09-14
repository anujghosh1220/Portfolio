import { personalInfo } from '@/lib/data/personal';
import { experiences } from '@/lib/data/experience';
import { skillCategories } from '@/lib/data/skills';
import { education } from '@/lib/data/education';
import { certifications } from '@/lib/data/certifications';
import { projects } from '@/lib/data/projects';

const skillLabels: Record<string, string> = {
  Programming: 'Languages',
  Frontend: 'Frontend',
  Backend: 'Backend',
  Databases: 'Databases',
  Tools: 'Tools & platforms',
  Cybersecurity: 'Security',
  'Development Concepts': 'Engineering practice',
};

export default function ResumeDocument() {
  return (
    <article className="resume-document" aria-label="Anuj Ghosh resume">
      <header className="resume-header">
        <div>
          <p className="resume-kicker">Software / Engineering profile</p>
          <h1>{personalInfo.name.toUpperCase()}</h1>
          <p className="resume-title">Software Development Engineer · Full-Stack Developer</p>
        </div>
        <div className="resume-contact">
          <span>{personalInfo.location}</span>
          <span>+91 76798 85140</span>
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          <a href={personalInfo.github}>github.com/anujghosh1220</a>
          <a href={personalInfo.linkedin}>linkedin.com/in/anuj-ghosh-416964239</a>
        </div>
        <div className="resume-accent-line" />
      </header>

      <ResumeSection number="01" title="Professional summary">
        <p className="resume-summary">Software Development Engineer and Full-Stack Developer with hands-on experience building web applications across frontend, backend, and database layers. Experienced with Python, Flask, React.js, Node.js, PHP, SQL, MongoDB and modern web technologies. Builds business-oriented applications and real-time systems with a strong foundation in secure software development, authentication, input validation, access control, database integration, debugging and application reliability.</p>
      </ResumeSection>

      <ResumeSection number="02" title="Professional experience">
        <div className="resume-experience-list">
          {experiences.map((experience) => (
            <section className="resume-experience" key={experience.id}>
              <div className="resume-experience-meta"><span>{experience.period}</span><span>{experience.location || 'India'}</span></div>
              <div className="resume-experience-body">
                <h3>{experience.title}</h3>
                <p className="resume-company">{experience.company}</p>
                <ul>{experience.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>
                {experience.technologies && <p className="resume-inline-meta"><strong>Technologies:</strong> {experience.technologies.join(', ')}</p>}
              </div>
            </section>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection number="03" title="Selected projects">
        <div className="resume-project-grid">
          {projects.map((project) => (
            <section className="resume-project" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.longDescription || project.description}</p>
              <p className="resume-inline-meta"><strong>Stack:</strong> {project.technologies.join(', ')}</p>
              <ul>{project.features.slice(0, 4).map((feature) => <li key={feature}>{feature}</li>)}</ul>
              {project.github && <a className="resume-project-link" href={project.github}>Source: github.com/anujghosh1220</a>}
            </section>
          ))}
        </div>
      </ResumeSection>

      <div className="resume-two-column">
        <ResumeSection number="04" title="Technical skills">
          <div className="resume-skills-list">
            {skillCategories.map((category) => <div className="resume-skill-row" key={category.category}><strong>{skillLabels[category.category] || category.category}</strong><span>{category.skills.join(', ')}</span></div>)}
          </div>
        </ResumeSection>

        <ResumeSection number="05" title="Education">
          <div className="resume-education-list">
            {education.map((item) => <div className="resume-education" key={item.id}><span>{item.period}</span><h3>{item.degree}</h3><p>{item.institution}</p></div>)}
          </div>
          <h2 className="resume-subsection-title">Certifications</h2>
          <ul className="resume-certifications">{certifications.map((certification) => <li key={certification.id}><strong>{certification.title}</strong><span>{certification.issuer}{certification.skills ? ` · ${certification.skills.join(', ')}` : ''}</span></li>)}</ul>
        </ResumeSection>
      </div>
    </article>
  );
}

function ResumeSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <section className="resume-section"><div className="resume-section-heading"><span>{number}</span><h2>{title}</h2></div>{children}</section>;
}
