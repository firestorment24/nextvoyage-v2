import Link from 'next/link'  
import Navigation from './Navigation'  
import Footer from './components/Footer'

export default function Home() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-white/20">  
      <Navigation />

      {/* Cinematic Hero Section */}  
      <section className="relative h-screen flex items-center justify-center overflow-hidden">  
        {/* Background Overlay for Cinematic Feel */}  
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0A0A0A] z-10" />  
          
        {/* Video/Image Placeholder */}  
        <div className="absolute inset-0 bg-neutral-900 scale-105">  
          {/* Once you have your hero video/image, drop the URL here */}  
          <div className="w-full h-full opacity-40 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center" />  
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">  
          <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-8 opacity-60 animate-pulse">  
            The New Standard of Travel  
          </p>  
          <h1 className="text-6xl md:text-9xl font-serif leading-[0.9] tracking-tighter mb-12">  
            Beyond the <span className="italic">Horizon</span>  
          </h1>  
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">  
            <Link   
              href="/sanctuaries"   
              className="px-12 py-4 bg-white text-black text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all duration-300 w-full md:w-auto"  
            >  
              Explore The Collection  
            </Link>  
            <Link   
              href="/concierge"   
              className="px-12 py-4 border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto"  
            >  
              The Inquiry flow  
            </Link>  
          </div>  
        </div>

        {/* Scroll Indicator */}  
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-40">  
          <div className="h-12 w-[1px] bg-gradient-to-b from-white to-transparent" />  
          <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>  
        </div>  
      </section>

      {/* Manifesto Section - High Impact Serif */}  
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">  
        <h2 className="text-3xl md:text-5xl font-serif leading-relaxed mb-12">  
          We don’t just book travel. We architect <span className="italic">sanctuaries</span>—temporary homes for the global soul, curated with obsessive attention to the quiet luxury of time and privacy.  
        </h2>  
        <div className="h-px w-24 bg-white/10 mx-auto" />  
      </section>

      {/* Teaser to The Collection */}  
      <section className="pb-32 px-6">  
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">  
          <div className="aspect-[16/9] bg-neutral-900 overflow-hidden relative border border-white/5 group">  
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449156001131-afb8aa457ed4?q=80&w=2070')] bg-cover bg-center grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />  
          </div>  
          <div className="max-w-md">  
            <p className="text-[10px] uppercase tracking-[0.3em] mb-4 opacity-40">01 / The Collection</p>  
            <h3 className="text-4xl font-serif mb-6">A Curated Atlas</h3>  
            <p className="text-sm opacity-60 leading-relaxed mb-8">  
              From metropolitan glass towers to floating retreats in the South Pacific. Explore our nine sanctuary archetypes.  
            </p>  
            <Link href="/sanctuaries" className="text-xs uppercase tracking-widest border-b border-white/20 pb-2 hover:border-white transition-all">  
              View All Sanctuaries →  
            </Link>  
          </div>  
        </div>  
      </section>

      <Footer />  
    </main>  
  )  
}  
