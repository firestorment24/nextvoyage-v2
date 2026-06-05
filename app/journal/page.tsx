"use client"

import Link from 'next/link'  
import Navigation from '@/app/Navigation'  
import Footer from '@/app/Footer'

const posts = [  
{  
  slug: 'art-of-arrival-world-cup-2026',  
  title: 'The Art of Arrival: FIFA World Cup 2026',  
  excerpt: 'On July 19, 2026, the world will descend on MetLife Stadium. A masterclass in the elegance of being effortlessly expected.',  
  category: 'Logistics',  
  date: 'June 2026',  
  image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200'  
},  
{  
  slug: 'urban-sanctuary-beverly-hills',  
  title: 'The Urban Sanctuary: City Exclusivity',  
  excerpt: 'A sensory exploration of city living at its most refined, anchored by the heritage suites of The Maybourne Beverly Hills.',  
  category: 'Sanctuary',  
  date: 'June 2026',  
  image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1200'  
},  
{  
  slug: 'silent-edge-corporate-excellence',  
  title: 'The Silent Edge: Corporate Excellence',  
  excerpt: 'Power rarely announces itself. Explore the invisible advantage of perfectly choreographed logistics for high-performance leaders.',  
  category: 'Corporate',  
  date: 'June 2026',  
  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'  
},  
{  
  slug: 'private-island-seclusion-amanyara',  
  title: 'The Gift of Distance: Amanyara',  
  excerpt: 'On the quiet edge of Providenciales, arrival feels less like check-in and more like disappearance.',  
  category: 'Sanctuary',  
  date: 'May 2026',  
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200'  
},  
{  
  slug: 'horizon-heritage-maritime-travel',  
  title: 'Horizon & Heritage: Maritime Travel',  
  excerpt: 'From the mirror-still Mediterranean to the blue ice of Antarctica, we explore private yachting where luxury becomes fluid.',  
  category: 'Maritime',  
  date: 'May 2026',  
  image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200'  
},  
{  
  slug: 'alpine-sanctuary-minaret-station',  
  title: 'Peaks & Parallels: The Alpine Sanctuary',  
  excerpt: 'Remote luxury redefined by a lodge reachable only by helicopter in the Southern Alps of New Zealand.',  
  category: 'Sanctuary',  
  date: 'May 2026',  
  image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200'  
},  
{  
  slug: 'stadium-sanctuary-pulse-performance',  
  title: 'The Stadium Sanctuary: The Pulse',  
  excerpt: 'A world shaped in brass and shadow, where the thrill of the game is sharpened by absolute control.',  
  category: 'Sport',  
  date: 'April 2026',  
  image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1200'  
},  
{  
  slug: 'cinematic-sanctuary-designed-stillness',  
  title: 'The Cinematic Sanctuary: Stillness',  
  excerpt: 'Explore the rare elegance of a private screening room where darkness is design and solitude becomes a study in silence.',  
  category: 'Aesthetic',  
  date: 'April 2026',  
  image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200'  
},  
{  
  slug: 'fortress-sanctuary-absolute-security',  
  title: 'The Fortress Sanctuary: Security',  
  excerpt: 'True luxury lives in the quiet confidence of knowing nothing reaches you unless invited.',  
  category: 'Estate',  
  date: 'March 2026',  
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'  
},  
{  
  slug: 'safari-sanctuary-primal-reset',  
  title: 'The Safari Sanctuary: Primal Reset',  
  excerpt: 'Where the raw beauty of the wild meets the refined shadows of camp at dusk. Anchored by Singita.',  
  category: 'Sanctuary',  
  date: 'March 2026',  
  image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200'  
},  
{  
  slug: 'oasis-sanctuary-celestial-stillness',  
  title: 'The Oasis Sanctuary: Celestial Stillness',  
  excerpt: 'As the desert horizon deepens into velvet, the oasis reveals its true character: intimate and impossibly composed.',  
  category: 'Sanctuary',  
  date: 'February 2026',  
  image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80&w=1200'  
}  
]

export default function JournalPage() {  
return (  
<main className="bg-black text-white min-h-screen">  
  <Navigation />  
    
  <header className="pt-40 pb-20 px-8 lg:px-24 border-b border-white/10">  
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">  
      <div>  
        <h1 className="text-[12vw] font-light tracking-tighter leading-none uppercase">The Journal</h1>  
        <p className="mt-8 text-gray-500 max-w-sm tracking-[0.2em] text-[10px] uppercase leading-relaxed">  
          The NexVoyage Standard. <br />  
          Curated insights on lifestyle, philosophy, and the choreography of corporate excellence.  
        </p>  
      </div>  
      <div className="hidden md:block pb-2">  
        <div className="w-32 h-[1px] bg-white/20 mb-4" />  
        <p className="text-[10px] uppercase tracking-widest text-gray-600">Volume 01 / 2026</p>  
      </div>  
    </div>  
  </header>

  <div className="px-8 lg:px-24 py-24">  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">  
      {posts.map((post) => (  
        <article key={post.slug} className="group flex flex-col h-full">  
          <Link href={`/journal/${post.slug}`} className="flex flex-col h-full">  
            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-8">  
              <img   
                src={post.image}   
                alt={post.title}  
                className="object-cover w-full h-full grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[1.5s] ease-out"  
              />  
              <div className="absolute top-6 left-6">  
                <span className="text-[9px] tracking-[0.3em] uppercase border border-white/10 px-3 py-1.5 backdrop-blur-xl bg-black/20">  
                  {post.category}  
                </span>  
              </div>  
            </div>  
              
            <div className="flex flex-col flex-grow space-y-6">  
              <div className="flex items-center gap-4">  
                <span className="text-[10px] text-gray-600 tracking-widest uppercase">{post.date}</span>  
                <div className="h-[1px] w-8 bg-white/10" />  
              </div>  
                
              <h2 className="text-3xl font-light leading-[1.1] tracking-tight group-hover:text-gray-300 transition-colors">  
                {post.title}  
              </h2>  
                
              <p className="text-sm text-gray-500 font-light line-clamp-3 leading-relaxed tracking-wide">  
                {post.excerpt}  
              </p>  
                
              <div className="mt-auto pt-8">  
                <div className="flex items-center gap-4 group/btn">  
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 group-hover:text-white transition-colors">  
                    Explore Entry  
                  </span>  
                  <div className="h-[1px] w-0 group-hover:w-12 bg-white transition-all duration-500" />  
                </div>  
              </div>  
            </div>  
          </Link>  
        </article>  
      ))}  
    </div>  
  </div>

  <Footer />  
</main>  
)  
}  
