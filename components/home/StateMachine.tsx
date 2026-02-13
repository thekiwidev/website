import React from 'react';

export const StateMachine: React.FC = () => {
  return (
    <div className="aspect-square bg-slate-200/30 dark:bg-white/5 border border-primary/10 rounded-xl flex items-center justify-center overflow-hidden p-8 relative">
      {/* SVG State Machine Visualization */}
      <svg className="w-full h-full text-primary" viewBox="0 0 400 400">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connections */}
        <path d="M200 80 L200 320" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
        <path d="M80 200 L320 200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
        <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" fill="none" opacity="0.2" />

        {/* Nodes */}
        <g filter="url(#glow)">
          <circle cx="200" cy="80" r="10" className="fill-primary" />
          <circle cx="320" cy="200" r="10" className="fill-primary" />
          <circle cx="200" cy="320" r="10" className="fill-primary" />
          <circle cx="80" cy="200" r="10" className="fill-primary" />

          <circle cx="200" cy="200" r="20" className="fill-none stroke-primary" strokeWidth="2" />
          <circle cx="200" cy="200" r="5" className="fill-primary" />
        </g>

        {/* Labels */}
        <text x="200" y="60" textAnchor="middle" className="font-mono text-[10px] fill-current uppercase">Input_Data</text>
        <text x="340" y="200" alignmentBaseline="middle" className="font-mono text-[10px] fill-current uppercase">Optimize</text>
        <text x="200" y="345" textAnchor="middle" className="font-mono text-[10px] fill-current uppercase">Persistence</text>
        <text x="60" y="200" textAnchor="end" alignmentBaseline="middle" className="font-mono text-[10px] fill-current uppercase">Scale</text>
      </svg>

      {/* Floating Data Bits */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 font-mono text-[8px] animate-pulse">0x00F2A</div>
        <div className="absolute bottom-1/4 right-1/4 font-mono text-[8px] animate-pulse delay-700">0x00E4B</div>
      </div>
    </div>
  );
};
