import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section className="grid grid-cols-12 gap-12 mb-32">
      <div className="col-span-12 md:col-span-4 border-l-2 border-primary pl-8 py-4">
        <span className="font-mono text-xs text-primary mb-4 block">01 / ARCHITECTURE</span>
        <h3 className="text-2xl font-bold mb-4">Scalability First</h3>
        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
          Systems are designed from day one to handle exponential growth without architectural pivots. High-density nodes and distributed caching strategies.
        </p>
      </div>
      <div className="col-span-12 md:col-span-4 border-l-2 border-primary pl-8 py-4">
        <span className="font-mono text-xs text-primary mb-4 block">02 / INTEGRITY</span>
        <h3 className="text-2xl font-bold mb-4">Atomic Resilience</h3>
        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
          Failures are expected; downtime is not. Every module is isolated, monitored, and self-healing through robust state machine management.
        </p>
      </div>
      <div className="col-span-12 md:col-span-4 border-l-2 border-primary pl-8 py-4">
        <span className="font-mono text-xs text-primary mb-4 block">03 / EXPERIENCE</span>
        <h3 className="text-2xl font-bold mb-4">Minimalist UX</h3>
        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
          Precision interfaces that eliminate friction. Typography and information hierarchy as the primary drivers of user interaction.
        </p>
      </div>
    </section>
  );
};
