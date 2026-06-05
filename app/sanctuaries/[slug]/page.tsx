'use client'

import { useParams } from 'next/navigation'  
import Navigation from '../../Navigation'  
import Footer from '../../components/Footer'

const sanctuaries = {  
'amangiri-utah': {  
  name: "Amangiri",  
  location: "Canyon Point, Utah",  
  coords: "37.0165° N, 111.8545° W",  
  vibe: "Raw minimalism. Total silence. The desert as a cathedral.",  
  logistics: {  
    privacy: "Ultra-High (Gated Estate)",  
    connectivity: "Fiber (Business Grade)",  
    access: "Private Charter to Page (PGA)",  
    reset: "Restorative"  
  },  
  image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&q=80&w=2070"  
}  
}

export default function SanctuaryPage() {  
const { slug } = useParams()  
const data = sanctuaries[slug as keyof typeof sanctuaries]

if (!data) return <div className="p-20">Sanctuary not found.</div>

return (  
  <main className="min-h-screen bg-white text-[#1a1a1a]">  
    <Navigation />  
      
    {/* Hero Section */}  
    <section className="relative h-[80vh] w-full overflow-hidden">  
      <img   
        src={data.image}   
        className="w-full h-full object-cover grayscale-[20%] brightness-75"  
        alt={data.name}  
      />  
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />  
      <div className="absolute bottom-12 left-12 text-white">  
        <span className="text-[10px] uppercase tracking-[0.5em] opacity-70 mb-4 block">  
          {data.coords}  
        </span>  
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter italic">  
          {data.name}  
        </h1>  
        <p className="text-lg opacity-80 mt-2">{data.location}</p>  
      </div>  
    </section>

    {/* The Brief */}  
    <section className="max-w-screen-xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-12 gap-16">  
      <div className="md:col-span-7">  
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-8 block">The Perspective</span>  
        <p className="text-2xl md:text-3xl leading-relaxed font-light text-neutral-800">  
          {data.vibe}  
        </p>  
      </div>

      <div className="md:col-span-4 md:col-start-9 bg-[#fafafa] p-10">  
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-8 block">The Logistics</span>  
        <div className="space-y-8">  
          {Object.entries(data.logistics).map(([key, val]) => (  
            <div key={key} className="border-b border-neutral-200 pb-4">  
              <span className="text-[9px] uppercase tracking-widest text-neutral-400 block mb-1">{key}</span>  
              <span className="text-sm font-normal uppercase tracking-wider">{val}</span>  
            </div>  
          ))}  
        </div>  
        <a   
          href="/concierge"   
          className="mt-12 block w-full text-center bg-black text-white py-4 text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"  
        >  
          Request Secure Access  
        </a>  
      </div>  
    </section>

    <Footer />  
  </main>  
)  
}  
