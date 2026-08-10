import React, { useState, useEffect, useRef } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize, Minimize } from 'lucide-react';

interface ImageLightboxProps {
  items: GalleryItem[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  items,
  initialIndex,
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoomLevel(1);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, items.length]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = () => {
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const toggleZoom = () => {
    setZoomLevel((prev) => (prev === 1 ? 2 : 1));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => console.log(err));
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartXRef.current;

    if (deltaX > 50) {
      handlePrev();
    } else if (deltaX < -50) {
      handleNext();
    }
    touchStartXRef.current = null;
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1C1C1C]/95 backdrop-blur-lg flex flex-col justify-between p-4 sm:p-6 text-white animate-fade-in select-none">
      
      {/* TOP CONTROL BAR */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <span className="text-xs tracking-widest text-[#C8B9A6] font-medium uppercase">
            {currentItem.categoryLabel}
          </span>
          <span className="text-white/40">•</span>
          <span className="text-xs font-mono text-white/70">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={toggleZoom}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors"
            title={zoomLevel > 1 ? 'Zoom Out' : 'Zoom In'}
          >
            {zoomLevel > 1 ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors hidden sm:block"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </button>

          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-[#C8B9A6] hover:bg-white/10 rounded transition-colors ml-2"
            title="Close (Esc)"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* MIDDLE IMAGE DISPLAY AREA */}
      <div
        className="relative flex-1 flex items-center justify-center overflow-hidden my-2"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* PREVIOUS BUTTON */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-20 p-3 bg-black/40 hover:bg-[#C8B9A6] hover:text-[#1C1C1C] text-white rounded-none transition-all duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* IMAGE */}
        <div className="max-w-full max-h-full flex items-center justify-center p-2 transition-transform duration-300">
          <img
            src={currentItem.url}
            alt={currentItem.title}
            className={`max-h-[82vh] max-w-[90vw] object-contain transition-transform duration-300 shadow-2xl ${
              zoomLevel > 1 ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
            }`}
            onClick={toggleZoom}
          />
        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-20 p-3 bg-black/40 hover:bg-[#C8B9A6] hover:text-[#1C1C1C] text-white rounded-none transition-all duration-300"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* BOTTOM INFORMATION BAR */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 pt-2 border-t border-white/10 z-10">
        <div>
          <h4 className="font-serif text-lg font-medium text-white">{currentItem.title}</h4>
          <p className="text-xs text-[#707070]">Generic Category Portfolio • Viraj Film Studio</p>
        </div>
        <p className="text-[11px] text-[#C8B9A6] uppercase tracking-wider hidden sm:block">
          Use ← → Arrow Keys or Swipe on mobile
        </p>
      </div>

    </div>
  );
};
