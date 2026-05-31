import React from 'react';

const LegalPage = () => {  
  return (  
    <div className="bg-white text-[#1a1a1a] font-sans min-h-screen">  
      {/* Navigation */}  
      <nav className="flex justify-between items-center px-8 py-10 uppercase tracking-[0.2em] text-[10px] border-b border-gray-50">  
        <div className="font-bold"><a href="/">NexVoyage Collective</a></div>  
        <div className="space-x-8">  
          <a href="/archive" className="hover:text-gray-400">The Archive</a>  
          <a href="/perspective" className="hover:text-gray-400">The Perspective</a>  
          <a href="/reserve" className="hover:text-gray-400 border border-black px-4 py-2">The Reserve</a>  
        </div>  
      </nav>

      <section className="py-24 px-8 max-w-3xl mx-auto">  
        <h1 className="text-4xl font-serif italic mb-16 text-center">Legal Notice</h1>  
          
        <div className="space-y-16 text-sm leading-relaxed text-gray-600">  
          <div>  
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-black mb-6">01. Privacy & Data</h2>  
            <p>  
              Your privacy is our primary asset. NexVoyage Collective operates on a principle of absolute discretion. We do not track user behavior for advertising purposes, nor do we sell data to third parties. All inquiries through The Reserve are encrypted and handled with the highest level of confidentiality.  
            </p>  
          </div>

          <div>  
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-black mb-6">02. The Vetting Standard</h2>  
            <p>  
              NexVoyage Collective acts as a curation and inquiry service. While we apply a rigorous vetting standard to all sanctuaries in The Archive, final bookings and travel arrangements are subject to the specific terms and conditions of the host properties and service providers.  
            </p>  
          </div>

          <div>  
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-black mb-6">03. Intellectual Property</h2>  
            <p>  
              All content under The Perspective and all curated guides within The Archive are the intellectual property of NexVoyage Collective. Reproduction or unauthorized use of our "ROI of Reset" philosophy or vetting metrics is strictly prohibited.  
            </p>  
          </div>  
        </div>  
      </section>

      {/* Footer */}  
      <footer className="py-20 px-8 border-t border-gray-100 text-center">  
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400">  
          © 2026 NexVoyage Collective. All Rights Reserved.  
        </div>  
      </footer>  
    </div>  
  );  
};

export default LegalPage;  
