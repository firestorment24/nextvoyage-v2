'use client';

import React, { useState } from 'react';

interface Testimonial {  
  quote: string;  
  name: string;  
  location: string;  
}

const TESTIMONIALS: Testimonial[] = [  
  {  
    quote: "Our Courchevel chalet fell through a week before departure. NexVoyage rebooked us into a private residence with a chef and nanny — better than the original, at the same cost. That's when we stopped booking anything ourselves.",  
    name: "Marcus T.",  
    location: "London"  
  },  
  {  
    quote: "We asked for a ten-day Japan itinerary spanning four generations — ages 8 to 82, including a parent with limited mobility. They handled every constraint before we raised it: barrier-free routes, private transfers, and a sake evening the grandparents still talk about.",  
    name: "The Nakamura Family",  
    location: "Singapore"  
  },  
  {  
    quote: "We'd been trying to secure a fully staffed Amalfi villa for our anniversary for months. NexVoyage had it confirmed in three days, with boat transfers, a private dinner on the water, and seamless airport coordination. We just showed up.",  
    name: "Claire & David R.",  
    location: "New York"  
  },  
  {  
    quote: "Our board needed a five-day offsite across three time zones — private aviation, separate arrival schedules, a secure venue, and zero downtime. They coordinated it like a military operation, but it felt effortless.",  
    name: "Jonathan K.",  
    location: "Zurich"  
  },  
  {  
    quote: "We wanted Botswana without the vehicle queues. They booked us into a private concession where we saw two lion kills and a leopard in one morning — just us, the guide, and the bush.",  
    name: "Elena V.",  
    location: "Dubai"  
  },  
  {  
    quote: "I needed to propose in Patagonia without my fiancée suspecting a thing. They coordinated a helicopter landing on a glacier, a private picnic, and a photographer hidden behind a rock. She said yes.",  
    name: "Oliver W.",  
    location: "Sydney"  
  },  
  {  
    quote: "My wife wanted to celebrate her 50th in a place that felt like 'nowhere else on earth.' They found a private island in the Seychelles I'd never heard of — three staff for every guest, absolute silence, and a bioluminescent bay.",  
    name: "Andrew H.",  
    location: "San Francisco"  
  },  
  {  
    quote: "My father uses a wheelchair and my mother refuses to feel like she's on a medical trip. NexVoyage designed a Tuscan villa stay with fully accessible routes, private drivers, and a chef who adapted every meal without being asked.",  
    name: "Dr. Rachel M.",  
    location: "Boston"  
  },  
  {  
    quote: "We had exactly five days between two work commitments. They built a Paris-to-Provence itinerary that felt like two weeks — private jet, a chef's table at Mirazur, and a hot-air balloon over the Luberon at dawn.",  
    name: "Daniel & Elaine G.",  
    location: "Geneva"  
  },  
  {  
    quote: "Our family office manages travel for three generations across five households. NexVoyage maintains a single calendar and budget dashboard for all of us. The kids don't overlap, the parents don't coordinate, and nothing falls through.",  
    name: "The Whitfield Family Office",  
    location: "London"  
  },  
  {  
    quote: "A typhoon grounded our seaplane in the Maldives. They had a private yacht at our resort within two hours, rerouted us to a different atoll, and the new villa was upgraded — no charge, no questions asked.",  
    name: "Priya S.",  
    location: "Mumbai"  
  },  
  {  
    quote: "I travel alone frequently for pleasure. NexVoyage vets every property for security, ensures I'm met at every transfer, and the local contacts are vetted. I never feel exposed — just looked after.",  
    name: "Amanda L.",  
    location: "Hong Kong"  
  },  
  {  
    quote: "We wanted three countries in two weeks for our honeymoon — no commercial flights, no luggage handling, no stress. They designed a routing through Morocco, Switzerland, and the Maldives that felt like one seamless journey.",  
    name: "Sofia & Matteo A.",  
    location: "Milan"  
  },  
  {  
    quote: "I told them I wanted 'something cold, remote, and beautiful.' They sent me to a glass-dome cabin in Finnish Lapland where I watched the Northern Lights from my bed. I didn't even know that existed.",  
    name: "Ronald J.",  
    location: "San Francisco"  
  },  
  {  
    quote: "We needed to transport a fragile artwork alongside our travel itinerary. NexVoyage coordinated climate-controlled shipping, customs clearance, and installation at our destination — all while we were in transit.",  
    name: "Catherine L.",  
    location: "Hong Kong"  
  },  
  {  
    quote: "I've booked with NexVoyage for over a decade. They know my preferences better than I do. I don't tell them where I want to go — I tell them how I want to feel, and they build the trip around it.",  
    name: "James P.",  
    location: "London"  
  }  
];

