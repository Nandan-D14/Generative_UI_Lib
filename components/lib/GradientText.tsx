import React from 'react';
import { cn } from '../../utils/cn';

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className,
  colors = ['#FF0B55', '#FFDEDE', '#CF0F47', '#FF0B55'],
  animationSpeed = 3,
  showBorder = false,
  ...props
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    backgroundSize: '300% 100%',
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={cn('relative inline-block', className)}>
      {showBorder && (
        <div
          className="absolute inset-0 rounded-lg opacity-50 blur-md -z-10 animate-bg-shine bg-[length:300%_100%]"
          style={{
            ...gradientStyle,
            animationName: 'background-shine',
          }}
        />
      )}
      <span
        className="relative z-10 block bg-clip-text text-transparent animate-bg-shine bg-[length:300%_100%]"
        style={{
          ...gradientStyle,
          animationName: 'background-shine',
        }}
        {...props}
      >
        {children}
      </span>
      <style>
        {`
          @keyframes background-shine {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
          }
        `}
      </style>
    </div>
  );
};
