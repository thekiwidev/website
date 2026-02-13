import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  glass = false,
  children,
  ...props
}) => {
  const baseStyles = "rounded-lg border transition-all";

  const variants = {
    default: "bg-slate-200/50 dark:bg-white/5 border-primary/10 hover:border-primary/50",
    glass: "glass-panel instrument-border",
  };

  return (
    <div className={cn(baseStyles, glass ? variants.glass : variants.default, className)} {...props}>
      {children}
    </div>
  );
};
