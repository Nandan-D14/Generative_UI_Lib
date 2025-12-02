import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  animated?: boolean;
}

const variantColors = {
  default: 'bg-primary',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  danger: 'bg-red-500',
};

export const Progress: React.FC<ProgressProps> = ({ 
  value, 
  max = 100,
  className,
  showLabel = false,
  variant = 'default',
  animated = true
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn('w-full', className)}>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-surface border border-border">
        <motion.div
          initial={animated ? { width: 0 } : { width: `${percentage}%` }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={cn(
            'h-full rounded-full',
            variantColors[variant]
          )}
        />
      </div>
      {showLabel && (
        <div className="mt-2 text-sm text-secondary text-right">
          {percentage.toFixed(0)}%
        </div>
      )}
    </div>
  );
};
