'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import AnimatedText from './AnimatedText';
import Button from './Button';
import { personalInfo } from '@/lib/data/personal';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.div
              className="text-2xl md:text-3xl text-gray-300 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {personalInfo.title}
            </motion.div>
            
            <motion.div
              className="text-xl md:text-2xl text-blue-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {personalInfo.subtitle}
            </motion.div>
            
            <motion.p
              className="text-lg text-gray-400 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {personalInfo.tagline}
            </motion.p>
            
            <motion.div
              className="text-lg text-gray-300 mb-8 h-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <AnimatedText texts={personalInfo.rotatingTitles} className="text-violet-400" />
            </motion.div>
            
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button href="#projects" size="lg">
                View My Work
                <FaArrowRight className="ml-2" size={20} />
              </Button>
              <Button href="/resume" variant="secondary" size="lg">
                View Resume
                <FaDownload className="ml-2" size={20} />
              </Button>
            </motion.div>
            
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
<FaGithub size={24} />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
<FaLinkedin size={24} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <FaEnvelope size={24} />
                <span className="text-sm">Email</span>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-500 text-sm ml-2">developer.js</span>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{`const developer = {
  name: "${personalInfo.name}",
  role: "${personalInfo.title}",
  location: "${personalInfo.location}",
  stack: [
    "Python",
    "React.js",
    "Node.js",
    "Flask"
  ],
  mindset: "Build. Secure. Improve.",
  currentFocus: "Full-Stack Development"
};

developer.build();`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
