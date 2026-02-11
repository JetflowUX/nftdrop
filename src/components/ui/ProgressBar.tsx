import React from 'react';
interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  showPercentage?: boolean;
}
export function ProgressBar({
  value,
  max,
  label,
  showPercentage = true
}: ProgressBarProps) {
  const percentage = Math.min(Math.round(value / max * 100), 100);
  return (
    <div className="w-full">
      {(label || showPercentage) &&
      <div className="flex justify-between text-xs text-text-secondary mb-1.5">
          {label && <span>{label}</span>}
          {showPercentage && <span>{percentage}%</span>}
        </div>
      }
      <div className="h-2 w-full bg-surface-light rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-electric to-secondary-cyan transition-all duration-500"
          style={{
            width: `${percentage}%`
          }} />

      </div>
    </div>);

}