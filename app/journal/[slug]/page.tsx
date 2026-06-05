"use client"

import { useParams, notFound } from 'next/navigation'  
import Link from 'next/link'  
import Navigation from '@/app/Navigation'  
import Footer from '@/app/Footer'

const posts = {  
  'art-of-arrival-world-cup-2026': {  
    title: 'The Art of Arrival: FIFA World Cup 2026',  
    excerpt: 'On July 19, 2026, the world will descend on MetLife Stadium. A masterclass in the elegance of being effortlessly expected.',  
    category: 'Logistics',  
    date: 'June 2026',  
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200'  
  },  
  'urban-sanctuary-beverly-hills': {  
    title: 'The Urban Sanctuary: City Exclusivity',  
    excerpt: 'A sensory exploration of city living at its most refined, anchored by the heritage suites of The Maybourne Beverly Hills.',  
    category: 'Sanctuary',  
    date: 'June 2026',  
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1200'  
  },  
  'silent-edge-corporate-excellence': {  
    title: 'The Silent Edge: Corporate Excellence',  
    excerpt: 'Power rarely announces itself. Explore the invisible advantage of perfectly choreographed logistics for high-performance leaders.',  
    category: 'Corporate',  
    date: 'June 2026',  
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'  
  },  
  'private-island-seclusion-amanyara': {  
    title: 'The Gift of Distance: Amanyara',  
    excerpt: 'On the quiet edge of Providenciales, arrival feels less like check-in and more like disappearance.',  
    category: 'Sanctuary',  
    date: 'May 2026',  
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200'  
  },  
  'horizon-heritage-maritime-travel': {  
    title: 'Horizon & Heritage: Maritime Travel',  
    excerpt: 'From the mirror-still Mediterranean to the blue ice of Antarctica, we explore private yachting where luxury becomes fluid.',  
    category: 'Maritime',  
    date: 'May 2026',  
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200'  
  },  
  'alpine-sanctuary-minaret-station': {  
    title: 'Peaks & Parallels: The Alpine Sanctuary',  
    excerpt: 'Remote luxury redefined by a lodge reachable only by helicopter in the Southern Alps of New Zealand.',  
    category: 'Sanctuary',  
    date: 'May 2026',  
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200'  
  },  
  'stadium-sanctuary-pulse-performance': {  
    title: 'The Stadium Sanctuary: The Pulse',  
    excerpt: 'A world shaped in brass and shadow, where the thrill of the game is sharpened by absolute control.',  
    category: 'Sport',  
    date: 'April 2026',  
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1200'  
  },  
  'cinematic-sanctuary-designed-stillness': {  
    title: 'The Cinematic Sanctuary: Stillness',  
    excerpt: 'Explore the rare elegance of a private screening room where darkness is design and solitude becomes a study in silence.',  
    category: 'Aesthetic',  
    date: 'April 2026',  
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200'  
  },  
  'fortress-sanctuary-absolute-security': {  
    title: 'The Fortress Sanctuary: Security',  
    excerpt: 'True luxury lives in the quiet confidence of knowing nothing reaches you unless invited.',  
    category: 'Estate',  
    date: 'March 2026',  
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'  
  },  
  'safari-sanctuary-primal-reset': {  
    title: 'The Safari Sanctuary: Primal Reset',  
    excerpt: 'Where the raw beauty of the wild meets the refined shadows of camp at dusk. Anchored by Singita.',  
    category: 'Sanctuary',  
    date: 'March 2026',  
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200'  
  },  
  'oasis-sanctuary-celestial-stillness': {  
    title: 'The Oasis Sanctuary: Celestial Stillness',  
    excerpt: 'As the desert horizon deepens into velvet, the oasis reveals its true character: intimate and impossibly composed.',  
    category: 'Sanctuary',  
    date: 'February 2026',  
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80&w=1200'  
  }  
}

export default function JournalEntryPage() {  
  const params = useParams()  
  const slug = params.slug as string  
  const post = posts[slug as keyof typeof posts]

  if (!post) {  
    return notFound()  
  }

  return (  
    <main className="bg-black text-white min-h-screen">  
      <Navigation />

      <header className="pt-40 px-8 lg:px-24">  
        <div className="max-w-4xl">  
          <div className="flex items-center gap-6 mb-8">  
            <span className="text-[10px] tracking-[0.4em] uppercase text-gray-500">{post.category}</span>  
            <div className="h-[1px] w-12 bg-white/20" />  
            <span className="text-[10px] tracking-[0.4em] uppercase text-gray-500">{post.date}</span>  
          </div>  
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.9] uppercase mb-12">  
            {post.title}  
          </h1>  
        </div>  
      </header>

      <div className="w-full aspect-[21/9] overflow-hidden grayscale opacity-70 mb-20">  
        <img   
          src={post.image}   
          alt={post.title}   
          className="w-full h-full object-cover"  
        />  
      </div>

      <article className="px-8 lg:px-24 pb-40 flex flex-col lg:flex-row gap-20">  
        <aside className="lg:w-1/3">  
          <div className="sticky top-40 space-y-12">  
            <div>  
              <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-4">Reading Time</p>  
              <p className="text-sm font-light">6 Minute Study</p>  
            </div>  
            <div>  
              <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-4">Share Entry</p>  
              <div className="flex gap-4">  
                {['LinkedIn', 'Email', 'Link'].map(item => (  
                  <button key={item} className="text-[10px] uppercase tracking-widest border border-white/10 px-3 py-1 hover:bg-white hover:text-black transition-all">  
                    {item}  
                  </button>  
                ))}  
              </div>  
            </div>  
            <div className="pt-12 border-t border-white/10">  
              <Link   
                href="/reserve"   
                className="group flex items-center gap-4"  
              >  
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">  
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">  
                    <path d="M5 12h14M12 5l7 7-7 7" />  
                  </svg>  
                </div>  
                <span className="text-[10px] uppercase tracking-[0.3em]">Inquire for this voyage</span>  
              </Link>  
            </div>  
          </div>  
        </aside>

        <div className="lg:w-2/3 max-w-2xl">  
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300 mb-16 italic">  
            "{post.excerpt}"  
          </p>

          <div className="space-y-12 text-lg font-light leading-relaxed text-gray-400">  
            <p>  
              The essence of the NexVoyage standard is the removal of friction. It is a philosophy that views travel not as a series of destinations, but as a choreography of moments—each one designed to preserve the composure and focus of the traveler.   
            </p>  
            <p>  
              In our study of the unreachable, we find that luxury is often found in the things that don't happen. The line that is avoided, the wait that is eliminated, the detail that is anticipated before it is ever voiced. This is the silent edge.  
            </p>  
            <p>  
              Whether we are navigating the credentials of a global summit or the arrival at a private mountain lodge, the objective remains the same: to create a sanctuary where time is reclaimed and the world is held at a respectful distance.  
            </p>  
              
            <div className="py-20">  
              <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />  
            </div>

            <p>  
              As we look toward the horizon of 2026, the definition of exclusive travel continues to evolve. It is no longer enough to simply arrive; one must arrive with intention. The Journal serves as our record of these intentions—a collection of insights for those who value the quiet power of a voyage perfectly executed.  
            </p>  
          </div>

          <div className="mt-24 pt-24 border-t border-white/10">  
            <Link href="/journal" className="text-[10px] uppercase tracking-[0.5em] text-gray-500 hover:text-white transition-colors">  
              Back to Journal  
            </Link>  
          </div>  
        </div>  
      </article>

      <Footer />  
    </main>  
  )  
}  
