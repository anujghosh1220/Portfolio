'use client';

import { motion } from 'framer-motion';
import { FaTerminal, FaExclamationTriangle, FaEye, FaKey, FaBug } from 'react-icons/fa';
import Card from './Card';
import SectionHeading from './SectionHeading';
import { securityAreas, securityTools } from '@/lib/data/cybersecurity';

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
    <section id="security" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Security-Minded Development"
          subtitle="Alongside software development, I have a foundation in cybersecurity and approach application development with security in mind."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {securityAreas.map((area, index) => {
            const Icon = iconMap[area.title as keyof typeof iconMap] || FaKey;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full" glow>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Icon className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                      <p className="text-gray-400 text-sm">{area.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FaKey className="text-blue-400" size={24} />
              Security Tools
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {securityTools.map((tool) => (
                <motion.div
                  key={tool.name}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-500/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-white font-semibold mb-2">{tool.name}</h4>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
