import React, { useState, useMemo } from 'react';
import { PageRoute, GalleryCategory, GalleryItem, VideoItem } from '../types';
import { GALLERY_ITEMS, CINEMATIC_FILMS, STUDIO_INFO } from '../data/portfolio';
import { Play, Instagram, Youtube, Filter } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenImageLightbox: (items: GalleryItem[], index: number) => void;
  onOpenVideoLightbox: (video: VideoItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenImageLightbox,
  onOpenVideoLightbox
}) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('ALL');

  const categories: GalleryCategory[] = [
    'ALL',
    'WEDDING',
    'PRE-WEDDING',
    'HALDI',
    'MEHNDI',
    'SANGEET',
    'RECEPTION',
    'EVENTS',
    'PORTRAITS',
    'VIDEOS'
  ];

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'ALL') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#F2F2F0] pt-24 pb-20">
      
      {/* GALLERY HERO */}
      <section className="bg-[#1C1C1C] text-white py-16 border-b border-[#E2E2DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
            VISUAL PORTFOLIO
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold uppercase tracking-tight">
            OUR GALLERY
          </h1>
          <p className="text-white/80 text-base max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Moments, emotions and celebrations captured through our lens. Presented strictly using generic wedding categories.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER BAR */}
      <section className="sticky top-20 z-30 bg-[#FFFFFF] border-b border-[#E2E2DF] shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-[10px] tracking-widest text-[#707070] font-semibold uppercase mr-2 shrink-0 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#C8B9A6]" />
              FILTERS:
            </span>

            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 text-xs tracking-wider uppercase font-medium transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#1C1C1C] text-white'
                      : 'bg-[#F2F2F0] text-[#1C1C1C] hover:bg-[#E2E2DF]'
                  }`}
                >
                  {cat}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C8B9A6]" />
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* EDITORIAL MEDIA MASONRY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 text-[#707070] font-serif text-lg">
            No gallery items found for this category.
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, index) => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (item.type === 'video') {
                      onOpenVideoLightbox(CINEMATIC_FILMS[0]);
                    } else {
                      onOpenImageLightbox(filteredItems, index);
                    }
                  }}
                  className="break-inside-avoid group relative overflow-hidden bg-[#1C1C1C] cursor-pointer shadow-md border border-[#E2E2DF]"
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />

                  {/* VIDEO PLAY OVERLAY IF TYPE IS VIDEO */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#C8B9A6] text-[#1C1C1C] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-1" />
                      </div>
                    </div>
                  )}

                  {/* HOVER TITLE & CATEGORY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                    <span className="text-[10px] tracking-[0.2em] text-[#C8B9A6] uppercase font-semibold">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-serif text-lg font-bold uppercase">{item.title}</h3>
                    {item.type === 'video' && (
                      <span className="text-xs text-[#C8B9A6] font-mono mt-1">
                        ▶ Watch Video ({item.videoDuration || '02:00'})
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </section>

      {/* SOCIAL CTA */}
      <section className="bg-[#FFFFFF] py-16 border-t border-[#E2E2DF] text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <span className="text-xs tracking-[0.25em] text-[#C8B9A6] font-semibold uppercase block">
            MORE DAILY UPDATES
          </span>
          <h2 className="font-serif text-3xl font-bold uppercase text-[#1C1C1C]">
            SEE MORE OF OUR WORK
          </h2>
          <p className="text-xs text-[#707070] font-sans">
            Follow our Instagram and YouTube channels for fresh daily Reels, BTS moments, and cinematic trailers.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <a
              href={STUDIO_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1C1C] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#111111] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#C8B9A6]" />
              <span>INSTAGRAM</span>
            </a>

            <a
              href={STUDIO_INFO.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFFFFF] border border-[#1C1C1C] text-[#1C1C1C] text-xs font-semibold tracking-wider uppercase hover:bg-[#F2F2F0] transition-colors"
            >
              <Youtube className="w-4 h-4 text-red-600" />
              <span>YOUTUBE</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
