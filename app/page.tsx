import Link from 'next/link'

export default function HomePage() {  
  return (  
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">  
      <div className="max-w-4xl space-y-12">  
        <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight uppercase">  
          Curating the <br />  
          <span className="italic font-normal text-gray-400">Unreachable</span>  
        </h1>  
          
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed text-gray-600">  
          We do not sell travel. We engineer time, privacy, and perspective for those whose presence is their most valuable asset.  
        </p>

        <div className="pt-8">  
          <Link   
            href="/sanctuaries"   
            className="inline-block border-b border-black pb-1 text-sm tracking-widest uppercase hover:text-gray-500 transition-colors"  
          >  
            Enter The Collection  
          </Link>  
        </div>  
      </div>

      <div className="mt-32 w-full max-w-6xl border-t border-gray-200 pt-16 text-left">  
        <blockquote className="text-2xl font-light italic text-gray-500 max-w-3xl">  
          "The ultimate luxury is not where you go, but who you are when you get there."  
        </blockquote>  
      </div>  
    </div>  
  )  
}  
