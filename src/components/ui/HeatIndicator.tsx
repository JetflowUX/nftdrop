import React from 'react';
import { Flame } from 'lucide-react';
interface HeatIndicatorProps {
  level: 1 | 2 | 3 | 4 | 5;
}
export function HeatIndicator({ level }: HeatIndicatorProps) {
  return (
    <div className="flex items-center gap-0.5" title={`Hype Level: ${level}/5`}>
      {[1, 2, 3, 4, 5].map((i) =>
      <Flame
        key={i}
        size={14}
        className={`${i <= level ? 'text-accent-orange fill-accent-orange' : 'text-surface-light fill-surface-light'}`} />

      )}
    </div>);

}