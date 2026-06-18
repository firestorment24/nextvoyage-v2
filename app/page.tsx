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
    <main className="min-h-screen bg-black">  
      <Navigation />  
        
      {/* Hero Section */}  
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">  
        <div   
          className="absolute inset-0 bg-cover bg-center z-0"   
          style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/2a/6b/4c/two-bedroom-villa.jpg?w=1200&h=-1&s=1')" }}  
        />  
        <div className="absolute inset-0 bg-black/50 z-10" />  
          
        <div className="relative z-20 text-center px-4">  
          <p className="tracking-[0.3em] !text-[#C5A059] !text-xl uppercase mb-4">  
            The Sanctuary Collection  
          </p>  
          <h1 className="!text-white font-serif text-5xl md:text-7xl italic leading-tight">  
            The Art of Discerning Travel  
          </h1>  
        </div>  
      </section>

      {/* Strategic Alliances */}  
      <section className="py-24 border-t border-neutral-900">  
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">  
          <h2 className="!text-white font-serif text-3xl mb-16 italic text-center">Strategic Alliances</h2>  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">  
            {partners.map((partner) => (  
              <div key={partner.name} className="flex flex-col items-center">  
                <span className="!text-white uppercase tracking-[0.2em] text-xs mb-2">{partner.name}</span>  
                <span className="text-neutral-600 text-[10px] uppercase tracking-widest">{partner.role}</span>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>  
    </main>  
  

{/* Property Grid */}  
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  
          {properties.map((prop) => (  
            <div key={prop.id} className="group cursor-pointer">  
              <div className="aspect-[4/5] overflow-hidden mb-6 bg-neutral-900">  
                <img   
                  src={prop.image}   
                  alt={prop.name}  
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"  
                />  
              </div>  
              <h3 className="!text-white font-serif text-2xl mb-1">{prop.name}</h3>  
              <p className="text-neutral-500 uppercase tracking-widest text-xs" dangerouslySetInnerHTML={{ __html: prop.location }} />  
            </div>  
          ))}  
        </div>  
      </section>
);  
}  
