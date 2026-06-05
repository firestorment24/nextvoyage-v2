'use client'

import { useState } from 'react'  
// Adjusted path: Navigation is in root /app, Footer is in /app/components  
// Also switched to default imports to resolve the build errors  
import Navigation from '../Navigation'  
import Footer from '../components/Footer'

export default function ConciergePage() {  
  const [step, setStep] = useState<'intro' | 'discovery' | 'contact' | 'complete'>('intro')  
  const [selections, setSelections] = useState({  
    priority: '',  
    tempo: '',  
    travelers: '',  
    contact: ''  
  })

  const nextStep = () => {  
    if (step === 'intro') setStep('discovery')  
    else if (step === 'discovery') setStep('contact')  
    else if (step === 'contact') setStep('complete')  
  }

  return (  
    <main className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-light selection:bg-black selection:text-white">  
      <Navigation />  
        
      <div className="max-w-screen-xl mx-auto px-6 pt-32 pb-20">  
        <div className="max-w-2xl">  
          {/* Step 1: The Gatekeeper Intro */}  
          {step === 'intro' && (  
            <div className="animate-in fade-in duration-1000 slide-in-from-bottom-4">  
              <h1 className="text-4xl md:text-5xl leading-tight mb-8 tracking-tight font-normal">  
                Access is the new luxury. <br />  
                <span className="text-neutral-400">But privacy is the ultimate requirement.</span>  
              </h1>  
              <p className="text-lg text-neutral-600 mb-12 leading-relaxed">  
                The NexVoyage Concierge is a closed-loop system for high-net-worth travelers who require seamless logistics without the noise.  
              </p>  
              <button   
                onClick={nextStep}  
                className="group flex items-center gap-4 text-sm uppercase tracking-widest border-b border-black pb-2 hover:text-neutral-500 transition-colors"  
              >  
                Begin Discovery  
                <span className="group-hover:translate-x-1 transition-transform">→</span>  
              </button>  
            </div>  
          )}

          {/* Step 2: The Discovery Selections */}  
          {step === 'discovery' && (  
            <div className="animate-in fade-in duration-700">  
              <div className="mb-12">  
                <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-2 block">Priority</span>  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
                  {['Total Seclusion', 'Unrivaled Access'].map((opt) => (  
                    <button   
                      key={opt}  
                      onClick={() => setSelections({...selections, priority: opt})}  
                      className={`p-8 text-left border transition-all ${selections.priority === opt ? 'border-black bg-white shadow-sm' : 'border-neutral-200 hover:border-neutral-400'}`}  
                    >  
                      <span className="text-lg">{opt}</span>  
                    </button>  
                  ))}  
                </div>  
              </div>

              <div className="mb-12">  
                <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-2 block">Tempo</span>  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
                  {['Static & Restorative', 'Dynamic & Exploratory'].map((opt) => (  
                    <button   
                      key={opt}  
                      onClick={() => setSelections({...selections, tempo: opt})}  
                      className={`p-8 text-left border transition-all ${selections.tempo === opt ? 'border-black bg-white shadow-sm' : 'border-neutral-200 hover:border-neutral-400'}`}  
                    >  
                      <span className="text-lg">{opt}</span>  
                    </button>  
                  ))}  
                </div>  
              </div>

              <button   
                onClick={nextStep}  
                disabled={!selections.priority || !selections.tempo}  
                className="text-sm uppercase tracking-widest border-b border-black pb-2 disabled:opacity-30"  
              >  
                Continue  
              </button>  
            </div>  
          )}

          {/* Step 3: Minimal Contact */}  
          {step === 'contact' && (  
            <div className="animate-in fade-in duration-700">  
              <h2 className="text-3xl mb-8 tracking-tight">How should we reach you?</h2>  
              <input   
                type="text"   
                placeholder="Email or WhatsApp"  
                className="w-full bg-transparent border-b border-neutral-300 py-4 text-xl outline-none focus:border-black transition-colors mb-12"  
                onChange={(e) => setSelections({...selections, contact: e.target.value})}  
              />  
              <button   
                onClick={nextStep}  
                disabled={!selections.contact}  
                className="text-sm uppercase tracking-widest border-b border-black pb-2 disabled:opacity-30"  
              >  
                Send Request  
              </button>  
            </div>  
          )}

          {/* Step 4: Completion */}  
          {step === 'complete' && (  
            <div className="animate-in fade-in zoom-in-95 duration-1000">  
              <h2 className="text-4xl mb-6 tracking-tight italic text-neutral-800 font-serif">Understood.</h2>  
              <p className="text-lg text-neutral-500 leading-relaxed mb-8">  
                Your profile is being reviewed. We prioritize timing and discretion; expect a response within the hour.  
              </p>  
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-400">  
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />  
                Secured Connection — NexVoyage Collective  
              </div>  
            </div>  
          )}  
        </div>  
      </div>

      <Footer />  
    </main>  
  )  
}  
