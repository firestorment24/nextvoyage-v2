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
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({ ...formData, sanctuary: selectedSanctuary }),  
      })  
      if (response.ok) setSubmitted(true)  
    } catch (err) {  
      console.error(err)  
    } finally {  
      setLoading(false)  
    }  
  }

  if (submitted) {  
    return (  
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-700">  
        <div className="w-16 h-[1px] bg-black mb-8"></div>  
        <h1 className="text-4xl font-light mb-6 tracking-tight italic">Voyage Initiated</h1>  
        <p className="text-gray-500 max-w-sm mx-auto mb-12 font-light leading-relaxed">  
          The details of your journey have been received. Our concierge will curate a response for you shortly.  
        </p>  
        <Link href="/" className="text-[10px] uppercase tracking-[0.4em] border-b border-black/20 pb-2 hover:border-black transition-colors">  
          Return to Collection  
        </Link>  
      </div>  
    )  
  }

  return (  
    <form onSubmit={handleSubmit} className="space-y-20 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-1000">  
        
      {/* 01. The Destination */}  
      <section className="group">  
        <div className="flex items-baseline gap-4 mb-10">  
          <span className="text-[10px] font-medium tracking-[0.3em] text-gray-400">01</span>  
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-semibold">The Sanctuary</h2>  
        </div>  
        <div className="relative border-b border-gray-200 group-focus-within:border-black transition-colors duration-500 pb-4">  
          <select   
            className="w-full bg-transparent text-3xl font-light focus:outline-none appearance-none cursor-pointer text-[#1A1A1A]"  
            value={selectedSanctuary}  
            onChange={(e) => setSelectedSanctuary(e.target.value)}  
          >  
            <option value="General Inquiry">General Inquiry</option>  
            {SANCTUARIES.map(s => (  
              <option key={s.id} value={s.name}>{s.name}</option>  
            ))}  
          </select>  
          <div className="absolute right-0 bottom-6 pointer-events-none opacity-30">  
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 4.5L6 9.5L11 4.5" stroke="black" strokeWidth="1"/></svg>  
          </div>  
        </div>  
      </section>

      {/* 02. The Journey */}  
      <section>  
        <div className="flex items-baseline gap-4 mb-10">  
          <span className="text-[10px] font-medium tracking-[0.3em] text-gray-400">02</span>  
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-semibold">The Logistics</h2>  
        </div>  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">  
          <div className="group relative border-b border-gray-200 group-focus-within:border-black transition-colors duration-500 pb-2">  
            <label className="block text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-2">Timing</label>  
            <input   
              type="text" placeholder="Season or Dates"  
              className="w-full bg-transparent text-lg font-light focus:outline-none placeholder:text-gray-200"  
              onChange={(e) => setFormData({...formData, dates: e.target.value})}  
              required  
            />  
          </div>  
          <div className="group relative border-b border-gray-200 group-focus-within:border-black transition-colors duration-500 pb-2">  
            <label className="block text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-2">Party Size</label>  
            <input   
              type="number" placeholder="2"  
              className="w-full bg-transparent text-lg font-light focus:outline-none placeholder:text-gray-200"  
              onChange={(e) => setFormData({...formData, guests: e.target.value})}  
            />  
          </div>  
        </div>  
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">  
          <div className="group relative border-b border-gray-200 group-focus-within:border-black transition-colors duration-500 pb-2">  
            <label className="block text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-2">Occasion</label>  
            <select   
              className="w-full bg-transparent text-lg font-light focus:outline-none appearance-none"  
              onChange={(e) => setFormData({...formData, occasion: e.target.value})}  
            >  
              <option value="">Leisure / Celebration</option>  
              <option value="Anniversary">Anniversary</option>  
              <option value="Honeymoon">Honeymoon</option>  
              <option value="Wellness">Wellness</option>  
            </select>  
          </div>  
          <div className="group relative border-b border-gray-200 group-focus-within:border-black transition-colors duration-500 pb-2">  
            <label className="block text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-2">Aspirations</label>  
            <input   
              type="text" placeholder="Culinary, Wellness, Adventure"  
              className="w-full bg-transparent text-lg font-light focus:outline-none placeholder:text-gray-200"  
              onChange={(e) => setFormData({...formData, interests: e.target.value})}  
            />  
          </div>  
        </div>  
      </section>

      {/* 03. The Narrative */}  
      <section className="group">  
        <div className="flex items-baseline gap-4 mb-10">  
          <span className="text-[10px] font-medium tracking-[0.3em] text-gray-400">03</span>  
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-semibold">The Narrative</h2>  
        </div>  
        <div className="border-b border-gray-200 group-focus-within:border-black transition-colors duration-500 pb-6">  
          <textarea   
            placeholder="Describe the atmosphere you wish to experience..."  
            className="w-full bg-transparent text-xl font-light focus:outline-none min-h-[120px] resize-none placeholder:text-gray-200 leading-relaxed"  
            onChange={(e) => setFormData({...formData, narrative: e.target.value})}  
          />  
        </div>  
      </section>

      {/* 04. Identity */}  
      <section>  
        <div className="flex items-baseline gap-4 mb-10">  
          <span className="text-[10px] font-medium tracking-[0.3em] text-gray-400">04</span>  
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-semibold">Identity</h2>  
        </div>  
        <div className="space-y-16">  
          <div className="group border-b border-gray-200 group-focus-within:border-black transition-colors duration-500 pb-2">  
            <input   
              type="text" placeholder="Your Name"  
              className="w-full bg-transparent text-xl font-light focus:outline-none placeholder:text-gray-200"  
              onChange={(e) => setFormData({...formData, name: e.target.value})}  
              required  
            />  
          </div>  
          <div className="group border-b border-gray-200 group-focus-within:border-black transition-colors duration-500 pb-2">  
            <input   
              type="email" placeholder="Email Address"  
              className="w-full bg-transparent text-xl font-light focus:outline-none placeholder:text-gray-200"  
              onChange={(e) => setFormData({...formData, email: e.target.value})}  
              required  
            />  
          </div>  
        </div>  
      </section>

      <div className="pt-12 flex flex-col items-center md:items-start">  
        <button   
          type="submit"  
          disabled={loading}  
          className="group relative px-16 py-6 overflow-hidden border border-black transition-all duration-500 hover:bg-black"  
        >  
          <span className="relative z-10 text-[10px] uppercase tracking-[0.5em] text-black group-hover:text-white transition-colors duration-500">  
            {loading ? 'Transmitting...' : 'Begin the Conversation'}  
          </span>  
        </button>  
      </div>  
    </form>  
  )  
}

export default function ReservePage() {  
  return (  
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-black selection:text-white">  
      {/* Editorial Header */}  
      <header className="p-10 flex justify-between items-start">  
        <Link href="/" className="text-xl tracking-[0.3em] font-extralight uppercase border-b border-transparent hover:border-black transition-all">  
          NexVoyage  
        </Link>  
        <div className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-gray-400 text-right">  
          Curated Travel <br /> Collective  
        </div>  
      </header>

      <main className="max-w-3xl mx-auto px-8 mt-24">  
        <div className="mb-24">  
          <h1 className="text-6xl md:text-7xl font-extralight tracking-tighter mb-8 leading-tight italic">  
            Inquiry  
          </h1>  
          <div className="w-12 h-[1px] bg-black/20 mb-8"></div>  
          <p className="text-gray-500 font-light max-w-md leading-relaxed text-sm">  
            We invite you to share the vision for your next voyage. Our team specializes in the exceptional, ensuring every detail is a masterpiece of curation.  
          </p>  
        </div>

        <Suspense fallback={<div className="animate-pulse text-[10px] uppercase tracking-widest italic">Preparing Dossier...</div>}>  
          <ReserveFormContent />  
        </Suspense>  
      </main>  
    </div>  
  )  
}  
