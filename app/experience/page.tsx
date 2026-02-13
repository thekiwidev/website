import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { EXPERIENCE_DATA } from '@/lib/data';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function ExperiencePage() {
  const { timeline, education, coreStrengths, techStack } = EXPERIENCE_DATA;

  return (
    <div className="min-h-screen flex flex-col grid-lines bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 lg:py-20 w-full pt-24">
        {/* Hero Title */}
        <div className="mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-4">
            Experience <span className="text-primary">&</span> Skill Matrix
          </h1>
          <p className="max-w-2xl text-slate-400 text-lg leading-relaxed">
            A digital narrative of technical evolution, distributed systems engineering, and architectural leadership. This matrix visualizes the intersection of theoretical foundations and real-world infrastructure scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Digital Narrative Timeline */}
          <section className="lg:col-span-5 relative">
            <div className="flex items-center space-x-3 mb-10">
              <span className="material-icons text-primary text-sm">history_edu</span>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Chronological Axis</h2>
            </div>
            <div className="relative pl-8 border-l border-primary/30 ml-3">
              {/* Vertical Line is handled by border-l */}

              {timeline.map((item, index) => (
                <div key={index} className="relative mb-16 group role-card">
                  {/* Node */}
                  <div className="absolute -left-[38px] top-1 w-4 h-4 rounded-full border-2 border-primary bg-background-dark z-10 group-hover:bg-primary transition-all duration-300"></div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-primary">{item.period}</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.company}</h3>
                    <p className="text-sm text-slate-400 uppercase tracking-wider">{item.role}</p>
                    <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                      {item.focus}
                    </p>
                    <p className="text-slate-500 text-xs italic mt-1">
                      Growth: {item.growth}
                    </p>
                  </div>
                </div>
              ))}

              {/* Education */}
              {education.map((edu, index) => (
                <div key={`edu-${index}`} className="relative mb-16 group role-card">
                  <div className="absolute -left-[38px] top-1 w-4 h-4 rounded-full border-2 border-slate-500 bg-background-dark z-10 group-hover:bg-slate-500 transition-all duration-300"></div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-slate-500">{edu.startYear} - {edu.status}</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                    <p className="text-sm text-slate-400 uppercase tracking-wider">{edu.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Right: Skill Matrix Grid */}
          <section className="lg:col-span-7">
            <div className="flex items-center space-x-3 mb-10">
              <span className="material-icons text-primary text-sm">grid_view</span>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Skill Matrix / Proficiency</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Core Strengths */}
              <Card glass className="p-6 rounded-xl instrument-border md:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Core Strengths</h4>
                  <span className="material-icons text-primary/40 text-sm">psychology</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coreStrengths.map((strength) => (
                    <Badge key={strength} variant="primary">{strength}</Badge>
                  ))}
                </div>
              </Card>

              {/* Tech Stack Categories */}
              <Card glass className="p-6 rounded-xl instrument-border">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Languages</h4>
                  <span className="material-icons text-primary/40 text-sm">code</span>
                </div>
                <div className="space-y-2">
                  {techStack.languages.map((lang) => (
                    <div key={lang} className="flex justify-between items-center">
                      <span className="text-xs text-slate-300">{lang}</span>
                      <div className="h-1 w-24 bg-slate-800 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[90%]"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card glass className="p-6 rounded-xl instrument-border">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Cloud & Backend</h4>
                  <span className="material-icons text-primary/40 text-sm">cloud_queue</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[...techStack.backend, ...techStack.cloud].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>

               {/* Frontend */}
               <Card glass className="p-6 rounded-xl instrument-border md:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Frontend Ecosystem</h4>
                  <span className="material-icons text-primary/40 text-sm">layers</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.frontend.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/5 border border-primary/20 rounded text-xs font-medium text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>

            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
