'use client';

import React, { useState } from 'react';

const OCCASIONS = [  
  'Vacation / Personal',  
  'Celebration (Anniversary, Milestone)',  
  'Sabbatical / Extended Stay',  
  'Corporate Strategy',  
  'Multi-Generational Gathering',  
  'Bespoke / Confidential',  
];

const AVIATION_CLASSES = [  
  'Commercial — First',  
  'Commercial — Business',  
  'Private Charter',  
  'Prefer Not to Say',  
];

const HEAR_ABOUT = [  
  'Personal Referral',  
  'Press / Feature',  
  'Social Media',  
  'Search',  
  'Repeat Client',  
  'Other',  
];

export default function InvitationPage() {  
  const [loading, setLoading] = useState(false);  
  const [submitted, setSubmitted] = useState(false);  
  const [formData, setFormData] = useState({  
    name: '',  
    email: '',  
    phone: '',  
    occasion: '',  
    destinations: '',  
    travelWindow: '',  
    partySize: '',  
    aviationClass: '',  
    hearAbout: '',  
    notes: '',  
  });

  const handleChange = (  
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>  
  ) => {  
    setFormData({ ...formData, [e.target.name]: e.target.value });  
  };

  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault();  
    setLoading(true);

    try {  
      const res = await fetch('/api/lead', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({  
          name: formData.name,  
          email: formData.email,  
          phone: formData.phone,  
          occasion: formData.occasion,  
          destinations: formData.destinations,  
          travelWindow: formData.travelWindow,  
          partySize: formData.partySize,  
          aviationClass: formData.aviationClass,  
          hearAbout: formData.hearAbout,  
          notes: formData.notes,  
          source: 'Application for Entry',  
        }),  
      });

      if (!res.ok) throw new Error('Submission failed');

      // Also fire the notification pipeline (Slack / Nerves)  
      fetch('/api/notify', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({  
          guestName: formData.name,  
          email: formData.email,  
          phone: formData.phone,  
          intent: formData.occasion,  
          source: 'Application for Entry',  
        }),  
      }).catch(() => {});

      setSubmitted(true);  
    } catch (err) {  
      console.error('Submission failed:', err);  
    } finally {  
      setLoading(false);  
    }  
  };

  if (submitted) {  
    return (  
      <div className="min-h-screen bg-[#0a0a0a] text-[#d4af37] font-mono p-6 flex flex-col items-center justify-center">  
        <div className="max-w-lg w-full border border-[#d4af37]/30 bg-[#0f0f0f] p-12 text-center">  
          <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-6">  
            Application Received  
          </p>  
          <h2 className="text-2xl font-light mb-4">Dialogue Initiated</h2>  
          <p className="text-sm opacity-60 leading-relaxed">  
            Your submission has been received. Daryl will reach out personally  
            within 24 hours (excluding holidays) to discuss your curation.  
          </p>  
        </div>  
      </div>  
    );  
  }

  return (  
    <div className="min-h-screen bg-[#0a0a0a] text-[#d4af37] font-mono p-6 flex flex-col items-center justify-center selection:bg-[#d4af37] selection:text-black">  
      <div className="max-w-2xl w-full border border-[#d4af37]/30 bg-[#0f0f0f] shadow-[0_0_50px_rgba(212,175,55,0.1)] p-8 md:p-12">  
        {/* Header — clean, no gimmicks */}  
        <div className="mb-12">  
          <p className="text-[10px] opacity-40 mb-2 tracking-[0.3em] uppercase">  
            Application for Entry  
          </p>  
          <h1 className="text-xl md:text-2xl tracking-[0.15em] uppercase font-light">  
            Rachel — Reception &amp; Orchestration  
          </h1>  
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">  
          {/* I — The Sovereign Profile */}  
          <div>  
            <p className="text-[9px] tracking-[0.3em] uppercase opacity-30 mb-6 pb-2 border-b border-[#d4af37]/10">  
              I &mdash; The Sovereign Profile  
            </p>  
            <div className="space-y-6">  
              <div className="group">  
                <label className="block text-[10px] uppercase tracking-[0.2em] mb-3 opacity-40 group-focus-within:opacity-100 transition-opacity">  
                  Full Name  
                </label>  
                <input  
                  required  
                  type="text"  
                  name="name"  
                  value={formData.name}  
                  onChange={handleChange}  
                  className="w-full bg-transparent border-b border-[#d4af37]/20 py-3 focus:outline-none focus:border-[#d4af37] transition-all text-lg uppercase tracking-tight"  
                />  
              </div>  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
                <div className="group">  
                  <label className="block text-[10px] uppercase tracking-[0.2em] mb-3 opacity-40 group-focus-within:opacity-100 transition-opacity">  
                    Email  
                  </label>  
                  <input  
                    required  
                    type="email"  
                    name="email"  
                    value={formData.email}  
                    onChange={handleChange}  
                    className="w-full bg-transparent border-b border-[#d4af37]/20 py-3 focus:outline-none focus:border-[#d4af37] transition-all text-lg uppercase tracking-tight"  
                  />  
                </div>  
                <div className="group">  
                  <label className="block text-[10px] uppercase tracking-[0.2em] mb-3 opacity-40 group-focus-within:opacity-100 transition-opacity">  
                    Phone  
                  </label>  
                  <input  
                    required  
                    type="tel"  
                    name="phone"  
                    value={formData.phone}  
                    onChange={handleChange}  
                    className="w-full bg-transparent border-b border-[#d4af37]/20 py-3 focus:outline-none focus:border-[#d4af37] transition-all text-lg uppercase tracking-tight"  
                  />  
                </div>  
              </div>  
            </div>  
          </div>

          {/* II — Mission Parameters */}  
          <div>  
            <p className="text-[9px] tracking-[0.3em] uppercase opacity-30 mb-6 pb-2 border-b border-[#d4af37]/10">  
              II &mdash; Mission Parameters  
            </p>  
            <div className="space-y-6">  
              <div className="group">  
                <label className="block text-[10px] uppercase tracking-[0.2em] mb-3 opacity-40 group-focus-within:opacity-100 transition-opacity">  
                  Nature of Occasion  
                </label>  
                <select  
                  required  
                  name="occasion"  
                  value={formData.occasion}  
                  onChange={handleChange}  
                  className="w-full bg-transparent border-b border-[#d4af37]/20 py-3 focus:outline-none focus:border-[#d4af37] transition-all text-lg uppercase tracking-tight appearance-none cursor-pointer"  
                >  
                  <option value="" disabled className="bg-[#0f0f0f]">  
                    Select...  
                  </option>  
                  {OCCASIONS.map((o) => (  
                    <option key={o} value={o} className="bg-[#0f0f0f]">  
                      {o}  
                    </option>  
                  ))}  
                </select>  
              </div>  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
                <div className="group">  
                  <label className="block text-[10px] uppercase tracking-[0.2em] mb-3 opacity-40 group-focus-within:opacity-100 transition-opacity">  
                    Destinations of Interest  
                  </label>  
                  <input  
                    type="text"  
                    name="destinations"  
                    value={formData.destinations}  
                    onChange={handleChange}  
                    className="w-full bg-transparent border-b border-[#d4af37]/20 py-3 focus:outline-none focus:border-[#d4af37] transition-all text-lg uppercase tracking-tight"  
                  />  
                </div>  
                <div className="group">  
                  <label className="block text-[10px] uppercase tracking-[0.2em] mb-3 opacity-40 group-focus-within:opacity-100 transition-opacity">  
                    Travel Window  
                  </label>  
                  <input  
                    type="text"  
                    name="travelWindow"  
                    placeholder="e.g. Q3 2026"  
                    value={formData.travelWindow}  
                    onChange={handleChange}  
                    className="w-full bg-transparent border-b border-[#d4af37]/20 py-3 focus:outline-none focus:border-[#d4af37] transition-all text-lg uppercase tracking-tight placeholder:opacity-20"  
                  />  
                </div>  
              </div>  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
                <div className="group">  
                  <label className="block text-[10px] uppercase tracking-[0.2em] mb-3 opacity-40 group-focus-within:opacity-100 transition-opacity">  
                    Party Size  
                  </label>  
                  <input  
                    type="text"  
                    name="partySize"  
                    placeholder="No. of guests"  
                    value={formData.partySize}  
                    onChange={handleChange}  
                    className="w-full bg-transparent border-b border-[#d4af37]/20 py-3 focus:outline-none focus:border-[#d4af37] transition-all text-lg uppercase tracking-tight placeholder:opacity-20"  
                  />  
                </div>  
                <div className="group">  
                  <label className="block text-[10px] uppercase tracking-[0.2em] mb-3 opacity-40 group-focus-within:opacity-100 transition-opacity">  
                    Aviation Class  
                  </label>  
                  <select  
                    name="aviationClass"  
                    value={formData.aviationClass}  
                    onChange={handleChange}  
                    className="w-full bg-transparent border-b border-[#d4af37]/20 py-3 focus:outline-none focus:border-[#d4af37] transition-all text-lg uppercase tracking-tight appearance-none cursor-pointer"  
                  >  
                    <option value="" disabled className="bg-[#0f0f0f]">  
                      Select...  
                    </option>  
                    {AVIATION_CLASSES.map((c) => (  
                      <option key={c} value={c} className="bg-[#0f0f0f]">  
                        {c}  
                      </option>  
                    ))}  
                  </select>  
                </div>  
              </div>  
            </div>  
          </div>

          {/* III — Cultural Fit */}  
          <div>  
            <p className="text-[9px] tracking-[0.3em] uppercase opacity-30 mb-6 pb-2 border-b border-[#d4af37]/10">  
              III &mdash; Cultural Fit  
            </p>  
            <div className="space-y-6">  
              <div className="group">  
                <label className="block text-[10px] uppercase tracking-[0.2em] mb-3 opacity-40 group-focus-within:opacity-100 transition-opacity">  
                  How did you hear about us?  
                </label>  
                <select  
                  name="hearAbout"  
                  value={formData.hearAbout}  
                  onChange={handleChange}  
                  className="w-full bg-transparent border-b border-[#d4af37]/20 py-3 focus:outline-none focus:border-[#d4af37] transition-all text-lg uppercase tracking-tight appearance-none cursor-pointer"  
                >  
                  <option value="" disabled className="bg-[#0f0f0f]">  
                    Select...  
                  </option>  
                  {HEAR_ABOUT.map((h) => (  
                    <option key={h} value={h} className="bg-[#0f0f0f]">  
                      {h}  
                    </option>  
                  ))}  
                </select>  
              </div>  
              <div className="group">  
                <label className="block text-[10px] uppercase tracking-[0.2em] mb-3 opacity-40 group-focus-within:opacity-100 transition-opacity">  
                  A brief note on what you're seeking  
                </label>  
                <textarea  
                  name="notes"  
                  rows={3}  
                  value={formData.notes}  
                  onChange={handleChange}  
                  className="w-full bg-transparent border border-[#d4af37]/20 p-4 focus:outline-none focus:border-[#d4af37] transition-all text-sm uppercase leading-relaxed resize-none"  
                />  
              </div>  
            </div>  
          </div>

          {/* Submit */}  
          <div className="pt-4">  
            <button  
              type="submit"  
              disabled={loading}  
              className="w-full py-5 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-700 uppercase text-[10px] tracking-[0.4em] font-bold disabled:opacity-30"  
            >  
              {loading ? 'Transmitting...' : 'Submit Application'}  
            </button>  
            <p className="mt-6 text-[8px] opacity-20 text-center uppercase tracking-[0.2em]">  
              Rachel — Reception &amp; Orchestration &bull; NexVoyage Collective  
            </p>  
          </div>  
        </form>  
      </div>  
    </div>  
  );  
}  
