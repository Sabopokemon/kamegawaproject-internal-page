import React from 'react';
import { organizationInfo } from '../types/organization';
import OrganizationHeader from './organization/OrganizationHeader';
import ContactInfo from './organization/ContactInfo';

export default function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070"
          alt="団体概要"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 text-white">
        <div className="bg-black/30 p-8 rounded-lg backdrop-blur-sm max-w-2xl">
          <OrganizationHeader info={organizationInfo} />
          <ContactInfo info={organizationInfo} />
        </div>
      </div>
    </section>
  );
}