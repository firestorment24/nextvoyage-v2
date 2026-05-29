import React from 'react';  
import Link from 'next/link';

export default function NexVoyageHome() {  
  const sanctuaries = [  
    { title: "Floating Sanctuary", desc: "Global superyacht charters and private maritime escapes." },  
    { title: "Education Sanctuary", desc: "Elite university tours and VIP educational logistics for the next generation." },  
    { title: "Performance Sanctuary", desc: "High-stakes logistics and privacy for bands, artists, and entertainment tours." },  
    { title: "Alpine Sanctuary", desc: "Private chalets and 'First Track' mountain corridor access. Partnered with Ski The Globe." },  
    { title: "Heritage Sanctuary", desc: "The artistry of quiet luxury, centered on properties like Las Ventanas al Paraíso." },  
    { title: "Stadium Sanctuary", desc: "The ultimate event fixer. Priority access for World Cup and Olympics. (Note: LA28 Prime Inventory like Maybourne BH is already committed—contact us for immediate secondary block strategy.)" },  
    { title: "Mobile Sanctuary", desc: "Expedition luxury: Dream of the Desert camps and private fjord expeditions in Norway & Iceland." },  
    { title: "Wellness Sanctuary", desc: "Neural optimization and radical recovery at Blackberry Mountain and Andronis Santorini." },  
    { title: "Sweet Sanctuary", desc: "Specialized VIP travel, transfers, and hotel blocks for the global confectionery industry circuit." }  
  ];

  return (  
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">  
      {/* Hero Section */}  
      <section className="py-20 px-6 text-center bg-stone-900 text-stone-100">  
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">NexVoyage Collective</h1>  
        <p className="text-xl md:text-2xl font-light italic opacity-80 max-w-2xl mx-auto">  
          Refined Exploration. Elite Luxury. Your private sanctuary is waiting.  
        </p>  
      </section>

      {/* The 9 Sanctuaries */}  
      <section className="py-24 px-6 max-w-6xl mx-auto">  
        <h2 className="text-3xl font-light tracking-widest uppercase mb-16 text-center border-b pb-4 border-stone-200">The Sanctuary Tiers</h2>  
        <div className="grid md:grid-cols-3 gap-12">  
          {sanctuaries.map((s, i) => (  
            <div key={i} className="space-y-4">  
              <h3 className="text-xl font-medium tracking-tight border-l-2 border-stone-900 pl-4">{s.title}</h3>  
              <p className="text-stone-600 leading-relaxed font-light">{s.desc}</p>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* Safety & Impact */}  
      <section className="bg-stone-100 py-20 px-6">  
        <div className="max-w-4xl mx-auto text-center">  
          <h2 className="text-2xl font-light mb-8 italic">Our Commitment to Impact & Safety</h2>  
          <p className="text-stone-700 leading-relaxed font-light">  
            Beyond the logistics of luxury, we prioritize traveler safety and meaningful global impact in every corridor we operate.  
          </p>  
        </div>  
      </section>

      {/* Contact CTA */}  
      <section className="py-24 px-6 text-center">  
        <h2 className="text-4xl font-light mb-8">Ready for Departure?</h2>  
        <Link   
          href="https://cal.com/nexvoyagecollective"   
          className="inline-block bg-stone-900 text-stone-100 px-12 py-4 tracking-widest uppercase text-sm hover:bg-stone-800 transition-colors"  
        >  
          Secure Your Sanctuary  
        </Link>  
      </section>

      {/* Footer & Legal */}  
      <footer className="py-12 px-6 border-t border-stone-200 text-xs text-stone-500 uppercase tracking-widest text-center space-y-4">  
        <p>© 2026 NexVoyage Collective | NexVoyage Collective Website Team</p>  
        <div className="flex justify-center space-x-6">  
          <Link href="/privacy" className="hover:text-stone-900 transition-colors">Privacy Policy</Link>  
          <Link href="/terms" className="hover:text-stone-900 transition-colors">Terms of Service</Link>  
          <Link href="/consent" className="hover:text-stone-900 transition-colors">Data Consent</Link>  
        </div>  
        <p className="pt-4 opacity-50">Powered by Fora Travel</p>  
      </footer>  
    </div>  
  );  
}  
