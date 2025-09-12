import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  glass?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  glass = false
}) => {
  const baseClasses = glass 
    ? 'backdrop-blur-sm bg-white/10 border border-white/20 dark:bg-gray-900/10 dark:border-gray-700/20'
    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700';

  return (
    <motion.div
      whileHover={hoverable ? { y: -4, scale: 1.02 } : {}}
      className={`
        rounded-xl shadow-lg transition-all duration-300
        ${baseClasses}
        ${hoverable ? 'hover:shadow-2xl cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;