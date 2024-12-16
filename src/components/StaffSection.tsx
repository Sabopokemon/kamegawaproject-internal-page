import React from 'react';
import { Users } from 'lucide-react';
import SectionTitle from './common/SectionTitle';
import StaffCard from './staff/StaffCard';

const staff = [
  {
    name: '山田 太郎',
    position: '代表理事',
    description: '10年以上のコミュニティ開発経験を持ち、地域活性化プロジェクトを多数主導。',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070',
  },
  {
    name: '鈴木 花子',
    position: '副代表',
    description: '教育分野での経験を活かし、若者向けプログラムの企画・運営を担当。',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070',
  },
];

export default function StaffSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle icon={Users} title="スタッフ紹介" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {staff.map((member, index) => (
            <StaffCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}