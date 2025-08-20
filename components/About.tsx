
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-earth relative overflow-hidden reveal-element">
      <div className="section-bg-art">
        <svg className="bottom-0 right-0 translate-x-1/3 translate-y-1/3" width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M350 700C543.3 700 700 543.3 700 350C700 156.7 543.3 0 350 0C156.7 0 0 156.7 0 350C0 543.3 156.7 700 350 700Z" fill="#D6C9BC" fillOpacity="0.6"/></svg>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto stagger-children">
          <h2 className="font-playfair text-4xl font-semibold text-accent">The Art of Communication, The Discipline of Dance.</h2>
          <p className="mt-6 text-lg">
            From campaign rooms to corporate decks, my journey has been about shaping narratives that move people with clarity, with strategy, and with impact.
          </p>
          <p className="mt-4 text-lg">
            Beyond the desk, there's rhythm. Years of Bharatanatyam and Kathak training have given me a different kind of discipline, one that speaks in silence, flows through form, and finds expression beyond words.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
