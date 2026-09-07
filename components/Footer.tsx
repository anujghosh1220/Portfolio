'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { personalInfo } from '@/lib/data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-gray-800 bg-gray-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">{personalInfo.name}</h3>
            <p className="text-gray-400 text-sm">
              {personalInfo.title} · {personalInfo.subtitle}
            </p>
            <p className="text-gray-500 text-sm mt-1">{personalInfo.location}</p>
          </div>

          <div className="flex items-center gap-6">
            {[personalInfo.github, personalInfo.linkedin, `mailto:${personalInfo.email}`].map((link, index) => {
              const icons = [FaGithub, FaLinkedin, FaEnvelope];
              const labels = ['GitHub', 'LinkedIn', 'Email'];
              const Icon = icons[index];
              return (
                <motion.a
                  key={index}
                  href={link}
                  target={index < 2 ? '_blank' : undefined}
                  rel={index < 2 ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-white transition-colors relative"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={labels[index]}
                >
                  <Icon size={20} />
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500"
                    whileHover={{ width: '100%', left: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-400 text-sm">Open to opportunities</span>
          </div>
          <p className="text-gray-500 text-sm">
            Copyright © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        <motion.button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 p-3 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-full border border-gray-700 transition-colors"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <FaArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
}
