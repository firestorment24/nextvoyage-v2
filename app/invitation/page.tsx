// app/invitation/page.tsx  
"use client";

import { useState } from "react";  
import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({  
  subsets: ["latin"],  
  weight: ["300", "400", "500", "600", "700"],  
  variable: "--font-cormorant",  
});

const inter = Inter({  
  subsets: ["latin"],  
  weight: ["300", "400", "500"],  
  variable: "--font-inter",  
});

const OCCASIONS = [  
  "Anniversary",  
  "Birthday",  
  "Honeymoon",  
  "Business & Leisure",  
  "Family Gathering",  
  "Personal Retreat",  
  "Exploration",  
  "Other",  
];

const AVIATION_CLASSES = [  
  "Commercial First Class",  
  "Commercial Business",  
  "Private Charter",  
  "Flexible / Undecided",  
];

const HEAR_ABOUT = [  
  "Personal Referral",  
  "Instagram",  
  "Word of Mouth",  
  "Article / Feature",  
  "Event",  
  "Other",  
];

type FormData = {  
  name: string;  
  email: string;  
  phone: string;  
  occasion: string;  
  destinations: string;  
  travelWindow: string;  
  partySize: string;  
  aviationClass: string;  
  hearAbout: string;  
  notes: string;  
};

const initialForm: FormData = {  
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
};

