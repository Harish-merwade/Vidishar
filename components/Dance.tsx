
import React from 'react';

const Dance = () => {
  return (
    <section id="dance" className="py-24 bg-earth overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 reveal-element">
            <img src="/images/Bharatanatyam/Dance 1.png" alt="Vidisha performing Bharatanatyam" className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/5] transition-all duration-300 hover:scale-105 hover:shadow-2xl" />
            <img src="/images/Bharatanatyam/Dance 2.png" alt="Vidisha in a dance pose" className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/5] mt-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl" />
          </div>
          <div className="reveal-element" style={{ transitionDelay: '200ms' }}>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-charcoal">A Lifelong Passion</h2>
            <p className="mt-6 text-lg">My journey in dance is a story told over two decades. I've trained in Bharatanatyam for over 20 years and in Kathak for 7 years under esteemed Gurus.</p>
            <p className="mt-4">From the grandeur of Mysuru Dasara to representing Indian classical arts in Malaysia, each performance has been a chapter in this journey. This passion has also led me to teach, sharing the art form with visually challenged students and young dancers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dance;
