// app/roi-of-rest/page.tsx  
'use client'

import React, { useState } from 'react'

export default function ROIPage() {  
  const [email, setEmail] = useState('')  
  const [status, setStatus] = useState('idle') // idle, loading, success

  const handleDownload = async (e: React.FormEvent) => {  
    e.preventDefault()  
    setStatus('loading')  
    // Simulate lead capture  
    setTimeout(() => setStatus('success'), 1500)  
  }

  return (  
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">  
      <div className="max-w-md w-full text-center space-y-12">  
        <header className="space-y-4">  
          <h1 className="text-4xl font-light tracking-tight">The ROI of Rest</h1>  
          <p className="text-gray-500 font-light leading-relaxed">  
            A metric-driven guide to why elite travelers are prioritizing "High-Performance Sanctuary" over standard luxury.  
          </p>  
        </header>

        {status === 'success' ? (  
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">  
            <p className="text-sm italic">"The guide has been sent to your inbox. High performance starts with the right recovery."</p>  
          </div>  
        ) : (  
          <form onSubmit={handleDownload} className="space-y-6">  
            <input   
              type="email"   
              required  
              placeholder="name@email.com"  
              className="w-full bg-transparent border-b border-gray-200 py-3 text-center focus:outline-none focus:border-black transition-colors"  
              onChange={(e) => setEmail(e.target.value)}  
            />  
            <button   
              type="submit"  
              disabled={status === 'loading'}  
              className="w-full bg-black text-white py-4 text-xs uppercase tracking-widest hover:bg-gray-900 transition-all disabled:opacity-50"  
            >  
              {status === 'loading' ? 'Preparing Access...' : 'Request the Guide'}  
            </button>  
          </form>  
        )}

        <footer className="pt-12 text-[10px] uppercase tracking-[0.2em] text-gray-300">  
          NexVoyage Collective &copy; 2026  
        </footer>  
      </div>  
    </div>  
  )  
}  
