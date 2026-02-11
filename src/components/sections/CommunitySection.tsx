import React from 'react';
import { Trophy, MessageSquare, ThumbsUp } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
export function CommunitySection() {
  return (
    <section className="py-16 bg-surface-light/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Leaderboard */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="text-accent-orange" />
              <h2 className="text-2xl font-bold">Top Contributors</h2>
            </div>
            <GlassCard className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) =>
              <div
                key={i}
                className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors">

                  <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                    ${i === 1 ? 'bg-yellow-500/20 text-yellow-500' : i === 2 ? 'bg-gray-400/20 text-gray-400' : i === 3 ? 'bg-orange-700/20 text-orange-700' : 'bg-surface-light text-text-secondary'}
                  `}>

                    {i}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">CryptoHunter{i}</div>
                    <div className="text-xs text-text-secondary">
                      1,2{i}0 Points
                    </div>
                  </div>
                  <div className="text-xs font-mono text-primary-electric">
                    +24
                  </div>
                </div>
              )}
              <Button fullWidth variant="ghost" size="sm" className="mt-2">
                View Leaderboard
              </Button>
            </GlassCard>
          </div>

          {/* Community Activity */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="text-secondary-cyan" />
                <h2 className="text-2xl font-bold">Community Pulse</h2>
              </div>
              <Button variant="secondary" size="sm">
                Join Discord
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) =>
              <GlassCard key={i} hoverEffect className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary-cyan" />
                      <span className="text-sm font-medium">AdaWhale</span>
                    </div>
                    <span className="text-xs text-text-secondary">2h ago</span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    "Just checked out the roadmap for Cyber Samurai. The staking
                    utility looks insane! Definitely minting this one."
                  </p>
                  <div className="flex items-center gap-4 mt-auto pt-2">
                    <button className="flex items-center gap-1 text-xs text-text-secondary hover:text-primary-electric">
                      <ThumbsUp size={12} /> 24
                    </button>
                    <span className="text-xs text-primary-electric font-medium">
                      #CyberSamurai
                    </span>
                  </div>
                </GlassCard>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}