import Link from 'next/link'

export default function Footer() {  
  const currentYear = new Date().getFullYear()

  const legalLinks = [  
    { name: 'Privacy Policy', href: '/legal/privacy-policy' },  
    { name: 'Terms & Conditions', href: '/legal/terms-and-conditions' },  
    { name: 'Safety Protocols', href: '/legal/safety' },  
  ]

  const quickLinks = [  
    { name: 'Sanctuaries', href: '/#sanctuaries' },  
    { name: 'The Experience', href: '/#experience' },  
    { name: 'Concierge', href: '/concierge' },  
  ]

  return (  
    <footer className="bg-neutral-900 text-neutral-400 py-20 px-6 border-t border-neutral-800">  
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">  
        {/* Brand Section */}  
        <div className="space-y-6">  
          <h2 className="text-white text-lg tracking-[0.3em] uppercase font-light">  
            NexVoyage Collective  
          </h2>  
          <p className="text-sm leading-relaxed max-w-xs font-light">  
            Architecting silence for the modern nomad. Private sanctuaries,   
            curated for the high net worth traveler.  
          </p>  
        </div>

        {/* Quick Links */}  
        <div className="space-y-6">  
          <h3 className="text-white text-xs tracking-[0.2em] uppercase font-medium">  
            Explore  
          </h3>  
          <ul className="space-y-4">  
            {quickLinks.map((link) => (  
              <li key={link.name}>  
                <Link   
                  href={link.href}  
                  className="text-sm hover:text-white transition-colors duration-300 font-light"  
                >  
                  {link.name}  
                </Link>  
              </li>  
            ))}  
          </ul>  
        </div>

        {/* Legal & Social */}  
        <div className="space-y-6">  
          <h3 className="text-white text-xs tracking-[0.2em] uppercase font-medium">  
            Guardian Layer  
          </h3>  
          <ul className="space-y-4">  
            {legalLinks.map((link) => (  
              <li key={link.name}>  
                <Link   
                  href={link.href}  
                  className="text-sm hover:text-white transition-colors duration-300 font-light"  
                >  
                  {link.name}  
                </Link>  
              </li>  
            ))}  
          </ul>  
        </div>  
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">  
        <p className="text-[10px] tracking-widest uppercase font-light">  
          © {currentYear} NexVoyage Collective. All Rights Reserved.  
        </p>  
        <p className="text-[10px] tracking-widest uppercase font-light italic">  
          Silence is the Ultimate Luxury.  
        </p>  
      </div>  
    </footer>  
  )  
}  
