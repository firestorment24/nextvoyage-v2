'use client'

import { useState } from 'react'  
import Link from 'next/link'

const CAL_LINK = "https://cal.com/nexvoyagecollective/discovery-call?fbclid=IwY2xjawSdjk1leHRuA2FlbQIxMABicmlkETFMaUpQZllqVG1UaW10VU9Yc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrH3vHfYcZAlwsnYiz0ZNjnliDAhYu-7RjKjJDdPgi3jzfm864kztN8NmZuY_aem_PwKWf1vFWDQmfXykDyPT0g&user=nexvoyagecollective"

const STEPS = [  
  {  
    id: 'intro',  
    message: "I am Rachel, your Lead Analyst. Initiating secure manifest build for the NexVoyage Collective.",  
    field: null  
  },  
  {  
    id: 'name',  
    message: "To begin, how shall I address you in our secure records?",  
    label: "Identity",  
    type: "text",  
    placeholder: "E.g., Alexander Sterling"  
  },  
  {  
    id: 'aviation',  
    message: "Specify your preferred aviation protocol for this journey.",  
    label: "Aviation Class",  
    type: "choice",  
    options: ["Private Aviation", "First Class", "Business Class", "Economy / Other"]  
  },  
  {  
    id: 'logistics_origin',  
    message: "What is your primary departure airport?",  
    label: "Port of Origin",  
    type: "text",  
    placeholder: "E.g., JFK, VKO, or LHR"  
  },  
  {  
    id: 'logistics_dates',  
    message: "When do you intend to initiate this orchestration?",  
    label: "Travel Window",  
    type: "text",  
    placeholder: "E.g., Mid-September 2026"  
  },  
  {  
    id: 'consultation',  
    message: "Compatibility verified. I have cleared a priority slot on Mr. Clark's schedule for a discovery orchestration.",  
    label: "Schedule Discovery",  
    type: "choice",  
    options: ["Access Priority Calendar", "Manual Follow-up Required"]  
  },  
  {  
    id: 'contact_email',  
    message: "I require a secure email address to transmit your manifest details.",  
    label: "Secure Email",  
    type: "email",  
    placeholder: "name@domain.com"  
  },  
  {  
    id: 'contact_phone',  
    message: "Finally, provide a direct line for urgent coordination.",  
    label: "Direct Line",  
    type: "tel",  
    placeholder: "+1 (555) 000-0000"  
  }  
]

export default function InvitationPage() {  
  const [currentStep, setCurrentStep] = useState(0)  
  const [formData, setFormData] = useState<Record<string, string>>({})  
  const [inputValue, setInputValue] = useState('')  
  const [isProcessing, setIsProcessing] = useState(false)  
  const [showCalLink, setShowCalLink] = useState(false)

  const step = STEPS[currentStep]

  const handleNext = (val?: string) => {  
    const finalVal = val || inputValue  
    if (step.id !== 'intro' && !finalVal && step.type !== 'choice') return  
      
    if (step.id !== 'intro') {  
      setFormData(prev => ({ ...prev, [step.id]: finalVal }))  
    }

    if (step.id === 'consultation' && finalVal === "Access Priority Calendar") {  
      setShowCalLink(true)  
      return   
    }

    if (currentStep < STEPS.length - 1) {  
      setIsProcessing(true)  
      setTimeout(() => {  
        setCurrentStep(prev => prev + 1)  
        setInputValue('')  
        setShowCalLink(false)  
        setIsProcessing(false)  
      }, 900)  
    } else {  
      console.log("Final Manifest Data:", formData)  
      alert("Manifest Transmitted. Rachel is finalizing the dossier.")  
    }  
  }

  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-stone-200 flex flex-col items-center justify-center p-6">  
      <div className="max-w-xl w-full">  
        {/* Rachel Status Header */}  
        <div className="flex items-center justify-between mb-16 border-b border-stone-800 pb-4">  
          <div className="text-[10px] uppercase tracking-[0.4em] text-stone-500 flex items-center gap-2">  
            <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full animate-pulse shadow-[0_0_8px_#c5a059]" />  
            Rachel AI // Lead Analyst  
          </div>  
          <div className="text-[10px] uppercase tracking-[0.2em] text-stone-700">  
            SECURE_ID: {Math.random().toString(36).substring(7).toUpperCase()}  
          </div>  
        </div>

        <div className="min-h-[400px] flex flex-col justify-center">  
          {isProcessing ? (  
            <div className="space-y-6">  
              <div className="text-stone-500 text-[10px] uppercase tracking-[0.5em] animate-pulse">  
                Analyzing Logistics...  
              </div>  
              <div className="h-[1px] bg-stone-900 w-full">  
                <div className="h-full bg-[#c5a059] w-1/3 animate-[shimmer_2s_infinite]" />  
              </div>  
            </div>  
          ) : (  
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">  
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-stone-100">  
                "{step.message}"  
              </p>

              <div className="space-y-8">  
                {step.type === 'choice' ? (  
                  <div className="flex flex-col gap-3">  
                    {step.options?.map(opt => (  
                      <button  
                        key={opt}  
                        onClick={() => handleNext(opt)}  
                        className="w-full text-left px-6 py-5 border border-stone-800 text-[10px] uppercase tracking-[0.4em] text-stone-400 hover:border-[#c5a059] hover:text-[#c5a059] transition-all bg-stone-900/10"  
                      >  
                        {opt}  
                      </button>  
                    ))}  
                  </div>  
                ) : step.field !== null ? (  
                  <div className="space-y-4">  
                    <label className="block text-[10px] uppercase tracking-[0.4em] text-[#c5a059]">  
                      {step.label}  
                    </label>  
                    <input  
                      autoFocus  
                      type={step.type}  
                      value={inputValue}  
                      onChange={(e) => setInputValue(e.target.value)}  
                      onKeyDown={(e) => e.key === 'Enter' && handleNext()}  
                      placeholder={step.placeholder}  
                      className="w-full bg-transparent border-b border-stone-800 py-4 text-xl focus:outline-none focus:border-[#c5a059] transition-colors placeholder:text-stone-800 font-light text-stone-100"  
                    />  
                  </div>  
                ) : null}

                {showCalLink && (  
                  <div className="mt-8 p-8 border border-[#c5a059]/30 bg-[#c5a059]/5 animate-in zoom-in-95 duration-500 text-center">  
                    <p className="text-stone-400 text-[10px] uppercase tracking-[0.3em] mb-6">Discovery Session Authorized</p>  
                    <a   
                      href={CAL_LINK}  
                      target="_blank"   
                      className="inline-block px-10 py-4 bg-[#c5a059] text-stone-950 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-stone-100 transition-all"  
                    >  
                      Open Calendar  
                    </a>  
                    <button   
                      onClick={() => handleNext("Access Priority Calendar")}  
                      className="block mx-auto mt-8 text-[9px] uppercase tracking-[0.3em] text-stone-600 hover:text-stone-300"  
                    >  
                      Proceed to Final Verification  
                    </button>  
                  </div>  
                )}  
              </div>

              {!showCalLink && (step.type === 'text' || step.type === 'email' || step.type === 'tel' || step.id === 'intro') && (  
                <button  
                  onClick={() => handleNext()}  
                  className="text-[10px] uppercase tracking-[0.6em] text-[#c5a059] hover:text-stone-100 transition-colors pt-6 border-t border-stone-900 w-full text-left"  
                >  
                  {step.id === 'intro' ? "Begin Verification" : "Transmit Protocol →"}  
                </button>  
              )}  
            </div>  
          )}  
        </div>  
      </div>  
    </main>  
  )  
}  
