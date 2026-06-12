import React from 'react';  
import Link from 'next/link';

const LEDGER_ITEMS = [  
{ id: '001', title: 'The Silent Haven', code: 'NV-LDR-001', location: 'Amangiri, Utah' },  
{ id: '002', title: 'Latitude Zero', code: 'NV-LDR-002', location: 'Private Island, Maldives' },  
{ id: '003', title: 'The Glass Monolith', code: 'NV-LDR-003', location: 'St. Moritz, Switzerland' },  
{ id: '004', title: 'The Crimson Dune', code: 'NV-LDR-004', location: 'AlUla, Saudi Arabia' },  
{ id: '005', title: 'The Verdant Estate', code: 'NV-LDR-005', location: 'Tuscany, Italy' },  
{ id: '006', title: 'The Azure Cove', code: 'NV-LDR-006', location: 'Paros, Greece' },  
{ id: '007', title: 'The Fortress', code: 'NV-LDR-007', location: 'Lofoten, Norway' },  
{ id: '008', title: 'The Oasis', code: 'NV-LDR-008', location: 'Siwa, Egypt' },  
{ id: '009', title: 'The Vault', code: 'NV-LDR-009', location: 'Tokyo, Japan' },  
];

export default function HomePage() {  
return (  
  <div className="min-h-screen bg-[#FCFAF7] text-[#1C1C1C] selection:bg-[#d4af37] selection:text-white">  
    <main className="max-w-screen-xl mx-auto px-6 pt-32 pb-24">  
        
      {/* Header Section */}  
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">  
        <div>  
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#d4af37] mb-4">NexVoyage Collective</p>  
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-tight italic">  
            Elite Ledger <span className="not-italic text-zinc-300">/</span> 01  
          </h1>  
        </div>  
        <div className="max-w-xs text-right">  
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 leading-relaxed">  
            A private engine for high-net-worth travel and sanctuary curation. Access restricted to verified members.  
          </p>  
        </div>  
      </div>

      {/* 3x3 Grid */}  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">  
        {LEDGER_ITEMS.map((item) => (  
          <Link   
            key={item.id}  
            href={`/archive/${item.id}`}  
            className="group relative bg-[#FCFAF7] p-12 transition-all duration-700 hover:bg-[#1C1C1C] hover:text-[#FCFAF7]"  
          >  
            <div className="flex justify-between items-start mb-16">  
              <span className="text-[9px] uppercase tracking-[0.4em] text-[#d4af37]">{item.code}</span>  
              <span className="text-[9px] uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity duration-700">View Dossier</span>  
            </div>  
              
            <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-2 group-hover:italic transition-all duration-700">  
              {item.title}  
            </h3>  
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-500 transition-colors">  
              {item.location}  
            </p>

            <div className="absolute bottom-8 right-8 text-[8px] uppercase tracking-[0.4em] opacity-20 group-hover:opacity-10 transition-opacity">  
              Protocol R-01  
            </div>  
          </Link>  
        ))}  
      </div>

      {/* Bottom Action */}  
      <div className="mt-32 flex flex-col md:flex-row justify-between items-center border-t border-zinc-100 pt-12 gap-8">  
        <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400">  
          Status: All Systems Operational  
        </p>  
        <Link   
          href="/inquiry"  
          className="px-16 py-5 bg-[#1C1C1C] text-[#FCFAF7] text-[10px] uppercase tracking-[0.4em] hover:bg-[#d4af37] transition-all duration-500"  
        >  
          Begin Intake Protocol  
        </Link>  
      </div>  
    </main>  
  </div>  
);  
}  
