'use client';

import { useState } from 'react';

interface GalleryLightboxProps {  
images: string[];  
propertyName: string;  
proxyUrl: (url: string) => string;  
}

export default function GalleryLightbox({ images, propertyName, proxyUrl }: GalleryLightboxProps) {  
const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

const open = (i: number) => setSelectedIndex(i);  
const close = () => setSelectedIndex(null);  
const prev = () => setSelectedIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));  
const next = () => setSelectedIndex((i) => (i !== null ? (i + 1) % images.length : null));

return (  
  <>  
    {/* Gallery Grid */}  
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">  
      {images.map((img, i) => (  
        <button  
          key={i}  
          onClick={() => open(i)}  
          className="relative aspect-[4/3] overflow-hidden rounded-sm group cursor-pointer"  
        >  
          <img  
            src={proxyUrl(img)}  
            alt={`${propertyName} — view ${i + 1}`}  
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"  
          />  
        </button>  
      ))}  
    </div>

    {/* Lightbox Overlay */}  
    {selectedIndex !== null && (  
      <div  
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"  
        onClick={close}  
      >  
        {/* Close */}  
        <button  
          onClick={close}  
          className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl z-10"  
        >  
          ✕  
        </button>

        {/* Previous */}  
        <button  
          onClick={(e) => { e.stopPropagation(); prev(); }}  
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10"  
        >  
          ‹  
        </button>

        {/* Image */}  
        <img  
          src={proxyUrl(images[selectedIndex])}  
          alt={`${propertyName} — view ${selectedIndex + 1}`}  
          className="max-h-[90vh] max-w-[90vw] object-contain"  
          onClick={(e) => e.stopPropagation()}  
        />

        {/* Next */}  
        <button  
          onClick={(e) => { e.stopPropagation(); next(); }}  
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10"  
        >  
          ›  
        </button>

        {/* Counter */}  
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm tracking-wider">  
          {selectedIndex + 1} / {images.length}  
        </div>  
      </div>  
    )}  
  </>  
);  
}  
