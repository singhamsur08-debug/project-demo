import React, { useState, useMemo } from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { websiteData } from '../data/websiteData';
import { Lightbox } from './Lightbox';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return websiteData.galleryItems;
    }
    return websiteData.galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="section bg-[#F2ECE1] relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="eyebrow justify-center">
            <Sparkles className="w-3.5 h-3.5" />
            Visual Experience
          </span>
          <h2 className="section-heading mb-4">
            A Glimpse Into Grandeur
          </h2>
          <p className="text-[#77716A] text-base sm:text-lg">
            Explore authentic moments, opulent floral arrangements, and unforgettable atmospheres captured at Aarambh Banquets.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {websiteData.galleryCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#171717] text-[#F8F5EF] shadow-md'
                    : 'bg-[#FFFFFF] text-[#171717] hover:bg-[#E8DFD0] border border-[#E6DECE]'
                }`}
                id={`gallery-filter-${category.toLowerCase()}`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpenLightbox(index)}
                className="group relative rounded-lg overflow-hidden bg-[#E8DFD0] shadow-sm hover:shadow-xl cursor-pointer border border-[#E6DECE] aspect-[4/3]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Dark Overlay on Hover with Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[11px] font-semibold text-[#B89B5E] tracking-wider uppercase mb-1">
                    {item.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <p className="font-serif text-base font-medium leading-snug">
                      {item.title}
                    </p>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 ml-2">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          isOpen={lightboxIndex !== null}
          currentIndex={lightboxIndex}
          items={filteredItems}
          onClose={handleCloseLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};
