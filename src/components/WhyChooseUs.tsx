import React from 'react';
import { Crown, Maximize2, UtensilsCrossed, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteData } from '../data/websiteData';

const iconMap: Record<string, React.ReactNode> = {
  Crown: <Crown className="w-7 h-7" />,
  Maximize2: <Maximize2 className="w-7 h-7" />,
  UtensilsCrossed: <UtensilsCrossed className="w-7 h-7" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="section bg-[#F2ECE1] relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="eyebrow justify-center">
            <Sparkles className="w-3.5 h-3.5" />
            The Aarambh Distinction
          </span>
          <h2 className="section-heading mb-4">
            Why Discerning Families Choose Us
          </h2>
          <p className="text-[#77716A] text-base sm:text-lg">
            We do not simply provide an empty venue — we orchestrate seamlessly memorable milestone experiences backed by uncompromising hospitality.
          </p>
        </div>

        {/* 4 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {websiteData.whyChooseUs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FFFFFF] p-8 rounded-lg border border-[#E6DECE] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-3xl font-bold text-[#B89B5E]/40 group-hover:text-[#B89B5E] transition-colors">
                    {item.number}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[#F8F5EF] flex items-center justify-center text-[#171717] group-hover:bg-[#B89B5E] group-hover:text-[#FFFFFF] transition-all duration-300">
                    {iconMap[item.iconName] || <Sparkles className="w-6 h-6" />}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-[#171717] mb-3 group-hover:text-[#B89B5E] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#77716A] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decorative Bar */}
              <div className="mt-8 pt-4 border-t border-[#E6DECE]/60 flex items-center gap-2 text-xs font-medium text-[#B89B5E]">
                <span className="w-4 h-0.5 bg-[#B89B5E] rounded-full group-hover:w-8 transition-all duration-300" />
                <span>Excellence Guaranteed</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
