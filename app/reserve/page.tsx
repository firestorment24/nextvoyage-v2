'use client'

import { useState, Suspense } from 'react'  
import { useSearchParams } from 'next/navigation'  
import Link from 'next/link'

const SANCTUARIES = [  
  { id: 'brass-shadow', name: 'Brass & Shadow' },  
  { id: 'azure-heights', name: 'Azure Heights' },  
  { id: 'velvet-pines', name: 'Velvet Pines' },  
]

function ReserveFormContent() {  
  const searchParams = useSearchParams()  
  const sanctuaryId = searchParams.get('id')

  const [selectedSanctuary, setSelectedSanctuary] = useState(  
    SANCTUARIES.find(s => s.id === sanctuaryId)?.name || 'General Inquiry'  
  )

  const [formData, setFormData] = useState({  
    name: '',  
    email: '',  
    phone: '',  
    guests: '2',  
    dates: '',  
    occasion: '',  
    interests: '',  
    narrative: '',  
  })

  const [submitted, setSubmitted] = useState(false)  
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault()  
    setLoading(true)

    try {  
      const response = await fetch('/api/send', {  
        method: 'POST',  
        headers: {  
          'Content-Type': 'application/json',  
        },  
        body: JSON.stringify({  
          ...formData,  
          sanctuary: selectedSanctuary,  
        }),  
      })

      if (response.ok) {  
        setSubmitted(true)  
      } else {  
        const errorData = await response.json()  
        alert(`Error sending inquiry: ${errorData.error || 'Unknown error'}`)  
      }  
    } catch (err) {  
      console.error('Submission error:', err)  
      alert('Failed to send inquiry. Please check your connection.')  
    } finally {  
      setLoading(false)  
    }  
  }

  if (submitted) {  
    return (  
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">  
        <h1 className="text-3xl font-light mb-4 text-[#1A1A1A]">Voyage Initiated</h1>  
        <p className="text-gray-500 max-w-md mx-auto mb-8">  
          Thank you, {formData.name}. Our concierge team has received your inquiry for {selectedSanctuary}.   
          Check your inbox for a confirmation.  
        </p>  
        <Link href="/" className="text-xs uppercase tracking-widest border-b border-black pb-1">  
          Return to Collection  
        </Link>  
      </div>  
    )  
  }

  return (  
    <form onSubmit={handleSubmit} className="space-y-12">  
      {/* 01. The Sanctuary */}  
      <section>  
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-medium">01. The Sanctuary</h2>  
        <div className="border-b border-gray-200 pb-2">  
          <select   
            className="w-full bg-transparent text-xl font-light focus:outline-none appearance-none cursor-pointer text-[#1A1A1A]"  
            value={selectedSanctuary}  
            onChange={(e) => setSelectedSanctuary(e.target.value)}  
          >  
            <option value="General Inquiry">General Inquiry</option>  
            {SANCTUARIES.map(s => (  
              <option key={s.id} value={s.name}>{s.name}</option>  
            ))}  
          </select>  
        </div>  
      </section>

      {/* 02. The Journey */}  
      <section>  
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-medium">02. The Journey</h2>  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
          <div className="border-b border-gray-200 pb-2">  
            <label className="block text-[10px] uppercase tracking-tighter text-gray-400 mb-1">Desired Timing</label>  
            <input   
              type="text"   
              placeholder="e.g. Late September 2026"  
              className="w-full bg-transparent text-lg font-light focus:outline-none"  
              onChange={(e) => setFormData({...formData, dates: e.target.value})}  
              required  
            />  
          </div>  
          <div className="border-b border-gray-200 pb-2">  
            <label className="block text-[10px] uppercase tracking-tighter text-gray-400 mb-1">Guest Count</label>  
            <input   
              type="number"   
              placeholder="2"  
              className="w-full bg-transparent text-lg font-light focus:outline-none"  
              onChange={(e) => setFormData({...formData, guests: e.target.value})}  
            />  
          </div>  
        </div>  
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">  
          <div className="border-b border-gray-200 pb-2">  
            <label className="block text-[10px] uppercase tracking-tighter text-gray-400 mb-1">Occasion</label>  
            <select   
              className="w-full bg-transparent text-lg font-light focus:outline-none appearance-none"  
              onChange={(e) => setFormData({...formData, occasion: e.target.value})}  
            >  
              <option value="">Select an occasion...</option>  
              <option value="Leisure">Leisure</option>  
              <option value="Anniversary">Anniversary</option>  
              <option value="Honeymoon">Honeymoon</option>  
              <option value="Wellness">Wellness Retreat</option>  
              <option value="Celebration">Special Celebration</option>  
            </select>  
          </div>  
          <div className="border-b border-gray-200 pb-2">  
            <label className="block text-[10px] uppercase tracking-tighter text-gray-400 mb-1">Interests</label>  
            <input   
              type="text"   
              placeholder="e.g. Culinary, Yachting, Art"  
              className="w-full bg-transparent text-lg font-light focus:outline-none"  
              onChange={(e) => setFormData({...formData, interests: e.target.value})}  
            />  
          </div>  
        </div>  
      </section>

      {/* 03. The Narrative */}  
      <section>  
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-medium">03. The Narrative</h2>  
        <div className="border-b border-gray-200 pb-4">  
          <textarea   
            placeholder="Share any specific requirements or dreams for this voyage..."  
            className="w-full bg-transparent text-lg font-light focus:outline-none min-h-[100px] resize-none"  
            onChange={(e) => setFormData({...formData, narrative: e.target.value})}  
          />  
        </div>  
      </section>

      {/* 04. Contact Information */}  
      <section>  
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-medium">04. Contact Information</h2>  
        <div className="space-y-8">  
          <div className="border-b border-gray-200 pb-2">  
            <input   
              type="text"   
              placeholder="Full Name"  
              className="w-full bg-transparent text-lg font-light focus:outline-none"  
              onChange={(e) => setFormData({...formData, name: e.target.value})}  
              required  
            />  
          </div>  
          <div className="border-b border-gray-200 pb-2">  
            <input   
              type="email"   
              placeholder="Email Address"  
              className="w-full bg-transparent text-lg font-light focus:outline-none"  
              onChange={(e) => setFormData({...formData, email: e.target.value})}  
              required  
            />  
          </div>  
        </div>  
      </section>

      <div className="pt-8">  
        <button   
          type="submit"  
          disabled={loading}  
          className="w-full md:w-auto px-12 py-4 bg-black text-white text-xs uppercase tracking-[0.3em] hover:bg-gray-900 transition-colors disabled:opacity-50"  
        >  
          {loading ? 'Sending...' : 'Begin the Conversation'}  
        </button>  
        <p className="mt-4 text-[10px] text-gray-400 text-center md:text-left">  
          By submitting, you agree to our private travel consultation terms.  
        </p>  
      </div>  
    </form>  
  )  
}

export default function ReservePage() {  
  return (  
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] font-sans pb-20">  
      <nav className="p-8 flex justify-between items-center">  
        <Link href="/" className="text-lg tracking-[0.2em] font-light uppercase">  
          NexVoyage  
        </Link>  
      </nav>

      <main className="max-w-2xl mx-auto px-6 mt-12">  
        <header className="mb-12">  
          <h1 className="text-4xl font-light mb-4 tracking-tight">Travel Inquiry</h1>  
          <p className="text-gray-500 font-light">  
            Tell us about the journey you’re envisioning. We specialize in curating   
            extraordinary experiences for the discerning traveler.  
          </p>  
        </header>

        <Suspense fallback={<div className="text-gray-400 uppercase tracking-widest text-xs italic">Preparing Inquiry Form...</div>}>  
          <ReserveFormContent />  
        </Suspense>  
      </main>  
    </div>  
  )  
}  
