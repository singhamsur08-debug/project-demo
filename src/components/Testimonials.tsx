import React from 'react';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteData } from '../data/websiteData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section bg-[#F2ECE1] relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="eyebrow justify-center">
            <Sparkles className="w-3.5 h-3.5" />
            Host Experiences
          </span>
          <h2 className="section-heading mb-3">
            Words From Our Celebrants
          </h2>
          <p className="text-[#77716A] text-base sm:text-lg">
            Read representative feedback illustrating how our venue, culinary spread, and staff turn celebrations into indelible memories.
          </p>
          <div className="mt-2 inline-block px-3 py-1 rounded bg-[#E8DFD0] text-[11px] font-semibold text-[#77716A] uppercase tracking-wider">
            Prototype Showcase • Sample Client Experiences
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {websiteData.testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FFFFFF] p-8 rounded-xl border border-[#E6DECE] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-6 right-6 text-[#E8DFD0]">
                <Quote className="w-10 h-10 stroke-[1.5]" />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-6 text-[#B89B5E]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-[#171717]/85 text-sm sm:text-base leading-relaxed mb-6 italic relative z-10">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-[#E6DECE] flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-semibold text-base text-[#171717]">
                    {item.author}
                  </h3>
                  <p className="text-xs text-[#77716A]">
                    {item.event} • {item.date}
                  </p>
                </div>
                {item.isSample && (
                  <span className="text-[10px] text-[#B89B5E] font-medium bg-[#F8F5EF] px-2 py-0.5 rounded border border-[#B89B5E]/30 shrink-0">
                    Sample
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
