import Link from 'next/link';

export default function FirstConversationBlock() {  
  return (  
    <section className="py-24 px-6 max-w-4xl mx-auto border-t border-white/10">  
      <div className="border border-[#D4AF37]/20 bg-[#111] p-8 md:p-12 rounded-sm text-center">  
        <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-sans mb-3 block">  
          Begin Your Journey  
        </span>  
        <h2 className="text-white text-3xl md:text-4xl font-serif font-light tracking-tight mb-6">  
          Your First Conversation  
        </h2>  
        <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans font-light max-w-2xl mx-auto mb-8">  
          A confidential 20–30 minute discovery call to discuss your travel aspirations, preliminary itineraries, and privacy requirements. We explore how our private office coordinates your global footprint and determine mutual fit before moving forward.  
        </p>  
        <Link  
          href="https://cal.com/nexvoyagecollective/discovery-call"  
          target="_blank"  
          rel="noopener noreferrer"  
          className="inline-flex items-center justify-center bg-[#D4AF37] text-black px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#c5a059] transition-colors"  
        >  
          Schedule Discovery Call  
        </Link>  
      </div>  
    </section>  
  );  
}  
