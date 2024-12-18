import React from 'react';
import { features } from '../../config/features';
import { FeatureCard } from './FeatureCard';

export const FeatureGrid = () => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.name} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};