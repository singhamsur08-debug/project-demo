# Aarambh Banquets — Master Banquet Hall Prototype & Template

A premium, high-conversion banquet-hall website designed to turn visitors into booking enquiries. Built with React, Vite, Tailwind CSS, Framer Motion, and Lucide Icons.

## Architecture & Section Flow

1. **Sticky Navbar** — Transparent over Hero, solid background on scroll, mobile drawer, quick availability CTA.
2. **Hero Section** — High-impact fullscreen banquet photography, royal typography, key capacity badges, and primary booking CTAs.
3. **Quick Stats** — Animated count-up numbers (500+ Capacity, 01 Grand Ballroom, 100% Pure Veg, 24/7 Assistance).
4. **About Section** — Two-column story highlighting 12,000 sq.ft. pillarless architecture and hospitality.
5. **Events Section** — Modular cards for Weddings, Receptions, Engagements, Birthdays, Corporate Galas, and Family Functions.
6. **Venue Features** — 8-item amenities grid with Lucide icons (Air conditioning, acoustics, valet, lighting, etc.).
7. **Visual Gallery** — Category-filtered masonry grid (Venue, Weddings, Food, Decor) with interactive fullscreen lightbox.
8. **Catering & Dining** — 4-course gourmet showcase with interactive "Sample Menu" modal.
9. **Why Choose Us** — 4 sales-focused benefit cards with smooth hover lift.
10. **Celebration Packages** — Transparent sample tiers (SILVER, GOLD Signature, PLATINUM) with prominent Gold highlight.
11. **Testimonials** — Sample host experiences with star ratings.
12. **Planning CTA** — Mid-funnel conversion banner with date urgency and WhatsApp chat.
13. **Booking & Enquiry Form** — Low-friction form with real-time validation, instant submission confirmation, and WhatsApp bridge.
14. **Location & Contact** — Physical address, operational timings, call links, and embedded Google Map.
15. **FAQ Accordion** — Smooth Framer Motion animated answers to common booking questions.
16. **Final CTA** — Grand closing conversion trigger.
17. **Footer** — Comprehensive navigation, timings, social links, and back-to-top button.
18. **Mobile Bottom Bar** — Sticky mobile conversion bar: `Call | WhatsApp | Book Now`.

## Customization Guide (Master Template)

All business details are centralized in `src/data/websiteData.ts`. To adapt this template for another client:

1. Update `businessName`, `tagline`, `phone`, `email`, `address`, and `whatsapp`.
2. Replace photo URLs in `src/data/websiteData.ts` with the new venue's high-resolution photography.
3. Adjust color hex values in `src/index.css` and `websiteData.colors`.
4. Deploy to Vercel, Netlify, or Cloud Run.
