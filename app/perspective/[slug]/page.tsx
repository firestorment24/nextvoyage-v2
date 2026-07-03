import Link from "next/link";  
import Image from "next/image";  
import { notFound } from "next/navigation";  
import Navigation from "@/components/Navigation";  
import Footer from "@/components/Footer";
 
const articles = [  
  {  
    slug: "the-perspective-framework",  
    title: "Dossier 00: The Perspective Framework — The Silent ROI",  
    category: "Philosophy / Framework",  
    date: "June 11, 2026",  
    image: "https://cdn.marblism.com/tQ6-iP8FIY3.webp",  
    tags: ["Quiet Luxury", "High Performance", "Tactical Logistics", "Silent ROI"],  
    body: `This foundational essay introduces the Perspective Framework, defining travel as a tactical deployment of time. It explores the "Silent ROI"—the invisible yield of regained focus and decision clarity—and the "Guardian Layer" of service that operates in the shadows. The narrative moves through the Architecture of Calm and the Curated Horizon, framing travel as an investment in legacy and cognitive composure.

The central argument is that for the high-net-worth traveler, the most valuable currency is not money but attention. Every journey must be measured not by its cost, but by what it returns in clarity, perspective, and renewed strategic capacity. The Guardian Layer ensures that this return is maximized through invisible orchestration.`,  
  },  
  {  
    slug: "the-architecture-of-calm",  
    title: "Our Philosophy: The Architecture of Calm",  
    category: "Philosophy",  
    date: "June 14, 2026",  
    image: "https://cdn.marblism.com/VymBul776ZU.webp",  
    tags: ["Architecture of Calm", "Brass & Shadow", "Legacy", "Curation"],  
    body: `This piece details the core brand philosophy of NexVoyage. It discusses the "Architecture of Calm" as a tool for reclaiming attention and the "Brass & Shadow" aesthetic as its visual language. It covers the invisible hand of curation, the "engine" of experience that manages complex logistics behind the scenes, and the commitment to building a legacy through enduring rather than ephemeral experiences.

Every detail is intentional. The weight of a door handle. The angle of afternoon light across a reading room. The precise distance between a seat and the horizon. These are not accidents. They are the Architecture of Calm — a philosophy that whispers rather than shouts, that operates in the shadows of experience.`,  
  },  
  {  
    slug: "the-roi-of-reset",  
    title: "The Perspective Manifesto: The ROI of Reset",  
    category: "Manifesto / Editorial",  
    date: "June 14, 2026",  
    image: "https://cdn.marblism.com/2ee19ezvSvk.webp",  
    tags: ["ROI of Reset", "Privacy", "Focus", "Stillness"],  
    body: `An editorial manifesto on the necessity of subtraction for high-performance leaders. It outlines three pillars: Privacy — the condition of being unreachable as the ultimate luxury. Recovery of Focus — distance from noise as a strategic tool that restores cognitive bandwidth. And Stillness — intentional presence that restores authorship over one's own life.

The thesis is simple: in a world engineered for constant engagement, the ability to disconnect is a competitive advantage. The Reset is not an escape from responsibility but a return to it — sharper, clearer, and more capable than before.`,  
  },  
  {  
    slug: "silence-as-luxury",  
    title: "Silence as Luxury: The Sound of Nothing",  
    category: "Editorial",  
    date: "June 16, 2026",  
    image: "https://cdn.marblism.com/4uxdua4JQg5.webp",  
    tags: ["Acoustic Luxury", "Mental Clarity", "Silence", "Brass & Shadow"],  
    body: `An exploration of silence as a high-performance asset. It describes the "architecture of acoustic peace," moving from the quiet of a private aircraft to the hushed interiors of heritage estates. The essay argues that silence facilitates mental clarity and strategy, defining "hushpitality" as an invisible hand of service that protects the traveler's focus from external static.

In a world of open-plan everything and constant notification, the ability to hear nothing is the rarest commodity. We have mapped the acoustic signatures of every sanctuary — from the decibel floor of a private suite to the wind patterns over a remote coastline. Silence is not absence. It is architecture.`,  
  },  
  {  
    slug: "the-art-of-discretion",  
    title: "The Art of Discretion: Unmarked Sanctuary",  
    category: "Editorial",  
    date: "June 16, 2026",  
    image: "https://cdn.marblism.com/3GCxqGcplNJ.webp",  
    tags: ["Discretion", "Unmarked Sanctuaries", "Privacy", "Refined Minimalism"],  
    body: `Focuses on the beauty of being unseen. It discusses "unmarked sanctuaries" that offer sanctuary through invisibility rather than advertisement. The piece covers the choreography of discretion, the aesthetic of dark stone and brass, and the concept of "earned access" to rare, unmapped moments. It frames the unmarked entry as the heart of Quiet Luxury.

There are places that do not appear on any map. They have no website, no social media presence, no review score. They exist by reputation alone, whispered in private conversations between trusted advisors. These are the unmarked sanctuaries — and they represent the highest expression of Quiet Luxury.`,  
  },  
];

