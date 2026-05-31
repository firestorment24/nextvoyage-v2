"use client";

const sanctuaries = [  
  { name: "The Forest Floor Pavilion", loc: "Kyoto, Japan", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874" },  
  { name: "Over-Water Obsidian", loc: "Noonu Atoll, Maldives", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688" },  
  { name: "The Glacial Monolith", loc: "Svartisen, Norway", img: "https://images.unsplash.com/photo-1516939884455-1445c8652f83" },  
  { name: "Desert Fortress", loc: "AlUla, Saudi Arabia", img: "https://images.unsplash.com/photo-1523306262731-aeff1374b401" }  
];

export default function Reserve() {  
  return (  
    <main className="bg-black text-white pt-40 pb-20 selection:bg-white/20">  
      <div className="container mx-auto px-6">  
        <header className="max-w-3xl mb-32">  
          <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-8">The Collection</p>  
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">The Reserve</h1>  
          <p className="font-serif text-xl text-neutral-400 italic leading-relaxed">  
            Sanctuaries curated not for their amenities, but for their ability to deliver a absolute reset.  
          </p>  
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">  
          {sanctuaries.map((item, i) => (  
            <div key={i} className={`group cursor-pointer ${i % 2 !== 0 ? 'md:mt-40' : ''}`}>  
              <div className="relative aspect-[4/5] overflow-hidden mb-8 border border-white/5">  
                <img   
                  src={`${item.img}?auto=format&fit=crop&q=80&w=1200`}  
                  className="object-cover w-full h-full grayscale opacity-60 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"  
                />  
                <div className="absolute top-6 left-6 font-sans text-[9px] uppercase tracking-[0.3em] bg-black/50 px-4 py-2 backdrop-blur-sm">  
                  Available for Inquiry  
                </div>  
              </div>  
              <div className="flex justify-between items-end">  
                <div>  
                  <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-2">{item.loc}</p>  
                  <h2 className="font-serif text-3xl group-hover:italic transition-all">{item.name}</h2>  
                </div>  
                <button className="font-sans text-[10px] uppercase tracking-[0.4em] text-neutral-600 group-hover:text-white transition-all underline underline-offset-8">  
                  View Dossier  
                </button>  
              </div>  
            </div>  
          ))}  
        </div>  
      </div>  
    </main>  
  );  
}  
