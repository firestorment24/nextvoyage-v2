import Link from 'next/link';

const SANCTUARIES = [  
{ name: 'Metropolitan', category: 'Urban Centers', slug: 'metropolitan' },  
{ name: 'Floating', category: 'Open Waters', slug: 'floating' },  
{ name: 'Island', category: 'Remote Archipelagos', slug: 'island' },  
{ name: 'Alpine', category: 'High Altitudes', slug: 'alpine' },  
{ name: 'Stadium', category: 'Elite Arenas', slug: 'stadium' },  
{ name: 'Cinematic', category: 'Masterpiece Sets', slug: 'cinematic' },  
{ name: 'Fortress', category: 'Historic Strongholds', slug: 'fortress' },  
{ name: 'Safari', category: 'Wild Savannas', slug: 'safari' },  
{ name: 'Oasis', category: 'Arid Hidden Gems', slug: 'oasis' },  
];

export default function Home() {  
return (  
  <div className="bg-white">  
    {/* Hero Section */}  
    <section className="h-[80vh] flex flex-col justify-center items-center text-center px-6">  
      <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase mb-8">  
        NexVoyage<br />Collective  
      </h1>  
      <p className="text-sm uppercase tracking-[0.5em] text-neutral-400">  
        Curating the Unreachable  
      </p>  
    </section>

    {/* Philosophy */}  
    <section className="max-w-xl mx-auto px-6 py-32 text-center">  
      <h2 className="text-xs uppercase tracking-widest text-neutral-400 mb-8">The Philosophy</h2>  
      <p className="text-2xl font-light leading-snug">  
        We do not just book travel. We engineer sanctuaries. For those who have seen everything, we find the things that haven't been seen.  
      </p>  
    </section>

    {/* The 9-Sanctuary Grid */}  
    <section className="grid grid-cols-1 md:grid-cols-3">  
      {SANCTUARIES.map((s) => (  
        <Link   
          key={s.slug}   
          href={`/sanctuary/${s.slug}`}  
          className="group relative aspect-square border-[0.5px] border-neutral-100 flex flex-col justify-end p-8 overflow-hidden hover:bg-neutral-50 transition-colors"  
        >  
          <div className="relative z-10">  
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1">{s.category}</p>  
            <h3 className="text-xl font-medium uppercase tracking-tighter">{s.name}</h3>  
          </div>  
          <span className="absolute top-8 right-8 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">  
            Explore Sanctuary  
          </span>  
        </Link>  
      ))}  
    </section>  
  </div>  
);  
}  
