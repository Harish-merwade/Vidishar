import React from 'react';

const Hero = () => {
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-32 pb-16 md:pt-24 md:pb-12 relative overflow-hidden reveal-element">
      <div className="section-bg-art">
        <svg className="top-0 left-0 -translate-x-1/3 -translate-y-1/3" width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="400" cy="400" r="350" stroke="#D6C9BC" strokeWidth="1.5" /><circle cx="400" cy="400" r="250" stroke="#D6C9BC" strokeWidth="1" strokeDasharray="4 4"/></svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Wrapper for text and image */}
        {/* Mobile layout only */}
        <div className="w-full flex flex-col items-center gap-4 md:hidden">
          <div className="hero-image-wrapper reveal-element w-full flex justify-center mb-6">
            <img 
              src="/images/hero/Vidi Hero.png" 
              alt="Vidisha Ravindranath Portrait" 
              className="rounded-lg shadow-2xl w-full max-w-[250px] h-auto object-cover"
              style={{ width: '100%', maxWidth: '250px', height: 'auto' }}
            />
          </div>
          <div className="stagger-children text-center w-full">
            <h1 
              className="font-playfair text-4xl font-semibold leading-tight text-charcoal"
              style={{ fontSize: '8vw', maxWidth: '100%', lineHeight: '1.1' }}
            >
              Vidisha Ravindranath
            </h1>
            <div 
              className="text-xl font-playfair text-accent italic h-12 mt-2 relative"
              style={{ fontSize: '8vw', maxWidth: '100%' }}
            >
              <span className="dynamic-text-container">
                <span className="dynamic-text">Political Consultant.</span>
                <span className="dynamic-text">Classical Dancer.</span>
              </span>
            </div>
            <p className="mt-6 text-base max-w-md mx-auto">
              Shaping narratives through strategic communication and expressing stories through the discipline of dance.
            </p>
          </div>
        </div>
        {/* Desktop layout only */}
        <div className="w-full hidden md:grid grid-cols-5 md:grid-cols-2 items-center gap-4 md:gap-12">
          {/* Text content */}
          <div className="stagger-children text-left order-1 col-span-3 md:col-span-1">
            <h1 className="font-playfair text-4xl md:text-6xl font-semibold leading-tight text-charcoal">
              Vidisha Ravindranath
            </h1>
            <div className="text-xl md:text-3xl font-playfair text-accent italic h-12 mt-2 md:mt-4 relative">
              <span className="dynamic-text-container">
                <span className="dynamic-text">Political Consultant.</span>
                <span className="dynamic-text">Classical Dancer.</span>
              </span>
            </div>
            <p className="mt-6 md:mt-8 text-base md:text-lg max-w-md">
              Shaping narratives through strategic communication and expressing stories through the discipline of dance.
            </p>
          </div>
          {/* Image wrapper */}
          <div className="hero-image-wrapper reveal-element order-2 col-span-2 md:col-span-1 flex justify-center md:justify-end">
            <img 
              src="/images/hero/Vidi Hero.png" 
              alt="Vidisha Ravindranath Portrait" 
              className="rounded-lg shadow-2xl w-full max-w-[200px] sm:max-w-[240px] md:max-w-sm h-auto object-cover"
            />
          </div>
        </div>

        {/* Buttons container - centered below */}
        <div className="mt-12 flex flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="primary-btn inline-block text-white px-7 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform text-base"
          >
            Get In Touch
          </a>
          <a href="./Vidisha Ravindranath.pdf" download className="secondary-btn inline-flex items-center gap-2 text-white px-7 py-3 rounded-full hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
