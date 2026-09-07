'use client';

import { motion } from 'framer-motion';
import { FaMapMarker, FaBriefcase, FaCode } from 'react-icons/fa';
import Card from './Card';
import SectionHeading from './SectionHeading';
import { personalInfo } from '@/lib/data/personal';
import { StaggerContainer, StaggerItem, FadeIn } from './animations';
import { useReducedMotion } from './animations';

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Software Development Engineer and Full-Stack Developer with hands-on experience building web applications across frontend, backend, and database layers."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <StaggerContainer staggerDelay={0.15} className="space-y-6">
            <StaggerItem direction="up">
              <p className="text-gray-300 text-lg leading-relaxed">
                Software Development Engineer and Full-Stack Developer with hands-on experience building web applications across frontend, backend, and database layers. My development experience spans Python, Flask, React.js, Node.js, PHP, SQL, MongoDB and modern web technologies.
              </p>
            </StaggerItem>
            <StaggerItem direction="up">
              <p className="text-gray-300 text-lg leading-relaxed">
                I've built business-oriented applications, real-time systems and management platforms, while also developing a strong foundation in cybersecurity and secure software development.
              </p>
            </StaggerItem>
            <StaggerItem direction="up">
              <p className="text-gray-400 text-base leading-relaxed">
                I approach every project with a focus on clean code, security best practices, and scalable architecture. Whether it's building a complete management system or implementing secure authentication flows, I'm committed to delivering robust, user-focused solutions.
              </p>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn direction="right" delay={0.2}>
            <Card className="p-6" glow>
              <div className="space-y-6">
                {[
                  { icon: FaMapMarker, color: 'blue', title: 'Location', value: personalInfo.location },
                  { icon: FaBriefcase, color: 'violet', title: 'Focus', value: personalInfo.focus },
                  { icon: FaCode, color: 'cyan', title: 'Current Role', value: personalInfo.currentRole },
                  { icon: null, color: 'green', title: 'Primary Languages', value: personalInfo.primaryLanguages, emoji: '🔒' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className={`p-3 bg-${item.color}-500/10 rounded-lg`}>
                      {item.emoji ? (
                        <span className="text-${item.color}-400 text-xl">{item.emoji}</span>
                      ) : item.icon ? (
                        <item.icon className={`text-${item.color}-400`} size={20} />
                      ) : null}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.value}</p>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  className="pt-4 border-t border-gray-800"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h3 className="text-white font-semibold mb-3">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.interests.map((interest, i) => (
                      <motion.span
                        key={interest}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-blue-500/50 transition-colors cursor-default"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0.5 + i * 0.05 }}
                      >
                        {interest}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
