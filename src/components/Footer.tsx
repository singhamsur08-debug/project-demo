import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, Instagram, Facebook, Sparkles } from 'lucide-react';
import { websiteData } from '../data/websiteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Facilities', href: '#features' },
    { name: 'Catering', href: '#catering' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#111111] text-[#E8DFD0] pt-16 pb-24 md:pb-16 border-t border-[#B89B5E]/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Area 1: Brand / Tagline (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-[#B89B5E] flex items-center justify-center text-[#B89B5E]">
                <span className="font-serif font-bold text-lg">A</span>
              </div>
              <div>
                <span className="font-serif tracking-[0.2em] font-semibold text-lg text-[#F8F5EF] block">
                  AARAMBH
                </span>
                <span className="text-[9px] tracking-[0.25em] font-medium text-[#B89B5E] uppercase block">
                  BANQUETS &amp; EVENTS
                </span>
              </div>
            </div>

            <p className="text-sm text-[#77716A] leading-relaxed mb-6 max-w-sm">
              {websiteData.tagline}. An architectural sanctuary dedicated to unforgettable weddings, milestone celebrations, and majestic corporate banquets in Mumbai.
            </p>

            <div className="flex items-center gap-3">
              <span className="text-xs text-[#B89B5E] font-medium uppercase tracking-wider">
                Pure Vegetarian Luxury
              </span>
            </div>
          </div>

          {/* Area 2: Quick Links (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-base font-semibold text-[#F8F5EF] uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-[#77716A] hover:text-[#B89B5E] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Area 3: Contact (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-base font-semibold text-[#F8F5EF] uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <div className="space-y-3.5 text-sm text-[#77716A]">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B89B5E] shrink-0 mt-0.5" />
                <span>{websiteData.address}, {websiteData.cityStateZip}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B89B5E] shrink-0" />
                <a href={`tel:${websiteData.phone}`} className="hover:text-[#F8F5EF] transition-colors">
                  {websiteData.displayPhone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B89B5E] shrink-0" />
                <a href={`mailto:${websiteData.email}`} className="hover:text-[#F8F5EF] transition-colors">
                  {websiteData.email}
                </a>
              </p>
            </div>
          </div>

          {/* Area 4: Follow Us & Hours (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-base font-semibold text-[#F8F5EF] uppercase tracking-wider mb-5">
              Follow Us
            </h3>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#B89B5E] text-white/80 hover:text-black flex items-center justify-center transition-colors border border-white/10"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#B89B5E] text-white/80 hover:text-black flex items-center justify-center transition-colors border border-white/10"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-[#77716A]">
              Site visits available 7 days a week: 10:00 AM – 9:00 PM
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77716A]">
          <p>© 2026 {websiteData.businessName}. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium hover:text-[#B89B5E] transition-colors cursor-pointer"
            id="footer-back-to-top-btn"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
