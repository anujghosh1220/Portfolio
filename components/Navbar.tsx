'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Security', href: '#security' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            className="text-xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('#home')}
          >
            AG
          </motion.a>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-white bg-gray-800'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/anujghosh1220"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              aria-label="GitHub"
            >
<FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/anuj-ghosh-416964239"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              aria-label="LinkedIn"
            >
<FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:anujghosh588@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </motion.a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-lg border-b border-gray-800"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-white bg-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-800 mt-4">
                <a
                  href="https://github.com/anujghosh1220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  aria-label="GitHub"
                >
    <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anuj-ghosh-416964239"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  aria-label="LinkedIn"
                >
    <FaLinkedin size={20} />
                </a>
                <a
                  href="mailto:anujghosh588@gmail.com"
                  className="text-gray-400 hover:text-white"
                  aria-label="Email"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
