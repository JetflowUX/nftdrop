import React from 'react';
import { useParams } from 'react-router-dom';
import { mockMints } from '../data/mockMints';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MobileNav } from '../components/layout/MobileNav';
import { Button } from '../components/ui/Button';
import { TagPill } from '../components/ui/TagPill';
import { VerifiedBadge } from '../components/ui/VerifiedBadge';
import { PriceBadge } from '../components/ui/PriceBadge';
import { CountdownTimer } from '../components/ui/CountdownTimer';
import { ProgressBar } from '../components/ui/ProgressBar';
import { GlassCard } from '../components/ui/GlassCard';
import { Globe, Twitter, Disc, Copy, Share2, AlertTriangle } from 'lucide-react';
export function MintDetailPage() {
  const { id } = useParams();
  const project = mockMints.find((m) => m.id === id) || mockMints[0];
  return (
    <div className="min-h-screen bg-background text-text-primary pb-20 md:pb-0">
      <Header />

      <main className="pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Section: Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Left: Image & Gallery */}
            <div className="lg:col-span-5 space-y-6">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-glow-lg relative group">
                <img
                  src={project.coverImage}
                  alt={project.name}
                  className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary">
                      <Share2 size={16} />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) =>
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden border border-white/10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity">

                    <img
                    src={project.coverImage}
                    alt="Gallery"
                    className="w-full h-full object-cover" />

                  </div>
                )}
              </div>
            </div>

            {/* Right: Info & Actions */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <TagPill label={project.category} type="category" />
                  {project.isVerified && <VerifiedBadge showText />}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {project.name}
                </h1>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlassCard className="space-y-4">
                  <div className="text-sm text-text-secondary uppercase tracking-wider">
                    Mint Starts In
                  </div>
                  <CountdownTimer targetDate={project.mintDate} size="lg" />
                </GlassCard>

                <GlassCard className="space-y-4 flex flex-col justify-center">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary uppercase tracking-wider">
                      Price
                    </span>
                    <PriceBadge price={project.mintPrice} size="lg" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary uppercase tracking-wider">
                      Supply
                    </span>
                    <span className="text-xl font-mono font-bold">
                      {project.supply.toLocaleString()}
                    </span>
                  </div>
                </GlassCard>
              </div>

              {project.isLive &&
              <div className="space-y-2">
                  <ProgressBar
                  value={project.minted}
                  max={project.supply}
                  label="Mint Progress" />

                  <Button variant="mint-live" fullWidth size="lg">
                    MINT NOW
                  </Button>
                </div>
              }

              {!project.isLive &&
              <div className="flex gap-4">
                  <Button variant="primary" fullWidth size="lg">
                    Remind Me
                  </Button>
                  <Button variant="secondary" size="lg">
                    <Share2 />
                  </Button>
                </div>
              }

              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe size={16} /> Website
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Twitter size={16} /> Twitter
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Disc size={16} /> Discord
                </Button>
                <div className="ml-auto flex items-center gap-2 bg-surface-light px-3 py-1.5 rounded-lg border border-white/5">
                  <span className="text-xs text-text-secondary font-mono">
                    Policy: {project.policyId}
                  </span>
                  <Copy
                    size={14}
                    className="text-text-secondary cursor-pointer hover:text-white" />

                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Details & Risk */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h3 className="text-2xl font-bold mb-6">About Project</h3>
                <div className="prose prose-invert max-w-none text-text-secondary">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="mt-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-6">Roadmap</h3>
                <div className="space-y-6 border-l-2 border-white/10 ml-3 pl-8 relative">
                  {[1, 2, 3].map((i) =>
                  <div key={i} className="relative">
                      <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-surface border-2 border-primary-electric" />
                      <h4 className="text-lg font-bold mb-2">
                        Phase {i}: The Beginning
                      </h4>
                      <p className="text-text-secondary text-sm">
                        Launch of the collection followed by community building
                        and initial utility rollout.
                      </p>
                    </div>
                  )}
                </div>
              </section>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <GlassCard className="border-accent-red/30 bg-accent-red/5">
                <div className="flex items-center gap-2 text-accent-red mb-3">
                  <AlertTriangle size={20} />
                  <h4 className="font-bold">Risk Warning</h4>
                </div>
                <p className="text-sm text-text-secondary mb-4">
                  Always do your own research (DYOR). NFT minting involves risk.
                  Verify policy IDs and smart contracts before connecting your
                  wallet.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  fullWidth
                  className="text-xs">

                  Read Safety Guide
                </Button>
              </GlassCard>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>);

}