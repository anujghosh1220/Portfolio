'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar } from 'react-icons/fa';
import Card from './Card';
import SectionHeading from './SectionHeading';
import { education } from '@/lib/data/education';
import { StaggerContainer, StaggerItem } from './animations';

export default function Education() {
  return (
    <section id="education" className="py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="Academic background and formal learning journey."
        />

        <StaggerContainer staggerDelay={0.15} className="max-w-3xl mx-auto space-y-6">
          {education.map((edu) => (
            <StaggerItem key={edu.id} direction="up">
              <Card className="p-6" glow>
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="p-3 bg-blue-500/10 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaGraduationCap className="text-blue-400" size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-gray-300 font-medium mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-gray-400">
                      <FaCalendar size={16} />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>
                </motion.div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
