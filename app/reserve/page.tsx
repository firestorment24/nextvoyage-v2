// app/reserve/page.js  
import React from 'react';

export default function ReservePage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] flex flex-col items-center justify-center px-6 py-20">  
      <div className="max-w-2xl w-full">  
        {/* Header Section */}  
        <div className="text-center mb-16">  
          <h1 className="text-4xl md:text-5xl font-serif text-[#C5A059] mb-4 uppercase tracking-widest">  
            Access Protocol  
          </h1>  
          <p className="text-sm font-sans tracking-widest text-zinc-500 uppercase">  
            Inquiry by Vetting Only  
          </p>  
        </div>

        {/* The Application Form */}  
        <form className="space-y-12">  
          {/* Identity Section */}  
          <div className="space-y-6">  
            <div>  
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[#C5A059] mb-2 font-semibold">  
                Identity & Affiliation  
              </label>  
              <input   
                type="text"   
                placeholder="Name / Principal Organization"  
                className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-[#C5A059] transition-colors font-serif text-xl"  
              />  
            </div>  
          </div>

          {/* Biological Objectives */}  
          <div className="space-y-6">  
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#C5A059] mb-2 font-semibold">  
              Primary Biological Objective  
            </label>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
              {['Neural Decoupling', 'Mitochondrial Recovery', 'Circadian Alignment', 'Strategic Stillness'].map((objective) => (  
                <div key={objective} className="flex items-center space-x-3">  
                  <input type="checkbox" className="accent-[#C5A059] bg-transparent border-zinc-800" />  
                  <span className="text-sm font-sans text-zinc-400">{objective}</span>  
                </div>  
              ))}  
            </div>  
          </div>

          {/* ROI of Reset */}  
          <div>  
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#C5A059] mb-2 font-semibold">  
              Required Yield (ROI of Reset)  
            </label>  
            <textarea   
              rows="4"  
              placeholder="Define the specific cognitive or physiological output required from this sanctuary."  
              className="w-full bg-transparent border border-zinc-800 p-4 focus:outline-none focus:border-[#C5A059] transition-colors font-sans text-sm leading-relaxed text-zinc-300"  
            />  
          </div>

          {/* High Stakes Context */}  
          <div>  
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#C5A059] mb-2 font-semibold">  
              Environmental Context (High-Stakes Exposure)  
            </label>  
            <textarea   
              rows="3"  
              placeholder="Context regarding current cognitive load or operational intensity."  
              className="w-full bg-transparent border border-zinc-800 p-4 focus:outline-none focus:border-[#C5A059] transition-colors font-sans text-sm leading-relaxed text-zinc-300"  
            />  
          </div>

          {/* Submit Button */}  
          <div className="pt-8">  
            <button className="w-full border border-[#C5A059] text-[#C5A059] py-5 uppercase tracking-[0.3em] text-xs font-bold hover:bg-[#C5A059] hover:text-[#0A0A0A] transition-all duration-500">  
              Submit for Vetting  
            </button>  
          </div>  
        </form>

        {/* Footer Note */}  
        <div className="mt-20 text-center">  
          <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">  
            A response will be issued within 24 hours of successful vetting.  
          </p>  
        </div>  
      </div>  
    </main>  
  );  
}  
