import React from 'react';
interface PriceBadgeProps {
  price: number;
  size?: 'sm' | 'md' | 'lg';
}
export function PriceBadge({ price, size = 'md' }: PriceBadgeProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl'
  };
  return (
    <div
      className={`font-mono font-medium text-text-primary flex items-center gap-1 ${sizeClasses[size]}`}>

      <span className="text-primary-electric">₳</span>
      {price === 0 ? 'Free' : price.toLocaleString()}
    </div>);

}