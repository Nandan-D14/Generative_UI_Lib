import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Zap, Layers, Sparkles, Code2, Palette } from 'lucide-react';
import { SplitText } from '../components/lib/SplitText';
import { Badge } from '../components/lib/Badge';
import { ShimmerButton } from '../components/lib/ShimmerButton';
import { GlowingCard } from '../components/lib/GlowingCard';
import { ComponentPreview } from '../components/landing/ComponentPreview';
import { Footer } from '../components/layout/Footer';

export const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <Badge variant="default" className="px-4 py-2 text-sm">
              <Sparkles className="h-3 w-3 mr-2 inline" />
              New release: v2.0 is out
            </Badge>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <SplitText text="Build Beautiful" className="block text-white" delay={0.03} />
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-500">
               Premium Interfaces
            </span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary sm:text-xl">
            A premium collection of 16+ production-ready, animated components. Copy, paste, and customize. 
            Built with React, Tailwind CSS, and Framer Motion.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/components">
              <ShimmerButton className="px-8 py-4 text-base">
                Browse Components
              </ShimmerButton>
            </Link>
            <Link
              to="/docs/introduction"
              className="group flex items-center rounded-lg bg-surface border border-border px-8 py-4 text-base font-semibold text-white hover:bg-white/5 transition-all hover:scale-105"
            >
              Documentation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">16+</div>
              <div className="text-sm text-secondary mt-1">Components</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-secondary mt-1">Open Source</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">TypeScript</div>
              <div className="text-sm text-secondary mt-1">Fully Typed</div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
           <GlowingCard glowColor="#8b5cf6">
              <div className="h-full flex flex-col">
                <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Modern Components</h3>
                <p className="text-secondary mt-2 flex-1">Built with React 19, TypeScript, and modern best practices.</p>
              </div>
           </GlowingCard>
           
           <GlowingCard glowColor="#3b82f6">
              <div className="h-full flex flex-col">
                <div className="rounded-lg bg-blue-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white">High Performance</h3>
                <p className="text-secondary mt-2 flex-1">Optimized animations with Framer Motion for 60fps smoothness.</p>
              </div>
           </GlowingCard>

           <GlowingCard glowColor="#ec4899">
              <div className="h-full flex flex-col">
                <div className="rounded-lg bg-pink-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Fully Customizable</h3>
                <p className="text-secondary mt-2 flex-1">Tailwind CSS classes make styling and theming effortless.</p>
              </div>
           </GlowingCard>

           <GlowingCard glowColor="#10b981">
              <div className="h-full flex flex-col">
                <div className="rounded-lg bg-green-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Box className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Copy & Paste</h3>
                <p className="text-secondary mt-2 flex-1">No npm install needed. Just copy the code and go.</p>
              </div>
           </GlowingCard>

           <GlowingCard glowColor="#f59e0b">
              <div className="h-full flex flex-col">
                <div className="rounded-lg bg-amber-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Accessible</h3>
                <p className="text-secondary mt-2 flex-1">Built with accessibility in mind following ARIA guidelines.</p>
              </div>
           </GlowingCard>

           <GlowingCard glowColor="#8b5cf6">
              <div className="h-full flex flex-col">
                <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Dark Mode First</h3>
                <p className="text-secondary mt-2 flex-1">Beautiful dark theme that looks professional out of the box.</p>
              </div>
           </GlowingCard>
        </div>
        
        {/* Interactive Preview */}
        <ComponentPreview />

        {/* CTA Section */}
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to build something amazing?
          </h2>
          <p className="mt-4 text-lg text-secondary">
            Start using our components in your next project today.
          </p>
          <div className="mt-8">
            <Link to="/components">
              <ShimmerButton className="px-10 py-4 text-lg">
                Explore All Components
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />

      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 opacity-20 bg-[radial-gradient(circle_at_center,#8b5cf6_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 -z-10 h-[800px] w-[800px] translate-x-1/2 opacity-10 bg-[radial-gradient(circle_at_center,#3b82f6_0%,transparent_70%)] blur-3xl pointer-events-none" />
    </div>
  );
};