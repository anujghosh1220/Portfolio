'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '@/lib/data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-800 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold text-white mb-2">{personalInfo.name}</h3>
            <p className="text-gray-400 text-sm">
              {personalInfo.title} · {personalInfo.subtitle}
            </p>
            <p className="text-gray-500 text-sm mt-1">{personalInfo.location}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
<FaGithub size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
<FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-400 text-sm">Open to opportunities</span>
          </div>
          <p className="text-gray-500 text-sm">
            Copyright © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
