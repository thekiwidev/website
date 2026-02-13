import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full z-50 bg-background-light dark:bg-background-dark border-t border-primary/10 py-3 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-mono tracking-wider">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-slate-500">SYSTEM_UPTIME:</span>
            <span className="text-green-500">99.999%</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-slate-500">LOCATION:</span>
            <span className="text-slate-900 dark:text-white" data-location="Lagos, Nigeria">LAGOS_NG</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-slate-500">IP:</span>
            <span className="text-slate-900 dark:text-white">192.168.1.1</span>
          </div>
        </div>

        {/* Performance Metrics (Lighthouse) */}
        <div className="flex items-center space-x-8 mt-4 md:mt-0">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full border border-green-500 flex items-center justify-center p-0.5">
              <div className="w-full h-full bg-green-500 rounded-full"></div>
            </div>
            <span className="text-slate-500 uppercase">Performance</span>
            <span className="font-bold text-green-500">100</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full border border-green-500 flex items-center justify-center p-0.5">
              <div className="w-full h-full bg-green-500 rounded-full"></div>
            </div>
            <span className="text-slate-500 uppercase">Accessibility</span>
            <span className="font-bold text-green-500">100</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full border border-green-500 flex items-center justify-center p-0.5">
              <div className="w-full h-full bg-green-500 rounded-full"></div>
            </div>
            <span className="text-slate-500 uppercase">Best Practices</span>
            <span className="font-bold text-green-500">100</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full border border-green-500 flex items-center justify-center p-0.5">
              <div className="w-full h-full bg-green-500 rounded-full"></div>
            </div>
            <span className="text-slate-500 uppercase">SEO</span>
            <span className="font-bold text-green-500">100</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-2 text-slate-500 italic opacity-50">
          <span>{'// Designed for precision'}</span>
        </div>
      </div>
    </footer>
  );
};
