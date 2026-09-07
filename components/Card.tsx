'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = '', hover = true, glow = false, onClick }: CardProps) {
  const baseStyles = 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden';
  
  const hoverStyles = hover ? 'hover:border-gray-700 transition-all duration-300' : '';
  const glowStyles = glow ? 'hover:shadow-lg hover:shadow-blue-500/10' : '';
  const cursorStyles = onClick ? 'cursor-pointer' : '';

  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${glowStyles} ${cursorStyles} ${className}`}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
