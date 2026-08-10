import React, { useState, useEffect } from 'react';
import { PageRoute, GalleryItem, VideoItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ImageLightbox } from './components/ImageLightbox';
import { VideoLightbox } from './components/VideoLightbox';
import { PrivacyModal } from './components/PrivacyModal';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');

  // Lightbox States
  const [imageLightboxData, setImageLightboxData] = useState<{
    items: GalleryItem[];
    index: number;
    isOpen: boolean;
  }>({
    items: [],
    index: 0,
    isOpen: false
  });

  const [videoLightboxData, setVideoLightboxData] = useState<{
    video: VideoItem | null;
    isOpen: boolean;
  }>({
    video: null,
    isOpen: false
  });

  const [privacyModalType, setPrivacyModalType] = useState<'privacy' | 'terms' | null>(null);

  // Sync route with URL pathname
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '');
      if (['services', 'gallery', 'about', 'contact'].includes(path)) {
        setCurrentRoute(path as PageRoute);
      } else {
        setCurrentRoute('home');
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    const newPath = route === 'home' ? '/' : `/${route}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update document title dynamically for SEO
    const pageTitles: Record<PageRoute, string> = {
      home: 'Viraj Film Studio | Indian Wedding Photography & Cinematography',
      services: 'Services | Viraj Film Studio - Wedding Photography & Films',
      gallery: 'Gallery | Viraj Film Studio - Portfolio Collection',
      about: 'About Us | Viraj Film Studio - Story & Philosophy',
      contact: 'Contact Us | Viraj Film Studio - Enquiry & Bookings'
    };
    document.title = pageTitles[route] || pageTitles.home;
  };

  // Open Image Lightbox
  const handleOpenImageLightbox = (items: GalleryItem[], index: number) => {
    setImageLightboxData({
      items,
      index,
      isOpen: true
    });
  };

  // Open Video Lightbox
  const handleOpenVideoLightbox = (video: VideoItem) => {
    setVideoLightboxData({
      video,
      isOpen: true
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F2F2F0] text-[#1C1C1C] font-sans antialiased selection:bg-[#C8B9A6] selection:text-[#1C1C1C]">
      
      {/* SHARED HEADER */}
      <Header currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* PAGE CONTENT ROUTER */}
      <main className="flex-grow">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenImageLightbox={handleOpenImageLightbox}
            onOpenVideoLightbox={handleOpenVideoLightbox}
          />
        )}

        {currentRoute === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenVideoLightbox={handleOpenVideoLightbox}
          />
        )}

        {currentRoute === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenImageLightbox={handleOpenImageLightbox}
            onOpenVideoLightbox={handleOpenVideoLightbox}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentRoute === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* SHARED FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacyModal={(type) => setPrivacyModalType(type)}
      />

      {/* LIGHTBOX MODALS */}
      <ImageLightbox
        items={imageLightboxData.items}
        initialIndex={imageLightboxData.index}
        isOpen={imageLightboxData.isOpen}
        onClose={() => setImageLightboxData((prev) => ({ ...prev, isOpen: false }))}
      />

      <VideoLightbox
        video={videoLightboxData.video}
        isOpen={videoLightboxData.isOpen}
        onClose={() => setVideoLightboxData((prev) => ({ ...prev, isOpen: false }))}
      />

      <PrivacyModal
        type={privacyModalType}
        onClose={() => setPrivacyModalType(null)}
      />

      {/* FLOATING WHATSAPP & QUICK CONTACT WIDGET */}
      <FloatingContactWidget />

    </div>
  );
}
