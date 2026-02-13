import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'error' | 'neutral' | 'primary';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'primary',
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center px-3 py-0.5 rounded-full font-mono text-[10px] uppercase font-bold tracking-widest leading-none border";

  const variants = {
    primary: "bg-primary/10 border-primary/20 text-primary",
    success: "bg-green-500/10 border-green-500/20 text-green-500",
    warning: "bg-yellow-500/10 border-yellow-500/20 text-yellow-500",
    error: "bg-red-500/10 border-red-500/20 text-red-500",
    neutral: "bg-slate-500/10 border-slate-500/20 text-slate-500",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
};
