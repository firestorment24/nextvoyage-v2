import Link from 'next/link'

export default function Footer() {  
return (  
<footer className="bg-[#0A0A0A] border-t border-white/10 mt-32">  
<div className="max-w-7xl mx-auto px-6 py-20">  
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="md:col-span-2">  
<h4 className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] mb-6">  
NexVoyage Collective  
</h4>  
<p className="text-white/40 text-sm font-sans font-light leading-relaxed max-w-md">  
A private travel advisory curating quiet luxury, sanctuaries, and   
bespoke journeys for the discerning few. Not a travel agency —   
a guardian of time.  
</p>  
</div>

<div>  
<h4 className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] mb-6">  
Navigate  
</h4>  
<ul className="space-y-3">  
<li>  
<Link href="/" className="text-white/40 text-sm font-sans font-light hover:text-white transition-colors">  
Home  
</Link>  
</li>  
<li>  
<Link href="/mandate" className="text-white/40 text-sm font-sans font-light hover:text-white transition-colors">  
The Mandate  
</Link>  
</li>  
<li>  
<Link href="/archive" className="text-white/40 text-sm font-sans font-light hover:text-white transition-colors">  
Archive  
</Link>  
</li>  
<li>  
<Link href="/perspective" className="text-white/40 text-sm font-sans font-light hover:text-white transition-colors">  
Perspective  
</Link>  
</li>  
<li>  
<Link href="/inquiry" className="text-white/40 text-sm font-sans font-light hover:text-white transition-colors">  
Application for Entry  
</Link>  
</li>  
<li>  
<Link href="/legal" className="text-white/40 text-sm font-sans font-light hover:text-white transition-colors">  
Legal  
</Link>  
</li>  
</ul>  
</div>

<div>  
<h4 className="text-[#D4AF38] uppercase tracking-[0.3em] text-[10px] mb-6">  
Connect  
</h4>  
<ul className="space-y-3">  
<li>  
<a   
href="https://cal.com/nexvoyagecollective/discovery-call"   
target="_blank"   
rel="noopener noreferrer"  
className="text-white/40 text-sm font-sans font-light hover:text-white transition-colors"  
>  
Discovery Call  
</a>  
</li>  
<li>  
<a   
href="mailto:info@nexvoyagecollective.com"   
className="text-white/40 text-sm font-sans font-light hover:text-white transition-colors"  
>  
info@nexvoyagecollective.com  
</a>  
</li>  
</ul>  
</div>

</div>

<div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">  
<p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-sans">  
&copy; {new Date().getFullYear()} NexVoyage Collective. All rights reserved.  
</p>  
<p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-sans">  
Private &middot; Discreet &middot; Curated  
</p>  
</div>  
</div>  
</footer>  
)  
}  
