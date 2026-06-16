"use client";

import React, { useState, useEffect } from 'react';

// --- CONFIGURATION ---  
const TIERS = [  
  { id: 'continuum', name: 'Continuum', desc: 'Continuous orchestration for complex multi-leg global operations.' },  
  { id: 'blind-manifest', name: 'Blind Manifest', desc: 'Privacy-first routing. All operational data is scrubbed post-execution.' },  
  { id: 'frictionless-handoff', name: 'Frictionless Handoff', desc: 'Direct integration with your personal office or security detail.' },  
  { id: 'encrypted-line', name: 'Encrypted Line', desc: 'Hardware-level secure communication for sensitive deployments.' }  
];

export default function InvitationPage() {  
  const [step, setStep] = useState(0);  
  const [isAnalyzing, setIsAnalyzing] = useState(false);  
  const [manifest, setManifest] = useState({  
    name: '',  
    email: '',  
    phone: '',  
    aviation: 'Private',  
    airport: '',  
    dates: '',  
    tier: ''  
  });

  // --- RACHEL'S LOGIC ---  
  const nextStep = () => {  
    setIsAnalyzing(true);  
    setTimeout(() => {  
      setIsAnalyzing(false);  
      setStep(s => s + 1);  
    }, 1200); // Simulated "Lead Analyst" processing time  
  };

  const handleSendRequest = () => {  
    const baseUrl = "https://cal.com/daryl-clark/discovery";  
    const params = new URLSearchParams({  
      name: manifest.name,  
      email: manifest.email,  
      notes: `VETTED BY RACHEL AI\nTier: ${manifest.tier.toUpperCase()}\nAviation: ${manifest.aviation}\nAirport: ${manifest.airport}\nDates: ${manifest.dates}\nPhone: ${manifest.phone}`,  
      'custom-tier': manifest.tier // Assuming a custom field in Cal.com  
    });

    window.location.href = `${baseUrl}?${params.toString()}`;  
  };

  // --- UI COMPONENTS ---  
  const TerminalHeader = () => (  
    <div className="mb-8 border-b border-white/10 pb-4">  
      <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-2">System Status: Active</div>  
      <h1 className="text-xl font-light tracking-widest uppercase">Rachel AI // Lead Analyst</h1>  
    </div>  
  );

  return (  
    <div className="min-h-screen bg-[#050505] text-white font-mono flex flex-col items-center justify-center p-6">  
      <div className="max-w-xl w-full border border-white/5 bg-[#0a0a0a] p-8 md:p-12 shadow-2xl">  
        <TerminalHeader />

        {isAnalyzing ? (  
          <div className="py-20 text-center animate-pulse">  
            <div className="text-xs tracking-[0.4em] uppercase text-amber-500">Analyzing Manifest Data...</div>  
            <div className="mt-4 h-1 w-full bg-gray-900 overflow-hidden">  
              <div className="h-full bg-amber-500 animate-progress" style={{ width: '60%' }}></div>  
            </div>  
          </div>  
        ) : (  
          <>  
            {/* STEP 0: IDENTITY */}  
            {step === 0 && (  
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">  
                <p className="text-sm text-gray-400 leading-relaxed italic">"Identify yourself for the manifest. State your full name and primary secure email."</p>  
                <input   
                  type="text" placeholder="FULL NAME"   
                  className="w-full bg-transparent border-b border-gray-800 p-2 focus:border-white outline-none transition-colors"  
                  onChange={(e) => setManifest({...manifest, name: e.target.value})}  
                />  
                <input   
                  type="email" placeholder="SECURE EMAIL"   
                  className="w-full bg-transparent border-b border-gray-800 p-2 focus:border-white outline-none transition-colors"  
                  onChange={(e) => setManifest({...manifest, email: e.target.value})}  
                />  
                <button onClick={nextStep} className="w-full py-4 border border-white/20 hover:bg-white hover:text-black transition-all uppercase text-xs tracking-widest">Initial Analysis</button>  
              </div>  
            )}

            {/* STEP 1: LOGISTICS */}  
            {step === 1 && (  
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">  
                <p className="text-sm text-gray-400 italic">"Logistics verification required. Specify aviation class and primary hub."</p>  
                <div className="flex gap-4">  
                  {['Private', 'Commercial'].map(t => (  
                    <button   
                      key={t}  
                      onClick={() => setManifest({...manifest, aviation: t})}  
                      className={`flex-1 py-2 text-[10px] tracking-widest uppercase border ${manifest.aviation === t ? 'border-amber-500 text-amber-500' : 'border-gray-800 text-gray-600'}`}  
                    >  
                      {t}  
                    </button>  
                  ))}  
                </div>  
                <input   
                  type="text" placeholder="DEPARTURE AIRPORT (CODE)"   
                  className="w-full bg-transparent border-b border-gray-800 p-2 focus:border-white outline-none transition-colors"  
                  onChange={(e) => setManifest({...manifest, airport: e.target.value})}  
                />  
                <input   
                  type="text" placeholder="TRAVEL DATES"   
                  className="w-full bg-transparent border-b border-gray-800 p-2 focus:border-white outline-none transition-colors"  
                  onChange={(e) => setManifest({...manifest, dates: e.target.value})}  
                />  
                <button onClick={nextStep} className="w-full py-4 border border-white/20 hover:bg-white hover:text-black transition-all uppercase text-xs tracking-widest">Verify Logistics</button>  
              </div>  
            )}

            {/* STEP 2: CONDUCTING TIERS */}  
            {step === 2 && (  
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">  
                <p className="text-sm text-gray-400 italic">"Select your preferred Method of Conductance."</p>  
                <div className="grid grid-cols-1 gap-3">  
                  {TIERS.map(tier => (  
                    <button   
                      key={tier.id}  
                      onClick={() => setManifest({...manifest, tier: tier.id})}  
                      className={`text-left p-4 border transition-all ${manifest.tier === tier.id ? 'border-amber-500 bg-amber-500/5' : 'border-gray-900 hover:border-gray-700'}`}  
                    >  
                      <div className="text-[10px] tracking-widest uppercase mb-1">{tier.name}</div>  
                      <div className="text-[10px] text-gray-500 leading-tight">{tier.desc}</div>  
                    </button>  
                  ))}  
                </div>  
                {manifest.tier && (  
                  <button   
                    onClick={handleSendRequest}  
                    className="w-full py-6 bg-white text-black font-bold uppercase text-xs tracking-[0.3em] hover:bg-amber-500 transition-colors"  
                  >  
                    Send Request  
                  </button>  
                )}  
              </div>  
            )}  
          </>  
        )}

        <div className="mt-12 pt-6 border-t border-white/5 flex justify-between items-center text-[9px] text-gray-600 tracking-widest">  
          <div>LATENCY: 14MS</div>  
          <div>ENCRYPTION: AES-256</div>  
          <div>CONDUCTOR: D.CLARK</div>  
        </div>  
      </div>  
    </div>  
  );  
}  
