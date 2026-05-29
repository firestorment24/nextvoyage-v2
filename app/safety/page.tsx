import React from 'react';

export default function SafetyCommitment() {  
  return (  
    <main className="min-h-screen bg-[#F5F5F0] text-[#2C2C2C] font-serif">  
      <div className="max-w-3xl mx-auto px-6 py-24">  
        <h1 className="text-4xl md:text-5xl mb-12 tracking-tight text-red-900/80">Impact & Safety</h1>  
          
        <div className="prose prose-stone prose-lg font-sans text-neutral-600">  
          <h2 className="text-xl font-serif text-[#2C2C2C] mt-12 mb-4 uppercase tracking-widest">Our Commitment to Safety</h2>  
          <p className="mb-6">We work exclusively with vetted, professional security firms and local operators who meet our high standards. We provide up-to-date travel advisories for every Sanctuary journey.</p>

          <h2 className="text-xl font-serif text-[#2C2C2C] mt-12 mb-4 uppercase tracking-widest">Operational Transparency</h2>  
          <p className="mb-6">We will never share sensitive travel itineraries or location data with third-party security firms without your prior, written consent.</p>

          <div className="mt-20 pt-8 border-t border-neutral-300 text-center italic">  
            <p className="text-sm tracking-widest text-neutral-400 font-serif uppercase">Where luxury meets legacy.</p>  
          </div>  
        </div>  
      </div>  
    </main>  
  );  
}  
