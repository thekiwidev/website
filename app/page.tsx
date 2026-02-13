import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { StateMachine } from '@/components/home/StateMachine';
import { MetricsTicker } from '@/components/home/MetricsTicker';
import { Philosophy } from '@/components/home/Philosophy';
import { TechStack } from '@/components/home/TechStack';
import { HOME_DATA } from '@/lib/data';

export default function Home() {
  const { hero } = HOME_DATA;

  return (
    <div className="min-h-screen flex flex-col grid-lines relative">
      <Header />

      <main className="flex-1 pt-24 pb-12 px-6 max-w-7xl mx-auto w-full relative z-10">
        {/* Hero Section */}
        <section className="grid grid-cols-12 gap-8 min-h-[70vh] items-center mb-16">
          <div className="col-span-12 lg:col-span-7">
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-widest leading-none">Status: Operational</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Engineering <span className="text-primary italic">Resilient</span> Logic.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              {hero.subtext}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 items-start sm:items-center">
              <Button href={hero.primaryCTA}>
                INITIALIZE_CONTACT
              </Button>
              <div className="flex items-center space-x-2 text-slate-500 font-mono text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span>Available for architectural consulting</span>
              </div>
            </div>
          </div>

          {/* State Machine Visualization */}
          <div className="col-span-12 lg:col-span-5 relative">
            <StateMachine />
          </div>
        </section>

        <MetricsTicker />
        <Philosophy />
        <TechStack />
      </main>

      <Footer />

      {/* Decorative Corner Elements */}
      <div className="fixed top-24 left-6 pointer-events-none opacity-20 hidden lg:block">
        <div className="w-16 h-px bg-primary mb-1"></div>
        <div className="w-px h-16 bg-primary"></div>
      </div>
      <div className="fixed top-24 right-6 pointer-events-none opacity-20 transform rotate-90 hidden lg:block">
        <div className="w-16 h-px bg-primary mb-1"></div>
        <div className="w-px h-16 bg-primary"></div>
      </div>
    </div>
  );
}
