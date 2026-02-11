import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MobileNav } from '../components/layout/MobileNav';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { TagPill } from '../components/ui/TagPill';
import { VerifiedBadge } from '../components/ui/VerifiedBadge';
import { PriceBadge } from '../components/ui/PriceBadge';
import { CountdownTimer } from '../components/ui/CountdownTimer';
import { HeatIndicator } from '../components/ui/HeatIndicator';
import { mockMints } from '../data/mockMints';

const timeWindows = [
  { id: '24h', label: 'Next 24h', ms: 1000 * 60 * 60 * 24 },
  { id: '72h', label: 'Next 72h', ms: 1000 * 60 * 60 * 72 },
  { id: '7d', label: 'Next 7 Days', ms: 1000 * 60 * 60 * 24 * 7 }
];

export function CalendarPage() {
  const [activeWindow, setActiveWindow] = useState(timeWindows[1]);
  const now = Date.now();

  const upcomingMints = useMemo(() => {
    const endTime = now + activeWindow.ms;
    return mockMints
      .filter((mint) => {
        const mintTime = new Date(mint.mintDate).getTime();
        return mintTime > now && mintTime <= endTime;
      })
      .sort((a, b) =>
        new Date(a.mintDate).getTime() - new Date(b.mintDate).getTime()
      );
  }, [activeWindow, now]);

  const groupedMints = useMemo(() => {
    return upcomingMints.reduce<Record<string, typeof upcomingMints>>(
      (acc, mint) => {
        const mintDate = new Date(mint.mintDate);
        const key = mintDate.toISOString().slice(0, 10);
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(mint);
        return acc;
      },
      {}
    );
  }, [upcomingMints]);

  const groupedKeys = Object.keys(groupedMints).sort();
  const nextMint = upcomingMints[0];

  return (
    <div className="min-h-screen bg-background text-text-primary pb-20 md:pb-0">
      <Header />

      <main className="pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <h1 className="text-4xl font-bold mb-3">Calendar Options</h1>
              <p className="text-text-secondary text-lg">
                Detailed view of projects dropping soon, organized by day.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {timeWindows.map((window) => (
                <button
                  key={window.id}
                  onClick={() => setActiveWindow(window)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeWindow.id === window.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-surface-light/50 text-text-secondary hover:text-white hover:bg-white/10'
                  }`}
                >
                  {window.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
            <GlassCard className="lg:col-span-4 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-secondary">
                    Window Summary
                  </p>
                  <h2 className="text-2xl font-bold">{activeWindow.label}</h2>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/20 border border-white/10 flex items-center justify-center text-primary-electric font-bold">
                  {upcomingMints.length.toString().padStart(2, '0')}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-light/50 rounded-2xl p-4 border border-white/10">
                  <p className="text-xs text-text-secondary uppercase tracking-wider">
                    Total Drops
                  </p>
                  <p className="text-3xl font-bold mt-2">
                    {upcomingMints.length.toString().padStart(2, '0')}
                  </p>
                </div>
                <div className="bg-surface-light/50 rounded-2xl p-4 border border-white/10">
                  <p className="text-xs text-text-secondary uppercase tracking-wider">
                    Next Mint In
                  </p>
                  <div className="mt-2">
                    {nextMint ? (
                      <div className="inline-flex items-center rounded-xl bg-surface/60 px-3 py-2 border border-white/10">
                        <CountdownTimer
                          targetDate={nextMint.mintDate}
                          size="sm"
                          variant="compact"
                        />
                      </div>
                    ) : (
                      <p className="text-sm text-text-secondary">No drops</p>
                    )}
                  </div>
                </div>
              </div>
              {nextMint && (
                <div className="flex items-center gap-2 text-sm text-text-secondary min-w-0">
                  <span>Next up:</span>
                  <span className="text-white font-semibold truncate">
                    {nextMint.name}
                  </span>
                </div>
              )}
            </GlassCard>

            <GlassCard className="lg:col-span-8 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-text-secondary">
                  Calendar Notes
                </p>
                <h3 className="text-xl font-bold">Plan Your Mint Week</h3>
              </div>
              <p className="text-text-secondary">
                Use the window toggles to focus on the next wave of releases.
                Each card shows countdown, price, supply, and hype signals so you
                can prioritize quickly.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-surface-light/50 text-xs text-text-secondary border border-white/5">
                  Sorted by time
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-light/50 text-xs text-text-secondary border border-white/5">
                  Verified badges shown
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-light/50 text-xs text-text-secondary border border-white/5">
                  Countdown per drop
                </span>
              </div>
            </GlassCard>
          </div>

          {groupedKeys.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-white/10 rounded-2xl bg-surface/30">
              <h2 className="text-xl font-bold mb-2">No drops in this window</h2>
              <p className="text-text-secondary max-w-md mb-8">
                Try a wider time range to see more upcoming projects.
              </p>
              <Link to="/">
                <Button>Explore Upcoming Drops</Button>
              </Link>
            </div>
          )}

          {groupedKeys.map((dateKey) => {
            const dayMints = groupedMints[dateKey];
            const displayDate = new Date(dateKey).toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'short',
              day: 'numeric'
            });
            return (
              <section key={dateKey} className="mb-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold">{displayDate}</h3>
                  <span className="text-xs text-text-secondary uppercase tracking-wider">
                    {dayMints.length} drops
                  </span>
                </div>

                <div className="space-y-6">
                  {dayMints.map((project) => (
                    <GlassCard
                      key={project.id}
                      className="!p-0 overflow-hidden border border-white/10"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-0">
                        <div className="relative">
                          <img
                            src={project.coverImage}
                            alt={project.name}
                            className="w-full h-full object-cover min-h-[220px] md:min-h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                        </div>
                        <div className="p-6 space-y-4">
                          <div className="flex items-center gap-3 flex-wrap">
                            <TagPill label={project.category} type="category" />
                            {project.isVerified && <VerifiedBadge showText />}
                            {project.isHot && (
                              <span className="bg-accent-orange/20 text-accent-orange text-xs font-semibold px-2 py-1 rounded-full">
                                HOT
                              </span>
                            )}
                          </div>

                          <div>
                            <h4 className="text-2xl font-bold mb-2">
                              {project.name}
                            </h4>
                            <p className="text-text-secondary text-sm leading-relaxed">
                              {project.description}
                            </p>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-surface-light/50 rounded-xl p-3 border border-white/10">
                              <p className="text-xs text-text-secondary">
                                Mint Time
                              </p>
                              <p className="text-sm font-semibold">
                                {new Date(
                                  project.mintDate
                                ).toLocaleTimeString('en-US', {
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </p>
                            </div>
                            <div className="bg-surface-light/50 rounded-xl p-3 border border-white/10">
                              <p className="text-xs text-text-secondary">Price</p>
                              <PriceBadge price={project.mintPrice} />
                            </div>
                            <div className="bg-surface-light/50 rounded-xl p-3 border border-white/10">
                              <p className="text-xs text-text-secondary">Supply</p>
                              <p className="text-sm font-semibold">
                                {project.supply.toLocaleString()}
                              </p>
                            </div>
                            <div className="bg-surface-light/50 rounded-xl p-3 border border-white/10">
                              <p className="text-xs text-text-secondary">Hype</p>
                              <div className="flex items-center gap-2">
                                <HeatIndicator level={project.hypeLevel} />
                                <span className="text-xs text-text-secondary">
                                  {project.communityRating}%
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 pt-2">
                            <div className="bg-surface-light/40 border border-white/10 rounded-xl px-4 py-2">
                              <p className="text-[10px] text-text-secondary uppercase tracking-wider">
                                Countdown
                              </p>
                              <CountdownTimer
                                targetDate={project.mintDate}
                                size="sm"
                              />
                            </div>
                            <Link to={`/mint/${project.id}`}>
                              <Button variant="primary">View Details</Button>
                            </Link>
                            <Button variant="secondary">Remind Me</Button>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}
