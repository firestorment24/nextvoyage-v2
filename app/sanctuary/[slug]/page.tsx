"use client";  
import Navigation from '../../Navigation'; // Removed the curly braces here  
import Link from 'next/link';

const SANCTUARIES = {  
  metropolitan: {  
    title: "Metropolitan Sanctuary",  
    description: "Urban elegance in the heart of the world's most vibrant cities.",  
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80"  
  },  
  floating: {  
    title: "Floating Sanctuary",  
    description: "Serenity on the water, from private yachts to overwater villas.",  
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80"  
  },  
  island: {  
    title: "Island Sanctuary",  
    description: "Pristine beaches and total seclusion in tropical paradises.",  
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80"  
  },  
  alpine: {  
    title: "Alpine Sanctuary",  
    description: "High-altitude luxury with breathtaking mountain vistas.",  
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80"  
  },  
  stadium: {  
    title: "Stadium Sanctuary",  
    description: "Exclusive access to the world's greatest sporting spectacles.",  
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80"  
  },  
  cinematic: {  
    title: "Cinematic Sanctuary",  
    description: "Immersive environments that feel like a scene from a masterpiece.",  
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80"  
  },  
  fortress: {  
    title: "Fortress Sanctuary",  
    description: "Unparalleled security and privacy in historic strongholds.",  
    image: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&q=80"  
  },  
  safari: {  
    title: "Safari Sanctuary",  
    description: "Refined luxury amidst the wild beauty of the savanna.",  
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80"  
  },  
  oasis: {  
    title: "Oasis Sanctuary",  
    description: "Hidden gems of comfort in the most arid landscapes.",  
    image: "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&q=80"  
  }  
};

export default function SanctuaryPage({ params }: { params: { slug: string } }) {  
  const sanctuary = SANCTUARIES[params.slug as keyof typeof SANCTUARIES];

  if (!sanctuary) {  
    return (  
      <div className="min-h-screen bg-black text-white flex items-center justify-center">  
        <div className="text-center">  
          <h1 className="text-4xl font-light mb-4">Sanctuary Not Found</h1>  
          <Link href="/" className="text-white/60 hover:text-white underline decoration-white/20">  
            Return to Collective  
          </Link>  
        </div>  
      </div>  
    );  
  }

  return (  
    <main className="min-h-screen bg-black text-white">  
      <Navigation />  
        
      <div className="relative h-[60vh] w-full">  
        <img   
          src={sanctuary.image}   
          alt={sanctuary.title}  
          className="w-full h-full object-cover opacity-60"  
        />  
        <div className="absolute inset-0 flex items-center justify-center">  
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter">  
            {sanctuary.title.toUpperCase()}  
          </h1>  
        </div>  
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">  
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/80">  
          {sanctuary.description}  
        </p>  
          
        <div className="mt-16 h-px bg-white/10 w-full" />  
          
        <div className="mt-16">  
          <Link href="/" className="group flex items-center gap-4 text-white/40 hover:text-white transition-colors">  
            <span className="text-2xl">←</span>  
            <span className="uppercase tracking-widest text-sm">Back to Collective</span>  
          </Link>  
        </div>  
      </div>  
    </main>  
  );  
}  
