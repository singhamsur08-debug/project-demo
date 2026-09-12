import React from 'react';
import { Sparkles, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteData } from '../data/websiteData';

interface EventsProps {
  onSelectEvent: (eventTitle: string) => void;
}

export const Events: React.FC<EventsProps> = ({ onSelectEvent }) => {
  return (
    <section id="events" className="section bg-[#F2ECE1] relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="eyebrow justify-center">
            <Sparkles className="w-3.5 h-3.5" />
            Celebrations &amp; Gatherings
          </span>
          <h2 className="section-heading mb-4">
            Curated for Every Milestone
          </h2>
          <p className="text-[#77716A] text-base sm:text-lg">
            Whether it is the sacred bond of marriage or a distinguished corporate assembly, our hall adapts effortlessly to your unique occasion.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {websiteData.events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FFFFFF] rounded-lg overflow-hidden border border-[#E6DECE] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E8DFD0]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Capacity badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded text-xs font-medium">
                  <Users className="w-3.5 h-3.5 text-[#B89B5E]" />
                  <span>{event.capacity}</span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-3">
                  <p className="text-xs font-semibold text-[#B89B5E] uppercase tracking-wider mb-1">
                    {event.tagline}
                  </p>
                  <h3 className="font-serif text-2xl text-[#171717] font-semibold group-hover:text-[#B89B5E] transition-colors">
                    {event.title}
                  </h3>
                </div>

                <p className="text-sm text-[#77716A] leading-relaxed mb-5 flex-grow">
                  {event.description}
                </p>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {event.features.map((feat) => (
                    <span
                      key={feat}
                      className="inline-block text-[11px] font-medium bg-[#F8F5EF] text-[#171717] px-2.5 py-1 rounded border border-[#E6DECE]"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Enquire CTA */}
                <button
                  onClick={() => onSelectEvent(event.title)}
                  className="w-full inline-flex items-center justify-between text-sm font-medium text-[#171717] hover:text-[#B89B5E] pt-3 border-t border-[#E6DECE] transition-colors group/btn"
                >
                  <span>Plan {event.title}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-[#B89B5E]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
