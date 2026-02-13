import React from 'react';
import Link from 'next/link';

interface ProjectHeaderProps {
  title: string;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title }) => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-primary font-bold text-xl tracking-tight">AG.</Link>
          <div className="h-4 w-px bg-slate-300 dark:bg-slate-700"></div>
          <nav className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <span className="material-icons text-sm">chevron_right</span>
            <span className="text-slate-900 dark:text-white font-medium truncate max-w-[200px]">{title}</span>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/resume" className="text-sm font-medium hover:text-primary transition-colors">Resume</Link>
          <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-all shadow-lg shadow-primary/20">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
