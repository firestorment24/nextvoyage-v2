// app/sanctuary/[slug]/page.tsx  
import { notFound } from 'next/navigation';  
import Link from 'next/link';

const SANCTUARY_DATA: Record<string, any> = {  
// ... keep your sanctuary data objects here ...  
};

export default function SanctuaryPage({ params }: { params: { slug: string } }) {  
const data = SANCTUARY_DATA[params.slug];  
if (!data) notFound();

return (  
  <main className="px-6 py-20">  
    <div className="max-w-5xl mx-auto">  
      <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-4">{data.category}</p>  
      <h1 className="text-6xl font-bold tracking-tighter uppercase mb-12">{data.name}</h1>  
      {/* Content details here */}  
    </div>  
  </main>  
);  
} 
