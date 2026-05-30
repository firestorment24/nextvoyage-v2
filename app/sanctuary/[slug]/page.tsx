"use client";  
import Navigation from '../../Navigation';  
import Link from 'next/link';

export default function SanctuaryPage({ params }: { params: { slug: string } }) {  
  return (  
    <div className="min-h-screen bg-black text-white pt-32 px-6">  
      <Navigation />  
      <div className="max-w-4xl mx-auto">  
        <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tighter mb-8">  
          {params.slug.replace('-', ' ')}  
        </h1>  
        <p className="text-xl text-white/60 font-light leading-relaxed mb-12">  
          Details for this sanctuary are currently being curated.  
        </p>  
        <Link href="/" className="text-sm uppercase tracking-widest border-b border-white/20 pb-2 hover:border-white transition-colors">  
          Back to Grid  
        </Link>  
      </div>  
    </div>  
  );  
}  
