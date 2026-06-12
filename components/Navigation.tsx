// components/Navigation.tsx  
import Link from 'next/link';

export const Navigation = () => {  
  const navLinks = [   
    { name: 'Lobby', href: '/' },  
    { name: 'Archive', href: '/archive' },  
    { name: 'Perspective', href: '/perspective' },  
    { name: 'Journal', href: '/journal' },  
    { name: 'Inquiry', href: '/inquiry' },  
  ];

  return (  
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#000000] border-b border-[#C5A059]/10 py-6 px-8 flex justify-between items-center">  
      {/* Branding - Playfair Display */}  
      <div className="text-[#C5A059] font-serif text-xl tracking-widest uppercase">  
        <Link href="/">NexVoyage</Link>  
      </div>

      {/* Links - Inter with Hushed Interaction */}  
      <div className="flex space-x-12">  
        {navLinks.map((link) => (  
          <Link  
            key={link.name}  
            href={link.href}  
            className="text-[#C5A059]/60 font-sans text-xs uppercase tracking-[0.2em] transition-all duration-700 ease-in-out hover:text-[#C5A059] hover:tracking-[0.25em]"  
          >  
            {link.name}  
          </Link>  
        ))}  
      </div>  
    </nav>  
  );  
};  
