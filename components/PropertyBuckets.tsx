import React from 'react';  
import Link from 'next/link';

// Defining interfaces locally to fix the import errors  
interface Property {  
name: string;  
id?: string;  
link?: string;  
}

interface Bucket {  
title: string;  
properties: Property[];  
}

interface PropertyBucketsProps {  
buckets: Bucket[];  
}

const PropertyBuckets: React.FC<PropertyBucketsProps> = ({ buckets }) => {  
if (!buckets || buckets.length === 0) return null;

return (  
  <section className="space-y-12">  
    {buckets.map((bucket, index) => (  
      <div key={index} className="space-y-6">  
        <h3 className="text-2xl font-serif text-gray-900 border-b pb-2">  
          {bucket.title}  
        </h3>  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">  
          {bucket.properties.map((property, pIndex) => (  
            <div   
              key={pIndex}   
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"  
            >  
              <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">  
                {property.name}  
              </p>  
              <Link   
                href={property.link || '#'}   
                className="text-xs text-gray-500 uppercase tracking-widest mt-1 inline-block"  
              >  
                View Details →  
              </Link>  
            </div>  
          ))}  
        </div>  
      </div>  
    ))}  
  </section>  
);  
};

export default PropertyBuckets;  
