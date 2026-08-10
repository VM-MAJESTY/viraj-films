import React, { useState } from 'react';
import { PageRoute, VideoItem } from '../types';
import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import { SERVICE_CHAPTERS, VIDEOGRAPHY_SERVICES_LIST } from '../data/servicesData';
import { Play, ArrowRight, Film, Camera, Sparkles, Check } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenVideoLightbox?: (video: VideoItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenVideoLightbox
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('weddings');

  const scrollToChapter = (chapterId: string) => {
    setActiveCategory(chapterId);
    const element = document.getElementById(chapterId);
    if (element) {
      const yOffset = -120; // Account for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handlePlayVideo = (title: string, desc: string, videoUrl: string, thumb: string) => {
    if (onOpenVideoLightbox) {
      onOpenVideoLightbox({
        id: `service-vid-${Date.now()}`,
        title,
        category: 'Wedding Film',
        thumbnailUrl: thumb,
        videoUrl,
        duration: '03:45',
        description: desc
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F2F0] pt-16">
      
      {/* ========================================================= */}
      {/* 1. SERVICES HERO (BANNER MATCHING DESIGN IMAGE) */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-[#1C1C1C] text-white text-center border-b border-[#2D2D2D] relative overflow-hidden">
        {/* SUBTLE BACKGROUND ACCENT PATTERN */}
        <div className="absolute inset-0 bg-[radial-gradient(#C8B9A6_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <span className="text-xs tracking-[0.3em] text-[#C8B9A6] font-semibold uppercase block">
            VISUAL PORTFOLIO & OFFERINGS
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-white">
            OUR SERVICES
          </h1>

          <p className="text-[#A0A0A0] text-sm sm:text-base font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Moments, emotions and celebrations captured through our lens. Presented across our six bespoke photography, cinematography and studio chapters.
          </p>
        </div>
      </section>

      {/* STICKY QUICK CATEGORY NAVIGATION BAR (FILTER BAR STYLE) */}
      <div className="sticky top-16 z-30 bg-[#FFFFFF] border-b border-[#E2E2DF] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto py-3 no-scrollbar text-[11px] tracking-wider">
            <div className="hidden lg:flex items-center gap-1.5 text-[#707070] font-mono text-[10px] font-bold uppercase pr-3 border-r border-[#E2E2DF] shrink-0">
              <span>CATEGORIES:</span>
            </div>
            {[
              { id: 'weddings', num: '01', label: 'WEDDINGS' },
              { id: 'events', num: '02', label: 'EVENTS' },
              { id: 'portraits', num: '03', label: 'PORTRAITS' },
              { id: 'commercial', num: '04', label: 'COMMERCIAL' },
              { id: 'physical', num: '05', label: 'PHOTO SERVICES' },
              { id: 'videography', num: '06', label: 'VIDEOGRAPHY' }
            ].map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToChapter(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 border transition-all duration-300 cursor-pointer whitespace-nowrap text-xs uppercase font-semibold tracking-wider relative ${
                    isActive
                      ? 'bg-[#1C1C1C] text-white border-[#1C1C1C] shadow-sm'
                      : 'bg-[#F2F2F0] text-[#1C1C1C] border-[#E2E2DF] hover:bg-[#1C1C1C] hover:text-white hover:border-[#1C1C1C]'
                  }`}
                >
                  <span className={`font-mono text-[10px] font-bold ${
                    isActive ? 'text-[#C8B9A6]' : 'text-[#707070]'
                  }`}>
                    {cat.num}
                  </span>
                  <span>{cat.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-0.5 bg-[#C8B9A6]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. CHAPTERS 01 TO 05 (PHOTOGRAPHY & PHYSICAL SERVICES) */}
      {/* ========================================================= */}
      {SERVICE_CHAPTERS.map((chapter) => (
        <section
          key={chapter.id}
          id={chapter.id}
          className="py-20 sm:py-28 border-b border-[#E2E2DF] bg-[#F2F2F0] scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* CHAPTER HEADER */}
            <div className="border-b border-[#E2E2DF] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
                  {chapter.label}
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-[#1C1C1C]">
                  {chapter.heading}
                </h2>
              </div>
              <p className="text-[#707070] text-sm sm:text-base font-sans max-w-md font-light">
                {chapter.description}
              </p>
            </div>

            {/* EDITORIAL ALTERNATING SERVICE ROWS */}
            <div className="space-y-16 lg:space-y-20">
              {chapter.items.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={item.id}
                    className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FFFFFF] border border-[#E2E2DF] p-6 sm:p-10 shadow-xs hover:border-[#C8B9A6] transition-all duration-300"
                  >
                    
                    {/* IMAGE BLOCK */}
                    <div className={`lg:col-span-6 relative overflow-hidden bg-[#1C1C1C] border border-[#E2E2DF] ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}>
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* TEXT CONTENT BLOCK */}
                    <div className={`lg:col-span-6 space-y-5 ${
                      isEven ? 'lg:order-2 lg:pl-4' : 'lg:order-1 lg:pr-4'
                    }`}>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#C8B9A6] bg-[#1C1C1C] px-2.5 py-1">
                          NO. {item.number}
                        </span>
                        <span className="text-[11px] tracking-widest text-[#707070] uppercase font-semibold">
                          VIRAJ STUDIO CRAFT
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-4xl font-bold uppercase text-[#1C1C1C] group-hover:text-[#1C1C1C]">
                        {item.title}
                      </h3>

                      <p className="text-[#707070] text-sm sm:text-base font-sans leading-relaxed">
                        {item.shortDesc}
                      </p>

                      <div className="pt-2 flex items-center justify-between border-t border-[#E2E2DF]">
                        <button
                          onClick={() => onNavigate('contact')}
                          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#1C1C1C] uppercase hover:text-[#C8B9A6] transition-colors py-2 cursor-pointer"
                        >
                          <span>ENQUIRE ABOUT {item.title.split(' ')[0]}</span>
                          <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                        </button>
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>
      ))}

      {/* ========================================================= */}
      {/* 4. CHAPTER 06 — VIDEOGRAPHY & FILMS (DARK SECTION #1C1C1C) */}
      {/* ========================================================= */}
      <section id="videography" className="py-24 bg-[#1C1C1C] text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* CHAPTER HEADER */}
          <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
                06 — FILMS & MOTION
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-white">
                THE MOMENTS IN MOTION.
              </h2>
            </div>
            <p className="text-[#707070] text-sm sm:text-base font-sans max-w-md font-light">
              From wedding films to short-form reels, we turn real moments into cinematic stories.
            </p>
          </div>

          {/* MAIN FEATURED VIDEO PREVIEW + EDITORIAL LIST GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* FEATURED VIDEO HERO PLAYER (7 COLS) */}
            <div className="lg:col-span-7 space-y-4">
              <div
                onClick={() => handlePlayVideo(
                  'Wedding Cinematography Trailer',
                  'Complete cinematic coverage of Indian wedding celebrations.',
                  'https://assets.mixkit.co/videos/preview/mixkit-indian-bride-dressed-in-traditional-clothes-41525-large.mp4',
                  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop'
                )}
                className="group relative aspect-[16/9] overflow-hidden bg-black border border-white/10 cursor-pointer shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop"
                  alt="Cinematic Wedding Film Trailer"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* PLAY BUTTON OVERLAY */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#C8B9A6] text-[#1C1C1C] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-9 h-9 fill-current ml-1" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-black/80 text-[#C8B9A6] px-3 py-1 text-xs font-mono tracking-widest border border-white/10">
                  SAMPLE TRAILER
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] tracking-[0.2em] text-[#C8B9A6] font-mono uppercase block">
                    CINEMATIC WEDDING REEL
                  </span>
                  <h3 className="font-serif text-2xl font-bold uppercase">PRESERVED IN MOTION</h3>
                  <p className="text-xs text-white/70 font-sans">Click to launch full-screen cinema video player</p>
                </div>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 text-xs text-[#707070] flex items-center justify-between">
                <span>MASTER GRADE 4K CINEMA & AUDIO SYNC</span>
                <span className="text-[#C8B9A6] font-mono">VIRAJ CINEMATOGRAPHY</span>
              </div>
            </div>

            {/* EDITORIAL LIST OF 7 VIDEOGRAPHY SERVICES (5 COLS) */}
            <div className="lg:col-span-5 space-y-3 divide-y divide-white/10">
              {VIDEOGRAPHY_SERVICES_LIST.map((videoService) => (
                <div
                  key={videoService.number}
                  onClick={() => handlePlayVideo(
                    videoService.title,
                    videoService.description,
                    videoService.videoUrl,
                    videoService.thumbnailUrl
                  )}
                  className="pt-4 group flex items-start justify-between gap-4 cursor-pointer hover:bg-white/5 p-3 transition-colors rounded"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#C8B9A6] font-semibold">
                        {videoService.number}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#C8B9A6] transition-colors uppercase">
                        {videoService.title}
                      </h4>
                    </div>
                    <p className="text-xs text-white/60 font-sans leading-relaxed">
                      {videoService.description}
                    </p>
                  </div>

                  <div className="p-2 bg-[#C8B9A6]/10 text-[#C8B9A6] rounded group-hover:bg-[#C8B9A6] group-hover:text-[#1C1C1C] transition-colors shrink-0 mt-1">
                    <Play className="w-4 h-4 fill-current" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. FINAL CTA */}
      {/* ========================================================= */}
      <section className="relative py-28 bg-[#1C1C1C] text-white overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1920&auto=format&fit=crop"
            alt="Wedding Celebration"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
            CREATE WITH VIRAJ FILM STUDIO
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold uppercase leading-tight">
            LET'S CREATE SOMETHING <br />
            <span className="italic font-normal text-[#C8B9A6]">BEAUTIFUL.</span>
          </h2>

          <p className="text-white/80 text-base max-w-lg mx-auto font-sans font-light">
            Have a wedding, celebration, portrait session or creative project in mind? We'd love to hear from you.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton onClick={() => onNavigate('contact')}>
              CONTACT US
            </PrimaryButton>
            <button
              onClick={() => onNavigate('gallery')}
              className="px-7 py-3.5 bg-transparent border border-white text-white font-medium text-xs tracking-widest uppercase hover:bg-white hover:text-[#1C1C1C] transition-all duration-300 min-h-[44px] cursor-pointer"
            >
              VIEW GALLERY
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
