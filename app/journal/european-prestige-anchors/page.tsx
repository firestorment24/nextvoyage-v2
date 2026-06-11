import Link from 'next/link';

export default function EuropeanPrestigePage() {  
  return (  
    <main className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] pt-32 pb-24 px-6">  
      <div className="max-w-4xl mx-auto">  
        <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-stone-500 mb-8">  
          <Link href="/journal" className="hover:text-black transition-colors">Journal</Link>  
          <span>/</span>  
          <span className="text-black">Intelligence</span>  
        </div>

        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">  
          European Prestige Anchors  
        </h1>  
        <p className="text-xl text-stone-600 font-light mb-12 italic">  
          "The shift from Old World luxury to Living History: Why the anchors of the Mediterranean remain the ultimate hedge against the ordinary."  
        </p>

        <div className="aspect-[16/9] bg-stone-200 mb-16 overflow-hidden">  
          <img   
            src="https://images.unsplash.com/photo-1519922639192-e73293ca430e?auto=format&fit=crop&q=80"   
            alt="Mediterranean Estate"   
            className="w-full h-full object-cover opacity-90"  
          />  
        </div>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">  
          <div className="md:col-span-4">  
            <h3 className="text-xs uppercase tracking-widest font-semibold mb-4">Tactical ROI</h3>  
            <ul className="space-y-4 text-sm text-stone-600">  
              <li><span className="text-black font-medium">Front-Row Access:</span> Strategic placement for the Monaco Grand Prix and Cannes.</li>  
              <li><span className="text-black font-medium">Legacy Ledger:</span> Properties where the service is measured in generations, not years.</li>  
              <li><span className="text-black font-medium">The Silence Premium:</span> Private villas within legendary estate grounds.</li>  
            </ul>  
          </div>  
          <div className="md:col-span-8 prose prose-stone font-light leading-relaxed">  
            <p>  
              In the UHNW landscape, "luxury" is a commodity. "Prestige" is a legacy. As we move into the peak European season, the tactical focus shifts from the discovery of the new to the fortification of the known.  
            </p>  
            <p>  
              The European Prestige Anchors are not merely hotels; they are the gravity wells of their respective regions. To secure a suite at <strong>Hotel du Cap-Eden-Roc</strong> isn't just about the view of the Mediterranean—it's about the decades of gatekeeping that ensure the person in the next cabana is a peer, not a tourist.  
            </p>  
          </div>  
        </section>

        <section className="space-y-24">  
          <div className="group">  
            <div className="flex flex-col md:flex-row gap-8 items-center">  
              <div className="w-full md:w-1/2 aspect-[4/5] bg-stone-200 overflow-hidden">  
                <img   
                  src="https://images.unsplash.com/photo-1560624056-444268965851?auto=format&fit=crop&q=80"   
                  alt="Hotel du Cap-Eden-Roc"   
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"  
                />  
              </div>  
              <div className="w-full md:w-1/2">  
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400">The Cinematic Anchor</span>  
                <h2 className="text-3xl font-light mt-2 mb-4 text-black">Hotel du Cap-Eden-Roc</h2>  
                <p className="text-stone-600 font-light mb-6">  
                  The playground of legends. Our tactical edge here involves the newly renovated Dior Spa and private Riva transfers to Cannes, bypassing the seasonal gridlock.  
                </p>  
                <Link href="/reserve?property=hotel-du-cap" className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-stone-500 hover:border-stone-500 transition-all">  
                  Request Intelligence Dossier  
                </Link>  
              </div>  
            </div>  
          </div>

          <div className="group">  
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">  
              <div className="w-full md:w-1/2 aspect-[4/5] bg-stone-200 overflow-hidden">  
                <img   
                  src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80"   
                  alt="Hotel de Paris Monte-Carlo"   
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"  
                />  
              </div>  
              <div className="w-full md:w-1/2">  
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400">The Stadium Anchor</span>  
                <h2 className="text-3xl font-light mt-2 mb-4 text-black">Hotel de Paris Monte-Carlo</h2>  
                <p className="text-stone-600 font-light mb-6">  
                  Front row at Casino Square. We focus on the Diamond Suites—penthouses that offer the only private vantage points for the world's most exclusive race track.  
                </p>  
                <Link href="/reserve?property=hotel-de-paris" className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-stone-500 hover:border-stone-500 transition-all">  
                  Inquire for Summer Season  
                </Link>  
              </div>  
            </div>  
          </div>  
        </section>

        <footer className="mt-32 pt-12 border-t border-stone-200 flex justify-between items-center text-xs uppercase tracking-widest">  
          <Link href="/journal/the-south-pacific-drift" className="text-stone-400 hover:text-black transition-colors">  
            ← Previous: South Pacific Drift  
          </Link>  
          <Link href="/concierge" className="bg-black text-white px-8 py-3 hover:bg-stone-800 transition-colors">  
            Contact Concierge  
          </Link>  
        </footer>  
      </div>  
    </main>  
  );  
}  
