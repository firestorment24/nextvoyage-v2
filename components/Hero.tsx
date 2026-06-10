import Link from 'next/link'

interface HeroProps {  
  title: string  
  subtitle: string  
  ctaText?: string  
  ctaHref?: string  
}

export default function Hero({ title, subtitle, ctaText, ctaHref }: HeroProps) {  
  return (  
    <section className="relative h-[80vh] flex flex-col items-center justify-center bg-[#000] text-white overflow-hidden">  
      {/* Background overlay for that Shadow look */}  
      <div className="absolute inset-0 bg-black/40 z-10" />  
        
      {/* High-fidelity background image placeholder - you can swap this URL */}  
      <div   
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"  
        style={{ backgroundImage: "url('https://cdn.marblism.com/2SNlSLcCStk.webp')" }}  
      />

      <div className="relative z-20 text-center px-4 max-w-4xl">  
        <h1 className="text-5xl md:text-7xl font-light tracking-[0.2em] uppercase mb-6 text-[#d4af37]">  
          {title}  
        </h1>  
        <p className="text-lg md:text-xl font-light tracking-widest text-gray-200 mb-10 italic">  
          {subtitle}  
        </p>  
          
        {ctaText && ctaHref && (  
          <Link   
            href={ctaHref}  
            className="inline-block border border-[#d4af37] text-[#d4af37] px-8 py-3 uppercase tracking-[0.3em] text-sm hover:bg-[#d4af37] hover:text-black transition-all duration-300"  
          >  
            {ctaText}  
          </Link>  
        )}  
      </div>  
        
      {/* Minimalist scroll indicator */}  
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">  
        <div className="w-[1px] h-12 bg-[#d4af37]/50" />  
      </div>  
    </section>  
  )  
}  
