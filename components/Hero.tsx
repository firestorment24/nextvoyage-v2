import React from 'react';  
import Image from 'next/image';  
import Link from 'next/link';

interface HeroProps {  
  title: string;  
  subtitle: string;  
  heroImage?: string; // The new prop  
  image?: string;     // Backward compatibility  
  ctaText?: string;  
  ctaHref?: string;  
}

export default function Hero({ title, subtitle, heroImage, image, ctaText, ctaHref }: HeroProps) {  
  // Use heroImage first, then image, then a high-quality fallback  
  const finalImage = heroImage || image || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80";

  return (  
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">  
      {/* Cinematic Background */}  
      <div className="absolute inset-0 z-0">  
        <Image  
          src={finalImage}  
          alt={title}  
          fill  
          priority  
          className="object-cover brightness-[0.45] transition-transform duration-1000"  
        />  
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />  
      </div>

      {/* Content */}  
      <div className="relative z-10 text-center px-6 max-w-5xl">  
        <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tighter">  
          {title}  
        </h1>  
        <p className="text-lg md:text-xl text-white/80 font-light mb-12 tracking-[0.2em] uppercase">  
          {subtitle}  
        </p>  
          
        {ctaText && ctaHref && (  
          <Link   
            href={ctaHref}  
            className="inline-block px-12 py-5 bg-white text-black text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-neutral-200 transition-all duration-300"  
          >  
            {ctaText}  
          </Link>  
        )}  
      </div>

      {/* Elegant Scroll Indicator */}  
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 opacity-50">  
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />  
      </div>  
    </section>  
  );  
}  
