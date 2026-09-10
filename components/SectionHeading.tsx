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
      className={`relative text-center mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-blue-200/80">
        <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-violet-500 shadow-[0_0_18px_rgba(96,165,250,0.8)]" />
        Portfolio
      </div>
      <h2 className="text-4xl md:text-5xl font-black tracking-[-0.04em] text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text mb-4 drop-shadow-[0_0_30px_rgba(96,165,250,0.18)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="relative mx-auto mt-6 h-1 w-24 overflow-hidden rounded-full bg-slate-800/80">
        <div className="absolute inset-0 w-full bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 shadow-[0_0_18px_rgba(96,165,250,0.7)]" />
      </div>
    </motion.div>
  );
}
