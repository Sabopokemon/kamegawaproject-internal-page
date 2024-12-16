import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { OrganizationDetails } from '../../types/organization';

interface ContactInfoProps {
  info: OrganizationDetails;
}

export default function ContactInfo({ info }: ContactInfoProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">連絡先</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-3 text-gray-500" />
            <span className="text-gray-700">{info.phone}</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-3 text-gray-500" />
            <a 
              href={`mailto:${info.email}`} 
              className="text-blue-600 hover:underline"
            >
              {info.email}
            </a>
          </div>
          <div className="flex items-start">
            <MapPin className="w-5 h-5 mr-3 text-gray-500 mt-1" />
            <div className="text-gray-700">
              <div>{info.address.postal}</div>
              <div>{info.address.full}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}