import React, { useState, useRef } from 'react';
import { PageRoute, GalleryItem, VideoItem } from '../types';
import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import { GALLERY_ITEMS, CINEMATIC_FILMS, BTS_ITEMS, SOCIAL_POSTS, STUDIO_INFO } from '../data/portfolio';
import { FEATURED_HOME_SERVICES } from '../data/servicesData';
import { Play, Pause, Volume2, VolumeX, Maximize, ArrowDown, Instagram, Youtube, Facebook, ChevronLeft, ChevronRight, Film } from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenImageLightbox: (items: GalleryItem[], index: number) => void;
  onOpenVideoLightbox: (video: VideoItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenImageLightbox,
  onOpenVideoLightbox
}) => {
  // Hero Video States
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const [heroIsPlaying, setHeroIsPlaying] = useState(true);
  const [heroIsMuted, setHeroIsMuted] = useState(true);

  // BTS Slider Scroll Ref
  const btsSliderRef = useRef<HTMLDivElement | null>(null);

  const toggleHeroPlay = () => {
    if (!heroVideoRef.current) return;
    if (heroIsPlaying) {
      heroVideoRef.current.pause();
      setHeroIsPlaying(false);
    } else {
      heroVideoRef.current.play();
      setHeroIsPlaying(true);
    }
  };

  const toggleHeroMute = () => {
    if (!heroVideoRef.current) return;
    heroVideoRef.current.muted = !heroIsMuted;
    setHeroIsMuted(!heroIsMuted);
  };

  const toggleHeroFullscreen = () => {
    if (heroVideoRef.current) {
      if (heroVideoRef.current.requestFullscreen) {
        heroVideoRef.current.requestFullscreen();
      }
    }
  };

  const scrollBts = (direction: 'left' | 'right') => {
    if (!btsSliderRef.current) return;
    const scrollAmount = btsSliderRef.current.clientWidth * 0.75;
    btsSliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  // Selected work items for Featured Gallery
  const featuredGallery = GALLERY_ITEMS.slice(0, 6);

  // Main featured film & supporting films
  const mainFeaturedFilm = CINEMATIC_FILMS[0];
  const supportingFilms = CINEMATIC_FILMS.slice(1, 4);

  return (
    <div className="min-h-screen bg-[#F2F2F0]">
      
      {/* ========================================================= */}
      {/* 8.1 HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative w-full h-screen min-h-[650px] bg-[#1C1C1C] text-white flex flex-col justify-between overflow-hidden">
        
        {/* HERO MEDIA BACKGROUND (Desktop Landscape & Mobile Portrait) */}
        <div className="absolute inset-0 z-0">
          <video
            ref={heroVideoRef}
            src="https://assets.mixkit.co/videos/preview/mixkit-indian-bride-dressed-in-traditional-clothes-41525-large.mp4"
            poster="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1920&auto=format&fit=crop"
            autoPlay
            loop
            muted={heroIsMuted}
            playsInline
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          {/* Subtle Gradient Overlays for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/30 to-black/60" />
        </div>

        {/* TOP SPACER FOR HEADER */}
        <div className="h-24 z-10" />

        {/* HERO MAIN OVERLAY CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
          <div className="max-w-3xl space-y-5 animate-fade-in">
            
            {/* SMALL LABEL */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/40 border border-[#C8B9A6]/40 text-[#C8B9A6] text-[10px] sm:text-xs tracking-[0.25em] font-medium uppercase backdrop-blur-md">
              <span>INDIAN WEDDING PHOTOGRAPHY & FILMS</span>
            </div>

            {/* MAIN HEADING */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight uppercase text-white drop-shadow-md">
              WE CAPTURE <br />
              <span className="italic font-normal text-[#C8B9A6]">MOMENTS</span> <br />
              THAT LAST.
            </h1>

            {/* SUPPORTING TEXT */}
            <p className="text-sm sm:text-base text-white/80 max-w-xl font-sans leading-relaxed font-light drop-shadow">
              Wedding photography and cinematic films created around love, tradition and unforgettable emotional moments.
            </p>

            {/* HERO BUTTONS */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <PrimaryButton onClick={() => onNavigate('gallery')}>
                VIEW OUR WORK
              </PrimaryButton>
              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium text-xs tracking-widest uppercase transition-all duration-300 backdrop-blur-sm cursor-pointer min-h-[44px]"
              >
                CONTACT US
              </button>
            </div>

          </div>
        </div>

        {/* HERO BOTTOM BAR (Controls & Scroll Indicator) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 flex items-end justify-between">
          
          {/* MEDIA CONTROLS */}
          <div className="flex items-center gap-3 bg-black/50 border border-white/10 p-1.5 backdrop-blur-md">
            <button
              onClick={toggleHeroPlay}
              className="p-2 text-white/80 hover:text-[#C8B9A6] transition-colors"
              title={heroIsPlaying ? 'Pause Video' : 'Play Video'}
            >
              {heroIsPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </button>
            <button
              onClick={toggleHeroMute}
              className="p-2 text-white/80 hover:text-[#C8B9A6] transition-colors"
              title={heroIsMuted ? 'Unmute Sound' : 'Mute Sound'}
            >
              {heroIsMuted ? <VolumeX className="w-4 h-4 text-red-300" /> : <Volume2 className="w-4 h-4 text-[#C8B9A6]" />}
            </button>
            <button
              onClick={toggleHeroFullscreen}
              className="p-2 text-white/80 hover:text-[#C8B9A6] transition-colors hidden sm:block"
              title="Fullscreen Hero Video"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>

          {/* SCROLL INDICATOR */}
          <a
            href="#intro"
            className="hidden sm:flex flex-col items-center gap-1 text-white/60 hover:text-[#C8B9A6] transition-colors group cursor-pointer"
          >
            <span className="text-[9px] tracking-[0.25em] uppercase font-mono">SCROLL</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#C8B9A6]" />
          </a>

        </div>

      </section>

      {/* ========================================================= */}
      {/* 8.2 INTRODUCTION SECTION */}
      {/* ========================================================= */}
      <section id="intro" className="py-24 bg-[#F2F2F0] border-b border-[#E2E2DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* INTRO TEXT LEFT */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
                VIRAJ FILM STUDIO
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1C1C] leading-[1.15] uppercase">
                WE DON'T JUST <br />
                CAPTURE WEDDINGS. <br />
                <span className="italic font-normal text-[#C8B9A6]">WE CAPTURE</span> <br />
                THE FEELING.
              </h2>

              <p className="text-[#707070] text-base leading-relaxed font-sans max-w-lg">
                From quiet glances to grand celebrations, we preserve the emotions, traditions and moments that make every Indian wedding unique. Our craft lies in turning organic, fleeting memories into high-art cinematic films and heirloom imagery.
              </p>

              <div className="pt-2">
                <SecondaryButton onClick={() => onNavigate('about')}>
                  ABOUT US
                </SecondaryButton>
              </div>
            </div>

            {/* INTRO IMAGE RIGHT */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] overflow-hidden shadow-2xl border-8 border-white group">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
                  alt="Viraj Film Studio Bride Portrait"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-xs tracking-widest font-mono uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  GENERIC PORTFOLIO • COUPLE PORTRAITS
                </div>
              </div>

              {/* FLOATING ACCENT CARD */}
              <div className="absolute -bottom-6 -left-6 bg-[#1C1C1C] text-white p-6 max-w-xs hidden sm:block shadow-xl border-l-4 border-[#C8B9A6]">
                <p className="font-serif text-lg italic text-[#C8B9A6]">
                  "Authentic emotions captured with artistic precision."
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 8.3 SERVICES PREVIEW (EDITORIAL FEATURED GRID) */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-28 lg:py-32 bg-[#F2F2F0] border-b border-[#E2E2DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
          
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E2E2DF] pb-8">
            <div className="space-y-2">
              <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
                02 — WHAT WE DO
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#1C1C1C]">
                CAPTURED WITH PURPOSE
              </h2>
            </div>
            <p className="text-[#707070] text-sm sm:text-base font-sans max-w-md font-light leading-relaxed">
              From intimate portraits to grand celebrations, we create photographs and films that preserve the moments that matter.
            </p>
          </div>

          {/* COMPACT 3-COLUMN FEATURED SERVICES GRID WITH GENEROUS RHYTHM */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {FEATURED_HOME_SERVICES.map((service) => (
              <div
                key={service.id}
                onClick={() => onNavigate('services')}
                className="group bg-[#FFFFFF] border border-[#E2E2DF] p-6 sm:p-7 flex flex-col justify-between cursor-pointer hover:border-[#C8B9A6] shadow-xs transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-5">
                  {/* IMAGE FRAME */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1C1C1C] border border-[#E2E2DF]">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#1C1C1C]/90 text-[#C8B9A6] px-2.5 py-0.5 text-[11px] font-mono font-bold tracking-wider">
                      {service.number}
                    </div>
                  </div>

                  {/* TITLE & DESC */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase text-[#1C1C1C] group-hover:text-[#C8B9A6] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[#707070] text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* BOTTOM ACTION */}
                <div className="pt-5 mt-6 border-t border-[#E2E2DF]/60 flex items-center justify-between text-[11px] font-semibold tracking-widest text-[#1C1C1C] uppercase group-hover:text-[#C8B9A6] transition-colors">
                  <span>EXPLORE SERVICE</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* SERVICES PREVIEW BOTTOM CTA */}
          <div className="bg-[#FFFFFF] border border-[#E2E2DF] p-8 sm:p-10 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
                FULL BESPOKE OFFERINGS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-[#1C1C1C]">
                EXPLORE EVERYTHING WE CREATE
              </h3>
            </div>
            <div className="shrink-0">
              <PrimaryButton onClick={() => onNavigate('services')}>
                VIEW ALL SERVICES →
              </PrimaryButton>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 8.4 FEATURED GALLERY (SELECTED WORK) */}
      {/* ========================================================= */}
      <section className="py-24 bg-[#F2F2F0] border-b border-[#E2E2DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
              PORTFOLIO HIGHLIGHTS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-[#1C1C1C]">
              SELECTED WORK
            </h2>
            <p className="text-[#707070] text-sm font-sans">
              A collection of moments captured through our lens. Presented strictly using generic wedding categories.
            </p>
          </div>

          {/* ASYMMETRICAL EDITORIAL LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* FEATURED ITEM 1 (Large 8 Cols) */}
            <div
              onClick={() => onOpenImageLightbox(featuredGallery, 0)}
              className="md:col-span-8 group relative aspect-[16/10] overflow-hidden bg-[#1C1C1C] cursor-pointer shadow-lg border border-[#E2E2DF]"
            >
              <img
                src={featuredGallery[0].url}
                alt={featuredGallery[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#C8B9A6] uppercase font-semibold block">
                    {featuredGallery[0].categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl font-bold uppercase">{featuredGallery[0].title}</h3>
                </div>
                <span className="text-xs tracking-widest font-mono text-[#C8B9A6] underline uppercase">
                  VIEW STORY
                </span>
              </div>
            </div>

            {/* FEATURED ITEM 2 (4 Cols Tall) */}
            <div
              onClick={() => onOpenImageLightbox(featuredGallery, 1)}
              className="md:col-span-4 group relative aspect-[4/5] md:aspect-auto overflow-hidden bg-[#1C1C1C] cursor-pointer shadow-lg border border-[#E2E2DF]"
            >
              <img
                src={featuredGallery[1].url}
                alt={featuredGallery[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] tracking-[0.2em] text-[#C8B9A6] uppercase font-semibold block">
                  {featuredGallery[1].categoryLabel}
                </span>
                <h3 className="font-serif text-xl font-bold uppercase">{featuredGallery[1].title}</h3>
              </div>
            </div>

            {/* FEATURED ITEM 3 (4 Cols) */}
            <div
              onClick={() => onOpenImageLightbox(featuredGallery, 2)}
              className="md:col-span-4 group relative aspect-[4/5] overflow-hidden bg-[#1C1C1C] cursor-pointer shadow-lg border border-[#E2E2DF]"
            >
              <img
                src={featuredGallery[2].url}
                alt={featuredGallery[2].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] tracking-[0.2em] text-[#C8B9A6] uppercase font-semibold block">
                  {featuredGallery[2].categoryLabel}
                </span>
                <h3 className="font-serif text-xl font-bold uppercase">{featuredGallery[2].title}</h3>
              </div>
            </div>

            {/* FEATURED ITEM 4 (4 Cols Video Thumbnail) */}
            <div
              onClick={() => onOpenVideoLightbox(CINEMATIC_FILMS[0])}
              className="md:col-span-4 group relative aspect-[4/5] overflow-hidden bg-[#1C1C1C] cursor-pointer shadow-lg border border-[#E2E2DF]"
            >
              <img
                src={featuredGallery[5].thumbnailUrl}
                alt={featuredGallery[5].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#C8B9A6] text-[#1C1C1C] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] tracking-[0.2em] text-[#C8B9A6] uppercase font-semibold block">
                  CINEMATIC FILM TRAILER
                </span>
                <h3 className="font-serif text-xl font-bold uppercase">{featuredGallery[5].title}</h3>
              </div>
            </div>

            {/* FEATURED ITEM 5 (4 Cols Portrait) */}
            <div
              onClick={() => onOpenImageLightbox(featuredGallery, 4)}
              className="md:col-span-4 group relative aspect-[4/5] overflow-hidden bg-[#1C1C1C] cursor-pointer shadow-lg border border-[#E2E2DF]"
            >
              <img
                src={featuredGallery[4].url}
                alt={featuredGallery[4].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] tracking-[0.2em] text-[#C8B9A6] uppercase font-semibold block">
                  {featuredGallery[4].categoryLabel}
                </span>
                <h3 className="font-serif text-xl font-bold uppercase">{featuredGallery[4].title}</h3>
              </div>
            </div>

          </div>

          {/* VIEW FULL GALLERY BUTTON */}
          <div className="text-center pt-6">
            <PrimaryButton onClick={() => onNavigate('gallery')}>
              VIEW FULL GALLERY
            </PrimaryButton>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 8.5 CINEMATIC FILMS */}
      {/* ========================================================= */}
      <section className="py-24 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-4">
            <div>
              <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block mb-1">
                FILM & MOTION PORTFOLIO
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase">
                CINEMATIC FILMS
              </h2>
            </div>
            <p className="text-[#707070] text-sm max-w-md font-sans">
              "Some moments deserve to be experienced again."
            </p>
          </div>

          {/* FEATURED MAIN VIDEO + SMALLER CARDS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* MAIN LARGE FEATURED VIDEO (8 Cols) */}
            <div
              onClick={() => onOpenVideoLightbox(mainFeaturedFilm)}
              className="lg:col-span-7 group relative aspect-[16/9] overflow-hidden bg-black cursor-pointer border border-white/10 shadow-2xl"
            >
              <img
                src={mainFeaturedFilm.thumbnailUrl}
                alt={mainFeaturedFilm.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#C8B9A6] text-[#1C1C1C] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-9 h-9 fill-current ml-1" />
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-black/70 text-[#C8B9A6] px-3 py-1 text-xs font-mono tracking-widest border border-white/10">
                {mainFeaturedFilm.duration}
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] tracking-[0.2em] text-[#C8B9A6] uppercase font-semibold block">
                  {mainFeaturedFilm.category}
                </span>
                <h3 className="font-serif text-2xl font-bold uppercase">{mainFeaturedFilm.title}</h3>
                <p className="text-xs text-white/70 font-sans max-w-lg line-clamp-2">
                  {mainFeaturedFilm.description}
                </p>
              </div>
            </div>

            {/* 3 SMALLER SUPPORTING VIDEO CARDS (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              {supportingFilms.map((film) => (
                <div
                  key={film.id}
                  onClick={() => onOpenVideoLightbox(film)}
                  className="group flex items-center gap-4 p-3 bg-white/5 border border-white/10 hover:border-[#C8B9A6] transition-all cursor-pointer"
                >
                  <div className="relative w-32 aspect-[16/10] overflow-hidden shrink-0 bg-black">
                    <img
                      src={film.thumbnailUrl}
                      alt={film.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-8 h-8 rounded-full bg-[#C8B9A6] text-[#1C1C1C] flex items-center justify-center">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] tracking-widest text-[#C8B9A6] uppercase font-semibold">
                      {film.category} • {film.duration}
                    </span>
                    <h4 className="font-serif text-base font-bold uppercase text-white group-hover:text-[#C8B9A6] transition-colors leading-tight">
                      {film.title}
                    </h4>
                    <p className="text-[11px] text-[#707070] line-clamp-1">
                      {film.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 8.6 WHY CHOOSE VIRAJ */}
      {/* ========================================================= */}
      <section className="py-24 bg-[#F2F2F0] border-b border-[#E2E2DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
              STUDIO PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-[#1C1C1C]">
              WHY VIRAJ FILM STUDIO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-8 bg-[#FFFFFF] border border-[#E2E2DF] space-y-4 hover:border-[#C8B9A6] transition-colors">
              <span className="font-serif text-3xl font-bold text-[#C8B9A6]">01</span>
              <h3 className="font-serif text-xl font-bold uppercase text-[#1C1C1C]">
                AUTHENTIC MOMENTS
              </h3>
              <p className="text-xs text-[#707070] font-sans leading-relaxed">
                Natural emotions and candid storytelling. We focus on real tears, spontaneous laughter, and unscripted joy.
              </p>
            </div>

            <div className="p-8 bg-[#FFFFFF] border border-[#E2E2DF] space-y-4 hover:border-[#C8B9A6] transition-colors">
              <span className="font-serif text-3xl font-bold text-[#C8B9A6]">02</span>
              <h3 className="font-serif text-xl font-bold uppercase text-[#1C1C1C]">
                CINEMATIC STORYTELLING
              </h3>
              <p className="text-xs text-[#707070] font-sans leading-relaxed">
                Creative photography and film composition with magazine-grade lighting, prime optics, and color science.
              </p>
            </div>

            <div className="p-8 bg-[#FFFFFF] border border-[#E2E2DF] space-y-4 hover:border-[#C8B9A6] transition-colors">
              <span className="font-serif text-3xl font-bold text-[#C8B9A6]">03</span>
              <h3 className="font-serif text-xl font-bold uppercase text-[#1C1C1C]">
                INDIAN WEDDING EXPERIENCE
              </h3>
              <p className="text-xs text-[#707070] font-sans leading-relaxed">
                Deep understanding of sacred traditions, rituals, family dynamics, and the intricate timing of Indian celebrations.
              </p>
            </div>

            <div className="p-8 bg-[#FFFFFF] border border-[#E2E2DF] space-y-4 hover:border-[#C8B9A6] transition-colors">
              <span className="font-serif text-3xl font-bold text-[#C8B9A6]">04</span>
              <h3 className="font-serif text-xl font-bold uppercase text-[#1C1C1C]">
                CRAFTED WITH DETAIL
              </h3>
              <p className="text-xs text-[#707070] font-sans leading-relaxed">
                Professional editing, custom color correction, crystal audio mixing, and premium heirloom album finishing.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 8.7 BEHIND THE SCENES */}
      {/* ========================================================= */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#E2E2DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block mb-1">
                OUR CRAFT IN ACTION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase text-[#1C1C1C]">
                BEHIND THE FRAME
              </h2>
              <p className="text-xs text-[#707070] font-sans mt-1">
                A glimpse into the people, cameras and creativity behind every frame.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollBts('left')}
                className="p-3 bg-[#F2F2F0] hover:bg-[#1C1C1C] hover:text-white transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollBts('right')}
                className="p-3 bg-[#F2F2F0] hover:bg-[#1C1C1C] hover:text-white transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* HORIZONTAL MEDIA SLIDER */}
          <div
            ref={btsSliderRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4"
          >
            {BTS_ITEMS.map((item) => (
              <div
                key={item.id}
                className="w-80 sm:w-96 shrink-0 bg-[#F2F2F0] border border-[#E2E2DF] p-4 space-y-3 group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#1C1C1C]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] tracking-widest text-[#C8B9A6] uppercase font-semibold block">
                  {item.role}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#1C1C1C] uppercase">{item.title}</h3>
                <p className="text-xs text-[#707070] font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 8.8 SOCIAL MEDIA GRID */}
      {/* ========================================================= */}
      <section className="py-24 bg-[#F2F2F0] border-b border-[#E2E2DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
              LIVE FROM INSTAGRAM & SOCIALS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-[#1C1C1C]">
              FOLLOW OUR WORK
            </h2>
            <p className="text-xs text-[#707070] font-sans">
              Our latest photographs, films and behind-the-scenes moments live on our social platforms.
            </p>
          </div>

          {/* INSTAGRAM-STYLE MEDIA GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {SOCIAL_POSTS.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-[#1C1C1C] border border-[#E2E2DF] block"
              >
                <img
                  src={post.imageUrl}
                  alt={post.tag}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* REEL INDICATOR */}
                {post.type === 'reel' && (
                  <div className="absolute top-2 right-2 p-1 bg-black/60 text-[#C8B9A6] rounded">
                    <Film className="w-3.5 h-3.5" />
                  </div>
                )}

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-white text-center">
                  <Instagram className="w-5 h-5 text-[#C8B9A6] mb-1" />
                  <span className="text-[10px] font-mono">{post.likes} likes</span>
                  <span className="text-[9px] text-[#C8B9A6] font-semibold uppercase mt-1">{post.tag}</span>
                </div>
              </a>
            ))}
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={STUDIO_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFFFFF] border border-[#E2E2DF] text-[#1C1C1C] text-xs font-semibold tracking-wider uppercase hover:border-[#C8B9A6] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#C8B9A6]" />
              <span>INSTAGRAM</span>
            </a>

            <a
              href={STUDIO_INFO.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFFFFF] border border-[#E2E2DF] text-[#1C1C1C] text-xs font-semibold tracking-wider uppercase hover:border-[#C8B9A6] transition-colors"
            >
              <Youtube className="w-4 h-4 text-red-500" />
              <span>YOUTUBE</span>
            </a>

            <a
              href={STUDIO_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFFFFF] border border-[#E2E2DF] text-[#1C1C1C] text-xs font-semibold tracking-wider uppercase hover:border-[#C8B9A6] transition-colors"
            >
              <Facebook className="w-4 h-4 text-blue-600" />
              <span>FACEBOOK</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 8.9 FINAL CTA */}
      {/* ========================================================= */}
      <section className="relative py-28 bg-[#1C1C1C] text-white overflow-hidden">
        
        {/* BACKGROUND IMAGE WITH OVERLAY */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1920&auto=format&fit=crop"
            alt="Wedding Celebration"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
            CREATE WITH VIRAJ FILM STUDIO
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold uppercase leading-tight">
            YOUR STORY DESERVES <br />
            <span className="italic font-normal text-[#C8B9A6]">TO BE REMEMBERED.</span>
          </h2>

          <p className="text-white/80 text-base max-w-lg mx-auto font-sans font-light">
            Let's create something beautiful together. Reach out to discuss availability, custom packages, and your vision.
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
