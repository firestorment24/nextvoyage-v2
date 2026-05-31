"use client";

export default function Perspective() {  
  return (  
    <main className="bg-black text-white pt-40 pb-20">  
      <div className="container mx-auto px-6">  
        <header className="text-center mb-40">  
          <p className="font-sans text-[10px] uppercase tracking-[0.8em] text-neutral-500 mb-8">Journal</p>  
          <h1 className="font-serif text-6xl md:text-9xl mb-12">The Perspective</h1>  
          <div className="h-[1px] w-32 bg-white/20 mx-auto" />  
        </header>

        <article className="grid md:grid-cols-12 gap-16 items-center mb-60">  
          <div className="md:col-span-5">  
            <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-8 underline">Theory 01</p>  
            <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-12">The Silent ROI of <br /><span className="italic">Absolute Stillness.</span></h2>  
            <p className="font-sans text-neutral-400 leading-loose text-sm mb-12 uppercase tracking-widest">  
              In an age of hyper-connectivity, the greatest competitive advantage is the ability to disconnect. We examine why the global elite are trading performance metrics for silence.  
            </p>  
            <button className="font-serif text-xl italic hover:text-neutral-500 transition-all">Read the Essay →</button>  
          </div>  
          <div className="md:col-span-7 aspect-video bg-neutral-900 border border-white/5 overflow-hidden">  
            <img   
              src="https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?auto=format&fit=crop&q=80&w=1500"   
              className="object-cover w-full h-full grayscale opacity-50"  
            />  
          </div>  
        </article>

        <section className="border-t border-white/5 pt-32 grid md:grid-cols-3 gap-24">  
          {[1, 2, 3].map((i) => (  
            <div key={i} className="group cursor-pointer">  
              <div className="aspect-square bg-neutral-950 mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">  
                <img src={`https://images.unsplash.com/photo-1518005020251-582c7897655d?auto=format&fit=crop&q=80&w=800&sig=${i}`} className="object-cover h-full w-full" />  
              </div>  
              <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-neutral-600 mb-4">Perspective / {i < 10 ? `0${i}` : i}</p>  
              <h3 className="font-serif text-2xl group-hover:italic transition-all">Architecture of Isolation: Why remote builds define the new luxury.</h3>  
            </div>  
          ))}  
        </section>  
      </div>  
    </main>  
  );  
}  
