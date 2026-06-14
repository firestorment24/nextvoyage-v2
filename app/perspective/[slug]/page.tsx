import React from 'react';

// This would ideally fetch from your CMS/Penny's resources  
const content = {  
  title: "The Architecture of Calm",  
  subtitle: "Vol. 02 — Our Philosophy",  
  heroImage: "https://cdn.marblism.com/VymBul776ZU.webp",  
  body: [  
    { type: 'text', text: "It is a rare thing, in an age defined by the noise of the immediate, to find a moment that feels entirely, and exclusively, yours..." },  
    { type: 'image', url: "https://cdn.marblism.com/rYQTev1orML.webp", caption: "Tactile reality of seclusion." },  
    { type: 'heading', text: "The Invisible Hand of Curation" },  
    { type: 'text', text: "Curation is not merely about choosing the 'best' hotels or the 'most exclusive' destinations. It is an intellectual exercise..." }  
  ]  
};

export default function VolumePage() {  
  return (  
    <article className="bg-[#0A0A0A] min-h-screen text-[#F5F5F5] font-serif selection:bg-[#B8860B] selection:text-black">  
      {/* Immersive Hero */}  
      <section className="relative h-screen w-full flex items-end pb-24 px-8 md:px-24">  
        <div className="absolute inset-0 z-0">  
          <img src={content.heroImage} className="w-full h-full object-cover opacity-40" alt="" />  
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />  
        </div>  
          
        <div className="relative z-10 max-w-4xl">  
          <span className="text-[#B8860B] font-sans text-xs tracking-[0.4em] uppercase mb-6 block">  
            {content.subtitle}  
          </span>  
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter leading-none mb-8">  
            {content.title}  
          </h1>  
        </div>  
      </section>

      {/* Editorial Content */}  
      <section className="max-w-3xl mx-auto px-8 py-32 space-y-16">  
        {content.body.map((block, idx) => {  
          if (block.type === 'text') {  
            return <p key={idx} className="text-xl md:text-2xl font-light leading-relaxed text-[#CCC]">{block.text}</p>;  
          }  
          if (block.type === 'heading') {  
            return <h2 key={idx} className="text-4xl md:text-5xl font-light pt-8 border-t border-[#1A1A1A]">{block.text}</h2>;  
          }  
          if (block.type === 'image') {  
            return (  
              <figure key={idx} className="my-24 -mx-8 md:-mx-24">  
                <img src={block.url} className="w-full grayscale hover:grayscale-0 transition-all duration-1000" alt="" />  
                <figcaption className="text-[#555] font-sans text-[10px] uppercase tracking-widest mt-4 text-center">{block.caption}</figcaption>  
              </figure>  
            );  
          }  
          return null;  
        })}  
      </section>  
        
      {/* Footer Navigation */}  
      <footer className="py-24 px-8 md:px-24 border-t border-[#1A1A1A] text-center">  
        <Link href="/perspective" className="text-[#B8860B] hover:text-white transition-colors uppercase tracking-widest text-xs font-sans">  
          Return to Perspectives  
        </Link>  
      </footer>  
    </article>  
  );  
}  
