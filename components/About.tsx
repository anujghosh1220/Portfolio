'use client';

import { motion } from 'framer-motion';
import { FaMapMarker, FaBriefcase, FaCode } from 'react-icons/fa';
import Card from './Card';
import SectionHeading from './SectionHeading';
import { personalInfo } from '@/lib/data/personal';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Software Development Engineer and Full-Stack Developer with hands-on experience building web applications across frontend, backend, and database layers."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Software Development Engineer and Full-Stack Developer with hands-on experience building web applications across frontend, backend, and database layers. My development experience spans Python, Flask, React.js, Node.js, PHP, SQL, MongoDB and modern web technologies.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I've built business-oriented applications, real-time systems and management platforms, while also developing a strong foundation in cybersecurity and secure software development.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              I approach every project with a focus on clean code, security best practices, and scalable architecture. Whether it's building a complete management system or implementing secure authentication flows, I'm committed to delivering robust, user-focused solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6" glow>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <FaMapMarker className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-gray-400">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-violet-500/10 rounded-lg">
                    <FaBriefcase className="text-violet-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Focus</h3>
                    <p className="text-gray-400">{personalInfo.focus}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <FaCode className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Current Role</h3>
                    <p className="text-gray-400">{personalInfo.currentRole}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <span className="text-green-400 text-xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Primary Languages</h3>
                    <p className="text-gray-400">{personalInfo.primaryLanguages}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <h3 className="text-white font-semibold mb-3">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
