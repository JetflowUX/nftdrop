import React, { useState } from 'react';
import { Wallet, ChevronDown, LogOut } from 'lucide-react';
import { Button } from './Button';
export function WalletConnectButton() {
  const [isConnected, setIsConnected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const handleConnect = (wallet: string) => {
    setIsConnected(true);
    setWalletAddress('addr1...9x2y');
    setIsOpen(false);
  };
  const handleDisconnect = () => {
    setIsConnected(false);
    setWalletAddress('');
    setIsOpen(false);
  };
  if (isConnected) {
    return (
      <div className="relative">
        <Button
          variant="secondary"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 !py-2">

          <div className="w-2 h-2 rounded-full bg-secondary-teal animate-pulse" />
          <span className="font-mono text-sm">{walletAddress}</span>
          <ChevronDown size={14} />
        </Button>

        {isOpen &&
        <div className="absolute right-0 mt-2 w-48 bg-surface border border-white/10 rounded-xl shadow-xl z-50 overflow-hidden">
            <button
            onClick={handleDisconnect}
            className="w-full px-4 py-3 text-left text-sm text-accent-red hover:bg-white/5 flex items-center gap-2">

              <LogOut size={14} />
              Disconnect
            </button>
          </div>
        }
      </div>);

  }
  return (
    <div className="relative">
      <Button
        variant="primary"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2">

        <Wallet size={18} />
        Connect Wallet
      </Button>

      {isOpen &&
      <div className="absolute right-0 mt-2 w-56 bg-surface border border-white/10 rounded-xl shadow-xl z-50 overflow-hidden">
          <div className="p-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">
            Select Wallet
          </div>
          {['Eternl', 'Nami', 'Lace', 'Flint'].map((wallet) =>
        <button
          key={wallet}
          onClick={() => handleConnect(wallet)}
          className="w-full px-4 py-3 text-left text-sm text-text-primary hover:bg-white/5 flex items-center justify-between group">

              {wallet}
              <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-primary-electric transition-colors" />
            </button>
        )}
        </div>
      }
    </div>);

}