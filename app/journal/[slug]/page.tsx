'use client';

import React from 'react';  
import { useParams } from 'next/navigation';  
import Navigation from '../../Navigation';  
import Footer from '../../Footer';

const POSTS: Record<string, any> = {  
  'the-art-of-discretion': {  
    title: 'The Art of Discretion',  
    category: 'Philosophy',  
    date: 'June 9, 2026',  
    image: 'https://images.unsplash.com/photo-1490197415175-074fd86b1fcc?q=80&w=2074&auto=format&fit=crop',  
    content: [  
      "In a world that demands attention, there is a profound power in remaining unseen. True luxury has never been about the loud or the obvious; it is about the quiet details that only the initiated notice.",  
      "At NexVoyage, we believe that discretion is the ultimate service. It is the art of knowing what a guest needs before they ask, and providing it so seamlessly that the hand behind the service remains invisible.",  
      "The architecture of silence is built on three pillars: privacy, intuition, and restraint. When we curate a sanctuary, we aren't just looking for a beautiful view—we are looking for a place where the world cannot find you unless you wish to be found."  
    ]  
  },  
  'metropolitan-sanctuaries': {  
    title: 'Metropolitan Sanctuaries',  
    category: 'Architecture',  
    date: 'May 24, 2026',  
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',  
    content: [  
      "The city never sleeps, but you should. Our metropolitan sanctuaries are designed to be acoustic and visual voids in the heart of the world's most vibrant capitals.",  
      "We look for properties that utilize 'Negative Space'—areas where the design allows for breath and contemplation amidst the chaos of London, Tokyo, or New York.",  
      "It is not enough to be behind a closed door. A true sanctuary must filter the energy of the city, keeping the inspiration while discarding the noise."  
    ]  
  },  
  'the-silent-concierge': {  
    title: 'The Silent Concierge',  
    category: 'Intelligence',  
    date: 'May 12, 2026',  
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1974&auto=format&fit=crop',  
    content: [  
      "The future of travel isn't a robot in a lobby; it is an invisible layer of intelligence that anticipates your rhythm.",  
      "By blending historical preference data with real-time human intuition, we create a journey that feels like it is unfolding naturally, rather than being managed.",  
      "When your favorite vintage is already breathing as you walk through the door, or the lighting adjusted to your jet-lagged biological clock—that is the silent concierge at work."  
    ]  
  }  
};

export default function ArticlePage() {  
  const params = useParams();  
  const slug = params?.slug as string;  
  const post = POSTS[slug];

  if (!post) {  
    return (  
      <div className="bg-black text-white min-h-screen flex items-center justify-center">  
        <p className="tracking-widest uppercase opacity-50">Article Not Found</p>  
      </div>  
    );  
  }

  return (  
    <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black">  
      <Navigation />

      {/* Hero Section */}  
      <section className="relative h-[80vh] w-full overflow-hidden">  
        <img   
          src={post.image}   
          alt={post.title}  
          className="w-full h-full object-cover grayscale brightness-50"  
        />  
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 bg-gradient-to-t from-black to-transparent">  
          <div className="max-w-screen-xl mx-auto w-full">  
            <span className="text-[10px] uppercase tracking-[0.4em] mb-4 inline-block px-3 py-1 border border-white/30 rounded-full">  
              {post.category}  
            </span>  
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-none mb-8 max-w-4xl">  
              {post.title}  
            </h1>  
            <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest text-white/50">  
              <span>{post.date}</span>  
              <span>By NexVoyage Editorial</span>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Content Section */}  
      <section className="py-24 px-6 md:px-12">  
        <div className="max-w-2xl mx-auto">  
          {post.content.map((paragraph: string, i: number) => (  
            <p key={i} className="text-xl md:text-2xl font-light leading-relaxed text-white/80 mb-12 last:mb-0">  
              {paragraph}  
            </p>  
          ))}  
            
          <div className="mt-24 pt-12 border-t border-white/10">  
             <div className="flex justify-between items-center">  
                <div className="space-y-1">  
                  <p className="text-[10px] uppercase tracking-widest text-white/30">Share</p>  
                  <p className="text-sm font-light italic">Discretion is advised.</p>  
                </div>  
                <button   
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}  
                  className="text-[10px] uppercase tracking-widest hover:text-white/50 transition-colors"  
                >  
                  Back to Top ↑  
                </button>  
             </div>  
          </div>  
        </div>  
      </section>

      {/* Footer CTA */}  
      <section className="py-24 border-t border-white/10 bg-zinc-950/30">  
        <div className="max-w-screen-xl mx-auto px-6 text-center">  
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">Next Intelligence</p>  
          <a href="/journal" className="text-3xl md:text-5xl font-light hover:italic transition-all inline-block">  
            Explore the Journal Index →  
          </a>  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
