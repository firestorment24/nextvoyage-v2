"use client";

import { useState } from 'react';

export default function InquiryForm({ propertyName, sanctuaryName }: { propertyName?: string, sanctuaryName?: string }) {  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {  
    e.preventDefault();  
    // In a real app, you'd send this to an API or Formspree/EmailJS  
    setSubmitted(true);  
  };

  if (submitted) {  
    return (  
      <div className="bg-white p-12 text-center border border-gray-100 shadow-sm">  
        <h3 className="text-2xl font-light mb-4">Inquiry Received</h3>  
        <p className="text-gray-500 font-light leading-relaxed">  
          An advisor from the NexVoyage Collective will reach out to you within 24 hours to discuss your stay {propertyName ? `at ${propertyName}` : `within ${sanctuaryName}`}.  
        </p>  
      </div>  
    );  
  }

  return (  
    <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-sm">  
      <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-gray-400">  
        Private Inquiry  
      </h3>  
      <form onSubmit={handleSubmit} className="space-y-6">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
          <div>  
            <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Full Name</label>  
            <input   
              required  
              type="text"   
              className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors font-light"  
              placeholder="John Doe"  
            />  
          </div>  
          <div>  
            <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Email Address</label>  
            <input   
              required  
              type="email"   
              className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors font-light"  
              placeholder="john@example.com"  
            />  
          </div>  
        </div>

        <div>  
          <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Desired Dates</label>  
          <input   
            type="text"   
            className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors font-light"  
            placeholder="e.g. Late September 2026"  
          />  
        </div>

        <div>  
          <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Additional Requests</label>  
          <textarea   
            className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors font-light resize-none"  
            rows={3}  
            placeholder="Tell us about your requirements..."  
          ></textarea>  
        </div>

        <button   
          type="submit"  
          className="w-full bg-black text-white py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-gray-800 transition-all mt-8"  
        >  
          Request Bespoke Quote  
        </button>  
          
        <p className="text-[10px] text-center text-gray-400 uppercase tracking-tighter mt-4">  
          Membership terms apply. All inquiries are handled with absolute discretion.  
        </p>  
      </form>  
    </div>  
  );  
}  
