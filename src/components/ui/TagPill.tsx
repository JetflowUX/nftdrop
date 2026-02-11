import React from 'react';
interface TagPillProps {
  label: string;
  type?: 'default' | 'category' | 'status';
  className?: string;
}
export function TagPill({
  label,
  type = 'default',
  className = ''
}: TagPillProps) {
  const getColor = () => {
    switch (label.toLowerCase()) {
      case 'pfp':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'art':
        return 'bg-pink-500/20 text-pink-300 border-pink-500/30';
      case 'utility':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'gaming':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'music':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default:
        return 'bg-surface-light text-text-secondary border-white/10';
    }
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getColor()} ${className}`}>

      {label}
    </span>);

}