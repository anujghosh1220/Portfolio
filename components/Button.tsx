'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  disabled = false
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center font-semibold tracking-[0.01em] transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden isolate border';
  
  const variants = {
    primary: 'border-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 text-white shadow-[0_16px_35px_rgba(59,130,246,0.35)] hover:shadow-[0_22px_42px_rgba(99,102,241,0.42)] focus:ring-blue-500 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_35%)] before:opacity-90 before:transition-opacity before:duration-300 hover:before:opacity-100',
    secondary: 'border border-white/10 bg-white/[0.04] text-white backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-blue-400/50 hover:bg-gray-800/80 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_12px_30px_rgba(59,130,246,0.12)] focus:ring-gray-500',
    ghost: 'border border-transparent text-gray-300 hover:text-white hover:bg-white/[0.03] hover:border-white/10 focus:ring-gray-500'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const buttonContent = (
    <>
      {children}
      {external && (
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  );
}
