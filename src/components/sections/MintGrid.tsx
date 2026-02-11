import React, { useState } from 'react';
import { MintProject } from '../../data/mockMints';
import { MintCard } from '../cards/MintCard';
import { FilterBar } from '../ui/FilterBar';
import { Button } from '../ui/Button';
interface MintGridProps {
  title: string;
  mints: MintProject[];
}
export function MintGrid({ title, mints }: MintGridProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'calendar'>('grid');
  const [visibleCount, setVisibleCount] = useState(8);
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-text-secondary">
              Discover the hottest drops on Cardano.
            </p>
          </div>
        </div>

        <FilterBar viewMode={viewMode} setViewMode={setViewMode} />

        {viewMode === 'grid' ?
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mints.slice(0, visibleCount).map((mint) =>
          <MintCard key={mint.id} project={mint} />
          )}
          </div> :

        <div className="glass-panel p-8 rounded-xl text-center min-h-[400px] flex flex-col items-center justify-center">
            <p className="text-xl text-text-secondary mb-4">
              Calendar View Coming Soon
            </p>
            <Button variant="secondary" onClick={() => setViewMode('grid')}>
              Switch to Grid
            </Button>
          </div>
        }

        {visibleCount < mints.length && viewMode === 'grid' &&
        <div className="mt-12 text-center">
            <Button variant="secondary" size="lg" onClick={handleLoadMore}>
              Load More Projects
            </Button>
          </div>
        }
      </div>
    </section>);

}