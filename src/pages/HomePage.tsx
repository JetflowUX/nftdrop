import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MobileNav } from '../components/layout/MobileNav';
import { HeroSection } from '../components/sections/HeroSection';
import { StatsBar } from '../components/sections/StatsBar';
import { MintGrid } from '../components/sections/MintGrid';
import { CommunitySection } from '../components/sections/CommunitySection';
import { mockMints } from '../data/mockMints';
export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-text-primary pb-20 md:pb-0">
      <Header />

      <main>
        <HeroSection />
        <StatsBar />
        <MintGrid title="Upcoming Drops" mints={mockMints} />
        <CommunitySection />
      </main>

      <Footer />
      <MobileNav />
    </div>);

}