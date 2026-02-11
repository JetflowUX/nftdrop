import React from 'react';
import { ShieldCheck } from 'lucide-react';
interface VerifiedBadgeProps {
  size?: 'sm' | 'md';
  showText?: boolean;
}
export function VerifiedBadge({
  size = 'sm',
  showText = false
}: VerifiedBadgeProps) {
  const iconSize = size === 'sm' ? 14 : 18;
  return (
    <div
      className="flex items-center gap-1 text-primary-electric"
      title="Verified Project">

      <ShieldCheck
        size={iconSize}
        fill="currentColor"
        className="text-background" />

      {showText &&
      <span className="text-xs font-semibold text-primary-electric">
          Verified
        </span>
      }
    </div>);

}