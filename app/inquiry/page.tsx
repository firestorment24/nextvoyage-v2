"use client";

import React, { useState } from 'react';

const InquiryPage = () => {  
  const [submitted, setSubmitted] = useState(false);  
  const [formData, setFormData] = useState({  
    name: '',  
    email: '',  
    sanctuary: '',  
    dates: '',  
    objectives: '',  
    referral: ''  
  });

  const handleSubmit = (e: React.FormEvent) => {  
    e.preventDefault();  
    setSubmitted(true);  
    // Logic for handling the inquiry would go here  
  };

  if (submitted) {  
    return (  
      <div className="min-h-screen bg-[#111111] text-[#d4d4d4] font-serif flex flex-col items-center justify-center px-6">  
        <div className="max-w-md text-center space-y-6 animate-in fade-in zoom-in duration-1000">  
          <h1 className="text-3xl font-light tracking-tight">Transmission Received.</h1>  
          <p className="text-sm text-[#525252] leading-relaxed tracking-wide font-sans uppercase">  
            Your application is now under review by the NexVoyage engine. We will reach out via your digital point of contact if entry is granted.  
          </p>  
          <div className="pt-8">  
            <a href="/" className="text-[10px] uppercase tracking-[0.4em] text-[#d4d4d4] border border-[#262626] px-8 py-3 hover:bg-[#d4d4d4] hover:text-[#111111] transition-all">Return to Hub</a>  
          </div>  
        </div>  
      </div>  
    );  
  }

  return (  
    <div className="min-h-screen bg-[#111111] text-[#a3a3a3] font-serif selection:bg-[#404040]">  
      {/* Subtle Background Depth */}  
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#111111] to-[#0a0a0a] opacity-50" />  
        
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-32 min-h-screen">  
          
        <div className="mb-20">  
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#525252] block mb-4 font-sans">Vetting Phase / Entry Inquiry</span>  
          <h1 className="text-4xl font-light tracking-tight text-[#e5e5e5]">The Conversation</h1>  
        </div>

        <form onSubmit={handleSubmit} className="space-y-16">  
          {/* Section: Identity */}  
          <div className="space-y-10">  
            <div className="group">  
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#525252] block mb-2 group-focus-within:text-[#d4d4d4] transition-colors font-sans">Full Legal Name</label>  
              <input   
                required  
                type="text"  
                placeholder="Daryl Clark"  
                className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#404040] transition-all font-light text-xl text-[#d4d4d4] placeholder:text-[#262626]"  
                onChange={(e) => setFormData({...formData, name: e.target.value})}  
              />  
            </div>  
            <div className="group">  
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#525252] block mb-2 group-focus-within:text-[#d4d4d4] transition-colors font-sans">Digital Contact</label>  
              <input   
                required  
                type="email"  
                placeholder="daryl.clark@fora.travel"  
                className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#404040] transition-all font-light text-xl text-[#d4d4d4] placeholder:text-[#262626]"  
                onChange={(e) => setFormData({...formData, email: e.target.value})}  
              />  
            </div>  
          </div>

          {/* Section: Logistics */}  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">  
            <div className="group">  
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#525252] block mb-2 font-sans">Intended Sanctuary</label>  
              <input   
                type="text"  
                placeholder="Kyoto, Japan"  
                className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#404040] transition-all font-light text-lg text-[#d4d4d4] placeholder:text-[#262626]"  
                onChange={(e) => setFormData({...formData, sanctuary: e.target.value})}  
              />  
            </div>  
            <div className="group">  
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#525252] block mb-2 font-sans">Temporal Window</label>  
              <input   
                type="text"  
                placeholder="Oct 2026"  
                className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#404040] transition-all font-light text-lg text-[#d4d4d4] placeholder:text-[#262626]"  
                onChange={(e) => setFormData({...formData, dates: e.target.value})}  
              />  
            </div>  
          </div>

          {/* Section: Purpose */}  
          <div className="group">  
            <label className="text-[10px] uppercase tracking-[0.3em] text-[#525252] block mb-2 font-sans">Mission Objective</label>  
            <textarea   
              rows={3}  
              placeholder="What must be achieved through this journey?"  
              className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#404040] transition-all font-light text-lg text-[#d4d4d4] placeholder:text-[#262626] resize-none"  
              onChange={(e) => setFormData({...formData, objectives: e.target.value})}  
            />  
          </div>

          <div className="group">  
            <label className="text-[10px] uppercase tracking-[0.3em] text-[#525252] block mb-2 font-sans">Institutional Referral</label>  
            <input   
              type="text"  
              placeholder="Source or access code"  
              className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#404040] transition-all font-light text-lg text-[#d4d4d4] placeholder:text-[#262626]"  
              onChange={(e) => setFormData({...formData, referral: e.target.value})}  
            />  
          </div>

          <div className="pt-12 flex flex-col items-center space-y-8">  
            <p className="text-[10px] text-[#404040] text-center leading-relaxed tracking-[0.1em] font-sans uppercase">  
              By initiating this conversation, you acknowledge the vetting-first policy of the NexVoyage Collective.  
            </p>  
            <button   
              type="submit"  
              className="w-full md:w-auto text-[10px] uppercase tracking-[0.5em] text-[#111111] bg-[#d4d4d4] px-16 py-6 hover:bg-white transition-all duration-700 font-sans"  
            >  
              Apply for Entry  
            </button>  
          </div>  
        </form>  
      </div>  
    </div>  
  );  
};

export default InquiryPage;  
