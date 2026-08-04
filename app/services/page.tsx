import Link from 'next/link';

export const metadata = {  
title: 'Advisory Services & Private Portfolio — NexVoyage Collective',  
description: 'Bespoke travel advisory, private aviation, luxury rail, and unlisted sanctuary curation.',  
};

interface ServiceItem {  
title: string;  
subtitle: string;  
description: string;  
}

const SERVICES: ServiceItem[] = [  
{  
title: "Hotels & Private Sanctuaries",  
subtitle: "Unlisted Estates & Flagship Properties",  
description: "Curated access to the world’s most private villas, historic châteaux, and five-star luxury hotels with preferential rates and VIP status."  
},  
{  
title: "Private Aviation",  
subtitle: "Seamless Global Air Mobility",  
description: "Bespoke jet charters, helicopter transfers, and tarmac-side coordination managed with absolute discretion."  
},  
{  
title: "Yacht Charters & Cruises",  
subtitle: "Floating Sanctuaries & Expedition Vessels",  
description: "Superyacht charters across polar, galapagos, and Mediterranean waters, alongside ultra-luxury ocean and river itineraries."  
},  
{  
title: "Safaris & Wilderness Expeditions",  
subtitle: "Untouched Frontiers",  
description: "Private-guide safaris across Sabi Sand, Serengeti, and high-alpine mountain retreats with expert wildlife trackers."  
},  
{  
title: "Corporate Travel & Executive Offsites",  
subtitle: "Discreet Leadership Logistics",  
description: "Full-spectrum travel architecture for executive teams, private boards, and high-profile delegations."  
},  
{  
title: "Destination Weddings & Celebrations",  
subtitle: "Milestone Estates & Buyouts",  
description: "Exclusive-use castle, island, and vineyard buyouts orchestrated for private celebrations of distinction."  
},  
{  
title: "Luxury Rail Journeys",  
subtitle: "Timeless Continental Transit",  
description: "Reserved suites aboard iconic heritage trains crossing Europe, Asia, and the Americas."  
},  
{  
title: "Polar & Remote Expeditions",  
subtitle: "Edge-of-the-World Exploration",  
description: "Ice-class luxury voyages and remote wilderness heli-skiing backed by elite safety and rescue protocols."  
}  
];

const PERKS = [  
{  
title: "Preferred Partner Upgrades",  
description: "Complimentary room upgrades, daily breakfast, and priority status across elite hotel portfolios."  
},  
{  
title: "Exclusive Resort Credits",  
description: "Substantial property, spa, and dining credits applied directly to every booking."  
},  
{  
title: "24/7 Dedicated Stewardship",  
description: "A single point of contact providing round-the-clock advisory, routing adjustments, and emergency support."  
},  
{  
title: "VIP Recognition & Access",  
description: "Direct relationship management with general managers, owners, and unlisted property curators."  
}  
];

