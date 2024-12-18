import React from 'react';
import { WormholeConnect } from '@wormhole-foundation/wormhole-connect';

export const PaymentGateway = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Cross-Chain Payment Gateway
        </h2>
        <WormholeConnect />
      </div>
    </div>
  );
};