import React from 'react';
import { Calendar, MessageCircle, Sparkles, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteData } from '../data/websiteData';

interface PlanningCTAProps {
  onCheckAvailability: () => void;
}

export const PlanningCTA: React.FC<PlanningCTAProps> = ({ onCheckAvailability }) => {
  return (
    <section id="planning-cta" className="relative py-20 bg-[#171717] text-[#F8F5EF] overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,155,94,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(184,155,94,0.1),transparent_50%)]" />

      <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
        {/* Urgency Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B89B5E]/40 bg-white/5 backdrop-blur-sm text-[#B89B5E] text-xs font-semibold uppercase tracking-widest mb-6"
        >
          <Clock className="w-3.5 h-3.5" />
          <span>Prime Muhurat Dates 2026 Filling Fast</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#F8F5EF] mb-6 uppercase"
        >
          Planning Your Next <br />
          <span className="text-[#E7D7B5] italic font-normal normal-case">Celebration?</span>
        </motion.h2>

        {/* Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#E8DFD0]/90 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Dates can fill quickly, especially during auspicious wedding seasons. Tell us about your event and let us help you find the right space.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onCheckAvailability}
            className="gold-button w-full sm:w-auto !py-3.5 !px-8 text-base font-semibold shadow-lg hover:shadow-xl"
            id="planning-check-availability-btn"
          >
            <Calendar className="w-4 h-4" />
            Check Availability
          </button>

          <a
            href={`https://wa.me/${websiteData.whatsapp}?text=${encodeURIComponent(websiteData.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md border border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-medium text-base transition-all"
            id="planning-whatsapp-btn"
          >
            <MessageCircle className="w-4 h-4" />
            Talk to us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};
