import React from 'react';
import type { Feature } from '../../types';

interface FeatureCardProps {
  feature: Feature;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const { name, description, icon: Icon } = feature;

  return (
    <div className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="inline-flex items-center justify-center rounded-xl bg-indigo-100 p-2">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{name}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};