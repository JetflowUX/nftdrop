import React, { useEffect, useMemo, useState } from 'react';
import { MintProject } from '../../data/mockMints';
import { MintCard } from '../cards/MintCard';
import { FilterBar } from '../ui/FilterBar';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
interface MintGridProps {
  title: string;
  mints: MintProject[];
}
export function MintGrid({ title, mints }: MintGridProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'calendar'>('grid');
  const [visibleCount, setVisibleCount] = useState(8);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState('soonest');
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };
  const filteredMints = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const byCategory = activeCategory === 'All'
      ? mints
      : mints.filter((mint) => mint.category === activeCategory);
    const bySearch = normalizedQuery.length === 0
      ? byCategory
      : byCategory.filter((mint) =>
          mint.name.toLowerCase().includes(normalizedQuery)
        );

    const sorted = [...bySearch].sort((a, b) => {
      if (sortOption === 'price-low') {
        return a.mintPrice - b.mintPrice;
      }
      if (sortOption === 'price-high') {
        return b.mintPrice - a.mintPrice;
      }
      if (sortOption === 'latest') {
        return new Date(b.mintDate).getTime() - new Date(a.mintDate).getTime();
      }
      if (sortOption === 'hype') {
        return b.communityRating - a.communityRating;
      }
      return new Date(a.mintDate).getTime() - new Date(b.mintDate).getTime();
    });

    return sorted;
  }, [mints, activeCategory, searchQuery, sortOption]);

  useEffect(() => {
    setVisibleCount(8);
  }, [searchQuery, activeCategory, sortOption, viewMode]);

  const visibleMints = filteredMints.slice(0, visibleCount);
  const hasActiveFilters = activeCategory !== 'All' || searchQuery.length > 0;
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

        <FilterBar
          viewMode={viewMode}
          setViewMode={setViewMode}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          sortOption={sortOption}
          onSortChange={setSortOption}
          resultCount={filteredMints.length}
        />

        {hasActiveFilters && viewMode === 'grid' && (
          <div className="flex items-center justify-between text-sm text-text-secondary mb-6">
            <span>
              Showing {visibleMints.length} of {filteredMints.length}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setSortOption('soonest');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {viewMode === 'grid' ?
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleMints.map((mint, index) =>
          <div
                key={mint.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <MintCard project={mint} />
              </div>
          )}
          </div> :

        <div className="glass-panel p-8 rounded-xl text-center min-h-[400px] flex flex-col items-center justify-center">
            <p className="text-xl text-text-secondary mb-4">
              Calendar view is live with detailed drop timelines.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/calendar">
                <Button variant="primary">Open Calendar</Button>
              </Link>
              <Button variant="secondary" onClick={() => setViewMode('grid')}>
                Switch to Grid
              </Button>
            </div>
          </div>
        }

        {visibleCount < filteredMints.length && viewMode === 'grid' &&
        <div className="mt-12 text-center">
            <Button variant="secondary" size="lg" onClick={handleLoadMore}>
              Load More Projects
            </Button>
          </div>
        }
      </div>
    </section>);

}