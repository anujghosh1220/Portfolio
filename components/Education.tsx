'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar } from 'react-icons/fa';
import Card from './Card';
import SectionHeading from './SectionHeading';
import { education } from '@/lib/data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="Academic background and formal learning journey."
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6" glow>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <FaGraduationCap className="text-blue-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-gray-300 font-medium mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-gray-400">
                      <FaCalendar size={16} />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
