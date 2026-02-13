import React from 'react';

export const MetricsTicker: React.FC = () => {
  return (
    <section className="border-y border-primary/20 bg-primary/5 py-4 overflow-hidden mb-24 -mx-6">
      <div className="flex whitespace-nowrap space-x-24 animate-marquee font-mono text-sm tracking-tighter items-center w-[200%]">
        <div className="flex items-center space-x-4">
          <span className="text-primary font-bold">METRIC_01:</span>
          <span className="text-slate-900 dark:text-white">45% REDUCTION IN ERROR LATENCY</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-primary font-bold">METRIC_02:</span>
          <span className="text-slate-900 dark:text-white">10X DEPLOYMENT VELOCITY</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-primary font-bold">METRIC_03:</span>
          <span className="text-slate-900 dark:text-white">99.99% SYSTEM UPTIME</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-primary font-bold">METRIC_04:</span>
          <span className="text-slate-900 dark:text-white">ZERO-DOWNTIME ORCHESTRATION</span>
        </div>
        {/* Duplicate for loop */}
        <div className="flex items-center space-x-4">
          <span className="text-primary font-bold">METRIC_01:</span>
          <span className="text-slate-900 dark:text-white">45% REDUCTION IN ERROR LATENCY</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-primary font-bold">METRIC_02:</span>
          <span className="text-slate-900 dark:text-white">10X DEPLOYMENT VELOCITY</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-primary font-bold">METRIC_03:</span>
          <span className="text-slate-900 dark:text-white">99.99% SYSTEM UPTIME</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-primary font-bold">METRIC_04:</span>
          <span className="text-slate-900 dark:text-white">ZERO-DOWNTIME ORCHESTRATION</span>
        </div>
      </div>
    </section>
  );
};