export default function InvitationPage() {  
  const [form, setForm] = useState<FormData>(initialForm);  
  const [submitting, setSubmitting] = useState(false);  
  const [submitted, setSubmitted] = useState(false);  
  const [manifestId, setManifestId] = useState<string | null>(null);

  const handleChange = (  
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>  
  ) => {  
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));  
  };

  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault();  
    setSubmitting(true);

    try {  
      const res = await fetch("/api/lead", {  
        method: "POST",  
        headers: { "Content-Type": "application/json" },  
        body: JSON.stringify(form),  
      });

      const data = await res.json();

      if (data.success) {  
        setManifestId(data.manifestId);  
        setSubmitted(true);  
      }  
    } catch {  
      // silent fail — form remains interactive  
    } finally {  
      setSubmitting(false);  
    }  
  };

  // ── Success Screen ──────────────────────────────────────────────  
  if (submitted) {  
    return (  
      <main  
        className={`${cormorant.variable} ${inter.variable} min-h-screen bg-[#0a0a0a] text-[#c8c8c8] font-[family-name:var(--font-inter)] flex flex-col items-center justify-center px-6`}  
      >  
        <div className="max-w-lg text-center space-y-8">  
          <div className="space-y-2">  
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#d4af37]/60 font-[family-name:var(--font-inter)]">  
              Rachel — Reception & Orchestration  
            </p>  
            <h1  
              className={`text-4xl sm:text-5xl font-light text-[#d4af37] font-[family-name:var(--font-cormorant)] tracking-wide`}  
            >  
              Application Received  
            </h1>  
            <p className="text-lg text-[#c8c8c8]/70 font-light italic">  
              Dialogue Initiated  
            </p>  
          </div>

          <div className="h-px w-16 bg-[#d4af37]/40 mx-auto" />

          <p className="text-sm text-[#c8c8c8]/60 leading-relaxed max-w-sm mx-auto">  
            Your travel preferences are now being reviewed by our  
            concierge team. A member of the Collective will reach out  
            within <span className="text-[#d4af37]">48 hours</span>.  
          </p>

          {manifestId && (  
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#d4af37]/40 font-[family-name:var(--font-inter)]">  
              Manifest {manifestId}  
            </p>  
          )}

          <div className="pt-8">  
            <a  
              href="/"  
              className="inline-block border border-[#d4af37]/30 text-[#d4af37] text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-[#d4af37]/5 transition-colors duration-500"  
            >  
              Return  
            </a>  
          </div>

          <p className="text-[9px] tracking-[0.3em] uppercase text-[#d4af37]/30 pt-12 font-[family-name:var(--font-inter)]">  
            Rachel — Reception & Orchestration &bull; NexVoyage Collective  
          </p>  
        </div>  
      </main>  
    );  
  }

  // ── Form Screen ─────────────────────────────────────────────────  
  return (  
    <main  
      className={`${cormorant.variable} ${inter.variable} min-h-screen bg-[#0a0a0a] text-[#c8c8c8] font-[family-name:var(--font-inter)] flex flex-col items-center px-4 py-16 sm:py-24`}  
    >  
      <div className="w-full max-w-2xl">  
        {/* ── Header ────────────────────────────────────────── */}  
        <div className="text-center space-y-3 mb-16">  
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#d4af37]/50 font-[family-name:var(--font-inter)]">  
            Rachel — Reception & Orchestration  
          </p>  
          <h1  
            className={`text-3xl sm:text-4xl font-light text-[#d4af37] font-[family-name:var(--font-cormorant)] tracking-wide`}  
          >  
            Application for Entry  
          </h1>  
          <div className="h-px w-12 bg-[#d4af37]/30 mx-auto mt-4" />  
          <p className="text-sm text-[#c8c8c8]/50 max-w-md mx-auto font-light leading-relaxed">  
            Discretion begins here. Share the details that matter,  
            and let the Collective shape your passage.  
          </p>  
        </div>

        {/* ── Form ──────────────────────────────────────────── */}  
        <form onSubmit={handleSubmit} className="space-y-14">  
          {/* ─── Section: Sovereign Profile ─────────────────── */}  
          <section className="space-y-6">  
            <div className="space-y-1">  
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#d4af37]/40 font-[family-name:var(--font-inter)]">  
                Section I  
              </span>  
              <h2  
                className={`text-xl text-[#d4af37] font-[family-name:var(--font-cormorant)] font-light tracking-wide`}  
              >  
                The Sovereign Profile  
              </h2>  
              <div className="h-px w-full bg-[#d4af37]/10 mt-2" />  
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">  
              {/* Full Name */}  
              <div className="sm:col-span-2 space-y-1.5">  
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#c8c8c8]/40 font-[family-name:var(--font-inter)]">  
                  Full Name  
                </label>  
                <input  
                  type="text"  
                  name="name"  
                  value={form.name}  
                  onChange={handleChange}  
                  required  
                  className="w-full bg-transparent border border-[#d4af37]/20 px-4 py-3 text-sm text-[#c8c8c8] placeholder:text-[#c8c8c8]/20 focus:outline-none focus:border-[#d4af37]/60 transition-colors duration-300 font-light"  
                  placeholder="Your name"  
                />  
              </div>

              {/* Email */}  
              <div className="space-y-1.5">  
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#c8c8c8]/40 font-[family-name:var(--font-inter)]">  
                  Email  
                </label>  
                <input  
                  type="email"  
                  name="email"  
                  value={form.email}  
                  onChange={handleChange}  
                  required  
                  className="w-full bg-transparent border border-[#d4af37]/20 px-4 py-3 text-sm text-[#c8c8c8] placeholder:text-[#c8c8c8]/20 focus:outline-none focus:border-[#d4af37]/60 transition-colors duration-300 font-light"  
                  placeholder="you@example.com"  
                />  
              </div>

              {/* Phone */}  
              <div className="space-y-1.5">  
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#c8c8c8]/40 font-[family-name:var(--font-inter)]">  
                  Phone  
                </label>  
                <input  
                  type="tel"  
                  name="phone"  
                  value={form.phone}  
                  onChange={handleChange}  
                  required  
                  className="w-full bg-transparent border border-[#d4af37]/20 px-4 py-3 text-sm text-[#c8c8c8] placeholder:text-[#c8c8c8]/20 focus:outline-none focus:border-[#d4af37]/60 transition-colors duration-300 font-light"  
                  placeholder="+1 (555) 000-0000"  
                />  
              </div>  
            </div>  
          </section>

          {/* ─── Section: Mission Parameters ────────────────── */}  
          <section className="space-y-6">  
            <div className="space-y-1">  
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#d4af37]/40 font-[family-name:var(--font-inter)]">  
                Section II  
              </span>  
              <h2  
                className={`text-xl text-[#d4af37] font-[family-name:var(--font-cormorant)] font-light tracking-wide`}  
              >  
                Mission Parameters  
              </h2>  
              <div className="h-px w-full bg-[#d4af37]/10 mt-2" />  
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">  
              {/* Occasion */}  
              <div className="space-y-1.5">  
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#c8c8c8]/40 font-[family-name:var(--font-inter)]">  
                  Occasion  
                </label>  
                <select  
                  name="occasion"  
                  value={form.occasion}  
                  onChange={handleChange}  
                  required  
                  className="w-full bg-[#0a0a0a] border border-[#d4af37]/20 px-4 py-3 text-sm text-[#c8c8c8] focus:outline-none focus:border-[#d4af37]/60 transition-colors duration-300 font-light appearance-none"  
                >  
                  <option value="" disabled className="bg-[#0a0a0a]">  
                    Select occasion  
                  </option>  
                  {OCCASIONS.map((o) => (  
                    <option key={o} value={o} className="bg-[#0a0a0a]">  
                      {o}  
                    </option>  
                  ))}  
                </select>  
              </div>

              {/* Travel Window */}  
              <div className="space-y-1.5">  
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#c8c8c8]/40 font-[family-name:var(--font-inter)]">  
                  Travel Window  
                </label>  
                <input  
                  type="text"  
                  name="travelWindow"  
                  value={form.travelWindow}  
                  onChange={handleChange}  
                  required  
                  className="w-full bg-transparent border border-[#d4af37]/20 px-4 py-3 text-sm text-[#c8c8c8] placeholder:text-[#c8c8c8]/20 focus:outline-none focus:border-[#d4af37]/60 transition-colors duration-300 font-light"  
                  placeholder="e.g. September 2026"  
                />  
              </div>

              {/* Destinations */}  
              <div className="sm:col-span-2 space-y-1.5">  
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#c8c8c8]/40 font-[family-name:var(--font-inter)]">  
                  Destinations / Regions of Interest  
                </label>  
                <input  
                  type="text"  
                  name="destinations"  
                  value={form.destinations}  
                  onChange={handleChange}  
                  required  
                  className="w-full bg-transparent border border-[#d4af37]/20 px-4 py-3 text-sm text-[#c8c8c8] placeholder:text-[#c8c8c8]/20 focus:outline-none focus:border-[#d4af37]/60 transition-colors duration-300 font-light"  
                  placeholder="e.g. French Riviera, Kyoto, Patagonia"  
                />  
              </div>

              {/* Party Size */}  
              <div className="space-y-1.5">  
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#c8c8c8]/40 font-[family-name:var(--font-inter)]">  
                  Party Size  
                </label>  
                <input  
                  type="text"  
                  name="partySize"  
                  value={form.partySize}  
                  onChange={handleChange}  
                  required  
                  className="w-full bg-transparent border border-[#d4af37]/20 px-4 py-3 text-sm text-[#c8c8c8] placeholder:text-[#c8c8c8]/20 focus:outline-none focus:border-[#d4af37]/60 transition-colors duration-300 font-light"  
                  placeholder="e.g. 2 Adults"  
                />  
              </div>

              {/* Aviation Class */}  
              <div className="space-y-1.5">  
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#c8c8c8]/40 font-[family-name:var(--font-inter)]">  
                  Aviation Preference  
                </label>  
                <select  
                  name="aviationClass"  
                  value={form.aviationClass}  
                  onChange={handleChange}  
                  required  
                  className="w-full bg-[#0a0a0a] border border-[#d4af37]/20 px-4 py-3 text-sm text-[#c8c8c8] focus:outline-none focus:border-[#d4af37]/60 transition-colors duration-300 font-light appearance-none"  
                >  
                  <option value="" disabled className="bg-[#0a0a0a]">  
                    Select class  
                  </option>  
                  {AVIATION_CLASSES.map((c) => (  
                    <option key={c} value={c} className="bg-[#0a0a0a]">  
                      {c}  
                    </option>  
                  ))}  
                </select>  
              </div>  
            </div>  
          </section>

          {/* ─── Section: Cultural Fit ──────────────────────── */}  
          <section className="space-y-6">  
            <div className="space-y-1">  
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#d4af37]/40 font-[family-name:var(--font-inter)]">  
                Section III  
              </span>  
              <h2  
                className={`text-xl text-[#d4af37] font-[family-name:var(--font-cormorant)] font-light tracking-wide`}  
              >  
                Cultural Fit  
              </h2>  
              <div className="h-px w-full bg-[#d4af37]/10 mt-2" />  
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">  
              {/* Hear About */}  
              <div className="space-y-1.5">  
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#c8c8c8]/40 font-[family-name:var(--font-inter)]">  
                  How did you hear about us?  
                </label>  
                <select  
                  name="hearAbout"  
                  value={form.hearAbout}  
                  onChange={handleChange}  
                  required  
                  className="w-full bg-[#0a0a0a] border border-[#d4af37]/20 px-4 py-3 text-sm text-[#c8c8c8] focus:outline-none focus:border-[#d4af37]/60 transition-colors duration-300 font-light appearance-none"  
                >  
                  <option value="" disabled className="bg-[#0a0a0a]">  
                    Select source  
                  </option>  
                  {HEAR_ABOUT.map((s) => (  
                    <option key={s} value={s} className="bg-[#0a0a0a]">  
                      {s}  
                    </option>  
                  ))}  
                </select>  
              </div>

              {/* Notes — full width on mobile, half on desktop */}  
              <div className="sm:col-span-2 space-y-1.5">  
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#c8c8c8]/40 font-[family-name:var(--font-inter)]">  
                  Discretion Notes &mdash; Vision, Aesthetic, Unspoken Wishes  
                </label>  
                <textarea  
                  name="notes"  
                  value={form.notes}  
                  onChange={handleChange}  
                  rows={4}  
                  className="w-full bg-transparent border border-[#d4af37]/20 px-4 py-3 text-sm text-[#c8c8c8] placeholder:text-[#c8c8c8]/20 focus:outline-none focus:border-[#d4af37]/60 transition-colors duration-300 font-light resize-none"  
                  placeholder="Describe the feeling, the imagery, the unspoken details that matter most..."  
                />  
              </div>  
            </div>  
          </section>

          {/* ─── Submit ─────────────────────────────────────── */}  
          <div className="text-center pt-4 space-y-6">  
            <button  
              type="submit"  
              disabled={submitting}  
              className="border border-[#d4af37]/40 text-[#d4af37] text-xs tracking-[0.25em] uppercase px-10 py-4 bg-transparent hover:bg-[#d4af37]/5 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-500"  
            >  
              {submitting ? "Transmitting..." : "Submit Application"}  
            </button>

            <p className="text-[9px] tracking-[0.3em] uppercase text-[#d4af37]/25 font-[family-name:var(--font-inter)]">  
              Rachel — Reception & Orchestration &bull; NexVoyage Collective  
            </p>  
          </div>  
        </form>  
      </div>  
    </main>  
  );  
}  
