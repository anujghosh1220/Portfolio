'use client';

import { motion } from 'framer-motion';
import Card from './Card';
import SectionHeading from './SectionHeading';
import { skillCategories } from '@/lib/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A comprehensive overview of technical expertise and development capabilities."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full" glow>
                <h3 className="text-lg font-bold text-white mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800 transition-all cursor-default"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
