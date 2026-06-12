// app/inquiry/page.tsx  
import React from 'react';

const InquiryPage = () => {  
return (  
  <main className="min-h-screen bg-[#0D0D0D] text-[#E2E0D5] selection:bg-[#E2E0D5] selection:text-[#0D0D0D]">  
    {/* --- Header Section --- */}  
    <section className="px-6 pt-32 pb-20 md:pt-48 md:pb-24 max-w-4xl mx-auto text-center">  
      <span className="text-[10px] uppercase tracking-[0.5em] text-[#A69F88] block mb-6">The Journey Begins</span>  
      <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-8">The Inquiry</h1>  
      <p className="text-sm md:text-base font-light leading-relaxed opacity-60 max-w-xl mx-auto italic text-[#A69F88]">  
        Every experience we curate starts with a conversation. Tell us about the "Elsewhere" you are seeking, and we will help you find the way.  
      </p>  
    </section>

    {/* --- The Softened Ledger --- */}  
    <section className="px-6 pb-48 max-w-4xl mx-auto">  
      <form className="space-y-20">  
          
        {/* --- Section 1: Connection --- */}  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">  
          <div className="flex flex-col gap-3">  
            <label className="text-[9px] uppercase tracking-[0.3em] text-[#A69F88]">Contact Name</label>  
            <input type="text" placeholder="Your Name" className="bg-transparent border-b border-white/10 py-3 focus:border-[#A69F88] outline-none transition-colors placeholder:opacity-20 text-white" />  
          </div>  
          <div className="flex flex-col gap-3">  
            <label className="text-[9px] uppercase tracking-[0.3em] text-[#A69F88]">Email Address</label>  
            <input type="email" placeholder="Preferred Email" className="bg-transparent border-b border-white/10 py-3 focus:border-[#A69F88] outline-none transition-colors placeholder:opacity-20 text-white" />  
          </div>  
          <div className="flex flex-col gap-3">  
            <label className="text-[9px] uppercase tracking-[0.3em] text-[#A69F88]">Desired Destination</label>  
            <input type="text" placeholder="A specific Sanctuary or 'Discovery'" className="bg-transparent border-b border-white/10 py-3 focus:border-[#A69F88] outline-none transition-colors placeholder:opacity-20 text-white" />  
          </div>  
          <div className="flex flex-col gap-3">  
            <label className="text-[9px] uppercase tracking-[0.3em] text-[#A69F88]">Travel Party</label>  
            <input type="text" placeholder="Total number of guests" className="bg-transparent border-b border-white/10 py-3 focus:border-[#A69F88] outline-none transition-colors placeholder:opacity-20 text-white" />  
          </div>  
        </div>

        {/* --- Section 2: Timing --- */}  
        <div className="flex flex-col gap-3">  
          <label className="text-[9px] uppercase tracking-[0.3em] text-[#A69F88]">Preferred Timing</label>  
          <input type="text" placeholder="Proposed dates or a season" className="bg-transparent border-b border-white/10 py-3 focus:border-[#A69F88] outline-none transition-colors placeholder:opacity-20 text-white" />  
        </div>

        {/* --- Section 3: The Intention --- */}  
        <div className="space-y-12 pt-8">  
          <div className="flex flex-col gap-3">  
            <label className="text-[9px] uppercase tracking-[0.3em] text-[#A69F88]">The Objective</label>  
            <textarea   
              rows={2}  
              placeholder="What are you looking to find in this escape? (Clarity, connection, quiet...)"   
              className="bg-transparent border-b border-white/10 py-3 focus:border-[#A69F88] outline-none transition-colors placeholder:opacity-20 resize-none text-white italic font-serif text-lg"  
            />  
          </div>  
        </div>

        {/* --- Action --- */}  
        <div className="pt-20 text-center">  
          <button className="px-24 py-5 border border-[#A69F88]/30 text-[10px] uppercase tracking-[0.8em] text-[#A69F88] hover:bg-[#A69F88] hover:text-[#0D0D0D] transition-all duration-1000">  
            Send Inquiry  
          </button>  
          <p className="text-[8px] uppercase tracking-[0.3em] opacity-20 mt-12">  
            The Collective Concierge will respond shortly.  
          </p>  
        </div>

      </form>  
    </section>  
  </main>  
);  
};

export default InquiryPage;  
