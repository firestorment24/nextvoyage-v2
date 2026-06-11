import { Cormorant_Garamond, Inter } from 'next/font/google'  
import Link from 'next/link'

// Font Definitions  
const cormorant = Cormorant_Garamond({   
  subsets: ['latin'],   
  weight: ['300', '400', '600', '700'],  
  variable: '--font-cormorant'  
})

const inter = Inter({   
  subsets: ['latin'],  
  variable: '--font-inter'  
})

const sanctuaries = [  
  { id: 'metropolitan', category: 'Access', locations: 'London / Tokyo / NYC', title: 'Metropolitan', description: 'The boardroom in the clouds. Precision service for the global executive.' },  
  { id: 'alpine', category: 'Seclusion', locations: 'Swiss Alps / Dolomites', title: 'Alpine', description: 'Thin air, thick blankets, and total disconnection from the grid.' },  
  { id: 'island', category: 'Restoration', locations: 'Maldives / Seychelles', title: 'Island', description: 'A private ecosystem where the only schedule is the tide.' },  
  { id: 'floating', category: 'Privacy', locations: 'Mediterranean / Amalfi', title: 'Floating', description: 'Ultimate autonomy. Your sanctuary moves with your desire.' },  
  { id: 'stadium', category: 'Access', locations: 'Monaco / Silverstone', title: 'Stadium', description: 'Immersive events with a private exit always within reach.' },  
  { id: 'cinematic', category: 'Restoration', locations: 'Iceland / Patagonia', title: 'Cinematic', description: 'Grand scales that put everything back into perspective.' },  
  { id: 'fortress', category: 'Seclusion', locations: 'Scottish Highlands / Utah', title: 'Fortress', description: 'The ultimate bug-out luxury. Secure, sustainable, and secret.' },  
  { id: 'safari', category: 'Restoration', locations: 'Botswana / Serengeti', title: 'Safari', description: 'Raw nature experienced through a lens of total refinement.' },  
  { id: 'oasis', category: 'Privacy', locations: 'Morocco / Oman', title: 'Oasis', description: 'Walled gardens and ancient cooling techniques. A secret life.' },  
]

export default function HomePage() {  
  return (  
    <main className={`${inter.variable} ${cormorant.variable} font-sans bg-black text-white min-h-screen selection:bg-neutral-800`}>  
        
      {/* Hero Section - The Ledger Entry */}  
      <section className="pt-40 pb-32 px-6 md:px-12 border-b border-neutral-800">  
        <div className="max-w-5xl mx-auto text-center space-y-10">  
          <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs text-neutral-500 font-medium">  
            NexVoyage Collective / Global Registry  
          </p>  
          <h1 className="font-serif text-5xl md:text-8xl font-light leading-[1.1] tracking-tight">  
            An Atlas of <br />  
            <span className="italic text-neutral-400">Discreet Luxury</span>  
          </h1>  
          <p className="text-neutral-500 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">  
            A curated portfolio of nine sanctuary archetypes, meticulously designed for the world&apos;s most discerning travelers.  
          </p>  
          <div className="pt-8">  
            <span className="inline-block animate-bounce text-neutral-600 text-xs tracking-widest uppercase">Scroll to Explore</span>  
          </div>  
        </div>  
      </section>

      {/* The 3x3 Collection Grid */}  
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-neutral-800 bg-black">  
        {sanctuaries.map((s) => (  
          <Link   
            key={s.id}   
            href={`/sanctuaries/${s.id}`}  
            className="group relative border-b md:border-r border-neutral-800 p-10 md:p-14 hover:bg-[#080808] transition-all duration-700 flex flex-col justify-between min-h-[450px]"  
          >  
            <div>  
              <div className="flex justify-between items-start mb-16">  
                <span className="uppercase tracking-[0.3em] text-[9px] text-neutral-500 font-semibold border-b border-neutral-800 pb-1">  
                  {s.category}  
                </span>  
                <span className="text-[9px] text-neutral-700 font-mono tracking-tighter">  
                  NV.ARCH.{s.id.toUpperCase().slice(0, 3)}  
                </span>  
              </div>  
              <p className="text-[10px] text-neutral-500 font-mono mb-4 uppercase tracking-[0.15em]">  
                {s.locations}  
              </p>  
              <h2 className="font-serif text-4xl md:text-5xl font-normal group-hover:italic transition-all duration-500 group-hover:translate-x-2">  
                {s.title}  
              </h2>  
            </div>  
              
            <div className="mt-12 space-y-8">  
              <p className="text-neutral-400 font-light leading-relaxed text-sm md:text-base opacity-70 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">  
                {s.description}  
              </p>  
              <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] text-neutral-600 font-bold group-hover:text-white transition-colors duration-500">  
                <span>Access Dossier</span>  
                <span className="text-lg group-hover:translate-x-2 transition-transform duration-500">→</span>  
              </div>  
            </div>  
          </Link>  
        ))}  
      </section>

      {/* The Invitation Pillar */}  
      <section className="py-32 px-6 md:px-12 bg-[#050505]">  
        <div className="max-w-4xl mx-auto text-center space-y-16">  
          <h3 className="font-serif text-3xl md:text-5xl italic font-light leading-snug text-neutral-300">  
            &ldquo;We don&apos;t just sell destinations; we curate the atmospheric return on your most valuable asset: time.&rdquo;  
          </h3>  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-neutral-900">  
            <div className="space-y-2">  
              <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-600 font-bold">Priority</p>  
              <p className="font-serif text-2xl text-neutral-400">Absolute Privacy</p>  
            </div>  
            <div className="space-y-2">  
              <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-600 font-bold">Metric</p>  
              <p className="font-serif text-2xl text-neutral-400">Quiet Luxury</p>  
            </div>  
            <div className="space-y-2">  
              <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-600 font-bold">Status</p>  
              <p className="font-serif text-2xl text-neutral-400">Invitation Only</p>  
            </div>  
          </div>  
        </div>  
      </section>  
    </main>  
  )  
}  
