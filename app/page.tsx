import React from 'react'

export default function HomePage() {    
  const partners = [    
    { name: 'AMAN', style: 'font-serif tracking-[0.5em] font-light' },    
    { name: 'BELMOND', style: 'font-serif tracking-widest font-medium' },    
    { name: 'ROSEWOOD', style: 'font-serif italic font-light' },    
    { name: 'ONE&ONLY', style: 'font-sans font-bold tracking-tighter' },    
    { name: 'SINGITA', style: 'font-sans font-light tracking-[0.2em]' },    
    { name: 'SIX SENSES', style: 'font-sans font-extralight tracking-widest' },    
    { name: 'MANDARIN ORIENTAL', style: 'font-serif font-semibold tracking-tight' },    
    { name: 'FOUR SEASONS', style: 'font-serif font-light' },    
    { name: 'ST. REGIS', style: 'font-serif font-black tracking-tighter' },    
    { name: 'A&K', style: 'font-serif tracking-tighter font-medium' },    
    { name: 'ORIENT EXPRESS', style: 'font-serif italic tracking-widest' },    
    { name: 'SCOTT DUNN', style: 'font-sans font-medium' },    
    { name: 'REGENT', style: 'font-serif font-bold tracking-widest' },    
    { name: 'EXPLORA', style: 'font-sans tracking-[0.3em] font-light' },    
    { name: 'SILVERSEA', style: 'font-serif uppercase tracking-normal' }    
  ]

  const properties = [    
    {    
      name: 'Silversands Beach House,    
      location: 'St. George's, Granada',    
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/2a/6b/4c/two-bedroom-suite-king.jpg?w=1400&h=-1&s=1',    
      id: 'silversands-beach-house'    
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
      {/* Final Nuclear Fix for Ghost Boxes */}    
      <style dangerouslySetInnerHTML={{ __html: `    
        * { background-color: transparent !important; box-shadow: none !important; }    
        html, body, main { background-color: black !important; }    h2 { color: #C5A059 !important; }        h1, h2, h3, p, span, a, div { background: none !important; border-color: transparent !important; }    
        .border-y { border-top: 1px solid rgba(197, 160, 89, 0.2) !important; border-bottom: 1px solid rgba(197, 160, 89, 0.2) !important; }    
      `}} />

      {/* Hero Section */}    
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">    
        <img     
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/9a/b3/f2/chable-villa.jpg?w=1800&h=-1&s=1"     
          className="absolute inset-0 w-full h-full object-cover opacity-70"    
          alt="Chablé Villa Hero"    
        />    
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40"></div>    
        <div className="relative z-10 text-center px-4">    
<h1     
  style={{ color: 'white', fontFamily: "'Cormorant Garamond', serif" }}     
  className="text-6xl md:text-8xl font-serif font-light tracking-tighter mb-4"    
>    
  The Art of Discerning Travel    
</h1> 
          <p className="text-xl uppercase tracking-[0.3em] font-extralight text-[#C5A059]/90">    
            NexVoyage Collective    
          </p>    
        </div>    
      </section>

      {/* Partner Alliance - All text updated to White */}    
      <section className="py-8 border-y border-[#C5A059]/20">    
        <div className="max-w-5xl mx-auto px-6">    
          <div className="grid grid-cols-3 md:grid-cols-5 gap-y-6 gap-x-4 items-center text-center">    
            {partners.map((partner) => (    
              <span key={partner.name} className={`text-white opacity-80 text-[10px] md:text-[12px] ${partner.style}`}>    
                {partner.name}    
              </span>    
            ))}    
          </div>    
        </div>    
      </section>

      {/* Property Showcase */}    
      <section className="py-24 px-6 max-w-7xl mx-auto">    
        <h2 className="text-[#C5A059] text-2xl uppercase tracking-[0.4em] mb-16 text-center font-light">    
          The Sanctuary Collection    
        </h2>    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">    
          {properties.map((prop) => (    
            <a key={prop.id} href={`/archive/${prop.id}`} className="group block">    
              <div className="overflow-hidden aspect-[3/4] mb-6 bg-neutral-900">    
                <img     
                  src={prop.image}     
                  alt={prop.name}    
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"    
                />    
              </div>    
<h3   
  style={{ fontFamily: "'Cormorant Garamond', serif" }}   
  className="text-2xl font-serif font-light tracking-tight !text-white mb-2"  
>  
  {prop.name}  
</h3>  
              <p className="text-[#C5A059] text-[11px] uppercase tracking-[0.25em] font-medium">    
                {prop.location}    
              </p>    
            </a>    
          ))}    
        </div>    
      </section>    
    </main>    
  )    
}  
