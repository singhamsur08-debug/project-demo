import React, { useState } from 'react';
import { Sparkles, Calendar, CheckCircle2, AlertCircle, MessageCircle, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteData } from '../data/websiteData';
import { BookingFormData } from '../types';

interface BookingFormProps {
  initialEventType?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialEventType = '' }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    eventType: initialEventType || 'Wedding',
    date: '',
    guests: '100–200',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Update event type if initialEventType changes from outside
  React.useEffect(() => {
    if (initialEventType) {
      setFormData((prev) => ({ ...prev, eventType: initialEventType }));
    }
  }, [initialEventType]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(e.currentTarget) as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError('We could not send your enquiry. Please try again or contact us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      eventType: 'Wedding',
      date: '',
      guests: '100–200',
      message: '',
    });
    setErrors({});
    setSubmitError('');
    setIsSubmitted(false);
  };

  // Pre-filled WhatsApp message based on form values
  const whatsappQuery = `Hi, I'm ${formData.name || 'interested in booking'}. I would like to enquire about Aarambh Banquets for a ${formData.eventType} event on ${formData.date || 'upcoming dates'} for approximately ${formData.guests} guests.`;

  return (
    <section id="booking" className="section bg-[#F8F5EF] relative">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="eyebrow justify-center">
            <Sparkles className="w-3.5 h-3.5" />
            Check Availability
          </span>
          <h2 className="section-heading mb-3">
            Let's Plan Your Event
          </h2>
          <p className="text-[#77716A] text-base sm:text-lg max-w-xl mx-auto">
            Fill in the key details below. Our event concierge will check hall availability for your preferred date and share a personalized itinerary within 2 hours.
          </p>
        </div>

        <div className="bg-[#FFFFFF] rounded-2xl border border-[#E6DECE] shadow-xl p-6 sm:p-10 relative overflow-hidden">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 px-4 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#171717] mb-3">
                Enquiry Received, {formData.name}!
              </h3>

              <p className="text-[#77716A] text-base max-w-md mx-auto mb-6">
                Thank you for your interest in Aarambh Banquets. Our reservation director has been notified and will call you at{' '}
                <span className="font-semibold text-[#171717]">{formData.phone}</span> shortly to discuss dates and arrangements.
              </p>

              {/* Enquiry Summary Card */}
              <div className="bg-[#F8F5EF] rounded-xl p-5 text-left border border-[#E6DECE] max-w-md w-full mb-8 text-xs sm:text-sm space-y-2">
                <div className="flex justify-between border-b border-[#E6DECE] pb-2">
                  <span className="text-[#77716A]">Event Type:</span>
                  <span className="font-semibold text-[#171717]">{formData.eventType}</span>
                </div>
                <div className="flex justify-between border-b border-[#E6DECE] pb-2">
                  <span className="text-[#77716A]">Estimated Date:</span>
                  <span className="font-semibold text-[#171717]">{formData.date || 'Flexible / To Be Decided'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#77716A]">Expected Guests:</span>
                  <span className="font-semibold text-[#171717]">{formData.guests}</span>
                </div>
              </div>

              {/* Fast WhatsApp Bridge */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
                <a
                  href={`https://wa.me/${websiteData.whatsapp}?text=${encodeURIComponent(whatsappQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-sm transition-all shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  Forward Details to WhatsApp
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-md border border-[#E6DECE] text-[#77716A] hover:text-[#171717] text-sm hover:bg-[#F8F5EF] transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  New Enquiry
                </button>
              </div>
            </motion.div>
          ) : (
            <form
              name="booking-enquiry"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              noValidate
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="booking-enquiry" />
              <p className="hidden" aria-hidden="true">
                <label>
                  Leave this field empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="booking-name" className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="booking-name"
                    name="name"
                    placeholder="e.g. Vikram Singhania"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-md bg-[#F8F5EF] border ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-[#E6DECE] focus:border-[#B89B5E]'
                    } text-[#171717] placeholder-[#77716A]/60 text-sm focus:outline-none focus:ring-1 focus:ring-[#B89B5E] transition-all`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="booking-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="booking-phone"
                    name="phone"
                    placeholder="e.g. +91 98200 12345"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-md bg-[#F8F5EF] border ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-[#E6DECE] focus:border-[#B89B5E]'
                    } text-[#171717] placeholder-[#77716A]/60 text-sm focus:outline-none focus:ring-1 focus:ring-[#B89B5E] transition-all`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Event Type */}
                <div>
                  <label htmlFor="booking-event-type" className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-2">
                    Event Type
                  </label>
                  <select
                    id="booking-event-type"
                    name="eventType"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-[#F8F5EF] border border-[#E6DECE] text-[#171717] text-sm focus:outline-none focus:border-[#B89B5E] focus:ring-1 focus:ring-[#B89B5E] transition-all"
                  >
                    {!['Wedding', 'Reception', 'Engagement / Roka', 'Birthday / Milestone', 'Corporate Gala', 'Family Function', 'Other Celebration'].includes(formData.eventType) && (
                      <option value={formData.eventType}>{formData.eventType}</option>
                    )}
                    <option value="Wedding">Wedding</option>
                    <option value="Reception">Reception</option>
                    <option value="Engagement / Roka">Engagement / Roka</option>
                    <option value="Birthday / Milestone">Birthday / Milestone</option>
                    <option value="Corporate Gala">Corporate Gala</option>
                    <option value="Family Function">Family Function</option>
                    <option value="Other Celebration">Other Celebration</option>
                  </select>
                </div>

                {/* Event Date */}
                <div>
                  <label htmlFor="booking-date" className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-2">
                    Estimated Date
                  </label>
                  <input
                    type="date"
                    id="booking-date"
                    name="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-[#F8F5EF] border border-[#E6DECE] text-[#171717] text-sm focus:outline-none focus:border-[#B89B5E] focus:ring-1 focus:ring-[#B89B5E] transition-all"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label htmlFor="booking-guests" className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="booking-guests"
                    name="guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-[#F8F5EF] border border-[#E6DECE] text-[#171717] text-sm focus:outline-none focus:border-[#B89B5E] focus:ring-1 focus:ring-[#B89B5E] transition-all"
                  >
                    <option value="50–100">50–100 Guests</option>
                    <option value="100–200">100–200 Guests</option>
                    <option value="200–350">200–350 Guests</option>
                    <option value="350–500">350–500 Guests</option>
                    <option value="500+">500+ Guests</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="booking-message" className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-2">
                  Special Notes or Queries (Optional)
                </label>
                <textarea
                  id="booking-message"
                  name="message"
                  rows={3}
                  placeholder="Share details such as preferred timing (Morning / Evening), specific food requirements (Jain, Marwari), or stage requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-[#F8F5EF] border border-[#E6DECE] text-[#171717] placeholder-[#77716A]/60 text-sm focus:outline-none focus:border-[#B89B5E] focus:ring-1 focus:ring-[#B89B5E] transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                {submitError && (
                  <p role="alert" className="mb-3 text-sm text-red-600 flex items-center justify-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {submitError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gold-button w-full !py-4 text-base font-semibold shadow-md hover:shadow-lg uppercase tracking-wider justify-center"
                  id="booking-submit-btn"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      Checking Availability...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      CHECK AVAILABILITY
                    </span>
                  )}
                </button>
                <p className="text-center text-xs text-[#77716A] mt-3">
                  We respect your privacy. No spam. You will only receive genuine event availability details.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
