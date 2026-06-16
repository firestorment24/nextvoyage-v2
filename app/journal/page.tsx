import Link from 'next/link'

// The Master Ledger: 27 Destintion Guides  
const DESTINATIONS = [  
  { slug: 'amalfi-coast', name: 'Amalfi Coast', location: 'ITALY', category: 'THE COLLECTION' },  
  { slug: 'st-barts', name: 'St. Barts', location: 'CARIBBEAN', category: 'THE COLLECTION' },  
  { slug: 'kyoto', name: 'Kyoto', location: 'JAPAN', category: 'INTELLIGENCE' },  
  { slug: 'courchevel-1850', name: 'Courchevel 1850', location: 'ALPS', category: 'THE COLLECTION' },  
  { slug: 'maasai-mara', name: 'Maasai Mara', location: 'KENYA', category: 'CURATION' },  
  { slug: 'maldives', name: 'Maldives', location: 'INDIAN OCEAN', category: 'THE COLLECTION' },  
  { slug: 'aspen', name: 'Aspen', location: 'USA', category: 'THE COLLECTION' },  
  { slug: 'lake-como', name: 'Lake Como', location: 'ITALY', category: 'INTELLIGENCE' },  
  { slug: 'mustique', name: 'Mustique', location: 'GRENADINES', category: 'THE COLLECTION' },  
  { slug: 'bhutan', name: 'Bhutan', location: 'HIMALAYAS', category: 'CURATION' },  
  { slug: 'ibiza-north', name: 'Ibiza (North)', location: 'SPAIN', category: 'PERSPECTIVE' },  
  { slug: 'south-island-nz', name: 'South Island', location: 'NEW ZEALAND', category: 'CURATION' },  
  { slug: 'seychelles', name: 'Seychelles', location: 'INDIAN OCEAN', category: 'THE COLLECTION' },  
  { slug: 'provence', name: 'Provence', location: 'FRANCE', category: 'THE COLLECTION' },  
  { slug: 'galapagos', name: 'Galapagos', location: 'ECUADOR', category: 'CURATION' },  
  { slug: 'santorini', name: 'Santorini', location: 'GREECE', category: 'THE COLLECTION' },  
  { slug: 'okavango-delta', name: 'Okavango Delta', location: 'BOTSWANA', category: 'CURATION' },  
  { slug: 'rajasthan', name: 'Rajasthan', location: 'INDIA', category: 'INTELLIGENCE' },  
  { slug: 'gstaad', name: 'Gstaad', location: 'SWITZERLAND', category: 'THE COLLECTION' },  
  { slug: 'tokyo', name: 'Tokyo', location: 'JAPAN', category: 'INTELLIGENCE' },  
  { slug: 'bora-bora', name: 'Bora Bora', location: 'POLYNESIA', category: 'THE COLLECTION' },  
  { slug: 'tuscany', name: 'Tuscany', location: 'ITALY', category: 'THE COLLECTION' },  
  { slug: 'iceland', name: 'Iceland', location: 'NORDIC', category: 'CURATION' },  
  { slug: 'paris', name: 'Paris', location: 'FRANCE', category: 'INTELLIGENCE' },  
  { slug: 'london', name: 'London', location: 'UK', category: 'INTELLIGENCE' },  
  { slug: 'new-york', name: 'New York', location: 'USA', category: 'INTELLIGENCE' },  
  { slug: 'marrakesh', name: 'Marrakesh', location: 'MOROCCO', category: 'INTELLIGENCE' },  
]

export default function JournalPage() {  
  return (  
    <main className="min-h-screen bg-[#000000] text-[#D4AF37] selection:bg-[#D4AF37] selection:text-[#000000] overflow-x-hidden">  
        
      {/* Editorial Header */}  
      <header className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">  
        <div className="inline-block border-b border-[#D4AF37]/20 pb-4 mb-8">  
          <span className="font-mono text-[10px] tracking-[0.6em] uppercase opacity-60">  
            NexVoyage Editorial // Volume 01  
          </span>  
        </div>  
        <h1 className="text-7xl md:text-[9rem] font-serif tracking-tighter leading-none mb-12 italic">  
          The Journal  
        </h1>  
      </header>

      {/* Hero Narrative: Featured Destination */}  
      <section className="relative w-full h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden border-y border-[#D4AF37]/10">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="https://cdn.marblism.com/qFTkeALRTbV.webp"   
            alt="Hero"   
            className="w-full h-full object-cover scale-105 opacity-40 grayscale"  
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-transparent to-[#000000]" />  
        </div>

        <div className="relative z-10 max-w-4xl px-6">  
          <span className="font-mono text-[10px] tracking-[0.5em] uppercase mb-6 block opacity-80">  
            INTELLIGENCE — JAPAN  
          </span>  
          <Link href="/journal/kyoto" className="group">  
            <h2 className="text-5xl md:text-8xl font-serif leading-tight tracking-tight mb-8 group-hover:text-[#D4AF37]/80 transition-colors">  
              The Kyoto Protocol  
            </h2>  
            <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mb-8 group-hover:w-48 transition-all duration-700" />  
            <p className="text-xl md:text-2xl font-serif italic opacity-60 max-w-2xl mx-auto leading-relaxed">  
              "A definitive exploration of Kyoto’s hidden Machiyas and the private ceremonies that remain closed to the public gaze."  
            </p>  
          </Link>  
        </div>  
      </section>

      {/* The Master Ledger Grid: 27 Destinations */}  
      <section className="max-w-7xl mx-auto px-6 py-40">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">  
          {DESTINATIONS.map((dest, idx) => (  
            <Link   
              key={dest.slug}   
              href={`/journal/${dest.slug}`}  
              className={`group flex flex-col ${idx % 3 === 1 ? 'md:mt-12' : idx % 3 === 2 ? 'md:mt-24' : ''}`}  
            >  
              <div className="border-t border-[#D4AF37]/10 pt-8 space-y-4">  
                <div className="flex justify-between items-center font-mono text-[9px] tracking-[0.4em] uppercase opacity-40">  
                  <span>{dest.category}</span>  
                  <span>{dest.location}</span>  
                </div>  
                <h3 className="text-4xl font-serif tracking-tight leading-none group-hover:italic transition-all group-hover:pl-4">  
                  {dest.name}  
                </h3>  
                <div className="flex items-center space-x-4 pt-4">  
                  <span className="font-mono text-[10px] tracking-widest opacity-20">0{idx + 1}</span>  
                  <span className="w-full h-[1px] bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/40 transition-all duration-500" />  
                  <span className="font-mono text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">READ</span>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Global Aesthetics */}  
      <div className="fixed inset-0 pointer-events-none z-[60]">  
        <div className="absolute inset-0 shadow-[inset_0_0_15vw_rgba(0,0,0,0.9)]" />  
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-32 border-t border-[#D4AF37]/10 text-center">  
        <h4 className="font-serif italic text-3xl opacity-60 mb-12">  
          Finely Tuned Travel. Private Orchestration.  
        </h4>  
        <div className="flex justify-center space-x-12 font-mono text-[9px] tracking-[0.5em] uppercase opacity-30">  
          <Link href="/" className="hover:opacity-100 transition-opacity">The Lobby</Link>  
          <Link href="/archive" className="hover:opacity-100 transition-opacity">Archive</Link>  
          <Link href="/perspective" className="hover:opacity-100 transition-opacity">Perspective</Link>  
          <Link href="/invitation" className="hover:opacity-100 transition-opacity">Invitation</Link>  
        </div>  
      </footer>  
    </main>  
  )  
}  
