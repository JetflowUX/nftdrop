import React, { useState } from 'react';
interface TooltipProps {
  content: string;
  children: React.ReactNode;
}
export function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}>

      {children}
      {isVisible &&
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-surface border border-white/10 rounded-lg text-xs text-white whitespace-nowrap shadow-glow z-50">
          {content}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-surface" />
        </div>
      }
    </div>);

}