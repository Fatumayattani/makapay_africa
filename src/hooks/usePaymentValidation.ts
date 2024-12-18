import { useState } from 'react';
import { validatePaymentAmount, validateAddress, validateChainId } from '../utils/validation';

interface ValidationErrors {
  amount?: string;
  recipient?: string;
  sourceChain?: string;
  targetChain?: string;
}

export const usePaymentValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateForm = (
    amount: string,
    recipient: string,
    sourceChain: string,
    targetChain: string
  ): boolean => {
    const newErrors: ValidationErrors = {};

    if (!validatePaymentAmount(Number(amount))) {
      newErrors.amount = 'Invalid amount';
    }

    if (!validateAddress(recipient)) {
      newErrors.recipient = 'Invalid address format';
    }

    if (!validateChainId(sourceChain)) {
      newErrors.sourceChain = 'Invalid source chain';
    }

    if (!validateChainId(targetChain)) {
      newErrors.targetChain = 'Invalid target chain';
    }

    if (sourceChain === targetChain) {
      newErrors.targetChain = 'Source and target chains must be different';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validateForm };
};