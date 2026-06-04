import { notFound } from 'next/navigation';  
import Navigation from '../../Navigation'; // Two levels up to get to /app/  
import Footer from '../../Footer';         // Two levels up to get to /app/  
import { SANCTUARIES_DATA } from '../../../data/sanctuaries'; // Three levels up to get to /root/

export default function SanctuaryDetailPage({ params }: { params: { slug: string } }) {  
  const sanctuary = SANCTUARIES_DATA.find((s) => s.slug === params.slug);

  if (!sanctuary) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-[#F9F7F2] text-[#2C2C2C]">  
      <Navigation />  
        
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">  
        <span className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 block">  
          {sanctuary.location}  
        </span>  
        <h1 className="text-6xl md:text-8xl font-serif mb-8 italic">{sanctuary.name}</h1>  
        <p className="text-2xl font-light leading-relaxed text-gray-700 italic border-l-4 border-black pl-8 my-12">  
          "{sanctuary.tagline}"  
        </p>  
          
        <div className="aspect-video bg-neutral-200 w-full mb-12 shadow-2xl" />  
          
        <div className="prose prose-xl font-light text-gray-600">  
          <p>  
            Experience the pinnacle of privacy. Each dossier in our collection represents   
            the absolute edge of luxury travel—where the destination is secondary to the   
            purity of the sanctuary itself.  
          </p>  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
