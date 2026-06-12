'use client';  
import React, { useState } from 'react';

export default function TheReserve() {  
  const [step, setStep] = useState(1);  
  const totalSteps = 6;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));  
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const inputStyle = "w-full bg-transparent border-b border-stone-800 py-6 outline-none focus:border-[#d4af37] transition-all duration-700 text-3xl font-light text-white placeholder:text-stone-900";  
  const labelStyle = "block text-[11px] uppercase tracking-[0.5em] text-[#d4af37] mb-2 opacity-80";  
  const choiceStyle = "px-8 py-5 border border-stone-900 text-[10px] uppercase tracking-[0.3em] text-stone-400 hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-500";

  return (  
    <div className="min-h-screen bg-[#0a0a0a] text-stone-200 flex flex-col md:flex-row overflow-hidden font-serif">  
        
      {/* Cinematic Sidebar */}  
      <div className="md:w-1/4 h-32 md:h-screen relative overflow-hidden border-r border-stone-900">  
        <img   
          src="https://cdn.marblism.com/Hz7T6Y3cGTU.webp"   
          alt="The Concierge"   
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3]"  
        />  
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />  
        <div className="absolute bottom-10 left-10">  
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#d4af37] mb-2">Phase</p>  
          <div className="text-4xl font-light text-white italic">0{step}</div>  
        </div>  
      </div>

      {/* The Consultation Content */}  
      <div className="md:w-3/4 flex flex-col justify-center p-8 md:p-24 lg:p-32 relative">  
          
        {/* Minimal Progress Line */}  
        <div className="absolute top-0 left-0 w-full h-[1px] bg-stone-900">  
          <div   
            className="h-full bg-[#d4af37] transition-all duration-1000 ease-in-out"   
            style={{ width: `${(step / totalSteps) * 100}%` }}  
          />  
        </div>

        <div className="max-w-4xl w-full">  
            
          {/* STEP 1: IDENTITY */}  
          {step === 1 && (  
            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">  
              <div className="space-y-4">  
                <label className={labelStyle}>Who should we address?</label>  
                <input type="text" placeholder="Full Name" className={inputStyle} autoFocus />  
              </div>  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">  
                <div className="space-y-4">  
                  <label className={labelStyle}>Contact Email</label>  
                  <input type="email" placeholder="Email Address" className={inputStyle} />  
                </div>  
                <div className="space-y-4">  
                  <label className={labelStyle}>Direct Line (Optional)</label>  
                  <input type="tel" placeholder="Phone Number" className={inputStyle} />  
                </div>  
              </div>  
            </div>  
          )}

          {/* STEP 2: DESTINATION & TIMING */}  
          {step === 2 && (  
            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">  
              <div className="space-y-4">  
                <label className={labelStyle}>Where are you dreaming of?</label>  
                <input type="text" placeholder="Destination or 'Surprise Me'" className={inputStyle} autoFocus />  
              </div>  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">  
                <div className="space-y-4">  
                  <label className={labelStyle}>Timeline</label>  
                  <input type="text" placeholder="Dates or General Month" className={inputStyle} />  
                </div>  
                <div className="space-y-4">  
                  <label className={labelStyle}>Length of Stay</label>  
                  <input type="text" placeholder="Number of Nights" className={inputStyle} />  
                </div>  
              </div>  
            </div>  
          )}

          {/* STEP 3: TRAVELERS */}  
          {step === 3 && (  
            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">  
              <div className="space-y-4">  
                <label className={labelStyle}>Number of Travelers</label>  
                <input type="text" placeholder="Adults, Children, and Ages" className={inputStyle} autoFocus />  
              </div>  
              <div className="space-y-8">  
                <label className={labelStyle}>Type of Journey</label>  
                <div className="flex flex-wrap gap-4">  
                  {['Leisure', 'Corporate', 'Milestone', 'Group Retreat'].map(v => (  
                    <button key={v} className={choiceStyle}>{v}</button>  
                  ))}  
                </div>  
              </div>  
            </div>  
          )}

          {/* STEP 4: PERSONALITY & BUDGET */}  
          {step === 4 && (  
            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">  
              <div className="space-y-8">  
                <label className={labelStyle}>The Desired Vibe</label>  
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">  
                  {['The Sanctuary', 'The Elite Pulse', 'The Family Legacy'].map(p => (  
                    <button key={p} className={choiceStyle + " text-left py-10 px-6"}>{p}</button>  
                  ))}  
                </div>  
              </div>  
              <div className="space-y-4">  
                <label className={labelStyle}>Allocated Budget</label>  
                <input type="text" placeholder="e.g. $1k, 5k, 10k, 50k'" className={inputStyle} />  
              </div>  
            </div>  
          )}

          {/* STEP 5: MUST HAVES & DISCOVERY */}  
          {step === 5 && (  
            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">  
              <div className="space-y-4">  
                <label className={labelStyle}>Must-Haves & Occasions</label>  
                <input type="text" placeholder="Private Pool, Special Birthday, etc." className={inputStyle} autoFocus />  
              </div>  
              <div className="space-y-4">  
                <label className={labelStyle}>How did you find the collective?</label>  
                <input type="text" placeholder="Referral, Social, Search..." className={inputStyle} />  
              </div>  
            </div>  
          )}

          {/* STEP 6: FINAL TOUCH */}  
          {step === 6 && (  
            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">  
              <div className="space-y-4">  
                <label className={labelStyle}>Final Briefing</label>  
                <textarea   
                  rows={2}   
                  placeholder="Anything else we should know?"   
                  className={inputStyle + " resize-none"}   
                  autoFocus  
                />  
              </div>  
              <p className="text-stone-500 text-sm italic font-light">Your inquiry will be transmitted directly to our advisory team.</p>  
            </div>  
          )}

          {/* Navigation Controls */}  
          <div className="mt-24 flex items-center gap-12">  
            {step < totalSteps ? (  
              <button   
                onClick={nextStep}   
                className="group flex items-center gap-8 text-[#d4af37] uppercase tracking-[0.6em] text-[10px] font-bold"  
              >  
                Proceed  
                <div className="w-16 h-[1px] bg-[#d4af37] group-hover:w-24 transition-all duration-700" />  
              </button>  
            ) : (  
              <button className="bg-[#d4af37] text-black px-16 py-6 uppercase tracking-[0.6em] text-[10px] font-bold hover:bg-white transition-all duration-700 shadow-2xl">  
                Transmit Inquiry  
              </button>  
            )}

            {step > 1 && (  
              <button   
                onClick={prevStep}   
                className="text-stone-600 uppercase tracking-[0.4em] text-[9px] hover:text-stone-400 transition-all"  
              >  
                Go Back  
              </button>  
            )}  
          </div>

        </div>  
      </div>  
    </div>  
  );  
}  
