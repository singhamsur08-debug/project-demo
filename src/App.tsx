import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Events } from './components/Events';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Catering } from './components/Catering';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Packages } from './components/Packages';
import { Testimonials } from './components/Testimonials';
import { PlanningCTA } from './components/PlanningCTA';
import { BookingForm } from './components/BookingForm';
import { Location } from './components/Location';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [selectedEventType, setSelectedEventType] = useState<string>('Wedding');

  const scrollToBooking = (eventType?: string) => {
    if (eventType) {
      setSelectedEventType(eventType);
    }
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
      // Focus on the name field slightly after smooth scroll begins
      setTimeout(() => {
        const nameInput = document.getElementById('booking-name');
        if (nameInput) {
          nameInput.focus();
        }
      }, 500);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#171717] selection:bg-[#B89B5E]/30 selection:text-[#171717] font-sans antialiased">
      {/* 1. Navbar */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      <main>
        {/* 2. Hero */}
        <Hero onCheckAvailability={() => scrollToBooking()} />

        {/* 3. Quick Stats */}
        <Stats />

        {/* 4. About */}
        <About onDiscoverMore={() => scrollToSection('events')} />

        {/* 5. Events */}
        <Events onSelectEvent={(eventTitle) => scrollToBooking(eventTitle)} />

        {/* 6. Venue Features */}
        <Features />

        {/* 7. Gallery */}
        <Gallery />

        {/* 8. Catering */}
        <Catering onEnquire={() => scrollToBooking('Catering & Dining Inquiry')} />

        {/* 9. Why Choose Us */}
        <WhyChooseUs />

        {/* 10. Packages */}
        <Packages onSelectPackage={(pkgName) => scrollToBooking(`${pkgName} Package`)} />

        {/* 11. Testimonials */}
        <Testimonials />

        {/* 12. Planning CTA */}
        <PlanningCTA onCheckAvailability={() => scrollToBooking()} />

        {/* 13. Booking Form */}
        <BookingForm initialEventType={selectedEventType} />

        {/* 14. Location & Map */}
        <Location />

        {/* 15. FAQ */}
        <FAQ />

        {/* 16. Final CTA */}
        <FinalCTA onCheckAvailability={() => scrollToBooking()} />
      </main>

      {/* 17. Footer */}
      <Footer />

      {/* 18. Mobile Fixed Bottom Bar (Call | WhatsApp | Book Now) */}
      <MobileBottomBar onBookNow={() => scrollToBooking()} />
    </div>
  );
}
