import React from 'react';
import { PageRoute } from '../types';
import { PrimaryButton } from '../components/Buttons';
import { STUDIO_INFO, BTS_ITEMS } from '../data/portfolio';
import { Instagram, Youtube, Facebook, Camera, Heart, Film, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F2F2F0] pt-24 pb-20">
      
      {/* ABOUT HERO */}
      <section className="bg-[#1C1C1C] text-white py-20 border-b border-[#E2E2DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
            STUDIO IDENTITY & PHILOSOPHY
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold uppercase tracking-tight">
            ABOUT VIRAJ FILM STUDIO
          </h1>
          <p className="text-white/80 text-base max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Capturing Indian weddings through timeless photography and cinematic films created around love, tradition and unforgettable moments.
          </p>
        </div>
      </section>

      {/* 11.1 OUR STORY */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E2DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* HERO IMAGE */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] overflow-hidden border-8 border-[#F2F2F0] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                  alt="Viraj Film Studio Craft"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white text-xs font-mono tracking-widest uppercase">
                  VIRAJ FILM STUDIO • CREATIVE TEAM
                </div>
              </div>
            </div>

            {/* BRAND STORY CONTENT */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
                OUR STORY
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1C1C] uppercase leading-tight">
                PASSIONATE ABOUT <br />
                <span className="italic font-normal text-[#C8B9A6]">INDIAN TRADITIONS</span> & VISUAL ART.
              </h2>

              <p className="text-[#707070] text-sm leading-relaxed font-sans">
                Viraj Film Studio was founded on a simple conviction: an Indian wedding is not merely a social event, but a sacred, emotional tapestry of two families coming together. Every ceremony—from the quiet prayers during Mehndi to the exuberant energy of Sangeet and the deep solemnity of the Pheras—carries irreplaceable human emotion.
              </p>

              <p className="text-[#707070] text-sm leading-relaxed font-sans">
                Our team blends high-end cinema tools with a deep reverence for Indian wedding rituals. We observe discreetly, capturing authentic moments as they unfold naturally without forcing awkward poses or disrupting the sanctity of your celebrations.
              </p>

              <div className="pt-2">
                <PrimaryButton onClick={() => onNavigate('contact')}>
                  GET IN TOUCH WITH US
                </PrimaryButton>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 11.2 OUR APPROACH */}
      <section className="py-20 bg-[#F2F2F0] border-b border-[#E2E2DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
              THREE-STAGE CREATIVE PROCESS
            </span>
            <h2 className="font-serif text-3xl font-bold uppercase text-[#1C1C1C]">
              OUR APPROACH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 bg-[#FFFFFF] border border-[#E2E2DF] space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#1C1C1C] text-[#C8B9A6] flex items-center justify-center mx-auto">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold uppercase text-[#1C1C1C]">CAPTURE</h3>
              <p className="text-xs text-[#707070] font-sans leading-relaxed">
                We look for genuine emotions, subtle glances, spontaneous laughter, and sacred ritual details without intruding on your private moments.
              </p>
            </div>

            <div className="p-8 bg-[#FFFFFF] border border-[#E2E2DF] space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#1C1C1C] text-[#C8B9A6] flex items-center justify-center mx-auto">
                <Film className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold uppercase text-[#1C1C1C]">CREATE</h3>
              <p className="text-xs text-[#707070] font-sans leading-relaxed">
                We transform raw multi-camera frames and audio recordings into hand-graded photographs and cinematic wedding films with rich color science.
              </p>
            </div>

            <div className="p-8 bg-[#FFFFFF] border border-[#E2E2DF] space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#1C1C1C] text-[#C8B9A6] flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold uppercase text-[#1C1C1C]">DELIVER</h3>
              <p className="text-xs text-[#707070] font-sans leading-relaxed">
                We deliver professionally edited master files, vertical 9:16 social reels, and archival heirloom wedding albums designed to last for generations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 11.3 OUR SPECIALITY */}
      <section className="py-20 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
              OUR CORE SPECIALIZATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase">
              INDIAN WEDDING MASTERY
            </h2>
            <p className="text-white/80 text-sm font-sans font-light">
              We specialize in capturing every facet that makes Indian weddings vibrant and soulful.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {[
              'Sacred Rituals & Pheras',
              'Family & Parental Emotions',
              'Regal Couple Portraits',
              'Vibrant Haldi & Mehndi',
              'High-Energy Sangeet Beats',
              'Detailed Decor & Mandap framing',
              'Cultural Traditions',
              'Candid Guest Moments'
            ].map((spec, sIdx) => (
              <div key={sIdx} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#C8B9A6] shrink-0" />
                <span className="text-xs font-sans font-medium text-white/90 uppercase tracking-wider">{spec}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11.4 BEHIND THE STUDIO */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E2DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
              PRODUCTION & GEAR
            </span>
            <h2 className="font-serif text-3xl font-bold uppercase text-[#1C1C1C]">
              BEHIND THE STUDIO
            </h2>
            <p className="text-xs text-[#707070] font-sans">
              High-resolution cinema cameras, prime lenses, and color-calibrated editing suites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BTS_ITEMS.map((bts) => (
              <div key={bts.id} className="space-y-3 bg-[#F2F2F0] p-4 border border-[#E2E2DF]">
                <div className="aspect-[4/3] overflow-hidden bg-[#1C1C1C]">
                  <img
                    src={bts.imageUrl}
                    alt={bts.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-base font-bold uppercase text-[#1C1C1C]">{bts.title}</h3>
                <p className="text-[11px] text-[#707070] leading-relaxed">{bts.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11.5 SOCIAL MEDIA */}
      <section className="py-16 bg-[#F2F2F0] text-center">
        <div className="max-w-md mx-auto px-4 space-y-4">
          <h2 className="font-serif text-2xl font-bold uppercase text-[#1C1C1C]">
            FOLLOW OUR JOURNEY
          </h2>
          <div className="flex items-center justify-center gap-6">
            <a href={STUDIO_INFO.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-[#E2E2DF] hover:border-[#C8B9A6] text-[#1C1C1C] transition-colors">
              <Instagram className="w-5 h-5 text-[#C8B9A6]" />
            </a>
            <a href={STUDIO_INFO.youtube} target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-[#E2E2DF] hover:border-[#C8B9A6] text-[#1C1C1C] transition-colors">
              <Youtube className="w-5 h-5 text-red-600" />
            </a>
            <a href={STUDIO_INFO.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-[#E2E2DF] hover:border-[#C8B9A6] text-[#1C1C1C] transition-colors">
              <Facebook className="w-5 h-5 text-blue-600" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
