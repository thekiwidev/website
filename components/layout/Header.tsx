import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-12 items-center gap-4">
        <div className="col-span-3 flex items-center space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <Link href="/" className="font-mono text-xs tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity">
            A_GABRIEL_ARCHITECT
          </Link>
        </div>

        {/* Command Palette */}
        <div className="col-span-6 flex justify-center">
          <div className="w-full max-w-md flex items-center bg-slate-200/50 dark:bg-white/5 border border-primary/20 rounded-lg px-4 py-1.5 group focus-within:ring-2 focus-within:ring-primary/50 transition-all cursor-text">
            <span className="material-icons text-primary/60 text-sm mr-3">search</span>
            <input
              type="text"
              className="bg-transparent border-none focus:ring-0 text-sm w-full font-mono placeholder:text-slate-400 outline-none"
              placeholder="Search system or type a command..."
            />
            <div className="flex items-center space-x-1 ml-3 hidden sm:flex">
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-300 dark:bg-slate-700 rounded border border-slate-400 dark:border-slate-600">CMD</kbd>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-300 dark:bg-slate-700 rounded border border-slate-400 dark:border-slate-600">K</kbd>
            </div>
          </div>
        </div>

        <div className="col-span-3 flex justify-end space-x-6 text-xs font-mono uppercase tracking-tighter">
          <Link href="/experience" className="hover:text-primary transition-colors">Philosophy</Link>
          <Link href="/projects" className="hover:text-primary transition-colors">Stack</Link>
          <Link href="/blog" className="hover:text-primary transition-colors">Logs</Link>
        </div>
      </div>
    </header>
  );
};
