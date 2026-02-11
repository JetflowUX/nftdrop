import React from 'react';
interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}
export function GlassCard({
  children,
  hoverEffect = false,
  className = '',
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`glass-card rounded-xl p-6 ${hoverEffect ? 'hover:-translate-y-1 hover:shadow-glow' : ''} ${className}`}
      {...props}>

      {children}
    </div>);

}