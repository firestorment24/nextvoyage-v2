'use client'

import React, { useState, Suspense } from 'react'  
import { useSearchParams } from 'next/navigation'  
import { SANCTUARY_DATA } from '@/data/sanctuaries'

function ReserveForm() {  
const searchParams = useSearchParams()  
const preSelectedId = searchParams.get('sanctuary')

const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

const handleSubmit = async (e: React.FormEvent) => {  
  e.preventDefault()  
  setStatus('submitting')  
    
  // Simulate a lead capture - in the future, this can trigger an email via Resend or SendGrid  
  await new Promise(resolve => setTimeout(resolve, 1500))  
  setStatus('success')  
}

if (status === 'success') {  
  return (  
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4 px-6">  
      <h1 className="text-4xl font-serif text-gray-900">Thank You.</h1>  
      <p className="text-lg text-gray-600 max-w-md">  
        An advisor from the NexVoyage Collective will reach out within 24 hours to begin curating your journey.  
      </p>  
    </div>  
  )  
}

return (  
  <div className="max-w-2xl mx-auto px-6 py-20">  
    <header className="text-center mb-16 space-y-4">  
      <h1 className="text-4xl font-serif text-gray-900">Inquiry & Reservation</h1>  
      <p className="text-gray-500 uppercase tracking-widest text-sm">  
        Bespoke travel, curated for you.  
      </p>  
    </header>

    <form onSubmit={handleSubmit} className="space-y-8">  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
        <div className="space-y-2">  
          <label className="text-xs uppercase tracking-widest text-gray-400">Full Name</label>  
          <input required type="text" className="w-full border-b border-gray-200 py-2 focus:border-black outline-none transition-colors" placeholder="John Doe" />  
        </div>  
        <div className="space-y-2">  
          <label className="text-xs uppercase tracking-widest text-gray-400">Email Address</label>  
          <input required type="email" className="w-full border-b border-gray-200 py-2 focus:border-black outline-none transition-colors" placeholder="john@example.com" />  
        </div>  
      </div>

      <div className="space-y-2">  
        <label className="text-xs uppercase tracking-widest text-gray-400">Sanctuary of Interest</label>  
        <select   
          defaultValue={preSelectedId || ""}  
          className="w-full border-b border-gray-200 py-2 focus:border-black outline-none bg-transparent transition-colors"  
        >  
          <option value="" disabled>Select a collection...</option>  
          {SANCTUARY_DATA.map(s => (  
            <option key={s.id} value={s.id}>{s.name} — {s.loc}</option>  
          ))}  
          <option value="custom">Other / General Inquiry</option>  
        </select>  
      </div>

      <div className="space-y-2">  
        <label className="text-xs uppercase tracking-widest text-gray-400">Tell us about your trip</label>  
        <textarea   
          rows={4}   
          className="w-full border border-gray-100 p-4 focus:border-black outline-none transition-colors bg-gray-50 rounded"   
          placeholder="Preferred dates, number of guests, or specific requirements..."  
        />  
      </div>

      <button   
        disabled={status === 'submitting'}  
        className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800 transition-all font-medium disabled:bg-gray-400"  
      >  
        {status === 'submitting' ? 'Sending Inquiry...' : 'Submit Request'}  
      </button>  
    </form>  
  </div>  
)  
}

export default function ReservePage() {  
return (  
  <main className="min-h-screen bg-white">  
    <Suspense fallback={<div className="p-20 text-center">Loading...</div>}>  
      <ReserveForm />  
    </Suspense>  
  </main>  
)  
}  
