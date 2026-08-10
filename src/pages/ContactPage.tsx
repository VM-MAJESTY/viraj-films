import React, { useState } from 'react';
import { PageRoute, EnquiryFormData } from '../types';
import { STUDIO_INFO } from '../data/portfolio';
import { PrimaryButton } from '../components/Buttons';
import { MessageCircle, MapPin, Phone, Mail, Instagram, Youtube, Facebook, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    eventType: 'Wedding',
    preferredDate: '',
    city: '',
    serviceRequired: 'Both',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Event type is required.';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select a required service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Form submission success handling - strictly client state, never publicly rendered
      setIsSubmitted(true);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const constructWhatsappUrl = () => {
    const msg = `Hello Viraj Film Studio!\n\nName: ${formData.fullName || 'Client'}\nEvent: ${formData.eventType}\nService: ${formData.serviceRequired}\nCity: ${formData.city || 'Not specified'}\nDate: ${formData.preferredDate || 'TBD'}\nMessage: ${formData.message || 'I would like to enquire about wedding photography/cinematography services.'}`;
    return `https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen bg-[#F2F2F0] pt-24 pb-20">
      
      {/* CONTACT HERO */}
      <section className="bg-[#1C1C1C] text-white py-16 border-b border-[#E2E2DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
            GET IN TOUCH
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold uppercase tracking-tight">
            LET'S CREATE YOUR STORY
          </h1>
          <p className="text-white/80 text-base max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Tell us about your celebration and let's start planning.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 12.1 CONTACT INFORMATION & WHATSAPP CTA (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-[#FFFFFF] border border-[#E2E2DF] p-8 space-y-6 shadow-sm">
              <h2 className="font-serif text-2xl font-bold uppercase text-[#1C1C1C] border-b border-[#E2E2DF] pb-4">
                STUDIO DETAILS
              </h2>

              <ul className="space-y-5 text-sm text-[#707070] font-sans">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#C8B9A6] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs font-semibold uppercase text-[#1C1C1C] block">STUDIO LOCATION</span>
                    <span>{STUDIO_INFO.location}</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#C8B9A6] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs font-semibold uppercase text-[#1C1C1C] block">PHONE NUMBER</span>
                    <a href={`tel:${STUDIO_INFO.phone}`} className="hover:text-[#1C1C1C] transition-colors">
                      {STUDIO_INFO.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#C8B9A6] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs font-semibold uppercase text-[#1C1C1C] block">EMAIL ENQUIRIES</span>
                    <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-[#1C1C1C] transition-colors">
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </li>
              </ul>

              {/* 12.3 WHATSAPP DIRECT CTA */}
              <div className="pt-4 border-t border-[#E2E2DF]">
                <a
                  href={constructWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>CHAT ON WHATSAPP</span>
                </a>
                <p className="text-[10px] text-[#707070] text-center mt-2">
                  Fastest response for wedding dates & availability checks.
                </p>
              </div>

            </div>

            {/* SOCIAL LINKS */}
            <div className="bg-[#FFFFFF] border border-[#E2E2DF] p-6 space-y-4 shadow-sm text-center">
              <h3 className="text-xs tracking-widest font-semibold uppercase text-[#1C1C1C]">
                DIRECT SOCIAL CHANNELS
              </h3>
              <div className="flex items-center justify-center gap-4">
                <a
                  href={STUDIO_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#F2F2F0] hover:bg-[#1C1C1C] hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-[#C8B9A6]" />
                </a>
                <a
                  href={STUDIO_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#F2F2F0] hover:bg-[#1C1C1C] hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-red-600" />
                </a>
                <a
                  href={STUDIO_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#F2F2F0] hover:bg-[#1C1C1C] hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-blue-600" />
                </a>
              </div>
            </div>

          </div>

          {/* 12.2 ENQUIRY FORM (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#E2E2DF] p-8 sm:p-10 shadow-sm space-y-6">
              
              <div className="border-b border-[#E2E2DF] pb-4">
                <h2 className="font-serif text-2xl font-bold uppercase text-[#1C1C1C]">
                  WEDDING ENQUIRY FORM
                </h2>
                <p className="text-xs text-[#707070] mt-1 font-sans">
                  Please complete the form below. Submitted details remain strictly private.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-[#F2F2F0] border-l-4 border-[#C8B9A6] p-6 space-y-4 animate-fade-in">
                  <div className="flex items-center gap-3 text-[#1C1C1C]">
                    <CheckCircle2 className="w-6 h-6 text-[#C8B9A6]" />
                    <h3 className="font-serif text-xl font-bold uppercase">
                      ENQUIRY RECEIVED SUCCESSFULLY
                    </h3>
                  </div>
                  <p className="text-xs text-[#707070] leading-relaxed">
                    Thank you, <strong className="text-[#1C1C1C]">{formData.fullName}</strong>. Our team will review your enquiry for <strong className="text-[#1C1C1C]">{formData.eventType}</strong> and reach out shortly via phone or email.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={constructWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs uppercase font-semibold tracking-wider"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>CONTINUE ON WHATSAPP</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 bg-[#1C1C1C] text-white text-xs uppercase font-semibold tracking-wider"
                    >
                      SEND ANOTHER ENQUIRY
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* FULL NAME & PHONE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#1C1C1C] uppercase tracking-wider block">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ananya Sharma"
                        className={`w-full px-4 py-3 bg-[#F2F2F0] border text-xs text-[#1C1C1C] focus:outline-none focus:border-[#C8B9A6] ${
                          errors.fullName ? 'border-red-500' : 'border-[#E2E2DF]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#1C1C1C] uppercase tracking-wider block">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 9876543210"
                        className={`w-full px-4 py-3 bg-[#F2F2F0] border text-xs text-[#1C1C1C] focus:outline-none focus:border-[#C8B9A6] ${
                          errors.phone ? 'border-red-500' : 'border-[#E2E2DF]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* EMAIL & PREFERRED DATE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#1C1C1C] uppercase tracking-wider block">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. ananya@example.com"
                        className={`w-full px-4 py-3 bg-[#F2F2F0] border text-xs text-[#1C1C1C] focus:outline-none focus:border-[#C8B9A6] ${
                          errors.email ? 'border-red-500' : 'border-[#E2E2DF]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#1C1C1C] uppercase tracking-wider block">
                        PREFERRED DATE
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F2F2F0] border border-[#E2E2DF] text-xs text-[#1C1C1C] focus:outline-none focus:border-[#C8B9A6]"
                      />
                    </div>
                  </div>

                  {/* EVENT TYPE & SERVICE REQUIRED */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#1C1C1C] uppercase tracking-wider block">
                        EVENT TYPE *
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F2F2F0] border border-[#E2E2DF] text-xs text-[#1C1C1C] focus:outline-none focus:border-[#C8B9A6]"
                      >
                        <option value="Wedding">Wedding</option>
                        <option value="Pre-Wedding">Pre-Wedding</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Haldi">Haldi</option>
                        <option value="Mehndi">Mehndi</option>
                        <option value="Sangeet">Sangeet</option>
                        <option value="Reception">Reception</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#1C1C1C] uppercase tracking-wider block">
                        SERVICE REQUIRED *
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F2F2F0] border border-[#E2E2DF] text-xs text-[#1C1C1C] focus:outline-none focus:border-[#C8B9A6]"
                      >
                        <option value="Both">Both (Photography & Videography)</option>
                        <option value="Photography">Photography Only</option>
                        <option value="Videography">Videography Only</option>
                        <option value="Editing">Post-Production & Editing</option>
                        <option value="Reels">Reels & Social Content</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* CITY / LOCATION */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1C1C1C] uppercase tracking-wider block">
                      CITY / VENUE LOCATION
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Udaipur, Rajasthan / Mumbai"
                      className="w-full px-4 py-3 bg-[#F2F2F0] border border-[#E2E2DF] text-xs text-[#1C1C1C] focus:outline-none focus:border-[#C8B9A6]"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1C1C1C] uppercase tracking-wider block">
                      MESSAGE / ADDITIONAL DETAILS
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your wedding vision, expected guest count, or special requests..."
                      className="w-full px-4 py-3 bg-[#F2F2F0] border border-[#E2E2DF] text-xs text-[#1C1C1C] focus:outline-none focus:border-[#C8B9A6]"
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="pt-2">
                    <PrimaryButton type="submit" className="w-full py-4">
                      SEND ENQUIRY
                    </PrimaryButton>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* 12.4 MAP / LOCATION CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[#FFFFFF] border border-[#E2E2DF] p-8 space-y-4 shadow-sm text-center">
          <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
            VISIT OUR STUDIO
          </span>
          <h2 className="font-serif text-2xl font-bold uppercase text-[#1C1C1C]">
            STUDIO HEADQUARTERS
          </h2>
          <p className="text-xs text-[#707070] font-sans max-w-lg mx-auto">
            {STUDIO_INFO.location}
          </p>
          <div className="pt-2">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#F2F2F0] border border-[#1C1C1C] text-[#1C1C1C] text-xs font-semibold uppercase tracking-wider hover:bg-[#1C1C1C] hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#C8B9A6]" />
              <span>OPEN IN GOOGLE MAPS</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