const ITEMS_PER_PAGE = 4;

export default function TestimonialCarousel() {  
  const [currentPage, setCurrentPage] = useState(0);  
  const totalPages = Math.ceil(TESTIMONIALS.length / ITEMS_PER_PAGE);

  const visible = TESTIMONIALS.slice(  
    currentPage * ITEMS_PER_PAGE,  
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE  
  );

  const goNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages - 1));  
  const goPrev = () => setCurrentPage((p) => Math.max(p - 1, 0));

  return (  
    <section className="relative py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">  
      {/* Section Label */}  
      <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase mb-12 text-center">  
        Client Perspectives  
      </p>

      {/* Carousel Container */}  
      <div className="relative">  
        {/* Left Arrow */}  
        <button  
          onClick={goPrev}  
          disabled={currentPage === 0}  
          className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white/40 hover:text-[#D4AF37] disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-300"  
          aria-label="Previous"  
        >  
          <svg width="20" height="34" viewBox="0 0 20 34" fill="none" className="stroke-current">  
            <path d="M18 2L4 17L18 32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>  
          </svg>  
        </button>

        {/* Right Arrow */}  
        <button  
          onClick={goNext}  
          disabled={currentPage === totalPages - 1}  
          className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white/40 hover:text-[#D4AF37] disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-300"  
          aria-label="Next"  
        >  
          <svg width="20" height="34" viewBox="0 0 20 34" fill="none" className="stroke-current">  
            <path d="M2 2L16 17L2 32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>  
          </svg>  
        </button>

        {/* Grid */}  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">  
          {visible.map((t, i) => (  
            <div  
              key={currentPage * ITEMS_PER_PAGE + i}  
              className="group relative flex flex-col border border-white/5 bg-white/[0.02] p-6 md:p-8 transition-all duration-500 hover:border-[#D4AF37]/20 hover:bg-white/[0.04]"  
            >  
              {/* Opening Quote */}  
              <span className="text-[#D4AF37] text-4xl font-serif leading-none mb-4 opacity-60">&ldquo;</span>

              {/* Quote Body */}  
              <p className="text-white/70 text-sm md:text-base font-light leading-relaxed font-sans flex-1">  
                {t.quote}  
              </p>

              {/* Attribution */}  
              <div className="mt-6 pt-4 border-t border-white/5">  
                <p className="text-white text-xs font-medium tracking-wide">{t.name}</p>  
                <p className="text-white/40 text-[10px] font-mono tracking-[0.15em] uppercase mt-1">{t.location}</p>  
              </div>  
            </div>  
          ))}  
        </div>  
      </div>

      {/* Dot Navigation */}  
      <div className="flex justify-center items-center gap-3 mt-10">  
        {Array.from({ length: totalPages }).map((_, i) => (  
          <button  
            key={i}  
            onClick={() => setCurrentPage(i)}  
            className={`w-2 h-2 rounded-full transition-all duration-500 ${  
              i === currentPage  
                ? 'bg-[#D4AF37] w-6'  
                : 'bg-white/20 hover:bg-white/40'  
            }`}  
            aria-label={`Page ${i + 1}`}  
          />  
        ))}  
      </div>  
    </section>  
  );  
}  
