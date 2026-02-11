import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';
interface CountdownTimerProps {
  targetDate: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'boxed' | 'compact';
}
export function CountdownTimer({
  targetDate,
  size = 'md',
  variant = 'boxed'
}: CountdownTimerProps) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);
  if (isExpired) {
    return <span className="text-secondary-teal font-bold">Minting Now</span>;
  }
  if (variant === 'compact') {
    const timeText = days > 0
      ? `${days}d ${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      : `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return (
      <span
        className={`font-mono tracking-widest text-text-primary ${
          size === 'sm' ? 'text-sm' : ''
        } ${size === 'md' ? 'text-base' : ''} ${size === 'lg' ? 'text-2xl' : ''}`}
      >
        {timeText}
      </span>
    );
  }
  const TimeUnit = ({ value, label }: {value: number;label: string;}) =>
  <div className="flex flex-col items-center">
      <div
      className={`font-mono font-bold bg-surface-light rounded-lg flex items-center justify-center border border-white/5
        ${size === 'sm' ? 'w-8 h-8 text-sm' : ''}
        ${size === 'md' ? 'w-10 h-10 text-base' : ''}
        ${size === 'lg' ? 'w-16 h-16 text-2xl' : ''}
      `}>

        {value.toString().padStart(2, '0')}
      </div>
      {size !== 'sm' &&
    <span className="text-[10px] text-text-secondary mt-1 uppercase">
          {label}
        </span>
    }
    </div>;

  return (
    <div className="flex items-center gap-2">
      <TimeUnit value={days} label="Days" />
      <span className="text-text-secondary font-bold">:</span>
      <TimeUnit value={hours} label="Hrs" />
      <span className="text-text-secondary font-bold">:</span>
      <TimeUnit value={minutes} label="Min" />
      <span className="text-text-secondary font-bold">:</span>
      <TimeUnit value={seconds} label="Sec" />
    </div>);

}