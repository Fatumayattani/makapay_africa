import { useContext } from 'react';
import { WormholeContext } from '../components/payment/WormholeProvider';

export const useWormhole = () => {
  const context = useContext(WormholeContext);
  
  if (!context) {
    throw new Error('useWormhole must be used within a WormholeProvider');
  }
  
  return context;
};