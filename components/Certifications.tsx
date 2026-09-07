'use client';

import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';
import Card from './Card';
import SectionHeading from './SectionHeading';
import { certifications } from '@/lib/data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and completed programs."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full" glow>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-violet-500/10 rounded-lg">
                    <FaAward className="text-violet-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-800">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
