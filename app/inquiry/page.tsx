// app/inquiry/page.tsx  
import React from 'react';

const InquiryPage = () => {  
return (  
  <main className="min-h-screen bg-[#0D0D0D] text-[#E2E0D5] selection:bg-[#E2E0D5] selection:text-[#0D0D0D]">  
    {/* --- Header Section --- */}  
    <section className="px-6 pt-32 pb-20 md:pt-48 md:pb-24 max-w-4xl mx-auto text-center">  
      <span className="text-[10px] uppercase tracking-[0.5em] text-[#A69F88] block mb-6">Access Required</span>  
      <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-8">The Inquiry</h1>  
      <p className="text-sm md:text-base font-light leading-relaxed opacity-60 max-w-xl mx-auto italic">  
        We limit our engagements to a select collective of travelers each season.   
        Please share your intentions with us.  
      </p>  
    </section>

    {/* --- The "Ledger" Form --- */}  
    <section className="px-6 pb-48 max-w-3xl mx-auto">  
      <form className="space-y-16 md:space-y-24">  
          
        {/* Step 1: Identity */}  
        <div className="space-y-12">  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
            <div className="flex flex-col gap-4">  
              <label className="text-[10px] uppercase tracking-widest text-[#A69F88]">Identity</label>  
              <input   
                type="text"   
                placeholder="Name"   
                className="bg-transparent border-b border-white/10 py-2 focus:border-[#A69F88] outline-none transition-colors placeholder:opacity-20"  
              />  
            </div>  
            <div className="flex flex-col gap-4">  
              <label className="text-[10px] uppercase tracking-widest text-[#A69F88]">Direct Reach</label>  
              <input   
                type="email"   
                placeholder="Email Address"   
                className="bg-transparent border-b border-white/10 py-2 focus:border-[#A69F88] outline-none transition-colors placeholder:opacity-20"  
              />  
            </div>  
          </div>  
        </div>

        {/* Step 2: The Intent (The "Filter" Questions) */}  
        <div className="space-y-12">  
          <div className="flex flex-col gap-4">  
            <label className="text-[10px] uppercase tracking-widest text-[#A69F88]">Current Landscape</label>  
            <input   
              type="text"   
              placeholder="What is your current city of residence?"   
              className="bg-transparent border-b border-white/10 py-2 focus:border-[#A69F88] outline-none transition-colors placeholder:opacity-20"  
            />  
          </div>

          <div className="flex flex-col gap-4">  
            <label className="text-[10px] uppercase tracking-widest text-[#A69F88]">The Intended Outcome</label>  
            <textarea   
              rows={2}  
              placeholder="What do you seek from a 'Reset' in this chapter of your life?"   
              className="bg-transparent border-b border-white/10 py-2 focus:border-[#A69F88] outline-none transition-colors placeholder:opacity-20 resize-none"  
            />  
          </div>

          <div className="flex flex-col gap-4">  
            <label className="text-[10px] uppercase tracking-widest text-[#A69F88]">Extraction Method</label>  
            <div className="flex gap-8 pt-2">  
              <label className="flex items-center gap-3 cursor-pointer group">  
                <div className="w-3 h-3 rounded-full border border-[#A69F88] group-hover:bg-[#A69F88]/30 transition-all" />  
                <span className="text-[11px] uppercase tracking-widest opacity-60 group-hover:opacity-100">Total Disconnect</span>  
              </label>  
              <label className="flex items-center gap-3 cursor-pointer group">  
                <div className="w-3 h-3 rounded-full border border-white/20 group-hover:bg-white/10 transition-all" />  
                <span className="text-[11px] uppercase tracking-widest opacity-40 group-hover:opacity-100">Lightly Tethered</span>  
              </label>  
            </div>  
          </div>  
        </div>

        {/* Step 3: Referral */}  
        <div className="space-y-8 pt-8">  
           <div className="flex flex-col gap-4">  
            <label className="text-[10px] uppercase tracking-widest text-[#A69F88]">Path of Discovery</label>  
            <input   
              type="text"   
              placeholder="How did you hear about the Collective?"   
              className="bg-transparent border-b border-white/10 py-2 focus:border-[#A69F88] outline-none transition-colors placeholder:opacity-20"  
            />  
          </div>  
        </div>

        {/* The Action */}  
        <div className="pt-12">  
          <button className="w-full py-6 border border-[#A69F88]/30 text-[11px] uppercase tracking-[0.6em] text-[#A69F88] hover:bg-[#A69F88] hover:text-[#0D0D0D] transition-all duration-700">  
            Transmit Inquiry  
          </button>  
          <p className="text-center text-[9px] uppercase tracking-widest opacity-30 mt-8">  
            Response times vary by seasonal volume.  
          </p>  
        </div>

      </form>  
    </section>  
  </main>  
);  
};

export default InquiryPage; 
