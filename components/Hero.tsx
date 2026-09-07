'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import AnimatedText from './AnimatedText';
import Button from './Button';
import { personalInfo } from '@/lib/data/personal';
import { HoverCard } from './animations';
import { useReducedMotion } from './animations';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const terminalVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, delay: 0.4 }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-4"
              variants={itemVariants}
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.div
              className="text-2xl md:text-3xl text-gray-300 mb-2"
              variants={itemVariants}
            >
              {personalInfo.title}
            </motion.div>
            
            <motion.div
              className="text-xl md:text-2xl text-blue-400 mb-6"
              variants={itemVariants}
            >
              <motion.span
                className="inline-block"
                whileHover={{
                  textShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                }}
                transition={{ duration: 0.3 }}
              >
                {personalInfo.subtitle}
              </motion.span>
            </motion.div>
            
            <motion.p
              className="text-lg text-gray-400 mb-8 max-w-lg"
              variants={itemVariants}
            >
              {personalInfo.tagline}
            </motion.p>
            
            <motion.div
              className="text-lg text-gray-300 mb-8 h-8"
              variants={itemVariants}
            >
              <AnimatedText texts={personalInfo.rotatingTitles} className="text-violet-400" />
            </motion.div>
            
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={itemVariants}
            >
              <Button href="#projects" size="lg">
                View My Work
                <motion.span
                  className="ml-2 inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaArrowRight size={20} />
                </motion.span>
              </Button>
              <Button href="/resume" variant="secondary" size="lg">
                View Resume
                <motion.span
                  className="ml-2 inline-block"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaDownload size={20} />
                </motion.span>
              </Button>
            </motion.div>
            
            <motion.div
              className="flex items-center space-x-6"
              variants={itemVariants}
            >
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
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 relative"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={24} />
                    <span className="text-sm">{labels[index]}</span>
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={!prefersReducedMotion ? terminalVariants : undefined}
            initial={prefersReducedMotion ? { opacity: 1, x: 0, scale: 1 } : undefined}
            animate={prefersReducedMotion ? { opacity: 1, x: 0, scale: 1 } : undefined}
            className="hidden lg:block"
          >
            <HoverCard
              enableTilt={!prefersReducedMotion}
              maxTilt={2}
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <motion.div
                  className="w-3 h-3 rounded-full bg-red-500"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-yellow-500"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-green-500"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
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
              <motion.div
                className="mt-2 h-4 w-2 bg-blue-400 inline-block"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </HoverCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
