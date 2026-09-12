import React, { useState } from 'react';
import { Sparkles, Utensils, Award, Leaf, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteData } from '../data/websiteData';
import { SampleMenuModal } from './SampleMenuModal';

interface CateringProps {
  onEnquire: () => void;
}

export const Catering: React.FC<CateringProps> = ({ onEnquire }) => {
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  return (
    <section id="catering" className="section bg-[#F8F5EF] relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <span className="eyebrow justify-center">
            <Sparkles className="w-3.5 h-3.5" />
            {websiteData.catering.eyebrow}
          </span>
          <h2 className="section-heading mb-4">
            {websiteData.catering.title}
          </h2>
          <p className="text-[#77716A] text-base sm:text-lg mb-6">
            {websiteData.catering.description}
          </p>

          {/* Pure Vegetarian & Jain Facility Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#B89B5E]/40 shadow-sm text-xs sm:text-sm font-medium text-[#171717]">
            <span className="w-3 h-3 rounded-full bg-emerald-600 flex items-center justify-center">
              <Leaf className="w-2 h-2 text-white" />
            </span>
            <span>{websiteData.catering.pureVegNote}</span>
          </div>
        </div>

        {/* 4 Large Food Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {websiteData.catering.images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative aspect-square rounded-lg overflow-hidden shadow-md group border border-[#E6DECE] bg-[#E8DFD0]"
            >
              <img
                src={img}
                alt="Aarambh Banquet Gourmet Culinary Delicacy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Course Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {websiteData.catering.courses.map((course, idx) => (
            <div
              key={course.category}
              className="bg-[#FFFFFF] p-6 rounded-lg border border-[#E6DECE] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-[#B89B5E] text-xs font-semibold uppercase tracking-wider mb-2">
                  <span>0{idx + 1}</span>
                  <span className="w-6 h-px bg-[#B89B5E]/40" />
                  <span>Course</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#171717] mb-2">
                  {course.category}
                </h3>
                <p className="text-xs text-[#77716A] leading-relaxed mb-4">
                  {course.subtitle}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E6DECE]/60">
                <span className="text-xs text-[#B89B5E] font-medium flex items-center gap-1">
                  Includes {course.items.length} chef specialties
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Center CTA Button */}
        <div className="text-center">
          <button
            onClick={() => setMenuModalOpen(true)}
            className="gold-button !px-8 !py-3.5 text-base font-semibold shadow-md hover:shadow-lg"
            id="catering-view-sample-menu-btn"
          >
            <Utensils className="w-4 h-4" />
            View Sample Menu
          </button>
        </div>
      </div>

      {/* Sample Menu Modal */}
      <SampleMenuModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
        onEnquire={onEnquire}
      />
    </section>
  );
};
