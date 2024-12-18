import React from 'react';
import { Button } from '../ui/Button';
import { InputField } from '../ui/InputField';
import { ChainSelector } from './ChainSelector';
import { PaymentStatus } from './PaymentStatus';
import { usePaymentValidation } from '../../hooks/usePaymentValidation';
import { formatAmount } from '../../utils/format';
import { paymentConfig } from '../../config/payment';

interface PaymentFormProps {
  onSubmit: (amount: string, recipient: string, sourceChain: string, targetChain: string) => Promise<void>;
  isProcessing?: boolean;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit, isProcessing = false }) => {
  const [amount, setAmount] = React.useState<string>('');
  const [recipient, setRecipient] = React.useState<string>('');
  const [sourceChain, setSourceChain] = React.useState<string>('');
  const [targetChain, setTargetChain] = React.useState<string>('');
  const [status, setStatus] = React.useState<'success' | 'error' | null>(null);
  const [statusMessage, setStatusMessage] = React.useState<string>('');
  
  const { errors, validateForm } = usePaymentValidation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    
    if (validateForm(amount, recipient, sourceChain, targetChain)) {
      try {
        await onSubmit(amount, recipient, sourceChain, targetChain);
        setStatus('success');
        setStatusMessage('Payment initiated successfully');
      } catch (error) {
        setStatus('error');
        setStatusMessage('Payment failed. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-4 p-4 bg-gray-50 rounded-md">
        <p className="text-sm text-gray-600">
          Minimum amount: {formatAmount(paymentConfig.minimumAmount)} tokens
        </p>
        <p className="text-sm text-gray-600">
          Maximum amount: {formatAmount(paymentConfig.maximumAmount)} tokens
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ChainSelector
          label="Source Chain"
          value={sourceChain}
          onChange={setSourceChain}
        />
        <ChainSelector
          label="Target Chain"
          value={targetChain}
          onChange={setTargetChain}
        />
      </div>

      <InputField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        error={errors.amount}
        placeholder="Enter amount"
      />

      <InputField
        label="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        error={errors.recipient}
        placeholder="Enter recipient address"
      />

      <Button
        type="submit"
        disabled={isProcessing || !amount || !recipient || !sourceChain || !targetChain}
        className="w-full"
      >
        {isProcessing ? 'Processing...' : 'Transfer'}
      </Button>

      <PaymentStatus status={status} message={statusMessage} />
    </form>
  );
};