'use client';

import Link from 'next/link';

export default function DiscoveryCallCTA() {  
  return (  
    <div className="fixed bottom-8 right-8 z-50">  
      <Link  
        href="/intake"  
        className="group relative flex items-center gap-3 bg-[#C8A96E] text-[#0A0A0A]   
                   pl-5 pr-7 py-3.5 rounded-full font-medium text-sm tracking-[0.15em] uppercase  
                   shadow-[0_4px_20px_rgba(200,169,110,0.3)]   
                   hover:shadow-[0_6px_30px_rgba(200,169,110,0.5)]  
                   hover:bg-[#D4B87A] hover:scale-[1.02]  
                   active:scale-[0.98]  
                   transition-all duration-300 ease-out"  
      >  
        <span className="w-2 h-2 bg-[#0A0A0A] rounded-full   
                       group-hover:animate-pulse" />  
        Schedule a Discovery Call  
      </Link>  
    </div>  
  );  
}  
