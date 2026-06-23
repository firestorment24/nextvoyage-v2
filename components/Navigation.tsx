"use client";

import React, { useState, useEffect } from 'react';  
import Link from 'next/link';  
import { Menu, X } from 'lucide-react';

const Navigation = () => {  
const [isOpen, setIsOpen] = useState(false);

useEffect(() => {  
if (isOpen) {  
  document.body.style.overflow = 'hidden';  
} else {  
  document.body.style.overflow = 'unset';  
}  
}, [isOpen]);

const navLinks = [  
{ name: 'LOBBY', href: '/', sub: 'The Beginning' },  
{ name: 'ARCHIVE', href: '/archive', sub: 'Curated Collection' },  
{ name: 'JOURNAL', href: '/journal', sub: 'Travel Stories' },  
{ name: 'INQUIRY', href: '/inquiry', sub: 'Direct Inquiry' },  
];

const brass = '#C5A059';

return (  
<>  
  {/* Top Bar — Fully Transparent */}  
  <nav  
    style={{  
      position: 'fixed',  
      top: 0,  
      left: 0,  
      right: 0,  
      zIndex: 1000,  
      display: 'flex',  
      justifyContent: 'space-between',  
      alignItems: 'center',  
      padding: '1rem 2rem',  
      background: 'transparent',  
      borderBottom: `1px solid rgba(197, 160, 89, 0.15)`,  
    }}  
  >  
    <Link  
      href="/"  
      style={{  
        fontSize: '1.25rem',  
        fontWeight: 500,  
        letterSpacing: '0.15em',  
        color: brass,  
        textDecoration: 'none',  
        textTransform: 'uppercase',  
        fontFamily: 'var(--font-serif)',  
      }}  
    >  
      NEXVOYAGE  
    </Link>

    <button  
      onClick={() => setIsOpen(!isOpen)}  
      style={{  
        background: 'transparent',  
        border: 'none',  
        color: brass,  
        cursor: 'pointer',  
        zIndex: 1001,  
        padding: '0.5rem',  
      }}  
      aria-label="Toggle menu"  
    >  
      {isOpen ? <X size={24} /> : <Menu size={24} />}  
    </button>  
  </nav>

  {/* Spacer */}  
  <div style={{ height: '4rem' }} />

  {/* Fullscreen Overlay — Pure Black */}  
  <div  
    style={{  
      position: 'fixed',  
      top: 0,  
      left: 0,  
      width: '100vw',  
      height: '100vh',  
      backgroundColor: '#000000',  
      zIndex: 999,  
      display: 'flex',  
      flexDirection: 'column',  
      justifyContent: 'center',  
      alignItems: 'center',  
      gap: '2rem',  
      transition: 'opacity 0.7s ease, visibility 0.7s ease',  
      opacity: isOpen ? 1 : 0,  
      visibility: isOpen ? 'visible' : 'hidden',  
    }}  
  >  
    {navLinks.map((link, i) => (  
      <Link  
        key={link.name}  
        href={link.href}  
        onClick={() => setIsOpen(false)}  
        style={{  
          display: 'flex',  
          flexDirection: 'column',  
          alignItems: 'center',  
          textDecoration: 'none',  
          transition: 'all 0.7s ease',  
          transitionDelay: `${i * 100}ms`,  
          transform: isOpen ? 'translateY(0)' : 'translateY(40px)',  
          opacity: isOpen ? 1 : 0,  
        }}  
      >  
        <span  
          style={{  
            fontSize: '0.75rem',  
            letterSpacing: '0.3em',  
            color: 'rgba(197, 160, 89, 0.6)',  
            textTransform: 'uppercase',  
            marginBottom: '0.25rem',  
          }}  
        >  
          {link.sub}  
        </span>  
        <span  
          style={{  
            fontSize: '3rem',  
            letterSpacing: '0.15em',  
            color: brass,  
            fontWeight: 300,  
            textTransform: 'uppercase',  
          }}  
        >  
          {link.name}  
        </span>  
      </Link>  
    ))}

    <div  
      style={{  
        position: 'absolute',  
        bottom: '3rem',  
        fontSize: '0.7rem',  
        letterSpacing: '0.2em',  
        color: 'rgba(197, 160, 89, 0.4)',  
        textTransform: 'uppercase',  
        transition: 'opacity 1s ease',  
        transitionDelay: '0.6s',  
        opacity: isOpen ? 1 : 0,  
      }}  
    >  
      Member Services | Private Collection  
    </div>  
  </div>  
</>  
);  
};

export default Navigation;  
