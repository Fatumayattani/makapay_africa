import React from 'react';
import { useWallet } from '../../hooks/useWallet';
import { WormholeContext } from './WormholeProvider';
import { PaymentForm } from './PaymentForm';
import { Button } from '../ui/Button';

export const PaymentGateway = () => {
  const { isConnected, connectWallet } = useWallet();
  const { client, isInitialized } = React.useContext(WormholeContext);
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleTransfer = async (amount: string, recipient: string) => {
    if (!client || !isInitialized) {
      console.error('Wormhole client not initialized');
      return;
    }

    setIsProcessing(true);
    try {
      // Implementation will be added in the next iteration
      console.log('Transfer initiated', { amount, recipient });
    } catch (error) {
      console.error('Transfer failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Cross-Chain Payment Gateway
        </h2>
        {!isConnected ? (
          <div className="text-center">
            <p className="mb-4 text-gray-600">
              Connect your wallet to start making payments
            </p>
            <Button
              onClick={connectWallet}
              className="w-full"
            >
              Connect Wallet
            </Button>
          </div>
        ) : (
          <PaymentForm
            onSubmit={handleTransfer}
            isProcessing={isProcessing}
          />
        )}
      </div>
    </div>
  );
};