export default function PerspectiveArticlePage({  
  params,  
}: {  
  params: { slug: string };  
}) {  
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-[#0D0D0D] text-[#E2E0D5]">  
      <Navigation />  
      <article className="max-w-4xl mx-auto px-6 pt-32 pb-24">  
        {/* Back Link */}  
        <Link  
          href="/perspective"  
          className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-[#C8A97E] hover:text-[#D4B88C] transition-colors mb-12 group"  
        >  
          <span className="mr-2 transition-transform group-hover:-translate-x-1">&larr;</span>  
          Back to Perspective  
        </Link>

        {/* Hero Image */}  
        <div className="relative aspect-[21/9] overflow-hidden rounded-sm mb-10">  
          <Image  
            src={article.image}  
            alt={article.title}  
            fill  
            className="object-cover"  
            priority  
          />  
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-[#0D0D0D]/10 to-transparent" />  
        </div>

        {/* Meta */}  
        <div className="mb-10">  
          <span className="text-xs tracking-[0.2em] uppercase text-[#C8A97E]">  
            {article.category} &mdash; {article.date}  
          </span>  
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mt-3 text-[#E2E0D5]">  
            {article.title}  
          </h1>

          {/* Tags */}  
          <div className="flex flex-wrap gap-2 mt-6">  
            {article.tags.map((tag) => (  
              <span  
                key={tag}  
                className="text-[11px] tracking-wider uppercase px-3 py-1.5 border border-[#C8A97E]/20 text-[#A09F94] rounded-full"  
              >  
                {tag}  
              </span>  
            ))}  
          </div>  
        </div>

        {/* Body */}  
        <div className="prose prose-invert prose-lg max-w-none">  
          {article.body.split("\n\n").map((paragraph, idx) => (  
            <p  
              key={idx}  
              className={`text-[#A09F94] leading-relaxed mb-6 ${  
                idx === 0 ? "text-xl text-[#E2E0D5] first-letter:text-4xl first-letter:font-serif first-letter:text-[#C8A97E] first-letter:float-left first-letter:mr-3 first-letter:mt-1" : ""  
              }`}  
            >  
              {paragraph}  
            </p>  
          ))}  
        </div>

        {/* Divider */}  
        <div className="w-16 h-px bg-[#C8A97E]/30 mx-auto mt-16 mb-8" />

        {/* Footer Nav */}  
        <div className="text-center">  
          <Link  
            href="/perspective"  
            className="text-xs tracking-[0.2em] uppercase text-[#C8A97E] hover:text-[#D4B88C] transition-colors"  
          >  
            &larr; Explore All Perspectives  
          </Link>  
        </div>  
      </article>  
      <Footer />  
    </main>  
  );  
}  
