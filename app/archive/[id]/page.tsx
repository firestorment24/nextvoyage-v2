import { notFound } from 'next/navigation'  
import Link from 'next/link'  
import { PROPERTY_DATA } from '@/lib/data/sanctuaries'

export default function PropertyDetailPage({ params }: { params: { id: string } }) {  
  const property = PROPERTY_DATA.find((p) => p.id === params.id)

  if (!property) return notFound()

  return (  
    <main className="min-h-screen bg-white">  
      {/* Navigation */}  
      <nav className="p-8 fixed top-0 left-0 w-full z-50 flex justify-between mix-blend-difference text-white">  
        <Link href="/archive" className="text-[10px] uppercase tracking-[0.3em] hover:opacity-50 transition-opacity">  
          &larr; Back to Archive  
        </Link>  
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">  
          REF: {property.id}  
        </span>  
      </nav>

      {/* Split Screen Layout */}  
      <div className="flex flex-col lg:flex-row min-h-screen">  
        {/* Left: Visual (Sticky) */}  
        <div className="w-full lg:w-1/2 h-[60vh] lg:h-screen lg:sticky lg:top-0 overflow-hidden">  
          <img  
            src={property.image}  
            alt={property.name}  
            className="w-full h-full object-cover"  
          />  
        </div>

        {/* Right: Narrative */}  
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-white">  
          <div className="max-w-lg space-y-12">  
            <div className="space-y-4">  
              <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400">  
                {property.location}  
              </span>  
              <h1 className="text-5xl font-light tracking-tight text-black leading-tight">  
                {property.name}  
              </h1>  
              <div className="h-12 w-[1px] bg-gray-200" />  
            </div>

            <div className="space-y-8">  
              <h2 className="text-sm uppercase tracking-[0.3em] font-medium text-black">  
                {property.highlight}  
              </h2>  
              <p className="text-lg font-serif italic text-gray-600 leading-relaxed">  
                "{property.description}"  
              </p>  
            </div>

            <div className="pt-12 border-t border-gray-100 flex flex-col gap-6">  
              <button className="w-full py-5 border border-black text-[10px] uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-500">  
                Inquire for Access  
              </button>  
              <p className="text-[10px] text-center text-gray-300 uppercase tracking-widest">  
                Discretion Guaranteed — Sanctuary Tier Restricted  
              </p>  
            </div>  
          </div>  
        </div>  
      </div>  
    </main>  
  )  
}  
