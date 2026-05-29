import React from 'react';

export default function PrivacyPage() {  
  return (  
    <main className="min-h-screen bg-[#F5F5F0] text-[#2D2D2D] py-32 px-6">  
      <div className="max-w-3xl mx-auto">  
        <h1 className="text-4xl font-serif mb-12 tracking-tight">Privacy Policy</h1>  
        <div className="prose prose-stone max-w-none font-light leading-relaxed space-y-8 text-[#555555]">  
          <p><strong>Effective Date:</strong> May 29, 2026</p>  
          <section>  
            <h2 className="text-xl font-serif text-[#2D2D2D]">1. Information We Collect</h2>  
            <p>We collect personal identifiers (passport, contact details), travel preferences, and safety data to provide a bespoke, secure experience.</p>  
          </section>  
          <section>  
            <h2 className="text-xl font-serif text-[#2D2D2D]">2. Data Sharing</h2>  
            <p>Information is shared only with necessary service providers and vetted security partners with your explicit consent. We never sell your data.</p>  
          </section>  
          {/* ... Full content from Linda's draft ... */}  
        </div>  
      </div>  
    </main>  
  );  
}  
