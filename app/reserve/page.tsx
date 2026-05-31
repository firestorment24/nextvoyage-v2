import React from 'react'

export default function ReservePage() {  
  return (  
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-xl mx-auto">  
      <div className="text-center mb-16">  
        <h1 className="text-4xl font-serif mb-4">The Reserve</h1>  
        <p className="text-zinc-500 font-light italic">By invitation and referral only.</p>  
      </div>

      <form className="space-y-8">  
        <div className="space-y-2">  
          <label className="text-xs uppercase tracking-tighter text-zinc-400">Name</label>  
          <input type="text" className="w-full border-b border-zinc-200 py-2 focus:outline-none focus:border-black transition-colors bg-transparent" />  
        </div>

        <div className="space-y-2">  
          <label className="text-xs uppercase tracking-tighter text-zinc-400">Inquiry Type</label>  
          <select className="w-full border-b border-zinc-200 py-2 focus:outline-none focus:border-black transition-colors bg-transparent appearance-none">  
            <option>Individual Reset</option>  
            <option>Corporate Strategy Offsite</option>  
            <option>Architectural Study</option>  
          </select>  
        </div>

        <div className="space-y-2">  
          <label className="text-xs uppercase tracking-tighter text-zinc-400">Narrative</label>  
          <textarea   
            rows={4}   
            placeholder="Tell us about the space you are looking to occupy."  
            className="w-full border-b border-zinc-200 py-2 focus:outline-none focus:border-black transition-colors bg-transparent resize-none"  
          />  
        </div>

        <button className="w-full bg-black text-white py-4 text-xs uppercase tracking-[0.3em] hover:bg-zinc-800 transition-colors">  
          Request Access  
        </button>  
      </form>  
    </main>  
  )  
}  
