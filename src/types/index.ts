export interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WalletState {
  isConnected: boolean;
  address: string | null;
}

export interface PaymentConfig {
  supportedChains: string[];
  minimumAmount: number;
  maximumAmount: number;
}