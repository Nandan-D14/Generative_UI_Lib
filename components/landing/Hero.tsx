import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../lib/Button';
import { AnimatedGradient } from '../lib/AnimatedGradient';
import { SplitText } from '../lib/SplitText';

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <AnimatedGradient className="absolute inset-0 opacity-20" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-secondary backdrop-blur-sm">
            <Sparkles size={14} className="text-primary" />
            <span>New Features Available</span>
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          <SplitText text="Build faster with" />
          <span className="text-primary block mt-2">Premium Components</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-secondary/80 max-w-2xl mx-auto mb-10"
        >
          Create stunning user interfaces in minutes with our collection of 
          beautifully animated, accessible, and easy-to-use React components.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" className="rounded-full">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full">
            View Documentation
          </Button>
        </motion.div>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />
    </div>
  );
};
