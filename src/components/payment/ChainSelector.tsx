import React from 'react';
import { paymentConfig } from '../../config/payment';

interface ChainSelectorProps {
  value: string;
  onChange: (chain: string) => void;
  label: string;
}

export const ChainSelector: React.FC<ChainSelectorProps> = ({
  value,
  onChange,
  label,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-md border-gray-300 shadow-sm 
          focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        <option value="">Select chain</option>
        {paymentConfig.supportedChains.map((chain) => (
          <option key={chain} value={chain}>
            {chain.charAt(0).toUpperCase() + chain.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};