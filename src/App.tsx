import React from 'react';
import { Header } from './components/layout/Header';
import { PaymentGateway } from './components/payment/PaymentGateway';
import { FeatureGrid } from './components/features/FeatureGrid';
import { WormholeProvider } from './components/payment/WormholeProvider';

function App() {
  return (
    <WormholeProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Seamless Cross-Chain Payments for African Businesses
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Accept payments from multiple digital wallets and cryptocurrencies with instant, secure, and low-cost transfers.
              </p>
            </div>

            <div className="mt-12">
              <PaymentGateway />
            </div>

            <div className="mt-16">
              <FeatureGrid />
            </div>
          </div>
        </main>

        <footer className="bg-white mt-12 border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} MakaPay. All rights reserved. Powered by Wormhole Connect.
            </p>
          </div>
        </footer>
      </div>
    </WormholeProvider>
  );
}

export default App;