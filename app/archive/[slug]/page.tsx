import React from 'react';

// Define the shape of our sanctuary data  
interface Sanctuary {  
  title: string;  
  vibe: string;  
  philosophy: string;  
  standard: string;  
  tier: string;  
}

const sanctuaryData: Record<string, Sanctuary> = {  
  metropolitan: {  
    title: 'Metropolitan',  
    vibe: 'Urban Edge',  
    philosophy: 'High-performance hubs for the modern executive. A base for strategic clarity amidst the city’s pulse.',  
    standard: 'Sound-insulated suites, private biometric check-ins, and 24/7 boardroom-ready logistics.',  
    tier: 'The Executive Sanctuary'  
  },  
  coastal: {  
    title: 'Coastal',  
    vibe: 'Shoreline Silence',  
    philosophy: 'Utilizing the ocean as a cognitive reset. Architecture that dissolves into the horizon.',  
    standard: 'Private beach access, rhythmic tide-pacing service, and UV-protected glass minimalism.',  
    tier: 'The Horizon Sanctuary'  
  },  
  alpine: {  
    title: 'Alpine',  
    vibe: 'Peak Perspective',  
    philosophy: 'High-altitude healing. Elevating the mind through vertical isolation.',  
    standard: 'Mountain-ready logistics, oxygen-optimized suites, and wellness beyond the traditional spa.',  
    tier: 'The Remote Sanctuary'  
  },  
  desert: {  
    title: 'Desert',  
    vibe: 'Arid Minimalism',  
    philosophy: 'Finding clarity in the void. Vast horizons to facilitate deep intellectual focus.',  
    standard: 'Thermal-regulated villas, starlit silence protocols, and zero-noise environments.',  
    tier: 'The Void Sanctuary'  
  },  
  island: {  
    title: 'Island',  
    vibe: 'Barefoot Abundance',  
    philosophy: 'Trading digital noise for tide rhythm. Total disconnection from the grid.',  
    standard: '18-specialist vetting for invisible service and private latitude security.',  
    tier: 'The Anchor Sanctuary'  
  },  
  rural: {  
    title: 'Rural',  
    vibe: 'Estate Gravity',  
    philosophy: 'A return to soil and lineage. Refined pastoral peace for multi-generational resets.',  
    standard: 'Private estate stays, bio-dynamic farm access, and low-density land-use vetting.',  
    tier: 'The Heritage Sanctuary'  
  },  
  wellness: {  
    title: 'Wellness',  
    vibe: 'Scientific Restoration',  
    philosophy: 'Biological recalibration. A data-driven approach to physical and mental longevity.',  
    standard: 'Medical-grade diagnostics, bio-individual nutrition, and sleep hygiene monitoring.',  
    tier: 'The Vitality Sanctuary'  
  },  
  historic: {  
    title: 'Historic',  
    vibe: 'Cultural Gravity',  
    philosophy: 'Timelessness as a reset. Living within the weight of history to gain perspective.',  
    standard: 'Heritage preservation vetting, private museum access, and archival-grade luxury.',  
    tier: 'The Timeless Sanctuary'  
  },  
  safari: {  
    title: 'Safari',  
    vibe: 'Primal Reset',  
    philosophy: 'Reconnecting with raw life. The ultimate confrontation with nature met with absolute comfort.',  
    standard: 'Eco-conscious 18-point vetting, private ranger logistics, and high-security seclusion.',  
    tier: 'The Wild Sanctuary'  
  }  
};

interface PageProps {  
  params: Promise<{ slug: string }>;  
}

export default async function SanctuaryPage({ params }: PageProps) {  
  const resolvedParams = await params;  
  const sanctuary = sanctuaryData[resolvedParams.slug];

  if (!sanctuary) {  
    return (  
      <div className="p-20 text-center uppercase tracking-widest min-h-screen flex items-center justify-center font-sans">  
        Guide Not Found  
      </div>  
    );  
  }

  return (  
    <div className="bg-white text-[#1a1a1a] font-sans min-h-screen">  
      {/* Navigation */}  
      <nav className="flex justify-between items-center px-8 py-10 uppercase tracking-[0.2em] text-[10px] border-b border-gray-50 font-sans">  
        <div className="font-bold"><a href="/">NexVoyage Collective</a></div>  
        <div className="space-x-8">  
          <a href="/archive" className="hover:text-gray-400">The Archive</a>  
          <a href="/perspective" className="hover:text-gray-400">The Perspective</a>  
          <a href="/reserve" className="hover:text-gray-400 border border-black px-4 py-2">The Reserve</a>  
        </div>  
      </nav>

      {/* Hero */}  
      <header className="py-32 px-8 max-w-6xl mx-auto flex flex-col items-center text-center">  
        <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-8">{sanctuary.tier}</span>  
        <h1 className="text-6xl md:text-8xl font-serif italic mb-12">{sanctuary.title}</h1>  
        <div className="w-px h-24 bg-black/10"></div>  
      </header>

      {/* Content Grid */}  
      <section className="py-24 px-8 max-w-5xl mx-auto grid md:grid-cols-2 gap-24 border-b border-gray-50">  
        <div>  
          <h2 className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-8">Philosophy</h2>  
          <p className="text-2xl font-serif leading-relaxed italic">{sanctuary.philosophy}</p>  
        </div>  
        <div className="space-y-12">  
          <div>  
            <h2 className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-4">The Vibe</h2>  
            <p className="text-sm tracking-wide text-gray-600">{sanctuary.vibe}</p>  
          </div>  
          <div>  
            <h2 className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-4">The NexVoyage Standard</h2>  
            <p className="text-sm leading-relaxed text-gray-600">{sanctuary.standard}</p>  
          </div>  
        </div>  
      </section>

      {/* Call to Action */}  
      <section className="py-32 px-8 text-center bg-[#fafafa]">  
        <h3 className="text-sm uppercase tracking-[0.3em] mb-8">Inquire about this Sanctuary</h3>  
        <a href="/reserve" className="inline-block border border-black px-12 py-4 text-[10px] uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all">  
          Contact The Reserve  
        </a>  
      </section>

      {/* Footer */}  
      <footer className="py-20 px-8 border-t border-gray-100 text-center">  
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400">© 2026 NexVoyage Collective.</div>  
      </footer>  
    </div>  
  );  
}  
