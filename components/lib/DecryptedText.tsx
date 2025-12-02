import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  animateOn?: 'view' | 'hover';
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+',
  className,
  parentClassName,
  animateOn = 'hover',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const iterations = useRef(0);
  const intervalRef = useRef<any>(null);

  const availableChars = useOriginalCharsOnly
    ? Array.from(new Set(text.split(''))).join('')
    : characters;

  const scramble = () => {
    let pos = 0;
    
    intervalRef.current = setInterval(() => {
      setDisplayText((currentText) =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            
            if (pos >= index + iterations.current) {
              return text[index];
            }
            return availableChars[Math.floor(Math.random() * availableChars.length)];
          })
          .join('')
      );

      if (sequential) {
        if (iterations.current < text.length) {
          iterations.current += 1 / 3;
        } else {
          clearInterval(intervalRef.current);
        }
      } else {
        if (iterations.current < maxIterations) {
          iterations.current += 1 / 3;
        } else {
          clearInterval(intervalRef.current);
          setDisplayText(text);
        }
      }
    }, speed);
  };

  const handleMouseEnter = () => {
    if (animateOn !== 'hover') return;
    setIsHovering(true);
    iterations.current = 0;
    clearInterval(intervalRef.current);
    scramble();
  };

  const handleMouseLeave = () => {
    if (animateOn !== 'hover') return;
    setIsHovering(false);
    clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  useEffect(() => {
    if (animateOn === 'view') {
      iterations.current = 0;
      clearInterval(intervalRef.current);
      scramble();
    }
    return () => clearInterval(intervalRef.current);
  }, [text, animateOn]);

  return (
    <span
      className={cn('inline-block whitespace-nowrap', parentClassName)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={cn('font-mono', className)}>{displayText}</span>
    </span>
  );
};
