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
    <div className="min-h-screen bg-[#0a0a0a] text-[#d4d4d4] font-serif selection:bg-[#404040]">  
      {/* Background Hero Image with Heavy Overlay */}  
      <div className="fixed inset-0 z-0 pointer-events-none">  
        <img   
          src="https://res.cloudinary.com/dt9v7kvsc/image/upload/v1718300000/ARrjs4vNOgk.jpg"   
          alt="Sanctuary Backdrop"  
          className="w-full h-full object-cover opacity-30 grayscale"  
        />  
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />  
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-24 min-h-screen flex flex-col">  
        {/* Progress Header */}  
        <div className="mb-16">  
          <div className="flex justify-between items-end mb-4">  
            <div>  
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#737373] block mb-2">Step {step} of 4</span>  
              <h1 className="text-2xl font-light tracking-tight">{steps[step-1].title}</h1>  
            </div>  
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#737373] italic">NexVoyage Collective</span>  
          </div>  
          <div className="h-[1px] w-full bg-[#262626]">  
            <div   
              className="h-[1px] bg-[#d4d4d4] transition-all duration-700 ease-in-out"   
              style={{ width: `${(step / 4) * 100}%` }}  
            />  
          </div>  
        </div>

        {/* Form Content */}  
        <div className="flex-grow">  
          {step === 1 && (  
            <div className="space-y-8">  
              <div className="group">  
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#737373] block mb-4 group-focus-within:text-[#d4d4d4] transition-colors">Legal Name</label>  
                <input   
                  type="text"  
                  placeholder="Daryl Clark"  
                  className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#d4d4d4] transition-colors font-light text-lg"  
                  onChange={(e) => setFormData({...formData, name: e.target.value})}  
                  value={formData.name}  
                />  
              </div>  
              <div className="group">  
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#737373] block mb-4 group-focus-within:text-[#d4d4d4] transition-colors">Digital Point of Contact</label>  
                <input   
                  type="email"  
                  placeholder="daryl.clark@fora.travel"  
                  className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#d4d4d4] transition-colors font-light text-lg"  
                  onChange={(e) => setFormData({...formData, email: e.target.value})}  
                  value={formData.email}  
                />  
              </div>  
            </div>  
          )}

          {step === 2 && (  
            <div className="space-y-8">  
              <div className="group">  
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#737373] block mb-4">Intended Sanctuary</label>  
                <input   
                  type="text"  
                  placeholder="The Kyoto Aman, or similar seclusion"  
                  className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#d4d4d4] transition-colors font-light text-lg"  
                  onChange={(e) => setFormData({...formData, sanctuary: e.target.value})}  
                  value={formData.sanctuary}  
                />  
              </div>  
              <div className="group">  
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#737373] block mb-4">Temporal Window</label>  
                <input   
                  type="text"  
                  placeholder="Q4 2026 / 14 Days"  
                  className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#d4d4d4] transition-colors font-light text-lg"  
                  onChange={(e) => setFormData({...formData, dates: e.target.value})}  
                  value={formData.dates}  
                />  
              </div>  
            </div>  
          )}

          {step === 3 && (  
            <div className="space-y-8">  
              <div className="group">  
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#737373] block mb-4">Primary Objective</label>  
                <textarea   
                  rows={4}  
                  placeholder="What must be achieved through this journey? Recalibration, expansion, or total shadow?"  
                  className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#d4d4d4] transition-colors font-light text-lg resize-none"  
                  onChange={(e) => setFormData({...formData, objectives: e.target.value})}  
                  value={formData.objectives}  
                />  
              </div>  
            </div>  
          )}

          {step === 4 && (  
            <div className="space-y-8">  
              <div className="group">  
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#737373] block mb-4">Referral / Institutional Code</label>  
                <input   
                  type="text"  
                  placeholder="How did you find the collective?"  
                  className="w-full bg-transparent border-b border-[#262626] py-4 outline-none focus:border-[#d4d4d4] transition-colors font-light text-lg"  
                  onChange={(e) => setFormData({...formData, referral: e.target.value})}  
                  value={formData.referral}  
                />  
              </div>  
              <p className="text-[12px] text-[#737373] leading-relaxed">  
                By submitting this inquiry, you acknowledge that NexVoyage Collective operates on a vetting-first basis. Entry is not guaranteed.  
              </p>  
            </div>  
          )}  
        </div>

        {/* Navigation Footer */}  
        <div className="mt-16 flex justify-between items-center">  
          <button   
            onClick={prevStep}  
            disabled={step === 1}  
            className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] transition-opacity ${step === 1 ? 'opacity-0' : 'opacity-50 hover:opacity-100'}`}  
          >  
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>  
            Back  
          </button>

          {step < 4 ? (  
            <button   
              onClick={nextStep}  
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#d4d4d4] border border-[#d4d4d4]/20 px-8 py-3 hover:bg-[#d4d4d4] hover:text-[#0a0a0a] transition-all duration-500"  
            >  
              Continue   
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>  
            </button>  
          ) : (  
            <button   
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#0a0a0a] bg-[#d4d4d4] px-10 py-4 hover:tracking-[0.4em] transition-all duration-500"  
            >  
              Apply for Entry  
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>  
            </button>  
          )}  
        </div>  
      </div>  
    </div>  
  );  
};

export default ReservePage;  
