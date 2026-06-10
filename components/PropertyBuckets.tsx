import React from 'react';  
import Link from 'next/link';  
import { Bucket } from '@/data/sanctuaries';

interface PropertyBucketsProps {  
  buckets: Bucket[];  
}

const PropertyBuckets: React.FC<PropertyBucketsProps> = ({ buckets }) => {  
  return (  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">  
      {buckets.map((bucket) => (  
        <div key={bucket.id} className="border-t border-zinc-800 pt-6">  
          <div className="flex justify-between items-baseline mb-4">  
            <h3 className="text-xl font-light uppercase tracking-widest">{bucket.name}</h3>  
            <span className="text-zinc-500 tabular-nums">{bucket.count} Properties</span>  
          </div>  
          <p className="text-zinc-400 font-light mb-6 leading-relaxed">  
            {bucket.description}  
          </p>  
          <Link   
            href="/reserve"   
            className="text-xs uppercase tracking-[0.2em] text-white hover:text-zinc-400 transition-colors"  
          >  
            Explore Collection →  
          </Link>  
        </div>  
      ))}  
    </div>  
  );  
};

export default PropertyBuckets; 
