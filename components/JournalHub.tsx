import Link from 'next/link';

const entries = [  
  {  
    slug: 'the-south-pacific-drift',  
    title: 'The South Pacific Drift',  
    category: 'Intelligence',  
    date: 'JUNE 2026',  
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'  
  },  
  {  
    slug: 'european-prestige-anchors',  
    title: 'European Prestige Anchors',  
    category: 'Seasonal',  
    date: 'JUNE 2026',  
    img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b'  
  }  
];

export function JournalHub() {  
  return (  
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">  
      {entries.map((entry) => (  
        <Link key={entry.slug} href={`/journal/${entry.slug}`} className="group block">  
          <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">  
            <img src={entry.img} alt={entry.title} className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700" />  
            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">  
              <span className="text-xs uppercase tracking-widest text-zinc-400">{entry.category} // {entry.date}</span>  
              <h3 className="text-2xl font-light text-white mt-2">{entry.title}</h3>  
            </div>  
          </div>  
        </Link>  
      ))}  
    </section>  
  );  
}  
