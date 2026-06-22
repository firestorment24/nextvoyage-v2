"use client";

import React, { useState } from "react";

/* ─── Constants ─────────────────────────────────────────── */  
const OCCASIONS = [  
  "Anniversary",  
  "Birthday",  
  "Honeymoon",  
  "Family Gathering",  
  "Business Retreat",  
  "Celebration",  
  "Personal Escape",  
  "Other",  
];

const AVIATION_CLASSES = [  
  "First Class",  
  "Business",  
  "Private Charter",  
  "Premium Economy",  
  "Flexible / Undecided",  
];

const HEAR_ABOUT = [  
  "Word of Mouth",  
  "Instagram",  
  "LinkedIn",  
  "Architectural Digest",  
  "Travel + Leisure",  
  "Referral",  
  "Search Engine",  
  "Other",  
];

/* ─── Application for Entry ──────────────────────────────── */  
export default function InvitationPage() {  
  const [step, setStep] = useState<"form" | "submitted">("form");

  const [form, setForm] = useState({  
    name: "",  
    email: "",  
    phone: "",  
    occasion: "",  
    destinations: "",  
    travelWindow: "",  
    partySize: "",  
    aviationClass: "",  
    hearAbout: "",  
    notes: "",  
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {  
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));  
  };

  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault();  
    try {  
      const res = await fetch("/api/lead", {  
        method: "POST",  
        headers: { "Content-Type": "application/json" },  
        body: JSON.stringify(form),  
      });  
      if (!res.ok) throw new Error("Failed to submit");  
      setStep("submitted");  
    } catch (err) {  
      console.error("Submission error:", err);  
    }  
  };

  if (step === "submitted") {  
    return (  
      <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">  
        <div className="text-center max-w-lg">  
          <p className="font-['Inter'] text-[#d4af37] tracking-[0.15em] text-xs uppercase mb-6">  
            Rachel — Reception & Orchestration  
          </p>  
          <h1 className="font-['Cormorant_Garamond'] text-white text-4xl sm:text-5xl font-light tracking-wide mb-4">  
            Application Received  
          </h1>  
          <div className="w-12 h-[1px] bg-[#d4af37]/40 mx-auto mb-6" />  
          <p className="font-['Inter'] text-[#c8c8c8]/60 text-sm leading-relaxed">  
            Your dossier is being reviewed. A member of our team will  
            contact you within 24–48 hours to begin the dialogue.  
          </p>  
          <p className="font-['Cormorant_Garamond'] text-[#d4af37] text-lg italic mt-8">  
            Dialogue Initiated  
          </p>  
        </div>  
      </main>  
    );  
  }

  return (  
    <>  
      {/* ── Nuclear Kill: Forces ALL text to white ────────── */}  
      <style jsx global>{`  
        * {  
          color: #ffffff !important;  
        }  
        input, select, textarea {  
          color: #ffffff !important;  
          background-color: #141414 !important;  
          border-color: rgba(212, 175, 55, 0.2) !important;  
        }  
        input::placeholder, textarea::placeholder {  
          color: rgba(200, 200, 200, 0.35) !important;  
        }  
        label, .brass-label {  
          color: rgba(200, 200, 200, 0.5) !important;  
        }  
        h1, h2, h3, h4, h5, h6, p, span, a, li, div, section, article {  
          background-color: transparent !important;  
        }  
        body, html, main, #__next {  
          background-color: #0A0A0A !important;  
        }  
      `}</style>

      <main className="min-h-screen bg-[#0A0A0A] text-white px-6 py-16 flex flex-col items-center">  
        {/* ── Letterhead ──────────────────────────────────── */}  
        <div className="w-full max-w-2xl mb-12 text-center">  
          <p className="font-['Inter'] text-[#d4af37] tracking-[0.15em] text-xs uppercase mb-2">  
            Rachel — Reception & Orchestration  
          </p>  
          <div className="w-16 h-[1px] bg-[#d4af37]/30 mx-auto mb-4" />  
          <h1 className="font-['Cormorant_Garamond'] text-white text-3xl sm:text-4xl font-light tracking-wide">  
            Application for Entry  
          </h1>  
        </div>

        {/* ── Form ────────────────────────────────────────── */}  
        <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-14">  
          {/* ─── SECTION 1: The Sovereign Profile ─────────── */}  
          <section>  
            <h2 className="font-['Cormorant_Garamond'] text-white text-xl sm:text-2xl font-light tracking-wide mb-1">  
              The Sovereign Profile  
            </h2>  
            <p className="font-['Inter'] text-[#c8c8c8]/40 text-xs tracking-[0.1em] uppercase mb-6">  
              Who is traveling  
            </p>  
            <div className="space-y-5">  
              <Field label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />  
              <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />  
              <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />  
              <SelectField label="Occasion" name="occasion" value={form.occasion} onChange={handleChange} options={OCCASIONS} placeholder="Select an occasion" />  
            </div>  
          </section>

          {/* ─── SECTION 2: Mission Parameters ────────────── */}  
          <section>  
            <h2 className="font-['Cormorant_Garamond'] text-white text-xl sm:text-2xl font-light tracking-wide mb-1">  
              Mission Parameters  
            </h2>  
            <p className="font-['Inter'] text-[#c8c8c8]/40 text-xs tracking-[0.1em] uppercase mb-6">  
              The itinerary  
            </p>  
            <div className="space-y-5">  
              <Field label="Destinations of Interest" name="destinations" value={form.destinations} onChange={handleChange} placeholder="e.g. Amalfi Coast, Kyoto, Patagonia" />  
              <Field label="Preferred Travel Window" name="travelWindow" value={form.travelWindow} onChange={handleChange} placeholder="e.g. September 2026" />  
              <Field label="Party Size" name="partySize" value={form.partySize} onChange={handleChange} placeholder="e.g. 2 adults" />  
              <SelectField label="Aviation Class" name="aviationClass" value={form.aviationClass} onChange={handleChange} options={AVIATION_CLASSES} placeholder="Select aviation class" />  
            </div>  
          </section>

          {/* ─── SECTION 3: Cultural Fit ──────────────────── */}  
          <section>  
            <h2 className="font-['Cormorant_Garamond'] text-white text-xl sm:text-2xl font-light tracking-wide mb-1">  
              Cultural Fit  
            </h2>  
            <p className="font-['Inter'] text-[#c8c8c8]/40 text-xs tracking-[0.1em] uppercase mb-6">  
              How you found us  
            </p>  
            <div className="space-y-5">  
              <SelectField label="How Did You Hear About Us?" name="hearAbout" value={form.hearAbout} onChange={handleChange} options={HEAR_ABOUT} placeholder="Select one" />  
              <div>  
                <label className="font-['Inter'] text-[#c8c8c8]/40 text-xs tracking-[0.1em] uppercase block mb-2">  
                  Additional Notes  
                </label>  
                <textarea  
                  name="notes"  
                  value={form.notes}  
                  onChange={handleChange}  
                  placeholder="Anything else we should know..."  
                  rows={4}  
                  className="w-full bg-[#141414] border border-[#d4af37]/20 rounded-none px-4 py-3 font-['Inter'] text-sm text-white placeholder:text-[#c8c8c8]/30 focus:outline-none focus:border-[#d4af37]/60 transition-colors resize-none"  
                />  
              </div>  
            </div>  
          </section>

          {/* ── Submit ────────────────────────────────────── */}  
          <div className="text-center pt-4">  
            <button  
              type="submit"  
              className="font-['Inter'] text-xs tracking-[0.2em] uppercase text-white bg-[#d4af37]/10 border border-[#d4af37]/30 px-10 py-4 hover:bg-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-500"  
            >  
              Submit Application  
            </button>  
          </div>  
        </form>

        {/* ── Footer ──────────────────────────────────────── */}  
        <div className="w-full max-w-2xl mt-16 pt-8 border-t border-[#d4af37]/10 text-center">  
          <p className="font-['Cormorant_Garamond'] text-[#c8c8c8]/30 text-sm italic">  
            Rachel — Reception & Orchestration &ensp;•&ensp; NexVoyage Collective  
          </p>  
        </div>  
      </main>  
    </>  
  );  
}

