import React from 'react';
import { WormholeClient } from "@wormhole-foundation/connect-sdk-client";
import { EvmPlatform } from '@wormhole-foundation/connect-sdk-evm';
import { SolanaPlatform } from '@wormhole-foundation/connect-sdk-solana';
import { CosmwasmPlatform } from '@wormhole-foundation/connect-sdk-cosmwasm';

interface WormholeContextType {
  client: WormholeClient | null;
  isInitialized: boolean;
}

export const WormholeContext = React.createContext<WormholeContextType>({
  client: null,
  isInitialized: false,
});

export const WormholeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [client, setClient] = React.useState<WormholeClient | null>(null);
  const [isInitialized, setIsInitialized] = React.useState(false);

  React.useEffect(() => {
    const initWormhole = async () => {
      try {
        const platforms = [
          EvmPlatform,
          SolanaPlatform,
          CosmwasmPlatform,
        ];

        const wormholeClient = await WormholeClient.from(platforms, {
          network: 'TESTNET',
        });

        setClient(wormholeClient);
        setIsInitialized(true);
      } catch (error) {
        console.error('Failed to initialize Wormhole:', error);
      }
    };

    initWormhole();
  }, []);

  return (
    <WormholeContext.Provider value={{ client, isInitialized }}>
      {children}
    </WormholeContext.Provider>
  );
};