import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface AnimatedGradientProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
  blur?: string;
}

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  children,
  className,
  colors = ['#FF0B55', '#CF0F47', '#FFDEDE'],
  speed = 5,
  blur = 'medium'
}) => {  return (
    <div className={cn('relative overflow-hidden rounded-xl', className)}>
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: [
            `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
            `linear-gradient(225deg, ${colors[1]}, ${colors[2]})`,
            `linear-gradient(315deg, ${colors[2]}, ${colors[0]})`,
            `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
