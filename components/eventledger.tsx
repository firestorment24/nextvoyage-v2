'use client';

import Link from 'next/link';  
import { usePathname, useRouter, useSearchParams } from 'next/navigation';  
import { useMemo } from 'react';

const CTA_URL = 'https://cal.com/nexvoyagecollective/discovery-call';

export interface ScheduleItem {  
  date: string;  
  location: string;  
}

export interface EventItem {  
  date: string;  
  title: string;  
  location: string;  
  subtitle?: string;  
  description?: string;  
  category: string;  
  featured?: boolean;  
  schedule?: ScheduleItem[];  
}

export interface EventCategorySection {  
  category: string;  
  title: string;  
  icon: string;  
}

interface EventLedgerProps {  
  events: EventItem[];  
  sections: EventCategorySection[];  
}

const FILTER_LABELS: Record<string, string> = {  
  automotive: 'Automotive',  
  maritime: 'Maritime',  
  culinary: 'Culinary / Art',  
  music: 'Music',  
  sporting: 'Sport',  
  leadership: 'Leadership',  
  hbcus: 'HBCU',  
  expedition: 'Expedition',  
  wellness: 'Wellness',  
  fashion: 'Fashion',  
  film: 'Film',  
  lifestyle: 'Lifestyle',  
  religious: 'Religious',  
  seasonal: 'Seasonal',  
};

export default function EventLedger({  
  events,  
  sections,  
}: EventLedgerProps) {  
  const router = useRouter();  
  const pathname = usePathname();  
  const searchParams = useSearchParams();

  const requestedCategory = searchParams.get('category') || 'all';  
  const query = searchParams.get('q') || '';

  const validCategories = useMemo(  
    () => new Set(sections.map((section) => section.category)),  
    [sections],  
  );

  const activeCategory =  
    requestedCategory === 'all' || validCategories.has(requestedCategory)  
      ? requestedCategory  
      : 'all';

  const filteredEvents = useMemo(() => {  
    const normalizedQuery = query.trim().toLowerCase();

    return events.filter((event) => {  
      const matchesCategory =  
        activeCategory === 'all' || event.category === activeCategory;

      if (!matchesCategory) {  
        return false;  
      }

      if (!normalizedQuery) {  
        return true;  
      }

      const searchableText = [  
        event.date,  
        event.title,  
        event.location,  
        event.subtitle,  
        event.description,  
      ]  
        .filter(Boolean)  
        .join(' ')  
        .toLowerCase();

      return searchableText.includes(normalizedQuery);  
    });  
  }, [activeCategory, events, query]);

  const filteredEventIds = useMemo(  
    () => new Set(filteredEvents.map((event) => event.title)),  
    [filteredEvents],  
  );

  const visibleSections = useMemo(() => {  
    return sections  
      .filter(  
        (section) =>  
          activeCategory === 'all' ||  
          section.category === activeCategory,  
      )  
      .map((section) => ({  
        ...section,  
        events: events.filter(  
          (event) =>  
            event.category === section.category &&  
            filteredEventIds.has(event.title),  
        ),  
      }))  
      .filter((section) => section.events.length > 0);  
  }, [activeCategory, events, filteredEventIds, sections]);

  const hasFilters = activeCategory !== 'all' || query.trim().length > 0;

  function updateFilters(nextCategory: string, nextQuery: string) {  
    const params = new URLSearchParams(searchParams.toString());

    if (nextCategory === 'all') {  
      params.delete('category');  
    } else {  
      params.set('category', nextCategory);  
    }

    if (nextQuery.trim()) {  
      params.set('q', nextQuery.trim());  
    } else {  
      params.delete('q');  
    }

    const nextUrl = params.toString()  
      ? `${pathname}?${params.toString()}`  
      : pathname;

    router.replace(nextUrl, { scroll: false });  
  }

  function clearFilters() {  
    router.replace(pathname, { scroll: false });  
  }

  return (  
    <div className="space-y-10">  
      <section  
        aria-label="Event filters"  
        className="border-y border-white/10 bg-[#111111] px-5 py-6 md:px-7"  
      >  
        <div className="flex flex-col gap-6">  
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">  
            <div>  
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059]">  
                Explore the ledger  
              </p>

              <p className="mt-2 text-sm text-white/50">  
                Showing{' '}  
                <span className="text-white">  
                  {filteredEvents.length}  
                </span>{' '}  
                of {events.length} events  
              </p>  
            </div>

            <div className="relative w-full lg:max-w-sm">  
              <label  
                htmlFor="event-search"  
                className="sr-only"  
              >  
                Search events  
              </label>

              <input  
                id="event-search"  
                type="search"  
                value={query}  
                onChange={(event) =>  
                  updateFilters(activeCategory, event.target.value)  
                }  
                placeholder="Search events, places, or themes"  
                className="w-full border border-white/15 bg-black/30 px-4 py-3 pr-10 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#C5A059]/70"  
              />

              <span  
                aria-hidden="true"  
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/35"  
              >  
                ⌕  
              </span>  
            </div>  
          </div>

          <div className="-mx-1 overflow-x-auto pb-1">  
            <div className="flex min-w-max gap-2 px-1">  
              <FilterButton  
                label="All Events"  
                active={activeCategory === 'all'}  
                onClick={() => updateFilters('all', query)}  
              />

              {sections.map((section) => (  
                <FilterButton  
                  key={section.category}  
                  label={  
                    FILTER_LABELS[section.category] || section.title  
                  }  
                  active={activeCategory === section.category}  
                  onClick={() =>  
                    updateFilters(section.category, query)  
                  }  
                />  
              ))}  
            </div>  
          </div>

          {hasFilters && (  
            <div className="flex items-center justify-between border-t border-white/10 pt-4">  
              <p className="text-xs text-white/45">  
                {activeCategory !== 'all'  
                  ? FILTER_LABELS[activeCategory] ||  
                    sections.find(  
                      (section) =>  
                        section.category === activeCategory,  
                    )?.title  
                  : 'All categories'}  
                {query.trim() ? ` · “${query.trim()}”` : ''}  
              </p>

              <button  
                type="button"  
                onClick={clearFilters}  
                className="text-[10px] uppercase tracking-[0.18em] text-[#C5A059] transition-colors hover:text-white"  
              >  
                Clear filters  
              </button>  
            </div>  
          )}  
        </div>  
      </section>

      {visibleSections.length > 0 ? (  
        <div className="space-y-20">  
          {visibleSections.map((section) => (  
            <EventSection  
              key={section.category}  
              title={section.title}  
              icon={section.icon}  
              events={section.events}  
            />  
          ))}  
        </div>  
      ) : (  
        <section className="border border-white/10 bg-[#111111] px-6 py-16 text-center">  
          <p className="text-xs uppercase tracking-[0.25em] text-[#C5A059]">  
            No matching events  
          </p>

          <h2 className="mt-4 text-2xl font-light text-white">  
            The ledger is quiet here.  
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">  
            Try a broader search or clear the filters to view the full  
            event collection.  
          </p>

          <button  
            type="button"  
            onClick={clearFilters}  
            className="mt-7 border border-[#C5A059] px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-[#C5A059] transition-colors hover:bg-[#C5A059] hover:text-black"  
          >  
            View all events  
          </button>  
        </section>  
      )}  
    </div>  
  );  
}

