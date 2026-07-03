'use client'

import { useState } from 'react'

interface GalleryLightboxProps {  
  images: string[]  
  propertyName: string  
}
 
export default function GalleryLightbox({ images, propertyName }: GalleryLightboxProps) {  
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const open = (i: number) => setSelectedIndex(i)  
  const close = () => setSelectedIndex(null)  
  const prev = () => setSelectedIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null))  
  const next = () => setSelectedIndex((i) => (i !== null ? (i + 1) % images.length : null))

  if (!images || images.length === 0) return null

  return (  
    <>  
      {/* Gallery Grid */}  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
        {images.map((src, i) => (  
          <button  
            key={i}  
            onClick={() => open(i)}  
            className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"  
          >  
            <img  
              src={src}  
              alt={`${propertyName} - Image ${i + 1}`}  
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"  
            />  
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />  
          </button>  
        ))}  
      </div>

      {/* Lightbox Overlay */}  
      {selectedIndex !== null && (  
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">  
          <button  
            onClick={close}  
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl z-10 w-10 h-10 flex items-center justify-center"  
            aria-label="Close lightbox"  
          >  
            ✕  
          </button>

          <button  
            onClick={prev}  
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-10 w-12 h-12 flex items-center justify-center"  
            aria-label="Previous image"  
          >  
            ‹  
          </button>

          <div className="max-w-5xl max-h-[85vh] mx-4">  
            <img  
              src={images[selectedIndex]}  
              alt={`${propertyName} - Image ${selectedIndex + 1}`}  
              className="max-w-full max-h-[85vh] object-contain"  
            />  
            <p className="text-white/50 text-sm text-center mt-4">  
              {selectedIndex + 1} / {images.length}  
            </p>  
          </div>

          <button  
            onClick={next}  
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-10 w-12 h-12 flex items-center justify-center"  
            aria-label="Next image"  
          >  
            ›  
          </button>  
        </div>  
      )}  
    </>  
  )  
}  
