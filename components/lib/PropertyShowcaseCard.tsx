import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, MapPin, Calendar } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface PropertyShowcaseCardProps {
  title: string;
  description: string;
  image: string;
  rating?: number;
  duration?: string;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
  onReserveClick?: () => void;
  className?: string;
}

export const PropertyShowcaseCard: React.FC<PropertyShowcaseCardProps> = ({
  title,
  description,
  image,
  rating = 4.5,
  duration = '3 Night Stay',
  isFavorite = false,
  onFavoriteClick,
  onReserveClick,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        'relative w-full max-w-sm rounded-[2rem] overflow-hidden group cursor-pointer',
        'shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.3)]',
        'transition-shadow duration-500',
        className
      )}
    >
      {/* Image Container with Gradient Overlay */}
      <div className="relative h-[450px] overflow-hidden bg-gray-900">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        />
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/95" />
        
        {/* Animated Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Favorite Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteClick?.();
          }}
          className={cn(
            'absolute top-5 right-5 w-11 h-11 rounded-full backdrop-blur-xl flex items-center justify-center transition-all duration-300 z-10',
            'shadow-lg',
            isFavorite 
              ? 'bg-white/95 text-red-500 shadow-red-500/20' 
              : 'bg-black/30 text-white hover:bg-black/50 border border-white/10'
          )}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isFavorite ? 'filled' : 'empty'}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Heart
                size={20}
                className={cn(
                  'transition-all',
                  isFavorite && 'fill-current'
                )}
              />
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
          {/* Title with subtle animation */}
          <motion.h3 
            className="text-2xl font-bold mb-2.5 drop-shadow-2xl tracking-tight"
            animate={{ y: isHovered ? -4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p 
            className="text-sm text-white/95 mb-5 line-clamp-2 drop-shadow-lg leading-relaxed"
            animate={{ opacity: isHovered ? 1 : 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>

          {/* Rating and Duration */}
          <div className="flex items-center gap-2.5 mb-5">
            {/* Rating Badge */}
            <motion.div 
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Star size={14} className="fill-yellow-400 text-yellow-400 drop-shadow-lg" />
              <span className="text-sm font-bold">{rating}</span>
            </motion.div>

            {/* Duration Badge */}
            <motion.div 
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar size={14} className="text-white/90" />
              <span className="text-sm font-medium">{duration}</span>
            </motion.div>
          </div>

          {/* Reserve Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => {
              e.stopPropagation();
              onReserveClick?.();
            }}
            className={cn(
              'w-full py-4 rounded-2xl font-bold text-base transition-all duration-300',
              'bg-white text-gray-900 shadow-2xl',
              'hover:bg-gradient-to-r hover:from-white hover:to-gray-50',
              'relative overflow-hidden group/button'
            )}
          >
            {/* Button shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: isHovered ? '100%' : '-100%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
            <span className="relative z-10">Reserve now</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
