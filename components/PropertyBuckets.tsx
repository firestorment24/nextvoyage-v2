'use client';

import Link from 'next/link';  
import { Bucket } from '@/data/sanctuaries';

interface PropertyBucketsProps {  
  buckets: Bucket[];  
}

export default function PropertyBuckets({ buckets }: PropertyBucketsProps) {  
  return (  
    <section className="px-12 py-24 bg-neutral-950">  
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">  
        <div>  
          <h3 className="text-[10px] uppercase tracking-[0.5em] opacity-30 mb-4">Property Buckets</h3>  
          <h2 className="text-4xl font-light tracking-tighter">Curated Categories</h2>  
        </div>  
        <p className="max-w-md text-neutral-500 text-sm leading-relaxed italic">  
          Each sanctuary is divided into specific residential collections, vetted for exclusivity and architectural significance.  
        </p>  
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">  
        {buckets.map((bucket) => (  
          <Link   
            key={bucket.id}   
            href="/reserve"   
            className="group relative aspect-[4/5] overflow-hidden bg-black"  
          >  
            <img   
              src={bucket.imageUrl}   
              alt={bucket.name}   
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"  
            />  
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />  
              
            <div className="absolute bottom-0 left-0 p-8 w-full">  
              <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4">  
                <span className="text-2xl font-light tracking-tighter">{bucket.name}</span>  
                <span className="text-[10px] uppercase tracking-widest opacity-40 italic">  
                  {bucket.count} Properties  
                </span>  
              </div>  
              <p className="text-sm text-neutral-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 line-clamp-2">  
                {bucket.description}  
              </p>  
            </div>  
          </Link>  
        ))}  
      </div>  
    </section>  
  );  
}  
