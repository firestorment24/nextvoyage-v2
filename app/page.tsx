import React from 'react'

export default function HomePage() {  
  const properties = [  
    {  
      name: 'Chablé Villa',  
      location: 'Yucatán, Mexico',  
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/9a/b3/f2/chable-villa.jpg?w=1800&h=-1&s=1',  
      id: 'chable-villa'  
    },  
    {  
      name: 'Aman New York',  
      location: 'Manhattan, USA',  
      image: 'https://www.aman.com/sites/default/files/2022-08/Correct_Aman%20New%20York_Landscape.jpg',  
      id: 'aman-new-york'  
    },  
    {  
      name: 'Amangiri',  
      location: 'Canyon Point, Utah',  
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Amangiri_Spa_at_Night.jpg/1200px-Amangiri_Spa_at_Night.jpg',  
      id: 'amangiri'  
    }  
  ]

  return (  
    <main className="bg-black text-white min-h-screen">  
      {/*   
          EXTREME NUCLEAR FIX:   
          Forcibly removing every possible background color, shadow, and border   
          that could create "ghost white boxes" around text elements.  
      */}  
      <style dangerouslySetInnerHTML={{ __html: `  
        * {   
          background-color: transparent !important;   
          background-image: none !important;   
          box-shadow: none !important;   
          text-shadow: none !important;   
        }  
        html, body, main, #__next {   
          background-color: black !important;   
        }  
        h1, h2, h3, h4, p, span, a, div, section, article {   
          background: none !important;   
          background-color: transparent !important;  
        }  
        /* Restore specific image visibility */  
        img { opacity: inherit; }  
        /* Restore intentional borders only */  
        .border-y { border-top-width: 1px !important; border-bottom-width: 1px !important; border-color: rgba(255,255,255,0.1) !important; }  
      `}} />

      {/* Hero Section */}  
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">  
        <img   
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/9a/b3/f2/chable-villa.jpg?w=1800&h=-1&s=1"   
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale"  
          alt="Chablé Villa Hero"  
        />  
        <div className="relative z-10 text-center">  
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-[#C5A059] mb-4">  
            The Art of Discerning Travel  
          </h1>  
          <p className="text-xl uppercase tracking-[0.3em] font-extralight text-white">  
            NexVoyage Collective  
          </p>  
        </div>  
      </section>

      {/* Strategic Alliances - Tightened & Slimmed */}  
      <section className="py-6 border-y border-white/10">  
        <div className="max-w-4xl mx-auto px-6">  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40 grayscale hover:opacity-100 transition-opacity duration-700 items-center text-center italic font-serif text-base tracking-widest">  
            <span>AMAN</span>  
            <span>BELMOND</span>  
            <span>ROSEWOOD</span>  
            <span>O&O</span>  
          </div>  
        </div>  
      </section>

      {/* Featured Property Showcase */}  
      <section className="py-24 px-6 max-w-7xl mx-auto">  
        <h2 className="text-[#C5A059] text-sm uppercase tracking-widest mb-16 text-center font-light">The Sanctuary Collection</h2>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  
          {properties.map((prop) => (  
            <a key={prop.id} href={`/archive/${prop.id}`} className="group block">  
              <div className="overflow-hidden aspect-[3/4] mb-6 bg-neutral-900 border border-white/5">  
                <img   
                  src={prop.image}   
                  alt={prop.name}  
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"  
                />  
              </div>  
              <h3 className="text-2xl font-light tracking-tight text-white">{prop.name}</h3>  
              <p className="text-white/40 text-sm uppercase tracking-widest mt-2">{prop.location}</p>  
            </a>  
          ))}  
        </div>  
      </section>  
    </main>  
  )  
}  
