"use client";  
import Navigation from '../Navigation';

export default function ContactPage() {  
  return (  
    <main className="min-h-screen bg-black text-white">  
      <Navigation />  
        
      <div className="max-w-4xl mx-auto px-6 pt-40 pb-24">  
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-12">  
          PRIVATE INQUIRY  
        </h1>  
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">  
          <div className="space-y-12">  
            <div>  
              <h2 className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-4">Direct</h2>  
              <p className="text-xl font-light">concierge@nexvoyage.com</p>  
            </div>  
            <div>  
              <h2 className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-4">Presence</h2>  
              <p className="text-xl font-light leading-relaxed">  
                Global Operations<br />  
                Available 24/7 for Collective Members  
              </p>  
            </div>  
          </div>

          <form className="space-y-8">  
            <div className="space-y-2">  
              <input   
                type="text"   
                placeholder="NAME"   
                className="w-full bg-transparent border-b border-white/10 py-4 text-sm tracking-widest focus:outline-none focus:border-white transition-colors"  
              />  
            </div>  
            <div className="space-y-2">  
              <input   
                type="email"   
                placeholder="EMAIL"   
                className="w-full bg-transparent border-b border-white/10 py-4 text-sm tracking-widest focus:outline-none focus:border-white transition-colors"  
              />  
            </div>  
            <div className="space-y-2">  
              <textarea   
                rows={4}  
                placeholder="NATURE OF INQUIRY"   
                className="w-full bg-transparent border-b border-white/10 py-4 text-sm tracking-widest focus:outline-none focus:border-white transition-colors resize-none"  
              />  
            </div>  
            <button className="text-[10px] tracking-[0.5em] uppercase border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all duration-500">  
              Submit Request  
            </button>  
          </form>  
        </div>  
      </div>  
    </main>  
  );  
}  
