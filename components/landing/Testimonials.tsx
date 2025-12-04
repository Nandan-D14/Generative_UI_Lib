import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { SpotlightCard } from '../lib/SpotlightCard';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Frontend Developer',
    content: 'This library saved me weeks of development time. The components are beautiful and easy to customize.',
    avatar: 'https://i.pravatar.cc/150?u=1'
  },
  {
    name: 'Michael Chen',
    role: 'Product Designer',
    content: 'The attention to detail in the animations is incredible. It makes my designs feel alive.',
    avatar: 'https://i.pravatar.cc/150?u=2'
  },
  {
    name: 'Alex Davis',
    role: 'Tech Lead',
    content: 'Clean code, great TypeScript support, and excellent documentation. Highly recommended.',
    avatar: 'https://i.pravatar.cc/150?u=3'
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background border-y border-border/50 relative overflow-hidden">
      {/* Vibrant Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Loved by Developers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what others are saying.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SpotlightCard className="h-full p-6 bg-card border-border">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-10 h-10 rounded-full border border-primary/20"
                  />
                  <div>
                    <div className="text-foreground font-medium text-sm">{testimonial.name}</div>
                    <div className="text-muted-foreground/70 text-xs">{testimonial.role}</div>
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
