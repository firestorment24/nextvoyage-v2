// app/perspective/[slug]/page.tsx  
import { notFound } from 'next/navigation';  
import Link from 'next/link';

export const dynamic = 'force-static';  
export const dynamicParams = false;

export async function generateStaticParams() {  
  return [  
    { slug: 'the-silent-roi' },  
    { slug: 'the-architecture-of-calm' },  
    { slug: 'the-shadow-of-protection' },  
    { slug: 'the-quiet-recalibration' },  
    { slug: 'the-architecture-of-the-journey' },  
    { slug: 'the-logistics-of-composure' },  
  ];  
}

const ARTICLE_DATA: Record<string, any> = {  
  "the-silent-roi": {  
    title: "The Silent ROI",  
    subtitle: "Volume 01 — The Manifesto",  
    hero: "https://cdn.marblism.com/JXJNAcJDNQ7.webp",  
    intro: "The ultimate luxury is not a destination, but a state of being. We examine why a nervous system at rest is the highest-yielding asset in a high-performance life.",  
    body: [  
      "In an era where every second is commoditized, the only remaining scarcity is silence. For the NexVoyage traveler, luxury has moved past the visible and into the biological. The 'Silent ROI' is the measurable return of clarity, focus, and composure that occurs only when the world is successfully held at bay.",  
      "Stillness is not passive; it is a strategic requirement. We define this through the lens of 'Radical Seclusion'—environments engineered to reset the human frequency to zero. From deep-earth spas in the Swiss Alps to private archipelagos in the South Pacific, we prioritize properties that don't just offer service, but offer the absence of demand.",  
      "The result of this investment is a total recalibration of the self. When you exit a NexVoyage sanctuary, you aren't just rested; you are restored to your most lethal state of mental acuity."  
    ]  
  },  
  "the-architecture-of-calm": {  
    title: "The Architecture of Calm",  
    subtitle: "Volume 02 — Design Philosophy",  
    hero: "https://cdn.marblism.com/GssaOUoI3J4.webp",  
    intro: "Seclusion is tactile. We explore how the physical environment—from obsidian stone to burnished brass—dictates the frequency of the human experience.",  
    body: [  
      "The 'Architecture of Calm' is built on the principle of 'Brass & Shadow.' It is the belief that true luxury should feel weighty, grounded, and permanent. We avoid the clinical 'all-white' minimalism of the past decade in favor of dark, textured sanctuaries that absorb noise and light.",  
      "Materials matter. We curate environments defined by cool obsidian, warm vintage leathers, and the specific golden glint of aged brass. These elements aren't just aesthetic choices; they are grounding agents that slow the heart rate and invite the eye to rest in the shadows.",  
      "A sanctuary must be a fortress of the senses. This means soundscapes designed by silence, lighting that mimics the natural death of the day, and surfaces that demand to be touched."  
    ]  
  },  
  "the-shadow-of-protection": {  
    title: "The Shadow of Protection",  
    subtitle: "Volume 03 — Security & Privacy",  
    hero: "https://cdn.marblism.com/mYMtnpD3UpB.webp",  
    intro: "Privacy is no longer a luxury; it is the final frontier of sovereignty. We look at the 'invisible hand' that ensures your presence remains your own.",  
    body: [  
      "The 'Shadow of Protection' is the most critical layer of the NexVoyage experience. It is the security apparatus that you never see but always feel. It is the gatekeeper of your time, ensuring that the outside world remains an abstraction while you are within our care.",  
      "We treat privacy as a technical discipline. From digital obfuscation for high-profile itineraries to the physical infrastructure of remote estates, we choreograph every movement to ensure zero-exposure travel.",  
      "This is not about hiding; it is about sovereignty. It is the right to be unreachable, unobservable, and entirely focused on the present moment."  
    ]  
  },  
  "the-quiet-recalibration": {  
    title: "The Quiet Recalibration",  
    subtitle: "Dispatch — Wellness",  
    hero: "https://cdn.marblism.com/bVv_xym0Ckt.webp",  
    intro: "Navigating the intersection of deep-tissue recovery and cognitive resets through the lens of 'Tactile Seclusion.'",  
    body: [  
      "Wellness is often misidentified as activity. At NexVoyage, we identify it as recalibration. Our dispatch on wellness focuses on the 'Architecture of the Reset'—using dark stone soaking tubs and the resonance of brass meditation bowls to induce a state of deep neurological repair.",  
      "The focus is on discrete wellness. No public gyms or performative spas. Instead, we provide in-sanctuary technology and ancient practices that occur in total privacy, allowing for an intimate and observant relationship with one's own recovery.",  
      "The 'Silent ROI' here is a nervous system that has been successfully de-escalated, ready to return to the world with absolute composure."  
    ]  
  },  
  "the-architecture-of-the-journey": {  
    title: "The Architecture of the Journey",  
    subtitle: "Dispatch — Itineraries",  
    hero: "https://cdn.marblism.com/BZFczgXijCL.webp",  
    intro: "The choreography of stillness. How we design movement to feel like a continuous state of arrival.",  
    body: [  
      "An itinerary is a composition. 'The Architecture of the Journey' is our blueprint for radical personalization, where every transition is an invisible hand guiding you toward the next moment of stillness.",  
      "We favor the aesthetic of the 'Old World'—vintage leather, dark marble, and the play of light on centuries-old stone. These settings provide a historical weight that grounds the traveler, making the journey feel as significant as the destination.",  
      "Movement should never be stressful. By managing the logistics of composure, we ensure that the traveler never feels the friction of transition, only the poetry of arrival."  
    ]  
  },  
  "the-logistics-of-composure": {  
    title: "The Logistics of Composure",  
    subtitle: "Dispatch — Aviation",  
    hero: "https://cdn.marblism.com/ARrjs4vNOgk.webp",  
    intro: "Private aviation as the essential infrastructure for mental focus and time-sovereignty.",  
    body: [  
      "Time is the only asset that cannot be reclaimed. Aviation, therefore, is not a transport method; it is a time-machine. 'The Logistics of Composure' examines how private air travel serves as the infrastructure for total focus.",  
      "The environment on board—charcoal upholstery, brass cabin lights, and the solitude of a quiet cabin—is designed to be an extension of the destination sanctuary. It is a space where strategic decisions are made and deep rest is achieved while the world passes by at 45,000 feet.",  
      "By controlling the tarmac, the cabin, and the connection, we ensure that the traveler remains in the 'Shadow of Protection' from takeoff to landing."  
    ]  
  }  
};

