'use client';

import Link from 'next/link';  
import { Bucket } from '@/data/sanctuaries';

interface PropertyBucketsProps {  
  buckets: Bucket[];  
}

export default function PropertyBuckets({ buckets }: PropertyBucketsProps) {  
  if (!buckets || buckets.length === 0) return null;

  return (  
    <section className="py-24 bg-white">  
      <div className="max-w-7xl mx-auto px-6">  
        <div className="flex justify-between items-end mb-16">  
          <div>  
            <h2 className="text-4xl font-light tracking-tight text-neutral-900 mb-4">  
              Property Buckets  
            </h2>   
            <p className="text-neutral-500 max-w-md">  
              Curated categories of exclusive residences within this sanctuary.  
            </p>  
          </div>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
          {buckets.map((bucket, index) => (  
            <Link   
              key={index}  
              href="/reserve"  
              className="group block border border-neutral-100 p-8 hover:border-neutral-900 transition-colors duration-500"  
            >  
              <div className="flex justify-between items-start mb-12">  
                <span className="text-xs font-medium tracking-widest uppercase text-neutral-400">  
                  {String(index + 1).padStart(2, '0')}  
                </span>  
                <span className="text-sm font-light text-neutral-500 italic">  
                  {bucket.count} Properties  
                </span>  
              </div>  
                
              <h3 className="text-2xl font-light mb-4 group-hover:translate-x-2 transition-transform duration-500">  
                {bucket.name}  
              </h3>  
                
              <p className="text-neutral-500 text-sm leading-relaxed mb-8">  
                {bucket.description}  
              </p>  
                
              <div className="pt-4 border-t border-neutral-50 text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500">  
                Inquire &rarr;  
              </div>  
            </Link>  
          ))}  
        </div>  
      </div>  
    </section>  
  );  
}  
