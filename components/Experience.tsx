'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaBuilding, FaCalendar } from 'react-icons/fa';
import Card from './Card';
import SectionHeading from './SectionHeading';
import { experiences } from '@/lib/data/experience';
import { HoverCard } from './animations';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="Professional journey through software development and engineering roles."
        />

        <div className="relative">
          <motion.div
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 to-violet-500"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isCurrent = exp.current;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <motion.div
                    className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                    style={{ boxShadow: isCurrent ? '0 0 20px rgba(59, 130, 246, 0.5)' : undefined }}
                  />
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <HoverCard
                      enableTilt={false}
                      className="p-6"
                      onClick={() => toggleExpand(exp.id)}
                    >
                      <Card className="h-full" glow hover={!expandedId}>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                              {isCurrent && (
                                <motion.span
                                  className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30"
                                  animate={{
                                    opacity: [1, 0.7, 1],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                  }}
                                >
                                  CURRENT
                                </motion.span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 mb-2">
                              <FaBuilding size={16} />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            {exp.location && (
                              <p className="text-gray-500 text-sm">{exp.location}</p>
                            )}
                          </div>
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpand(exp.id);
                            }}
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label={expandedId === exp.id ? 'Collapse' : 'Expand'}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {expandedId === exp.id ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                          </motion.button>
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
                                  <motion.li
                                    key={i}
                                    className="text-gray-400 text-sm flex items-start gap-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: i * 0.05 }}
                                  >
                                    <span className="text-blue-400 mt-1.5">•</span>
                                    {resp}
                                  </motion.li>
                                ))}
                              </ul>
                              {exp.technologies && (
                                <motion.div
                                  className="mt-4 pt-4 border-t border-gray-800"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: 0.2 }}
                                >
                                  <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, i) => (
                                      <motion.span
                                        key={tech}
                                        className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-blue-500/50 transition-colors cursor-default"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2, delay: 0.3 + i * 0.05 }}
                                      >
                                        {tech}
                                      </motion.span>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Card>
                    </HoverCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
