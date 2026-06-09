'use client';

import React from 'react';  
import Navigation from '../Navigation';  
import Footer from '../Footer';

const ARTICLES = [  
  {  
    slug: 'the-art-of-discretion',  
    title: 'The Art of Discretion',  
    excerpt: 'In an era of over-exposure, true luxury lies in the unseen details and the beauty of silence.',  
    category: 'Philosophy',  
    date: 'June 2026',  
    image: 'https://images.unsplash.com/photo-1490197415175-074fd86b1fcc?q=80&w=2074&auto=format&fit=crop',  
    featured: true  
  },  
  {  
    slug: 'metropolitan-sanctuaries',  
    title: 'Metropolitan Sanctuaries',  
    excerpt: 'The finest concrete retreats in the world’s most chaotic hubs.',  
    category: 'Architecture',  
    date: 'May 2026',  
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',  
    featured: false  
  },  
  {  
    slug: 'the-silent-concierge',  
    title: 'The Silent Concierge',  
    excerpt: 'How AI and human intuition are blending to create the ultimate personalized travel experience.',  
    category: 'Intelligence',  
    date: 'May 2026',  
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1974&auto=format&fit=crop',  
    featured: false  
  },  
  {  
    slug: 'vanguard-escapes',  
    title: 'Vanguard Escapes',  
    excerpt: 'Unmapping the coordinates of the world’s next hidden destinations.',  
    category: 'Voyage',  
    date: 'April 2026',  
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop',  
    featured: false  
  }  
];

export default function JournalPage() {  
  return (  
    <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black">  
      <Navigation />

      {/* Header Section */}  
      <section className="pt-40 pb-20 px-6 md:px-12 border-b border-white/10">  
        <div className="max-w-screen-2xl mx-auto">  
          <p className="text-xs uppercase tracking-[0.3em] mb-4 text-white/60">The Journal</p>  
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-none italic">  
            Intelligence  
          </h1>  
        </div>  
      </section>

      {/* Featured Article */}  
      {ARTICLES.filter(a => a.featured).map(article => (  
        <section key={article.slug} className="group cursor-pointer relative overflow-hidden border-b border-white/10">  
          <div className="flex flex-col md:flex-row min-h-[70vh]">  
            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-between">  
              <div className="space-y-6">  
                <span className="inline-block px-3 py-1 border border-white/20 text-[10px] uppercase tracking-widest rounded-full">  
                  {article.category}  
                </span>  
                <h2 className="text-4xl md:text-6xl font-light leading-tight group-hover:italic transition-all duration-500">  
                  {article.title}  
                </h2>  
                <p className="text-lg text-white/60 max-w-md font-light leading-relaxed">  
                  {article.excerpt}  
                </p>  
              </div>  
              <div className="pt-12">  
                <span className="text-xs tracking-widest uppercase opacity-40">{article.date}</span>  
              </div>  
            </div>  
            <div className="w-full md:w-1/2 relative h-[400px] md:h-auto overflow-hidden">  
              <img   
                src={article.image}   
                alt={article.title}  
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000"  
              />  
            </div>  
          </div>  
        </section>  
      ))}

      {/* Grid Section */}  
      <section className="px-6 md:px-12 py-20">  
        <div className="max-w-screen-2xl mx-auto">  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24">  
            {ARTICLES.filter(a => !a.featured).map((article, index) => (  
              <div key={article.slug} className={`group cursor-pointer ${index === 1 ? 'md:mt-24' : ''}`}>  
                <div className="relative aspect-[3/4] overflow-hidden mb-8">  
                  <img   
                    src={article.image}   
                    alt={article.title}  
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700"  
                  />  
                  <div className="absolute top-4 left-4">  
                    <span className="text-[10px] uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">  
                      {article.category}  
                    </span>  
                  </div>  
                </div>  
                <h3 className="text-2xl font-light mb-4 group-hover:translate-x-2 transition-transform duration-500">  
                  {article.title}  
                </h3>  
                <p className="text-sm text-white/40 leading-relaxed line-clamp-2">  
                  {article.excerpt}  
                </p>  
                <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">  
                  <span>Read Article</span>  
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  
                    <path d="M5 12h14m-7-7 7 7-7 7"/>  
                  </svg>  
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
