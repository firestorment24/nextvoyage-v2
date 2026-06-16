"use client";

import React from 'react';  
import { Cormorant_Garamond, Inter } from 'next/font/google';

const cormorant = Cormorant_Garamond({   
  subsets: ['latin'],   
  weight: ['300', '400', '500', '600'],  
  display: 'swap'   
});

const inter = Inter({   
  subsets: ['latin'],   
  weight: ['300', '400'],  
  display: 'swap'   
});

const TIMELINE_STEPS = [  
  {  
    title: "Manifest Received",  
    desc: "Rachel has finalized your preliminary dossier. Your data is now encrypted and secured within our vault.",  
    status: "completed"  
  },  
  {  
    title: "Strategic Briefing",  
    desc: "Daryl will personally review your orchestration intent. Expect a high-priority reach-out within 24 hours.",  
    status: "active"  
  },  
  {  
    title: "Curation & Reveal",  
    desc: "A custom-tailored architectural framework for your journey will be presented for refinement.",  
    status: "pending"  
  },  
  {  
    title: "Manifest Activation",  
    desc: "Logistics, security, and private aviation are synchronized for deployment.",  
    status: "pending"  
  }  
];

export default function SuccessPage() {  
  return (  
    <main className={`min-h-screen bg-[#050505] text-[#E5E5E5] flex flex-col items-center justify-center p-6 ${inter.className}`}>  
      {/* Brass Accent Border */}  
      <div className="fixed inset-0 pointer-events-none border-[1px] border-[#D4AF37]/20 m-4 z-50" />  
        
      <div className="max-w-xl w-full space-y-16 relative z-10 py-12">  
        {/* Header */}  
        <header className="text-center space-y-4">  
          <div className="flex justify-center mb-6">  
            <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />  
          </div>  
          <h1 className={`${cormorant.className} text-[#D4AF37] text-4xl md:text-5xl font-light italic tracking-tight`}>  
            Orchestration Initiated  
          </h1>  
          <p className="text-[10px] text-white/40 uppercase tracking-[0.4em]">Protocol: Vetting Success</p>  
        </header>

        {/* Vertical Timeline */}  
        <div className="relative pl-8 space-y-12">  
          {/* Vertical Brass Line */}  
          <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-[#D4AF37]/20" />

          {TIMELINE_STEPS.map((step, idx) => (  
            <div key={idx} className="relative group">  
              {/* Timeline Indicator Dot */}  
              <div className={`absolute -left-[32px] top-1.5 h-1.5 w-1.5 rounded-full border border-[#D4AF37] transition-all duration-700 ${  
                step.status === 'completed' ? 'bg-[#D4AF37]' :   
                step.status === 'active' ? 'bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]' :   
                'bg-transparent opacity-30'  
              }`} />  
                
              <div className="space-y-2">  
                <h3 className={`${cormorant.className} text-[#D4AF37] text-xl font-medium tracking-wide`}>  
                  {step.title}  
                </h3>  
                <p className="text-sm text-white/60 font-light leading-relaxed max-w-sm">  
                  {step.desc}  
                </p>  
              </div>  
            </div>  
          ))}  
        </div>

        {/* Footer Branding */}  
        <footer className="pt-8 text-center space-y-8">  
          <div className="space-y-1">  
            <p className="text-[10px] text-white/30 uppercase tracking-widest font-light">Lead Conductor</p>  
            <p className={`${cormorant.className} text-white/90 text-2xl font-light`}>Daryl Clark</p>  
          </div>  
            
          <button   
            onClick={() => window.location.href = '/'}  
            className="group flex flex-col items-center gap-2 mx-auto"  
          >  
            <div className="text-[9px] text-[#D4AF37] uppercase tracking-[0.3em] group-hover:text-white transition-colors">  
              Return to Ledger  
            </div>  
            <div className="h-[1px] w-8 bg-[#D4AF37]/30 group-hover:w-16 transition-all duration-500" />  
          </button>  
        </footer>  
      </div>

      <style jsx global>{`  
        body {  
          background-color: #050505;  
        }  
      `}</style>  
    </main>  
  );  
}  
