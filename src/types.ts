export interface EventItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  capacity: string;
  features: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Venue' | 'Weddings' | 'Food' | 'Decor';
  image: string;
  span?: string; // for masonry grid variation
}

export interface CateringItem {
  name: string;
  description: string;
  popular?: boolean;
}

export interface CateringCourse {
  category: string;
  subtitle: string;
  items: CateringItem[];
}

export interface PackageItem {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  popular?: boolean;
  features: string[];
  idealFor: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  event: string;
  date: string;
  rating: number;
  isSample: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface WhyChooseUsItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description?: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  eventType: string;
  date: string;
  guests: string;
  message: string;
}

export interface WebsiteData {
  businessName: string;
  tagline: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;
  phone: string;
  displayPhone: string;
  email: string;
  capacity: string;
  address: string;
  cityStateZip: string;
  mapEmbedUrl: string;
  whatsapp: string;
  whatsappMessage: string;
  operatingHours: string;
  colors: {
    primary: string;
    accent: string;
    ivory: string;
    beige: string;
    muted: string;
  };
  stats: StatItem[];
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    points: string[];
    image: string;
    badgeNumber: string;
    badgeText: string;
  };
  events: EventItem[];
  features: FeatureItem[];
  galleryCategories: string[];
  galleryItems: GalleryItem[];
  catering: {
    eyebrow: string;
    title: string;
    description: string;
    pureVegNote: string;
    images: string[];
    courses: CateringCourse[];
  };
  whyChooseUs: WhyChooseUsItem[];
  packages: PackageItem[];
  testimonials: TestimonialItem[];
  faqs: FAQItem[];
}
