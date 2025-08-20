
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Experience as ExperienceType } from '../types';

interface TimelineItemProps {
  item: ExperienceType;
  alignment: 'left' | 'right';
}

const TimelineItem = ({ item, alignment }: TimelineItemProps) => (
  <div className={`timeline-container ${alignment} reveal-element`}>
    <div className="timeline-content">
      <p className="text-sm font-semibold text-accent">{item.date}</p>
      <h3 className="mt-2 text-2xl font-playfair font-semibold">{item.title}</h3>
      <p className="font-medium text-gray-600">{item.company}</p>
      <p className="mt-4 text-gray-700">{item.description}</p>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 reveal-element">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-charcoal">Professional Journey</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">A blend of political strategy, communications, and cultural event management.</p>
        </div>
        <div className="timeline reveal-element">
          {EXPERIENCE_DATA.map((item, index) => (
            <TimelineItem key={index} item={item} alignment={index % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
