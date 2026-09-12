import React from 'react';
import { Calendar, ChevronDown, Sparkles, Users, Utensils, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteData } from '../data/websiteData';

interface HeroProps {
  onCheckAvailability: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckAvailability }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[750px] flex items-center justify-center bg-[#171717] text-white pt-24 pb-16 overflow-hidden"
    >
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85"
          alt="Aarambh Banquets Grand Luxury Hall"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.05]"
        />
        {/* Warm Vignette and Gold-Infused Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,155,94,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B89B5E]/40 bg-black/40 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B89B5E]" />
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#B89B5E] uppercase">
            {websiteData.heroEyebrow}
          </span>
        </motion.div>

        {/* Grand Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-6.5xl font-medium tracking-tight text-[#F8F5EF] leading-[1.15] mb-6"
        >
          Your Moments Deserve a <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#E7D7B5]">Grand Beginning.</span>
        </motion.h1>

        {/* Subheadline / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="text-base sm:text-lg md:text-xl text-[#E8DFD0]/90 max-w-2xl font-light leading-relaxed mb-10"
        >
          {websiteData.heroSubheadline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          <button
            onClick={onCheckAvailability}
            className="gold-button w-full sm:w-auto !py-3.5 !px-8 text-base font-semibold shadow-lg hover:shadow-xl group"
            id="hero-check-availability-btn"
          >
            <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
            Check Availability
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-white/30 hover:border-white text-white/90 hover:text-white font-medium text-base bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
            id="hero-explore-venue-btn"
          >
            Explore Venue
          </button>
        </motion.div>

        {/* Highlights Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full border-t border-white/15 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left sm:text-center"
        >
          <div className="flex items-center sm:justify-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#B89B5E]/15 border border-[#B89B5E]/30 flex items-center justify-center text-[#B89B5E]">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F8F5EF]">500+ Guests</p>
              <p className="text-xs text-[#E8DFD0]/70">Pillarless Grand Ballroom</p>
            </div>
          </div>

          <div className="flex items-center sm:justify-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#B89B5E]/15 border border-[#B89B5E]/30 flex items-center justify-center text-[#B89B5E]">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F8F5EF]">Premium Dining</p>
              <p className="text-xs text-[#E8DFD0]/70">100% Pure Vegetarian Feasts</p>
            </div>
          </div>

          <div className="flex items-center sm:justify-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#B89B5E]/15 border border-[#B89B5E]/30 flex items-center justify-center text-[#B89B5E]">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F8F5EF]">Dedicated Hospitality</p>
              <p className="text-xs text-[#E8DFD0]/70">Personalized Concierge & Staff</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down Arrow Scroll Indicator */}
      <button
        onClick={() => scrollToSection('stats')}
        aria-label="Scroll to stats"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 hover:text-[#B89B5E] transition-colors p-2 animate-bounce hidden md:block"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
};
