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

      if (res.ok) {  
        setSubmitted(true);  
      } else {  
        alert("The dialogue could not be initiated at this time. Please try again.");  
      }  
    } catch (error) {  
      console.error("Submission error:", error);  
    } finally {  
      setLoading(false);  
    }  
  }

  if (submitted) {  
    return (  
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">  
        <h1 className="text-2xl font-light uppercase tracking-widest mb-4">Dialogue Initiated</h1>  
        <p className="text-sm text-zinc-500 max-w-md">  
          Your manifest has been received. We will reach out shortly to begin the orchestration.  
        </p>  
      </div>  
    );  
  }

  return (  
    <main className="max-w-2xl mx-auto py-24 px-6 min-h-screen">  
      <h1 className="text-3xl font-light uppercase tracking-[0.2em] mb-12 text-center">  
        The Invitation  
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
          <div className="space-y-2">  
            <label className="text-[10px] uppercase tracking-widest text-zinc-500">Full Name</label>  
            <input required name="name" className="w-full bg-transparent border-b border-zinc-800 py-2 focus:outline-none focus:border-white transition-colors" />  
          </div>  
          <div className="space-y-2">  
            <label className="text-[10px] uppercase tracking-widest text-zinc-500">Email Address</label>  
            <input required name="email" type="email" className="w-full bg-transparent border-b border-zinc-800 py-2 focus:outline-none focus:border-white transition-colors" />  
          </div>  
          <div className="space-y-2">  
            <label className="text-[10px] uppercase tracking-widest text-zinc-500">Departure City</label>  
            <input name="city" className="w-full bg-transparent border-b border-zinc-800 py-2 focus:outline-none focus:border-white transition-colors" />  
          </div>  
          <div className="space-y-2">  
            <label className="text-[10px] uppercase tracking-widest text-zinc-500">Preferred Dates</label>  
            <input name="dates" className="w-full bg-transparent border-b border-zinc-800 py-2 focus:outline-none focus:border-white transition-colors" />  
          </div>  
        </div>

        <div className="space-y-2">  
          <label className="text-[10px] uppercase tracking-widest text-zinc-500">The Vision</label>  
          <textarea name="vision" rows={3} className="w-full bg-transparent border-b border-zinc-800 py-2 focus:outline-none focus:border-white transition-colors resize-none" />  
        </div>

        <div className="space-y-2">  
          <label className="text-[10px] uppercase tracking-widest text-zinc-500">Aesthetic Notes</label>  
          <textarea name="aesthetics" rows={2} className="w-full bg-transparent border-b border-zinc-800 py-2 focus:outline-none focus:border-white transition-colors resize-none" />  
        </div>

        <button  
          type="submit"  
          disabled={loading}  
          className="w-full mt-12 py-4 border border-zinc-800 uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition-all disabled:opacity-50"  
        >  
          {loading ? "Transmitting..." : "Begin the Dialogue"}  
        </button>  
      </form>  
    </main>  
  );  
}  
