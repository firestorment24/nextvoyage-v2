// app/inquiry/page.tsx  
import React from 'react';

const InquiryPage = () => {  
  return (  
    <main className="min-h-screen bg-[#0D0D0D] text-[#E2E0D5] selection:bg-[#E2E0D5] selection:text-[#0D0D0D]">  
      <section className="px-6 pt-32 pb-20 md:pt-48 md:pb-24 max-w-4xl mx-auto text-center">  
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#A69F88] block mb-6">Access Required</span>  
        <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-8">Initiate Arrangement</h1>  
        <p className="text-sm md:text-base font-light leading-relaxed opacity-60 max-w-xl mx-auto italic text-[#A69F88]">  
          We curate travel as a capital investment in headspace. Share your logistics and your intentions below.  
        </p>  
      </section>

      <section className="px-6 pb-48 max-w-4xl mx-auto">  
        <form className="space-y-20">  
            
          {/* --- Section 1: The Basics (Who & When) --- */}  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">  
            <div className="flex flex-col gap-3">  
              <label className="text-[9px] uppercase tracking-[0.3em] text-[#A69F88]">The Principal</label>  
              <input type="text" placeholder="Full Name" className="bg-transparent border-b border-white/10 py-3 focus:border-[#A69F88] outline-none transition-colors placeholder:opacity-20 text-white" />  
            </div>  
            <div className="flex flex-col gap-3">  
              <label className="text-[9px] uppercase tracking-[0.3em] text-[#A69F88]">Direct Channel</label>  
              <input type="email" placeholder="Email Address" className="bg-transparent border-b border-white/10 py-3 focus:border-[#A69F88] outline-none transition-colors placeholder:opacity-20 text-white" />  
            </div>  
            <div className="flex flex-col gap-3">  
              <label className="text-[9px] uppercase tracking-[0.3em] text-[#A69F88]">The Sanctuary</label>  
              <input type="text" placeholder="Specify interest or 'Undisclosed'" className="bg-transparent border-b border-white/10 py-3 focus:border-[#A69F88] outline-none transition-colors placeholder:opacity-20 text-white" />  
            </div>  
            <div className="flex flex-col gap-3">  
              <label className="text-[9px] uppercase tracking-[0.3em] text-[#A69F88]">The Cohort</label>  
              <input type="text" placeholder="Total number of guests" className="bg-transparent border-b border-white/10 py-3 focus:border-[#A69F88] outline-none transition-colors placeholder:opacity-20 text-white" />  
            </div>  
          </div>

          {/* --- Section 2: The Logistics (Your Reserve Fields) --- */}  
          <div className="flex flex-col gap-3">  
            <label className="text-[9px] uppercase tracking-[0.3em] text-[#A69F88]">Travel Window</label>  
            <input type="text" placeholder="Proposed Dates or Seasonal Preference" className="bg-transparent border-b border-white/10 py-3 focus:border-[#A69F88] outline-none transition-colors placeholder:opacity-20 text-white" />  
          </div>

          {/* --- Section 3: The Intention (The Filter) --- */}  
          <div className="space-y-12 pt-8">  
            <div className="flex flex-col gap-3">  
              <label className="text-[9px] uppercase tracking-[0.3em] text-[#A69F88]">The Intended Outcome</label>  
              <textarea   
                rows={2}  
                placeholder="What is the objective of this reset? (Clarity, Seclusion, Strategic Planning...)"   
                className="bg-transparent border-b border-white/10 py-3 focus:border-[#A69F88] outline-none transition-colors placeholder:opacity-20 resize-none text-white italic font-serif text-lg"  
              />  
            </div>

            <div className="flex flex-col gap-3">  
              <label className="text-[9px] uppercase tracking-[0.3em] text-[#A69F88]">Extraction Method</label>  
              <div className="flex gap-12 pt-4">  
                <label className="flex items-center gap-4 cursor-pointer group">  
                  <div className="w-2 h-2 rounded-full border border-[#A69F88] group-hover:bg-[#A69F88] transition-all" />  
                  <span className="text-[10px] uppercase tracking-widest opacity-50 group-hover:opacity-100">Absolute Disconnect</span>  
                </label>  
                <label className="flex items-center gap-4 cursor-pointer group">  
                  <div className="w-2 h-2 rounded-full border border-white/20 group-hover:bg-white/20 transition-all" />  
                  <span className="text-[10px] uppercase tracking-widest opacity-30 group-hover:opacity-100">Lightly Tethered</span>  
                </label>  
              </div>  
            </div>  
          </div>

          {/* --- Action --- */}  
          <div className="pt-20 text-center">  
            <button className="px-24 py-5 border border-[#A69F88]/30 text-[10px] uppercase tracking-[0.8em] text-[#A69F88] hover:bg-[#A69F88] hover:text-[#0D0D0D] transition-all duration-1000">  
              Transmit Manifest  
            </button>  
            <p className="text-[8px] uppercase tracking-[0.3em] opacity-20 mt-12">  
              Encrypted transmission via the collective concierge.  
            </p>  
          </div>

        </form>  
      </section>  
    </main>  
  );  
};

export default InquiryPage;
