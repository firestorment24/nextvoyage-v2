import React from 'react';

export default function TheReserve() {  
  return (  
    <div className="min-h-screen bg-[#0a0a0a] text-stone-200 flex flex-col md:flex-row">  
      {/* Left Side: Cinematic Anchor */}  
      <div className="md:w-1/2 h-64 md:h-screen relative overflow-hidden">  
        <img   
          src="https://cdn.marblism.com/Hz7T6Y3cGTU.webp"   
          alt="The Concierge"   
          className="absolute inset-0 w-full h-full object-cover grayscale-[20%] brightness-75"  
        />  
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]" />  
        <div className="absolute bottom-12 left-12 max-w-xs">  
          <h1 className="text-4xl font-light tracking-tighter text-[#d4af37] mb-4">THE RESERVE</h1>  
          <p className="text-sm uppercase tracking-widest text-stone-500 leading-relaxed">  
            Direct access to the NexVoyage engine. Your vision, executed with precision.  
          </p>  
        </div>  
      </div>

      {/* Right Side: The Form */}  
      <div className="md:w-1/2 flex items-center justify-center p-8 md:p-24 bg-[#0a0a0a]">  
        <div className="w-full max-w-md space-y-12">  
          <div className="space-y-2">  
            <h2 className="text-2xl font-light tracking-tight">Initiate Inquiry</h2>  
            <p className="text-stone-500 text-sm">Please provide the details of your vision below.</p>  
          </div>

          <form className="space-y-8">  
            {/* Name Field */}  
            <div className="relative group border-b border-stone-800 focus-within:border-[#d4af37] transition-colors duration-500 pb-2">  
              <label className="block text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-1">Full Name</label>  
              <input   
                type="text"   
                placeholder="Daryl Clark"  
                className="w-full bg-transparent border-none outline-none text-lg font-light placeholder:text-stone-800"  
              />  
            </div>

            {/* Email Field */}  
            <div className="relative group border-b border-stone-800 focus-within:border-[#d4af37] transition-colors duration-500 pb-2">  
              <label className="block text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-1">Email Address</label>  
              <input   
                type="email"   
                placeholder="daryl@nexvoyage.com"  
                className="w-full bg-transparent border-none outline-none text-lg font-light placeholder:text-stone-800"  
              />  
            </div>

            {/* Nature of Inquiry - Custom feel */}  
            <div className="space-y-4">  
              <label className="block text-[10px] uppercase tracking-[0.2em] text-stone-500">Nature of Inquiry</label>  
              <div className="grid grid-cols-2 gap-2">  
                {['Expedition', 'Sanctuary', 'Relocation', 'Advisory'].map((type) => (  
                  <button   
                    key={type}  
                    type="button"  
                    className="border border-stone-800 py-3 text-xs uppercase tracking-widest hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300"  
                  >  
                    {type}  
                  </button>  
                ))}  
              </div>  
            </div>

            {/* Briefing Field */}  
            <div className="relative group border-b border-stone-800 focus-within:border-[#d4af37] transition-colors duration-500 pb-2">  
              <label className="block text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-1">Details of the Vision</label>  
              <textarea   
                rows={3}  
                placeholder="A brief overview of your requirements..."  
                className="w-full bg-transparent border-none outline-none text-lg font-light placeholder:text-stone-800 resize-none"  
              />  
            </div>

            {/* Submit */}  
            <button className="w-full group relative overflow-hidden bg-[#d4af37] text-black py-5 uppercase tracking-[0.3em] text-xs font-bold transition-all hover:bg-white">  
              <span className="relative z-10">Send Inquiry</span>  
            </button>  
          </form>  
        </div>  
      </div>  
    </div>  
  );  
}  
