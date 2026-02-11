import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MobileNav } from '../components/layout/MobileNav';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
export function SubmitPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary pb-20 md:pb-0">
      <Header />
      <main className="pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl font-bold mb-4">Submit Your Project</h1>
            <p className="text-text-secondary">
              Get your Cardano NFT drop listed on MintRadar ADA.
            </p>
          </div>

          <GlassCard className="p-8 animate-fade-up animate-delay-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Name</label>
                  <input
                    type="text"
                    className="w-full bg-surface-light border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary-electric"
                    placeholder="e.g. Cyber Samurai" />

                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Mint Date</label>
                  <input
                    type="datetime-local"
                    className="w-full bg-surface-light border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary-electric" />

                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Supply</label>
                  <input
                    type="number"
                    className="w-full bg-surface-light border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary-electric"
                    placeholder="5555" />

                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Price (ADA)</label>
                  <input
                    type="number"
                    className="w-full bg-surface-light border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary-electric"
                    placeholder="45" />

                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <textarea
                  className="w-full bg-surface-light border border-white/10 rounded-lg p-3 h-32 focus:outline-none focus:border-primary-electric"
                  placeholder="Tell us about your project..." />

              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Official Links</label>
                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="url"
                    className="w-full bg-surface-light border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary-electric"
                    placeholder="Website URL" />

                  <input
                    type="url"
                    className="w-full bg-surface-light border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary-electric"
                    placeholder="Twitter URL" />

                  <input
                    type="url"
                    className="w-full bg-surface-light border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary-electric"
                    placeholder="Discord Invite" />

                </div>
              </div>

              <div className="pt-4">
                <Button fullWidth size="lg" type="submit">
                  Submit for Review
                </Button>
                <p className="text-xs text-center text-text-secondary mt-4">
                  Submissions are reviewed within 24 hours. Verification
                  requires additional proof of ownership.
                </p>
              </div>
            </form>
          </GlassCard>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>);

}