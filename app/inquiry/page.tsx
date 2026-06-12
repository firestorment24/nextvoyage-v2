"use client";

import React, { useState, useEffect, useRef } from 'react';  
import Link from 'next/link';

const FLOW = [  
  { id: 'start', message: "This is the NexVoyage Vetting Desk. I am Rachel, Lead Analyst. State your legal identity to begin." },  
  { id: 'name', field: 'name', placeholder: "FULL NAME", type: 'text' },  
  { id: 'email_msg', message: "Understood. Please provide a direct channel for secure correspondence." },  
  { id: 'email', field: 'email', placeholder: "EMAIL ADDRESS", type: 'email' },  
  { id: 'intent_msg', message: "The Collective operates on intent. Briefly describe your travel objectives or a specific sanctuary of interest." },  
  { id: 'intent', field: 'intent', placeholder: "STATE YOUR INTENT", type: 'textarea' },  
  { id: 'source_msg', message: "One final check. How were you directed to the Collective?" },  
  { id: 'source', field: 'source', placeholder: "SOURCE / ENDORSEMENT", type: 'text' },  
  { id: 'finishing', message: "Processing profile. Please stand by." }  
];

export default function RachelInquiry() {  
  const [step, setStep] = useState(0);  
  const [data, setData] = useState({ name: '', email: '', intent: '', source: '' });  
  const [inputValue, setInputValue] = useState('');  
  const [isProcessing, setIsProcessing] = useState(false);  
  const [completed, setCompleted] = useState(false);  
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {  
    if (inputRef.current) inputRef.current.focus();  
  }, [step]);

  const handleNext = (e?: React.FormEvent) => {  
    if (e) e.preventDefault();  
    if (!inputValue && FLOW[step].field) return;

    const currentFlow = FLOW[step];  
    const nextStep = step + 1;

    if (currentFlow.field) {  
      setData({ ...data, [currentFlow.field]: inputValue });  
      setInputValue('');  
    }

    if (nextStep < FLOW.length) {  
      setStep(nextStep);  
      // Auto-advance if the next step is just a message  
      if (FLOW[nextStep].message && !FLOW[nextStep].field) {  
        setTimeout(() => {  
          if (FLOW[nextStep].id === 'finishing') {  
            handleFinish();  
          } else {  
            setStep(nextStep + 1);  
          }  
        }, 1500);  
      }  
    }  
  };

  const handleFinish = () => {  
    setIsProcessing(true);  
    // Simulate Rachel "analyzing" the lead  
    setTimeout(() => {  
      setIsProcessing(false);  
      setCompleted(true);  
    }, 2500);  
  };

  if (completed) {  
    return (  
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">  
        <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-8 italic uppercase">Vetting Complete.</h1>  
        <p className="max-w-md text-zinc-500 uppercase tracking-widest text-[10px] leading-relaxed">  
          Rachel has logged your intent. If your profile aligns with our current exhibition, we will initiate contact shortly.  
        </p>  
        <Link href="/archive" className="mt-12 text-[10px] border-b border-zinc-800 pb-1 hover:text-zinc-400 transition-colors uppercase tracking-widest">  
          Return to Archive  
        </Link>  
      </div>  
    );  
  }

  const current = FLOW[step];

  return (  
    <div className="min-h-screen bg-black text-white p-6 md:p-12 lg:p-24 flex flex-col font-mono">  
      <nav className="flex justify-between items-start mb-24">  
        <Link href="/" className="text-xl font-bold tracking-tighter hover:italic transition-all font-sans">NV / COLLECTIVE</Link>  
        <div className="text-[10px] uppercase tracking-widest text-zinc-600">RACHEL_ANALYSIS_v1.0</div>  
      </nav>

      <main className="max-w-2xl mt-12">  
        <div className="space-y-8">  
          {/* Rachel's Voice */}  
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">  
            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 italic">Rachel:</p>  
            <p className="text-xl md:text-3xl font-light tracking-tight leading-snug">  
              {current.message || FLOW[step - 1]?.message}  
            </p>  
          </div>

          {/* User Input Area */}  
          {current.field && !isProcessing && (  
            <form onSubmit={handleNext} className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">  
              {current.type === 'textarea' ? (  
                <textarea  
                  ref={inputRef as any}  
                  value={inputValue}  
                  onChange={(e) => setInputValue(e.target.value)}  
                  placeholder={current.placeholder}  
                  rows={2}  
                  className="bg-transparent w-full outline-none text-2xl md:text-4xl tracking-tighter placeholder:text-zinc-900 uppercase resize-none border-b border-zinc-800 pb-4 focus:border-white transition-colors"  
                  onKeyDown={(e) => {  
                    if (e.key === 'Enter' && !e.shiftKey) {  
                      e.preventDefault();  
                      handleNext();  
                    }  
                  }}  
                />  
              ) : (  
                <input  
                  ref={inputRef as any}  
                  type={current.type}  
                  value={inputValue}  
                  onChange={(e) => setInputValue(e.target.value)}  
                  placeholder={current.placeholder}  
                  className="bg-transparent w-full outline-none text-2xl md:text-4xl tracking-tighter placeholder:text-zinc-900 uppercase border-b border-zinc-800 pb-4 focus:border-white transition-colors"  
                />  
              )}  
              <div className="mt-4 flex justify-between items-center">  
                <span className="text-[10px] text-zinc-700 uppercase tracking-widest">Press Enter to Dispatch</span>  
                <button type="submit" className="text-zinc-400 hover:text-white transition-colors">  
                  <span className="text-2xl">→</span>  
                </button>  
              </div>  
            </form>  
          )}

          {isProcessing && (  
            <div className="flex items-center space-x-2 text-zinc-600 animate-pulse">  
              <div className="w-2 h-2 bg-zinc-600 rounded-full" />  
              <div className="w-2 h-2 bg-zinc-600 rounded-full" />  
              <div className="w-2 h-2 bg-zinc-600 rounded-full" />  
              <span className="text-[10px] uppercase tracking-[0.3em] ml-4">Analyzing Lead...</span>  
            </div>  
          )}  
        </div>  
      </main>

      <footer className="mt-auto pt-24 flex flex-col md:flex-row md:justify-between text-[10px] text-zinc-800 uppercase tracking-widest italic">  
        <span>Lead Analyst Station / R-01</span>  
        <span className="mt-2 md:mt-0">Private Collective Inquiry Protocol</span>  
      </footer>  
    </div>  
  );  
}  
