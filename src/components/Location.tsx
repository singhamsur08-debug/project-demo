import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteData } from '../data/websiteData';

export const Location: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${websiteData.businessName} ${websiteData.address} ${websiteData.cityStateZip}`
  )}`;

  return (
    <section id="contact" className="section bg-[#F2ECE1] relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Venue Details */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="eyebrow">
              <Sparkles className="w-3.5 h-3.5" />
              Find Us
            </span>
            <h2 className="section-heading mb-4">
              Visit Our Grand Venue
            </h2>
            <p className="text-[#77716A] text-base mb-8 leading-relaxed">
              Conveniently located right off the main highway with seamless connectivity for city and suburban guests, alongside on-site valet parking.
            </p>

            <div className="space-y-6 mb-10">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FFFFFF] border border-[#E6DECE] flex items-center justify-center text-[#B89B5E] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#171717] mb-1">
                    Address
                  </h3>
                  <p className="text-sm text-[#77716A] leading-relaxed">
                    {websiteData.address}<br />
                    {websiteData.cityStateZip}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FFFFFF] border border-[#E6DECE] flex items-center justify-center text-[#B89B5E] shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#171717] mb-1">
                    Telephone
                  </h3>
                  <a
                    href={`tel:${websiteData.phone}`}
                    className="text-sm text-[#171717] font-medium hover:text-[#B89B5E] transition-colors"
                  >
                    {websiteData.displayPhone}
                  </a>
                  <p className="text-xs text-[#77716A] mt-0.5">Lines open daily 10:00 AM – 9:00 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FFFFFF] border border-[#E6DECE] flex items-center justify-center text-[#B89B5E] shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#171717] mb-1">
                    Email
                  </h3>
                  <a
                    href={`mailto:${websiteData.email}`}
                    className="text-sm text-[#171717] font-medium hover:text-[#B89B5E] transition-colors"
                  >
                    {websiteData.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FFFFFF] border border-[#E6DECE] flex items-center justify-center text-[#B89B5E] shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#171717] mb-1">
                    Site Visits &amp; Consultations
                  </h3>
                  <p className="text-sm text-[#77716A]">
                    {websiteData.operatingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button text-sm !py-3 !px-5"
                id="location-get-directions-btn"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>

              <a
                href={`tel:${websiteData.phone}`}
                className="secondary-button text-sm !py-3 !px-5"
                id="location-call-now-btn"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E6DECE] bg-[#FFFFFF] aspect-[4/3] sm:aspect-[16/10] w-full">
              <iframe
                title="Aarambh Banquets Location Map"
                src={websiteData.mapEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay Address Badge on Map */}
              <div className="absolute top-4 left-4 bg-[#FFFFFF]/95 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#E6DECE] shadow-md hidden sm:flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B89B5E]" />
                <span className="text-xs font-semibold text-[#171717]">
                  Aarambh Banquets • Santacruz West
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
