const sanctuaries = [  
{ id: '01', name: 'Metropolitan', loc: 'Toronto / NYC', desc: 'Urban discretion for the global elite.' },  
{ id: '02', name: 'Floating', loc: 'Antarctica', desc: 'Remote exploration without compromise.' },  
{ id: '03', name: 'Island', loc: 'The Exumas', desc: 'Private archipelago seclusion.' },  
{ id: '04', name: 'Alpine', loc: 'The Swiss Alps', desc: 'High-altitude recovery and clarity.' },  
{ id: '05', name: 'Stadium', loc: 'New York City', desc: 'Elite access to the world’s arenas.' },  
{ id: '06', name: 'Cinematic', loc: 'Los Angeles', desc: 'Industry-first logistics and privacy.' },  
{ id: '07', name: 'Soulful', loc: 'West Africa', desc: 'The heartbeat of global culture.' },  
{ id: '08', name: 'Education', loc: 'Orlando / Global', desc: 'Strategic stays for leading minds.' },  
{ id: '09', name: 'Mobile', loc: 'Global Transit', desc: 'Seamless luxury in motion.' },  
];

export default function Home() {  
return (  
  <section className="py-24 px-8 bg-white">  
    <div className="max-w-6xl mx-auto">  
      <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 mb-16 text-center">The Nine Sanctuaries</h2>  
        
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">  
        {sanctuaries.map((s) => (  
          <div key={s.id} className="bg-white p-12 group hover:bg-[#F5F5F0] transition-all duration-700 cursor-pointer">  
            <span className="text-[10px] font-sans text-neutral-300 block mb-8 group-hover:text-neutral-500 transition-colors">PILLAR {s.id}</span>  
            <h3 className="text-2xl font-serif mb-2 tracking-tight">{s.name}</h3>  
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6">{s.loc}</p>  
            <p className="text-sm text-neutral-500 leading-relaxed font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-700">  
              {s.desc}  
            </p>  
          </div>  
        ))}  
      </div>  
    </div>  
  </section>  
);  
}  
