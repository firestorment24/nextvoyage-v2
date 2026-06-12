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
      dates: formData.get('dates'),  
      guests: formData.get('guests'),  
      propertyId: propertyId,  
      propertyName: property?.name || 'General Inquiry'  
    }

    try {  
      await fetch('/api/lead', {  
        method: 'POST',  
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
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">  
      <div className="max-w-md w-full">  
        {!submitted ? (  
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">  
            <header className="mb-12">  
              <h1 className="text-xs uppercase tracking-[0.4em] opacity-40 mb-4">Inquiry Desk / Rachel AI</h1>  
              <h2 className="text-2xl font-light leading-tight">  
                {property   
                  ? `Initializing your dossier for ${property.name}.`  
                  : "Initializing your inquiry dossier."}  
              </h2>  
            </header>  
              
            <form onSubmit={handleSubmit} className="space-y-10">  
              <div className="group">  
                <label className="block text-[10px] uppercase tracking-widest opacity-30 group-focus-within:opacity-100 transition-opacity mb-2">Lead Traveler Name</label>  
                <input required name="name" type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors font-light" />  
              </div>

              <div className="group">  
                <label className="block text-[10px] uppercase tracking-widest opacity-30 group-focus-within:opacity-100 transition-opacity mb-2">Target Windows</label>  
                <input required name="dates" type="text" placeholder="e.g. Q4 2026 or Specific Dates" className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors font-light" />  
              </div>

              <div className="group">  
                <label className="block text-[10px] uppercase tracking-widest opacity-30 group-focus-within:opacity-100 transition-opacity mb-2">Guest Count</label>  
                <input required name="guests" type="number" placeholder="2" className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors font-light" />  
              </div>  
                
              <button   
                type="submit"   
                disabled={loading}  
                className="w-full border border-white/20 py-4 uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all disabled:opacity-50"  
              >  
                {loading ? 'Processing...' : 'Generate Dossier'}  
              </button>  
            </form>  
          </div>  
        ) : (  
          <div className="text-center animate-in zoom-in-95 duration-1000">  
            <div className="mb-8 inline-block p-4 rounded-full border border-green-500/20 text-green-500">  
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>  
            </div>  
            <h2 className="text-2xl font-light mb-4">Dossier Logged.</h2>  
            <p className="text-gray-400 font-light mb-10 leading-relaxed">  
              Rachel has analyzed your requirements. You are now cleared to access Daryl’s private discovery calendar.  
            </p>  
            <a   
              href="https://cal.com/nexvoyagecollective/discovery-call"   
              target="_blank"   
              className="inline-block bg-white text-black px-10 py-4 uppercase text-[10px] tracking-[0.3em] hover:bg-gray-200 transition-colors"  
            >  
              Book Discovery Call  
            </a>  
          </div>  
        )}  
      </div>  
    </main>  
  )  
}

export default function InquiryPage() {  
  return (  
    <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center uppercase tracking-widest text-[10px]">Loading Rachel AI...</div>}>  
      <InquiryContent />  
    </Suspense>  
  )  
}  