function FilterButton({  
  label,  
  active,  
  onClick,  
}: {  
  label: string;  
  active: boolean;  
  onClick: () => void;  
}) {  
  return (  
    <button  
      type="button"  
      onClick={onClick}  
      aria-pressed={active}  
      className={`whitespace-nowrap border px-4 py-2.5 text-[10px] uppercase tracking-[0.16em] transition-colors ${  
        active  
          ? 'border-[#C5A059] bg-[#C5A059] text-black'  
          : 'border-white/15 bg-black/20 text-white/55 hover:border-[#C5A059]/70 hover:text-white'  
      }`}  
    >  
      {label}  
    </button>  
  );  
}

function EventSection({  
  title,  
  icon,  
  events,  
}: {  
  title: string;  
  icon: string;  
  events: EventItem[];  
}) {  
  return (  
    <section className="space-y-8">  
      <div className="flex items-center gap-4 border-b border-white/10 pb-4">  
        <span className="text-2xl text-[#C5A059]">{icon}</span>

        <h2 className="text-2xl font-light tracking-wide text-white">  
          {title}  
        </h2>  
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">  
        {events.map((event, index) => (  
          <EventCard  
            key={`${event.title}-${index}`}  
            event={event}  
          />  
        ))}  
      </div>  
    </section>  
  );  
}

function EventCard({ event }: { event: EventItem }) {  
  return (  
    <article  
      className={`flex flex-col justify-between border border-white/10 bg-[#111111] p-6 transition-colors hover:border-[#C5A059]/40 ${  
        event.featured ? 'md:col-span-2' : ''  
      }`}  
    >  
      <div className="space-y-3">  
        <div className="flex flex-col justify-between gap-2 text-xs font-medium uppercase tracking-wider text-[#C5A059] md:flex-row md:gap-4">  
          <span>{event.date}</span>

          {event.subtitle && (  
            <span className="text-white/40 md:text-right">  
              {event.subtitle}  
            </span>  
          )}  
        </div>

        <h3 className="text-xl font-normal text-white">  
          {event.title}  
        </h3>

        <p className="text-xs tracking-wide text-white/60">  
          {event.location}  
        </p>

        {event.description && (  
          <p className="border-t border-white/5 pt-2 text-sm leading-relaxed text-white/70">  
            {event.description}  
          </p>  
        )}

        {event.schedule && event.schedule.length > 0 && (  
          <div className="mt-5 border-t border-white/10 pt-5">  
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#C5A059]">  
              Event Schedule  
            </p>

            <div className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">  
              {event.schedule.map((item, index) => (  
                <div  
                  key={`${item.date}-${index}`}  
                  className="border-b border-white/5 pb-3"  
                >  
                  <p className="text-xs font-medium text-white">  
                    {item.date}  
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-white/55">  
                    {item.location}  
                  </p>  
                </div>  
              ))}  
            </div>  
          </div>  
        )}  
      </div>

      <div className="mt-6 border-t border-white/10 pt-6">  
        <Link  
          href={CTA_URL}  
          target="_blank"  
          rel="noopener noreferrer"  
          className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#C5A059] transition-colors hover:text-white"  
        >  
          Inquire About Curated Itinerary →  
        </Link>  
      </div>  
    </article>  
  );  
}  
