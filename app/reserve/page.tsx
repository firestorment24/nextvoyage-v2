// app/reserve/page.tsx  
'use client'

import React, { useState } from 'react'

export default function ReservePage() {  
  const [step, setStep] = useState(1)  
  const [formData, setFormData] = useState({  
    name: '',  
    contactMethod: 'Email',  
    contactDetail: '',  
    vibe: '',  
    timeline: 'Flexible',  
    dates: '',  
    adults: 2,  
    children: 0,  
    investment: '',  
    pastExperience: '',  
    nonNegotiable: '',  
    loyalty: '',  
    referral: ''  
  })

  const nextStep = () => setStep((s) => s + 1)  
  const prevStep = () => setStep((s) => s - 1)

  const steps = [  
    {  
      title: "The Essentials",  
      fields: (  
        <div className="space-y-8 animate-in fade-in duration-700">  
          <div>  
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>  
            <input   
              type="text"   
              className="w-full bg-transparent border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors"  
              placeholder="Your full name"  
              onChange={(e) => setFormData({...formData, name: e.target.value})}  
            />  
          </div>  
          <div>  
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Preferred Contact Method</label>  
            <div className="flex flex-wrap gap-4">  
              {['Email', 'WhatsApp', 'Text', 'Call'].map((m) => (  
                <button   
                  key={m}  
                  onClick={() => setFormData({...formData, contactMethod: m})}  
                  className={`px-4 py-2 border ${formData.contactMethod === m ? 'bg-black text-white border-black' : 'border-gray-200 text-gray-400'} text-sm transition-all`}  
                >  
                  {m}  
                </button>  
              ))}  
            </div>  
          </div>  
          <div>  
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">The Vibe (Your Goal)</label>  
            <select   
              className="w-full bg-transparent border-b border-gray-200 py-2 focus:outline-none"  
              onChange={(e) => setFormData({...formData, vibe: e.target.value})}  
            >  
              <option value="">Select a journey type...</option>  
              <option value="Executive Reset">Executive Reset</option>  
              <option value="Family Sanctuary">Family Sanctuary</option>  
              <option value="Cultural Immersion">Cultural Immersion</option>  
              <option value="Milestone Celebration">Milestone Celebration</option>  
            </select>  
          </div>  
        </div>  
      )  
    },  
    {  
      title: "The Logistics",  
      fields: (  
        <div className="space-y-8 animate-in fade-in duration-700">  
          <div>  
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Timeline</label>  
            <div className="flex flex-wrap gap-4">  
              {['Firm Dates', 'Flexible for the right experience'].map((t) => (  
                <button   
                  key={t}  
                  onClick={() => setFormData({...formData, timeline: t})}  
                  className={`px-4 py-2 border ${formData.timeline === t ? 'bg-black text-white border-black' : 'border-gray-200 text-gray-400'} text-sm transition-all`}  
                >  
                  {t}  
                </button>  
              ))}  
            </div>  
          </div>  
          <div className="grid grid-cols-2 gap-8">  
            <div>  
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Adults</label>  
              <input type="number" className="w-full bg-transparent border-b border-gray-200 py-2" defaultValue={2} onChange={(e) => setFormData({...formData, adults: parseInt(e.target.value)})} />  
            </div>  
            <div>  
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Children</label>  
              <input type="number" className="w-full bg-transparent border-b border-gray-200 py-2" defaultValue={0} onChange={(e) => setFormData({...formData, children: parseInt(e.target.value)})} />  
            </div>  
          </div>  
          <div>  
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Target Investment</label>  
            <input   
              type="text"   
              placeholder="Tell us about your target investment for this experience"  
              className="w-full bg-transparent border-b border-gray-200 py-2 focus:outline-none"  
              onChange={(e) => setFormData({...formData, investment: e.target.value})}  
            />  
          </div>  
        </div>  
      )  
    },  
    {  
      title: "The NexVoyage Touch",  
      fields: (  
        <div className="space-y-8 animate-in fade-in duration-700">  
          <div>  
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Past Favorites</label>  
            <textarea   
              placeholder="What was your best travel experience to date and why?"  
              className="w-full bg-transparent border-b border-gray-200 py-2 focus:outline-none min-h-[80px]"  
              onChange={(e) => setFormData({...formData, pastExperience: e.target.value})}  
            />  
          </div>  
          <div>  
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Non-Negotiables</label>  
            <input   
              type="text"   
              placeholder="e.g., 24/7 butler, private chef, fast-track airport security"  
              className="w-full bg-transparent border-b border-gray-200 py-2 focus:outline-none"  
              onChange={(e) => setFormData({...formData, nonNegotiable: e.target.value})}  
            />  
          </div>  
          <div>  
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Loyalty Ties</label>  
            <input   
              type="text"   
              placeholder="Marriott Stars, Ritz-Carlton, etc."  
              className="w-full bg-transparent border-b border-gray-200 py-2 focus:outline-none"  
              onChange={(e) => setFormData({...formData, loyalty: e.target.value})}  
            />  
          </div>  
        </div>  
      )  
    },  
    {  
      title: "The Connection",  
      fields: (  
        <div className="space-y-8 animate-in fade-in duration-700">  
          <div>  
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Referral Source</label>  
            <input   
              type="text"   
              placeholder="Who sent you our way?"  
              className="w-full bg-transparent border-b border-gray-200 py-2 focus:outline-none"  
              onChange={(e) => setFormData({...formData, referral: e.target.value})}  
            />  
          </div>  
          <div className="pt-8">  
            <p className="text-sm text-gray-400 leading-relaxed italic">  
              "Your application will be reviewed by our curation team. We prioritize connections within our elite network to ensure the highest level of service."  
            </p>  
          </div>  
        </div>  
      )  
    }  
  ]

  return (  
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">  
      <main className="max-w-xl mx-auto pt-32 pb-20 px-6">  
        <header className="mb-20">  
          <h1 className="text-3xl font-light tracking-tight mb-4">Application for Curation</h1>  
          <div className="flex gap-1">  
            {steps.map((_, i) => (  
              <div key={i} className={`h-1 w-8 transition-colors ${i + 1 <= step ? 'bg-black' : 'bg-gray-100'}`} />  
            ))}  
          </div>  
        </header>

        <section className="min-h-[400px]">  
          <h2 className="text-xl mb-12 font-medium">{steps[step-1].title}</h2>  
          {steps[step-1].fields}  
        </section>

        <footer className="mt-20 flex justify-between items-center border-t border-gray-100 pt-10">  
          {step > 1 ? (  
            <button onClick={prevStep} className="text-sm uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Back</button>  
          ) : (  
            <div />  
          )}  
            
          {step < steps.length ? (  
            <button   
              onClick={nextStep}   
              className="bg-black text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-gray-900 transition-all"  
            >  
              Continue  
            </button>  
          ) : (  
            <button   
              className="bg-black text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-gray-900 transition-all"  
              onClick={() => alert('Lead Submitted to Daryl')}  
            >  
              Submit Application  
            </button>  
          )}  
        </footer>  
      </main>  
    </div>  
  )  
}  
