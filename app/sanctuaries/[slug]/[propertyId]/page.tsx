import { properties } from '../../../../data/properties';  
import Navigation from '../../../Navigation';  
import Footer from '../../../Footer';  
import { notFound } from 'next/navigation';

// Local interface to fix the type check error  
interface Property {  
  id: string;  
  name: string;  
  location: string;  
  image: string;  
  description: string;  
}

function EliteAmenities() {  
  const perks = [  
    {  
      title: "Daily Breakfast",  
      desc: "Full breakfast for two daily at the hotel restaurant.",  
      icon: (  
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">  
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />  
        </svg>  
      )  
    },  
    {  
      title: "$100 Resort Credit",  
      desc: "To be used on dining, spa, or resort activities.",  
      icon: (  
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">  
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />  
        </svg>  
      )  
    },  
    {  
      title: "Priority Upgrade",  
      desc: "Room upgrade upon arrival, subject to availability.",  
      icon: (  
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">  
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 11l7-7 7 7M5 19l7-7 7 7" />  
        </svg>  
      )  
    },  
    {  
      title: "Flexible Arrival",  
      desc: "Early check-in and late check-out priority.",  
      icon: (  
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">  
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />  
        </svg>  
      )  
    }  
  ];

  return (  
    <section className="py-16 border-t border-white/10">  
      <div className="max-w-7xl mx-auto px-6">  
        <h2 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2">The Collective Perks</h2>  
        <h3 className="text-3xl font-light mb-12">Elite Amenities</h3>  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">  
          {perks.map((perk) => (  
            <div key={perk.title} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">  
              <div className="text-white/60 mb-4 group-hover:text-white transition-colors">  
                {perk.icon}  
              </div>  
              <h4 className="text-lg font-medium mb-2">{perk.title}</h4>  
              <p className="text-sm text-white/50 leading-relaxed">{perk.desc}</p>  
            </div>  
          ))}  
        </div>  
      </div>  
    </section>  
  );  
}

export default function PropertyPage({ params }: { params: { slug: string; propertyId: string } }) {  
  // Casting to our local interface to ensure the 'image' property is recognized  
  const property = (properties as Property[]).find(p => p.id === params.propertyId);

  if (!property) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-black text-white">  
      <Navigation />  
        
      {/* Hero Section */}  
      <section className="relative h-[70vh] w-full">  
        <img   
          src={property.image}   
          alt={property.name}  
          className="w-full h-full object-cover opacity-80"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />  
        <div className="absolute bottom-12 left-12">  
          <h1 className="text-5xl font-light tracking-tight mb-4">{property.name}</h1>  
          <p className="text-xl text-white/70 uppercase tracking-widest">{property.location}</p>  
        </div>  
      </section>

      {/* Property Details */}  
      <div className="max-w-4xl mx-auto px-6 py-24">  
        <p className="text-xl leading-relaxed font-light text-white/80">  
          {property.description}  
        </p>  
      </div>

      {/* Amenities Section */}  
      <EliteAmenities />

      {/* Booking CTA */}  
      <section className="py-24 bg-white/[0.02]">  
        <div className="text-center">  
          <h2 className="text-2xl font-light mb-8 italic">Ready for the NexVoyage experience?</h2>  
          <a   
            href={`/reserve?property=${property.id}`}  
            className="inline-block px-12 py-4 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-500"  
          >  
            Request Reservation  
          </a>  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
