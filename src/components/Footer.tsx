import React from 'react';
import { PageRoute } from '../types';
import { STUDIO_INFO } from '../data/portfolio';
import { Instagram, Youtube, Facebook, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenPrivacyModal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacyModal }) => {
  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1C1C] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wider uppercase text-white">
                VIRAJ <span className="font-light italic text-[#C8B9A6]">FILM STUDIO</span>
              </h2>
              <p className="text-[10px] tracking-[0.25em] text-[#C8B9A6] font-sans uppercase">
                INDIAN WEDDING PHOTOGRAPHY & CINEMATOGRAPHY
              </p>
            </div>

            <p className="text-[#707070] text-sm leading-relaxed max-w-md font-sans">
              Capturing Indian weddings through timeless photography and cinematic films. Preserving love, traditions, and unforgettable emotional moments.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href={STUDIO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#C8B9A6] hover:text-[#1C1C1C] hover:border-[#C8B9A6] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#C8B9A6] hover:text-[#1C1C1C] hover:border-[#C8B9A6] transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#C8B9A6] hover:text-[#1C1C1C] hover:border-[#C8B9A6] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=Hello%20Viraj%20Film%20Studio%2C%20I%20would%20like%20to%20enquire%20about%20wedding%20photography.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#C8B9A6] hover:text-[#1C1C1C] hover:border-[#C8B9A6] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs tracking-[0.2em] font-semibold text-[#C8B9A6] uppercase border-b border-white/10 pb-2">
              NAVIGATION
            </h3>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  HOME
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  SERVICES
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  GALLERY
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  ABOUT US
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  CONTACT US
                </button>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs tracking-[0.2em] font-semibold text-[#C8B9A6] uppercase border-b border-white/10 pb-2">
              STUDIO LOCATION
            </h3>
            <ul className="space-y-3 font-sans text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8B9A6] shrink-0 mt-1" />
                <span>{STUDIO_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C8B9A6] shrink-0" />
                <a href={`tel:${STUDIO_INFO.phone}`} className="hover:text-white transition-colors">
                  {STUDIO_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C8B9A6] shrink-0" />
                <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-white transition-colors">
                  {STUDIO_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#707070] gap-4">
          <p>© 2026 Viraj Film Studio. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenPrivacyModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPrivacyModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
