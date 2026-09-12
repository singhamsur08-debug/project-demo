import React from 'react';
import { Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteData } from '../data/websiteData';

interface FinalCTAProps {
  onCheckAvailability: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onCheckAvailability }) => {
  return (
    <section id="final-cta" className="relative py-24 bg-[#171717] text-white overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=80"
          alt="Regal Venue Lighting Backdrop"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/85 to-[#171717]" />
      </div>

      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Decorative crown / emblem */}
          <div className="w-12 h-12 rounded-full border border-[#B89B5E] flex items-center justify-center text-[#B89B5E] mb-6 bg-black/40 backdrop-blur-sm">
            <Sparkles className="w-5 h-5" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-[#F8F5EF] mb-6 leading-tight uppercase">
            Make Your Next <br />
            Celebration <span className="text-[#E7D7B5] italic font-normal normal-case">Unforgettable</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#E8DFD0]/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Your perfect venue is just a conversation away. Speak with our event concierges to reserve your desired date and begin curating your master celebration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={onCheckAvailability}
              className="gold-button w-full sm:w-auto !py-4 !px-9 text-base font-semibold shadow-xl"
              id="final-check-availability-btn"
            >
              <Calendar className="w-4 h-4" />
              Check Availability
            </button>

            <a
              href={`https://wa.me/${websiteData.whatsapp}?text=${encodeURIComponent(websiteData.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-white/30 hover:border-white text-white font-medium text-base bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
              id="final-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WhatsApp Us Directly
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
