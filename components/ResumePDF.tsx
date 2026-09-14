'use client';

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import { personalInfo } from '@/lib/data/personal';
import { experiences } from '@/lib/data/experience';
import { skillCategories } from '@/lib/data/skills';
import { education } from '@/lib/data/education';
import { certifications } from '@/lib/data/certifications';
import { projects } from '@/lib/data/projects';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    backgroundColor: '#FFFFFF',
    padding: 48,
    fontSize: 10,
    lineHeight: 1.4,
    color: '#1a1a1a',
  },
  header: {
    marginBottom: 24,
  },
  name: {
    fontSize: 28,
    fontWeight: 700,
    color: '#0a0a0a',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  title: {
    fontSize: 13,
    fontWeight: 600,
    color: '#4a5568',
    marginBottom: 16,
    letterSpacing: 0.2,
  },
  contactInfo: {
    fontSize: 9,
    color: '#4a5568',
    lineHeight: 1.6,
  },
  contactItem: {
    marginBottom: 2,
  },
  accentLine: {
    height: 2,
    backgroundColor: '#3b82f6',
    width: 60,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: '#0a0a0a',
    marginBottom: 12,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  sectionDivider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginBottom: 16,
  },
  summary: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.6,
    marginBottom: 20,
    textAlign: 'justify',
  },
  skillCategory: {
    marginBottom: 8,
  },
  skillCategoryTitle: {
    fontSize: 9,
    fontWeight: 600,
    color: '#1f2937',
    marginBottom: 4,
  },
  skillText: {
    fontSize: 9,
    color: '#4b5563',
    lineHeight: 1.5,
  },
  experienceItem: {
    marginBottom: 16,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: '#0a0a0a',
    marginBottom: 2,
  },
  company: {
    fontSize: 10,
    fontWeight: 600,
    color: '#3b82f6',
    marginBottom: 2,
  },
  period: {
    fontSize: 9,
    color: '#6b7280',
    marginBottom: 6,
  },
  responsibility: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.6,
    marginBottom: 3,
    textAlign: 'justify',
  },
  projectItem: {
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: '#0a0a0a',
    marginBottom: 2,
  },
  projectTech: {
    fontSize: 8,
    color: '#6b7280',
    marginBottom: 4,
  },
  educationItem: {
    marginBottom: 10,
  },
  degree: {
    fontSize: 10,
    fontWeight: 700,
    color: '#0a0a0a',
    marginBottom: 2,
  },
  institution: {
    fontSize: 10,
    fontWeight: 600,
    color: '#3b82f6',
    marginBottom: 2,
  },
  educationPeriod: {
    fontSize: 9,
    color: '#6b7280',
  },
  certificationItem: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 4,
    lineHeight: 1.5,
  },
  sectionNumber: {
    fontSize: 10,
    fontWeight: 700,
    color: '#3b82f6',
    marginRight: 8,
  },
});

const ResumePDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{personalInfo.name.toUpperCase()}</Text>
        <Text style={styles.title}>
          Software Development Engineer | Full-Stack Developer
        </Text>
        <View style={styles.contactInfo}>
          <Text style={styles.contactItem}>
            {personalInfo.location}
          </Text>
          <Text style={styles.contactItem}>
            Phone: +91 76798 85140
          </Text>
          <Text style={styles.contactItem}>
            Email: {personalInfo.email}
          </Text>
          <Text style={styles.contactItem}>
            GitHub: github.com/anujghosh1220
          </Text>
          <Text style={styles.contactItem}>
            LinkedIn: linkedin.com/in/anuj-ghosh-416964239
          </Text>
        </View>
        <View style={styles.accentLine} />
      </View>

      {/* Professional Summary */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.sectionTitle}>
          <Text style={styles.sectionNumber}>01</Text>
          Professional Summary
        </Text>
        <View style={styles.sectionDivider} />
        <Text style={styles.summary}>
          Software Development Engineer and Full-Stack Developer with hands-on experience building web applications across frontend, backend, and database layers. Experienced with Python, JavaScript, Flask, React.js, Node.js, PHP, SQL, MongoDB and modern web technologies. Builds business-oriented applications and real-time systems with a strong foundation in secure software development, authentication, input validation, access control, database integration, debugging and application reliability.
        </Text>
      </View>

      {/* Technical Skills */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.sectionTitle}>
          <Text style={styles.sectionNumber}>02</Text>
          Technical Skills
        </Text>
        <View style={styles.sectionDivider} />
        
        {skillCategories.map((category, index) => (
          <View key={index} style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>
              {category.category}:
            </Text>
            <Text style={styles.skillText}>
              {category.skills.join(', ')}
            </Text>
          </View>
        ))}
      </View>

      {/* Professional Experience */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.sectionTitle}>
          <Text style={styles.sectionNumber}>03</Text>
          Professional Experience
        </Text>
        <View style={styles.sectionDivider} />
        
        {experiences.map((exp, index) => (
          <View key={index} style={styles.experienceItem}>
            <Text style={styles.jobTitle}>{exp.title}</Text>
            <Text style={styles.company}>{exp.company}</Text>
            <Text style={styles.period}>
              {exp.period} {exp.location ? `| ${exp.location}` : ''}
            </Text>
            {exp.responsibilities.map((resp, respIndex) => (
              <Text key={respIndex} style={styles.responsibility}>
                - {resp}
              </Text>
            ))}
            {exp.technologies && (
              <Text style={[styles.projectTech, { marginTop: 4 }]}>
                Technologies: {exp.technologies.join(', ')}
              </Text>
            )}
          </View>
        ))}
      </View>

      {/* Projects */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.sectionTitle}>
          <Text style={styles.sectionNumber}>04</Text>
          Projects
        </Text>
        <View style={styles.sectionDivider} />
        
        {projects.map((project, index) => (
          <View key={index} style={styles.projectItem}>
            <Text style={styles.projectTitle}>{project.title}</Text>
            {project.longDescription && (
              <Text style={styles.projectTech}>
                {project.longDescription}
              </Text>
            )}
            <Text style={styles.projectTech}>
              Technologies: {project.technologies.join(', ')}
            </Text>
            {project.features.slice(0, 4).map((feature, featIndex) => (
              <Text key={featIndex} style={styles.responsibility}>
                - {feature}
              </Text>
            ))}
            {project.github && (
              <Text style={styles.projectTech}>
                Source: github.com/anujghosh1220
              </Text>
            )}
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.sectionTitle}>
          <Text style={styles.sectionNumber}>05</Text>
          Education
        </Text>
        <View style={styles.sectionDivider} />
        
        {education.map((edu, index) => (
          <View key={index} style={styles.educationItem}>
            <Text style={styles.degree}>{edu.degree}</Text>
            <Text style={styles.institution}>{edu.institution}</Text>
            <Text style={styles.educationPeriod}>{edu.period}</Text>
          </View>
        ))}
      </View>

      {/* Certifications */}
      <View>
        <Text style={styles.sectionTitle}>
          <Text style={styles.sectionNumber}>06</Text>
          Certifications
        </Text>
        <View style={styles.sectionDivider} />
        
        {certifications.map((cert, index) => (
          <Text key={index} style={styles.certificationItem}>
            - {cert.title} - {cert.issuer}
            {cert.skills && ` (${cert.skills.join(', ')})`}
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);

export default ResumePDFDocument;
