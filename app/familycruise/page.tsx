import type { Metadata } from 'next';  
import Link from 'next/link';

export const metadata: Metadata = {  
  title: 'Minnie Lee Memorial Family Cruise | NexVoyage Collective',  
  description:  
    'Join the Minnie Lee Memorial Family Cruise aboard Royal Caribbean’s Allure of the Seas for a six-night Western Caribbean journey, June 6–12, 2027.',  
  robots: {  
    index: false,  
    follow: false,  
    nocache: true,  
  },  
};

const BOOKING_URL = 'https://form.jotform.com/262506988663068';

const ports = [  
  {  
    number: '01',  
    title: 'Perfect Day at CocoCay',  
    location: 'Bahamas',  
    description:  
      'A private-island day with bright waters, beach time, and family adventure.',  
  },  
  {  
    number: '02',  
    title: 'Falmouth',  
    location: 'Jamaica',  
    description:  
      'A vibrant Jamaican port with opportunities for culture, coastline, and connection.',  
  },  
  {  
    number: '03',  
    title: 'Nassau',  
    location: 'Bahamas',  
    description:  
      'A final island stop combining turquoise water, local color, and easygoing discovery.',  
  },  
];

const staterooms = [  
  {  
    title: 'Interior',  
    price: '$1,028',  
    color: 'bg-[#168fa8]',  
  },  
  {  
    title: 'Boardwalk Balcony',  
    price: '$1,142',  
    color: 'bg-[#e9368c]',  
  },  
  {  
    title: 'Central Park Balcony',  
    price: '$1,353',  
    color: 'bg-[#2a9d45]',  
  },  
  {  
    title: 'Ocean View Balcony',  
    price: '$1,737',  
    color: 'bg-[#f47d20]',  
  },  
];

