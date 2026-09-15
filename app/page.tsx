import React from 'react';  
import Link from 'next/link';  
import Image from 'next/image';  
import TestimonialCarousel from '@/components/TestimonialCarousel';  
import FirstConversationBlock from '@/components/FirstConversationBlock';  
import SeasonalSpotlight from '@/components/SeasonalSpotlight';

const partners = [  
  {  
    name: 'FORA TRAVEL',  
    label: 'Flagship Partner',  
    font: 'font-serif tracking-tighter',  
  },  
  {  
    name: 'VIRTUOSO',  
    label: 'Preferred Network',  
    font: 'font-sans tracking-widest uppercase',  
  },  
  {  
    name: 'AMAN',  
    label: 'Preferred Partner',  
    font: 'font-serif tracking-widest',  
  },  
  {  
    name: 'FOUR SEASONS',  
    label: 'Preferred Partner',  
    font: 'font-sans tracking-tight uppercase',  
  },  
  {  
    name: 'BELMOND',  
    label: 'Bellini Club',  
    font: 'font-serif italic tracking-wide',  
  },  
  {  
    name: 'ROSEWOOD',  
    label: 'Elite Member',  
    font: 'font-sans tracking-widest uppercase',  
  },  
  {  
    name: 'MANDARIN ORIENTAL',  
    label: 'Fan Club',  
    font: 'font-serif tracking-normal',  
  },  
  {  
    name: 'PENINSULA',  
    label: 'PenClub',  
    font: 'font-serif tracking-widest uppercase',  
  },  
  {  
    name: 'DORCHESTER',  
    label: 'Diamond Club',  
    font: 'font-serif tracking-tight',  
  },  
  {  
    name: 'AUBERGE',  
    label: 'Preferred Partner',  
    font: 'font-sans tracking-widest uppercase',  
  },  
  {  
    name: 'OETKER COLLECTION',  
    label: 'Pearl Partner',  
    font: 'font-serif tracking-tighter',  
  },  
  {  
    name: 'HYATT',  
    label: 'Privé',  
    font: 'font-sans tracking-widest',  
  },  
];

const featured = [  
  {  
    name: 'Capella Ubud',  
    location: 'Bali, Indonesia',  
    category: 'Wild Frontiers',  
    slug: 'capella-ubud',  
    img: '/api/image?url=https%3A%2F%2Fw0ijk7zmvlb7mxph.private.blob.vercel-storage.com%2FProperty%20Images%2FCapella%20Ubud%2Fubud-accommodation-tent-river-exterior.jpg',  
  },  
  {  
    name: 'Dunton Hot Springs',  
    location: 'Colorado, USA',  
    category: 'Mountain & Forest',  
    slug: 'dunton-hot-springs',  
    img: '/api/image?url=https%3A%2F%2Fw0ijk7zmvlb7mxph.private.blob.vercel-storage.com%2FProperty%20Images%2FDunton_Hot%20Springs%2FDHS%201.jpg',  
  },  
  {  
    name: 'Bulgari Hotel Tokyo',  
    location: 'Tokyo, Japan',  
    category: 'Urban Sovereigns',  
    slug: 'bulgari-hotel-tokyo',  
    img: '/api/image?url=https%3A%2F%2Fw0ijk7zmvlb7mxph.private.blob.vercel-storage.com%2FProperty%20Images%2FBVLGARI_Tokyo%2FBH%20Tokyo3.jpeg',  
  },  
];

const editorial = [  
  {  
    title: 'Europe’s Best Christmas Markets for 2026',  
    category: 'Seasonal / Winter',  
    slug: 'europes-best-christmas-markets-2026',  
    excerpt:  
      'A curated winter pilgrimage through the historic alleyways of Central Europe, featuring private after-hours artisan access and fireside heritage estates.',  
    image: 'https://cdn.marblism.com/VymBul776ZU.webp',  
    meta: 'Editorial · Nov 2026',  
  },  
  {  
    title: 'The Mekong Sanctuary: Heritage Line Expedition',  
    category: 'Expedition / Asia',  
    slug: 'the-mekong-sanctuary-heritage-line',  
    excerpt:  
      'Navigating the historic waters of Southeast Asia aboard Heritage Line boutique river vessels with complete privacy and bespoke land choreography.',  
    image: 'https://cdn.marblism.com/FbN5RhzyLun.webp',  
    meta: 'Editorial · Aug 2026',  
  },  
  {  
    title: 'Craft & Coast: A Venetian Sanctuary Itinerary',  
    category: 'Itinerary / Cultural',  
    slug: 'craft-and-coast-venetian-sanctuary',  
    excerpt:  
      'An unhurried exploration of Venetian heritage uniting Villa Barbarich with private, behind-the-scenes access to the masters of Homo Faber.',  
    image: 'https://cdn.marblism.com/3GCxqGcplNJ.webp',  
    meta: 'Editorial · Aug 2026',  
  },  
];

