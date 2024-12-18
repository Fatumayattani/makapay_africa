import { Shield, Zap, Globe2, Coins } from 'lucide-react';
import type { Feature } from '../types';

export const features: Feature[] = [
  {
    name: 'Secure Transactions',
    description: 'Enterprise-grade security with multi-signature protection',
    icon: Shield,
  },
  {
    name: 'Instant Settlements',
    description: 'Real-time cross-chain transactions and settlements',
    icon: Zap,
  },
  {
    name: 'Global Reach',
    description: 'Accept payments from anywhere in Africa and beyond',
    icon: Globe2,
  },
  {
    name: 'Multi-Currency Support',
    description: 'Support for major cryptocurrencies and traditional payments',
    icon: Coins,
  },
];