'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from './animations/useReducedMotion';

const particlePositions = [
  [8, 12, 72, 18], [17, 68, 44, 24], [26, 31, 82, 21], [34, 84, 58, 27],
  [43, 19, 69, 31], [51, 57, 35, 22], [59, 8, 76, 29], [67, 74, 29, 25],
  [74, 38, 64, 19], [82, 91, 48, 33], [89, 23, 78, 26], [94, 63, 37, 20],
  [12, 46, 88, 30], [38, 6, 52, 23], [63, 49, 91, 28],
] as const;

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black" />
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {!prefersReducedMotion && (
          <>
            <motion.div
              className="fixed w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                x: mousePosition.x - 192,
                y: mousePosition.y - 192,
              }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            />

            <motion.div
              className="fixed w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"
              animate={{
                x: mousePosition.x * 0.5 - 128,
                y: mousePosition.y * 0.5 - 128,
              }}
              transition={{ type: 'spring', damping: 40, stiffness: 150 }}
            />

            {particlePositions.map(([x, y, targetY, duration], i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
                initial={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
                animate={{
                  top: [`${y}%`, `${targetY}%`],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}

            <motion.div
              className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            <motion.div
              className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.2, 0.4],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </>
        )}
      </div>
    </>
  );
}
