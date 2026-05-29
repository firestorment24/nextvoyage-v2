import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="py-20 px-6 text-center bg-gray-50 border-b">
        <h1 className="text-5xl font-light tracking-widest uppercase mb-4">NexVoyage Collective</h1>
        <p className="text-xl italic text-gray-600">The ROI of Reset: Elite Luxury for the High-Net-Worth Traveler.</p>
      </header>

      {/* Sanctuaries Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-light uppercase tracking-widest mb-12 text-center">The Nine Sanctuaries</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Floating", desc: "Bespoke superyacht charters and polar expeditions (Antarctica21)." },
            { title: "Education", desc: "Elite university tours and global educational heritage journeys." },
            { title: "Performance", desc: "Specialized logistics and seamless movement for world-class talent." },
            { title: "Alpine", desc: "First Track access and private chalets in exclusive mountain corridors." },
            { title: "Heritage", desc: "The art of legacy, centered on quiet luxury and timeless artistry." },
            { title: "Stadium", desc: "Global event fixer for the World Cup, Olympics, and Fanatics Fest." },
            { title: "Mobile", desc: "Expedition glamping and private yacht fjord explorations." },
            { title: "Wellness", desc: "Neural optimization and radical recovery for cognitive restoration." },
            { title: "Sweet", desc: "Curated VIP travel and guides for the confectionery industry." }
          ].map((s) => (
            <div key={s.title} className="border-l border-gray-200 pl-6 py-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider mb-2">{s.title} Sanctuary</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Collective Difference */}
      <section className="py-16 bg-gray-900 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light uppercase tracking-widest mb-6">The Collective Difference</h2>
          <p className="text-lg text-gray-300 leading-relaxed italic">
            "Where luxury meets legacy. We don't just book travel; we architect your private sanctuary."
          </p>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-light uppercase tracking-widest mb-8">Start the Conversation</h2>
        <p className="mb-10 text-gray-600 italic">Direct. Friction-free. Pure abundance.</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a href="https://cal.com/nexvoyagecollective" className="bg-black text-white px-8 py-4 uppercase tracking-widest hover:bg-gray-800 transition">
            Book a Discovery Call
          </a>
          <button className="border border-black px-8 py-4 uppercase tracking-widest hover:bg-gray-100 transition">
            Send a Message
          </button>
        </div>
      </section>

      {/* Legal Footer */}
      <footer className="py-12 bg-gray-50 border-t px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm text-gray-500">
          <div>
            <h4 className="font-bold text-black uppercase mb-4">Impact & Safety</h4>
            <p>Our commitment to security through vetted partners and proactive guidance.</p>
          </div>
          <div>
            <h4 className="font-bold text-black uppercase mb-4">Terms</h4>
            <p>All bookings subject to our high-touch service standards and third-party terms.</p>
          </div>
          <div>
            <h4 className="font-bold text-black uppercase mb-4">Privacy</h4>
            <p>Data sovereignty for HNW individuals. Explicit consent for all security referrals.</p>
          </div>
        </div>
        <div className="text-center mt-12 text-xs uppercase tracking-widest text-gray-400">
          © 2026 NexVoyage Collective
        </div>
      </footer>
    </div>
  );
}
