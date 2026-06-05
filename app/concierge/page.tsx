'use client'

import Navigation from '../Navigation'  
import Footer from '../Footer'

export default function ConciergePage() {  
return (  
<main className="min-h-screen bg-black text-white font-sans selection:bg-white/20">  
  <Navigation />  
    
  <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto">  
    {/* The Gatekeeper Intro */}  
    <div className="mb-24 space-y-8">  
      <span className="text-[10px] tracking-[0.8em] uppercase text-white/30 block mb-4">  
        Private Inquiry  
      </span>  
      <h1 className="text-4xl md:text-6xl font-serif leading-tight tracking-tighter">  
        True luxury is the luxury of being understood without saying a word.  
      </h1>  
      <p className="text-lg text-white/50 font-light max-w-2xl leading-relaxed">  
        Our concierge service is a closed-loop system designed for absolute discretion. We don't just book travel; we architect moments of profound stillness.  
      </p>  
    </div>

    {/* The Inquiry Flow */}  
    <form className="space-y-16">  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
        <div className="space-y-4">  
          <label className="text-[10px] uppercase tracking-widest text-white/40">Identity</label>  
          <input   
            type="text"   
            placeholder="Full Legal Name"   
            className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-white/10"  
          />  
        </div>  
        <div className="space-y-4">  
          <label className="text-[10px] uppercase tracking-widest text-white/40">Access</label>  
          <input   
            type="email"   
            placeholder="Preferred Private Email"   
            className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-white/10"  
          />  
        </div>  
      </div>

      <div className="space-y-4">  
        <label className="text-[10px] uppercase tracking-widest text-white/40">Intention</label>  
        <textarea   
          rows={2}  
          placeholder="What is the primary intention of this voyage?"   
          className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-white/10 resize-none"  
        />  
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-8">  
        {/* Secure Badge */}  
        <div className="flex items-center gap-3 text-white/20">  
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">  
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>  
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>  
          </svg>  
          <span className="text-[9px] tracking-widest uppercase">End-to-End Encrypted Inquiry</span>  
        </div>

        <button className="px-12 py-4 bg-white text-black text-xs uppercase tracking-[0.3em] hover:bg-white/90 transition-all font-medium">  
          Initiate Contact  
        </button>  
      </div>  
    </form>  
  </section>

  <Footer />  
</main>  
)  
}  
