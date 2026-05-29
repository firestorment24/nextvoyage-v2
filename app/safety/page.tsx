import React from 'react';

export default function SafetyPage() {  
  return (  
    <main className="min-h-screen bg-[#F5F5F0] text-[#2D2D2D] py-32 px-6">  
      <div className="max-w-3xl mx-auto">  
        <h1 className="text-4xl font-serif mb-12 tracking-tight">Client & Data Consent</h1>  
        <div className="prose prose-stone max-w-none font-light leading-relaxed space-y-8 text-[#555555]">  
          <p className="italic">Simple, Secure, Consensual.</p>  
          <section>  
            <h2 className="text-xl font-serif text-[#2D2D2D]">Explicit Consent for Security Services</h2>  
            <p>We will never share your location or travel details with third-party security firms without your explicit approval.</p>  
          </section>  
        </div>  
      </div>  
    </main>  
  );  
}  
