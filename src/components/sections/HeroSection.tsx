import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { SearchInput } from '../ui/SearchInput';
import { GlassCard } from '../ui/GlassCard';
import { mockMints } from '../../data/mockMints';
import { CountdownTimer } from '../ui/CountdownTimer';
export function HeroSection() {
  const featuredMint = mockMints[0];
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-primary-electric/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-electric text-sm font-medium animate-fade-up">
              <Sparkles size={14} />
              <span>The #1 Cardano NFT Calendar</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight animate-fade-up animate-delay-100">
              Track Every <br />
              <span className="text-gradient-primary">Cardano Mint</span> <br />
              Before It Drops.
            </h1>

            <p className="text-lg text-text-secondary max-w-xl mx-auto lg:mx-0 animate-fade-up animate-delay-200">
              The most trusted community-powered calendar for verified ADA
              drops. Never miss a mint again with real-time tracking and alerts.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-up animate-delay-300">
              <Link to="/">
                <Button size="lg" className="group">
                  Explore Upcoming
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform" />

                </Button>
              </Link>
              <Link to="/submit">
                <Button variant="secondary" size="lg">
                  Submit Project
                </Button>
              </Link>
            </div>

            <div className="pt-8 max-w-md mx-auto lg:mx-0 animate-fade-up animate-delay-500">
              <SearchInput placeholder="Search by name, policy ID, or tag..." />
            </div>
          </div>

          {/* Right Visual (Floating Cards) */}
          <div className="relative hidden lg:block h-[600px]">
            {/* Main Floating Card */}
            <div className="absolute top-10 right-10 w-80 z-20 animate-float">
              <GlassCard className="!p-0 overflow-hidden shadow-glow-lg border-primary/30">
                <div className="h-48 relative">
                  <img
                    src={featuredMint.coverImage}
                    alt="Featured"
                    className="w-full h-full object-cover" />

                  <div className="absolute top-3 right-3 bg-background/80 backdrop-blur px-2 py-1 rounded-lg text-xs font-mono text-primary-electric border border-white/10">
                    ₳ {featuredMint.mintPrice}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">
                    {featuredMint.name}
                  </h3>
                  <div className="mb-4">
                    <CountdownTimer
                      targetDate={featuredMint.mintDate}
                      size="sm" />

                  </div>
                  <Link to={`/mint/${featuredMint.id}`}>
                    <Button fullWidth size="sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </GlassCard>
            </div>

            {/* Background Decorative Cards */}
            <div
              className="absolute top-40 right-60 w-72 z-10 opacity-60 scale-90 blur-[1px] animate-float"
              style={{
                animationDelay: '1s'
              }}>

              <GlassCard className="h-80 bg-surface-light/50" children={null} />
            </div>
            <div
              className="absolute top-0 right-0 w-64 z-0 opacity-30 scale-75 blur-[2px] animate-float"
              style={{
                animationDelay: '2s'
              }}>

              <GlassCard className="h-64 bg-surface-light/30" children={null} />
            </div>
          </div>
        </div>
      </div>
    </section>);

}