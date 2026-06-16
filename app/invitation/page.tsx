'use client'

import { useState, useEffect } from 'react'  
import Link from 'next/link'

const STEPS = [  
  {  
    id: 'intro',  
    message: "I am Rachel, your Lead Analyst at NexVoyage. Before we proceed with an orchestration, I must verify the intent of your inquiry.",  
    field: null  
  },  
  {  
    id: 'name',  
    message: "How shall I address you in our records?",  
    label: "Full Name",  
    type: "text",  
    placeholder: "E.g., Alexander Sterling"  
  },  
  {  
    id: 'context',  
    message: "What is the primary occasion for this sanctuary visit? We specialize in legacy milestones and quiet retreats.",  
    label: "Occasion",  
    type: "text",  
    placeholder: "E.g., Family Legacy Milestone"  
  },  
  {  
    id: 'logistics',  
    message: "Shall I prioritize private aviation protocols, or do you require commercial first-class coordination?",  
    label: "Logistics Preference",  
    type: "select",  
    options: ["Private Aviation", "Commercial First-Class", "TBD"]  
  },  
  {  
    id: 'final',  
    message: "Understood. My system will now analyze your request for compatibility. Please provide your secure contact detail.",  
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

  const step = STEPS[currentStep]

  const handleNext = () => {  
    if (step.id !== 'intro' && !inputValue) return  
      
    if (step.id !== 'intro') {  
      setFormData(prev => ({ ...prev, [step.id]: inputValue }))  
    }

    if (currentStep < STEPS.length - 1) {  
      setIsProcessing(true)  
      setTimeout(() => {  
        setCurrentStep(prev => prev + 1)  
        setInputValue('')  
        setIsProcessing(false)  
      }, 800)  
    } else {  
      // Final Submission logic would go here  
      alert("Inquiry transmitted. Rachel is analyzing your compatibility.")  
    }  
  }

  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-stone-200 flex flex-col items-center justify-center p-6">  
      <div className="max-w-xl w-full">  
        {/* Terminal Header */}  
        <div className="flex items-center justify-between mb-12 border-b border-stone-800 pb-4">  
          <div className="text-[10px] uppercase tracking-[0.4em] text-stone-500">  
            System: Rachel AI // Lead Analyst  
          </div>  
          <Link href="/" className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] hover:opacity-50">  
            Exit  
          </Link>  
        </div>

        {/* Content Area */}  
        <div className="min-h-[300px] flex flex-col justify-center">  
          {isProcessing ? (  
            <div className="animate-pulse text-stone-500 text-[10px] uppercase tracking-widest">  
              Rachel is processing...  
            </div>  
          ) : (  
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">  
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-stone-100 italic">  
                "{step.message}"  
              </p>

              {step.field !== null && (  
                <div className="space-y-4">  
                  <label className="block text-[10px] uppercase tracking-[0.3em] text-[#c5a059]">  
                    {step.label}  
                  </label>  
                  {step.type === 'select' ? (  
                    <div className="flex flex-wrap gap-4">  
                      {step.options?.map(opt => (  
                        <button  
                          key={opt}  
                          onClick={() => { setInputValue(opt); handleNext(); }}  
                          className={`px-6 py-3 border text-[10px] uppercase tracking-widest transition-all ${  
                            inputValue === opt ? 'bg-[#c5a059] text-stone-950 border-[#c5a059]' : 'border-stone-800 text-stone-400 hover:border-stone-600'  
                          }`}  
                        >  
                          {opt}  
                        </button>  
                      ))}  
                    </div>  
                  ) : (  
                    <input  
                      autoFocus  
                      type={step.type}  
                      value={inputValue}  
                      onChange={(e) => setInputValue(e.target.value)}  
                      onKeyDown={(e) => e.key === 'Enter' && handleNext()}  
                      placeholder={step.placeholder}  
                      className="w-full bg-transparent border-b border-stone-800 py-4 text-xl focus:outline-none focus:border-[#c5a059] transition-colors placeholder:text-stone-700 font-light"  
                    />  
                  )}  
                </div>  
              )}

              <button  
                onClick={handleNext}  
                className="text-[10px] uppercase tracking-[0.5em] text-[#c5a059] hover:text-stone-100 transition-colors pt-4"  
              >  
                {step.id === 'intro' ? "Proceed" : (currentStep === STEPS.length - 1 ? "Transmit Inquiry" : "Next Protocol")}  
              </button>  
            </div>  
          )}  
        </div>  
      </div>  
    </main>  
  )  
}  
