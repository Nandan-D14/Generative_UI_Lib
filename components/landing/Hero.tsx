import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { Button } from '../lib/Button';
import { GradientText } from '../lib/GradientText';
import { SplitText } from '../lib/SplitText';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const rotateX = useTransform(scrollY, [0, 500], [20, 45]);

  return (
    <div className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-background perspective-1000">
      {/* Dynamic Background Matrix */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-primary/20 transition-all cursor-default animate-pulse-glow">
            <Sparkles size={14} className="text-primary" />
            <span className="font-bold tracking-wide">v2.0 Now Available</span>
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground mb-8 leading-[0.9]">
          <span className="block text-white drop-shadow-2xl">Build Faster</span>
          <GradientText 
            colors={["#10b981", "#34d399", "#059669", "#10b981"]} 
            animationSpeed={6}
            className="text-transparent bg-clip-text pb-4"
          >
            Design Better.
          </GradientText>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          A collection of <span className="text-primary font-semibold">production-ready</span> components 
          that helps you ship stunning apps without the struggle. 
          Copy, paste, and customize.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 relative z-20"
        >
          <Button size="lg" className="rounded-full px-10 py-8 text-lg font-bold shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground border-none">
            Browse Components <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-10 py-8 text-lg font-medium border-primary/30 hover:bg-primary/10 text-foreground hover:text-primary backdrop-blur-sm bg-background/50">
            <Terminal className="mr-2 h-5 w-5" /> npm install premium-ui
          </Button>
        </motion.div>

        {/* 3D Floating Interface Mockup */}
        <motion.div 
          style={{ y: y1, rotateX }}
          className="mt-20 relative w-full max-w-5xl mx-auto perspective-1000 group"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
          
          <div className="relative bg-[#09090b] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform transition-transform duration-700 hover:scale-[1.02]">
            {/* Window Chrome */}
            <div className="h-12 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="ml-4 px-4 py-1 bg-black/50 rounded-md text-xs font-mono text-muted-foreground/50 flex-1 text-center">
                premium-ui-demo.tsx
              </div>
            </div>
            
            {/* Code/Content Preview */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <div className="h-8 w-3/4 bg-white/10 rounded animate-pulse" />
                  <div className="h-4 w-full bg-white/5 rounded animate-pulse delay-75" />
                  <div className="h-4 w-5/6 bg-white/5 rounded animate-pulse delay-150" />
                  <div className="h-32 w-full bg-primary/5 rounded-lg border border-primary/10 mt-8 relative overflow-hidden group-hover:border-primary/30 transition-colors">
                     <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                     <div className="absolute bottom-4 left-4">
                        <div className="h-8 w-24 bg-primary rounded-md shadow-lg shadow-primary/20" />
                     </div>
                  </div>
               </div>
               <div className="hidden md:block space-y-3 font-mono text-sm text-muted-foreground/60">
                  <div className="flex"><span className="text-primary">import</span><span className="text-white ml-2">{`{ Button }`}</span><span className="text-primary ml-2">from</span><span className="text-green-300 ml-2">'@premium/ui'</span></div>
                  <div className="flex"><span className="text-primary">import</span><span className="text-white ml-2">{`{ Card }`}</span><span className="text-primary ml-2">from</span><span className="text-green-300 ml-2">'@premium/ui'</span></div>
                  <br />
                  <div><span className="text-purple-400">export default</span><span className="text-primary ml-2">function</span><span className="text-yellow-300 ml-2">App</span>() {`{`}</div>
                  <div className="pl-4"><span className="text-primary">return</span> (</div>
                  <div className="pl-8 text-white">{`<Card className="p-8">`}</div>
                  <div className="pl-12 text-white">{`<h1 className="text-4xl">Hello World</h1>`}</div>
                  <div className="pl-12 text-white">{`<Button>Click Me</Button>`}</div>
                  <div className="pl-8 text-white">{`</Card>`}</div>
                  <div className="pl-4">)</div>
                  <div>{`}`}</div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
