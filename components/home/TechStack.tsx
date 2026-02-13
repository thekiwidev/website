import React from 'react';
import { Card } from '@/components/ui/Card';

interface TechItem {
  id: string;
  name: string;
  proficiency: number; // 0-100
}

const TECH_ITEMS: TechItem[] = [
  { id: "0X01", name: "TypeScript", proficiency: 95 },
  { id: "0X02", name: "Rust", proficiency: 82 },
  { id: "0X03", name: "Go", proficiency: 88 },
  { id: "0X04", name: "PostgreSQL", proficiency: 98 },
  { id: "0X05", name: "Docker", proficiency: 90 },
  { id: "0X06", name: "AWS", proficiency: 85 },
];

export const TechStack: React.FC = () => {
  return (
    <section className="mb-32">
      <div className="flex justify-between items-end mb-12 border-b border-primary/10 pb-4">
        <div>
          <h2 className="text-3xl font-bold">Tech Ecosystem</h2>
          <p className="text-sm font-mono text-slate-500 mt-2">v4.2.0_STABLE_BUILD</p>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <div className="w-3 h-3 bg-primary/40 rounded-full"></div>
          <div className="w-3 h-3 bg-primary/10 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {TECH_ITEMS.map((item) => (
          <Card key={item.id} className="p-6 group cursor-default">
            <div className="font-mono text-[10px] text-primary mb-4">{item.id}</div>
            <div className="font-bold text-lg mb-1">{item.name}</div>
            <div className="w-full bg-primary/10 h-1 rounded overflow-hidden">
              <div
                className="bg-primary h-full transition-all duration-1000 ease-out"
                style={{ width: `${item.proficiency}%` }}
              ></div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
