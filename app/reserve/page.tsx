"use client";

import Navigation from '../Navigation';  
import Footer from '../Footer';  
import InquiryForm from '../components/InquiryForm';

export default function ReservePage() {  
  return (  
    <main className="min-h-screen bg-gray-50">  
      <Navigation />  
        
      <div className="max-w-3xl mx-auto px-6 py-32">  
        <div className="text-center mb-16">  
          <h1 className="text-4xl font-extralight tracking-tight mb-4">Secure Your Sanctuary</h1>  
          <p className="text-gray-500 font-light italic">Enter your details below to initiate a private booking request.</p>  
        </div>

        <InquiryForm />  
      </div>

      <Footer />  
    </main>  
  );  
}  
