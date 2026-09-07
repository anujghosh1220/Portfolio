'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <motion.div
      className={`text-center mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mt-6 rounded-full" />
    </motion.div>
  );
}
