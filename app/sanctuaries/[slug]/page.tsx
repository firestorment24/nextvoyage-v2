import { notFound } from 'next/navigation';  
import Navigation from '../../../components/Navigation';  
import Footer from '../../../components/Footer';  
import { SANCTUARIES_DATA } from '../../../data/sanctuaries';

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

      {/* Hero: High-End Lookbook Style */}  
      <section className="relative h-[90vh] flex items-end pb-24 px-6 md:px-12">  
        <div className="absolute inset-0 z-0">  
          <img   
            src={sanctuary.heroImage}   
            className="w-full h-full object-cover opacity-50"  
            alt={sanctuary.name}  
          />  
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />  
        </div>

        <div className="relative z-10 max-w-5xl">  
          <span className="text-xs tracking-[0.6em] uppercase text-gray-400 mb-6 block">  
            {sanctuary.location}  
          </span>  
          <h1 className="text-7xl md:text-[10rem] mb-12 tracking-tighter leading-none font-extralight">  
            {sanctuary.name}  
          </h1>  
          <p className="text-xl md:text-3xl text-gray-300 max-w-3xl font-light leading-relaxed italic serif">  
            "{sanctuary.editorialQuote}"  
          </p>  
        </div>  
      </section>

      {/* Travel Assets: The Pivot away from ROI */}  
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">  
          <div className="space-y-4">  
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-gray-500 font-bold">Privacy Specification</h3>  
            <p className="text-3xl font-light tracking-tight">{sanctuary.privacySpec}</p>  
          </div>  
          <div className="space-y-4">  
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-gray-500 font-bold">Exclusive Asset</h3>  
            <p className="text-3xl font-light tracking-tight">{sanctuary.exclusiveAmenity}</p>  
          </div>  
          <div className="space-y-4">  
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-gray-500 font-bold">Guest Protocol</h3>  
            <p className="text-3xl font-light tracking-tight">{sanctuary.guestLimit} Guests Max</p>  
          </div>  
        </div>  
      </section>

      {/* The Narrative */}  
      <section className="py-32 px-6 max-w-4xl mx-auto">  
        <div className="space-y-12">  
          <p className="text-2xl md:text-3xl leading-relaxed text-gray-300 font-light italic">  
            {sanctuary.description}  
          </p>  
          <div className="h-px w-20 bg-white/20" />  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-400 text-lg leading-relaxed font-light">  
             {/* You can add more detailed paragraphs here from your data */}  
             <p>Access to this sanctuary is managed exclusively via NexVoyage Collective. Private air or sea transit is required for arrival.</p>  
          </div>  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
