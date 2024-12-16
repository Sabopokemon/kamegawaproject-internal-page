import React from 'react';
import { LucideIcon } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { Event } from '../../data/types';

interface EventSectionProps {
  title: string;
  icon: LucideIcon;
  events: Event[];
}

export default function EventSection({ title, icon, events }: EventSectionProps) {
  return (
    <section className="py-8">
      <SectionTitle icon={icon} title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-white text-sm font-medium">{event.date}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">{event.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}