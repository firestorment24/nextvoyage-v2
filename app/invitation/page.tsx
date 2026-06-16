"use client";

import React, { useState, useEffect } from 'react';  
import { motion, AnimatePresence } from 'framer-motion';  
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

// Vetting Tiers for the Conductors  
const TIERS = [  
  { id: 'prelude', name: 'Prelude', desc: 'A focused discovery of singular travel objectives.' },  
  { id: 'composition', name: 'Composition', desc: 'Multi-destination orchestration for seasoned travelers.' },  
  { id: 'symphony', name: 'Symphony', desc: 'Complex logistics involving private aviation and security.' },  
  { id: 'masterclass', name: 'Masterclass', desc: 'Full-spectrum lifestyle management for UHNW families.' },  
];

export default function InvitationPage() {  
  const [step, setStep] = useState(0);  
  const [isTyping, setIsTyping] = useState(false);  
  const [formData, setFormData] = useState({  
    name: '',  
    email: '',  
    phone: '',  
    reason: '',  
    tier: 'composition'  
  });

  // Rachel's Dialogue Logic  
  const steps = [  
    {  
      id: 'welcome',  
      message: "Welcome to NexVoyage Collective. I am Rachel, your Lead Analyst for this orchestration. Before we proceed to the conductors, may I ask who I have the pleasure of speaking with?",  
      fields: ['name']  
    },  
    {  
      id: 'contact',  
      message: (name: string) => `Thank you, ${name}. To ensure a secure line of communication, please provide your contact coordinates.`,  
      fields: ['email', 'phone']  
    },  
    {  
      id: 'intent',  
      message: "What is the primary objective of your upcoming orchestration? Please be as detailed as you wish.",  
      fields: ['reason']  
    },  
    {  
      id: 'tier',  
      message: "Based on the complexity of your request, which tier of conducting are you seeking?",  
      fields: ['tier']  
    },  
    {  
      id: 'summary',  
      message: "I have gathered your requirements. I will now notify Daryl and prepare the vetting documents. Would you like to proceed to the calendar?",  
      fields: []  
    }  
  ];

  const handleNext = async () => {  
    if (step === steps.length - 1) {  
      // Final Action: Send Notification & Redirect  
      await triggerNotification();  
      redirectToCal();  
    } else {  
      setStep(step + 1);  
    }  
  };

  const triggerNotification = async () => {  
    try {  
      await fetch('/api/notify', {  
        method: 'POST',  
        body: JSON.stringify({ ...formData, source: 'Rachel AI Terminal' }),  
      });  
    } catch (err) {  
      console.error("Notification failed, proceeding to Cal.com regardless.");  
    }  
  };

  const redirectToCal = () => {  
    const calUrl = `https://cal.com/nexvoyagecollective/discovery-call?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&notes=${encodeURIComponent(`Tier: ${formData.tier}\nReason: ${formData.reason}`)}&phone=${encodeURIComponent(formData.phone)}`;  
    window.location.href = calUrl;  
  };

  return (  
    <main className={`min-h-screen bg-[#050505] text-[#E5E5E5] flex flex-col items-center justify-center p-6 ${inter.className}`}>  
      {/* Brass Accent Border */}  
      <div className="fixed inset-0 pointer-events-none border-[1px] border-[#D4AF37]/20 m-4 z-50" />  
        
      <div className="max-w-2xl w-full space-y-12 relative z-10">  
        {/* Terminal Header */}  
        <header className="text-center space-y-2">  
          <h1 className={`${cormorant.className} text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-medium`}>  
            Vetting Protocol 00-15-26  
          </h1>  
          <p className="text-[10px] text-white/30 uppercase tracking-widest">Lead Analyst: Rachel AI</p>  
        </header>

        {/* Rachel's Dialogue Box */}  
        <div className="min-h-[120px] text-center">  
          <AnimatePresence mode="wait">  
            <motion.div  
              key={step}  
              initial={{ opacity: 0, y: 10 }}  
              animate={{ opacity: 1, y: 0 }}  
              exit={{ opacity: 0, y: -10 }}  
              className={`${cormorant.className} text-2xl md:text-3xl font-light leading-relaxed text-white/90 italic`}  
            >  
              {typeof steps[step].message === 'function'   
                ? (steps[step].message as Function)(formData.name)   
                : steps[step].message}  
            </motion.div>  
          </AnimatePresence>  
        </div>

        {/* Input Interface */}  
        <div className="space-y-6">  
          <AnimatePresence mode="wait">  
            <motion.div  
              key={`input-${step}`}  
              initial={{ opacity: 0 }}  
              animate={{ opacity: 1 }}  
              transition={{ delay: 0.5 }}  
              className="flex flex-col items-center gap-4"  
            >  
              {steps[step].fields.map((field) => (  
                <div key={field} className="w-full max-w-md">  
                  {field === 'reason' ? (  
                    <textarea  
                      autoFocus  
                      placeholder="Type your response..."  
                      className="w-full bg-transparent border-b border-[#D4AF37]/30 py-3 text-lg focus:outline-none focus:border-[#D4AF37] transition-colors resize-none h-32"  
                      value={formData[field as keyof typeof formData]}  
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}  
                    />  
                  ) : field === 'tier' ? (  
                    <div className="grid grid-cols-1 gap-3 w-full">  
                      {TIERS.map((tier) => (  
                        <button  
                          key={tier.id}  
                          onClick={() => setFormData({ ...formData, tier: tier.id })}  
                          className={`p-4 text-left border transition-all ${  
                            formData.tier === tier.id   
                            ? 'border-[#D4AF37] bg-[#D4AF37]/5'   
                            : 'border-white/10 hover:border-white/30'  
                          }`}  
                        >  
                          <div className={`${cormorant.className} text-[#D4AF37] text-lg`}>{tier.name}</div>  
                          <div className="text-[10px] text-white/50 uppercase tracking-tighter">{tier.desc}</div>  
                        </button>  
                      ))}  
                    </div>  
                  ) : (  
                    <input  
                      autoFocus  
                      type={field === 'email' ? 'email' : 'text'}  
                      placeholder={field.toUpperCase()}  
                      className="w-full bg-transparent border-b border-[#D4AF37]/30 py-3 text-lg text-center focus:outline-none focus:border-[#D4AF37] transition-colors"  
                      value={formData[field as keyof typeof formData]}  
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}  
                    />  
                  )}  
                </div>  
              ))}

              <button  
                onClick={handleNext}  
                className="mt-8 group flex flex-col items-center gap-2"  
              >  
                <div className={`${cormorant.className} text-[#D4AF37] text-sm uppercase tracking-[0.3em] group-hover:text-white transition-colors`}>  
                  {step === steps.length - 1 ? 'Send Request' : 'Continue'}  
                </div>  
                <div className="h-[1px] w-12 bg-[#D4AF37]/40 group-hover:w-24 transition-all duration-500" />  
              </button>  
            </motion.div>  
          </AnimatePresence>  
        </div>

        {/* Footer Ledger */}  
        <footer className="pt-24 opacity-20 flex justify-between text-[9px] uppercase tracking-[0.2em]">  
          <div>EST. 2026</div>  
          <div>FOR INTERNAL ORCHESTRATION ONLY</div>  
          <div>NX-CL-01</div>  
        </footer>  
      </div>

      <style jsx global>{`  
        body {  
          background-color: #050505;  
          overflow-x: hidden;  
        }  
        ::selection {  
          background: #D4AF37;  
          color: #000;  
        }  
      `}</style>  
    </main>  
  );  
}  
