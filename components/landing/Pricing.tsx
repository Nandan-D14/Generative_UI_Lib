import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Button } from '../lib/Button';
import { TiltedCard } from '../lib/TiltedCard';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for side projects',
    features: ['All free components', 'Community support', 'MIT License', '1 Project'],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'For professional developers',
    features: ['All premium components', 'Priority support', 'Commercial License', 'Unlimited Projects', 'Figma Files'],
    cta: 'Get Pro',
    popular: true
  },
  {
    name: 'Team',
    price: '$99',
    description: 'For growing teams',
    features: ['Everything in Pro', 'Team access', 'Priority email support', 'Advanced analytics', 'Custom contracts'],
    cta: 'Contact Sales',
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Simple, transparent pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for you. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltedCard 
                className={`h-full p-8 flex flex-col bg-card ${plan.popular ? 'border-primary shadow-lg shadow-primary/10' : 'border-border'}`}
                tiltIntensity={5}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg flex items-center gap-1">
                    <Zap size={12} /> POPULAR
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? 'default' : 'outline'} 
                  className={`w-full ${plan.popular ? 'shadow-md shadow-primary/25' : ''}`}
                >
                  {plan.cta}
                </Button>
              </TiltedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
