import React from 'react';
import { PROJECTS } from '@/lib/data';
import { ProjectHeader } from '@/components/layout/ProjectHeader';
import { Footer } from '@/components/layout/Footer';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-sans selection:bg-primary/30">
      <ProjectHeader title={project.title} />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-12 gap-12">
          {/* Left Column: Content (8 cols) */}
          <div className="col-span-12 lg:col-span-8 space-y-12">

            {/* Project Hero */}
            <header className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                {project.title}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                {project.problem}
              </p>
            </header>

            {/* Architecture Diagram Section */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-primary">01. System Architecture</h2>
                <div className="flex space-x-2">
                  <span className="flex items-center text-[10px] font-mono bg-primary/10 text-primary px-2 py-0.5 rounded border border-primary/20">v2.4.0-STABLE</span>
                </div>
              </div>
              <div className="relative aspect-video w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 overflow-hidden grid-pattern p-8">
                <div className="absolute inset-0 flex items-center justify-center opacity-90">
                  {/* Placeholder for diagram, or actual diagram if available */}
                  <div className="text-center">
                    <span className="material-icons text-6xl text-slate-300 dark:text-slate-700">hub</span>
                    <p className="mt-4 text-sm text-slate-500">Architecture Diagram Visualization</p>
                  </div>
                </div>
                {/* UI Overlays for "Excalidraw" feel */}
                <div className="absolute bottom-4 left-4 bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 p-2 rounded-lg flex space-x-2 shadow-xl">
                  <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400"><span className="material-icons text-sm">pan_tool</span></button>
                  <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400"><span className="material-icons text-sm">gesture</span></button>
                  <button className="p-1 bg-primary/10 text-primary rounded"><span className="material-icons text-sm">near_me</span></button>
                </div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 italic text-center">Fig A: High-level system architecture.</p>
            </section>

            {/* Engineering Callout: Trade-offs */}
            {project.tradeoffs && (
              <section className="bg-slate-50 dark:bg-slate-900/40 border-l-4 border-primary p-6 rounded-r-xl">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="material-icons text-primary text-xl">architecture</span>
                  <h3 className="font-mono font-bold text-sm tracking-tight">ENGINEERING_LOG :: TRADE-OFFS</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.tradeoffs.map((tradeoff, idx) => (
                    <li key={idx}>{tradeoff}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Implementation Details / Deep Dives */}
            {project.deepDiveSnippets && (
              <section className="space-y-6">
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-primary">02. Core Implementation</h2>
                {project.deepDiveSnippets.map((snippet, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="text-lg font-semibold">{snippet.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {snippet.description}
                    </p>
                  </div>
                ))}
              </section>
            )}
          </div>

          {/* Right Column: Sidebar (4 cols) */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* Technical Primitives */}
              <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">Technical Primitives</h3>
                <div className="space-y-6">
                  {Object.entries(project.architecture).map(([key, value]) => (
                    <div key={key}>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center capitalize">
                        <span className="material-icons text-sm mr-2 text-primary">layers</span>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(value) ? value.map((v) => (
                          <span key={v} className="px-2.5 py-1 text-xs rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                            {v}
                          </span>
                        )) : (
                          <span className="px-2.5 py-1 text-xs rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                            {value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics/Stats Card */}
              {project.impact && (
                 <div className="grid grid-cols-1 gap-4">
                    {Object.entries(project.impact).map(([key, value]) => (
                      <div key={key} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                        <p className="text-[10px] font-mono text-slate-500 uppercase mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                        <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{value}</p>
                      </div>
                    ))}
                 </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
