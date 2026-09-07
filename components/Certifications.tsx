'use client';

import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';
import Card from './Card';
import SectionHeading from './SectionHeading';
import { certifications } from '@/lib/data/certifications';
import { StaggerContainer, StaggerItem } from './animations';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and completed programs."
        />

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <StaggerItem key={cert.id} direction="up">
              <Card className="p-6 h-full" glow>
                <motion.div
                  className="flex items-start gap-4 mb-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="p-3 bg-violet-500/10 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaAward className="text-violet-400" size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </motion.div>
                {cert.skills && cert.skills.length > 0 && (
                  <motion.div
                    className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-800"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {cert.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs border border-gray-700 hover:border-violet-500/50 transition-colors cursor-default"
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: i * 0.03 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