export default function FamilyCruisePage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C5A059]/30 selection:text-white">  
      <section className="relative overflow-hidden border-b border-white/10">  
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(197,160,89,0.18),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(18,126,153,0.2),_transparent_42%)]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 md:px-12 md:pb-28">  
          <div className="max-w-4xl">  
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#C5A059]">  
              A Family Gathering at Sea  
            </p>

            <h1 className="max-w-3xl text-5xl font-light leading-[0.98] tracking-tight text-white md:text-8xl">  
              Minnie Lee  
              <span className="block text-[#C5A059]">Memorial</span>  
              <span className="block">Family Cruise</span>  
            </h1>

            <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/65 md:text-xl">  
              Same roots. New destinations. Forever family.  
            </p>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/55">  
              <span>Family</span>  
              <span className="text-[#C5A059]">•</span>  
              <span>Memories</span>  
              <span className="text-[#C5A059]">•</span>  
              <span>Good Vibes</span>  
            </div>  
          </div>  
        </div>  
      </section>

      <section className="border-b border-white/10 bg-[#111111]">  
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3 md:px-12 md:py-16">  
          <div>  
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059]">  
              Ship  
            </p>  
            <h2 className="mt-3 text-2xl font-light">  
              Allure of the Seas  
            </h2>  
            <p className="mt-2 text-sm text-white/55">  
              Royal Caribbean  
            </p>  
          </div>

          <div>  
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059]">  
              Dates  
            </p>  
            <h2 className="mt-3 text-2xl font-light">  
              June 6–12, 2027  
            </h2>  
            <p className="mt-2 text-sm text-white/55">  
              Six-night Western Caribbean  
            </p>  
          </div>

          <div>  
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059]">  
              Invitation  
            </p>  
            <h2 className="mt-3 text-2xl font-light">  
              Let&apos;s cruise together  
            </h2>  
            <p className="mt-2 text-sm text-white/55">  
              Three destinations. One unforgettable journey.  
            </p>  
          </div>  
        </div>  
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">  
        <div className="mb-12 max-w-2xl">  
          <p className="text-xs uppercase tracking-[0.3em] text-[#C5A059]">  
            The Journey  
          </p>

          <h2 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">  
            Family, memories, and open seas.  
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-white/60 md:text-base">  
            Gather aboard Royal Caribbean&apos;s Allure of the Seas for a  
            six-night Western Caribbean sailing created around family,  
            remembrance, laughter, and time together.  
          </p>  
        </div>

        <div className="grid gap-6 md:grid-cols-3">  
          {ports.map((port) => (  
            <article  
              key={port.number}  
              className="border border-white/10 bg-[#111111] p-7 transition-colors hover:border-[#C5A059]/50"  
            >  
              <p className="text-xs tracking-[0.25em] text-[#C5A059]">  
                {port.number}  
              </p>

              <h3 className="mt-8 text-2xl font-light">{port.title}</h3>

              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/45">  
                {port.location}  
              </p>

              <p className="mt-6 text-sm leading-relaxed text-white/60">  
                {port.description}  
              </p>  
            </article>  
          ))}  
        </div>  
      </section>

      <section className="border-y border-white/10 bg-[#111111]">  
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">  
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">  
            <div>  
              <p className="text-xs uppercase tracking-[0.3em] text-[#C5A059]">  
                Stateroom Pricing  
              </p>

              <h2 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">  
                Choose your view.  
              </h2>  
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-white/50">  
              Pricing shown per person. All staterooms receive a $50 onboard  
              credit.  
            </p>  
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">  
            {staterooms.map((room) => (  
              <div  
                key={room.title}  
                className={`${room.color} p-6 text-black`}  
              >  
                <p className="text-xs font-medium uppercase tracking-[0.15em]">  
                  {room.title}  
                </p>

                <p className="mt-6 text-4xl font-light">{room.price}</p>

                <p className="mt-2 text-xs uppercase tracking-[0.15em] opacity-75">  
                  Per person  
                </p>  
              </div>  
            ))}  
          </div>

          <div className="mt-10 border border-[#C5A059]/30 bg-[#0A0A0A] p-6 md:p-8">  
            <p className="text-xs uppercase tracking-[0.25em] text-[#C5A059]">  
              Included onboard credit  
            </p>

            <p className="mt-3 text-lg font-light text-white">  
              Every stateroom receives a $50 onboard credit.  
            </p>  
          </div>  
        </div>  
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">  
        <div className="grid gap-12 md:grid-cols-2">  
          <div>  
            <p className="text-xs uppercase tracking-[0.3em] text-[#C5A059]">  
              Payment Plan  
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight">  
              Reserve your stateroom.  
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-white/60">  
              A $500 deposit per stateroom is due January 15, 2027. Final  
              payment is due February 28, 2027.  
            </p>  
          </div>

          <div className="grid gap-4 sm:grid-cols-2">  
            <div className="border border-white/10 bg-[#111111] p-7">  
              <p className="text-xs uppercase tracking-[0.2em] text-[#C5A059]">  
                Deposit  
              </p>

              <p className="mt-5 text-4xl font-light">$500</p>

              <p className="mt-3 text-sm leading-relaxed text-white/55">  
                Per stateroom  
                <br />  
                Due January 15, 2027  
              </p>  
            </div>

            <div className="border border-white/10 bg-[#111111] p-7">  
              <p className="text-xs uppercase tracking-[0.2em] text-[#C5A059]">  
                Final Payment  
              </p>

              <p className="mt-5 text-2xl font-light">Due February 28</p>

              <p className="mt-3 text-sm leading-relaxed text-white/55">  
                2027  
                <br />  
                Before sailing  
              </p>  
            </div>  
          </div>  
        </div>  
      </section>

      <section className="border-t border-white/10">  
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-12 md:py-28">  
          <p className="text-xs uppercase tracking-[0.3em] text-[#C5A059]">  
            Minnie Lee Memorial Family Cruise  
          </p>

          <h2 className="mt-5 text-4xl font-light tracking-tight md:text-6xl">  
            Good company.  
            <span className="block text-[#C5A059]">Brighter horizons.</span>  
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">  
            Complete the registration form to reserve your place aboard this  
            special family journey.  
          </p>

          <Link  
            href={BOOKING_URL}  
            target="_blank"  
            rel="noopener noreferrer"  
            className="mt-10 inline-flex items-center justify-center bg-[#C5A059] px-10 py-5 text-xs font-medium uppercase tracking-[0.25em] text-black transition-colors hover:bg-[#d9b96b]"  
          >  
            Book Now →  
          </Link>

          <div className="mt-12 border-t border-white/10 pt-8">  
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">  
              Questions  
            </p>

            <a  
              href="tel:18135976139"  
              className="mt-3 inline-block text-lg text-white transition-colors hover:text-[#C5A059]"  
            >  
              Daryl Clark · 813-597-6139  
            </a>  
          </div>  
        </div>  
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center md:px-12">  
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">  
          Pricing and availability are subject to confirmation at registration.  
        </p>  
      </footer>  
    </main>  
  );  
}  
