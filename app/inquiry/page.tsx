'use client'

import React, { useState } from 'react'  
import { useRouter } from 'next/navigation'

export default function InquiryPage() {  
  const [step, setStep] = useState(1)  
  const [loading, setLoading] = useState(false)  
  const [submitted, setSubmitted] = useState(false)  
    
  const [formData, setFormData] = useState({  
    name: '',  
    email: '',  
    occasion: '',  
    travelers: '',  
    timing: '',  
    budget: '',  
    objectives: '',  
    challenges: ''  
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {  
    setFormData({ ...formData, [e.target.name]: e.target.value })  
  }

  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault()  
    setLoading(true)  
      
    // Simulate API call to /api/lead  
    try {  
      const res = await fetch('/api/lead', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify(formData)  
      })  
        
      if (res.ok) {  
        setSubmitted(true)  
      }  
    } catch (err) {  
      console.error("Submission failed", err)  
    } finally {  
      setLoading(false)  
    }  
  }

  if (submitted) {  
    return (  
      <div className="min-h-screen bg-[#0D0D0D] text-[#E2E0D5] flex flex-col items-center justify-center p-8 text-center">  
        <h1 className="text-3xl font-light mb-4 uppercase tracking-widest">Receipt Confirmed</h1>  
        <p className="max-w-md mb-8 font-serif italic opacity-80">  
          Rachel is currently analyzing your request. A formal dossier and strategic roadmap will be dispatched to your inbox shortly.  
        </p>  
        <div className="border border-[#E2E0D5]/20 p-8 rounded-sm">  
          <p className="mb-6 uppercase text-sm tracking-widest">Priority Access Unlocked</p>  
          <a   
            href="https://cal.com/nexvoyagecollective/discovery-call"   
            target="_blank"   
            rel="noopener noreferrer"  
            className="px-8 py-4 bg-[#E2E0D5] text-[#0D0D0D] uppercase text-xs tracking-widest hover:bg-[#D4D2C8] transition-colors"  
          >  
            Schedule Discovery Call  
          </a>  
        </div>  
      </div>  
    )  
  }

  return (  
    <div className="min-h-screen bg-[#0D0D0D] text-[#E2E0D5] p-8 md:p-24 font-sans">  
      <div className="max-w-2xl mx-auto">  
        <header className="mb-16 border-b border-[#E2E0D5]/10 pb-8">  
          <p className="text-[10px] uppercase tracking-[0.3em] mb-2 opacity-50">Inquiry Desk — Phase 3</p>  
          <h1 className="text-4xl font-light tracking-tighter italic">The Deep Dive</h1>  
        </header>

        <form onSubmit={handleSubmit} className="space-y-12">  
          {/* Section 1: The Identity */}  
          <section className="space-y-6">  
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#E2E0D5]/40 mb-8">— 01. Identity</h2>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
              <div className="flex flex-col space-y-2">  
                <label className="text-[10px] uppercase tracking-widest">Name</label>  
                <input   
                  required  
                  name="name"  
                  value={formData.name}  
                  onChange={handleChange}  
                  className="bg-transparent border-b border-[#E2E0D5]/30 py-2 focus:outline-none focus:border-[#E2E0D5] transition-colors"  
                />  
              </div>  
              <div className="flex flex-col space-y-2">  
                <label className="text-[10px] uppercase tracking-widest">Email</label>  
                <input   
                  required  
                  type="email"  
                  name="email"  
                  value={formData.email}  
                  onChange={handleChange}  
                  className="bg-transparent border-b border-[#E2E0D5]/30 py-2 focus:outline-none focus:border-[#E2E0D5] transition-colors"  
                />  
              </div>  
            </div>  
          </section>

          {/* Section 2: The Logistics */}  
          <section className="space-y-6">  
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#E2E0D5]/40 mb-8">— 02. Parameters</h2>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
              <div className="flex flex-col space-y-2">  
                <label className="text-[10px] uppercase tracking-widest">Occasion</label>  
                <input   
                  name="occasion"  
                  placeholder="e.g. Sabbatical, Reset, Milestone"  
                  value={formData.occasion}  
                  onChange={handleChange}  
                  className="bg-transparent border-b border-[#E2E0D5]/30 py-2 focus:outline-none focus:border-[#E2E0D5] transition-colors"  
                />  
              </div>  
              <div className="flex flex-col space-y-2">  
                <label className="text-[10px] uppercase tracking-widest">Timing</label>  
                <input   
                  name="timing"  
                  placeholder="Estimated dates or window"  
                  value={formData.timing}  
                  onChange={handleChange}  
                  className="bg-transparent border-b border-[#E2E0D5]/30 py-2 focus:outline-none focus:border-[#E2E0D5] transition-colors"  
                />  
              </div>  
            </div>  
          </section>

          {/* Section 3: The Intent */}  
          <section className="space-y-6">  
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#E2E0D5]/40 mb-8">— 03. Strategic Intent</h2>  
            <div className="flex flex-col space-y-2">  
              <label className="text-[10px] uppercase tracking-widest">Intended Outcome</label>  
              <textarea   
                name="objectives"  
                rows={3}  
                placeholder="What must be true at the end of this journey?"  
                value={formData.objectives}  
                onChange={handleChange}  
                className="bg-transparent border border-[#E2E0D5]/20 p-4 focus:outline-none focus:border-[#E2E0D5] transition-colors resize-none font-serif italic"  
              />  
            </div>  
          </section>

          <button   
            type="submit"  
            disabled={loading}  
            className="w-full border border-[#E2E0D5] py-6 text-[10px] uppercase tracking-[0.5em] hover:bg-[#E2E0D5] hover:text-[#0D0D0D] transition-all duration-500 disabled:opacity-50"  
          >  
            {loading ? 'Processing Dossier...' : 'Transmit Inquiry'}  
          </button>  
        </form>  
      </div>  
    </div>  
  )  
}  
