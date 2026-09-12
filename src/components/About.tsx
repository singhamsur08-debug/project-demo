import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteData } from '../data/websiteData';

interface AboutProps {
  onDiscoverMore: () => void;
}

export const About: React.FC<AboutProps> = ({ onDiscoverMore }) => {
  return (
    <section id="about" className="section bg-[#F8F5EF] relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Image & Floating Badge (50% on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            {/* Decorative Gold Frame Border Behind */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#B89B5E]/30 rounded-lg pointer-events-none hidden sm:block" />

            <div className="relative rounded-lg overflow-hidden shadow-2xl bg-[#E8DFD0] aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={websiteData.about.image}
                alt="Aarambh Banquets Interior Hall & Architecture"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Floating Metric Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-2 sm:-right-6 bg-[#171717] text-[#F8F5EF] p-4 sm:p-5 rounded-md border border-[#B89B5E]/40 shadow-xl max-w-[210px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-[#B89B5E]" />
                <span className="text-xl sm:text-2xl font-serif font-bold text-[#F8F5EF]">
                  {websiteData.about.badgeNumber}
                </span>
              </div>
              <p className="text-xs text-[#E8DFD0] tracking-wide font-medium leading-tight">
                {websiteData.about.badgeText}
              </p>
            </motion.div>
          </motion.div>

          {/* Column 2: Content (50% on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-start pt-6 lg:pt-0"
          >
            <span className="eyebrow" id="about-eyebrow">
              <Sparkles className="w-3.5 h-3.5" />
              {websiteData.about.eyebrow}
            </span>

            <h2 className="section-heading mb-6">
              {websiteData.about.title}
            </h2>

            <p className="text-base sm:text-lg text-[#171717]/85 leading-relaxed mb-4">
              {websiteData.about.p1}
            </p>

            <p className="text-sm sm:text-base text-[#77716A] leading-relaxed mb-8">
              {websiteData.about.p2}
            </p>

            {/* Bullet Points */}
            <div className="space-y-3.5 mb-9 w-full">
              {websiteData.about.points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#B89B5E]/15 border border-[#B89B5E]/40 flex items-center justify-center text-[#B89B5E] mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base text-[#171717] font-medium leading-tight">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={onDiscoverMore}
              className="primary-button group"
              id="about-discover-btn"
            >
              <span>Discover Aarambh</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
