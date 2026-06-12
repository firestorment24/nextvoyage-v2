const ARCHETYPES = [  
  { id: '01', name: 'The Fortress', description: 'Absolute privacy and architectural security.', img: 'https://cdn.marblism.com/AmbYgBN8Au_.webp' },  
  { id: '02', name: 'The Oasis', description: 'Biophilic immersion and regenerative water.', img: 'https://cdn.marblism.com/EwTH_AsNV5O.webp' },  
  { id: '03', name: 'The Vault', description: 'Metropolitan nerve centers for global legacy.', img: 'https://cdn.marblism.com/tA07d170OgG.webp' },  
  // ... repeated for 3x3 grid (9 total)  
];

export default function ManifestPage() {  
  return (  
    <div className="bg-[#0a0a0a] min-h-screen px-6 py-24">  
      {/* Header Section */}  
      <div className="max-w-6xl mx-auto mb-20">  
        <h2 className="text-[10px] uppercase tracking-[0.8em] text-[#d4af37] mb-4">The Manifest</h2>  
        <h1 className="font-serif text-5xl md:text-6xl text-stone-100 italic">The Elite Ledger</h1>  
        <p className="text-stone-500 text-xs uppercase tracking-[0.3em] mt-6 max-w-md leading-relaxed">  
          A proprietary categorization of global sanctuaries, filtered by archetype rather than geography.  
        </p>  
      </div>

      {/* The 3x3 Grid */}  
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">  
        {ARCHETYPES.concat(ARCHETYPES).slice(0, 9).map((item, idx) => (  
          <div key={idx} className="relative aspect-square group overflow-hidden bg-stone-900 border border-stone-800/30">  
            {/* Archetype Image */}  
            <div   
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-70"  
              style={{ backgroundImage: `url(${item.img})` }}  
            />  
              
            {/* Overlay Gradient */}  
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

            {/* Content */}  
            <div className="absolute inset-0 p-8 flex flex-col justify-end">  
              <span className="text-[10px] text-[#d4af37] font-mono mb-2 opacity-60">{item.id}</span>  
              <h3 className="font-serif text-2xl text-stone-100 group-hover:translate-x-2 transition-transform duration-500">{item.name}</h3>  
                
              {/* Expandable Brass Line */}  
              <div className="h-[1px] bg-[#d4af37] w-8 group-hover:w-full transition-all duration-700 my-4" />  
                
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 leading-loose">  
                {item.description}  
              </p>  
            </div>  
          </div>  
        ))}  
      </div>

      {/* Grid Footer */}  
      <div className="max-w-6xl mx-auto mt-12 flex justify-between items-center text-[9px] uppercase tracking-[0.4em] text-stone-600">  
        <span>Displaying 01 — 09</span>  
        <button className="hover:text-[#d4af37] transition-colors">Request Full Ledger Access —&gt;</button>  
      </div>  
    </div>  
  );  
}  
