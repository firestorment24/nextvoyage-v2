// app/perspective/[slug]/page.tsx  
import { notFound } from 'next/navigation';  
import Link from 'next/link';

// THE FIX: Force the engine to only recognize our specific editorial slugs  
export const dynamicParams = false; 

export async function generateStaticParams() {  
  return [  
    { slug: 'the-silent-roi' },  
    { slug: 'the-architecture-of-calm' },  
    { slug: 'the-shadow-of-protection' },  
    { slug: 'the-quiet-recalibration' },  
    { slug: 'the-architecture-of-the-journey' },  
    { slug: 'the-logistics-of-composure' },  
  ];  
}

const ARTICLE_DATA: Record<string, any> = {  
  "the-silent-roi": {  
    title: "The Silent ROI",  
    subtitle: "Volume 01",  
    hero: "https://cdn.marblism.com/JXJNAcJDNQ7.webp",  
    content: "The ultimate luxury is not found in the acquisition of things, but in the reclamation of one’s own nervous system..."  
  },  
  "the-architecture-of-calm": {  
    title: "The Architecture of Calm",  
    subtitle: "Volume 02",  
    hero: "https://cdn.marblism.com/GssaOUoI3J4.webp",  
    content: "True seclusion is tactile. It is found in the weight of a burnished brass handle, the coolness of obsidian walls..."  
  },  
  "the-shadow-of-protection": {  
    title: "The Shadow of Protection",  
    subtitle: "Volume 03",  
    hero: "https://cdn.marblism.com/mYMtnpD3UpB.webp",  
    content: "Privacy is no longer a setting; it is a fortress. We examine the 'Shadow of Protection'..."  
  },  
  "the-quiet-recalibration": {  
    title: "The Quiet Recalibration",  
    subtitle: "Wellness Dispatch",  
    hero: "https://cdn.marblism.com/bVv_xym0Ckt.webp",  
    content: "Navigating discrete wellness through dark stone and burnished brass meditation bowls..."  
  },  
  "the-architecture-of-the-journey": {  
    title: "The Architecture of the Journey",  
    subtitle: "Itinerary Dispatch",  
    hero: "https://cdn.marblism.com/BZFczgXijCL.webp",  
    content: "The invisible hand of radical personalization. We choreograph stillness through the play of light..."  
  },  
  "the-logistics-of-composure": {  
    title: "The Logistics of Composure",  
    subtitle: "Aviation Dispatch",  
    hero: "https://cdn.marblism.com/ARrjs4vNOgk.webp",  
    content: "Private aviation as the infrastructure for sovereignty. Charcoal upholstery and rainy tarmac reflections..."  
  }  
};

export default function PerspectiveArticle({ params }: { params: { slug: string } }) {  
  const article = ARTICLE_DATA[params.slug];

  if (!article) notFound();

  return (  
    <article className="min-h-screen bg-[#0a0a0a] text-[#d4d4d4]">  
      {/* Hero Section */}  
      <div className="relative h-[80vh] w-full overflow-hidden border-b border-zinc-900">  
        <img   
          src={article.hero}   
          alt={article.title}   
          className="w-full h-full object-cover grayscale opacity-40"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />  
        <div className="absolute bottom-0 left-0 w-full p-12 lg:p-24">  
          <div className="max-w-4xl">  
            <span className="text-[#b19149] font-mono tracking-[0.5em] text-xs uppercase mb-4 block">  
              {article.subtitle}  
            </span>  
            <h1 className="text-6xl lg:text-8xl font-light text-white tracking-tighter italic">  
              {article.title}  
            </h1>  
          </div>  
        </div>  
      </div>

      {/* Content Section */}  
      <div className="max-w-3xl mx-auto px-8 py-24 leading-relaxed">  
        <div className="text-zinc-500 font-serif text-xl lg:text-2xl italic mb-16 border-l-2 border-[#b19149] pl-8">  
          {article.content}  
        </div>  
          
        <div className="prose prose-invert prose-zinc max-w-none prose-p:font-serif prose-p:text-lg prose-p:text-zinc-400">  
           {/* Detailed editorial content */}  
        </div>

        <footer className="mt-32 pt-12 border-t border-zinc-900 flex justify-between items-center">  
          <Link href="/perspective" className="text-zinc-500 hover:text-[#b19149] transition-colors tracking-widest text-xs uppercase">  
            ← Return to Perspective  
          </Link>  
          <div className="h-12 w-12 border border-zinc-800 rounded-full flex items-center justify-center">  
            <span className="text-[#b19149] font-mono text-[10px]">NV</span>  
          </div>  
        </footer>  
      </div>  
    </article>  
  );  
}  
