'use client';

import { personalInfo } from '@/lib/data/personal';
import { experiences } from '@/lib/data/experience';
import { skillCategories } from '@/lib/data/skills';
import { education } from '@/lib/data/education';
import { certifications } from '@/lib/data/certifications';
import { projects } from '@/lib/data/projects';

export default function ResumeDocument() {
  return (
    <div className="resume-document bg-white text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <header className="resume-header">
        <h1 className="resume-name">{personalInfo.name.toUpperCase()}</h1>
        <p className="resume-title">Software Development Engineer | Full-Stack Developer</p>
        <div className="resume-contact">
          <p>{personalInfo.location}</p>
          <p>Phone: +91 76798 85140</p>
          <p>Email: {personalInfo.email}</p>
          <p>GitHub: github.com/anujghosh1220</p>
          <p>LinkedIn: linkedin.com/in/anuj-ghosh-416964239</p>
        </div>
        <div className="resume-accent-line" />
      </header>

      {/* Professional Summary */}
      <section className="resume-section">
        <h2 className="resume-section-title">
          <span className="resume-section-number">01</span>
          Professional Summary
        </h2>
        <div className="resume-section-divider" />
        <p className="resume-summary">
          Software Development Engineer and Full-Stack Developer with hands-on experience building web applications across frontend, backend, and database layers. Experienced with Python, Flask, React.js, Node.js, PHP, SQL, MongoDB and modern web technologies. Built business-oriented applications, real-time systems and management platforms, with additional foundation in cybersecurity and secure software development. Experienced in authentication, session management, role-based access control, input validation, CRUD operations, database integration, debugging and application development.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="resume-section">
        <h2 className="resume-section-title">
          <span className="resume-section-number">02</span>
          Technical Skills
        </h2>
        <div className="resume-section-divider" />
        <div className="resume-skills">
          {skillCategories.map((category, index) => (
            <div key={index} className="resume-skill-category">
              <p className="resume-skill-category-title">{category.category}:</p>
              <p className="resume-skill-text">{category.skills.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section className="resume-section">
        <h2 className="resume-section-title">
          <span className="resume-section-number">03</span>
          Professional Experience
        </h2>
        <div className="resume-section-divider" />
        {experiences.map((exp, index) => (
          <div key={index} className="resume-experience-item">
            <h3 className="resume-job-title">{exp.title}</h3>
            <p className="resume-company">{exp.company}</p>
            <p className="resume-period">
              {exp.period} {exp.location ? `| ${exp.location}` : ''}
            </p>
            <ul className="resume-responsibilities">
              {exp.responsibilities.map((resp, respIndex) => (
                <li key={respIndex}>{resp}</li>
              ))}
            </ul>
            {exp.technologies && (
              <p className="resume-project-tech">
                Technologies: {exp.technologies.join(', ')}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="resume-section">
        <h2 className="resume-section-title">
          <span className="resume-section-number">04</span>
          Projects
        </h2>
        <div className="resume-section-divider" />
        {projects.map((project, index) => (
          <div key={index} className="resume-project-item">
            <h3 className="resume-project-title">{project.title}</h3>
            {project.longDescription && (
              <p className="resume-project-desc">{project.longDescription}</p>
            )}
            <p className="resume-project-tech">
              Technologies: {project.technologies.join(', ')}
            </p>
            <ul className="resume-responsibilities">
              {project.features.slice(0, 4).map((feature, featIndex) => (
                <li key={featIndex}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="resume-section">
        <h2 className="resume-section-title">
          <span className="resume-section-number">05</span>
          Education
        </h2>
        <div className="resume-section-divider" />
        {education.map((edu, index) => (
          <div key={index} className="resume-education-item">
            <h3 className="resume-degree">{edu.degree}</h3>
            <p className="resume-institution">{edu.institution}</p>
            <p className="resume-education-period">{edu.period}</p>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="resume-section">
        <h2 className="resume-section-title">
          <span className="resume-section-number">06</span>
          Certifications
        </h2>
        <div className="resume-section-divider" />
        <ul className="resume-certifications">
          {certifications.map((cert, index) => (
            <li key={index}>
              {cert.title} — {cert.issuer}
              {cert.skills && ` (${cert.skills.join(', ')})`}
            </li>
          ))}
        </ul>
      </section>

      <style jsx>{`
        .resume-document {
          padding: 48px;
          font-size: 10pt;
          line-height: 1.4;
          color: #1a1a1a;
        }

        .resume-header {
          margin-bottom: 24px;
        }

        .resume-name {
          font-size: 28pt;
          font-weight: 700;
          color: #0a0a0a;
          margin-bottom: 8px;
          letter-spacing: -0.5px;
        }

        .resume-title {
          font-size: 13pt;
          font-weight: 600;
          color: #4a5568;
          margin-bottom: 16px;
          letter-spacing: 0.2px;
        }

        .resume-contact {
          font-size: 9pt;
          color: #4a5568;
          line-height: 1.6;
        }

        .resume-contact p {
          margin-bottom: 2px;
        }

        .resume-accent-line {
          height: 2px;
          background-color: #3b82f6;
          width: 60px;
          margin-top: 16px;
          margin-bottom: 24px;
        }

        .resume-section {
          margin-bottom: 20px;
        }

        .resume-section-title {
          font-size: 12pt;
          font-weight: 700;
          color: #0a0a0a;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
        }

        .resume-section-number {
          font-size: 10pt;
          font-weight: 700;
          color: #3b82f6;
          margin-right: 8px;
        }

        .resume-section-divider {
          height: 1px;
          background-color: #e5e7eb;
          margin-bottom: 16px;
        }

        .resume-summary {
          font-size: 10pt;
          color: #374151;
          line-height: 1.6;
          text-align: justify;
          margin-bottom: 0;
        }

        .resume-skills {
          margin-bottom: 0;
        }

        .resume-skill-category {
          margin-bottom: 8px;
        }

        .resume-skill-category-title {
          font-size: 9pt;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .resume-skill-text {
          font-size: 9pt;
          color: #4b5563;
          line-height: 1.5;
          margin-bottom: 0;
        }

        .resume-experience-item {
          margin-bottom: 16px;
        }

        .resume-job-title {
          font-size: 11pt;
          font-weight: 700;
          color: #0a0a0a;
          margin-bottom: 2px;
        }

        .resume-company {
          font-size: 10pt;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 2px;
        }

        .resume-period {
          font-size: 9pt;
          color: #6b7280;
          margin-bottom: 6px;
        }

        .resume-responsibilities {
          font-size: 9pt;
          color: #374151;
          line-height: 1.6;
          margin: 0;
          padding-left: 20px;
        }

        .resume-responsibilities li {
          margin-bottom: 3px;
          text-align: justify;
        }

        .resume-project-item {
          margin-bottom: 12px;
        }

        .resume-project-title {
          font-size: 10pt;
          font-weight: 700;
          color: #0a0a0a;
          margin-bottom: 2px;
        }

        .resume-project-desc {
          font-size: 8pt;
          color: #6b7280;
          margin-bottom: 4px;
        }

        .resume-project-tech {
          font-size: 8pt;
          color: #6b7280;
          margin-bottom: 4px;
        }

        .resume-education-item {
          margin-bottom: 10px;
        }

        .resume-degree {
          font-size: 10pt;
          font-weight: 700;
          color: #0a0a0a;
          margin-bottom: 2px;
        }

        .resume-institution {
          font-size: 10pt;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 2px;
        }

        .resume-education-period {
          font-size: 9pt;
          color: #6b7280;
          margin-bottom: 0;
        }

        .resume-certifications {
          font-size: 9pt;
          color: #374151;
          line-height: 1.5;
          margin: 0;
          padding-left: 20px;
        }

        .resume-certifications li {
          margin-bottom: 4px;
        }

        @media print {
          .resume-document {
            padding: 48px;
          }
        }
      `}</style>
    </div>
  );
}
