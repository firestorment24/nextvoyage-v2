import { notFound } from 'next/navigation';  
import Navigation from '../../Navigation';  
import Footer from '../../Footer';  
import { SANCTUARIES_DATA } from '../../../data/sanctuaries';

export default function SanctuaryDetailPage({ params }: { params: { slug: string } }) {  
  const sanctuary = SANCTUARIES_DATA.find((s) => s.slug === params.slug);

  if (!sanctuary) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-[#F9F7F2] text-[#2C2C2C]">  
      <Navigation />  
        
      {/* Editorial Header */}  
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">  
        <div className="flex flex-col md:flex-row gap-12 items-end mb-20">  
          <div className="flex-1">  
            <span className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-6 block">Sanctuary Category</span>  
            <h1 className="text-7xl md:text-9xl font-serif tracking-tighter italic mb-4">{sanctuary.name}</h1>  
            <p className="text-2xl font-light text-gray-500 italic">"{sanctuary.tagline}"</p>  
          </div>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-black/10 pt-16">  
          {/* Category Description */}  
          <div className="md:col-span-1">  
            <h2 className="text-xs uppercase tracking-widest font-bold mb-6">The Philosophy</h2>  
            <p className="text-lg leading-relaxed text-gray-700 font-light">  
              {sanctuary.categoryDescription}  
            </p>  
          </div>

          {/* This is where the Properties/Deals will live */}  
          <div className="md:col-span-2">  
            <h2 className="text-xs uppercase tracking-widest font-bold mb-8">Featured Properties & Monthly Dossiers</h2>  
              
            {/* Empty State / Coming Soon for properties */}  
            <div className="bg-white/50 border border-dashed border-black/10 p-12 text-center">  
              <p className="text-gray-400 font-serif italic text-xl mb-4">Our June highlights for {sanctuary.name} are being finalized.</p>  
              <button className="text-xs uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-gray-500 transition-colors">  
                Request Early Access  
              </button>  
            </div>  
              
            {/* Future Property Cards would go here */}  
          </div>  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
