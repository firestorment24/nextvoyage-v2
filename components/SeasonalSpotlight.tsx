'use client';

import { useEffect, useState } from 'react';  
import Link from 'next/link';

const slides = [  
  {  
    eyebrow: 'Seasonal Journeys',  
    title: 'The Holiday Collection',  
    description:  
      'Thanksgiving, Christmas, and New Year’s shaped around atmosphere, access, and time well spent.',  
    href: '/holidays',  
    cta: 'Explore the Holiday Collection',  
    image:  
      'https://images.unsplash.com/photo-1671500313906-e82e2e71246c?auto=format&fit=crop&w=1800&q=85',  
    alt: 'Christmas tree and holiday decorations inside the Biltmore Estate library',  
  },  
  {  
    eyebrow: 'Sanctuary Culture',  
    title: 'The Event Ledger',  
    description:  
      'Collector gatherings, sporting traditions, cultural milestones, and rare expeditions worth building a journey around.',  
    href: '/events',  
    cta: 'Explore the Event Ledger',  
    image:  
      'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1800&q=85',  
    alt: 'Private aircraft wing above clouds at sunset',  
  },  
  {  
eyebrow: 'The Celebration Collection',  
title: 'Celebrating Her',  
description:  
  'Milestone journeys designed around the women, friendships, and moments worth traveling for.',  
href: '/celebrating-her',  
cta: 'Explore Celebrating Her',  
image:  
  'https://images.unsplash.com/photo-1536735382886-6b592aee0f2d?auto=format&fit=crop&w=1800&q=85',  
alt: 'Woman walking through a vineyard at golden hour',  
},  
];

export default function SeasonalSpotlight() {  
  const [isOpen, setIsOpen] = useState(false);  
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {  
    const hasSeenSpotlight = sessionStorage.getItem(  
      'nexvoyage-seasonal-spotlight',  
    );

    if (hasSeenSpotlight) {  
      return;  
    }

    const timer = window.setTimeout(() => {  
      setIsOpen(true);  
      sessionStorage.setItem(  
        'nexvoyage-seasonal-spotlight',  
        'seen',  
      );  
    }, 1500);

    return () => window.clearTimeout(timer);  
  }, []);

  useEffect(() => {  
    if (!isOpen) {  
      return;  
    }

    function handleKeyDown(event: KeyboardEvent) {  
      if (event.key === 'Escape') {  
        setIsOpen(false);  
      }

      if (event.key === 'ArrowRight') {  
        setActiveSlide((current) =>  
          current === slides.length - 1 ? 0 : current + 1,  
        );  
      }

      if (event.key === 'ArrowLeft') {  
        setActiveSlide((current) =>  
          current === 0 ? slides.length - 1 : current - 1,  
        );  
      }  
    }

    document.addEventListener('keydown', handleKeyDown);

    return () =>  
      document.removeEventListener('keydown', handleKeyDown);  
  }, [isOpen]);

  if (!isOpen) {  
    return null;  
  }

  const slide = slides[activeSlide];

  function showPrevious() {  
    setActiveSlide((current) =>  
      current === 0 ? slides.length - 1 : current - 1,  
    );  
  }

  function showNext() {  
    setActiveSlide((current) =>  
      current === slides.length - 1 ? 0 : current + 1,  
    );  
  }

  return (  
    <div  
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm md:p-8"  
      role="dialog"  
      aria-modal="true"  
      aria-label="Featured NexVoyage experiences"  
      onMouseDown={(event) => {  
        if (event.target === event.currentTarget) {  
          setIsOpen(false);  
        }  
      }}  
    >  
      <div className="relative w-full max-w-5xl overflow-hidden border border-white/15 bg-[#111111] shadow-2xl">  
        <button  
          type="button"  
          onClick={() => setIsOpen(false)}  
          aria-label="Close featured experiences"  
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center border border-white/25 bg-black/40 text-xl text-white/80 transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"  
        >  
          ×  
        </button>

        <div className="relative min-h-[620px] md:min-h-[560px]">  
          <img  
            src={slide.image}  
            alt={slide.alt}  
            className="absolute inset-0 h-full w-full object-cover"  
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />  
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />

          <div className="relative flex min-h-[620px] items-end p-8 md:min-h-[560px] md:p-14">  
            <div className="max-w-xl">  
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">  
                {slide.eyebrow}  
              </p>

              <h2 className="mt-5 text-4xl font-light tracking-tight text-white md:text-7xl">  
                {slide.title}  
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/70 md:text-base">  
                {slide.description}  
              </p>

              <Link  
                href={slide.href}  
                onClick={() => setIsOpen(false)}  
                className="mt-8 inline-flex border border-[#D4AF37] px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-black"  
              >  
                {slide.cta} →  
              </Link>  
            </div>  
          </div>

          <div className="absolute bottom-8 right-8 flex items-center gap-3 md:right-14">  
            <button  
              type="button"  
              onClick={showPrevious}  
              aria-label="Previous featured experience"  
              className="flex h-10 w-10 items-center justify-center border border-white/25 text-white/70 transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"  
            >  
              ←  
            </button>

            <div className="flex gap-2">  
              {slides.map((item, index) => (  
                <button  
                  key={item.title}  
                  type="button"  
                  aria-label={`Show ${item.title}`}  
                  aria-pressed={activeSlide === index}  
                  onClick={() => setActiveSlide(index)}  
                  className={`h-1.5 transition-all ${  
                    activeSlide === index  
                      ? 'w-8 bg-[#D4AF37]'  
                      : 'w-4 bg-white/40'  
                  }`}  
                />  
              ))}  
            </div>

            <button  
              type="button"  
              onClick={showNext}  
              aria-label="Next featured experience"  
              className="flex h-10 w-10 items-center justify-center border border-white/25 text-white/70 transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"  
            >  
              →  
            </button>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
}  
