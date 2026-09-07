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
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 focus:ring-blue-500',
    secondary: 'bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-700 hover:border-gray-600 backdrop-blur-sm focus:ring-gray-500',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-800/30 focus:ring-gray-500'
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
    whileHover: { scale: 1.02 },
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
