import { SANCTUARY_DATA } from '../../../data/sanctuaries'  
import { notFound } from 'next/navigation'  
import Navigation from '../../../components/Navigation'  
import Footer from '../../../components/Footer'

interface PageProps {  
params: Promise<{ id: string }>  
}

export default async function SanctuaryPage({ params }: PageProps) {    
const { id } = await params    
const sanctuary = SANCTUARY_DATA.find(s => s.id === id)

if (!sanctuary) {    
  notFound()    
}

return (  
  <main className="bg-black min-h-screen text-white">  
    <Navigation />  
      
    {/* Hero Section */}  
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">  
      <img   
        src={sanctuary.heroImage}   
        alt={sanctuary.name}  
        className="absolute inset-0 w-full h-full object-cover opacity-60"  
      />  
      <div className="relative z-10 text-center px-4">  
        <span className="text-gold tracking-[0.3em] uppercase text-sm mb-4 block">  
          {sanctuary.tag} — {sanctuary.loc}  
        </span>  
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">  
          {sanctuary.name}  
        </h1>  
        <p className="max-w-2xl mx-auto text-lg text-gray-300 font-light leading-relaxed">  
          {sanctuary.philosophy}  
        </p>  
      </div>  
    </section>

    {/* Content Grid */}  
    <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">  
      <div>  
        <h2 className="text-gold uppercase tracking-widest text-xs mb-8">Atmosphere & ROI</h2>  
        <div className="space-y-8">  
          <div>  
            <h3 className="text-2xl mb-2 font-light">The Vibe</h3>  
            <p className="text-gray-400 leading-relaxed">{sanctuary.atmosphere}</p>  
          </div>  
          <div>  
            <h3 className="text-2xl mb-2 font-light">The Return</h3>  
            <p className="text-gray-400 leading-relaxed">{sanctuary.roi}</p>  
          </div>  
        </div>  
      </div>

      <div>  
        <h2 className="text-gold uppercase tracking-widest text-xs mb-8">Collection Highlights</h2>  
        <ul className="space-y-4">  
          {sanctuary.highlights.map((item, index) => (  
            <li key={index} className="flex items-center space-x-4 border-b border-white/10 pb-4 text-gray-300">  
              <span className="text-gold text-xs">0{index + 1}</span>  
              <span className="text-lg font-light">{item}</span>  
            </li>  
          ))}  
        </ul>  
      </div>  
    </section>

    {/* Property Buckets */}  
    <section className="bg-zinc-900/30 py-24">  
      <div className="max-w-7xl mx-auto px-6">  
        <h2 className="text-gold uppercase tracking-widest text-xs mb-12 text-center">Available Assets</h2>  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {sanctuary.buckets.map((bucket, index) => (  
            <div key={index} className="group relative bg-black/40 border border-white/5 p-8 hover:border-gold/50 transition-colors">  
              <div className="flex justify-between items-start mb-4">  
                <h4 className="text-xl font-light">{bucket.name}</h4>  
                <span className="text-gold font-mono text-sm">[{bucket.count}]</span>  
              </div>  
              <p className="text-gray-500 text-sm leading-relaxed">  
                {bucket.description}  
              </p>  
            </div>  
          ))}  
        </div>  
      </div>  
    </section>

    <Footer />  
  </main>  
)  
}  
