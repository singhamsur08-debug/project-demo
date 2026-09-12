import React from 'react';
import {
  Maximize2,
  Utensils,
  Car,
  Wind,
  Music,
  Sparkles,
  Camera,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteData } from '../data/websiteData';

// Map icon names to Lucide icons
const iconMap: Record<string, React.ReactNode> = {
  Maximize2: <Maximize2 className="w-6 h-6" />,
  Utensils: <Utensils className="w-6 h-6" />,
  Car: <Car className="w-6 h-6" />,
  Wind: <Wind className="w-6 h-6" />,
  Music: <Music className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Camera: <Camera className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="section bg-[#F8F5EF] relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="eyebrow justify-center">
            <Sparkles className="w-3.5 h-3.5" />
            Venue Amenities &amp; Facilities
          </span>
          <h2 className="section-heading mb-4">
            Everything You Need Under One Grand Roof
          </h2>
          <p className="text-[#77716A] text-base sm:text-lg">
            Purpose-built infrastructure designed to guarantee flawless comfort, royal hospitality, and effortless hosting for you and your guests.
          </p>
        </div>

        {/* 8-item grid: 4x2 on desktop, 2x4 on tablet, 1x8 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {websiteData.features.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-[#FFFFFF] p-7 rounded-lg border border-[#E6DECE] shadow-sm hover:shadow-md hover:border-[#B89B5E]/50 transition-all duration-300 group flex flex-col items-start"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-lg bg-[#F8F5EF] border border-[#E6DECE] flex items-center justify-center text-[#B89B5E] group-hover:bg-[#B89B5E] group-hover:text-[#171717] group-hover:border-[#B89B5E] transition-all duration-300 mb-5">
                {iconMap[item.iconName] || <Sparkles className="w-6 h-6" />}
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg font-semibold text-[#171717] mb-2 group-hover:text-[#B89B5E] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#77716A] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
