'use client';

import { useState, useEffect, useMemo } from 'react';  
import Image from 'next/image';  
import Link from 'next/link';  
import { PROPERTY_DATA } from '@/data/properties';

const COLLECTION_ORDER = [  
  'Wild Frontiers',  
  'Urban Sovereigns',  
  'Heritage & Estate',  
  'Nole Sanctuary',  
  'Industrial & Frontier',  
];

const proxyUrl = (url: string) => `/api/image?url=${encodeURIComponent(url)}`;

export default function ArchivePage() {  
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  const grouped = useMemo(() => {  
    const map: Record<string, typeof PROPERTY_DATA> = {};  
    for (const p of PROPERTY_DATA) {  
      const col = p.collection || 'Uncategorized';  
      if (!map[col]) map[col] = [];  
      map[col].push(p);  
    }  
    return map;  
  }, []);

  const collections = useMemo(() => {  
    const ordered: { name: string; properties: typeof PROPERTY_DATA }[] = [];  
    const added = new Set<string>();  
    for (const name of COLLECTION_ORDER) {  
      if (map[name]) {  
        ordered.push({ name, properties: [...map[name]].sort(() => Math.random() - 0.5) });  
        added.add(name);  
      }  
    }  
    for (const name of Object.keys(map)) {  
      if (!added.has(name)) {  
        ordered.push({ name, properties: [...map[name]].sort(() => Math.random() - 0.5) });  
      }  
    }  
    return ordered;  
  }, []);

  const filtered = useMemo(() => {  
    if (!selectedCollection) return collections;  
    return collections.filter((c) => c.name === selectedCollection);  
  }, [selectedCollection, collections]);

  const allProperties = useMemo(() => {  
    const flat = PROPERTY_DATA.map((p) => ({ ...p, sort: Math.random() }));  
    flat.sort((a, b) => a.sort - b.sort);  
    return flat;  
  }, []);

  const visibleProperties = selectedCollection  
    ? filtered.flatMap((c) => c.properties)  
    : allProperties;

  return (  
    <>  
      <style>{`  
        .archive-page * {  
          color: #FCFAF7 !important;  
        }  
        .archive-page .collection-name {  
          color: #C5A059 !important;  
        }  
        .archive-page .property-name {  
          color: #FCFAF7 !important;  
          font-weight: 700 !important;  
        }  
        .archive-page .location {  
          color: #C5A059 !important;  
        }  
        .archive-page .description {  
          color: rgba(252,250,247,0.8) !important;  
        }  
      `}</style>

      <main className="archive-page min-h-screen bg-[#0A0A0A] px-6 py-12">  
        <div className="mx-auto max-w-7xl">  
          <p className="text-sm uppercase tracking-[0.2em] !text-[#C5A059] mb-4">  
            Registry of Significance  
          </p>  
          <h1 className="font-serif text-5xl md:text-6xl font-light !text-[#FCFAF7] mb-12">  
            The Archive  
          </h1>

          <div className="mb-10 flex flex-wrap gap-3">  
            <button  
              onClick={() => setSelectedCollection(null)}  
              className={`rounded-full border px-5 py-2 text-sm tracking-wider uppercase transition-colors ${  
                !selectedCollection  
                  ? 'border-[#C5A059] !text-[#C5A059]'  
                  : 'border-[#C5A059]/20 !text-[#FCFAF7]'  
              }`}  
            >  
              All  
            </button>  
            {COLLECTION_ORDER.map((name) => (  
              <button  
                key={name}  
                onClick={() => setSelectedCollection(name)}  
                className={`rounded-full border px-5 py-2 text-sm tracking-wider uppercase transition-colors ${  
                  selectedCollection === name  
                    ? 'border-[#C5A059] !text-[#C5A059]'  
                    : 'border-[#C5A059]/20 !text-[#FCFAF7]'  
                }`}  
              >  
                {name}  
              </button>  
            ))}  
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">  
            {visibleProperties.map((property) => (  
              <Link  
                key={property.slug}  
                href={`/archive/property/${property.slug}`}  
                className="group block"  
              >  
                <div className="relative mb-4 aspect-[4/3] overflow-hidden bg-[#111]">  
                  {property.images?.[0] ? (  
                    <Image  
                      src={proxyUrl(property.images[0])}  
                      alt={property.name}  
                      fill  
                      className="object-cover transition-transform duration-700 group-hover:scale-105"  
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"  
                    />  
                  ) : (  
                    <div className="flex h-full items-center justify-center !text-[#C5A059]">  
                      No image  
                    </div>  
                  )}  
                </div>  
                <p className="collection-name text-sm uppercase tracking-[0.15em] mb-1">  
                  {property.collection || 'Uncategorized'}  
                </p>  
                <h2 className="property-name font-serif text-xl mb-1">  
                  {property.name}  
                </h2>  
                <p className="location text-sm uppercase tracking-[0.1em] mb-2">  
                  {property.location}  
                </p>  
                <p className="description text-sm leading-relaxed line-clamp-2">  
                  {property.description}  
                </p>  
              </Link>  
            ))}  
          </div>

          <div className="mt-20 border-t border-[#C5A059]/20 pt-8">  
            <p className="!text-[#C5A059] text-xs tracking-[0.2em] uppercase">  
              NexVoyage Collective // Archive Retrieval  
            </p>  
          </div>  
        </div>  
      </main>  
    </>  
  );  
}  
