import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { BLOG_POSTS, LAB_EXPERIMENTS } from '@/lib/data';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col grid-lines bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      <Header />

      {/* Filter Bar */}
      <div className="pt-20 max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between border-b border-primary/5 w-full">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mr-2">Filter_Stack:</span>
          <button className="px-3 py-1 rounded-full bg-primary text-white text-xs font-medium">All</button>
          <button className="px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 text-xs font-medium transition-colors">Architecture</button>
          <button className="px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 text-xs font-medium transition-colors">Performance</button>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-slate-500">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> System Status: Nominal</span>
          <span>Uptime: 99.98%</span>
        </div>
      </div>

      <main className="flex-1 w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row min-h-screen">
        {/* Left Column: Editorial Stream */}
        <section className="flex-1 border-r border-primary/5 p-6 lg:p-12 overflow-y-auto">
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-xs font-mono font-bold tracking-tighter">[ FEATURED_EDITORIAL ]</span>
              <span className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></span>
            </div>

            {/* Featured Post (Using first blog post as featured) */}
            {BLOG_POSTS.length > 0 && (
              <div className="mb-12">
                <Link href={`/blog/${BLOG_POSTS[0].slug}`} className="block group">
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {BLOG_POSTS[0].title}
                  </h1>
                </Link>
                <div className="flex items-center gap-4 text-slate-500 text-sm mb-8">
                  <span className="flex items-center gap-1"><span className="material-icons text-sm">calendar_today</span> {BLOG_POSTS[0].publishedAt}</span>
                  <span className="flex items-center gap-1"><span className="material-icons text-sm">schedule</span> {BLOG_POSTS[0].readingTime} min read</span>
                </div>

                <article className="editorial-content max-w-3xl">
                  <p className="text-xl font-light text-slate-600 dark:text-slate-400 italic mb-8 border-l-4 border-primary pl-6">
                    {BLOG_POSTS[0].excerpt}
                  </p>

                  <div className="flex gap-2 mt-4">
                    {BLOG_POSTS[0].tags.map(tag => (
                      <span key={tag} className="bg-primary/10 text-primary px-2 py-1 rounded text-[10px] font-bold uppercase">{tag}</span>
                    ))}
                  </div>
                </article>
              </div>
            )}

            {/* Other Posts */}
            <div className="space-y-12">
              {BLOG_POSTS.slice(1).map((post) => (
                <div key={post.slug} className="border-t border-slate-200 dark:border-slate-800 pt-8">
                   <Link href={`/blog/${post.slug}`} className="block group">
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                   </Link>
                   <p className="text-slate-600 dark:text-slate-400 mb-4">{post.excerpt}</p>
                   <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span>{post.publishedAt}</span>
                      <span>{post.readingTime} min read</span>
                      <div className="flex gap-2">
                        {post.tags.map(tag => (
                          <span key={tag} className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{tag}</span>
                        ))}
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </header>
        </section>

        {/* Right Column: Lab Stream */}
        <aside className="w-full lg:w-[450px] bg-background-light/50 dark:bg-neutral-dark/30 p-6 lg:p-8 custom-scrollbar lg:overflow-y-auto border-l border-primary/5">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
                Lab Stream
              </h2>
              <p className="text-xs text-slate-500 font-mono mt-1">Live Technical Telemetry</p>
            </div>
            <button className="text-primary hover:bg-primary/10 p-2 rounded transition-all">
              <span className="material-icons">settings_input_component</span>
            </button>
          </div>

          {/* Activity Heatmap Mockup */}
          <div className="mb-10 hidden md:block">
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mb-2 uppercase">
              <span>Experiment Frequency</span>
              <span>Last 30 Days</span>
            </div>
            <div className="grid grid-cols-10 gap-1.5">
              {[...Array(20)].map((_, i) => (
                <div key={i} className={`h-3 rounded-sm ${(i * 7) % 3 === 0 ? 'bg-primary/40' : 'bg-primary/10'}`}></div>
              ))}
            </div>
          </div>

          {/* Timeline Entries */}
          <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-px before:bg-primary/10 pl-2">
            {LAB_EXPERIMENTS.map((exp, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className={`absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-2 ${idx === 0 ? 'border-primary' : 'border-slate-700'} bg-background-dark z-10 flex items-center justify-center`}>
                  <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-primary' : 'bg-slate-700'}`}></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-500">{exp.date}</span>
                    {idx === 0 && <span className="bg-green-500/10 text-green-500 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-tighter">New</span>}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200">{exp.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {exp.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-10 border-t border-primary/10">
             <Button variant="outline" className="w-full text-xs uppercase tracking-widest">Fetch All Experiments</Button>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
