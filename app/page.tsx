import Link from 'next/link'  
import { SANCTUARIES_DATA } from './lib/data'

// Move outside for a cleaner component structure  
const ArrowRight = () => (  
  <svg   
    width="20"   
    height="20"   
    viewBox="0 0 24 24"   
    fill="none"   
    stroke="currentColor"   
    strokeWidth="1.5"   
    strokeLinecap="round"   
    strokeLinejoin="round"  
  >  
    <path d="M5 12h14M12 5l7 7-7 7"/>  
  </svg>  
)

export default function Home() {  
  return (  
    <main className="bg-black text-white selection:bg-white selection:text-black">  
      {/* Hero Section: Cinematic Portal */}  
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="https://cdn.marblism.com/iw-pB1fOg0k.webp"   
            alt="Cinematic Sanctuary"   
            className="w-full h-full object-cover opacity-60 scale-105"  
            style={{ animation: 'subtle-zoom 20s infinite alternate ease-in-out' }}  
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />  
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">  
          <span className="block text-[10px] tracking-[0.4em] uppercase mb-6 opacity-60">  
            The New Standard of Travel  
          </span>  
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter mb-8 leading-[0.9]">  
            Beyond the <br />  
            <span className="italic font-serif">Horizon</span>  
          </h1>  
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">  
            <Link   
              href="/sanctuaries"   
              className="px-8 py-4 border border-white/20 hover:bg-white hover:text-black transition-all duration-500 text-xs tracking-widest uppercase"  
            >  
              Explore The Collection  
            </Link>  
            <Link   
              href="/concierge"   
              className="text-xs tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2"  
            >  
              Inquiry Flow <ArrowRight />  
            </Link>  
          </div>  
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">  
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>  
        </div>  
      </section>

      {/* Philosophy */}  
      <section className="py-40 px-8 max-w-4xl mx-auto text-center">  
        <p className="text-xl md:text-3xl font-light leading-relaxed opacity-80">  
          "We don’t just book travel. We architect <span className="text-white">sanctuaries</span>—temporary homes for the global soul, curated with obsessive attention to the quiet luxury of time and privacy."  
        </p>  
      </section>

      {/* 01 / The Collection Preview */}  
      <section className="py-32 px-8 border-t border-white/10">  
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">  
          <div>  
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">01 / The Collection</span>  
            <h2 className="text-4xl font-light mt-4 italic font-serif">A Curated Atlas</h2>  
          </div>  
          <Link href="/sanctuaries" className="group flex items-center gap-3 text-xs tracking-widest uppercase opacity-60 hover:opacity-100 transition-all">  
            View All Sanctuaries <span className="group-hover:translate-x-2 transition-transform"><ArrowRight /></span>  
          </Link>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">  
          {SANCTUARIES_DATA.slice(0, 3).map((item) => (  
            <Link key={item.id} href={`/sanctuaries/${item.id}`} className="group relative aspect-[4/5] overflow-hidden bg-black">  
              <img   
                src={item.image}   
                alt={item.name}   
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"  
              />  
              <div className="absolute inset-0 p-8 flex flex-col justify-end">  
                <span className="text-[9px] tracking-[0.2em] uppercase opacity-60 mb-2">{item.tag}</span>  
                <h3 className="text-xl font-light tracking-wide">{item.name}</h3>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* 02 / The Journal (Editorial Section) */}  
      <section className="py-32 px-8 border-t border-white/10 bg-[#0a0a0a]">  
        <div className="max-w-7xl mx-auto">  
          <div className="mb-20">  
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">02 / The Journal</span>  
            <h2 className="text-4xl font-light mt-4 italic font-serif">Quiet Perspectives</h2>  
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">  
            <div className="relative aspect-[3/4] overflow-hidden">  
              <img   
                src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80"   
                alt="Editorial"   
                className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"  
              />  
            </div>  
            <div className="space-y-12">  
              <div className="space-y-6">  
                <h3 className="text-3xl font-light leading-snug">The Art of Disappearing: Why true luxury is found in the places that aren't on the map.</h3>  
                <p className="text-lg opacity-50 font-light leading-relaxed">  
                  In an age of hyper-connectivity, the ultimate status symbol is silence. We explore the rise of 'Dark Sky' sanctuaries and the architectural shift toward invisible living.  
                </p>  
              </div>  
              <Link href="/journal" className="inline-flex items-center gap-4 text-xs tracking-[0.3em] uppercase group border-b border-white/20 pb-2 hover:border-white transition-all">  
                Read the Journal <span className="group-hover:translate-x-2 transition-transform"><ArrowRight /></span>  
              </Link>  
            </div>  
          </div>  
        </div>  
      </section>

      <style dangerouslySetInnerHTML={{ __html: `  
        @keyframes subtle-zoom {  
          0% { transform: scale(1); }  
          100% { transform: scale(1.1); }  
        }  
      `}} />  
    </main>  
  )  
}  
