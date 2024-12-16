import React from 'react';

interface StaffCardProps {
  name: string;
  position: string;
  description: string;
  image: string;
}

export default function StaffCard({ name, position, description, image }: StaffCardProps) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="rounded-full w-48 h-48 object-cover mb-6"
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 font-medium mb-2">{position}</p>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
}