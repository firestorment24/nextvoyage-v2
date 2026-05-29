import React from 'react';

export default function ConciergePage() {  
return (  
  <main className="min-h-screen bg-[#F5F5F0] text-[#2C2C2C] font-serif pt-32 pb-24">  
    <div className="max-w-4xl mx-auto px-6">  
      <div className="text-center mb-20">  
        <h1 className="text-5xl md:text-6xl mb-6 tracking-tight">The Concierge</h1>  
        <p className="text-xl font-sans text-neutral-500 max-w-2xl mx-auto leading-relaxed italic">  
          Entry into the Collective is by invitation or private referral.   
          Please share your requirements below to initiate the vetting process.  
        </p>  
      </div>

      <div className="max-w-2xl mx-auto">  
        <form className="space-y-12">  
          {/* PERSONAL IDENTITY */}  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
            <div className="flex flex-col border-b border-neutral-300 pb-2">  
              <label className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-2">Legal Name</label>  
              <input   
                type="text"   
                placeholder="Required"  
                className="bg-transparent border-none outline-none font-sans placeholder:text-neutral-300 focus:ring-0 text-lg"  
              />  
            </div>  
            <div className="flex flex-col border-b border-neutral-300 pb-2">  
              <label className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-2">Preferred Communication</label>  
              <input   
                type="text"   
                placeholder="Email or WhatsApp"  
                className="bg-transparent border-none outline-none font-sans placeholder:text-neutral-300 focus:ring-0 text-lg"  
              />  
            </div>  
          </div>

          {/* INTEREST */}  
          <div className="flex flex-col border-b border-neutral-300 pb-2">  
            <label className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-2">Interest</label>  
            <select className="bg-transparent border-none outline-none font-sans text-neutral-500 focus:ring-0 text-lg appearance-none cursor-pointer">  
              <option>General Inquiry</option>  
              <option>Sanctuary Selection</option>  
              <option>Security Coordination</option>  
              <option>The ROI of Rest Portfolio</option>  
            </select>  
          </div>

          {/* MESSAGE */}  
          <div className="flex flex-col border-b border-neutral-300 pb-2">  
            <label className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-2">Brief Narrative of Needs</label>  
            <textarea   
              rows={4}  
              placeholder="Discretion is our standard."  
              className="bg-transparent border-none outline-none font-sans placeholder:text-neutral-300 focus:ring-0 text-lg resize-none"  
            />  
          </div>

          {/* REFERRAL CODE */}  
          <div className="flex flex-col border-b border-neutral-300 pb-2 w-full md:w-1/2">  
            <label className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-2">Referral Code</label>  
            <input   
              type="text"   
              placeholder="If applicable"  
              className="bg-transparent border-none outline-none font-sans placeholder:text-neutral-300 focus:ring-0 text-lg"  
            />  
          </div>

          <div className="pt-10 flex flex-col items-center">  
            <button className="px-12 py-4 bg-[#2C2C2C] text-[#F5F5F0] text-xs uppercase tracking-[0.4em] hover:bg-neutral-800 transition-all duration-500 shadow-2xl">  
              Initiate Contact  
            </button>  
            <p className="mt-6 text-[10px] uppercase tracking-widest text-neutral-400">  
              Response time is typically within 4 hours.  
            </p>  
          </div>  
        </form>  
      </div>  
    </div>  
  </main>  
);  
}  
