import React from 'react'  
import Link from 'next/link'

const events = [  
  {  
    category: "The Big Four",  
    icon: "🏆",  
    events: [  
      { name: "Orange Blossom Classic", date: "Sept 6, 2026", location: "Miami Gardens, FL", detail: "FAMU vs. SC State" },  
      { name: "Magic City Classic", date: "Oct 31, 2026", location: "Birmingham, AL", detail: "Alabama A&M vs. Alabama State" },  
      { name: "Bayou Classic", date: "Nov 28, 2026", location: "New Orleans, LA", detail: "Grambling vs. Southern" },  
      { name: "Celebration Bowl", date: "Dec 12, 2026", location: "Atlanta, GA", detail: "National Championship" },  
    ]  
  },  
  {  
    category: "HBCU Classics & Homecomings",  
    icon: "🏈",  
    events: [  
      { name: "MEAC/SWAC Challenge", date: "Aug 29, 2026", location: "Atlanta, GA", detail: "" },  
      { name: "John Merritt Classic", date: "Aug 29, 2026", location: "Nashville, TN", detail: "" },  
      { name: "Red Tails Classic", date: "Aug 30, 2026", location: "Montgomery, AL", detail: "" },  
      { name: "Louis Crews Classic", date: "Sept 5, 2026", location: "Huntsville, AL", detail: "" },  
      { name: "Aggie-Eagle Classic", date: "Sept 12, 2026", location: "Durham, NC", detail: "" },  
      { name: "Chicago Football Classic", date: "Sept 12, 2026", location: "Chicago, IL", detail: "" },  
      { name: "Battle of the Bay", date: "Sept 19, 2026", location: "Norfolk, VA", detail: "" },  
      { name: "State Fair Classic", date: "Sept 26, 2026", location: "Dallas, TX", detail: "" },  
      { name: "Bethune-Cookman Homecoming", date: "Sept 19, 2026", location: "Daytona Beach, FL", detail: "" },  
      { name: "Grambling Homecoming", date: "Oct 3, 2026", location: "Grambling, LA", detail: "" },  
      { name: "Morehouse Homecoming", date: "Oct 10, 2026", location: "Atlanta, GA", detail: "" },  
      { name: "Howard Homecoming", date: "Oct 17, 2026", location: "Washington, DC", detail: "" },  
      { name: "Florida A&M Homecoming", date: "Oct 24, 2026", location: "Tallahassee, FL", detail: "" },  
      { name: "NC A&T Homecoming", date: "Oct 31, 2026", location: "Greensboro, NC", detail: "" },  
      { name: "Tuskegee Homecoming", date: "Nov 7, 2026", location: "Tuskegee, AL", detail: "" },  
    ]  
  },  
  {  
    category: "Concert Tours",  
    icon: "🎤",  
    events: [  
      { name: "NE-YO & AKON: Nights Like This", date: "July – Aug 2026", location: "Atlanta, Austin, Las Vegas", detail: "" },  
      { name: "TLC / Salt-N-Pepa / En Vogue", date: "Aug 15 – Oct 11, 2026", location: "Atlanta, Vegas, LA", detail: "" },  
      { name: "Chris Brown & Usher", date: "June – Dec 11, 2026", location: "Atlanta, NOLA, Miami", detail: "Atlanta Nov 7-8, NOLA Nov 20-21, Miami Dec 3-5" },  
      { name: "JAŸ-Z: 30th Anniversary", date: "Sept 4-5, 2026", location: "London", detail: "Oct 23-24: Los Angeles" },  
      { name: "Tyla: A*POP World Tour", date: "Oct 2026 – Jan 2027", location: "Europe, North America, Africa", detail: "" },  
      { name: "JODECI: Forever My Lady", date: "Oct 24 – Dec 19, 2026", location: "Pittsburgh, DC, NOLA, Miami", detail: "" },  
      { name: "Young Thug: New Generation", date: "Sept – Oct 2026", location: "Atlanta, Dallas, Europe", detail: "" },  
      { name: "Anthony Hamilton: Soul on Tour", date: "2026", location: "Various", detail: "" },  
      { name: "CeCe Winans: Come Worship!", date: "Aug – Oct 2026", location: "Chicago, Europe", detail: "" },  
      { name: "Lil Wayne", date: "Aug 20 – Sept 10, 2026", location: "Jones Beach, Knoxville", detail: "" },  
      { name: "Sangin' Diva / Diva Life Tour", date: "July 31 – Nov 14, 2026", location: "NYC, DMV, Philly, Atlanta, Vegas", detail: "" },  
    ]  
  },  
  {  
    category: "Festivals & Series",  
    icon: "🎷",  
    events: [  
      { name: "Qatar Goodwood Festival", date: "July 28 – Aug 1, 2026", location: "UK", detail: "" },  
      { name: "Kaya Fest Toronto", date: "Aug 22, 2026", location: "Toronto", detail: "Marley Family" },  
      { name: "Vermont Reggae Fest", date: "Aug 22, 2026", location: "Vermont", detail: "" },  
      { name: "Coltrane Jazz Fest", date: "Aug 2026", location: "High Point, NC", detail: "" },  
      { name: "Freedom 250 Grand Prix", date: "Aug 22-23, 2026", location: "Washington, DC", detail: "" },  
      { name: "C3LLAR Jackson Hole", date: "Sept 24-27, 2026", location: "Jackson Hole, WY", detail: "Ultra-luxury wine exploration" },  
      { name: "Reggae Fest Miami", date: "Oct 10, 2026", location: "Miami, FL", detail: "" },  
      { name: "Montgomery Comedy Festival", date: "Oct 23, 2026", location: "Montgomery, AL", detail: "Sheryl Underwood, Lavell Crawford" },  
      { name: "30A Songwriters Festival", date: "Jan 15-18, 2027", location: "Rosemary Beach, FL", detail: "" },  
      { name: "Soundwave Weekend", date: "April 9-11, 2027", location: "Miramar Beach, FL", detail: "" },  
      { name: "Legends of Rock Expo", date: "May 14-16, 2027", location: "Las Vegas, NV", detail: "" },  
    ]  
  },  
  {  
    category: "Summits & Conferences",  
    icon: "👔",  
    events: [  
      { name: "ICAST Orlando", date: "July 14-17, 2026", location: "Orlando, FL", detail: "Fishing trades" },  
      { name: "CultureCon Week NYC", date: "Sept 28 – Oct 2, 2026", location: "New York, NY", detail: "" },  
      { name: "CultureCon NYC", date: "Oct 3-4, 2026", location: "New York, NY", detail: "" },  
      { name: "Summit Napa Valley", date: "Oct 12-14, 2026", location: "Napa Valley, CA", detail: "CEO/Founder gathering" },  
      { name: "CultureCon West Vegas", date: "Oct 27-29, 2026", location: "Las Vegas, NV", detail: "" },  
    ]  
  },  
  {  
    category: "Lifestyle & Holiday",  
    icon: "🎡",  
    events: [  
      { name: "Disney Jollywood Nights", date: "Nov 7, 2026 – Jan 5, 2027", location: "Orlando, FL", detail: "" },  
      { name: "Hardy's Holiday Village", date: "Nov 20 – Dec 31, 2026", location: "Nemacolin, PA", detail: "" },  
      { name: "MARVIN: The Marvin Gaye Musical", date: "2026–2027", location: "Various", detail: "New theatrical event" },  
    ]  
  },  
]

