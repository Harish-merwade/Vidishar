
import React from 'react';
import { GALLERY_DATA } from '../constants';

const Gallery = () => {
  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal-element">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-charcoal">Moments on Stage</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">Crafting stories in motion on stage and through experiences that inspire and connect.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children">
          {GALLERY_DATA.map((column, colIndex) => (
            <div key={colIndex} className="grid gap-4">
              {column.map((imageSrc, imgIndex) => (
                <div key={imgIndex}>
                  <img className="h-auto max-w-full rounded-lg" src={imageSrc} alt={`Gallery image ${colIndex}-${imgIndex}`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
