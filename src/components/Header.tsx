import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { Menu, X, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolio';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems: { route: PageRoute; label: string }[] = [
    { route: 'home', label: 'HOME' },
    { route: 'services', label: 'SERVICES' },
    { route: 'gallery', label: 'GALLERY' },
    { route: 'about', label: 'ABOUT US' },
    { route: 'contact', label: 'CONTACT US' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine header background styling
  const isHomePage = currentRoute === 'home';
  const headerBgClass = isScrolled || !isHomePage
    ? 'bg-[#F2F2F0]/95 backdrop-blur-md text-[#1C1C1C] border-b border-[#E2E2DF] shadow-sm'
    : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent text-white';

  const logoColor = isScrolled || !isHomePage ? 'text-[#1C1C1C]' : 'text-white';
  const navTextColor = isScrolled || !isHomePage ? 'text-[#1C1C1C]/80 hover:text-[#1C1C1C]' : 'text-white/90 hover:text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <button
          onClick={() => handleNavClick('home')}
          className="group text-left flex flex-col focus:outline-none cursor-pointer"
        >
          <span className={`font-serif text-xl sm:text-2xl font-bold tracking-wider uppercase transition-colors ${logoColor}`}>
            VIRAJ <span className="font-light italic text-[#C8B9A6]">FILM STUDIO</span>
          </span>
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#C8B9A6] font-sans font-medium -mt-1 hidden sm:block">
            PHOTOGRAPHY & CINEMATOGRAPHY
          </span>
        </button>

        {/* DESKTOP NAV ITEMS */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`relative text-xs tracking-[0.18em] font-medium transition-colors py-1 cursor-pointer ${navTextColor}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8B9A6] animate-fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* MOBILE HAMBURGER BUTTON */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-none focus:outline-none ${isScrolled || !isHomePage ? 'text-[#1C1C1C]' : 'text-white'}`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#1C1C1C]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU FULL-SCREEN PANEL */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-[#F2F2F0] text-[#1C1C1C] z-50 flex flex-col justify-between p-6 overflow-y-auto animate-fade-in">
          
          {/* TOP BAR */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E2E2DF]">
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wider uppercase text-[#1C1C1C]">
                VIRAJ <span className="font-light italic text-[#C8B9A6]">FILM STUDIO</span>
              </span>
              <span className="text-[8px] tracking-[0.2em] uppercase text-[#707070]">
                PHOTOGRAPHY & CINEMATOGRAPHY
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#1C1C1C] hover:text-[#C8B9A6] focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* NAV LINKS */}
          <div className="flex flex-col space-y-6 my-auto py-8">
            {navItems.map((item, idx) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`text-left text-2xl font-serif tracking-wider uppercase flex items-center justify-between py-2 border-b border-[#E2E2DF]/60 ${
                    isActive ? 'text-[#1C1C1C] font-semibold' : 'text-[#707070]'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-sans text-[#C8B9A6]">0{idx + 1}</span>
                    {item.label}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#C8B9A6]" />}
                </button>
              );
            })}
          </div>

          {/* MOBILE FOOTER CTA */}
          <div className="pt-6 border-t border-[#E2E2DF] flex flex-col gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-4 bg-[#1C1C1C] text-white font-medium text-xs tracking-widest uppercase text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#C8B9A6]" />
              <span>BOOK / ENQUIRE NOW</span>
            </button>

            <div className="flex items-center justify-center gap-6 pt-2 text-[#707070]">
              <a href={STUDIO_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#1C1C1C] text-xs uppercase tracking-wider">Instagram</a>
              <span>•</span>
              <a href={STUDIO_INFO.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[#1C1C1C] text-xs uppercase tracking-wider">YouTube</a>
              <span>•</span>
              <a href={STUDIO_INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#1C1C1C] text-xs uppercase tracking-wider">Facebook</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
