import Navigation from '@/components/Navigation';  
import Footer from '@/components/Footer';  
import {   
  ArrowRight,   
  ShieldCheck,   
  Globe,   
  Zap,  
  Award  
} from 'lucide-react';

export default function HomePage() {  
  const partners = [  
    "Aman", "Belmond", "Singita", "Regent Seven Seas",   
    "Explora Journeys", "Silversea", "Six Senses", "Rosewood",   
    "One&Only", "Abercrombie & Kent", "Orient Express",   
    "Mandarin Oriental", "Scott Dunn", "Four Seasons", "St. Regis"  
  ];

  return (  
    <main className="min-h-screen bg-black text-white font-sans selection:bg-[#d4af37] selection:text-black">  
      <Navigation />

      {/* Hero Section - High Substance, Low Hype */}  
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070"   
            alt="Luxury Villa"   
            className="w-full h-full object-cover opacity-60"  
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />  
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center">  
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 !text-white">  
            Travel, <span className="text-[#d4af37]">Perfected.</span>  
          </h1>  
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed !text-white">  
            We don't just book trips. We apply global leverage and deep industry relationships to ensure your time is never wasted.  
          </p>  
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">  
            <a href="/concierge" className="px-8 py-4 bg-[#d4af37] text-black font-medium hover:bg-[#b8952d] transition-all flex items-center gap-2">  
              Begin Inquiry <ArrowRight className="w-4 h-4" />  
            </a>  
            <a href="/perspective" className="px-8 py-4 border border-zinc-700 hover:bg-zinc-900 transition-all !text-white">  
              The Perspective  
            </a>  
          </div>  
        </div>  
      </section>

      {/* Value Proposition - Operational Proof */}  
      <section className="py-24 px-6 border-y border-zinc-800 bg-[#0a0a0a]">  
        <div className="max-w-7xl mx-auto grid md:grid-grid-cols-3 gap-12">  
          <div className="space-y-4">  
            <ShieldCheck className="w-8 h-8 text-[#d4af37]" />  
            <h3 className="text-xl font-medium !text-white">Preferred Status</h3>  
            <p className="text-zinc-400 leading-relaxed !text-white">  
              Through our Fora Travel and Virtuoso affiliations, our clients move to the top of the list for upgrades, late check-outs, and private amenities.  
            </p>  
          </div>  
          <div className="space-y-4">  
            <Globe className="w-8 h-8 text-[#d4af37]" />  
            <h3 className="text-xl font-medium !text-white">Global Leverage</h3>  
            <p className="text-zinc-400 leading-relaxed !text-white">  
              Our network spans 15 of the world's most elite hospitality pillars. We have direct lines to general managers, not reservation desks.  
            </p>  
          </div>  
          <div className="space-y-4">  
            <Zap className="w-8 h-8 text-[#d4af37]" />  
            <h3 className="text-xl font-medium !text-white">Time Preservation</h3>  
            <p className="text-zinc-400 leading-relaxed !text-white">  
              We handle the friction of logistics so you can focus on the experience. No "gatekeeping"—just professional operational excellence.  
            </p>  
          </div>  
        </div>  
      </section>

      {/* The Partner Network */}  
      <section className="py-24 px-6 bg-black">  
        <div className="max-w-7xl mx-auto">  
          <div className="text-center mb-16">  
            <h2 className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-4">Our Network</h2>  
            <h3 className="text-3xl md:text-4xl font-light !text-white">Elite Access. Preferred Relationships.</h3>  
          </div>  
            
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-zinc-800 border border-zinc-800">  
            {partners.map((partner) => (  
              <div key={partner} className="bg-black p-8 flex items-center justify-center text-center group hover:bg-zinc-900 transition-colors">  
                <span className="text-zinc-500 group-hover:text-[#d4af37] transition-colors text-sm font-medium uppercase tracking-widest">  
                  {partner}  
                </span>  
              </div>  
            ))}  
          </div>  
            
          <div className="mt-16 flex items-center justify-center gap-8 opacity-50 grayscale contrast-125">  
             <div className="text-xl font-serif italic text-zinc-400">VIRTUOSO Member</div>  
             <div className="text-xl font-serif italic text-zinc-400">FORA TRAVEL Partner</div>  
          </div>  
        </div>  
      </section>

      {/* CTA Section */}  
      <section className="py-32 px-6 bg-[#050505] relative overflow-hidden">  
        <div className="max-w-3xl mx-auto text-center relative z-10">  
          <Award className="w-12 h-12 text-[#d4af37] mx-auto mb-8" />  
          <h2 className="text-4xl font-light mb-6 !text-white">Ready for a better standard?</h2>  
          <p className="text-zinc-400 text-lg mb-12 !text-white">  
            We are currently accepting new clients for the 2026-2027 season. Simple, professional, and uncompromising service.  
          </p>  
          <a href="/concierge" className="inline-block px-12 py-5 bg-white text-black font-semibold hover:bg-[#d4af37] hover:text-black transition-all">  
            Contact the Desk  
          </a>  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