export default async function PerspectiveArticle({ params }: { params: Promise<{ slug: string }> }) {  
  const { slug } = await params;  
  const article = ARTICLE_DATA[slug];

  if (!article) notFound();

  return (  
    <article className="min-h-screen bg-[#0a0a0a] text-[#d4d4d4]">  
      {/* Hero Section */}  
      <div className="relative h-[80vh] w-full overflow-hidden border-b border-zinc-900">  
        <img   
          src={article.hero}   
          alt={article.title}   
          className="w-full h-full object-cover grayscale opacity-40"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />  
        <div className="absolute bottom-0 left-0 w-full p-12 lg:p-24">  
          <div className="max-w-4xl">  
            <span className="text-[#b19149] font-mono tracking-[0.5em] text-xs uppercase mb-4 block">  
              {article.subtitle}  
            </span>  
            <h1 className="text-6xl lg:text-8xl font-light text-white tracking-tighter italic">  
              {article.title}  
            </h1>  
          </div>  
        </div>  
      </div>

      {/* Content Section */}  
      <div className="max-w-3xl mx-auto px-8 py-24 leading-relaxed">  
        <div className="text-zinc-500 font-serif text-xl lg:text-2xl italic mb-16 border-l-2 border-[#b19149] pl-8">  
          {article.intro}  
        </div>  
          
        <div className="space-y-12">  
          {article.body.map((paragraph: string, index: number) => (  
            <p key={index} className="font-serif text-lg lg:text-xl text-zinc-400 leading-relaxed">  
              {paragraph}  
            </p>  
          ))}  
        </div>

        <footer className="mt-32 pt-12 border-t border-zinc-900 flex justify-between items-center">  
          <Link href="/perspective" className="text-zinc-500 hover:text-[#b19149] transition-colors tracking-widest text-xs uppercase">  
            ← Return to Perspective  
          </Link>  
          <div className="h-12 w-12 border border-zinc-800 rounded-full flex items-center justify-center">  
            <span className="text-[#b19149] font-mono text-[10px]">NV</span>  
          </div>  
        </footer>  
      </div>  
    </article>  
  );  
}  
