'use client';  
import React, { useState } from 'react';

export default function TheReserve() {  
  const [step, setStep] = useState(1);  
  const totalSteps = 5;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));  
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const inputStyle = "w-full bg-transparent border-b border-stone-700 py-4 outline-none focus:border-[#d4af37] transition-all duration-500 text-2xl font-light text-white placeholder:text-stone-800";  
  const labelStyle = "block text-[12px] uppercase tracking-[0.4em] text-[#d4af37] mb-2 font-medium";  
  const buttonStyle = "px-8 py-4 border border-stone-800 text-sm uppercase tracking-widest text-stone-300 hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300 peer-checked:border-[#d4af37] peer-checked:text-[#d4af37]";

  return (  
    <div className="min-h-screen bg-[#0a0a0a] text-stone-200 flex flex-col md:flex-row overflow-hidden">  
        
      {/* Left Side: The Hero (Static) */}  
      <div className="md:w-1/3 h-48 md:h-screen relative overflow-hidden">  
        <img   
          src="https://cdn.marblism.com/Hz7T6Y3cGTU.webp"   
          alt="The Concierge"   
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"  
        />  
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]" />  
        <div className="absolute bottom-12 left-12">  
          <div className="w-12 h-[1px] bg-[#d4af37] mb-6" />  
          <h1 className="text-4xl font-light tracking-tighter text-[#d4af37] mb-2">THE RESERVE</h1>  
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Step {step} of {totalSteps}</p>  
        </div>  
      </div>

      {/* Right Side: The Consultation Form */}  
      <div className="md:w-2/3 flex flex-col justify-center p-8 md:p-24 relative">  
          
        {/* Progress Bar */}  
        <div className="absolute top-0 left-0 w-full h-1 bg-stone-900">  
          <div   
            className="h-full bg-[#d4af37] transition-all duration-700"   
            style={{ width: `${(step / totalSteps) * 100}%` }}  
          />  
        </div>

        <div className="max-w-3xl w-full mx-auto">  
            
          {/* STEP 1: THE WHO */}  
          {step === 1 && (  
            <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-700">  
              <h2 className="text-4xl font-light tracking-tight text-white italic">01. The Essentials</h2>  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
                <div className="space-y-2">  
                  <label className={labelStyle}>Full Name</label>  
                  <input type="text" placeholder="Daryl Clark" className={inputStyle} />  
                </div>  
                <div className="space-y-2">  
                  <label className={labelStyle}>Email Address</label>  
                  <input type="email" placeholder="daryl@nexvoyage.com" className={inputStyle} />  
                </div>  
                <div className="space-y-2">  
                  <label className={labelStyle}>Phone (Optional)</label>  
                  <input type="tel" placeholder="+1 (555) 000-0000" className={inputStyle} />  
                </div>  
                <div className="space-y-4">  
                  <label className={labelStyle}>Preferred Contact</label>  
                  <div className="flex gap-4">  
                    {['Email', 'Text', 'WhatsApp'].map(m => (  
                      <button key={m} className="text-xs uppercase tracking-widest border border-stone-800 px-4 py-2 hover:border-[#d4af37]">{m}</button>  
                    ))}  
                  </div>  
                </div>  
              </div>  
            </div>  
          )}

          {/* STEP 2: WHERE & WHEN */}  
          {step === 2 && (  
            <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-700">  
              <h2 className="text-4xl font-light tracking-tight text-white italic">02. Logistics</h2>  
              <div className="space-y-12">  
                <div className="space-y-2">  
                  <label className={labelStyle}>Where are you dreaming of?</label>  
                  <input type="text" placeholder="e.g. Kyoto, Amalfi Coast, or 'Surprise Me'" className={inputStyle} />  
                </div>  
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  
                  <div>  
                    <label className={labelStyle}>Timeframe</label>  
                    <input type="text" placeholder="Late Summer 2026" className={inputStyle} />  
                  </div>  
                  <div>  
                    <label className={labelStyle}>Duration</label>  
                    <input type="text" placeholder="7 Nights" className={inputStyle} />  
                  </div>  
                  <div>  
                    <label className={labelStyle}>Travelers</label>  
                    <input type="text" placeholder="2 Adults, 1 Child" className={inputStyle} />  
                  </div>  
                </div>  
              </div>  
            </div>  
          )}

          {/* STEP 3: VIBE */}  
          {step === 3 && (  
            <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-700">  
              <h2 className="text-4xl font-light tracking-tight text-white italic">03. The NexVoyage Vibe</h2>  
              <div className="space-y-12">  
                <div className="space-y-4">  
                  <label className={labelStyle}>Trip Type</label>  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">  
                    {['Leisure', 'Corporate', 'Milestone', 'Group'].map(v => (  
                      <button key={v} className={buttonStyle}>{v}</button>  
                    ))}  
                  </div>  
                </div>  
                <div className="space-y-4">  
                  <label className={labelStyle}>The Personality</label>  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">  
                    <button className={buttonStyle + " text-left h-32 p-6 flex flex-col justify-between"}>  
                      <span className="font-bold">The Sanctuary</span>  
                      <span className="text-[10px] normal-case opacity-60">Wellness & Seclusion</span>  
                    </button>  
                    <button className={buttonStyle + " text-left h-32 p-6 flex flex-col justify-between"}>  
                      <span className="font-bold">The Elite Pulse</span>  
                      <span className="text-[10px] normal-case opacity-60">Urban & Events</span>  
                    </button>  
                    <button className={buttonStyle + " text-left h-32 p-6 flex flex-col justify-between"}>  
                      <span className="font-bold">The Family Legacy</span>  
                      <span className="text-[10px] normal-case opacity-60">Multi-gen Comfort</span>  
                    </button>  
                  </div>  
                </div>  
                <div className="space-y-4">  
                  <label className={labelStyle}>Budget Range</label>  
                  <div className="grid grid-cols-3 gap-4">  
                    {['$10k–$20k', '$20k–$50k', 'Elite Tier'].map(b => (  
                      <button key={b} className={buttonStyle}>{b}</button>  
                    ))}  
                  </div>  
                </div>  
              </div>  
            </div>  
          )}

          {/* STEP 4 & 5 Combined for brevity: DETAILS & FINAL */}  
          {(step === 4 || step === 5) && (  
            <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-700">  
              <h2 className="text-4xl font-light tracking-tight text-white italic">{step === 4 ? "04. Details" : "05. Final Touch"}</h2>  
              <div className="space-y-12">  
                {step === 4 ? (  
                  <>  
                    <div className="space-y-2">  
                      <label className={labelStyle}>Must-Haves</label>  
                      <input type="text" placeholder="e.g. Private pool, Direct flights" className={inputStyle} />  
                    </div>  
                    <div className="space-y-2">  
                      <label className={labelStyle}>Special Occasion?</label>  
                      <input type="text" placeholder="Is this a birthday or retirement?" className={inputStyle} />  
                    </div>  
                    <div className="space-y-2">  
                      <label className={labelStyle}>How did you find us?</label>  
                      <input type="text" placeholder="Referral, Social Media..." className={inputStyle} />  
                    </div>  
                  </>  
                ) : (  
                  <div className="space-y-2">  
                    <label className={labelStyle}>Anything else we should know?</label>  
                    <textarea rows={4} placeholder="Dietary restrictions, preferences, or notes..." className={inputStyle + " resize-none"} />  
                  </div>  
                )}  
              </div>  
            </div>  
          )}

          {/* Navigation Buttons */}  
          <div className="mt-20 flex items-center justify-between border-t border-stone-900 pt-10">  
            {step > 1 ? (  
              <button onClick={prevStep} className="text-stone-500 uppercase tracking-widest text-xs hover:text-white transition-all">  
                Back  
              </button>  
            ) : <div />}  
              
            {step < totalSteps ? (  
              <button   
                onClick={nextStep}   
                className="group flex items-center gap-6 text-[#d4af37] uppercase tracking-[0.4em] text-xs font-bold"  
              >  
                Next Step  
                <div className="w-12 h-[1px] bg-[#d4af37] group-hover:w-20 transition-all duration-500" />  
              </button>  
            ) : (  
              <button className="bg-[#d4af37] text-black px-12 py-5 uppercase tracking-[0.4em] text-xs font-bold hover:bg-white transition-all">  
                Transmit Inquiry  
              </button>  
            )}  
          </div>

        </div>  
      </div>  
    </div>  
  );  
}  
