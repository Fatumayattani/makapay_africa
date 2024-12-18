import { paymentConfig } from '../config/payment';

export const validatePaymentAmount = (amount: number): boolean => {
  if (isNaN(amount)) return false;
  return amount >= paymentConfig.minimumAmount && 
         amount <= paymentConfig.maximumAmount;
};

export const validateAddress = (address: string): boolean => {
  // Basic Ethereum address validation
  const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
  // Basic Solana address validation
  const solanaAddressRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
  
  return ethAddressRegex.test(address) || solanaAddressRegex.test(address);
};

export const validateChainId = (chainId: string): boolean => {
  return paymentConfig.supportedChains.includes(chainId);
};