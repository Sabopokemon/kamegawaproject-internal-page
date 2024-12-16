import React from 'react';
import { Building } from 'lucide-react';
import { OrganizationDetails } from '../../types/organization';

interface OrganizationHeaderProps {
  info: OrganizationDetails;
}

export default function OrganizationHeader({ info }: OrganizationHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center">
        <Building className="mr-3" />
        団体概要
      </h1>
      <div className="text-2xl font-semibold mb-2">{info.name}</div>
      <div className="text-xl">
        代表取締役: {info.representative}
      </div>
    </div>
  );
}