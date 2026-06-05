"use client"

import Link from 'next/link'  
import Navigation from '@/app/Navigation'  
import Footer from '@/app/Footer'

export default function SuccessPage() {  
  return (  
    <main className="bg-black text-white min-h-screen flex flex-col">  
      <Navigation />  
        
      <div className="flex-grow flex flex-col items-center justify-center px-8 text-center">  
        <div className="max-w-2xl space-y-8">  
          {/* Minimalist Success Icon */}  
          <div className="flex justify-center mb-12">  
            <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center animate-pulse">  
              <svg   
                width="24"   
                height="24"   
                viewBox="0 0 24 24"   
                fill="none"   
                stroke="currentColor"   
                strokeWidth="1"   
                strokeLinecap="round"   
                strokeLinejoin="round"  
              >  
                <path d="M20 6L9 17l-5-5" />  
              </svg>  
            </div>  
          </div>

          <h1 className="text-5xl md:text-7xl font-light tracking-[0.2em] uppercase leading-tight">  
            Voyage <br /> Initiated  
          </h1>  
            
          <div className="space-y-4 pt-8">  
            <p className="text-gray-400 text-lg font-light tracking-wide">  
              Your inquiry has been received.  
            </p>  
            <p className="text-gray-500 text-sm tracking-[0.1em] uppercase">  
              Our concierge team will reach out within 24 hours.  
            </p>  
          </div>

          <div className="pt-16">  
            <Link   
              href="/"  
              className="inline-block border border-white/20 px-12 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"  
            >  
              Return to Sanctuary  
            </Link>  
          </div>  
        </div>  
      </div>

      <Footer />  
    </main>  
  )  
}  
