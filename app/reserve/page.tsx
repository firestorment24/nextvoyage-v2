import React from 'react';

const ReservePage = () => {  
return (  
  <div className="bg-[#0f0f0f] text-white font-sans min-h-screen selection:bg-gray-800">  
    {/* Navigation - Dark Mode Variant */}  
    <nav className="flex justify-between items-center px-8 py-10 uppercase tracking-[0.2em] text-[10px] border-b border-white/5">  
      <div className="font-bold"><a href="/" className="hover:text-gray-400">NexVoyage Collective</a></div>  
      <div className="space-x-8">  
        <a href="/archive" className="hover:text-gray-400 transition-colors">The Archive</a>  
        <a href="/perspective" className="hover:text-gray-400 transition-colors">The Perspective</a>  
        <a href="/reserve" className="text-gray-400 border border-white/20 px-4 py-2">The Reserve</a>  
      </div>  
    </nav>

    {/* Header */}  
    <header className="py-24 px-8 max-w-4xl mx-auto text-center">  
      <h1 className="text-4xl md:text-5xl font-serif italic mb-6">The Reserve</h1>  
      <p className="text-[10px] uppercase tracking-[0.4em] text-white/50 mb-12">Private Inquiry Service</p>  
      <div className="h-px w-20 bg-white/20 mx-auto"></div>  
    </header>

    {/* Content Section */}  
    <section className="px-8 pb-32 max-w-2xl mx-auto">  
      <div className="text-center mb-20">  
        <p className="text-lg font-serif leading-relaxed text-white/90 italic mb-8">  
          "The ultimate luxury is the preservation of time."  
        </p>  
        <p className="text-sm text-white/60 leading-[2] font-light">  
          The Reserve is our private gateway for discerning travelers seeking bespoke arrangements.   
          Whether you are looking to secure a sanctuary from The Archive or require a custom   
          itinerary tailored to your professional reset, our associates are at your disposal.  
        </p>  
      </div>

      {/* Inquiry Form */}  
      <form className="space-y-12">  
        <div className="border-b border-white/10 pb-4">  
          <label className="block text-[9px] uppercase tracking-[0.3em] text-white/40 mb-4">Identity</label>  
          <input   
            type="text"   
            placeholder="Name"   
            className="bg-transparent w-full outline-none text-sm font-light tracking-wide placeholder:text-white/20"  
          />  
        </div>

        <div className="border-b border-white/10 pb-4">  
          <label className="block text-[9px] uppercase tracking-[0.3em] text-white/40 mb-4">Communication</label>  
          <input   
            type="email"   
            placeholder="Email Address"   
            className="bg-transparent w-full outline-none text-sm font-light tracking-wide placeholder:text-white/20"  
          />  
        </div>

        <div className="border-b border-white/10 pb-4">  
          <label className="block text-[9px] uppercase tracking-[0.3em] text-white/40 mb-4">The Brief</label>  
          <textarea   
  rows={4}   
  placeholder="Describe the nature of your reset or inquiry..."   
  className="bg-transparent w-full outline-none text-sm font-light tracking-wide placeholder:text-white/20 resize-none"  
/>  
        </div>

        <div className="pt-8">  
          <button className="w-full border border-white py-4 text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500">  
            Submit Inquiry  
          </button>  
          <p className="text-[8px] text-center mt-6 text-white/30 uppercase tracking-widest">  
            Response times typically within 24 hours.  
          </p>  
        </div>  
      </form>  
    </section>

    {/* Footer */}  
    <footer className="py-20 px-8 border-t border-white/5 text-center">  
      <div className="text-[10px] uppercase tracking-[0.2em] text-white/30">  
        © 2026 NexVoyage Collective. All Rights Reserved.  
      </div>  
    </footer>  
  </div>  
);  
};

export default ReservePage; 
