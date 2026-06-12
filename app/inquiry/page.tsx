// app/inquiry/page.tsx  
'use client'

import { useState, Suspense } from 'react'  
import { useSearchParams } from 'next/navigation'

function InquiryContent() {  
  const searchParams = useSearchParams()  
  const propertyId = searchParams.get('id')  
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault()  
    // Logic to send to our Lead API will go here  
    setSubmitted(true)  
  }

  return (  
    <div className="max-w-2xl mx-auto py-20 px-6">  
      {!submitted ? (  
        <>  
          <h1 className="text-2xl font-light mb-4">Inquiry Desk: Rachel AI</h1>  
          <p className="text-gray-500 mb-8 italic">  
            "I’ll help you prepare your Inquiry Dossier before your discovery call with Daryl."  
          </p>  
            
          <form onSubmit={handleSubmit} className="space-y-6">  
            <div>  
              <label className="block text-sm uppercase tracking-widest mb-2">Full Name</label>  
              <input required type="text" className="w-full bg-transparent border-b border-gray-800 py-2 focus:outline-none" />  
            </div>  
            <div>  
              <label className="block text-sm uppercase tracking-widest mb-2">Target Travel Dates</label>  
              <input required type="text" placeholder="e.g. Late October 2026" className="w-full bg-transparent border-b border-gray-800 py-2 focus:outline-none" />  
            </div>  
            <div>  
              <label className="block text-sm uppercase tracking-widest mb-2">Guest Count</label>  
              <input required type="number" className="w-full bg-transparent border-b border-gray-800 py-2 focus:outline-none" />  
            </div>  
              
            <button type="submit" className="bg-white text-black px-8 py-3 uppercase text-xs tracking-[0.2em] hover:bg-gray-200 transition-colors">  
              Initialize Dossier  
            </button>  
          </form>  
        </>  
      ) : (  
        <div className="text-center space-y-6 animate-in fade-in duration-700">  
          <h2 className="text-2xl font-light">Dossier Initialized.</h2>  
          <p className="text-gray-500">  
            Rachel has logged your interest. You are now cleared to book your discovery call directly with Daryl.  
          </p>  
          <a   
            href="https://cal.com/nexvoyagecollective/discovery-call"   
            target="_blank"   
            className="inline-block bg-white text-black px-8 py-3 uppercase text-xs tracking-[0.2em]"  
          >  
            Book Discovery Call  
          </a>  
        </div>  
      )}  
    </div>  
  )  
}

export default function InquiryPage() {  
  return (  
    <Suspense fallback={<div>Loading...</div>}>  
      <InquiryContent />  
    </Suspense>  
  )  
}  
