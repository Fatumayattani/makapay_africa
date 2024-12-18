import { WormholeClient } from '@wormhole-foundation/connect-sdk-client';

export class PaymentService {
  private client: WormholeClient;

  constructor(client: WormholeClient) {
    this.client = client;
  }

  async transfer(amount: string, recipient: string, sourceChain: string, targetChain: string) {
    try {
      // Implementation will be added when the SDK is properly configured
      console.log('Transfer initiated', { amount, recipient, sourceChain, targetChain });
      return true;
    } catch (error) {
      console.error('Transfer failed:', error);
      throw error;
    }
  }
}