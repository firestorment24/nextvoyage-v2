'use client';

import React from 'react';

// --- Inline Components for a Clean Build ---

const Navigation = () => (  
  <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '2rem', display: 'flex', justifyContent: 'space-between', mixBlendMode: 'difference' }}>  
    <a href="/" style={{ color: '#E5E5E5', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.2rem', fontWeight: '300' }}>NV | COLLECTIVE</a>  
    <div style={{ display: 'flex', gap: '2rem' }}>  
      <a href="/sanctuaries" style={{ color: '#E5E5E5', textDecoration: 'none', fontSize: '0.7rem', letterSpacing: '0.1rem' }}>SANCTUARIES</a>  
      <a href="/reserve" style={{ color: '#E5E5E5', textDecoration: 'none', fontSize: '0.7rem', letterSpacing: '0.1rem' }}>RESERVE</a>  
    </div>  
  </nav>  
);

const Footer = () => (  
  <footer style={{ padding: '4rem 2rem', backgroundColor: '#0A0A0A', borderTop: '1px solid #1A1A1A', textAlign: 'center' }}>  
    <p style={{ color: '#404040', fontSize: '0.7rem', letterSpacing: '0.2rem' }}>© 2026 NEXVOYAGE COLLECTIVE</p>  
  </footer>  
);

interface SectionProps {  
  image: string;  
  title: string;  
  subtitle: string;  
  alignment?: 'left' | 'right';  
}

const OverlaidSection = ({ image, title, subtitle, alignment = 'left' }: SectionProps) => (  
  <section style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>  
    <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={title} />  
    <div style={{   
      position: 'absolute',   
      top: 0, left: 0, width: '100%', height: '100%',   
      backgroundColor: 'rgba(0,0,0,0.4)',  
      display: 'flex',   
      flexDirection: 'column',   
      justifyContent: 'center',   
      padding: '10%',  
      textAlign: alignment  
    }}>  
      <h2 style={{ color: '#C5A059', fontSize: '3rem', fontWeight: '300', marginBottom: '1rem', letterSpacing: '0.3rem', textTransform: 'uppercase' }}>{title}</h2>  
      <p style={{ color: '#E5E5E5', fontSize: '1.2rem', maxWidth: '600px', lineHeight: '1.6', fontWeight: '300', alignSelf: alignment === 'right' ? 'flex-end' : 'flex-start' }}>{subtitle}</p>  
    </div>  
  </section>  
);

export default function MaybournePage() {  
  return (  
    <main style={{ backgroundColor: '#0A0A0A', color: '#E5E5E5', fontFamily: 'serif' }}>  
      <Navigation />  
        
      {/* Hero Section */}  
      <OverlaidSection   
        image="https://cdn.marblism.com/QaCq5-bi5FE.webp"  
        title="The Maybourne Riviera"  
        subtitle="A masterpiece of modern architecture suspended between the Mediterranean sky and the azure sea. Where silence meets the horizon."  
      />

      {/* Detail Section 1 */}  
      <OverlaidSection   
        image="https://cdn.marblism.com/WuyrXpnAwo9.webp"  
        title="Neural Decoupling"  
        subtitle="Step into a sanctuary designed to strip away the noise of the digital world. Architectural silence, perfected."  
        alignment="right"  
      />

      {/* CTA Section */}  
      <section style={{ padding: '10rem 2rem', textAlign: 'center' }}>  
        <h3 style={{ color: '#C5A059', fontSize: '1.5rem', marginBottom: '3rem', fontWeight: '300', letterSpacing: '0.2rem' }}>CLAIM YOUR SPACE</h3>  
        <a href="/reserve" style={{   
          padding: '1.5rem 4rem',   
          border: '1px solid #C5A059',   
          color: '#C5A059',   
          textDecoration: 'none',   
          fontSize: '0.8rem',   
          letterSpacing: '0.3rem'   
        }}>START THE RESERVE PROCESS</a>  
      </section>

      <Footer />  
    </main>  
  );  
}  
