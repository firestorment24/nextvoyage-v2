'use client';

import React, { useState, useEffect } from 'react';

export default function InvitationPage() {  
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

  // 2. Build the Redirect URL with existing tracking and new guest data  
  const baseCalUrl = new URL("https://cal.com/nexvoyagecollective/discovery-call");  
    
  // Adding the tracking params you provided  
  baseCalUrl.searchParams.append('fbclid', 'IwY2xjawSdq-dleHRuA2FlbQIxMABicmlkETFMaUpQZllqVG1UaW10VU9Yc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiAoiLhI-r4_pNsC8bj1Bh-opriaGFTSmqtce0YMDL4z4rZCnFIo4Vx4P_Ia_aem_xXNWckXor_2NML12sOyyYw');  
  baseCalUrl.searchParams.append('user', 'nexvoyagecollective');  
    
  // Appending guest info for pre-filling the form  
  baseCalUrl.searchParams.append('name', formData.name);  
  baseCalUrl.searchParams.append('notes', formData.reason);  
  baseCalUrl.searchParams.append('smsReminderNumber', formData.phone);  
    
  window.location.href = baseCalUrl.toString();  
};

return (  
  <div className="min-h-screen bg-[#0a0a0a] text-[#d4af37] font-mono p-6 flex flex-col items-center justify-center selection:bg-[#d4af37] selection:text-black">  
    {/* Terminal Container */}  
    <div className="max-w-2xl w-full border border-[#d4af37]/30 bg-[#0f0f0f] shadow-[0_0_50px_rgba(212,175,55,0.1)] p-8 md:p-12 relative overflow-hidden">  
        
      {/* Rachel AI Header */}  
      <div className="mb-12 relative z-10">  
        <p className="text-[10px] opacity-40 mb-2 tracking-[0.3em]">SECURE ACCESS // NODE_7734</p>  
        <h1 className="text-xl md:text-2xl tracking-[0.2em] uppercase font-light">  
          {displayTitle}  
          <span className="animate-pulse">_</span>  
        </h1>  
      </div>

      <form onSubmit={handleSubmit} className="space-y-10 relative z-10">  
        {/* Name Field */}  
        <div className="group">  
          <label className="block text-[10px] uppercase tracking-[0.2em] mb-3 opacity-40 group-focus-within:opacity-100 transition-opacity">  
            Identify Guest  
          </label>  
          <input  
            required  
            type="text"  
            name="name"  
            placeholder="FULL NAME"  
            autoComplete="off"  
            value={formData.name}  
            onChange={handleChange}  
            className="w-full bg-transparent border-b border-[#d4af37]/20 py-3 focus:outline-none focus:border-[#d4af37] transition-all placeholder:opacity-10 text-lg uppercase tracking-tight"  
          />  
        </div>

        {/* Phone Field */}  
        <div className="group">  
          <label className="block text-[10px] uppercase tracking-[0.2em] mb-3 opacity-40 group-focus-within:opacity-100 transition-opacity">  
            Secure Line  
          </label>  
          <input  
            required  
            type="tel"  
            name="phone"  
            placeholder="+1 (000) 000-0000"  
            autoComplete="off"  
            value={formData.phone}  
            onChange={handleChange}  
            className="w-full bg-transparent border-b border-[#d4af37]/20 py-3 focus:outline-none focus:border-[#d4af37] transition-all placeholder:opacity-10 text-lg uppercase tracking-tight"  
          />  
        </div>

        {/* Reason Field */}  
        <div className="group">  
          <label className="block text-[10px] uppercase tracking-[0.2em] mb-3 opacity-40 group-focus-within:opacity-100 transition-opacity">  
            Orchestration Intent  
          </label>  
          <textarea  
            required  
            name="reason"  
            placeholder="DESCRIBE THE VISION..."  
            rows={3}  
            value={formData.reason}  
            onChange={handleChange}  
            className="w-full bg-transparent border border-[#d4af37]/20 p-4 focus:outline-none focus:border-[#d4af37] transition-all placeholder:opacity-10 text-sm uppercase leading-relaxed resize-none"  
          />  
        </div>

        {/* Submit Action */}  
        <div className="pt-6">  
          <button  
            type="submit"  
            className="w-full py-5 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-700 uppercase text-[10px] tracking-[0.4em] font-bold"  
          >  
            Initialize Manifest & Schedule  
          </button>  
          <p className="mt-6 text-[8px] opacity-20 text-center uppercase tracking-[0.2em] leading-loose">  
            NexVoyage Collective // Encrypted Lead Capture<br/>  
            Authorized by Rachel AI Terminal  
          </p>  
        </div>  
      </form>

      {/* Subtle Scanline Effect Overlay */}  
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>  
    </div>  
  </div>  
);  
}  
