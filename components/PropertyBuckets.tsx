import React from 'react'  
import Link from 'next/link'

interface PropertyBucketsProps {  
  sanctuaryId: string  
}

export default function PropertyBuckets({ sanctuaryId }: PropertyBucketsProps) {  
  // Mock data for the collections within a sanctuary  
  const buckets = [  
    { name: 'The Private Estates', count: 3, description: 'Highest level of confidentiality.' },  
    { name: 'Architectural Icons', count: 5, description: 'Historically significant structures.' },  
    { name: 'Off-Market Access', count: 2, description: 'Exclusive quiet-luxury listings.' }  
  ]

  return (  
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-t border-black/5">  
      {buckets.map((bucket, index) => (  
        <div key={index} className="flex flex-col group">  
          <p className="text-[10px] uppercase tracking-[0.3em] mb-4 opacity-40">  
            Bucket {index + 1}  
          </p>  
          <h3 className="text-2xl font-light mb-2">{bucket.name}</h3>  
          <p className="text-sm opacity-60 mb-8 leading-relaxed italic">  
            "{bucket.description}"  
          </p>  
          <div className="mt-auto flex items-center justify-between">  
            <span className="text-[10px] font-mono opacity-50">{bucket.count} PROPERTIES AVAILABLE</span>  
            <Link   
              href="/reserve"   
              className="text-[10px] uppercase tracking-widest border-b border-black pb-1 group-hover:opacity-50 transition-opacity"  
            >  
              Inquire  
            </Link>  
          </div>  
        </div>  
      ))}  
    </div>  
  )  
}  
