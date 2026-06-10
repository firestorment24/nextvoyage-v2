import React from 'react'  
import Link from 'next/link'

export default function PerspectivePage() {  
  const articles = [  
    {  
      volume: '01',  
      title: 'The Silent ROI',  
      tagline: 'Logistics as a Performance System',  
      description:  
        'Power is often measured by what you can move, but for the elite traveler, it is measured by what moves for you. We treat logistics as a silent choreography that removes friction before it reaches the mind. This is the recovery of focus and the luxury of arriving completely composed.',  
      image: 'https://cdn.marblism.com/847349TlG49.webp',  
      category: 'Editorial',  
      date: 'June 2026',  
    },  
    {  
      volume: '02',  
      title: 'Architecture of Calm',  
      tagline: 'The Tactile Reality of Seclusion',  
      description:  
        'A true sanctuary is defined by what it filters out. We curate environments where stone meets silence—from fortified private estates to hushed heritage suites. It is a world of deliberate sightlines and closed doors, where the only thing on display is your own peace of mind.',  
      image: 'https://cdn.marblism.com/hvsJKd2n3Vn.webp',  
      category: 'Sanctuary Study',  
      date: 'May 2026',  
    },  
    {  
      volume: '03',  
      title: 'The Curated Horizon',  
      tagline: 'Claimed Space & The Unreachable',  
      description:  
        'There is a specific form of clarity that only arrives when the land recedes. Whether suspended over a turquoise reef or tracing the blue ice of the Antarctic, we ensure the view is entirely your own. It is the distance between heritage and discovery.',  
      image: 'https://cdn.marblism.com/ydeq-ITfEhC.webp',  
      category: 'Intellectual Travel',  
      date: 'April 2026',  
    },  
  ]

  return (  
    <div className="min-h-screen bg-[#0a0a0a] text-[#d4d4d4] font-serif selection:bg-[#333] selection:text-[#fff]">  
      {/* Navigation */}  
      <nav className="flex justify-between items-center px-8 py-12 border-b border-[#1a1a1a]">  
        <Link href="/" className="text-xl tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">  
          NexVoyage Collective  
        </Link>  
        <div className="flex gap-12 text-sm uppercase tracking-widest opacity-60">  
          <Link href="/archive" className="hover:opacity-100 transition-opacity">Archive</Link>  
          <Link href="/perspective" className="opacity-100 border-b border-[#d4d4d4]">Perspective</Link>  
          <Link href="/reserve" className="hover:opacity-100 transition-opacity">Reserve</Link>  
        </div>  
      </nav>

      {/* Header */}  
      <header className="px-8 py-24 max-w-4xl">  
        <h1 className="text-6xl md:text-8xl mb-6 font-light tracking-tight">The Perspective</h1>  
        <p className="text-xl opacity-50 font-sans tracking-wide">Intellectual Insights & Observations</p>  
      </header>

      {/* Article Grid */}  
      <main className="px-8 pb-32">  
        <div className="grid grid-cols-1 gap-32">  
          {articles.map((article) => (  
            <section key={article.volume} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start border-t border-[#1a1a1a] pt-16">  
              <div className="space-y-8">  
                <div className="flex items-center gap-4 text-xs tracking-[0.3em] uppercase opacity-40 font-sans">  
                  <span>Volume {article.volume}</span>  
                  <span className="w-8 h-[1px] bg-[#d4d4d4]"></span>  
                  <span>{article.category}</span>  
                </div>  
                <h2 className="text-4xl md:text-5xl font-light">{article.title}</h2>  
                <h3 className="text-lg italic opacity-70 tracking-wide">{article.tagline}</h3>  
                <p className="text-lg leading-relaxed opacity-60 max-w-xl font-sans">  
                  {article.description}  
                </p>  
                <div className="pt-4">  
                  <span className="text-xs uppercase tracking-widest opacity-40 font-sans">{article.date}</span>  
                </div>  
              </div>  
              <div className="relative aspect-[4/5] bg-[#111] overflow-hidden group">  
                <img   
                  src={article.image}   
                  alt={article.title}  
                  className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"  
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-40"></div>  
              </div>  
            </section>  
          ))}  
        </div>  
      </main>

      {/* Footer */}  
      <footer className="px-8 py-24 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-end gap-12">  
        <div className="space-y-4">  
          <p className="text-xs tracking-[0.4em] uppercase opacity-30">© 2026 NexVoyage Collective</p>  
          <p className="text-sm opacity-50 max-w-xs font-sans italic">  
            A private travel engine for the high-net-worth individual.  
          </p>  
        </div>  
        <div className="text-right">  
          <Link href="/reserve" className="text-2xl font-light hover:opacity-50 transition-opacity border-b border-[#d4d4d4]">  
            Secure a Private Inquiry  
          </Link>  
        </div>  
      </footer>  
    </div>  
  )  
}  
