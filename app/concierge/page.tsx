'use client'

import { useState } from 'react'  
import Navigation from '../Navigation'  
import Footer from '../Footer'

export default function ConciergePage() {  
  const [formData, setFormData] = useState({  
    objective: 'Private Sanctuary',  
    narrative: '',  
    name: '',  
    email: '',  
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {  
    const { name, value } = e.target  
    setFormData(prev => ({ ...prev, [name]: value }))  
  }

  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault()  
    setStatus('sending')

    try {  
      const response = await fetch('/api/send', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify(formData),  
      })

      if (response.ok) {  
        setStatus('success')  
        setFormData({ objective: 'Private Sanctuary', narrative: '', name: '', email: '' })  
      } else {  
        setStatus('error')  
      }  
    } catch (err) {  
      setStatus('error')  
    }  
  }

  return (  
    <main className="bg-[#0A0A0A] text-white min-h-screen font-light selection:bg-white selection:text-black">  
      <Navigation />  
        
      <div className="max-w-4xl mx-auto px-6 py-32">  
        <header className="mb-20">  
          <h1 className="text-5xl font-extralight tracking-tighter mb-4">Direct Access</h1>  
          <p className="text-gray-500 uppercase tracking-[0.2em] text-xs">Initiate Discovery</p>  
        </header>

        {status === 'success' ? (  
          <div className="py-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">  
            <h2 className="text-2xl mb-4">Inquiry Received.</h2>  
            <p className="text-gray-400">A member of the collective will reach out shortly.</p>  
            <button   
              onClick={() => setStatus('idle')}  
              className="mt-8 text-xs uppercase tracking-widest border-b border-gray-800 pb-1 hover:border-white transition-colors"  
            >  
              Send another inquiry  
            </button>  
          </div>  
        ) : (  
          <form onSubmit={handleSubmit} className="space-y-24">  
            {/* 01 / Objective */}  
            <section>  
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-8">01 / Primary Objective</h2>  
              <div className="flex flex-wrap gap-3">  
                {['Private Sanctuary', 'Strategic Travel', 'Corporate Retreat', 'Relocation'].map((opt) => (  
                  <button  
                    key={opt}  
                    type="button"  
                    onClick={() => setFormData(prev => ({ ...prev, objective: opt }))}  
                    className={`px-8 py-3 text-xs uppercase tracking-widest transition-all duration-500 border ${  
                      formData.objective === opt   
                        ? 'border-white bg-white text-black'   
                        : 'border-gray-900 text-gray-500 hover:border-gray-700'  
                    }`}  
                  >  
                    {opt}  
                  </button>  
                ))}  
              </div>  
            </section>

            {/* 02 / Narrative */}  
            <section>  
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-4">02 / Narrative & Requirements</h2>  
              <textarea  
                name="narrative"  
                value={formData.narrative}  
                onChange={handleInputChange}  
                placeholder="Describe the nature of your request..."  
                className="w-full bg-transparent border-b border-gray-900 py-6 focus:outline-none focus:border-white transition-all duration-700 min-h-[120px] resize-none text-lg font-extralight placeholder:text-gray-800"  
                required  
              />  
            </section>

            {/* 03 / Identity */}  
            <section>  
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-4">03 / Contact Identity</h2>  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
                <input  
                  type="text"  
                  name="name"  
                  value={formData.name}  
                  onChange={handleInputChange}  
                  placeholder="Legal Name"  
                  className="bg-transparent border-b border-gray-900 py-6 focus:outline-none focus:border-white transition-all duration-700 text-lg font-extralight placeholder:text-gray-800"  
                  required  
                />  
                <input  
                  type="email"  
                  name="email"  
                  value={formData.email}  
                  onChange={handleInputChange}  
                  placeholder="Email Address"  
                  className="bg-transparent border-b border-gray-900 py-6 focus:outline-none focus:border-white transition-all duration-700 text-lg font-extralight placeholder:text-gray-800"  
                  required  
                />  
              </div>  
            </section>

            <div className="pt-12">  
              <button  
                type="submit"  
                disabled={status === 'sending'}  
                className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-5 uppercase tracking-[0.3em] text-[10px] hover:bg-gray-200 transition-all disabled:opacity-50"  
              >  
                {status === 'sending' ? 'Processing...' : 'Request Consultation'}  
              </button>  
                
              {status === 'error' && (  
                <p className="mt-4 text-red-500 text-xs uppercase tracking-widest">Connection error. Please try again.</p>  
              )}  
                
              <p className="mt-8 text-[10px] text-gray-700 uppercase tracking-widest">  
                All inquiries are strictly confidential.  
              </p>  
            </div>  
          </form>  
        )}  
      </div>

      <Footer />  
    </main>  
  )  
}  
