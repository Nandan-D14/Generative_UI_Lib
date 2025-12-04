import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../utils/cn';

const faqs = [
  {
    question: 'Is this library free to use?',
    answer: 'Yes! The core library is open source and free to use in both personal and commercial projects under the MIT license.'
  },
  {
    question: 'Do I need to install any dependencies?',
    answer: 'The library relies on framer-motion for animations and lucide-react for icons. You can install them via npm or yarn.'
  },
  {
    question: 'Can I customize the components?',
    answer: 'Absolutely. All components are built with Tailwind CSS, making them fully customizable via classes or by modifying the source code directly.'
  },
  {
    question: 'Does it support Next.js?',
    answer: 'Yes, all components are fully compatible with Next.js (App Router and Pages Router), Remix, Vite, and any other React framework.'
  },
  {
    question: 'How do I report a bug?',
    answer: 'You can report issues on our GitHub repository. We actively maintain the library and welcome community contributions.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Everything you need to know about the library.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-border rounded-xl bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-foreground font-medium pr-8">{faq.question}</span>
                <span className={cn(
                  "text-muted-foreground transition-transform duration-300",
                  openIndex === index ? "rotate-180" : ""
                )}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
