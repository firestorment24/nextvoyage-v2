'use client'

import { useState, useEffect } from 'react'  
import Link from 'next/link'

const STEPS = [  
  {  
    id: 'intro',  
    message: "I am Rachel, your Lead Analyst. I have been assigned to vet your inquiry for the NexVoyage Collective.",  
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
    id: 'context',  
    message: "What is the primary occasion for this sanctuary visit? We specialize in legacy milestones and high-stakes retreats.",  
    label: "Occasion",  
    type: "text",  
    placeholder: "E.g., Multi-Generational Milestone"  
  },  
  {  
    id: 'logistics',  
    message: "Shall I prioritize private aviation protocols, or do you require commercial first-class coordination?",  
    label: "Logistics Preference",  
    type: "select",  
    options: ["Private Aviation", "Commercial First-Class", "TBD"]  
  },  
  {  
    id: 'consultation',  
    message: "My analysis indicates a high compatibility. Would you like to secure a priority consultation with Mr. Clark now, or shall I have a representative contact you later?",  
    label: "Consultation Protocol",  
    type: "choice",  
    options: ["Schedule Priority Call", "Contact Me Later"]  
  },  
  {  
    id: 'final',  
    message: "Protocol accepted. Please provide your secure contact detail to finalize this transmission.",  
    label: "Secure Email",  
    type: "email",  
    placeholder: "name@domain.com"  
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

    // Special logic for scheduling  
    if (step.id === 'consultation' && finalVal === "Schedule Priority Call") {  
      setShowCalLink(true)  
      return // Keep them on this step to see the link  
    }

    if (currentStep < STEPS.length - 1) {  
      setIsProcessing(true)  
      setTimeout(() => {  
        setCurrentStep(prev => prev + 1)  
        setInputValue('')  
        setShowCalLink(false)  
        setIsProcessing(false)  
      }, 1000)  
    } else {  
      alert("Inquiry transmitted. Rachel is finalizing your dossier.")  
    }  
  }

  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-stone-200 flex flex-col items-center justify-center p-6">  
      <div className="max-w-xl w-full">  
        <div className="flex items-center justify-between mb-12 border-b border-stone-800 pb-4">  
          <div className="text-[10px] uppercase tracking-[0.4em] text-stone-500 flex items-center gap-2">  
            <span className="w-2 h-2 bg-[#c5a059] rounded-full animate-pulse" />  
            Rachel AI // Lead Analyst  
          </div>  
          <Link href="/" className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] hover:opacity-50">  
            Exit  
          </Link>  
        </div>

        <div className="min-h-[350px] flex flex-col justify-center">  
          {isProcessing ? (  
            <div className="space-y-4">  
              <div className="text-stone-500 text-[10px] uppercase tracking-[0.5em] animate-pulse">  
                Analyzing Compatibility...  
              </div>  
              <div className="h-[1px] bg-stone-900 w-full overflow-hidden">  
                <div className="h-full bg-[#c5a059] w-1/2 animate-shimmer" />  
              </div>  
            </div>  
          ) : (  
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">  
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-stone-100 italic">  
                "{step.message}"  
              </p>

              {step.field !== null && (  
                <div className="space-y-6">  
                  {step.type === 'select' || step.type === 'choice' ? (  
                    <div className="flex flex-col gap-3">  
                      {step.options?.map(opt => (  
                        <button  
                          key={opt}  
                          onClick={() => handleNext(opt)}  
                          className="w-full text-left px-6 py-4 border border-stone-800 text-[10px] uppercase tracking-[0.3em] text-stone-400 hover:border-[#c5a059] hover:text-stone-100 transition-all group"  
                        >  
                          <span className="opacity-0 group-hover:opacity-100 mr-4 transition-opacity">→</span>  
                          {opt}  
                        </button>  
                      ))}  
                    </div>  
                  ) : (  
                    <div className="space-y-4">  
                      <label className="block text-[10px] uppercase tracking-[0.3em] text-[#c5a059]">  
                        {step.label}  
                      </label>  
                      <input  
                        autoFocus  
                        type={step.type}  
                        value={inputValue}  
                        onChange={(e) => setInputValue(e.target.value)}  
                        onKeyDown={(e) => e.key === 'Enter' && handleNext()}  
                        placeholder={step.placeholder}  
                        className="w-full bg-transparent border-b border-stone-800 py-4 text-xl focus:outline-none focus:border-[#c5a059] transition-colors placeholder:text-stone-700 font-light"  
                      />  
                    </div>  
                  )}

                  {showCalLink && (  
                    <div className="mt-8 p-6 border border-[#c5a059]/30 bg-[#c5a059]/5 animate-in zoom-in-95 duration-500">  
                      <p className="text-stone-400 text-sm mb-4">Priority Calendar Access Granted:</p>  
                      <a   
                        href="https://cal.com/daryl-clark"   
                        target="_blank"   
                        className="inline-block text-[#c5a059] text-lg font-light border-b border-[#c5a059] pb-1 hover:text-stone-100 hover:border-stone-100 transition-all"  
                      >  
                        Open Discovery Calendar  
                      </a>  
                      <button   
                        onClick={() => handleNext("Schedule Priority Call")}  
                        className="block mt-6 text-[10px] uppercase tracking-widest text-stone-500 hover:text-stone-300"  
                      >  
                        Continue to Final Step  
                      </button>  
                    </div>  
                  )}  
                </div>  
              )}

              {!showCalLink && (step.type === 'text' || step.type === 'email' || step.id === 'intro') && (  
                <button  
                  onClick={() => handleNext()}  
                  className="text-[10px] uppercase tracking-[0.5em] text-[#c5a059] hover:text-stone-100 transition-colors pt-4 flex items-center gap-4"  
                >  
                  {step.id === 'intro' ? "Acknowledge" : "Execute Protocol"}  
                  <span className="text-lg">→</span>  
                </button>  
              )}  
            </div>  
          )}  
        </div>  
      </div>  
    </main>  
  )  
}  
