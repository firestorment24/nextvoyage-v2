// app/inquiry/page.tsx  
'use client'

import { useState, Suspense } from 'react'  
import { useSearchParams } from 'next/navigation'  
import { SANCTUARIES_DATA } from '@/lib/data/sanctuaries'

function InquiryContent() {  
  const searchParams = useSearchParams()  
  const propertyId = searchParams.get('id')  
  const property = SANCTUARIES_DATA.find(s => s.id === propertyId)

  const [submitted, setSubmitted] = useState(false)  
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {  
    e.preventDefault()  
    setLoading(true)

    const formData = new FormData(e.currentTarget)  
    const data = {  
      name: formData.get('name'),  
      occasion: formData.get('occasion'),  
      dates: formData.get('dates'),  
      guests: formData.get('guests'),  
      logistics: formData.get('logistics'),  
      propertyId: propertyId,  
      propertyName: property?.name || 'General Inquiry'  
    }

    try {  
      await fetch('/api/lead', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify(data),  
      })  
      setSubmitted(true)  
    } catch (err) {  
      console.error('Failed to submit dossier', err)  
    } finally {  
      setLoading(false)  
    }  
  }

  return (  
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20 font-light">  
      <div className="max-w-xl w-full">  
        {!submitted ? (  
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">  
            <header className="mb-16 border-l border-white/20 pl-8">  
              <h1 className="text-[10px] uppercase tracking-[0.5em] opacity-40 mb-4 font-normal">Rachel AI // Lead Analysis</h1>  
              <h2 className="text-3xl font-light leading-tight tracking-tight">  
                {property   
                  ? `Refining your dossier for ${property.name}.`  
                  : "Curating your bespoke inquiry dossier."}  
              </h2>  
              <p className="text-gray-500 text-sm mt-4 italic">  
                "I’ll need a few specifics to ensure Daryl is prepared for your discovery call."  
              </p>  
            </header>  
              
            <form onSubmit={handleSubmit} className="space-y-12">  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
                {/* Traveler Identity */}  
                <div className="group">  
                  <label className="block text-[10px] uppercase tracking-widest opacity-30 mb-2">Lead Traveler</label>  
                  <input required name="name" type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors placeholder:text-white/10" />  
                </div>

                {/* The "Why" - Occasion */}  
                <div className="group">  
                  <label className="block text-[10px] uppercase tracking-widest opacity-30 mb-2">Nature of Occasion</label>  
                  <select name="occasion" className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors appearance-none">  
                    <option className="bg-black" value="sabbatical">Sabbatical / Reset</option>  
                    <option className="bg-black" value="anniversary">Celebration / Anniversary</option>  
                    <option className="bg-black" value="strategy">Corporate Strategy / Retreat</option>  
                    <option className="bg-black" value="family">Multi-Generational Gathering</option>  
                  </select>  
                </div>

                {/* The "When" */}  
                <div className="group">  
                  <label className="block text-[10px] uppercase tracking-widest opacity-30 mb-2">Target Windows</label>  
                  <input required name="dates" type="text" placeholder="e.g. Late 2026" className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors placeholder:text-white/10" />  
                </div>

                {/* The "Who" */}  
                <div className="group">  
                  <label className="block text-[10px] uppercase tracking-widest opacity-30 mb-2">Guest Count</label>  
                  <input required name="guests" type="number" placeholder="2" className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors placeholder:text-white/10" />  
                </div>  
              </div>

              {/* The "How" - Logistics */}  
              <div className="group">  
                <label className="block text-[10px] uppercase tracking-widest opacity-30 mb-2">Logistics Preference</label>  
                <div className="flex gap-8 pt-2">  
                  <label className="flex items-center gap-2 cursor-pointer text-sm">  
                    <input type="radio" name="logistics" value="private" className="accent-white" defaultChecked />  
                    Private Aviation  
                  </label>  
                  <label className="flex items-center gap-2 cursor-pointer text-sm">  
                    <input type="radio" name="logistics" value="commercial" className="accent-white" />  
                    Commercial First Class  
                  </label>  
                </div>  
              </div>  
                
              <button   
                type="submit"   
                disabled={loading}  
                className="w-full border border-white/20 py-5 uppercase text-[10px] tracking-[0.4em] hover:bg-white hover:text-black transition-all disabled:opacity-50"  
              >  
                {loading ? 'Finalizing Analysis...' : 'Submit Inquiry Dossier'}  
              </button>  
            </form>  
          </div>  
        ) : (  
          <div className="text-center animate-in zoom-in-95 duration-1000">  
            <div className="mb-12 inline-block p-6 rounded-full border border-white/10 text-white">  
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>  
            </div>  
            <h2 className="text-3xl font-light mb-6 tracking-tight">Dossier Initialized.</h2>  
            <p className="text-gray-500 font-light mb-12 leading-relaxed max-w-sm mx-auto italic">  
              "Thank you. I have logged your preferences. You are now cleared for a direct discovery session with Daryl."  
            </p>  
            <a   
              href="https://cal.com/nexvoyagecollective/discovery-call"   
              target="_blank"   
              className="inline-block bg-white text-black px-12 py-5 uppercase text-[10px] tracking-[0.4em] hover:bg-gray-200 transition-colors shadow-2xl"  
            >  
              Access Calendar  
            </a>  
          </div>  
        )}  
      </div>  
    </main>  
  )  
}

export default function InquiryPage() {  
  return (  
    <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center uppercase tracking-widest text-[10px]">Accessing Rachel AI...</div>}>  
      <InquiryContent />  
    </Suspense>  
  )  
}  
What this adds:
