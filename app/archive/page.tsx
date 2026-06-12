// app/archive/page.tsx  
import Link from 'next/link';

const SANCTUARIES = [  
{ id: 'azure-heights', name: 'Azure Heights', location: 'Amalfi Coast, Italy' },  
{ id: 'velvet-pines', name: 'Velvet Pines', location: 'Zermatt, Switzerland' },  
{ id: 'obsidian-sands', name: 'Obsidian Sands', location: 'Iceland' },  
{ id: 'gilded-dunes', name: 'Gilded Dunes', location: 'Abu Dhabi' },  
{ id: 'jade-canopy', name: 'Jade Canopy', location: 'Bali' },  
{ id: 'ivory-reef', name: 'Ivory Reef', location: 'Maldives' },  
{ id: 'copper-ridge', name: 'Copper Ridge', location: 'Montana' },  
{ id: 'silver-horizon', name: 'Silver Horizon', location: 'Santorini' },  
];

export default function ArchivePage() {  
return (  
  <main className="min-h-screen bg-[#0A0A0A] pt-40 pb-20 px-10 md:px-20">  
    <div className="max-w-7xl mx-auto">  
      <header className="mb-24 border-b border-white/10 pb-10">  
        <p className="text-[#A69F88] uppercase tracking-[0.5em] text-xs mb-4">The Collection</p>  
        <h1 className="text-5xl md:text-7xl font-serif text-white">The Archive</h1>  
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">  
        {SANCTUARIES.map((item) => (  
          <Link   
            key={item.id}   
            href={`/archive/${item.id}`}  
            className="group bg-[#0A0A0A] p-12 hover:bg-[#141414] transition-all duration-700 flex flex-col justify-between h-80"  
          >  
            <div>  
              <p className="text-[#A69F88] uppercase tracking-[0.2em] text-xs mb-2">  
                {item.location}  
              </p>  
              <h2 className="text-3xl font-serif text-white group-hover:translate-x-2 transition-transform duration-500">  
                {item.name}  
              </h2>  
            </div>  
            <div className="flex justify-between items-end">  
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">  
                Entry No. {item.id.toUpperCase()}  
              </span>  
              <span className="text-[#A69F88] opacity-0 group-hover:opacity-100 transition-opacity duration-700">  
                View Access →  
              </span>  
            </div>  
          </Link>  
        ))}  
      </div>  
    </div>  
  </main>  
);  
}  
