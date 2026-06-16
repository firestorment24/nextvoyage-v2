"use client";

import { useState } from "react";

export default function InvitationPage() {  
  const [loading, setLoading] = useState(false);  
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {  
    e.preventDefault();  
    setLoading(true);

    const formData = new FormData(e.currentTarget);  
    const payload = {  
      name: formData.get("name"),  
      email: formData.get("email"),  
      phone: formData.get("phone"), // Captured here  
      dates: formData.get("dates"),  
      city: formData.get("city"),  
      vision: formData.get("vision"),  
      aesthetics: formData.get("aesthetics"),  
    };

    try {  
      const res = await fetch("/api/lead", {  
        method: "POST",  
        headers: { "Content-Type": "application/json" },  
        body: JSON.stringify(payload),  
      });

      if (res.ok) setSubmitted(true);  
      else alert("The orchestration could not be initiated. Please try again.");  
    } catch (error) {  
      console.error("Submission error:", error);  
    } finally {  
      setLoading(false);  
    }  
  }

  if (submitted) {  
    return (  
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center px-4">  
        <h1 className="text-xl font-light uppercase tracking-[0.4em] text-[#d4af37] mb-6">Dialogue Initiated</h1>  
        <p className="text-[10px] uppercase tracking-widest text-stone-500 max-w-xs leading-relaxed">  
          Your manifest has been received. Daryl will reach out shortly to begin the orchestration.  
        </p>  
      </div>  
    );  
  }

  return (  
    <main className="bg-black text-stone-200 min-h-screen selection:bg-[#d4af37] selection:text-black">  
      <div className="max-w-2xl mx-auto py-32 px-8">  
        <header className="mb-20 text-center">  
          <h1 className="text-3xl font-light uppercase tracking-[0.3em] mb-4">The Invitation</h1>  
          <div className="h-[1px] w-12 bg-[#d4af37] mx-auto opacity-50"></div>  
        </header>

        <form onSubmit={handleSubmit} className="space-y-12">  
          {/* Section 1: Identity */}  
          <div className="space-y-10">  
            <div className="group space-y-3">  
              <label className="block text-[9px] uppercase tracking-[0.2em] text-stone-500 group-focus-within:text-[#d4af37] transition-colors">Full Name</label>  
              <input required name="name" className="w-full bg-transparent border-b border-stone-800 py-2 focus:outline-none focus:border-[#d4af37] transition-colors font-light tracking-wide" />  
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">  
              <div className="group space-y-3">  
                <label className="block text-[9px] uppercase tracking-[0.2em] text-stone-500 group-focus-within:text-[#d4af37] transition-colors">Email Address</label>  
                <input required name="email" type="email" className="w-full bg-transparent border-b border-stone-800 py-2 focus:outline-none focus:border-[#d4af37] transition-colors font-light tracking-wide" />  
              </div>  
              <div className="group space-y-3">  
                <label className="block text-[9px] uppercase tracking-[0.2em] text-stone-500 group-focus-within:text-[#d4af37] transition-colors">Phone Number</label>  
                <input name="phone" type="tel" className="w-full bg-transparent border-b border-stone-800 py-2 focus:outline-none focus:border-[#d4af37] transition-colors font-light tracking-wide" />  
              </div>  
            </div>  
          </div>

          {/* Section 2: Logistics */}  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">  
            <div className="group space-y-3">  
              <label className="block text-[9px] uppercase tracking-[0.2em] text-stone-500 group-focus-within:text-[#d4af37] transition-colors">Departure City</label>  
              <input name="city" className="w-full bg-transparent border-b border-stone-800 py-2 focus:outline-none focus:border-[#d4af37] transition-colors font-light tracking-wide" />  
            </div>  
            <div className="group space-y-3">  
              <label className="block text-[9px] uppercase tracking-[0.2em] text-stone-500 group-focus-within:text-[#d4af37] transition-colors">Preferred Timeline</label>  
              <input name="dates" className="w-full bg-transparent border-b border-stone-800 py-2 focus:outline-none focus:border-[#d4af37] transition-colors font-light tracking-wide" />  
            </div>  
          </div>

          {/* Section 3: The Narrative */}  
          <div className="space-y-12">  
            <div className="group space-y-3">  
              <label className="block text-[9px] uppercase tracking-[0.2em] text-stone-500 group-focus-within:text-[#d4af37] transition-colors">The Vision</label>  
              <textarea name="vision" rows={3} className="w-full bg-transparent border-b border-stone-800 py-2 focus:outline-none focus:border-[#d4af37] transition-colors resize-none font-light leading-relaxed" />  
            </div>

            <div className="group space-y-3">  
              <label className="block text-[9px] uppercase tracking-[0.2em] text-stone-500 group-focus-within:text-[#d4af37] transition-colors">Aesthetic Requirements</label>  
              <textarea name="aesthetics" rows={2} className="w-full bg-transparent border-b border-stone-800 py-2 focus:outline-none focus:border-[#d4af37] transition-colors resize-none font-light leading-relaxed" />  
            </div>  
          </div>

          <div className="pt-12">  
            <button  
              type="submit"  
              disabled={loading}  
              className="w-full group relative overflow-hidden py-5 border border-stone-800 uppercase tracking-[0.4em] text-[10px] transition-all hover:border-[#d4af37]"  
            >  
              <span className={`relative z-10 ${loading ? 'animate-pulse' : 'group-hover:text-[#d4af37]'}`}>  
                {loading ? "Transmitting..." : "Begin the Dialogue"}  
              </span>  
            </button>  
          </div>  
        </form>  
      </div>  
    </main>  
  );  
}  
