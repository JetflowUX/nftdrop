import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MobileNav } from '../components/layout/MobileNav';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Bookmark } from 'lucide-react';
export function WatchlistPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary pb-20 md:pb-0">
      <Header />
      <main className="pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 animate-fade-up">Your Watchlist</h1>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-white/10 rounded-2xl bg-surface/30 animate-fade-up animate-delay-200">
            <div className="w-16 h-16 bg-surface-light rounded-full flex items-center justify-center mb-6">
              <Bookmark size={32} className="text-text-secondary" />
            </div>
            <h2 className="text-xl font-bold mb-2">No saved mints yet</h2>
            <p className="text-text-secondary max-w-md mb-8">
              Start tracking upcoming drops by clicking the heart or bell icon
              on any mint card.
            </p>
            <Link to="/">
              <Button>Explore Upcoming Mints</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>);

}