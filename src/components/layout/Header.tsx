import React from 'react';
import { Wallet2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { useWallet } from '../../hooks/useWallet';
import { formatAddress } from '../../utils/format';

export const Header = () => {
  const { isConnected, address, connectWallet, disconnectWallet } = useWallet();

  return (
    <header className="bg-indigo-600">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Wallet2 className="h-8 w-8 text-white" />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-white">MakaPay</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {isConnected ? (
              <>
                <span className="text-white">{formatAddress(address!)}</span>
                <Button variant="secondary" onClick={disconnectWallet}>
                  Disconnect
                </Button>
              </>
            ) : (
              <Button onClick={connectWallet}>Connect Wallet</Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};