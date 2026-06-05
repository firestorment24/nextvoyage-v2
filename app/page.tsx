import Hero from '@/components/Hero'  
import { sanctuaries } from '@/data/sanctuaries'  
import Link from 'next/link'  
import Image from 'next/image'

export default function Home() {  
  return (   
    <main className="min-h-screen">  
      <Hero title="The Art of Escape" subtitle="Curated sanctuaries." />  
      <section className="max-w-7xl mx-auto px-4 py-24">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {sanctuaries.map((s) => (  
            <Link key={s.id} href={`/sanctuaries/${s.slug}`} className="group relative block aspect-[4/5] overflow-hidden rounded-lg">  
              <Image src={s.heroImage} alt={s.name} fill className="object-cover transition-transform group-hover:scale-105" />  
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />  
              <div className="absolute bottom-0 p-6 text-white">  
                <h3 className="text-xl font-light">{s.name}</h3>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>  
    </main>  
  )  
}  
