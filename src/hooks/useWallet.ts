import { useState, useCallback } from 'react';
import type { WalletState } from '../types';

export const useWallet = () => {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    address: null,
  });

  const connectWallet = useCallback(async () => {
    try {
      // Placeholder for actual wallet connection logic
      setWalletState({
        isConnected: true,
        address: '0x...',
      });
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  }, []);

  const disconnectWallet = useCallback(() => {
    setWalletState({
      isConnected: false,
      address: null,
    });
  }, []);

  return {
    ...walletState,
    connectWallet,
    disconnectWallet,
  };
};