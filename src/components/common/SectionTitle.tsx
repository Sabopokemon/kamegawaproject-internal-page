import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
}

export default function SectionTitle({ icon: Icon, title }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold text-gray-800 mb-12 flex items-center">
      <Icon className="mr-2" />
      {title}
    </h2>
  );
}