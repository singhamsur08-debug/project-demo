import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { websiteData } from '../data/websiteData';

interface MobileBottomBarProps {
  onBookNow: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onBookNow }) => {
  return (
    <div
      id="mobile-bottom-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[#E6DECE] px-3 py-2.5 flex items-center justify-between gap-2 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden"
    >
      {/* Call Button */}
      <a
        href={`tel:${websiteData.phone}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-md bg-[#F8F5EF] text-[#171717] border border-[#E6DECE] text-xs font-semibold hover:bg-[#E8DFD0] transition-colors"
        id="mobile-bottom-call-btn"
      >
        <Phone className="w-3.5 h-3.5 text-[#B89B5E]" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${websiteData.whatsapp}?text=${encodeURIComponent(websiteData.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-md bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba59] transition-colors shadow-sm"
        id="mobile-bottom-whatsapp-btn"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      {/* Book Now Button */}
      <button
        onClick={onBookNow}
        className="flex-[1.2] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-[#171717] text-[#F8F5EF] text-xs font-semibold hover:bg-[#B89B5E] hover:text-[#171717] transition-colors shadow-sm"
        id="mobile-bottom-book-btn"
      >
        <Calendar className="w-3.5 h-3.5 text-[#B89B5E]" />
        <span>Book Now</span>
      </button>
    </div>
  );
};
