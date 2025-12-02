import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = false, ...props }, ref) => {
    const Component = hover ? motion.div : 'div';
    const motionProps = hover ? {
      whileHover: { y: -4, transition: { duration: 0.2 } },
    } : {};

    return (
      <Component
        ref={ref}
        className={cn(
          'rounded-xl border border-border bg-surface p-6 shadow-lg',
          hover && 'cursor-pointer transition-shadow hover:shadow-xl hover:shadow-primary/5',
          className
        )}
        {...motionProps}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  className, 
  ...props 
}) => (
  <div className={cn('flex flex-col space-y-1.5 pb-4', className)} {...props} />
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ 
  className, 
  ...props 
}) => (
  <h3 className={cn('text-2xl font-semibold leading-none tracking-tight text-white', className)} {...props} />
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ 
  className, 
  ...props 
}) => (
  <p className={cn('text-sm text-secondary', className)} {...props} />
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  className, 
  ...props 
}) => (
  <div className={cn('pt-0', className)} {...props} />
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  className, 
  ...props 
}) => (
  <div className={cn('flex items-center pt-4', className)} {...props} />
);
