import React from 'react';

const amenities = [  
  {  
    title: "Daily Breakfast",  
    description: "Complimentary breakfast for two guests daily.",  
    icon: (  
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">  
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" /><line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" />  
      </svg>  
    )  
  },  
  {   
    title: "$100 Resort Credit",  
    description: "To be utilized for dining, spa, or resort activities.",  
    icon: (  
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">  
        <rect width="20" height="12" x="2" y="6" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" />  
      </svg>  
    )  
  },  
  {  
    title: "Priority Upgrade",  
    description: "One-category room upgrade, subject to availability.",  
    icon: (  
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">  
        <circle cx="12" cy="12" r="10" /><path d="m16 12-4-4-4 4" /><path d="M12 16V8" />  
      </svg>  
    )  
  },  
  {  
    title: "Flexible Arrival",  
    description: "Early check-in and late checkout, upon availability.",  
    icon: (  
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">  
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />  
      </svg>  
    )  
  }  
];

export const EliteAmenities = () => {  
  return (  
    <section className="py-16 border-y border-zinc-100 bg-white">  
      <div className="max-w-6xl mx-auto px-6">  
        <div className="mb-12">  
          <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-2 font-medium">The Collective Perks</h3>  
          <h2 className="text-3xl font-light text-zinc-900 italic">Elite Amenities</h2>  
        </div>  
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">  
          {amenities.map((item, idx) => (  
            <div key={idx} className="group">  
              <div className="text-zinc-900 mb-4 transition-transform duration-500 group-hover:-translate-y-1">  
                {item.icon}  
              </div>  
              <h4 className="text-sm font-medium text-zinc-900 mb-2 uppercase tracking-wider">{item.title}</h4>  
              <p className="text-sm text-zinc-500 leading-relaxed font-light">  
                {item.description}  
              </p>  
            </div>  
          ))}  
        </div>  
      </div>  
    </section>  
  );  
};  
