import React from 'react';

const NexVoyageHome = () => {
  return (
    <div className="bg-stone-50 text-stone-900 font-sans leading-relaxed">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center bg-stone-200">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            The World, Curated.
          </h1>
          <p className="text-xl md:text-2xl font-light text-stone-600 mb-10 max-w-2xl mx-auto">
            Refined journeys for the discerning traveler. Your next discovery is waiting.
          </p>
          <a href="https://cal.com/nexvoyagecollective" className="inline-block border border-stone-900 px-10 py-4 hover:bg-stone-900 hover:text-white transition-all uppercase tracking-widest text-sm">
            Begin Your Journey
          </a>
        </div>
      </section>

      {/* THE COLLECTIVE DIFFERENCE */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-[0.3em] text-stone-400 mb-8">The Collective Difference</h2>
        <h3 className="text-4xl font-light mb-8">Standards without compromise.</h3>
        <p className="text-lg text-stone-600 leading-loose">
          NexVoyage Collective is for those who seek the exceptional. Leveraging Fora’s global elite network, 
          we provide more than just a booking—we provide an elevated perspective. From off-market villa access 
          to seamless logistics, we handle the details so you can experience the pinnacle of global travel.
        </p>
      </section>

      {/* TWO-COLUMN: SAFETY & GIVE BACK */}
      <section className="py-24 bg-stone-100 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-light mb-4">Peace of mind, redefined.</h3>
            <p className="text-stone-600">
              High standards extend to your security. We partner with only the most vetted providers, 
              ensuring that every leg of your journey meets our rigorous safety protocols. Travel freely, 
              knowing every detail has been scrutinized.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-light mb-4">Purposeful exploration.</h3>
            <p className="text-stone-600">
              We believe true luxury includes leaving a positive mark. NexVoyage Collective proudly 
              supports Autism initiatives, ensuring that your journey contributes to a legacy of 
              inclusion and meaningful impact.
            </p>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="py-24 px-6 text-center bg-white border-y border-stone-200">
        <h3 className="text-3xl font-light mb-4">The 2026 Private Frontier.</h3>
        <p className="text-stone-500 mb-8 max-w-xl mx-auto italic text-lg">
          5 emerging destinations for the discerning traveler.
        </p>
        <p className="text-stone-600 mb-10 max-w-2xl mx-auto">
          Stay ahead of the curve. From the sophisticated solitude of Ninh Van Bay to the raw elegance 
          of Baja California East, discover the destinations setting the new standard for luxury.
        </p>
        <div className="flex justify-center">
          <input type="email" placeholder="Email Address" className="border-b border-stone-300 py-2 px-4 focus:outline-none focus:border-stone-900 w-64 mr-4" />
          <button className="bg-stone-900 text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-stone-800">
            Get the Guide
          </button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 text-center">
        <h2 className="text-4xl font-light mb-6">Elevate your expectations.</h2>
        <p className="mb-10 text-stone-600">Let’s design a journey that meets your standard.</p>
        <a href="https://cal.com/nexvoyagecollective" className="bg-stone-900 text-white px-12 py-5 text-sm tracking-widest uppercase hover:bg-stone-800">
          Book a Consultation
        </a>
      </section>
    </div>
  );
};

export default NexVoyageHome;
