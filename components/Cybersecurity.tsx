'use client';

import { motion } from 'framer-motion';
import { FaTerminal, FaExclamationTriangle, FaEye, FaKey, FaBug } from 'react-icons/fa';
import Card from './Card';
import SectionHeading from './SectionHeading';
import { securityAreas, securityTools } from '@/lib/data/cybersecurity';
import { StaggerContainer, StaggerItem, FadeIn } from './animations';

const iconMap = {
  'Network Security & Monitoring': FaTerminal,
  'Vulnerability Assessment': FaExclamationTriangle,
  'Penetration Testing Concepts': FaBug,
  'Incident Response': FaKey,
  'Threat Analysis': FaEye,
  'Secure Coding': FaKey,
  'Access Control': FaKey
};

export default function Cybersecurity() {
  return (
    <section id="security" className="py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Security-Minded Development"
          subtitle="Alongside software development, I have a foundation in cybersecurity and approach application development with security in mind."
        />

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {securityAreas.map((area) => {
            const Icon = iconMap[area.title as keyof typeof iconMap] || FaKey;
            return (
              <StaggerItem key={area.title} direction="up">
                <Card className="p-6 h-full" glow>
                  <motion.div
                    className="flex items-start gap-4 mb-4"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="p-3 bg-blue-500/10 rounded-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="text-blue-400" size={24} />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                      <p className="text-gray-400 text-sm">{area.description}</p>
                    </div>
                  </motion.div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.3}>
          <Card className="p-6">
            <motion.h3
              className="text-xl font-bold text-white mb-6 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaKey className="text-blue-400" size={24} />
              </motion.div>
              Security Tools
            </motion.h3>
            <div className="grid md:grid-cols-3 gap-4">
              {securityTools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-500/50 transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <h4 className="text-white font-semibold mb-2">{tool.name}</h4>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
