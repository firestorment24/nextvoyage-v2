"use client";  
import Navigation from '../../Navigation'; /
import Link from 'next/link';

const SANCTUARIES = {  
  metropolitan: {  
    title: "Metropolitan Sanctuary",  
    description: "Ultra-luxury urban escapes in the world's most vibrant skylines.",  
    content: "Deep in the heart of the world's power centers, our Metropolitan Sanctuaries offer a silent, high-altitude reprieve from the pace of the city. Think floor-to-ceiling glass, private helipads, and sound-sealed suites."  
  },  
  floating: {  
    title: "Floating Sanctuary",  
    description: "Maritime excellence and nomadic luxury on the open water.",  
    content: "Our Floating Sanctuaries are architectural marvels of the sea. Whether a custom superyacht or a stationary aquatic villa, these spaces are designed for complete disconnection from land-bound worries."  
  },  
  island: {  
    title: "Island Sanctuary",  
    description: "Private atolls and secluded coastlines for total isolation.",  
    content: "True isolation. Our Island Sanctuaries are hand-picked for their privacy and natural beauty, offering white-sand seclusion with full-service concierge support that remains invisible until needed."  
  },  
  alpine: {  
    title: "Alpine Sanctuary",  
    description: "High-altitude retreats among the peaks.",  
    content: "Breathable air and panoramic mountain views. These sanctuaries range from modern glass chalets to reinforced stone lodges, built to withstand the elements while providing warmth and clarity."  
  },  
  stadium: {  
    title: "Stadium Sanctuary",  
    description: "Unrivaled access to the world's greatest spectacles.",  
    content: "For the elite observer. These sanctuaries are built into or overlooking the world's most iconic sporting and event venues, offering a private theater for global moments."  
  },  
  cinematic: {  
    title: "Cinematic Sanctuary",  
    description: "Storybook landscapes and dramatic architectural statements.",  
    content: "Where reality meets art. These locations are chosen for their visual drama—places that look and feel like a masterpiece, designed for those who live life with a sense of scale."  
  },  
  fortress: {  
    title: "Fortress Sanctuary",  
    description: "The ultimate in security and architectural strength.",  
    content: "Safety is the ultimate luxury. Our Fortresses are built with state-of-the-art security, deep-ground reinforcement, and self-sustaining systems without sacrificing an ounce of elegance."  
  },  
  safari: {  
    title: "Safari Sanctuary",  
    description: "Wilderness immersion with absolute comfort.",  
    content: "A direct connection to the wild. These sanctuaries place you in the path of the world's most majestic migrations and landscapes, protected by expert trackers and world-class luxury."  
  },  
  oasis: {  
    title: "Oasis Sanctuary",  
    description: "Desert wonders and hidden water paradises.",  
    content: "Mirage-like beauty in the arid heart of the world. Our Oases offer cooling waters, lush greenery, and starlit nights in the most remote desert locations on Earth."  
  }  
};

export default function SanctuaryPage({ params }: { params: { slug: string } }) {  
  const sanctuary = SANCTUARIES[params.slug as keyof typeof SANCTUARIES];

  if (!sanctuary) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">  
      <Navigation />  
        
      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">  
        <Link href="/" className="text-sm uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-12 inline-block">  
          ← Back to the 9  
        </Link>  
          
        <header className="mb-16">  
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-6 italic">  
            {sanctuary.title}  
          </h1>  
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">  
            {sanctuary.description}  
          </p>  
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">  
          <div className="space-y-8 text-lg text-zinc-300 leading-relaxed font-light">  
            <p>{sanctuary.content}</p>  
            <div className="pt-8 border-t border-zinc-800">  
              <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-colors">  
                Inquire for Access  
              </button>  
            </div>  
          </div>  
            
          <div className="aspect-[4/5] bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800">  
            <span className="text-zinc-700 italic tracking-widest uppercase">Visual Preview Pending</span>  
          </div>  
        </section>  
      </div>  
    </main>  
  );  
}  
