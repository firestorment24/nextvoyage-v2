'use client';

import { useParams } from 'next/navigation';

const LEGAL_CONTENT: Record<string, any> = {  
  'privacy-policy': {  
    title: 'Privacy Policy',  
    content: 'At NexVoyage Collective, we manage the lives and travels of the world’s most discerning individuals. Your data is treated with the same level of security as your physical transit. We never sell, trade, or compromise your personal information.'  
  },  
  'terms': {  
    title: 'Terms & Conditions',  
    content: 'NexVoyage Collective acts as a Guardian Layer for your travel. By using our services, you agree to our refined exploration standards. We prioritize elite access and zero-friction logistics above all else.'  
  },  
  'safety': {  
    title: 'Impact & Safety Commitment',  
    content: 'Our commitment to safety is absolute. We vet every partner, from private aviation to ground transit, ensuring a secure environment for our clients and their families.'  
  }  
};

export default function LegalPage() {  
  const params = useParams();  
  const slug = params?.slug as string;  
  const doc = LEGAL_CONTENT[slug] || LEGAL_CONTENT['privacy-policy'];

  return (  
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">  
      <div className="max-w-3xl mx-auto bg-white p-12 shadow-sm border border-slate-100">  
        <h1 className="text-3xl font-light tracking-tight mb-8 text-slate-900">{doc.title}</h1>  
        <div className="prose prose-slate font-light leading-relaxed text-slate-600">  
          <p>{doc.content}</p>  
          <p className="mt-8 text-sm italic">Last updated: May 2026</p>  
        </div>  
      </div>  
    </div>  
  );  
}  
