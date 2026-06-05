"use client"

import { useSearchParams } from 'next/navigation'  
import { properties } from '@/data/properties'  
import Navigation from '@/app/Navigation'  
import Footer from '@/app/Footer'

export default function ReservePage() {  
  const searchParams = useSearchParams()  
  const propertyId = searchParams.get('propertyId')  
    
  const selectedProperty = properties.find(p => p.id === propertyId) || properties[0]

  return (  
    <main className="bg-black text-white min-h-screen">  
      <Navigation />  
        
      <div className="flex flex-col lg:flex-row h-screen pt-20">  
        {/* Cinematic Side */}  
        <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">  
          <img   
            src={selectedProperty.image}   
            alt={selectedProperty.name}  
            className="object-cover w-full h-full opacity-70 transition-transform duration-700 hover:scale-105"  
          />  
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />  
          <div className="absolute bottom-12 left-12">  
            <h2 className="text-4xl font-light tracking-widest uppercase">{selectedProperty.name}</h2>  
            <p className="text-sm tracking-widest opacity-60 mt-2">{selectedProperty.location}</p>  
          </div>  
        </div>

        {/* Form Side */}  
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 py-12">  
          <div className="max-w-md w-full mx-auto">  
            <h1 className="text-3xl font-light tracking-tighter mb-2">Request Your Sanctuary</h1>  
            <p className="text-gray-400 text-sm mb-12">Leave your details and our concierge will finalize your voyage.</p>  
              
            <form className="space-y-8">  
              <div className="group border-b border-gray-800 focus-within:border-white transition-colors py-2">  
                <label className="block text-[10px] uppercase tracking-widest text-gray-500">Full Name</label>  
                <input   
                  type="text"   
                  className="bg-transparent w-full outline-none py-1 font-light"   
                  placeholder="Elias Thorne"  
                />  
              </div>

              <div className="group border-b border-gray-800 focus-within:border-white transition-colors py-2">  
                <label className="block text-[10px] uppercase tracking-widest text-gray-500">Email Address</label>  
                <input   
                  type="email"   
                  className="bg-transparent w-full outline-none py-1 font-light"   
                  placeholder="elias@voyage.com"  
                />  
              </div>

              <div className="grid grid-cols-2 gap-8">  
                <div className="group border-b border-gray-800 focus-within:border-white transition-colors py-2">  
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500">Check In</label>  
                  <input type="date" className="bg-transparent w-full outline-none py-1 font-light invert" />  
                </div>  
                <div className="group border-b border-gray-800 focus-within:border-white transition-colors py-2">  
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500">Check Out</label>  
                  <input type="date" className="bg-transparent w-full outline-none py-1 font-light invert" />  
                </div>  
              </div>

              <button   
                type="submit"  
                className="w-full bg-white text-black py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gray-200 transition-colors"  
              >  
                Inquire Now  
              </button>  
            </form>  
          </div>  
        </div>  
      </div>

      <Footer />  
    </main>  
  )  
}  
