'use client';

import { useState } from 'react';  
import Link from 'next/link';

const featured = [  
{  
name: 'Celebrating Her',  
path: '/celebrating-her',  
subtitle: 'The Celebration Collection',  
},  
{  
name: 'The Holiday Collection',  
path: '/holidays',  
subtitle: 'Seasonal Journeys',  
},  
{  
name: 'Event Ledger',  
path: '/events',  
subtitle: 'Global Gatherings',  
},  
];

const navGroups = [  
{  
label: 'The House',  
links: [  
{ name: 'Lobby', path: '/', subtitle: 'Arrival Protocol' },  
{ name: 'Mandate', path: '/mandate', subtitle: 'The Philosophy' },  
{ name: 'Meet Daryl', path: '/founder', subtitle: 'Founder & Principal' },  
],  
},  
{  
label: 'Advisory',  
links: [  
{ name: 'Services', path: '/services', subtitle: 'Private Advisory' },  
{  
name: 'Selected Engagements',  
path: '/selected-engagements',  
subtitle: 'The Record',  
},  
{  
name: 'Private Client Partners',  
path: '/private-client-partners',  
subtitle: 'Referral Partnerships',  
},  
],  
},  
{  
label: 'Intelligence',  
links: [  
{ name: 'Perspective', path: '/perspective', subtitle: 'The Intelligence' },  
{ name: 'Journeys', path: '/journeys', subtitle: 'Signature Itineraries' },  
{ name: 'Journal', path: '/journal', subtitle: 'Seasonal Intelligence' },  
{ name: 'Archive', path: '/archive', subtitle: 'Registry of Significance' },  
],  
},  
];

export default function Navigation() {  
const [isOpen, setIsOpen] = useState(false);

return (  
<>  
{/* Top Header Bar */}  
<header className="fixed top-0 left-0 w-full z-50 bg-transparent px-4 py-4">  
<div className="w-full flex items-center justify-between">  
<Link  
href="/"  
className="font-serif text-[#D4AF37] text-xl md:text-2xl tracking-[0.1em] md:tracking-[0.15em] uppercase hover:opacity-80 transition-opacity whitespace-nowrap overflow-hidden text-ellipsis mr-2"  
>  
NEXVOYAGE COLLECTIVE  
</Link>

<button  
onClick={() => setIsOpen(!isOpen)}  
className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-medium px-4 py-2 hover:opacity-80 transition-opacity flex items-center gap-2 bg-black/40 border border-[#D4AF37]/30 backdrop-blur-sm shrink-0"  
>  
<span>{isOpen ? 'Close' : 'Menu'}</span>  
<span className="text-base">{isOpen ? '✕' : '☰'}</span>  
</button>  
</div>  
</header>

{/* Backdrop */}  
{isOpen && (  
<div  
onClick={() => setIsOpen(false)}  
className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity"  
/>  
)}

{/* Right-Side Slide-Out Drawer */}  
<div  
className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-[#2A2A2A] border-l border-[#D4AF37]/20 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col p-8 md:p-10 ${  
      isOpen ? 'translate-x-0' : 'translate-x-full'  
    }`}  
>  
{/* Drawer Header */}  
<div className="flex items-start justify-between border-b border-white/10 pb-5 shrink-0">  
<div>  
<p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em]">  
Navigation Directory  
</p>  
<h2 className="text-white font-serif text-lg tracking-wider mt-1">  
NexVoyage Collective  
</h2>  
</div>

<button  
onClick={() => setIsOpen(false)}  
aria-label="Close menu"  
className="text-[#D4AF37] text-sm uppercase tracking-widest px-3 py-1 border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 transition-colors"  
>  
✕  
</button>  
</div>

{/* Scrollable Body */}  
<div className="flex-1 overflow-y-auto py-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">  
{/* Featured Collections */}  
<div className="space-y-2">  
<p className="text-[9px] uppercase tracking-[0.3em] text-white/35">  
The Collections  
</p>

<div className="mt-3 space-y-2">  
{featured.map((item) => (  
<Link  
key={item.path}  
href={item.path}  
onClick={() => setIsOpen(false)}  
className="group block border border-[#D4AF37]/25 bg-[#D4AF37]/[0.04] px-4 py-3 transition-colors hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/10"  
>  
<span className="block text-base font-light text-white transition-colors group-hover:text-[#D4AF37]">  
{item.name}  
</span>

<span className="mt-0.5 block text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors group-hover:text-[#D4AF37]/80">  
{item.subtitle}  
</span>  
</Link>  
))}  
</div>  
</div>

{/* Grouped Links */}  
{navGroups.map((group) => (  
<div key={group.label} className="mt-8">  
<p className="text-[9px] uppercase tracking-[0.3em] text-white/35">  
{group.label}  
</p>

<div className="mt-2">  
{group.links.map((link) => (  
<Link  
key={link.path}  
href={link.path}  
onClick={() => setIsOpen(false)}  
className="group flex items-baseline justify-between border-b border-white/5 py-2.5 transition-colors hover:border-[#D4AF37]/40"  
>  
<span className="text-lg font-light text-white transition-colors group-hover:text-[#D4AF37]">  
{link.name}  
</span>

<span className="text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors group-hover:text-[#D4AF37]/80">  
{link.subtitle}  
</span>  
</Link>  
))}  
</div>  
</div>  
))}  
</div>

{/* Pinned Action */}  
<div className="shrink-0 border-t border-white/10 pt-5">  
<Link  
href="/inquiry"  
onClick={() => setIsOpen(false)}  
className="flex items-center justify-between border border-[#D4AF37] px-5 py-4 text-[10px] uppercase tracking-[0.24em] text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-black"  
>  
<span>Begin Consultation</span>  
<span aria-hidden="true">→</span>  
</Link>

<div className="mt-4 flex items-center justify-between text-[10px] text-white/35">  
<span>Private • Discreet • Curated</span>  
<span>© 2026</span>  
</div>  
</div>  
</div>  
</>  
);  
}  
