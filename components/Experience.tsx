'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaBuilding, FaCalendar } from 'react-icons/fa';
import Card from './Card';
import SectionHeading from './SectionHeading';
import { experiences } from '@/lib/data/experience';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="Professional journey through software development and engineering roles."
        />

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 to-violet-500" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900" />
                
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="p-6" glow onClick={() => toggleExpand(exp.id)}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                          <FaBuilding size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        {exp.location && (
                          <p className="text-gray-500 text-sm">{exp.location}</p>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(exp.id);
                        }}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label={expandedId === exp.id ? 'Collapse' : 'Expand'}
                      >
                        {expandedId === exp.id ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <FaCalendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    <AnimatePresence>
                      {expandedId === exp.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-800 pt-4 mt-4"
                        >
                          <h4 className="text-white font-semibold mb-3">Responsibilities:</h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                <span className="text-blue-400 mt-1.5">•</span>
                                {resp}
                              </li>
                            ))}
                          </ul>
                          {exp.technologies && (
                            <div className="mt-4 pt-4 border-t border-gray-800">
                              <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
