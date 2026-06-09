// ... existing imports  
import { ArrowRight } from 'lucide-react'

// Inside the return, after the "01 / The Collection" section:  
<section className="py-32 px-8 border-t border-white/10 bg-black">  
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">  
    <div className="order-2 md:order-1">  
      <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-8">02 / Intelligence</p>  
      <h2 className="text-5xl font-serif mb-8 leading-tight">The Art of Discretion</h2>  
      <p className="text-lg text-white/60 mb-12 max-w-md font-light leading-relaxed">  
        How the world’s most private individuals are redefining what it means to be truly "away." Explore our latest perspectives on the ROI of reset.  
      </p>  
      <Link   
        href="/journal"   
        className="inline-flex items-center gap-4 group text-sm uppercase tracking-widest border-b border-white/20 pb-2 hover:border-white transition-all"  
      >  
        Read the Intelligence <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />  
      </Link>  
    </div>  
    <div className="order-1 md:order-2 aspect-[4/5] bg-zinc-900 overflow-hidden">  
      <img   
        src="https://cdn.marblism.com/iw-pB1fOg0k.webp"   
        alt="Intelligence"   
        className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"  
      />  
    </div>  
  </div>  
</section>  
