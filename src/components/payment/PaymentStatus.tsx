import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface PaymentStatusProps {
  status: 'success' | 'error' | null;
  message?: string;
}

export const PaymentStatus: React.FC<PaymentStatusProps> = ({ status, message }) => {
  if (!status) return null;

  return (
    <div
      className={`mt-4 p-4 rounded-md ${
        status === 'success' ? 'bg-green-50' : 'bg-red-50'
      }`}
    >
      <div className="flex items-center">
        {status === 'success' ? (
          <CheckCircle className="h-5 w-5 text-green-400" />
        ) : (
          <XCircle className="h-5 w-5 text-red-400" />
        )}
        <span
          className={`ml-2 text-sm ${
            status === 'success' ? 'text-green-700' : 'text-red-700'
          }`}
        >
          {message}
        </span>
      </div>
    </div>
  );
};