export default function EventsPage() {  
return (  
<div className="min-h-screen bg-[#0A0A0A] text-white font-serif selection:bg-[#D4AF37] selection:text-black">

  {/* Hero */}  
  <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">  
    <img  
      src="https://cdn.marblism.com/MDoJd9dOBf0.webp"  
      alt="Sanctuary Events"  
      className="absolute inset-0 w-full h-full object-cover opacity-50"  
    />  
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#0A0A0A]" />  
    <div className="relative z-10 text-center px-4 max-w-4xl">  
      <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] block mb-4">Sanctuary Culture</span>  
      <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">The Event Ledger</h1>  
      <p className="text-white/50 text-lg font-light font-sans max-w-xl mx-auto">  
        Curated access to the season&apos;s most significant gatherings — from the gridiron to the stage.  
      </p>  
    </div>  
  </section>

  {/* Events Listing */}  
  <main className="py-20 px-6 max-w-7xl mx-auto">  
    {events.map((section, idx) => (  
      <section key={idx} className="mb-24 last:mb-0">  
        <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">  
          <span className="text-2xl">{section.icon}</span>  
          <div>  
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white">{section.category}</h2>  
          </div>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
          {section.events.map((event, i) => (  
            <div  
              key={i}  
              className="group border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-500 p-6 rounded-sm bg-white/[0.02]"  
            >  
              <div className="flex flex-col h-full">  
                <div className="mb-4">  
                  <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-sans block mb-2">  
                    {event.date}  
                  </span>  
                  <h3 className="text-white text-lg font-light leading-tight mb-1">  
                    {event.name}  
                  </h3>  
                  <p className="text-white/40 text-sm font-sans font-light">  
                    {event.location}  
                  </p>  
                  {event.detail && (  
                    <p className="text-white/30 text-xs font-sans font-light mt-1 italic">  
                      {event.detail}  
                    </p>  
                  )}  
                </div>  
                <div className="mt-auto pt-4">  
                  <a  
                    href="https://cal.com/nexvoyagecollective/discovery-call"  
                    target="_blank"  
                    rel="noopener noreferrer"  
                    className="inline-block text-[9px] uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/30 px-4 py-2 hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-sans"  
                  >  
                    Inquire About Curated Itinerary  
                  </a>  
                </div>  
              </div>  
            </div>  
          ))}  
        </div>  
      </section>  
    ))}  
  </main>

</div>  
)  
}  
