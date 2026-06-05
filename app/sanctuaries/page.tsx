import { sanctuaries } from '@/data/sanctuaries'  
import Link from 'next/link'

export default function SanctuariesPage() {  
  return (  
    <main className="p-24">  
      <h1 className="text-4xl font-light mb-12">Our Sanctuaries</h1>  
      <div className="grid gap-4">  
        {sanctuaries.map((s) => (  
          <Link key={s.id} href={`/sanctuaries/${s.slug}`} className="text-blue-600 hover:underline">  
            {s.name}  
          </Link>  
        ))}  
      </div>  
    </main>  
  )  
}  
