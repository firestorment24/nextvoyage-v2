import { notFound } from 'next/navigation';  
import Navigation from '@/components/Navigation';  
import Footer from '@/components/Footer';  
import { SANCTUARIES_DATA } from '@/data/sanctuaries';

interface PageProps {  
  params: { slug: string };  
}

export async function generateStaticParams() {  
  return SANCTUARIES_DATA.map((s) => ({  
    slug: s.slug,  
  }));  
}

export default function SanctuaryDetail({ params }: PageProps) {  
  const sanctuary = SANCTUARIES_DATA.find((s) => s.slug === params.slug);

  if (!sanctuary) return notFound();

  return (  
    <main className="bg-[#0a0a0a] text-white min-h-screen">  
      <Navigation />

      <section className="relative h-screen flex items-end pb-24 px-6 md:px-12">  
        <div className="absolute inset-0 z-0">  
          <img   
            src={sanctuary.heroImage}   
            className="w-full h-full object-cover opacity-60"  
            alt={sanctuary.name}  
          />  
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />  
        </div>

        <div className="relative z-10 max-w-5xl">  
          <span className="text-sm tracking-[0.5em] uppercase text-gray-400 mb-4 block">  
            {sanctuary.location}  
          </span>  
          <h1 className="text-6xl md:text-9xl mb-8 tracking-tighter leading-none">  
            {sanctuary.name}  
          </h1>  
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed italic">  
            "{sanctuary.editorialQuote}"  
          </p>  
        </div>  
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  
          <div>  
            <h3 className="text-xs tracking-widest uppercase text-gray-500 mb-4">Privacy Level</h3>  
            <p className="text-2xl font-light">{sanctuary.privacySpec}</p>  
          </div>  
          <div>  
            <h3 className="text-xs tracking-widest uppercase text-gray-500 mb-4">The Asset</h3>  
            <p className="text-2xl font-light">{sanctuary.exclusiveAmenity}</p>  
          </div>  
          <div>  
            <h3 className="text-xs tracking-widest uppercase text-gray-500 mb-4">Capacity</h3>  
            <p className="text-2xl font-light">{sanctuary.guestLimit} Guests Max</p>  
          </div>  
        </div>  
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto prose prose-invert prose-lg">  
        <p className="text-2xl leading-relaxed text-gray-300 mb-12">  
          {sanctuary.description}  
        </p>  
      </section>

      <Footer />  
    </main>  
  );  
}  
