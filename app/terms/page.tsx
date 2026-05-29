import React from 'react';

export default function TermsPage() {  
  return (  
    <main className="min-h-screen bg-[#F5F5F0] text-[#2D2D2D] py-32 px-6">  
      <div className="max-w-3xl mx-auto">  
        <h1 className="text-4xl font-serif mb-12 tracking-tight">Terms & Conditions</h1>  
        <div className="prose prose-stone max-w-none font-light leading-relaxed space-y-8 text-[#555555]">  
          <p><strong>Effective Date:</strong> May 29, 2026</p>  
          <section>  
            <h2 className="text-xl font-serif text-[#2D2D2D]">1. Scope of Services</h2>  
            <p>NexVoyage Collective provides bespoke travel planning and concierge services for high-net-worth individuals.</p>  
          </section>  
          <section>  
            <h2 className="text-xl font-serif text-[#2D2D2D]">2. Liability</h2>  
            <p>NexVoyage Collective is not liable for acts of third-party suppliers or inherent risks of travel.</p>  
          </section>  
        </div>  
      </div>  
    </main>  
  );  
}  
