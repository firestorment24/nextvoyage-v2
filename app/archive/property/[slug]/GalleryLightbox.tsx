'use client'

import { useState } from 'react'

interface GalleryLightboxProps {  
  images: string[]  
  propertyName: string  
  proxyUrl: (url: string) => string  
}

export default function GalleryLightbox({  
  images,  
  propertyName,  
  proxyUrl,  
}: GalleryLightboxProps) {  
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const open = (i: number) => setSelectedIndex(i)  
  const close = () => setSelectedIndex(null)  
  const prev = () =>  
    setSelectedIndex((i) =>  
      i !== null ? (i - 1 + images.length) % images.length : null  
    )  
  const next = () =>  
    setSelectedIndex((i) =>  
      i !== null ? (i + 1) % images.length : null  
    )

  return (  
    <>  
      {/* Gallery Grid */}  
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">  
        {images.map((img, i) => (  
          <button  
            key={i}  
            onClick={() => open(i)}  
            className="relative aspect-[4/3] overflow-hidden rounded-sm group cursor-pointer"  
          >  
            <img  
              src={proxyUrl(img)}  
              alt={`${propertyName} gallery image ${i + 1}`}  
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"  
            />  
          </button>  
        ))}  
      </div>

      {/* Lightbox Overlay */}  
      {selectedIndex !== null && (  
        <div  
          onClick={close}  
          style={{  
            position: 'fixed',  
            inset: 0,  
            zIndex: 9999,  
            background: 'rgba(0,0,0,0.92)',  
            display: 'flex',  
            alignItems: 'center',  
            justifyContent: 'center',  
          }}  
        >  
          {/* Close */}  
          <button  
            onClick={close}  
            style={{  
              position: 'absolute',  
              top: '1.5rem',  
              right: '1.5rem',  
              color: '#ffffff',  
              fontSize: '2rem',  
              zIndex: 10,  
              background: 'none',  
              border: 'none',  
              cursor: 'pointer',  
            }}  
          >  
            ✕  
          </button>

          {/* Previous */}  
          <button  
            onClick={(e) => {  
              e.stopPropagation()  
              prev()  
            }}  
            style={{  
              position: 'absolute',  
              left: '1.5rem',  
              top: '50%',  
              transform: 'translateY(-50%)',  
              color: '#ffffff',  
              fontSize: '3rem',  
              zIndex: 10,  
              background: 'none',  
              border: 'none',  
              cursor: 'pointer',  
            }}  
          >  
            ‹  
          </button>

          {/* Image */}  
          <img  
            src={proxyUrl(images[selectedIndex])}  
            alt={`${propertyName} gallery image ${selectedIndex + 1}`}  
            onClick={(e) => e.stopPropagation()}  
            style={{  
              maxHeight: '85vh',  
              maxWidth: '90vw',  
              objectFit: 'contain',  
              borderRadius: '4px',  
            }}  
          />

          {/* Next */}  
          <button  
            onClick={(e) => {  
              e.stopPropagation()  
              next()  
            }}  
            style={{  
              position: 'absolute',  
              right: '1.5rem',  
              top: '50%',  
              transform: 'translateY(-50%)',  
              color: '#ffffff',  
              fontSize: '3rem',  
              zIndex: 10,  
              background: 'none',  
              border: 'none',  
              cursor: 'pointer',  
            }}  
          >  
            ›  
          </button>

          {/* Counter */}  
          <div  
            style={{  
              position: 'absolute',  
              bottom: '1.5rem',  
              left: '50%',  
              transform: 'translateX(-50%)',  
              color: '#ffffff',  
              fontSize: '0.875rem',  
              letterSpacing: '0.2em',  
            }}  
          >  
            {selectedIndex + 1} / {images.length}  
          </div>  
        </div>  
      )}  
    </>  
  )  
}  
