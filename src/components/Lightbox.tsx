import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryItem } from '../types';

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  items: GalleryItem[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNext,
  onPrev,
}) => {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div
        id="gallery-lightbox"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
        onClick={onClose}
      >
        {/* Controls Bar */}
        <div
          className="absolute top-4 right-4 z-50 flex items-center gap-3"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close Lightbox"
            id="lightbox-close-btn"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Counter in Top Left */}
        <div className="absolute top-6 left-6 z-50 text-white/70 text-sm font-medium tracking-widest uppercase">
          <span className="text-[#B89B5E] font-semibold">{currentIndex + 1}</span> / {items.length}
        </div>

        {/* Navigation - Left Arrow */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white transition-all hover:scale-105 cursor-pointer"
            aria-label="Previous image"
            id="lightbox-prev-btn"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Navigation - Right Arrow */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white transition-all hover:scale-105 cursor-pointer"
            aria-label="Next image"
            id="lightbox-next-btn"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Active Image Modal */}
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative rounded-lg overflow-hidden max-h-[75vh] w-auto shadow-2xl border border-white/10 bg-black/40">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
            />
          </div>

          {/* Caption */}
          <div className="mt-4 text-center">
            <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-[#B89B5E]/20 text-[#B89B5E] border border-[#B89B5E]/40 mb-1">
              {currentItem.category}
            </span>
            <p className="text-white text-base md:text-lg font-serif">
              {currentItem.title}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
