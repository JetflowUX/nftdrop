import React, { useMemo } from 'react';
import { Trophy, Users, BarChart3, BookOpen, MessageSquare, Twitter, Disc, ArrowUpRight, TrendingUp } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MobileNav } from '../components/layout/MobileNav';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { mockMints } from '../data/mockMints';
import { PriceBadge } from '../components/ui/PriceBadge';
import { VerifiedBadge } from '../components/ui/VerifiedBadge';
import { Link } from 'react-router-dom';

export function CommunityPage() {
  const trendingCollections = useMemo(() => {
    return [...mockMints]
      .sort((a, b) => b.communityRating - a.communityRating)
      .slice(0, 5);
  }, []);

  const resources = [
    {
      title: 'NFT Safety Guide',
      description: 'Learn how to protect your wallet and identify common scams in the Cardano ecosystem.',
      icon: BookOpen,
      color: 'text-secondary-cyan',
      link: '#'
    },
    {
      title: 'Minting 101',
      description: 'Everything you need to know about participating in your first NFT drop.',
      icon: TrendingUp,
      color: 'text-secondary-teal',
      link: '#'
    },
    {
      title: 'Community Roadmap',
      description: 'See what we are building next and how you can get involved in the DAO.',
      icon: BarChart3,
      color: 'text-primary-electric',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-text-primary pb-20 md:pb-0">
      <Header />

      <main className="pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MintRadar <span className="text-primary-electric">Community</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              The heart of the Cardano NFT ecosystem. Discover trending collections, 
              climb the leaderboard, and learn from experts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 animate-fade-up animate-delay-200">
            {/* Left Column: Rankings */}
            <div className="lg:col-span-8 space-y-8">
              <section>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-secondary-cyan" />
                    <h2 className="text-2xl font-bold">Trending Rankings</h2>
                  </div>
                  <Link to="/community">
                    <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-2">
                      View All <BarChart3 size={16} />
                    </Button>
                  </Link>
                </div>

                <GlassCard className="!p-0 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-white/5 bg-white/2">
                          <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">Rank</th>
                          <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">Collection</th>
                          <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-secondary hidden sm:table-cell">Floor Price</th>
                          <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">Rating</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {trendingCollections.map((collection, index) => (
                          <tr key={collection.id} className="hover:bg-white/2 transition-colors group cursor-pointer">
                            <td className="px-6 py-4">
                              <span className="font-mono font-bold text-lg text-text-secondary group-hover:text-primary-electric">
                                {(index + 1).toString().padStart(2, '0')}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <Link to={`/mint/${collection.id}`} className="flex items-center gap-4">
                                <img 
                                  src={collection.coverImage} 
                                  alt={collection.name} 
                                  className="w-12 h-12 rounded-lg object-cover"
                                />
                                <div>
                                  <div className="flex items-center gap-1 font-bold">
                                    {collection.name}
                                    {collection.isVerified && <VerifiedBadge />}
                                  </div>
                                  <div className="text-xs text-text-secondary">{collection.supply.toLocaleString()} items</div>
                                </div>
                              </Link>
                            </td>
                            <td className="px-6 py-4 hidden sm:table-cell">
                              <PriceBadge price={collection.mintPrice} />
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <div className="h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
                                  {/* Dynamic width based on rating percentage */}
                                  {/* eslint-disable-next-line react/forbid-dom-props */}
                                  <div 
                                    className="h-full bg-primary-electric rounded-full" 
                                    style={{ width: `${collection.communityRating}%` }}
                                  />
                                </div>
                                <span className="font-mono font-bold text-sm">{collection.communityRating}%</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </GlassCard>
              </section>

              {/* Feed/Activity inspiration from OS Activity tab */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare className="text-secondary-teal" />
                  <h2 className="text-2xl font-bold">Community Activity</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <GlassCard key={i} hoverEffect className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 font-medium text-sm">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary-cyan" />
                          User_{i}42
                        </div>
                        <span className="text-xs text-text-secondary">5m ago</span>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        "Just listed my Cyber Samurai for 450 ADA. Looking for a new home!"
                      </p>
                      <div className="flex items-center gap-2 text-xs font-semibold text-primary-electric">
                        <ArrowUpRight size={14} /> View Activity
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Leaderboard Inspiration from OS/MagicEden */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <Trophy className="text-accent-orange" />
                  <h2 className="text-xl font-bold">Top Contributors</h2>
                </div>
                <GlassCard className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs ${
                          i === 1 ? 'bg-yellow-500/20 text-yellow-500' : 
                          i === 2 ? 'bg-gray-400/20 text-gray-400' : 
                          i === 3 ? 'bg-orange-700/20 text-orange-700' : 
                          'bg-surface-light text-text-secondary'
                        }`}>
                          {i}
                        </div>
                        <div className="text-sm font-medium group-hover:text-primary-electric transition-colors">AlphaHunter_{i}</div>
                      </div>
                      <div className="text-sm font-bold font-mono">2,{500 - (i * 100)} XP</div>
                    </div>
                  ))}
                  <Link to="/community">
                    <Button variant="secondary" size="sm" fullWidth className="mt-4">
                      View Full Rankings
                    </Button>
                  </Link>
                </GlassCard>
              </section>

              {/* Resources inspiration */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <Users className="text-primary-electric" />
                  <h2 className="text-xl font-bold">Resources</h2>
                </div>
                <div className="space-y-4">
                  {resources.map((resource, index) => (
                    <GlassCard key={index} className="group cursor-pointer hover:border-primary-electric/30 transition-all">
                      <div className="flex gap-4">
                        <div className={`p-2 rounded-lg bg-surface-light h-fit ${resource.color}`}>
                          <resource.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1 group-hover:text-primary-electric transition-colors">{resource.title}</h4>
                          <p className="text-xs text-text-secondary leading-normal">{resource.description}</p>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </section>

              {/* Socials CTA */}
              <GlassCard className="bg-primary/10 border-primary/20 space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Join the Club</h3>
                  <p className="text-sm text-text-secondary italic">Stay ahead of the curve with real-time alerts.</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" className="flex items-center justify-center gap-2">
                      <Twitter size={18} /> Twitter
                    </Button>
                  </a>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" className="flex items-center justify-center gap-2 text-indigo-400">
                      <Disc size={18} /> Discord
                    </Button>
                  </a>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}
