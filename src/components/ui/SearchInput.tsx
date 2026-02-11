import React from 'react';
import { Search } from 'lucide-react';
interface SearchInputProps extends
  React.InputHTMLAttributes<HTMLInputElement> {}
export function SearchInput({ className = '', ...props }: SearchInputProps) {
  return (
    <div className={`relative group ${className}`}>
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-primary-electric transition-colors"
        size={18} />

      <input
        type="text"
        className="w-full bg-surface-light/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary-electric/50 focus:border-transparent transition-all"
        placeholder="Search collections..."
        {...props} />

    </div>);

}