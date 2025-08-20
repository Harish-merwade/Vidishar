
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Dance from './components/Dance';
import Gallery from './components/Gallery';
import Storybook from './components/Storybook';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.reveal-element, .stagger-children, .timeline');
    
    if (typeof IntersectionObserver === 'undefined') {
        animatedElements.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Dance />
        <Gallery />
        <Storybook />
      </main>
      <Footer />
    </>
  );
}

export default App;
