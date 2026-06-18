import React from 'react';  
import Link from 'next/link';  
import Image from 'next/image';

const HomePage = () => {  
  const partners = [  
    { name: "FORA TRAVEL", label: "Flagship Partner", font: "font-serif tracking-tighter" },  
    { name: "VIRTUOSO", label: "Preferred Network", font: "font-sans tracking-widest uppercase" },  
    { name: "AMAN", label: "Preferred Partner", font: "font-serif tracking-widest" },  
    { name: "FOUR SEASONS", label: "Preferred Partner", font: "font-sans tracking-tight uppercase" },  
    { name: "BELMOND", label: "Bellini Club", font: "font-serif italic tracking-wide" },  
    { name: "ROSEWOOD", label: "Elite Member", font: "font-sans tracking-widest uppercase" },  
    { name: "MANDARIN ORIENTAL", label: "Fan Club", font: "font-serif tracking-normal" },  
    { name: "PENINSULA", label: "PenClub", font: "font-serif tracking-widest uppercase" },  
    { name: "DORCHESTER", label: "Diamond Club", font: "font-serif tracking-tight" },  
    { name: "AUBERGE", label: "Preferred Partner", font: "font-sans tracking-widest uppercase" },  
    { name: "OETKER COLLECTION", label: "Pearl Partner", font: "font-serif tracking-tighter" },  
    { name: "HYATT", label: "Privé", font: "font-sans tracking-widest" }  
  ];
 
  const featured = [  
    { name: "Aman New York", location: "Manhattan, USA", img: "https://www.aman.com/sites/default/files/2022-08/Correct_Aman%20New%20York_Landscape.jpg" },  
    { name: "Hotel Amigo", location: "Brussels, Belgium", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/55/01/65/caption.jpg?w=1400&h=-1&s=1" },  
    { name: "Habitas AlUla", location: "Ashar Valley, Saudi Arabia", img: "https://www.ourhabitas.com/wp-content/uploads/2021/12/Habitas_Al-Ula_2021_01_000008.jpg" }  
  ];

  return (  
    <main className="min-h-screen bg-black text-white font-sans selection:bg-brass/30">  
      {/* NUCLEAR FIX 5.0: EXTERMINATING GHOST BOXES */}  
      <style dangerouslySetInnerHTML={{ __html: `  
        h1 {   
    font-family: 'Cormorant Garamond', serif !important;  
    font-weight: 300 !important;  
    font-style: italic !important; /* Optional: Looks incredible in Garamond */  
  }
        
        * {   
          background-color: transparent !important;   
          box-shadow: none !important;   
          text-shadow: none !important;  
          border-color: rgba(212, 175, 55, 0.15) !important;  
        }  
        html, body, main {   
          background-color: #000000 !important;   
        }  
        section, div[class*="container"] {   
          background-color: transparent !important;   
        }  
        h1, h2, h3, p, span, a, li {   
          background: none !important;  
          background-color: transparent !important;  
          backdrop-filter: none !important;  
          -webkit-backdrop-filter: none !important;  
        }  
        .brass-text { color: #d4af37 !important; }  
        .white-text { color: #ffffff !important; }  
          
        .animate-fade-in {  
          animation: fadeIn 2s ease-in-out;  
        }  
        @keyframes fadeIn {  
          from { opacity: 0; transform: translateY(10px); }  
          to { opacity: 1; transform: translateY(0); }  
        }  
      `}} />

     {/* Hero Section */}  
               <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">  
      <Image   
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/f2/d3/31/caption.jpg?w=1400&h=-1&s=1"  
        alt="NexVoyage Sanctuary"  
        fill  
        className="object-cover opacity-60"  
        priority  
        quality={100}  
      />   
        {/* Dark Overlay to blend with the Shadow aesthetic */}  
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />  
          
         <div className="relative z-10 text-center px-4 max-w-5xl">  
  <h1   
    className="brass-text text-5xl md:text-8xl mb-6 tracking-tight animate-fade-in"  
    style={{ fontFamily: "'Cormorant Garamond', serif" }}  
  >  
    The Art of Discerning Travel  
  </h1>  
  <p className="white-text text-lg md:text-xl font-light tracking-[0.4em] uppercase opacity-80">  
    Private Sanctuaries & Bespoke Journeys  
  </p>  
</div>  
      </section>

      {/* Partner Alliance Grid */}  
      <section className="py-24 px-6 max-w-6xl mx-auto">  
        <h2 className="white-text text-xs uppercase tracking-[0.3em] mb-16 text-center opacity-50">  
          The Global Alliance  
        </h2>  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">  
          {partners.map((partner, i) => (  
            <div key={i} className="text-center group">  
              <span className={`white-text text-lg block mb-2 ${partner.font} group-hover:text-[#d4af37] transition-colors`}>  
                {partner.name}  
              </span>  
              <span className="brass-text text-[10px] uppercase tracking-widest opacity-60">  
                {partner.label}  
              </span>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* Featured Sanctuaries */}  
      <section className="py-24">  
        <div className="max-w-7xl mx-auto px-6">  
          <div className="flex justify-between items-end mb-12">  
            <h2 className="brass-text text-4xl font-serif">The Sanctuary Collection</h2>  
            <Link href="/archive" className="white-text text-xs uppercase tracking-widest border-b border-brass pb-1 opacity-70 hover:opacity-100 transition-opacity">  
              View Entire Ledger  
            </Link>  
          </div>  
          <div className="grid md:grid-cols-3 gap-12">  
            {featured.map((item, i) => (  
              <div key={i} className="space-y-4 group cursor-pointer">  
                <div className="relative aspect-[4/5] overflow-hidden grayscale-0 hover:grayscale transition-all duration-700">  
                  <Image src={item.img} alt={item.name} fill className="object-cover" />  
                </div>  
                <div>  
                  <h3 className="white-text text-xl font-medium tracking-tight">{item.name}</h3>  
                  <p className="brass-text text-xs uppercase tracking-widest opacity-60">{item.location}</p>  
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>

{/* Client Testimonials Section */}  
<section className="py-24 bg-black border-t border-white/10">  
  <div className="max-w-7xl mx-auto px-6">  
    <h2 className="text-3xl md:text-4xl font-serif text-white mb-16 text-center italic">  
      Client Perspectives  
    </h2>  
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  
      {[  
        {  
          quote: "The level of discretion and curation provided by NexVoyage is unparalleled. They don't just find properties; they find sanctuaries.",  
          author: "Andrew H.",  
          location: "London / NYC"  
        },  
        {  
          quote: "A seamless transition from inquiry to acquisition. Their understanding of 'Quiet Luxury' is evident in every recommendation.",  
          author: "Daniel and Elaine G.",  
          location: "Geneva"  
        },  
        {  
          quote: "The Archive is a masterclass in discerning travel. Every detail was considered before I even had to ask.",  
          author: "Ronald J.",  
          location: "San Francisco"  
        }  
      ].map((testimonial, index) => (  
        <div key={index} className="flex flex-col items-center text-center">  
          <span className="text-[#d4af37] text-4xl mb-6 font-serif">“</span>  
          <p className="text-white/80 text-lg leading-relaxed mb-8 italic font-serif">  
            {testimonial.quote}  
          </p>  
          <div className="h-px w-8 bg-[#d4af37] mb-4"></div>  
          <p className="text-[#d4af37] uppercase tracking-[0.2em] text-xs font-bold">  
            {testimonial.author}  
          </p>  
          <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">  
            {testimonial.location}  
          </p>  
        </div>  
      ))}  
    </div>  
  </div>  
</section>  
      
      {/* The Guardian Layer (Services) */}  
      <section className="py-32 border-t border-brass/10">  
        <div className="max-w-4xl mx-auto text-center px-6">  
          <h2 className="brass-text text-sm uppercase tracking-[0.4em] mb-8">The Guardian Layer</h2>  
          <p className="white-text text-2xl md:text-4xl font-serif leading-relaxed mb-12">  
            We manage the complexities behind the scenes so you can remain focused on what matters most. From discreet off-market villa acquisitions to seamless global logistics and personalized concierge support, we provide an invisible layer of expertise, access, and protection at every stage of your journey.
          </p>  
          <div className="grid md:grid-cols-3 gap-8 text-left border-t border-brass/10 pt-12">  
            <div>  
              <span className="brass-text block mb-2 text-xs uppercase tracking-widest">01. Access</span>  
              <p className="white-text text-sm opacity-70">Unlisted inventory and private-member-only estates worldwide.</p>  
            </div>  
            <div>  
              <span className="brass-text block mb-2 text-xs uppercase tracking-widest">02. Intelligence</span>  
              <p className="white-text text-sm opacity-70">Deep-dive property vetting and real-time security coordination.</p>  
            </div>  
            <div>  
              <span className="brass-text block mb-2 text-xs uppercase tracking-widest">03. Continuity</span>  
              <p className="white-text text-sm opacity-70">Seamless travel transition with a single point of contact globally.</p>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Footer */}  
      <footer className="py-12 border-t border-brass/10 text-center">  
        <p className="brass-text text-[10px] uppercase tracking-[0.5em] opacity-40">  
          NexVoyage Collective &copy; 2026 | Pure Discretion  
        </p>  
      </footer>  
    </main>  
  );  
};

export default HomePage;  
