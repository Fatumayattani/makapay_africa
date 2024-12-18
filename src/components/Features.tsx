import React from 'react';
import { Shield, Zap, Globe2, Coins } from 'lucide-react';

const features = [
  {
    name: 'Secure Transactions',
    description: 'Enterprise-grade security with multi-signature protection',
    icon: Shield,
  },
  {
    name: 'Instant Settlements',
    description: 'Real-time cross-chain transactions and settlements',
    icon: Zap,
  },
  {
    name: 'Global Reach',
    description: 'Accept payments from anywhere in Africa and beyond',
    icon: Globe2,
  },
  {
    name: 'Multi-Currency Support',
    description: 'Support for major cryptocurrencies and traditional payments',
    icon: Coins,
  },
];

export const Features = () => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="inline-flex items-center justify-center rounded-xl bg-indigo-100 p-2">
                <feature.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};