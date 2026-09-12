import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { websiteData } from '../data/websiteData';

export const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenFAQ((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="section bg-[#F8F5EF] relative">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14">
          <span className="eyebrow justify-center">
            <Sparkles className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </span>
          <h2 className="section-heading mb-3">
            Everything You Need to Know
          </h2>
          <p className="text-[#77716A] text-base sm:text-lg">
            Answers to common questions regarding bookings, capacity, catering, and event guidelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {websiteData.faqs.map((faq) => {
            const isOpen = openFAQ === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#FFFFFF] rounded-xl border border-[#E6DECE] overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2] transition-colors"
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-[#171717]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-[#E6DECE] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#171717] text-white border-[#171717]' : 'bg-[#F8F5EF] text-[#77716A]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 sm:p-6 pt-0 border-t border-[#E6DECE]/50 text-sm sm:text-base text-[#77716A] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
