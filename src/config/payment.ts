import type { PaymentConfig } from '../types';

export const paymentConfig: PaymentConfig = {
  supportedChains: ['ethereum', 'binance', 'solana'],
  minimumAmount: 0.01,
  maximumAmount: 10000,
};