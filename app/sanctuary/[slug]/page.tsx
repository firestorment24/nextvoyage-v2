'use client';

import { useParams } from 'next/navigation';  
import Link from 'next/link';

const SANCTUARIES: Record<string, any> = {  
  metropolitan: {  
    title: 'Metropolitan',  
    tagline: 'The Silent Pulse.',  
    description: 'A curated refuge in the world’s most vibrant capitals. High-floor serenity and soundproofed luxury for the urban executive.',  
    image: 'https://cdn.marblism.com/vEIkjdyc8FE.webp',  
  },  
  floating: {  
    title: 'Floating',  
    tagline: 'The Sea, Reimagined.',  
    description: 'Exclusive access to the Ritz-Carlton Yacht Collection and private charters. Your mobile fortress on the water.',  
    image: 'https://cdn.marblism.com/QM7q12mlDPO.webp',  
  },  
  island: {  
    title: 'Island',  
    tagline: 'Boundless Horizon.',  
    description: 'Private atoll access where the only schedule is the tide. Absolute privacy, secured by the Guardian Layer.',  
    image: 'https://cdn.marblism.com/vaBnm6isJ-C.webp',  
  },  
  alpine: {  
    title: 'Alpine',  
    tagline: 'Peak Clarity.',  
    description: 'Remote heli-access lodges and snow-capped retreats. High-altitude restoration for high-stakes lives.',  
    image: 'https://cdn.marblism.com/mRxfQ0N2_io.webp',  
  },  
  stadium: {  
    title: 'Stadium',  
    tagline: 'The Best Seat in the House.',  
    description: 'Ultra-prime hospitality suites for the LA 2028 Olympics and global sports. Access that others can’t buy.',  
    image: 'https://cdn.marblism.com/gvkky4c_9V3.webp',  
  },  
  cinematic: {  
    title: 'Cinematic',  
    tagline: 'Beyond the Screen.',  
    description: 'Immersive travel inspired by the world’s most iconic film locations, delivered with white-glove precision.',  
    image: 'https://cdn.marblism.com/58zTxqqgFIU.webp',  
  },  
  fortress: {  
    title: 'Fortress',  
    tagline: 'Uncompromising Security.',  
    description: 'Vetted properties with advanced security protocols. For those who require safety without sacrificing style.',  
    image: 'https://https://cdn.marblism.com/iHm6gUDie0O.webp',  
  },  
  safari: {  
    title: 'Safari',  
    tagline: 'The Primal Reset.',  
    description: 'Conservation-focused luxury in the heart of the wild. Connect with the rhythm of the earth.',  
    image: 'https://cdn.marblism.com/QhVF0bg6Rq3.webp',  
  },  
  oasis: {  
    title: 'Oasis',  
    tagline: 'Desert Serenity.',  
    description: 'Remote dunes and architectural wonders in the sands. The ultimate silence of the desert.',  
    image: 'https://cdn.marblism.com/t_wt6F-rdlV.webp',  
  },  
};

export default function SanctuaryPage() {  
  const params = useParams();  
  const slug = params?.slug as string;  
  const sanctuary = SANCTUARIES[slug] || SANCTUARIES.metropolitan;

  return (  
    <div className="min-h-screen bg-white">  
      {/* Hero Section */}  
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">  
        <img   
          src={sanctuary.image}   
          alt={sanctuary.title}   
          className="absolute inset-0 w-full h-full object-cover"  
        />  
        <div className="absolute inset-0 bg-black/40" />  
        <div className="relative text-center text-white px-6">  
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-4 uppercase">{sanctuary.title}</h1>  
          <p className="text-xl md:text-2xl font-extralight tracking-widest uppercase">{sanctuary.tagline}</p>  
        </div>  
      </section>

      {/* Content Section */}  
      <section className="max-w-4xl mx-auto py-24 px-6 text-center">  
        <h2 className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-8">The Experience</h2>  
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-slate-800 mb-12">  
          {sanctuary.description}  
        </p>  
        <div className="h-px w-24 bg-slate-200 mx-auto mb-12" />  
        <a   
          href="mailto:daryl.clark@fora.travel"  
          className="inline-block bg-slate-900 text-white px-12 py-4 text-sm uppercase tracking-widest hover:bg-slate-800 transition"  
        >  
          Inquire for Access  
        </a>  
      </section>  
    </div>  
  );  
}  
