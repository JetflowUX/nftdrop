import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Radar } from 'lucide-react';
import { WalletConnectButton } from '../ui/WalletConnectButton';
import { Button } from '../ui/Button';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Upcoming',
    path: '/'
  },
  {
    name: 'Calendar',
    path: '/calendar'
  },
  {
    name: 'Submit',
    path: '/submit'
  },
  {
    name: 'Watchlist',
    path: '/watchlist'
  },
  {
    name: 'Community',
    path: '/community'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>

      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary-electric/20 p-2 rounded-lg group-hover:bg-primary-electric/30 transition-colors">
            <Radar className="text-primary-electric" size={24} />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-white">
            MintRadar <span className="text-primary-electric">ADA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-light/30 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/5">
          {navLinks.map((link) =>
          <Link
            key={link.path}
            to={link.path}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${location.pathname === link.path ? 'bg-primary text-white shadow-lg' : 'text-text-secondary hover:text-white hover:bg-white/5'}`}>

              {link.name}
            </Link>
          )}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <WalletConnectButton />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen &&
      <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) =>
        <Link
          key={link.path}
          to={link.path}
          onClick={() => setIsMobileMenuOpen(false)}
          className={`px-4 py-3 rounded-xl text-base font-medium ${location.pathname === link.path ? 'bg-primary/20 text-primary-electric' : 'text-text-secondary hover:bg-white/5'}`}>

              {link.name}
            </Link>
        )}
          <div className="pt-4 border-t border-white/10">
            <WalletConnectButton />
          </div>
        </div>
      }
    </header>);

}