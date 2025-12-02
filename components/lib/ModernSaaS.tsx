import React from 'react';
import { Hero } from '../landing/Hero';
import { FeatureGrid } from '../landing/FeatureGrid';
import { Testimonials } from '../landing/Testimonials';
import { Pricing } from '../landing/Pricing';
import { FAQ } from '../landing/FAQ';

export const ModernSaaS: React.FC = () => {
  return (
    <div className="w-full bg-background overflow-hidden rounded-xl border border-border">
      <Hero />
      <FeatureGrid />
      <Pricing />
      <Testimonials />
      <FAQ />
      
      {/* Footer */}
      <footer className="py-12 border-t border-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <p className="text-secondary">
             © 2025 Premium UI Library. All rights reserved.
           </p>
        </div>
      </footer>
    </div>
  );
};
