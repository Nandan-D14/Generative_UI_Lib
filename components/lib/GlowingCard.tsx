import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const GlowingCard: React.FC<GlowingCardProps> = ({
  children,
  className,
  glowColor = '#FF0B55'
}) => {  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn('relative group', className)}
    >
      {/* Glow effect */}
      <div 
        className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${glowColor}, transparent)` }}
      />
      
      {/* Card content */}
      <div className="relative rounded-xl border border-border bg-surface p-6">
        {children}
      </div>
    </motion.div>
  );
};
