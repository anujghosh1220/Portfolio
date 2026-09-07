'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isMounted) {
    return (
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
      </div>
    );
  }

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

        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </>
  );
}
