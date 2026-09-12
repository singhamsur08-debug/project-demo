import React from 'react';
import { Check, Sparkles, Star, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteData } from '../data/websiteData';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="section bg-[#F8F5EF] relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="eyebrow justify-center">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Offerings
          </span>
          <h2 className="section-heading mb-4">
            Celebration Packages
          </h2>
          <p className="text-[#77716A] text-base sm:text-lg">
            Transparently structured sample packages designed to bring clarity to your event planning. Every package can be custom-tailored to your exact rituals and preferences.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {websiteData.packages.map((pkg, index) => {
            const isGold = pkg.popular;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`relative rounded-xl transition-all duration-300 flex flex-col justify-between ${
                  isGold
                    ? 'bg-[#FFFFFF] border-2 border-[#B89B5E] shadow-2xl lg:-translate-y-3 p-8 sm:p-9 z-10'
                    : 'bg-[#FFFFFF] border border-[#E6DECE] shadow-sm hover:shadow-lg p-7 sm:p-8'
                }`}
              >
                {/* Popular Badge for Gold */}
                {isGold && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B89B5E] text-[#171717] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Package Name & Tagline */}
                  <div className="border-b border-[#E6DECE] pb-6 mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#B89B5E] block mb-1">
                      {pkg.name}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#171717] mb-2">
                      {pkg.tagline}
                    </h3>
                    <p className="text-xs text-[#77716A] leading-relaxed">
                      {pkg.description}
                    </p>
                    <div className="mt-3 inline-block px-3 py-1 rounded bg-[#F8F5EF] border border-[#E6DECE] text-xs font-semibold text-[#171717]">
                      {pkg.idealFor}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#171717]">
                      Included in this package:
                    </p>
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isGold
                              ? 'bg-[#B89B5E] text-white'
                              : 'bg-[#F2ECE1] text-[#171717]'
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="text-sm text-[#171717] leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div>
                  <button
                    onClick={() => onSelectPackage(pkg.name)}
                    className={`w-full justify-center ${
                      isGold
                        ? 'gold-button !py-3.5 font-bold shadow-md'
                        : 'secondary-button !py-3 font-semibold'
                    }`}
                    id={`package-btn-${pkg.id}`}
                  >
                    <Calendar className="w-4 h-4" />
                    Enquire for {pkg.name}
                  </button>
                  <p className="text-[11px] text-center text-[#77716A] mt-2.5">
                    Custom rates tailored to guest count &amp; season
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="text-center mt-12 text-xs text-[#77716A] max-w-xl mx-auto">
          * Package inclusions and floral choices can be tailored according to muhurats, event duration, and culinary preferences. Contact our event directors for a detailed itemized proposal.
        </div>
      </div>
    </section>
  );
};
