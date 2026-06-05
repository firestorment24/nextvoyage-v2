import { notFound } from 'next/navigation'  
import Link from 'next/link'  
import Image from 'next/image'  
import { sanctuaries } from '@/data/sanctuaries'  
import PropertyBuckets from '@/components/PropertyBuckets'

export default function SanctuaryPage({ params }: { params: { slug: string } }) {  
  const sanctuary = sanctuaries.find((s) => s.slug === params.slug)  
  if (!sanctuary) notFound()

  return (   
    <main className="min-h-screen">  
      <section className="relative h-[60vh] w-full">  
        <Image src={sanctuary.heroImage} alt={sanctuary.name} fill priority className="object-cover" />  
        <div className="absolute inset-0 bg-black/20" />  
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">  
          <h1 className="text-6xl font-light text-white">{sanctuary.name}</h1>  
          <Link href="/reserve" className="mt-8 px-8 py-3 bg-white text-black text-xs uppercase tracking-widest">  
            Request a Quote  
          </Link>  
        </div>  
      </section>  
      <section className="py-24 max-w-7xl mx-auto px-4">  
        <PropertyBuckets sanctuaryId={sanctuary.id} />  
      </section>  
    </main>  
  )  
}  
