category: 'hbcus' as const,  
    title: 'HBCU Classics & Homecomings',  
    icon: '✦',  
  },  
  {  
    category: 'expedition' as const,  
    title: 'Expedition & Pinnacle Travel',  
    icon: '✧',  
  },  
  {  
    category: 'wellness' as const,  
    title: 'Wellness & Restorative Retreats',  
    icon: '◌',  
  },  
  {  
    category: 'fashion' as const,  
    title: 'Fashion & Design',  
    icon: '◇',  
  },  
  {  
    category: 'film' as const,  
    title: 'Film & Entertainment',  
    icon: '◎',  
  },  
  {  
    category: 'lifestyle' as const,  
    title: 'Lifestyle & Holiday',  
    icon: '❄',  
  },  
  {  
    category: 'religious' as const,  
    title: 'Religious & Family Travel',  
    icon: '✦',  
  },  
  {  
    category: 'seasonal' as const,  
    title: 'Seasonal & Cultural',  
    icon: '✿',  
  },  
];

export default function EventsPage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] px-6 pb-24 pt-32 text-white selection:bg-[#C5A059]/30 md:px-12">  
      <div className="mx-auto max-w-6xl space-y-16">  
        <header className="mx-auto max-w-3xl space-y-4 border-b border-white/10 pb-12 text-center">  
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5A059]">  
            Sanctuary Culture  
          </p>

          <h1 className="text-4xl font-light tracking-tight text-white md:text-6xl">  
            The Event Ledger  
          </h1>

          <p className="text-sm leading-relaxed text-white/60 md:text-base">  
            Curated access to the season&apos;s most significant gatherings —  
            from collector culture and sailing milestones to the stage,  
            summits, sporting traditions, and rare expeditions.  
          </p>

          <p className="pt-3 text-xs leading-relaxed text-white/40">  
            Dates, venues, hospitality structures, and availability are  
            planning references and are confirmed before any client-facing  
            proposal is released.  
          </p>  
        </header>

        <Suspense  
          fallback={  
            <div className="border border-white/10 bg-[#111111] px-6 py-12 text-center text-sm text-white/50">  
              Loading the event ledger…  
            </div>  
          }  
        >  
          <EventLedger  
            events={ALL_EVENTS}  
            sections={CATEGORY_SECTIONS}  
          />  
        </Suspense>

        <section className="space-y-6 border-t border-white/10 pt-16 text-center">  
          <h2 className="text-2xl font-light text-white">  
            Secure Your Access  
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60">  
            Every event is paired with the right base, movement, access  
            architecture, and recovery time.  
          </p>

          <Link  
            href={CTA_URL}  
            target="_blank"  
            rel="noopener noreferrer"  
            className="inline-block bg-[#C5A059] px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-black transition-colors hover:bg-[#d4af37]"  
          >  
            Schedule a Discovery Call  
          </Link>  
        </section>  
      </div>  
    </main>  
  );  
}
