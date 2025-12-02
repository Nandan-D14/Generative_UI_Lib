import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { cn } from '../../utils/cn';

interface DockProps {
  items: { icon: React.ReactNode; label: string; onClick?: () => void }[];
  className?: string;
}

export const Dock: React.FC<DockProps> = ({ items, className }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        'mx-auto flex h-16 items-end gap-4 rounded-2xl bg-gray-900/40 px-4 pb-3 backdrop-blur-md border border-white/10',
        className
      )}
    >
      {items.map((item, i) => (
        <DockIcon key={i} mouseX={mouseX} {...item} />
      ))}
    </div>
  );
};

function DockIcon({
  mouseX,
  icon,
  label,
  onClick,
}: {
  mouseX: MotionValue;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onClick={onClick}
      className="aspect-square cursor-pointer rounded-full bg-gray-800 flex items-center justify-center relative group"
    >
      <div className="text-white w-full h-full flex items-center justify-center p-2 [&>svg]:w-full [&>svg]:h-full">
        {icon}
      </div>
      
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 border border-white/10">
        {label}
      </span>
    </motion.div>
  );
}
