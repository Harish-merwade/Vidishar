import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { NavLink } from '../types';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header id="main-header" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#" className="text-2xl font-playfair font-semibold text-accent">Vidisha R.</a>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          {NAV_LINKS.map((link: NavLink) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)} 
              className="hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="primary-btn inline-block text-white px-7 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform text-sm"
          >
            Contact
          </a>
        </div>
        <button id="mobile-menu-button" className="md:hidden focus:outline-none text-charcoal" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </nav>
      <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-cream/95 backdrop-blur-sm px-6 pb-4`}>
        {NAV_LINKS.map((link: NavLink) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)} 
              className="block py-2 hover:text-accent"
            >
              {link.label}
            </a>
        ))}
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, '#contact')}
          className="block py-2 mt-2 text-accent"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
