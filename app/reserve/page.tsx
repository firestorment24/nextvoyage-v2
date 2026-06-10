// app/reserve/page.tsx (Updated)  
'use client'

import React, { useState, useEffect, Suspense } from 'react'  
import { useSearchParams } from 'next/navigation'

function ReserveContent() {  
  const searchParams = useSearchParams()  
  const [step, setStep] = useState(1)  
  const [isSubmitting, setIsSubmitting] = useState(false)  
  const [submitted, setSubmitted] = useState(false)  
    
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

  // Pre-fill "Vibe" if a property or sanctuary is passed in the URL  
  useEffect(() => {  
    const interest = searchParams.get('interest')  
    if (interest) {  
      setFormData(prev => ({ ...prev, vibe: `Interest in ${interest}` }))  
    }  
  }, [searchParams])

  const nextStep = () => setStep((s) => s + 1)  
  const prevStep = () => setStep((s) => s - 1)

  const handleSubmit = async () => {  
    setIsSubmitting(true)  
    try {  
      const response = await fetch('/api/lead', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify(formData),  
      })  
      if (response.ok) setSubmitted(true)  
    } catch (error) {  
      console.error('Error submitting lead:', error)  
    } finally {  
      setIsSubmitting(false)  
    }  
  }

  // ... (Keep the steps array and UI logic from the previous version)  
  // Just update the "Submit" button to call handleSubmit  
    
  if (submitted) {  
    return (  
      <div className="max-w-xl mx-auto pt-48 px-6 text-center animate-in fade-in duration-1000">  
        <h1 className="text-3xl font-light mb-4">Application Received</h1>  
        <p className="text-gray-500 font-light italic leading-relaxed">  
          "We are reviewing your profile against our current curated properties. You will hear from our team via {formData.contactMethod} shortly."  
        </p>  
      </div>  
    )  
  }

  // (The rest of the return statement from the previous version goes here,   
  // replacing the Submit button's onClick with {handleSubmit})  
  return (  
    <div className="min-h-screen bg-white font-sans text-black">  
      <main className="max-w-xl mx-auto pt-32 pb-20 px-6">  
        {/* ... steps UI ... */}  
        <footer className="mt-20 flex justify-between items-center border-t border-gray-100 pt-10">  
          {step > 1 ? (  
            <button onClick={prevStep} className="text-sm uppercase tracking-widest text-gray-400">Back</button>  
          ) : <div />}  
            
          {step < 4 ? (  
            <button onClick={nextStep} className="bg-black text-white px-8 py-3 text-sm uppercase tracking-widest">Continue</button>  
          ) : (  
            <button   
              onClick={handleSubmit}   
              disabled={isSubmitting}  
              className="bg-black text-white px-8 py-3 text-sm uppercase tracking-widest disabled:opacity-50"  
            >  
              {isSubmitting ? 'Processing...' : 'Submit Application'}  
            </button>  
          )}  
        </footer>  
      </main>  
    </div>  
  )  
}

export default function ReservePage() {  
  return (  
    <Suspense fallback={<div className="pt-32 text-center text-xs uppercase tracking-widest">Loading...</div>}>  
      <ReserveContent />  
    </Suspense>  
  )  
}  
