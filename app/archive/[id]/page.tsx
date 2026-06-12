// app/archive/[id]/page.tsx  
import Link from 'next/link';

// Our Curated Ledger of Sanctuaries  
const SANCTUARIES = [  
  {  
    id: 'azure-heights',  
    name: 'Azure Heights',  
    location: 'Amalfi Coast, Italy',  
    tagline: 'Suspended above the sapphire.',  
    description: 'An infinity-edge villa carved into the cliffs, where the line between the Mediterranean and the architecture disappears. Experience the Amalfi from a height only the gods usually see.',  
    image: 'https://cdn.marblism.com/yBrJxDpEKzp.webp',  
    details: ['6 Suites', 'Private Helipad', 'Cliffs-edge Pool'],  
  },  
  {  
    id: 'velvet-pines',  
    name: 'Velvet Pines',  
    location: 'Zermatt, Switzerland',  
    tagline: 'The pinnacle of alpine silence.',  
    description: 'A minimalist glass chalet surrounded by ancient pines and the towering presence of the Matterhorn. Silence is the ultimate luxury here.',  
    image: 'https://cdn.marblism.com/uVf8PKIwMQs.webp',  
    details: ['5 Suites', 'Thermal Spa', 'Ski-in/Ski-out Access'],  
  },  
  {  
    id: 'obsidian-sands',  
    name: 'Obsidian Sands',  
    location: 'Southern Region, Iceland',  
    tagline: 'Fire and frost in perfect stasis.',  
    description: 'A brutalist masterpiece set against the black volcanic sands. Designed for those who find peace in the raw, unedited power of the Earth.',  
    image: 'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?auto=format&fit=crop&q=80',  
    details: ['4 Suites', 'Geothermal Bath', 'Aurora Observatory'],  
  },  
  {  
    id: 'gilded-dunes',  
    name: 'Gilded Dunes',  
    location: 'Empty Quarter, Abu Dhabi',  
    tagline: 'A mirage made manifest.',  
    description: 'A fortress of luxury hidden within the shifting sands. Modern architecture meets ancient desert wisdom.',  
    image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&q=80',  
    details: ['8 Palatial Tents', 'Private Dunes', 'Falconry Center'],  
  },  
  {  
    id: 'jade-canopy',  
    name: 'Jade Canopy',  
    location: 'Ubud, Bali',  
    tagline: 'The rhythm of the rainforest.',  
    description: 'A multi-level bamboo cathedral that breathes with the jungle. The boundary between indoors and the wild is nonexistent.',  
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80',  
    details: ['3 Eco-Villas', 'River-side Yoga Shala', 'Personal Chef'],  
  },  
  {  
    id: 'ivory-reef',  
    name: 'Ivory Reef',  
    location: 'Baa Atoll, Maldives',  
    tagline: 'Where the ocean becomes your floor.',  
    description: 'Over-water structures designed for total isolation. Accessible only by private seaplane, vetted for absolute privacy.',  
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80',  
    details: ['Uninhabited Atoll', 'Underwater Wine Cellar', 'Marine Biologist on Call'],  
  },  
  {  
    id: 'copper-ridge',  
    name: 'Copper Ridge',  
    location: 'Big Sky, Montana',  
    tagline: 'Primitive luxury in the wild.',  
    description: 'A ranch reimagined for the modern collector. Hand-hewn logs meet Italian marble in a valley that time forgot.',  
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',  
    details: ['12,000 Acres', 'Equestrian Center', 'Private Shooting Range'],  
  },  
  {  
    id: 'silver-horizon',  
    name: 'Silver Horizon',  
    location: 'Oia, Santorini',  
    tagline: 'The architecture of light.',  
    description: 'Cycladic minimalism refined to its purest form. Every corner is a study in shadow and light, overlooking the caldera.',  
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80',  
    details: ['3 Cliff-side Suites', 'Private Yacht Dock', 'Cave Spa'],  
  },  
];

export default function SanctuaryPage({ params }: { params: { id: string } }) {  
  const sanctuary = SANCTUARIES.find((s) => s.id === params.id);

  if (!sanctuary) return <div className="p-20 text-[#A69F88]">Sanctuary Not Found.</div>;

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#A69F88]">  
      {/* Cinematic Hero */}  
      <section className="relative h-[90vh] w-full overflow-hidden">  
        <img  
          src={sanctuary.image}  
          alt={sanctuary.name}  
          className="absolute inset-0 h-full w-full object-cover brightness-50"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />  
          
        <div className="absolute bottom-20 left-10 md:left-20 max-w-4xl">  
          <p className="text-[#A69F88] uppercase tracking-[0.3em] text-sm mb-4">  
            {sanctuary.location}  
          </p>  
          <h1 className="text-6xl md:text-8xl font-serif leading-tight">  
            {sanctuary.name}  
          </h1>  
          <p className="text-xl md:text-2xl font-light italic text-gray-300 mt-6">  
            "{sanctuary.tagline}"  
          </p>  
        </div>  
      </section>

      {/* The Essence & Vetting */}  
      <section className="max-w-7xl mx-auto px-10 md:px-20 py-32 grid grid-cols-1 md:grid-cols-2 gap-20">  
        <div>  
          <h2 className="text-[#A69F88] uppercase tracking-[0.2em] text-xs mb-10">The Essence</h2>  
          <p className="text-2xl leading-relaxed font-light text-gray-200">  
            {sanctuary.description}  
          </p>  
            
          <div className="mt-16 border-t border-white/10 pt-10 grid grid-cols-2 gap-6">  
            {sanctuary.details.map((detail) => (  
              <div key={detail} className="text-sm text-gray-400 font-mono">  
                — {detail}  
              </div>  
            ))}  
          </div>  
        </div>

        <div className="bg-[#141414] p-10 md:p-16 border border-white/5">  
          <h2 className="text-[#A69F88] uppercase tracking-[0.2em] text-xs mb-10">The NexVoyage Standard</h2>  
          <div className="space-y-8">  
            <div className="group">  
              <h3 className="text-lg font-serif mb-2 group-hover:text-[#A69F88] transition-colors">Vetted Isolation</h3>  
              <p className="text-sm text-gray-400 leading-relaxed">  
                Manually inspected by our security specialists for perimeter integrity and complete visual privacy from neighbors or air traffic.  
              </p>  
            </div>  
            <div className="group">  
              <h3 className="text-lg font-serif mb-2 group-hover:text-[#A69F88] transition-colors">Frictionless Logistics</h3>  
              <p className="text-sm text-gray-400 leading-relaxed">  
                Direct helipad or private runway coordination. Customs cleared on-site where available.  
              </p>  
            </div>  
            <div className="group">  
              <h3 className="text-lg font-serif mb-2 group-hover:text-[#A69F88] transition-colors">Invisible Concierge</h3>  
              <p className="text-sm text-gray-400 leading-relaxed">  
                A dedicated fixer stationed 15 minutes away, ensuring you never see them unless you need them.  
              </p>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Access CTA */}  
      <section className="py-40 text-center border-t border-white/10">  
        <h2 className="text-4xl font-serif mb-10">Desire Access?</h2>  
        <Link   
          href="/inquiry"  
          className="inline-block border border-[#A69F88] text-[#A69F88] px-12 py-5 uppercase tracking-[0.3em] text-sm hover:bg-[#A69F88] hover:text-[#0A0A0A] transition-all duration-500"  
        >  
          Secure Your Sanctuary  
        </Link>  
      </section>  
    </main>  
  );  
}  
