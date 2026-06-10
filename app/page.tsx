import Link from 'next/link';

export default function HomePage() {  
  return (  
    <main className="min-h-screen bg-black text-white selection:bg-neutral-800 overflow-hidden">  
      {/* Hero Section */}  
      <section className="relative h-screen flex flex-col justify-between p-8 md:p-12">  
        {/* Background Image / Texture */}  
        <div className="absolute inset-0 z-0">  
          <img   
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"   
            className="w-full h-full object-cover opacity-30 grayscale"  
            alt="Horizon"  
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />  
        </div>

        {/* Top Nav */}  
        <nav className="relative z-10 flex justify-between items-center">  
          <div className="flex items-center gap-2">  
            <span className="text-2xl tracking-tighter uppercase font-bold">NexVoyage</span>  
            <span className="opacity-20 text-2xl">/</span>  
            <span className="text-2xl tracking-tighter uppercase opacity-60 font-light">Collective</span>  
          </div>  
          <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.4em] opacity-40">  
            <Link href="/sanctuary" className="hover:opacity-100 transition-opacity">The Sanctuaries</Link>  
            <Link href="/perspective" className="hover:opacity-100 transition-opacity">Perspective</Link>  
            <Link href="/reserve" className="hover:opacity-100 transition-opacity text-white opacity-100 border-b border-white/20 pb-1">Reserve</Link>  
          </div>  
        </nav>

        {/* Value Prop */}  
        <div className="relative z-10 max-w-4xl">  
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] tracking-tighter font-light mb-8">  
            Curating the <br />   
            <span className="italic font-serif">Unreachable.</span>  
          </h1>  
          <p className="text-xl md:text-2xl font-light opacity-60 max-w-xl leading-relaxed">  
            A private travel engine for high-net-worth individuals. We provide the architecture for your most significant departures.  
          </p>  
        </div>

        {/* Bottom Bar */}  
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">  
          <div className="flex gap-4">  
            <Link href="/sanctuary" className="px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-neutral-200 transition-colors">  
              Explore Sanctuaries  
            </Link>  
          </div>  
          <div className="text-right">  
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-30 mb-2">Based in New York / Available Globally</p>  
            <p className="text-sm italic opacity-50 font-serif">"Quiet luxury is a standard, not a trend."</p>  
          </div>  
        </div>  
      </section>

      {/* Philosophy Teaser */}  
      <section className="py-32 px-12 border-t border-white/5">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">  
          <div>  
            <span className="text-[10px] uppercase tracking-[0.5em] opacity-30">The Mission</span>  
            <h2 className="text-4xl mt-6 leading-tight font-light">  
              We aren't just a travel agency. We are the website engine for the next generation of elite travel.  
            </h2>  
          </div>  
          <div className="flex flex-col justify-center gap-8 text-neutral-500 leading-relaxed">  
            <p>  
              NexVoyage Collective specializes in the logistical mastery required for truly private travel. From orbital-level security to biometric-optimized retreats, we manage the unreachable.  
            </p>  
            <Link href="/perspective" className="text-white text-xs uppercase tracking-[0.3em] border-b border-white/20 w-fit pb-1 hover:border-white transition-colors">  
              Read our Perspective  
            </Link>  
          </div>  
        </div>  
      </section>  
    </main>  
  );  
}  
