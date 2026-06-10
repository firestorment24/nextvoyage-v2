import Image from 'next/image'  
import Link from 'next/link'  
import { notFound } from 'next/navigation'  
import { SANCTUARY_DATA } from '@/data/sanctuaries'

export default function SanctuaryPage({ params }: { params: { id: string } }) {  
  const sanctuary = SANCTUARY_DATA.find((s) => s.id === params.id)

  if (!sanctuary) {  
    notFound()  
  }

  return (  
    <main className="min-h-screen bg-[#FCFAF7] text-[#1C1C1C]">  
      {/* Minimal Navigation */}  
      <nav className="p-8 flex justify-between items-center absolute top-0 w-full z-10 text-white mix-blend-difference">  
        <Link href="/" className="text-xs uppercase tracking-[0.4em]">← Back to Collection</Link>  
        <span className="text-xl font-serif tracking-[0.2em] uppercase">NexVoyage</span>  
      </nav>

      {/* Immersive Hero Header */}  
      <section className="relative h-[85vh] w-full overflow-hidden">  
        <Image  
          src={sanctuary.heroImage}  
          alt={sanctuary.name}  
          fill  
          priority  
          className="object-cover scale-105"  
        />  
        <div className="absolute inset-0 bg-black/20" />  
        <div className="absolute bottom-20 left-0 right-0 px-8 max-w-7xl mx-auto">  
          <p className="text-white/80 text-[10px] uppercase tracking-[0.5em] mb-4">{sanctuary.loc}</p>  
          <h1 className="text-white text-6xl md:text-8xl font-serif italic leading-tight">  
            {sanctuary.name}  
          </h1>  
        </div>  
      </section>

      {/* Content Section */}  
      <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">  
          
        {/* Story & Description */}  
        <div className="lg:col-span-7 space-y-12">  
          <div className="space-y-6">  
            <h2 className="text-[#947B5C] text-xs uppercase tracking-[0.4em]">The Narrative</h2>  
            <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed">  
              {sanctuary.description}  
            </p>  
          </div>

          <div className="pt-12 border-t border-black/5">  
             <h2 className="text-[#947B5C] text-xs uppercase tracking-[0.4em] mb-8">Exclusive Features</h2>  
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">  
               {sanctuary.features.map((feature, index) => (  
                 <li key={index} className="flex items-center text-sm font-light tracking-wide text-gray-600">  
                   <span className="w-1.5 h-1.5 rounded-full bg-[#947B5C] mr-4 opacity-40" />  
                   {feature}  
                 </li>  
               ))}  
             </ul>  
          </div>  
        </div>

        {/* Sticky Inquiry Sidebar */}  
        <div className="lg:col-span-5">  
          <div className="sticky top-12 p-10 bg-white border border-black/5 space-y-8">  
            <div className="space-y-2">  
              <p className="text-[10px] uppercase tracking-widest text-gray-400">Indicative Pricing</p>  
              <p className="text-3xl font-serif">{sanctuary.price}</p>  
            </div>  
              
            <p className="text-sm text-gray-500 font-light leading-relaxed">  
              Our travel curators are ready to tailor this experience to your exact specifications.  
            </p>

            <Link   
              href={`/reserve?sanctuary=${sanctuary.id}`}  
              className="block w-full bg-[#1C1C1C] text-white text-center py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-[#947B5C] transition-colors duration-500"  
            >  
              Initiate Inquiry  
            </Link>

            <div className="pt-6 text-center">  
              <p className="text-[9px] uppercase tracking-widest text-gray-300">Member of NexVoyage Collective</p>  
            </div>  
          </div>  
        </div>

      </section>

      {/* Footer Branding */}  
      <footer className="py-24 border-t border-black/5 text-center">  
        <Link href="/" className="text-[10px] uppercase tracking-[0.6em] text-gray-400 hover:text-[#947B5C] transition-colors">  
          Return to Collection  
        </Link>  
      </footer>  
    </main>  
  )  
}  
