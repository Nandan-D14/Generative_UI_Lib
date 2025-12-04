import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Smartphone, Globe, Code, Layout, ArrowUpRight, Sparkles } from 'lucide-react';
import { SpotlightCard } from '../lib/SpotlightCard';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Lightning Fast',
    description: 'Optimized for speed with zero runtime overhead. Built for performance first.',
    className: "md:col-span-2",
    spotlightColor: "rgba(245, 158, 11, 0.2)", // Amber
    iconColor: "text-amber-500",
    iconBg: "bg-amber-500/10",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Type Safe',
    description: 'Written in TypeScript with strict type checking for robust applications.',
    className: "md:col-span-1",
    spotlightColor: "rgba(59, 130, 246, 0.2)", // Blue
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Responsive',
    description: 'Looks great on any device, from mobile phones to large desktop screens.',
    className: "md:col-span-1",
    spotlightColor: "rgba(236, 72, 153, 0.2)", // Pink
    iconColor: "text-pink-500",
    iconBg: "bg-pink-500/10",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Accessible',
    description: 'Follows WAI-ARIA guidelines to ensure your site is usable by everyone.',
    className: "md:col-span-2",
    spotlightColor: "rgba(16, 185, 129, 0.2)", // Emerald
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Clean Code',
    description: 'Well-structured, commented, and easy to understand source code.',
    className: "md:col-span-1",
    spotlightColor: "rgba(139, 92, 246, 0.2)", // Violet
    iconColor: "text-violet-500",
    iconBg: "bg-violet-500/10",
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Modern Design',
    description: 'Beautifully crafted components following the latest design trends.',
    className: "md:col-span-2 md:col-start-1",
    spotlightColor: "rgba(6, 182, 212, 0.2)", // Cyan
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-500/10",
  }
];

export const FeatureGrid = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/5 via-background to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border text-xs font-medium text-muted-foreground mb-6"
          >
            <Sparkles size={12} className="text-primary" />
            <span>Everything you need</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Packed with <span className="text-primary">power</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Every component is built with attention to detail, performance, and accessibility. 
            Designed to help you ship faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={feature.className}
            >
              <SpotlightCard 
                spotlightColor={feature.spotlightColor}
                className="h-full bg-card/50 backdrop-blur-sm border-white/5 hover:border-white/10 transition-colors group"
              >
                <div className="p-8 h-full flex flex-col relative">
                  {/* Inner Grid Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                  
                  <div className="relative z-10 flex justify-between items-start mb-8">
                    <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center ${feature.iconColor} shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                      {feature.icon}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  
                  <div className="relative z-10 mt-auto">
                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
