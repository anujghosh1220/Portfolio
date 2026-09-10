'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useReducedMotion } from './animations';

interface AnimatedTextProps {
  texts: string[];
  className?: string;
}

export default function AnimatedText({ texts, className = '' }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <span className="relative inline-flex">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentIndex}
          className={className}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14, scale: 0.94, filter: 'blur(8px)' }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -14, scale: 1.04, filter: 'blur(8px)' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
      {!prefersReducedMotion && (
        <motion.span
          aria-hidden="true"
          className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-blue-400 via-violet-400 to-transparent"
          initial={{ width: '0%', opacity: 0 }}
          animate={{ width: ['0%', '100%', '35%'], opacity: [0, 1, 0.7] }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      )}
    </span>
  );
}