/* ─── Reusable input field ──────────────────────────────── */  
function Field({  
  label,  
  name,  
  type = "text",  
  value,  
  onChange,  
  placeholder,  
}: {  
  label: string;  
  name: string;  
  type?: string;  
  value: string;  
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;    
  placeholder: string;  
}) {  
  return (  
    <div>  
      <label htmlFor={name} className="font-['Inter'] text-[#c8c8c8]/40 text-xs tracking-[0.1em] uppercase block mb-2">  
        {label}  
      </label>  
      <input  
        id={name}  
        name={name}  
        type={type}  
        value={value}  
        onChange={onChange}  
        placeholder={placeholder}  
        className="w-full bg-[#141414] border border-[#d4af37]/20 rounded-none px-4 py-3 font-['Inter'] text-sm text-white placeholder:text-[#c8c8c8]/30 focus:outline-none focus:border-[#d4af37]/60 transition-colors"  
      />  
    </div>  
  );  
}

/* ─── Reusable select field ─────────────────────────────── */  
function SelectField({  
  label,  
  name,  
  value,  
  onChange,  
  options,  
  placeholder,  
}: {  
  label: string;  
  name: string;  
  value: string;  
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;  
  options: string[];  
  placeholder: string;  
}) {  
  return (  
    <div>  
      <label htmlFor={name} className="font-['Inter'] text-[#c8c8c8]/40 text-xs tracking-[0.1em] uppercase block mb-2">  
        {label}  
      </label>  
      <select  
        id={name}  
        name={name}  
        value={value}  
        onChange={onChange}  
        className="w-full bg-[#141414] border border-[#d4af37]/20 rounded-none px-4 py-3 font-['Inter'] text-sm text-white focus:outline-none focus:border-[#d4af37]/60 transition-colors appearance-none"  
      >  
        <option value="" className="bg-[#141414] text-[#c8c8c8]/30">{placeholder}</option>  
        {options.map((opt) => (  
          <option key={opt} value={opt} className="bg-[#141414] text-white">{opt}</option>  
        ))}  
      </select>  
    </div>  
  );  
}  
