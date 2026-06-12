import React from 'react';  
import Link from 'next/link';

// Sanctuary Data Map  
const SANCTUARY_DATA: Record<string, any> = {  
  'azure-retreat': {  
    name: 'The Azure Retreat',  
    location: 'Maldives',  
    assetId: 'SV-01',  
    image: 'https://cdn.marblism.com/oEQg3iCpzVW.webp',  
    narrative: 'A sanctuary designed for total detachment. Minimalist architecture floating over an endless horizon, where the only metric that matters is the tide.',  
    timing: {  
      primary: { dates: 'November – April', note: 'Peak clarity and stillness.' },  
      shoulder: { dates: 'May – October', note: 'Dramatic skies, absolute privacy.' }  
    },  
    roi: 'Every logistics layer—from the private seaplane transfer to the on-site "Guardian"—is managed to ensure zero friction. Your only job is to exist.'  
  },  
  'sky-pavilion': {  
    name: 'The Sky Pavilion',  
    location: 'New York',  
    assetId: 'SV-02',  
    image: 'https://cdn.marblism.com/tEQeAWrVeKE.webp',  
    narrative: 'A glass-walled sanctuary suspended above the urban pulse. True privacy at altitude, where the city becomes a silent, glowing backdrop to your focus.',  
    timing: {  
      primary: { dates: 'September – December', note: 'Crisp air, festive energy.' },  
      shoulder: { dates: 'January – March', note: 'Quiet, snowy seclusion.' }  
    },  
    roi: 'We bypass the friction of the city. Direct-to-suite arrivals and a dedicated "Guardian" to manage all urban logistics—from private gallery viewings to secure transit.'  
  },  
  'citadel': {  
    name: 'The Citadel',  
    location: 'Tuscany',  
    assetId: 'SV-03',  
    image: 'https://cdn.marblism.com/L6hKoKTgsE5.webp',  
    narrative: 'Centuries-old stone walls housing a modern fortress of solitude. Heritage meets high-tech in the quiet of the Italian countryside.',  
    timing: {  
      primary: { dates: 'September – November', note: 'Harvest season and mist-covered mornings.' },  
      shoulder: { dates: 'April – June', note: 'Wildflower blooms and temperate clarity.' }  
    },  
    roi: 'Total estate isolation. We secure the perimeter and provide a staff trained in the highest levels of discretion, ensuring your "unplug" is absolute.'  
  }  
};

// Simple Inline SVGs to avoid dependency issues  
const Icons = {  
  ChevronLeft: () => (  
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>  
  ),  
  Shield: () => (  
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>  
  ),  
  Clock: () => (  
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>  
  ),  
  Zap: () => (  
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>  
  )  
};

export default function SanctuaryDossier({ params }: { params: { id: string } }) {  
  const asset = SANCTUARY_DATA[params.id];

  if (!asset) {  
    return (  
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">  
        <p className="tracking-widest uppercase opacity-50">Asset Not Found</p>  
      </div>  
    );  
  }

  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-white selection:text-black">  
      {/* Header / Nav */}  
      <nav className="p-8 flex justify-between items-center border-b border-white/10">  
        <Link href="/manifest" className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] hover:opacity-50 transition-opacity">  
          <Icons.ChevronLeft /> Back to Manifest  
        </Link>  
        <div className="text-[10px] uppercase tracking-[0.4em] text-white/40">  
          Classification: Confidential // {asset.assetId}  
        </div>  
      </nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0">  
          
        {/* Visual Column */}  
        <div className="lg:col-span-5 h-[70vh] lg:h-[calc(100vh-81px)] sticky top-[81px] overflow-hidden border-r border-white/10">  
          <img   
            src={asset.image}   
            alt={asset.name}  
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"  
          />  
        </div>

        {/* Content Column */}  
        <div className="lg:col-span-7 p-8 lg:p-20 space-y-16">  
            
          <header className="space-y-4">  
            <h1 className="text-4xl lg:text-6xl font-light tracking-tighter text-white">  
              {asset.name}  
            </h1>  
            <p className="text-sm uppercase tracking-[0.3em] text-white/40 italic">  
              {asset.location}  
            </p>  
          </header>

          {/* Section: Narrative */}  
          <section className="space-y-4 max-w-xl">  
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/30">  
              <Icons.Shield /> The Narrative  
            </div>  
            <p className="text-lg leading-relaxed font-light opacity-80">  
              {asset.narrative}  
            </p>  
          </section>

          {/* Section: Optimal Timing */}  
          <section className="space-y-6">  
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/30">  
              <Icons.Clock /> Optimal Timing  
            </div>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
              <div className="space-y-1">  
                <p className="text-sm font-medium text-white">The Primary Window</p>  
                <p className="text-xs text-white/50">{asset.timing.primary.dates}</p>  
                <p className="text-sm italic text-white/70 mt-2">— {asset.timing.primary.note}</p>  
              </div>  
              <div className="space-y-1 border-l border-white/10 pl-8">  
                <p className="text-sm font-medium text-white">The Shoulder Narrative</p>  
                <p className="text-xs text-white/50">{asset.timing.shoulder.dates}</p>  
                <p className="text-sm italic text-white/70 mt-2">— {asset.timing.shoulder.note}</p>  
              </div>  
            </div>  
          </section>

          {/* Section: ROI */}  
          <section className="space-y-4 max-w-xl">  
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/30">  
              <Icons.Zap /> The ROI of Reset  
            </div>  
            <p className="text-sm leading-relaxed opacity-60">  
              {asset.roi}  
            </p>  
          </section>

          {/* The Protocol CTA */}  
          <footer className="pt-12 border-t border-white/10">  
            <div className="space-y-6">  
              <div className="text-[10px] uppercase tracking-[0.5em] text-white/30">  
                The Protocol  
              </div>  
              <Link   
                href="/reserve"  
                className="inline-block px-12 py-5 bg-white text-black text-xs uppercase tracking-[0.3em] hover:bg-transparent hover:text-white border border-white transition-all duration-300"  
              >  
                Initiate Private Curation  
              </Link>  
            </div>  
          </footer>

        </div>  
      </div>  
    </main>  
  );  
}  
