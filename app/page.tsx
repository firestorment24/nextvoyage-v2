import Navigation from '@/components/Navigation';

export default function HomePage() {  
const properties = [  
  {  
    name: "Silversands Beach House",  
    location: "St. George&apos;s, Grenada",  
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/2a/6b/4c/two-bedroom-villa.jpg?w=1200&h=-1&s=1",  
    id: "silversands-beach-house"  
  },  
  {  
    name: "The Silversands Origin",  
    location: "Grand Anse Beach, Grenada",  
    image: "https://images.squarespace-cdn.com/content/v1/5b30693a31d0d970364c783c/1531238466638-0S9I7X9P4X5Y5Z5Z5Z5Z/Silversands+Grenada+1.jpg",  
    id: "silversands-origin"  
  },  
  {  
    name: "Mount Cinnamon",  
    location: "St. George&apos;s, Grenada",  
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/228182414.jpg?k=3f8e4c7d9a1d1e6e9b4d8a2d3c4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u&o=&hp=1",  
    id: "mount-cinnamon"  
  }  
];

const partners = [  
  { name: "Fora Travel", role: "Flagship Partner" },  
  { name: "Virtuoso", role: "Luxury Network" },  
  { name: "Four Seasons Preferred", role: "Elite Status" },  
  { name: "Belmond Bellini Club", role: "Private Access" },  
  { name: "Rosewood Elite", role: "Preferred Partner" },  
  { name: "Dorchester Diamond", role: "Exclusive Benefits" },  
  { name: "Mandarin Oriental Fan Club", role: "Priority Status" },  
  { name: "Rocco Forte Knights", role: "VIP Leverage" }  
];

return (  
 {/* NUCLEAR CSS: Kills ghost boxes globally */}  
<style dangerouslySetInnerHTML={{ __html: `  
  div, section, article, header { background-color: transparent !important; }  
  main, body, html { background-color: #000000 !important; }  
  .hero-gradient { background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%) !important; }  
`}} />  

    <Navigation />  
      
    {/* 1. HERO SECTION - Updated Image */}  
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">  
      <div   
        className="absolute inset-0 bg-cover bg-center z-0"   
        style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/9a/b3/f2/chable-villa.jpg?w=1800&h=-1&s=1')" }}  
      />  
      <div className="absolute inset-0 hero-gradient z-10" />  
        
      <div className="relative z-20 text-center px-4">  
        <p className="tracking-[0.4em] !text-[#C5A059] !text-xl uppercase mb-6 !font-serif">  
          The Sanctuary Collection  
        </p>  
        <h1 className="!text-white !font-serif text-6xl md:text-8xl italic leading-tight">  
          The Art of Discerning Travel  
        </h1>  
      </div>  
    </section>

    {/* 2. STRATEGIC ALLIANCES */}  
    <section className="py-20 border-b border-neutral-900 !bg-black">  
      <div className="max-w-7xl mx-auto px-6 md:px-12">  
        <h2 className="!text-white !font-serif text-2xl mb-12 italic text-center tracking-widest opacity-80 uppercase">Strategic Alliances</h2>  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">  
          {partners.map((partner) => (  
            <div key={partner.name} className="flex flex-col items-center">  
              <span className="!text-white uppercase tracking-[0.2em] text-[10px] md:text-xs mb-2 !font-sans">{partner.name}</span>  
              <span className="text-neutral-600 text-[9px] uppercase tracking-widest !font-sans">{partner.role}</span>  
            </div>  
          ))}  
        </div>  
      </div>  
    </section>

    {/* 3. THE GUARDIAN LAYER */}  
    <section className="py-24 !bg-black">  
      <div className="max-w-5xl mx-auto px-6 text-center">  
        <h2 className="!text-[#C5A059] !font-serif text-4xl md:text-5xl italic mb-8">The Guardian Layer</h2>  
        <p className="!text-white !font-serif text-xl md:text-2xl leading-relaxed mb-16 opacity-90 max-w-3xl mx-auto">  
          Bespoke travel management for the discerning elite. We navigate the complexities of global travel so your journey remains seamless, secure, and infinitely elevated.  
        </p>  
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left border-t border-neutral-900 pt-16">  
          <div>  
            <h4 className="!text-[#C5A059] !font-serif text-lg uppercase tracking-widest mb-4">Invisible Advocacy</h4>  
            <p className="text-neutral-400 text-sm leading-relaxed">24/7 global flight support and real-time logistics management. We solve problems before they reach your itinerary.</p>  
          </div>  
          <div>  
            <h4 className="!text-[#C5A059] !font-serif text-lg uppercase tracking-widest mb-4">Status Leverage</h4>  
            <p className="text-neutral-400 text-sm leading-relaxed">Direct access to the world&apos;s most exclusive hospitality networks, securing resort credits, upgrades, and private benefits.</p>  
          </div>  
          <div>  
            <h4 className="!text-[#C5A059] !font-serif text-lg uppercase tracking-widest mb-4">Tactical Oversight</h4>  
            <p className="text-neutral-400 text-sm leading-relaxed">Coordinated private transfers and elite logistical vetting. We ensure every touchpoint meets our rigorous standards.</p>  
          </div>  
        </div>  
      </div>  
    </section>

    {/* 4. THE COLLECTION */}  
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-neutral-900 !bg-black">  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">  
        {properties.map((prop) => (  
          <div key={prop.id} className="group cursor-pointer">  
            <div className="aspect-[4/5] overflow-hidden mb-8 bg-neutral-900 shadow-2xl">  
              <img   
                src={prop.image}   
                alt={prop.name}  
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"  
              />  
            </div>  
            <h3 className="!text-white !font-serif text-3xl mb-2">{prop.name}</h3>  
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-[10px]" dangerouslySetInnerHTML={{ __html: prop.location }} />  
          </div>  
        ))}  
      </div>  
    </section>

    <footer className="py-12 border-t border-neutral-900 text-center !bg-black">  
      <p className="text-neutral-700 text-[10px] uppercase tracking-[0.5em]">NexVoyage Collective &copy; 2026</p>  
    </footer>  
  </main>  
);  
}  
