'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerItemProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none' | 'scale';
  className?: string;
}

export default function StaggerItem({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  className = ''
}: StaggerItemProps) {
  const directionVariants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 },
    scale: { scale: 0.95, opacity: 0 },
    none: { opacity: 0 }
  };

  const visibleVariants = {
    up: { y: 0, opacity: 1 },
    down: { y: 0, opacity: 1 },
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 },
    scale: { scale: 1, opacity: 1 },
    none: {Opacity: 1 }
  };

  return (
    <motion.div
      className={className}
      variants={{
        hidden: directionVariants[direction],
        visible: { ...visibleVariants[direction], transition: { duration, delay, ease: 'easeOut' } }
      }}
    >
      {children}
    </motion.div>
  );
}
