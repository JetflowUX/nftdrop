import React from 'react';
interface SkeletonLoaderProps {
  className?: string;
}
export function SkeletonLoader({ className = '' }: SkeletonLoaderProps) {
  return (
    <div className={`animate-pulse bg-surface-light rounded ${className}`} />);

}