const pillars = [  
  {  
    number: '01',  
    title: 'Access',  
    subtitle: 'The Private Collection',  
    body:  
      'Beyond the reach of public listings lies a sequestered ledger of unlisted estates and off-market retreats, secured through two decades of global leverage.',  
  },  
  {  
    number: '02',  
    title: 'Intelligence',  
    subtitle: 'The Sentinel Standard',  
    body:  
      'We vet for what cannot be seen. From technical security to behavioral vetting, every property and partner is audited to ensure your absolute sanctuary.',  
  },  
  {  
    number: '03',  
    title: 'The Constant',  
    subtitle: 'Seamless Stewardship',  
    body:  
      'A singular, unwavering point of contact for your entire global footprint. We manage the friction of travel so you never have to encounter it.',  
  },  
];

export default function HomePage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] font-serif text-white selection:bg-[#D4AF37] selection:text-black">  
      {/* Hero */}  
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">  
        <Image  
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80"  
          alt="NexVoyage Sanctuary"  
          fill  
          className="object-cover opacity-60"  
          priority  
          quality={100}  
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black" />

        <div className="relative z-10 max-w-5xl px-4 text-center">  
          <h1  
            className="mb-6 text-5xl tracking-tight text-[#D4AF37] md:text-8xl"  
            style={{ fontWeight: 300 }}  
          >  
            The Art of Discerning Travel  
          </h1>

          <p className="font-sans text-lg font-light uppercase tracking-[0.4em] text-white/70 md:text-xl">  
            Private Sanctuaries &amp; Bespoke Journeys  
          </p>  
        </div>  
      </section>

      {/* Seasonal Spotlight Carousel */}  
      <SeasonalSpotlight />

      {/* Founder Section */}  
      <section className="mx-auto max-w-6xl border-b border-white/10 px-6 py-24">  
        <div className="grid items-center gap-16 md:grid-cols-2">  
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden md:mx-0">  
            <img  
              src="/api/image?url=https%3A%2F%2Fw0ijk7zmvlb7mxph.private.blob.vercel-storage.com%2FHeadshot%2FDaryl%2520Clark_Headshot.jpeg"  
              alt="Daryl Clark"  
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"  
            />

            <div className="pointer-events-none absolute inset-0 border border-[#D4AF37]/30" />  
          </div>

          <div className="space-y-6">  
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#D4AF37]">  
              Founder &amp; Principal  
            </span>

            <h2 className="text-4xl font-light tracking-tight text-white md:text-5xl">  
              Daryl Clark  
            </h2>

            <div className="h-px w-12 bg-[#D4AF37]/50" />

            <p className="font-sans text-sm font-light leading-relaxed text-white/70 md:text-base">  
              Two decades navigating the world&apos;s most demanding  
              itineraries — from sub-polar archipelagos to private  
              concessions in the Okavango. NexVoyage Collective was built on a  
              singular thesis: true luxury isn&apos;t about where you go, but  
              how you arrive.  
            </p>

            <p className="font-sans text-sm font-light leading-relaxed text-white/70 md:text-base">  
              Our background spans private security routing, off-market estate  
              sourcing, and family office travel stewardship — translating  
              complex, detail-sensitive logistics into the invisible  
              choreography that defines a seamless journey.  
            </p>  
          </div>  
        </div>  
      </section>

      {/* Global Alliance */}  
      <section className="mx-auto max-w-6xl px-6 py-24">  
        <h2 className="mb-16 text-center font-sans text-xs uppercase tracking-[0.3em] text-white/40">  
          The Global Alliance  
        </h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-4">  
          {partners.map((partner) => (  
            <div key={partner.name} className="group text-center">  
              <span  
                className={`mb-2 block text-lg text-white transition-colors duration-500 group-hover:text-[#D4AF37] ${partner.font}`}  
              >  
                {partner.name}  
              </span>

              <span className="font-sans text-[10px] uppercase tracking-widest text-[#D4AF37] opacity-60">  
                {partner.label}  
              </span>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* Sanctuary Collection */}  
      <section className="py-24">  
        <div className="mx-auto max-w-7xl px-6">  
          <div className="mb-16 flex items-end justify-between">  
            <h2 className="text-4xl font-light tracking-tight text-[#D4AF37]">  
              The Sanctuary Collection  
            </h2>

            <Link  
              href="/archive"  
              className="border-b border-[#D4AF37] pb-1 font-sans text-xs uppercase tracking-widest text-white/60 transition-colors hover:text-white"  
            >  
              View Entire Ledger  
            </Link>  
          </div>

          <div className="grid gap-12 md:grid-cols-3">  
            {featured.map((item) => (  
              <Link  
                key={item.slug}  
                href={`/archive/property/${item.slug}`}  
                className="group cursor-pointer space-y-4"  
              >  
                <div className="relative aspect-[4/5] overflow-hidden">  
                  <img  
                    src={item.img}  
                    alt={item.name}  
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"  
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />  
                </div>

                <div>  
                  <span className="font-sans text-[9px] uppercase tracking-widest text-white/30">  
                    {item.category}  
                  </span>

                  <h3 className="text-xl font-light tracking-tight text-white">  
                    {item.name}  
                  </h3>

                  <p className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] opacity-60">  
                    {item.location}  
                  </p>  
                </div>  
              </Link>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* From the Perspective */}  
      <section className="py-24">  
        <div className="mx-auto max-w-7xl px-6">  
          <div className="mb-16 flex items-end justify-between">  
            <div>  
              <h2 className="text-4xl font-light tracking-tight text-[#D4AF37]">  
                From the Perspective  
              </h2>

              <p className="mt-4 font-sans text-xs uppercase tracking-[0.3em] text-white/40">  
                Reflections from the editorial desk — essays, intelligence  
                &amp; itineraries  
              </p>  
            </div>

            <Link  
              href="/perspective"  
              className="border-b border-[#D4AF37] pb-1 font-sans text-xs uppercase tracking-widest text-white/60 transition-colors hover:text-white"  
            >  
              View All Editorial  
            </Link>  
          </div>

          <div className="grid gap-12 md:grid-cols-3">  
            {editorial.map((item) => (  
              <Link  
                key={item.slug}  
                href={`/perspective/${item.slug}`}  
                className="group cursor-pointer space-y-4"  
              >  
                <div className="relative aspect-[4/5] overflow-hidden bg-white/5">  
                  <img  
                    src={item.image}  
                    alt={item.title}  
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"  
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />  
                </div>

                <div className="space-y-3">  
                  <span className="font-sans text-[9px] uppercase tracking-widest text-[#D4AF37]">  
                    {item.category}  
                  </span>

                  <h3 className="text-xl font-light leading-snug text-white transition-colors duration-300 group-hover:text-[#D4AF37]">  
                    {item.title}  
                  </h3>

                  <p className="line-clamp-3 font-sans text-sm font-light leading-relaxed text-white/50">  
                    {item.excerpt}  
                  </p>

                  <p className="font-sans text-[8px] uppercase tracking-[0.2em] text-white/30">  
                    {item.meta}  
                  </p>  
                </div>  
              </Link>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* Client Perspectives */}  
      <TestimonialCarousel />

      {/* First Conversation */}  
      <FirstConversationBlock />

      {/* The Three Pillars */}  
      <section className="mx-auto max-w-7xl px-6 py-24">  
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">  
          {pillars.map((pillar) => (  
            <div  
              key={pillar.number}  
              className="space-y-5 border-t border-white/10 pt-10"  
            >  
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">  
                {pillar.number} / {pillar.title}  
              </span>

              <h3 className="font-sans text-lg font-light uppercase tracking-widest text-white">  
                {pillar.subtitle}  
              </h3>

              <p className="font-sans text-sm font-light leading-relaxed text-white/50">  
                {pillar.body}  
              </p>  
            </div>  
          ))}  
        </div>  
      </section>  
    </main>  
  );  
}  
