import React from 'react';
import { Building2 } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { organizationInfo } from '../../types/organization';
import ContactInfo from './ContactInfo';

export default function OrganizationSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle icon={Building2} title="会社概要" />
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
                alt="会社外観"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">団体名</h3>
                <p className="text-gray-700">{organizationInfo.name}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">代表取締役</h3>
                <p className="text-gray-700">{organizationInfo.representative}</p>
              </div>
              <ContactInfo info={organizationInfo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}