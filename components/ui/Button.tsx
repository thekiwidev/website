import React from 'react';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  href,
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-mono tracking-wide transition-all rounded focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20",
    secondary: "bg-background-light dark:bg-white/5 border border-primary/20 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary/10",
    ghost: "bg-transparent hover:bg-slate-200 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-primary",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-sm",
  };

  const styles = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};
