import React from 'react';
import { Wallet2 } from 'lucide-react';

export const Header = () => {
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
            <button className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};