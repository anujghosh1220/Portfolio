'use client';

import { motion } from 'framer-motion';
import Card from './Card';
import SectionHeading from './SectionHeading';
import { skillCategories } from '@/lib/data/skills';
import { StaggerContainer, StaggerItem } from './animations';

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A comprehensive overview of technical expertise and development capabilities."
        />

        <StaggerContainer staggerDelay={0.08} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <StaggerItem key={category.category} direction="up">
              <Card className="p-6 h-full" glow>
                <h3 className="text-lg font-bold text-white mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800 transition-all cursor-default"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: i * 0.03 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
