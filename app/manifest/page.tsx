const ARCHETYPES = [  
{   
  id: '01',   
  name: 'Secluded Hideaways',   
  description: 'Private islands and remote estates designed for absolute invisibility.',   
  img: 'https://cdn.marblism.com/AmbYgBN8Au_.webp'   
},  
{   
  id: '02',   
  name: 'Oceanfront Sanctuaries',   
  description: 'The edge of the world. Cliffside retreats and marine-focused architecture.',   
  img: 'https://cdn.marblism.com/8QRTKrZUahO.webp'   
},  
{   
  id: '03',   
  name: 'Urban Pinnacles',   
  description: 'High-altitude city living. Penthouses and private clubs in global capitals.',   
  img: 'https://cdn.marblism.com/eoEjQVBw9FI.webp'   
},  
{   
  id: '04',   
  name: 'Mountain Escapes',   
  description: 'Alpine mastery. High-design chalets and remote mountain strongholds.',   
  img: 'https://cdn.marblism.com/EwTH_AsNV5O.webp'   
},  
{   
  id: '05',   
  name: 'Restorative Havens',   
  description: 'Spaces of deep silence. World-class wellness and regenerative retreats.',   
  img: 'https://cdn.marblism.com/zH7SVFUCkHs.webp'   
},  
{   
  id: '06',   
  name: 'Cultural Legacies',   
  description: 'The architecture of history. Palazzos, castles, and estates with a soul.',   
  img: 'https://cdn.marblism.com/EKJ-Erst4-l.webp'   
},  
{   
  id: '07',   
  name: 'Global Voyagers',   
  description: 'The luxury of motion. Elite yacht charters and private rail journeys.',   
  img: 'https://cdn.marblism.com/tA07d170OgG.webp'   
},  
{   
  id: '08',   
  name: 'Wild Frontiers',   
  description: 'Unfiltered immersion. High-end outposts in the planet’s rawest corners.',   
  img: 'https://cdn.marblism.com/pn2mh_egkL_.webp'   
},  
{   
  id: '09',   
  name: 'Architectural Icons',   
  description: 'Modernist masterpieces and design-forward stays for the visionary traveler.',   
  img: 'https://cdn.marblism.com/aw-Lp4Vxlxu.webp'   
},  
];

export default function ManifestPage() {  
return (  
  <div className="bg-[#0a0a0a] min-h-screen px-6 py-24">  
    {/* Header Section */}  
    <div className="max-w-6xl mx-auto mb-20">  
      <h2 className="text-[10px] uppercase tracking-[0.8em] text-[#d4af37] mb-4">The Manifest</h2>  
      <h1 className="font-serif text-5xl md:text-6xl text-stone-100 italic">The Elite Ledger</h1>  
      <p className="text-stone-500 text-[10px] uppercase tracking-[0.3em] mt-6 max-w-lg leading-loose">  
        A proprietary collection of global travel archetypes, curated for the NexVoyage traveler.  
      </p>  
    </div>

    {/* The 3x3 Grid */}  
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">  
      {ARCHETYPES.map((item) => (  
        <div key={item.id} className="relative aspect-square group overflow-hidden bg-stone-900">  
          {/* Image Layer */}  
          <div   
            className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-30 group-hover:opacity-80"  
            style={{ backgroundImage: `url(${item.img})` }}  
          />  
            
          {/* Content Layer */}  
          <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">  
            <span className="text-[9px] text-[#d4af37] font-mono mb-2 tracking-widest">{item.id}</span>  
            <h3 className="font-serif text-2xl text-stone-100 mb-4">{item.name}</h3>  
              
            {/* Animated Brass Accent */}  
            <div className="h-[1px] bg-[#d4af37]/40 w-8 group-hover:w-full transition-all duration-700" />  
              
            <p className="text-[10px] text-stone-400 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 mt-4 leading-relaxed uppercase tracking-wider">  
              {item.description}  
            </p>  
          </div>  
            
          {/* Dark Overlay */}  
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />  
        </div>  
      ))}  
    </div>

    {/* Grid Footer */}  
    <div className="max-w-6xl mx-auto mt-20 border-t border-stone-900 pt-12 flex justify-between items-center text-[9px] uppercase tracking-[0.4em] text-stone-600">  
      <span>Volume I — Current Selections</span>  
      <button className="hover:text-[#d4af37] transition-colors flex items-center gap-4">  
        Request Private Briefing <span className="text-lg">→</span>  
      </button>  
    </div>  
  </div>  
);  
}  
