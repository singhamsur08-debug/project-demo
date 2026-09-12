import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Calendar } from 'lucide-react';
import { websiteData } from '../data/websiteData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Facilities', href: '#features' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Catering', href: '#catering' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5EF]/95 backdrop-blur-md shadow-sm border-b border-[#E6DECE] py-3.5'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group"
          id="navbar-logo-link"
        >
          <div className="w-10 h-10 rounded-full border border-[#B89B5E] flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:border-[#D9C394] transition-colors">
            <span className="font-serif text-[#B89B5E] font-bold text-lg leading-none">A</span>
          </div>
          <div className="flex flex-col">
            <span
              className={`font-serif tracking-[0.2em] font-semibold text-lg leading-tight transition-colors ${
                isScrolled ? 'text-[#171717]' : 'text-[#FFFFFF]'
              }`}
            >
              AARAMBH
            </span>
            <span className="text-[10px] tracking-[0.25em] font-medium text-[#B89B5E] uppercase leading-none">
              BANQUETS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-[#B89B5E] ${
                isScrolled ? 'text-[#171717]' : 'text-[#FFFFFF]/90 hover:text-[#FFFFFF]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`https://wa.me/${websiteData.whatsapp}?text=${encodeURIComponent(websiteData.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-colors ${
              isScrolled
                ? 'text-[#171717] hover:text-[#25D366] hover:bg-[#E8DFD0]/50'
                : 'text-white hover:text-[#25D366] hover:bg-white/10'
            }`}
            title="Chat on WhatsApp"
            id="nav-whatsapp-icon"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            onClick={onOpenBooking}
            className="gold-button !py-2.5 !px-5 text-sm shadow-sm hover:shadow"
            id="nav-check-availability-btn"
          >
            <Calendar className="w-4 h-4" />
            Check Availability
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenBooking}
            className="gold-button !py-2 !px-3.5 text-xs font-semibold"
            id="nav-mobile-book-header-btn"
          >
            Book Now
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md transition-colors ${
              isScrolled ? 'text-[#171717] hover:bg-[#E8DFD0]' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden bg-[#F8F5EF] border-b border-[#E6DECE] px-6 py-6 shadow-xl transition-all"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#171717] text-base font-medium hover:text-[#B89B5E] py-1 border-b border-[#E6DECE]/50"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="gold-button w-full justify-center py-3 text-sm font-semibold"
              >
                <Calendar className="w-4 h-4" />
                Check Availability
              </button>
              <div className="flex items-center justify-between pt-2 text-xs text-[#77716A]">
                <a
                  href={`tel:${websiteData.phone}`}
                  className="flex items-center gap-1.5 hover:text-[#171717]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B89B5E]" />
                  {websiteData.displayPhone}
                </a>
                <a
                  href={`https://wa.me/${websiteData.whatsapp}?text=${encodeURIComponent(websiteData.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#171717] font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
