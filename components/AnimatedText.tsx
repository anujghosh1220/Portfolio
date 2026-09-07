'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface AnimatedTextProps {
  texts: string[];
  className?: string;
}

export default function AnimatedText({ texts, className = '' }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <motion.span
      key={currentIndex}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {texts[currentIndex]}
    </motion.span>
  );
}
