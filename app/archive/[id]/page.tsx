// app/archive/[id]/page.tsx  
import { SANCTUARIES_DATA } from '@/lib/data/sanctuaries'  
import Link from 'next/link'  
import { notFound } from 'next/navigation'

export async function generateStaticParams() {  
return SANCTUARIES_DATA.map((item) => ({  
  id: item.id,  
}))  
}

export default function SanctuaryDetailPage({ params }: { params: { id: string } }) {  
const sanctuary = SANCTUARIES_DATA.find((s) => s.id === params.id)

if (!sanctuary) {  
  notFound()  
}

return (  
  <main className="min-h-screen bg-black text-white py-20 px-6">  
    <div className="max-w-4xl mx-auto">  
      {/* Navigation Back */}  
      <Link   
        href="/archive"   
        className="text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity mb-12 inline-block"  
      >  
        ← Back to Archive  
      </Link>

      {/* Header Section */}  
      <header className="mb-12">  
        <div className="flex items-center gap-4 mb-4">  
          <span className="text-[10px] uppercase tracking-[0.3em] px-2 py-1 border border-white/20">  
            {sanctuary.tag}  
          </span>  
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-50">  
            {sanctuary.loc}  
          </span>  
        </div>  
        <h1 className="text-4xl md:text-6xl font-light tracking-tight">  
          {sanctuary.name}  
        </h1>  
      </header>

      {/* Content Section */}  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">  
        <div className="md:col-span-2 space-y-8">  
          <p className="text-lg leading-relaxed text-gray-300 font-light italic">  
            {/* Syncing with 'atmosphere' property */}  
            {sanctuary.atmosphere}  
          </p>  
            
          {/* Adding Highlights since they are in the data object */}  
          <div className="space-y-4 pt-8">  
            <h4 className="text-[10px] uppercase tracking-widest opacity-40">Artifact Highlights</h4>  
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">  
              {sanctuary.highlights.map((item, index) => (  
                <li key={index} className="text-sm border-l border-white/20 pl-4 py-1 text-gray-400">  
                  {item}  
                </li>  
              ))}  
            </ul>  
          </div>  
        </div>

        <div className="space-y-8">  
          <div>  
            <h4 className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Rachel's Inquiry Desk</h4>  
            <p className="text-sm text-gray-400 mb-6 font-light">  
              Connect with our AI Lead Analyst to initialize your dossier and unlock Daryl’s calendar.  
            </p>  
              
            <Link   
              href={`/inquiry?id=${sanctuary.id}`}  
              className="inline-block w-full text-center bg-white text-black px-6 py-4 uppercase text-[10px] tracking-[0.2em] hover:bg-gray-200 transition-colors"  
            >  
              Connect with Concierge  
            </Link>  
          </div>

          <div className="pt-8 border-t border-white/10">  
            <h4 className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Inventory</h4>  
            <p className="text-xs uppercase tracking-widest">{sanctuary.propertyCount} Properties Available</p>  
          </div>  
        </div>  
      </div>  
    </div>  
  </main>  
)  
}  
