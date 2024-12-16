import React from 'react';
import { Calendar } from 'lucide-react';
import SectionTitle from './common/SectionTitle';
import EventCard from './events/EventCard';

const events = [
  {
    title: '地域イベント企画',
    description: '地域コミュニティの活性化を目指し、様々な世代が参加できるイベントを企画・運営しています。',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: '課題解決プロジェクト',
    description: '地域が抱える課題に対して、住民の方々と協力しながら具体的な解決策を見出していきます。',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2070',
  },
];

export default function EventsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle icon={Calendar} title="主催企画・イベント" />
        <div className="space-y-12">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}