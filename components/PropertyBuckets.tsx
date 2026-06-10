'use client'

import Link from 'next/link'  
import { Bucket } from '@/data/sanctuaries'

interface PropertyBucketsProps {  
  buckets: Bucket[]  
}

export default function PropertyBuckets({ buckets }: PropertyBucketsProps) {  
  if (!buckets || buckets.length === 0) return null

  return (  
    <section className="py-24 bg-black text-white px-6 md:px-12 lg:px-24">  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
        {buckets.map((bucket) => (  
          <Link   
            key={bucket.id}   
            href="/reserve"   
            className="group block border border-neutral-800 p-8 hover:border-neutral-500 transition-all duration-500 bg-neutral-900/20"  
          >  
            <div className="flex justify-between items-start mb-6">  
              <span className="text-2xl font-light tracking-tighter">{bucket.name}</span>  
              <span className="text-[10px] uppercase tracking-widest opacity-40 italic">  
                {bucket.count} Properties  
              </span>  
            </div>  
            <p className="text-sm text-neutral-400 opacity-60 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed font-light">  
              {bucket.description}  
            </p>  
          </Link>  
        ))}  
      </div>  
    </section>  
  )  
}  
