import React from 'react';
import {
  Filter,
  Grid3x3,
  Calendar as CalendarIcon } from
'lucide-react';
import { Button } from './Button';
import { SearchInput } from './SearchInput';
interface FilterBarProps {
  viewMode: 'grid' | 'calendar';
  setViewMode: (mode: 'grid' | 'calendar') => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  activeCategory: string;
  onCategoryChange: (value: string) => void;
  sortOption: string;
  onSortChange: (value: string) => void;
  resultCount: number;
}
export function FilterBar({
  viewMode,
  setViewMode,
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
  resultCount
}: FilterBarProps) {
  const categories = ['All', 'PFP', 'Art', 'Gaming', 'Utility', 'Music'];
  const sortOptions = [
    { value: 'soonest', label: 'Soonest' },
    { value: 'latest', label: 'Latest' },
    { value: 'price-low', label: 'Price: Low-High' },
    { value: 'price-high', label: 'Price: High-Low' },
    { value: 'hype', label: 'Most Hyped' }
  ];
  return (
    <div className="sticky top-20 z-30 mb-8 space-y-4">
      <div className="glass-panel rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Left: Search & Basic Filters */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <SearchInput
            className="w-full md:w-64"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
          />
          <div className="hidden md:flex items-center gap-2 border-l border-white/10 pl-4">
            <Button
              variant="secondary"
              size="sm"
              className="flex items-center gap-2">

              <Filter size={16} />
              Filters
            </Button>
            <div className="relative">
              <select
                value={sortOption}
                onChange={(event) => onSortChange(event.target.value)}
                className="bg-surface-light/70 border border-white/10 rounded-lg py-1.5 pl-3 pr-8 text-xs text-text-secondary focus:outline-none focus:border-primary-electric"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Center: Categories (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 bg-surface-light/50 p-1 rounded-lg">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-lg' : 'text-text-secondary hover:text-white hover:bg-white/5'}`}>

              {cat}
            </button>
          )}
        </div>

        {/* Right: View Toggle */}
        <div className="flex items-center gap-2 bg-surface-light/50 p-1 rounded-lg ml-auto md:ml-0">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-surface text-primary-electric shadow-sm' : 'text-text-secondary hover:text-white'}`}>

            <Grid3x3 size={18} />
          </button>
          <button
            onClick={() => setViewMode('calendar')}
            className={`p-2 rounded-md transition-all ${viewMode === 'calendar' ? 'bg-surface text-primary-electric shadow-sm' : 'text-text-secondary hover:text-white'}`}>

            <CalendarIcon size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Categories Scroll */}
      <div className="lg:hidden flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
        {categories.map((cat) =>
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-primary text-white' : 'bg-surface-light text-text-secondary border border-white/10'}`}>

            {cat}
          </button>
        )}
      </div>

      <div className="flex items-center justify-between text-xs text-text-secondary">
        <span>{resultCount} results</span>
        <span className="hidden sm:inline">Use filters to narrow down drops.</span>
      </div>
    </div>);

}