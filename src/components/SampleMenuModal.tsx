import React from 'react';
import { X, Check, UtensilsCrossed, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { websiteData } from '../data/websiteData';

interface SampleMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnquire: () => void;
}

export const SampleMenuModal: React.FC<SampleMenuModalProps> = ({ isOpen, onClose, onEnquire }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        id="sample-menu-modal"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-[#F8F5EF] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#B89B5E]/40 shadow-2xl p-6 sm:p-8 my-8 text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#E8DFD0] hover:bg-[#B89B5E] text-[#171717] hover:text-white transition-colors cursor-pointer"
            aria-label="Close Sample Menu"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="text-center max-w-lg mx-auto mb-8">
            <span className="eyebrow justify-center">
              <Sparkles className="w-3.5 h-3.5" />
              Royal Culinary Selection
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#171717] mb-2">
              Sample Banquet Menu
            </h3>
            <p className="text-xs sm:text-sm text-[#77716A]">
              {websiteData.catering.pureVegNote}
            </p>
          </div>

          {/* Menu Sections */}
          <div className="space-y-8">
            {websiteData.catering.courses.map((course) => (
              <div key={course.category} className="border-b border-[#E6DECE] pb-6 last:border-b-0">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#B89B5E]" />
                  <h4 className="font-serif text-lg sm:text-xl font-medium text-[#171717]">
                    {course.category}
                  </h4>
                </div>
                <p className="text-xs text-[#77716A] mb-4 italic pl-4.5">
                  {course.subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4.5">
                  {course.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-white p-3.5 rounded-lg border border-[#E6DECE] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h5 className="text-sm font-semibold text-[#171717]">
                            {item.name}
                          </h5>
                          {item.popular && (
                            <span className="text-[10px] uppercase tracking-wider font-bold text-[#B89B5E] bg-[#F8F5EF] px-2 py-0.5 rounded border border-[#B89B5E]/30">
                              Chef's Pick
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#77716A] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note and CTA */}
          <div className="mt-8 pt-6 border-t border-[#E6DECE] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#77716A] max-w-sm text-center sm:text-left">
              * Menus can be fully customized with additional live counters, bespoke desserts, and international food stalls.
            </p>
            <button
              onClick={() => {
                onClose();
                onEnquire();
              }}
              className="gold-button w-full sm:w-auto text-sm"
            >
              <UtensilsCrossed className="w-4 h-4" />
              Custom Menu Enquiry
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
