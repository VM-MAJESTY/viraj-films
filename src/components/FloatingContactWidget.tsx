import React, { useState } from 'react';
import { MessageCircle, Mail, X, Send, CheckCircle2, Phone, Calendar, MapPin } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolio';

export const FloatingContactWidget: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventType: 'Wedding',
    preferredDate: '',
    city: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone Number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const constructWhatsappUrl = (customMsg?: string) => {
    const text = customMsg || `Hello Viraj Film Studio!\n\nName: ${formData.fullName || 'Client'}\nEvent: ${formData.eventType}\nCity: ${formData.city || 'Not specified'}\nDate: ${formData.preferredDate || 'TBD'}\nMessage: ${formData.message || 'I would like to enquire about wedding photography and cinematography services.'}`;
    return `https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      {/* FLOATING ACTION BUTTONS CONTAINER (BOTTOM RIGHT) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* QUICK CONTACT FORM TRIGGER BUTTON */}
        <button
          onClick={() => {
            setIsFormOpen(!isFormOpen);
            setIsSubmitted(false);
          }}
          className="group relative inline-flex items-center gap-2.5 px-4 py-3 bg-[#1C1C1C] text-white text-xs font-semibold tracking-wider uppercase shadow-xl hover:bg-[#111111] transition-all duration-300 border border-[#C8B9A6]/40 cursor-pointer"
          aria-label="Open Quick Contact Form"
        >
          <Mail className="w-4 h-4 text-[#C8B9A6] group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">QUICK ENQUIRY</span>
          
          {/* BADGE ACCENT */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8B9A6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C8B9A6]"></span>
          </span>
        </button>

        {/* FLOATING WHATSAPP DIRECT ACTION BUTTON */}
        <a
          href={constructWhatsappUrl("Hello Viraj Film Studio! I would like to check wedding date availability and photography services.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-13 h-13 sm:w-auto sm:h-auto sm:px-4 sm:py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl transition-all duration-300 rounded-full sm:rounded-none cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 sm:w-5 sm:h-5 fill-current shrink-0 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline ml-2.5 text-xs font-bold tracking-wider uppercase">
            CHAT ON WHATSAPP
          </span>

          {/* ONLINE INDICATOR */}
          <span className="absolute bottom-0 right-0 sm:hidden w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full"></span>
        </a>

      </div>

      {/* QUICK CONTACT FORM POPUP MODAL */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#FFFFFF] border border-[#E2E2DF] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* MODAL HEADER */}
            <div className="bg-[#1C1C1C] text-white p-6 flex items-center justify-between border-b border-[#E2E2DF]">
              <div>
                <span className="text-[10px] tracking-[0.2em] text-[#C8B9A6] font-semibold uppercase block">
                  VIRAJ FILM STUDIO
                </span>
                <h3 className="font-serif text-xl font-bold uppercase">
                  QUICK WEDDING ENQUIRY
                </h3>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* MODAL BODY */}
            <div className="p-6 overflow-y-auto space-y-6">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold uppercase text-[#1C1C1C]">
                    ENQUIRY RECEIVED!
                  </h4>
                  <p className="text-sm text-[#707070] max-w-xs mx-auto font-sans leading-relaxed">
                    Thank you, {formData.fullName}. We have received your request and will get back to you shortly.
                  </p>

                  <div className="pt-4 flex flex-col gap-3">
                    <a
                      href={constructWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 bg-[#25D366] text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>FORWARD TO WHATSAPP NOW</span>
                    </a>

                    <button
                      onClick={() => setIsFormOpen(false)}
                      className="py-2.5 bg-[#F2F2F0] text-[#1C1C1C] font-semibold text-xs tracking-wider uppercase hover:bg-[#E2E2DF] transition-colors cursor-pointer"
                    >
                      CLOSE WINDOW
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* FULL NAME */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1C1C] uppercase tracking-wider mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ananya Sharma"
                      className="w-full px-3.5 py-2.5 bg-[#F2F2F0] border border-[#E2E2DF] text-sm text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C] transition-colors"
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-600 mt-0.5 block">{errors.fullName}</span>
                    )}
                  </div>

                  {/* PHONE / WHATSAPP */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C1C1C] uppercase tracking-wider mb-1">
                        PHONE / WHATSAPP *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-[#F2F2F0] border border-[#E2E2DF] text-sm text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C] transition-colors"
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-red-600 mt-0.5 block">{errors.phone}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1C1C1C] uppercase tracking-wider mb-1">
                        EVENT TYPE
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-[#F2F2F0] border border-[#E2E2DF] text-sm text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C] transition-colors"
                      >
                        <option value="Wedding">Wedding Celebration</option>
                        <option value="Pre-Wedding">Pre-Wedding Shoot</option>
                        <option value="Haldi & Mehndi">Haldi & Mehndi</option>
                        <option value="Sangeet & Reception">Sangeet & Reception</option>
                        <option value="Portraits">Portraits & People</option>
                        <option value="Events">Event / Celebration</option>
                        <option value="Commercial">Commercial / Brand</option>
                      </select>
                    </div>
                  </div>

                  {/* DATE & CITY */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C1C1C] uppercase tracking-wider mb-1">
                        EVENT DATE
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-[#F2F2F0] border border-[#E2E2DF] text-sm text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1C1C1C] uppercase tracking-wider mb-1">
                        CITY / LOCATION
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Mumbai / Jaipur"
                        className="w-full px-3.5 py-2.5 bg-[#F2F2F0] border border-[#E2E2DF] text-sm text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C] transition-colors"
                      />
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1C1C] uppercase tracking-wider mb-1">
                      ENQUIRY DETAILS
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your wedding functions, venue or photography requirements..."
                      className="w-full px-3.5 py-2.5 bg-[#F2F2F0] border border-[#E2E2DF] text-sm text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C] transition-colors resize-none"
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#1C1C1C] text-white font-bold text-xs tracking-widest uppercase hover:bg-[#111111] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-4 h-4 text-[#C8B9A6]" />
                      <span>SUBMIT ENQUIRY</span>
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* MODAL FOOTER */}
            <div className="bg-[#F2F2F0] p-4 border-t border-[#E2E2DF] text-center text-xs text-[#707070]">
              <span>Direct Hotline: </span>
              <a href={`tel:${STUDIO_INFO.phone}`} className="font-semibold text-[#1C1C1C] underline">
                {STUDIO_INFO.phone}
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
