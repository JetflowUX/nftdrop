import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'mint-live';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-glow/50 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary:
    'bg-primary-electric hover:bg-primary text-white shadow-lg shadow-primary-electric/20 hover:shadow-primary-electric/40',
    secondary:
    'bg-surface-light border border-white/10 text-white hover:bg-surface-light/80 hover:border-white/20',
    ghost:
    'bg-transparent text-text-secondary hover:text-white hover:bg-white/5',
    'mint-live':
    'bg-gradient-to-r from-secondary-teal to-primary-electric text-background font-bold animate-pulse-slow hover:shadow-glow-lg'
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg'
  };
  const width = fullWidth ? 'w-full' : '';
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}>

      {children}
    </button>);

}