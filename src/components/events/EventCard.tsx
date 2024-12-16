import React from 'react';

interface EventCardProps {
  title: string;
  description: string;
  image: string;
}

export default function EventCard({ title, description, image }: EventCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="rounded-lg shadow-lg object-cover h-64 w-full"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}