export default function ServicesPage() {  
return (  
<main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D4AF37] selection:text-black pt-32 pb-24 px-6 md:px-12 font-serif">  
<div className="max-w-6xl mx-auto space-y-24">  
        
  {/* Header */}  
  <div className="text-center space-y-4 max-w-3xl mx-auto border-b border-white/10 pb-12">  
    <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-medium font-sans">Private Travel Office</p>  
    <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white font-serif">Advisory Services</h1>  
    <p className="text-white/60 text-sm md:text-base leading-relaxed font-sans font-light">  
      Comprehensive travel architecture and elite curation tailored for high-net-worth individuals and private family offices.  
    </p>  
  </div>

  {/* Why NexVoyage vs Open Networks (Audit Item #7 Differentiator) */}  
  <div className="bg-[#111111] border border-[#D4AF37]/20 p-8 md:p-14 space-y-12">  
    <div className="max-w-2xl space-y-3">  
      <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-sans">The Retained Advantage</span>  
      <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">Open Networks vs. Boutique Advisory</h2>  
      <p className="text-white/60 text-sm font-sans font-light leading-relaxed">  
        Why discerning travelers choose a boutique travel advisory with capped rosters over a standard open-network agency.  
      </p>  
    </div>

    <div className="grid md:grid-cols-2 gap-8 pt-4">  
      {/* Traditional Advisor / Open Network */}  
      <div className="bg-black/40 border border-white/10 p-8 space-y-6">  
        <div className="border-b border-white/10 pb-4">  
          <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-sans">Open Consortium Model</span>  
          <h3 className="text-white text-lg font-light mt-1">Standard Open-Roster Agency</h3>  
        </div>  
        <ul className="space-y-4 text-sm text-white/60 font-sans font-light">  
          <li className="flex items-start gap-3">  
            <span className="text-white/30">✕</span>  
            <span><strong>High Client Volume:</strong> Advisors handle hundreds of travelers simultaneously, resulting in slower response times and standard booking support.</span>  
          </li>  
          <li className="flex items-start gap-3">  
            <span className="text-white/30">✕</span>  
            <span><strong>Standard Consortium Rates:</strong> Reliance on public consortium rates and standard booking portals without private inventory access.</span>  
          </li>  
          <li className="flex items-start gap-3">  
            <span className="text-white/30">✕</span>  
            <span><strong>Transactional Focus:</strong> Primarily acts as a hotel booking desk rather than managing your complete global travel portfolio.</span>  
          </li>  
          <li className="flex items-start gap-3">  
            <span className="text-white/30">✕</span>  
            <span><strong>Standard Protocols:</strong> General travel agency booking procedures with standard privacy measures.</span>  
          </li>  
        </ul>  
      </div>

      {/* NexVoyage Private Office */}  
      <div className="bg-[#191712] border border-[#D4AF37]/40 p-8 space-y-6 relative">  
        <div className="absolute top-0 right-0 bg-[#D4AF37] text-black text-[9px] uppercase tracking-widest px-3 py-1 font-sans font-medium">  
          The NexVoyage Standard  
        </div>  
        <div className="border-b border-[#D4AF37]/20 pb-4">  
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">Boutique Travel Advisory</span>  
          <h3 className="text-white text-lg font-light mt-1">NexVoyage Collective</h3>  
        </div>  
        <ul className="space-y-4 text-sm text-white/80 font-sans font-light">  
          <li className="flex items-start gap-3">  
            <span className="text-[#D4AF37]">✓</span>  
            <span><strong>Capped Client Roster:</strong> We intentionally limit our active clientele to ensure dedicated advisor bandwidth and personal attention for every trip.</span>  
          </li>  
          <li className="flex items-start gap-3">  
            <span className="text-[#D4AF37]">✓</span>  
            <span><strong>Unlisted Estate Access:</strong> Direct relationships with property owners allowing access to private villas and off-market sanctuaries.</span>  
          </li>  
          <li className="flex items-start gap-3">  
            <span className="text-[#D4AF37]">✓</span>  
            <span><strong>Holistic Itinerary Design:</strong> Complete travel architecture—coordinating private aviation, ground logistics, and exclusive stays seamlessly.</span>  
          </li>  
          <li className="flex items-start gap-3">  
            <span className="text-[#D4AF37]">✓</span>  
            <span><strong>Discretion & Privacy:</strong> Absolute confidentiality and white-glove stewardship tailored to your personal preferences.</span>  
          </li>  
        </ul>  
      </div>  
    </div>  
  </div>

  {/* Services Grid */}  
  <div className="space-y-12">  
    <div className="border-b border-white/10 pb-4">  
      <h2 className="text-2xl font-light tracking-wide text-white">What We Curate</h2>  
    </div>  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">  
      {SERVICES.map((service, idx) => (  
        <div key={idx} className="bg-[#111111] border border-white/10 p-6 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-colors">  
          <div className="space-y-3">  
            <span className="text-xs text-[#D4AF37] tracking-widest uppercase block">0{idx + 1}</span>  
            <h3 className="text-xl font-normal text-white font-serif">{service.title}</h3>  
            <p className="text-white/40 text-xs">{service.subtitle}</p>  
            <p className="text-white/70 text-sm leading-relaxed pt-3 border-t border-white/5 font-light">{service.description}</p>  
          </div>  
        </div>  
      ))}  
    </div>  
  </div>

  {/* Why Us / Value Proposition */}  
  <div className="space-y-12 pt-12 border-t border-white/10">  
    <div className="max-w-2xl space-y-3">  
      <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-medium font-sans">The Sanctuary Standard</p>  
      <h2 className="text-3xl font-light text-white">Why Our Clients Rely On Us</h2>  
      <p className="text-white/60 text-sm font-sans font-light">Beyond booking — unlocking institutional access and bespoke privileges worldwide.</p>  
    </div>  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">  
      {PERKS.map((perk, idx) => (  
        <div key={idx} className="bg-[#111111]/60 border border-white/5 p-6 space-y-3">  
          <h3 className="text-lg font-medium text-white font-serif">{perk.title}</h3>  
          <p className="text-white/60 text-sm leading-relaxed font-light">{perk.description}</p>  
        </div>  
      ))}  
    </div>  
  </div>

  {/* Conversion CTA */}  
  <div className="text-center pt-16 border-t border-white/10 space-y-6 max-w-2xl mx-auto font-sans">  
    <h3 className="text-3xl font-light text-white font-serif">Begin Your Advisory Mandate</h3>  
    <p className="text-white/60 text-sm leading-relaxed font-light">  
      Engage with our private advisory team to establish your travel portfolio or discuss an upcoming itinerary.  
    </p>  
    <div className="pt-4">  
      <Link   
        href="https://cal.com/nexvoyagecollective/discovery-call"   
        target="_blank"   
        rel="noopener noreferrer"  
        className="inline-block bg-[#D4AF37] text-black font-medium text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#d4af37]/90 transition-colors"  
      >  
        Schedule a Discovery Call  
      </Link>  
    </div>  
  </div>

</div>  
</main>  
);  
}  
