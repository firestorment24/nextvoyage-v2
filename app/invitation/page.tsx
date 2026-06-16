'use client';

import React, { useState, useEffect } from 'react';

export default function InvitationPage() {  
  const [step, setStep] = useState(0);  
  const [formData, setFormData] = useState({  
    name: '',  
    phone: '',  
    reason: '',  
  });  
  const [displayTitle, setDisplayTitle] = useState('');  
  const fullTitle = "RACHEL AI: SYSTEM INITIALIZED";

  // Typewriter effect for the terminal header  
  useEffect(() => {  
    let i = 0;  
    const interval = setInterval(() => {  
      setDisplayTitle(fullTitle.slice(0, i));  
      i++;  
      if (i > fullTitle.length) clearInterval(interval);  
    }, 50);  
    return () => clearInterval(interval);  
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {  
    setFormData({ ...formData, [e.target.name]: e.target.value });  
  };

  const redirectToCal = () => {  
    const baseUrl = "https://cal.com/darylclark/30min";  
    const params = new URLSearchParams({  
      name: formData.name,  
      // 'notes' handles the reason/intent  
      notes: formData.reason,  
      // 'smsReminderNumber' for the phone number  
      smsReminderNumber: formData.phone,  
    });  
      
    window.location.href = `${baseUrl}?${params.toString()}`;  
  };

  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault();  
      
    // 1. Fire the Nerves (Notification Pipeline)  
    try {  
      await fetch('/api/notify', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({  
          guestName: formData.name,  
          phone: formData.phone,  
          intent: formData.reason,  
          source: 'Rachel AI Terminal'  
        }),  
      });  
    } catch (err) {  
      console.error('Notification delivery failed:', err);  
    }

    // 2. Redirect to Booking  
    redirectToCal();  
  };

  return (  
    <div className="min-h-screen bg-[#0a0a0a] text-[#d4af37] font-mono p-6 flex flex-col items-center justify-center selection:bg-[#d4af37] selection:text-black">  
      {/* Terminal Container */}  
      <div className="max-w-2xl w-full border border-[#d4af37]/30 bg-[#0f0f0f] shadow-[0_0_50px_rgba(212,175,55,0.05)] p-8 md:p-12">  
          
        {/* Rachel AI Header */}  
        <div className="mb-12">  
          <p className="text-xs opacity-50 mb-2">ACCESS GRANTED // ENCRYPTED SESSION</p>  
          <h1 className="text-xl md:text-2xl tracking-widest uppercase font-light">  
            {displayTitle}  
            <span className="animate-pulse">_</span>  
          </h1>  
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">  
          {/* Name Field */}  
          <div className="group">  
            <label className="block text-[10px] uppercase tracking-[0.2em] mb-3 opacity-60 group-focus-within:opacity-100 transition-opacity">  
              Identify Guest  
            </label>  
            <input  
              required  
              type="text"  
              name="name"  
              placeholder="FULL NAME"  
              value={formData.name}  
              onChange={handleChange}  
              className="w-full bg-transparent border-b border-[#d4af37]/20 py-2 focus:outline-none focus:border-[#d4af37] transition-colors placeholder:opacity-20 text-lg uppercase tracking-tight"  
            />  
          </div>

          {/* Phone Field */}  
          <div className="group">  
            <label className="block text-[10px] uppercase tracking-[0.2em] mb-3 opacity-60 group-focus-within:opacity-100 transition-opacity">  
              Secure Line  
            </label>  
            <input  
              required  
              type="tel"  
              name="phone"  
              placeholder="+1 (000) 000-0000"  
              value={formData.phone}  
              onChange={handleChange}  
              className="w-full bg-transparent border-b border-[#d4af37]/20 py-2 focus:outline-none focus:border-[#d4af37] transition-colors placeholder:opacity-20 text-lg uppercase tracking-tight"  
            />  
          </div>

          {/* Reason Field */}  
          <div className="group">  
            <label className="block text-[10px] uppercase tracking-[0.2em] mb-3 opacity-60 group-focus-within:opacity-100 transition-opacity">  
              Orchestration Intent  
            </label>  
            <textarea  
              required  
              name="reason"  
              placeholder="DESCRIBE THE VISION..."  
              rows={3}  
              value={formData.reason}  
              onChange={handleChange}  
              className="w-full bg-transparent border border-[#d4af37]/20 p-4 focus:outline-none focus:border-[#d4af37] transition-colors placeholder:opacity-20 text-sm uppercase leading-relaxed resize-none"  
            />  
          </div>

          {/* Submit Action */}  
          <div className="pt-4">  
            <button  
              type="submit"  
              className="w-full py-4 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-500 uppercase text-xs tracking-[0.3em] font-bold"  
            >  
              Initialize Manifest & Schedule  
            </button>  
            <p className="mt-4 text-[9px] opacity-30 text-center uppercase tracking-widest">  
              By proceeding, you authorize Rachel AI to process secure lead intelligence.  
            </p>  
          </div>  
        </form>  
      </div>

      {/* Background Ambience */}  
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">  
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#d4af37] blur-[150px] rounded-full opacity-10"></div>  
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#d4af37] blur-[150px] rounded-full opacity-10"></div>  
      </div>  
    </div>  
  );  
}  
