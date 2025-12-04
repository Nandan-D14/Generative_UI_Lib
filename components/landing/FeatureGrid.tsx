import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Smartphone, Globe, Code, Layout } from 'lucide-react';
import { GlowingCard } from '../lib/GlowingCard';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Lightning Fast',
    description: 'Optimized for speed with zero runtime overhead. Built for performance first.',
    className: "md:col-span-2",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Type Safe',
    description: 'Written in TypeScript with strict type checking for robust applications.',
    className: "md:col-span-1",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Responsive',
    description: 'Looks great on any device, from mobile phones to large desktop screens.',
    className: "md:col-span-1",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Accessible',
    description: 'Follows WAI-ARIA guidelines to ensure your site is usable by everyone.',
    className: "md:col-span-2",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Clean Code',
    description: 'Well-structured, commented, and easy to understand source code.',
    className: "md:col-span-1",
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Modern Design',
    description: 'Beautifully crafted components following the latest design trends.',
    className: "md:col-span-2 md:col-start-1", // Force to start on new row if needed or just let flow
  }
];

export const FeatureGrid = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Everything you need</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our library provides all the essential building blocks for your next great project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={feature.className}
            >
              <div className="group h-full rounded-xl border border-border bg-card p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 ease-out flex flex-col justify-between relative overflow-hidden">
                {/* Subtle Gradient Blob */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
