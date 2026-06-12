'use client'

import { useSearchParams } from 'next/navigation'  
import Navigation from '@/components/Navigation'  
import { Suspense, useState } from 'react'

function InquiryForm() {  
const searchParams = useSearchParams()  
const initialProperty = searchParams.get('property') || ''

const [status, setStatus] = useState<'idle' | 'submitting' | 'booking'>('idle')

const handleSubmit = (e: React.FormEvent) => {  
  e.preventDefault()  
  setStatus('submitting')  
  // Simulated lead capture logic  
  setTimeout(() => setStatus('booking'), 1200)  
}

if (status === 'booking') {  
  return (  
    <div className="max-w-4xl mx-auto space-y-12 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">  
      <div className="text-center space-y-4">  
        <h2 className="text-3xl font-light italic">Lead Analyzed.</h2>  
        <p className="text-sm opacity-60 max-w-md mx-auto">  
          Rachel has flagged your request. Please select a window for your discovery call below to finalize the dossier.  
        </p>  
      </div>  
        
      {/* Cal.com Embed / Link */}  
      <div className="bg-white border border-black/5 rounded-sm overflow-hidden shadow-sm">  
        <iframe   
          src="https://cal.com/nexvoyagecollective/discovery-call"   
          style={{ width: '100%', height: '600px', border: 'none' }}  
          title="Discovery Call Scheduling"  
        />  
      </div>  
    </div>  
  )  
}

return (  
  <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-12">  
    <div className="space-y-8">  
      <div className="space-y-4">  
        <label className="text-[10px] uppercase tracking-[0.2em] opacity-40">Subject of Interest</label>  
        <input   
          type="text"   
          defaultValue={initialProperty}  
          className="w-full bg-transparent border-b border-black/10 pb-4 text-2xl font-light focus:outline-none focus:border-black transition-colors"  
        />  
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
        <div className="space-y-4">  
          <label className="text-[10px] uppercase tracking-[0.2em] opacity-40">Full Name</label>  
          <input required type="text" className="w-full bg-transparent border-b border-black/10 pb-4 text-lg font-light focus:outline-none focus:border-black transition-colors" />  
        </div>  
        <div className="space-y-4">  
          <label className="text-[10px] uppercase tracking-[0.2em] opacity-40">Email Address</label>  
          <input required type="email" className="w-full bg-transparent border-b border-black/10 pb-4 text-lg font-light focus:outline-none focus:border-black transition-colors" />  
        </div>  
      </div>  
    </div>

    <button   
      type="submit"  
      disabled={status === 'submitting'}  
      className="w-full bg-black text-white py-6 text-[10px] uppercase tracking-[0.4em] hover:bg-zinc-800 transition-colors disabled:opacity-50"  
    >  
      {status === 'submitting' ? 'Processing...' : 'Proceed to Discovery Calendar'}  
    </button>  
  </form>  
)  
}

export default function InquiryPage() {  
return (  
  <main className="min-h-screen bg-[#FDFCFB] text-[#1a1a1a]">  
    <Navigation />  
    <div className="max-w-screen-xl mx-auto px-6 pt-40 pb-24">  
      <header className="mb-20 text-center space-y-4">  
        <h1 className="text-5xl md:text-6xl font-light tracking-tighter text-black">Inquiry Desk</h1>  
        <p className="text-xs uppercase tracking-[0.3em] opacity-40">Lead Analysis by Rachel AI</p>  
      </header>  
        
      <Suspense fallback={<div className="text-center opacity-20">Loading Ledger...</div>}>  
        <InquiryForm />  
      </Suspense>  
    </div>  
  </main>  
)  
}  
