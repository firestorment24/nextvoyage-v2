"use client";

import React, { useState } from 'react';

const ReservePage = () => {  
  const [step, setStep] = useState(1);  
  const [formData, setFormData] = useState({  
    name: '',  
    email: '',  
    location: '',  
    sanctuary: '',  
    dates: '',  
    objectives: '',  
    referral: ''  
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));  
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const steps = [  
    { id: 1, title: "The Essentials", description: "Identity and reach." },  
    { id: 2, title: "The Logistics", description: "Sanctuary and timing." },  
    { id: 3, title: "The Touch", description: "The purpose of recalibration." },  
    { id: 4, title: "The Connection", description: "Vetting and verification." }  
  ];

  return (  
    /* MATCHING THE REST OF THE SITE: Deep charcoal #111 with a subtle radial gradient */  
    <div className="min-h-screen bg-[#111111] text-[#a3a3a3] font-serif selection:bg-[#404040]">  
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#111111] to-[#0a0a0a] opacity-50" />  
        
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-32 min-h-screen flex flex-col">  
          
        {/* Subtle Progress Indicator */}  
        <div className="mb-24">  
          <div className="flex justify-between items-end mb-6">  
            <div className="space-y-1">  
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#525252] block font-sans">Application Phase {step} / 4</span>  
              <h1 className="text-3xl font-light tracking-tight text-[#e5e5e5]">{steps[step-1].title}</h1>  
            </div>  
            <div className="hidden md:block text-[10px] uppercase tracking-[0.4em] text-[#525252] italic pb-1">  
              NexVoyage Collective  
            </div>  
          </div>  
          <div className="h-[1px] w-full bg-[#262626]">  
            <div   
              className="h-[1px] bg-[#d4d4d4] transition-all duration-1000 ease-out"   
              style={{ width: `${(step / 4) * 100}%` }}  
            />  
          </div>  
        </div>

        {/* Form Content */}  
        <div className="flex-grow">  
          {step === 1 && (  
            <div className="space-y-12 animate-in fade-in duration-700">  
              <div className="group">  
                <label className="text-[10px] uppercase tracking-[0.3em] text-[#525252] block mb-4 group-focus-within:text-[#d4d4d4] transition-colors font-sans">Legal Identity</label>  
                <input   
                  type="text"  
                  placeholder="Daryl Clark"  
                  className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#404040] transition-all font-light text-xl text-[#d4d4d4] placeholder:text-[#262626]"  
                  onChange={(e) => setFormData({...formData, name: e.target.value})}  
                  value={formData.name}  
                />  
              </div>  
              <div className="group">  
                <label className="text-[10px] uppercase tracking-[0.3em] text-[#525252] block mb-4 group-focus-within:text-[#d4d4d4] transition-colors font-sans">Digital Point of Contact</label>  
                <input   
                  type="email"  
                  placeholder="daryl.clark@fora.travel"  
                  className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#404040] transition-all font-light text-xl text-[#d4d4d4] placeholder:text-[#262626]"  
                  onChange={(e) => setFormData({...formData, email: e.target.value})}  
                  value={formData.email}  
                />  
              </div>  
            </div>  
          )}

          {step === 2 && (  
            <div className="space-y-12 animate-in fade-in duration-700">  
              <div className="group">  
                <label className="text-[10px] uppercase tracking-[0.3em] text-[#525252] block mb-4 font-sans">Intended Sanctuary</label>  
                <input   
                  type="text"  
                  placeholder="The Kyoto Aman, or similar seclusion"  
                  className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#404040] transition-all font-light text-xl text-[#d4d4d4] placeholder:text-[#262626]"  
                  onChange={(e) => setFormData({...formData, sanctuary: e.target.value})}  
                  value={formData.sanctuary}  
                />  
              </div>  
              <div className="group">  
                <label className="text-[10px] uppercase tracking-[0.3em] text-[#525252] block mb-4 font-sans">Temporal Window</label>  
                <input   
                  type="text"  
                  placeholder="Q4 2026 / 14 Days"  
                  className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#404040] transition-all font-light text-xl text-[#d4d4d4] placeholder:text-[#262626]"  
                  onChange={(e) => setFormData({...formData, dates: e.target.value})}  
                  value={formData.dates}  
                />  
              </div>  
            </div>  
          )}

          {step === 3 && (  
            <div className="space-y-12 animate-in fade-in duration-700">  
              <div className="group">  
                <label className="text-[10px] uppercase tracking-[0.3em] text-[#525252] block mb-4 font-sans">Primary Objective</label>  
                <textarea   
                  rows={4}  
                  placeholder="What must be achieved? Recalibration, expansion, or total shadow?"  
                  className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#404040] transition-all font-light text-xl text-[#d4d4d4] placeholder:text-[#262626] resize-none"  
                  onChange={(e) => setFormData({...formData, objectives: e.target.value})}  
                  value={formData.objectives}  
                />  
              </div>  
            </div>  
          )}

          {step === 4 && (  
            <div className="space-y-12 animate-in fade-in duration-700">  
              <div className="group">  
                <label className="text-[10px] uppercase tracking-[0.3em] text-[#525252] block mb-4 font-sans">Referral / Institutional Code</label>  
                <input   
                  type="text"  
                  placeholder="Access credentials or referral source"  
                  className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#404040] transition-all font-light text-xl text-[#d4d4d4] placeholder:text-[#262626]"  
                  onChange={(e) => setFormData({...formData, referral: e.target.value})}  
                  value={formData.referral}  
                />  
              </div>  
              <p className="text-[11px] text-[#404040] leading-relaxed tracking-wide font-sans">  
                APPLICATION NOTICE: NEXVOYAGE COLLECTIVE OPERATES ON A VETTING-FIRST BASIS. SUBMISSION DOES NOT CONSTITUTE ACCEPTANCE. ALL DATA IS HANDLED VIA ENCRYPTED CHANNELS.  
              </p>  
            </div>  
          )}  
        </div>

        {/* Navigation Footer */}  
        <div className="mt-24 flex justify-between items-center border-t border-[#262626] pt-12">  
          <button   
            onClick={prevStep}  
            disabled={step === 1}  
            className={`flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] transition-all font-sans ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-[#525252] hover:text-[#d4d4d4]'}`}  
          >  
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>  
            Previous  
          </button>

          {step < 4 ? (  
            <button   
              onClick={nextStep}  
              className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-[#d4d4d4] transition-all font-sans"  
            >  
              Advance   
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"/></svg>  
            </button>  
          ) : (  
            <button   
              className="flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-[#111111] bg-[#d4d4d4] px-12 py-5 hover:bg-white transition-all duration-700 font-sans"  
            >  
              Submit Application  
            </button>  
          )}  
        </div>  
      </div>  
    </div>  
  );  
};

export default ReservePage;  
