"use client";

import React, { useState } from 'react';

// --- LUXURY ORCHESTRATION TIERS ---  
const TIERS = [  
  {   
    id: 'continuum',   
    name: 'Continuum',   
    desc: 'Perpetual alignment across every horizon. A seamless extension of your lifestyle, curated without interruption.'   
  },  
  {   
    id: 'blind-manifest',   
    name: 'Blind Manifest',   
    desc: 'The Invisible Journey. Absolute discretion where your presence leaves no trace, and your privacy remains paramount.'   
  },  
  {   
    id: 'frictionless-handoff',   
    name: 'Frictionless Handoff',   
    desc: 'Symphonic Integration. Harmonizing directly with your personal office and security protocols for effortless transitions.'   
  },  
  {   
    id: 'encrypted-line',   
    name: 'Encrypted Line',   
    desc: 'Sovereign Connection. A dedicated, secure channel for sensitive itineraries and immediate executive access.'   
  }  
];

export default function InvitationPage() {  
  const [step, setStep] = useState(0);  
  const [manifest, setManifest] = useState({  
    name: '',  
    email: '',  
    aviation: 'Private',  
    airport: '',  
    dates: '',  
    tier: ''  
  });

  const handleRequest = () => {  
    // The specific link you provided  
    const baseCalUrl = "https://cal.com/nexvoyagecollective/discovery-call?fbclid=IwY2xjawSdlsRleHRuA2FlbQIxMABicmlkETFMaUpQZllqVG1UaW10VU9Yc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiAoiLhI-r4_pNsC8bj1Bh-opriaGFTSmqtce0YMDL4z4rZCnFIo4Vx4P_Ia_aem_xXNWckXor_2NML12sOyyYw&user=nexvoyagecollective";  
      
    // Append the pre-fill data  
    const params = new URLSearchParams({  
      name: manifest.name,  
      email: manifest.email,  
      notes: `MANIFEST SUMMARY:\nTier: ${manifest.tier.toUpperCase()}\nAviation: ${manifest.aviation}\nAirport: ${manifest.airport}\nDates: ${manifest.dates}`  
    });

    window.location.href = `${baseCalUrl}&${params.toString()}`;  
  };

  return (  
    <div className="min-h-screen bg-[#080808] text-[#d4d4d4] flex flex-col items-center justify-center p-8 font-serif">  
      {/* Background Shadow Gradient */}  
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_rgba(181,166,66,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-2xl w-full relative z-10">  
        <header className="text-center mb-16">  
          <h2 className="text-[10px] tracking-[0.5em] uppercase text-[#B5A642] mb-4">Lead Analyst: Rachel AI</h2>  
          <h1 className="text-4xl font-light tracking-tight text-white mb-2 italic">Conducting the Manifest</h1>  
          <div className="h-px w-24 bg-[#B5A642] mx-auto mt-6 opacity-30" />  
        </header>

        {/* STEP 0: IDENTITY */}  
        {step === 0 && (  
          <div className="space-y-12 animate-in fade-in duration-1000">  
            <p className="text-center text-lg font-light text-gray-400">"Please identify the primary manifest holder for this orchestration."</p>  
            <div className="space-y-8">  
              <input   
                type="text" placeholder="Full Name"   
                className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:border-[#B5A642] outline-none transition-all placeholder:text-gray-700 text-white"  
                onChange={(e) => setManifest({...manifest, name: e.target.value})}  
              />  
              <input   
                type="email" placeholder="Secure Email Address"   
                className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:border-[#B5A642] outline-none transition-all placeholder:text-gray-700 text-white"  
                onChange={(e) => setManifest({...manifest, email: e.target.value})}  
              />  
            </div>  
            <button   
              onClick={() => setStep(1)}   
              className="w-full py-5 border border-[#B5A642]/30 text-[#B5A642] tracking-[0.3em] uppercase text-xs hover:bg-[#B5A642] hover:text-black transition-all duration-500"  
            >  
              Initialize Vetting  
            </button>  
          </div>  
        )}

        {/* STEP 1: LOGISTICS & TIERS */}  
        {step === 1 && (  
          <div className="space-y-10 animate-in fade-in duration-1000">  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
              {TIERS.map(tier => (  
                <button   
                  key={tier.id}  
                  onClick={() => setManifest({...manifest, tier: tier.id})}  
                  className={`text-left p-6 border transition-all duration-500 group ${  
                    manifest.tier === tier.id ? 'border-[#B5A642] bg-[#B5A642]/5' : 'border-white/5 hover:border-white/20'  
                  }`}  
                >  
                  <h3 className={`text-sm tracking-widest uppercase mb-2 ${manifest.tier === tier.id ? 'text-[#B5A642]' : 'text-white'}`}>  
                    {tier.name}  
                  </h3>  
                  <p className="text-[11px] leading-relaxed text-gray-500 group-hover:text-gray-300 transition-colors">  
                    {tier.desc}  
                  </p>  
                </button>  
              ))}  
            </div>

            <div className="pt-6">  
              <p className="text-center text-xs tracking-widest text-gray-600 mb-8 uppercase">Logistics Alignment</p>  
              <div className="grid grid-cols-2 gap-6">  
                <input   
                  type="text" placeholder="Departure Hub (Airport)"   
                  className="bg-transparent border-b border-white/10 py-2 focus:border-[#B5A642] outline-none text-sm"  
                  onChange={(e) => setManifest({...manifest, airport: e.target.value})}  
                />  
                <input   
                  type="text" placeholder="Preferred Dates"   
                  className="bg-transparent border-b border-white/10 py-2 focus:border-[#B5A642] outline-none text-sm"  
                  onChange={(e) => setManifest({...manifest, dates: e.target.value})}  
                />  
              </div>  
            </div>

            {manifest.tier && (  
              <button   
                onClick={handleRequest}  
                className="w-full py-6 bg-white text-black font-bold uppercase text-xs tracking-[0.4em] hover:bg-[#B5A642] transition-all duration-500 shadow-2xl"  
              >  
                Send Request  
              </button>  
            )}  
          </div>  
        )}

        <footer className="mt-20 text-center">  
          <p className="text-[9px] tracking-[0.4em] text-gray-700 uppercase">  
            NexVoyage Collective &copy; 2026 | Precision Orchestration  
          </p>  
        </footer>  
      </div>  
    </div>  
  );  
}  
