import Link from 'next/link';

export type LegalSection = {  
  heading: string;  
  paragraphs?: string[];  
  bullets?: string[];  
  subheadings?: {  
    heading: string;  
    paragraphs?: string[];  
    bullets?: string[];  
  }[];  
};

export type LegalDocumentData = {  
  protocol: string;  
  title: string;  
  description: string;  
  effectiveDate: string;  
  lastUpdated: string;  
  introduction?: string[];  
  sections: LegalSection[];  
  closing?: string;  
};

export default function LegalDocument({  
  document,  
}: {  
  document: LegalDocumentData;  
}) {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] px-6 pb-24 pt-32 text-white selection:bg-[#C5A059]/30 md:px-12">  
      <div className="mx-auto max-w-4xl space-y-12">  
        <header className="border-b border-white/10 pb-10">  
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#C5A059]">  
            {document.protocol}  
          </p>

          <h1 className="mb-6 text-4xl font-light tracking-tight text-white md:text-5xl">  
            {document.title}  
          </h1>

          <p className="mb-6 text-sm leading-relaxed text-white/60 md:text-base">  
            {document.description}  
          </p>

          <div className="space-y-1 text-xs uppercase tracking-[0.15em] text-white/40">  
            <p>Effective date: {document.effectiveDate}</p>  
            <p>Last updated: {document.lastUpdated}</p>  
          </div>  
        </header>

        <article className="space-y-12">  
          {document.introduction?.map((paragraph, index) => (  
            <p  
              key={`intro-${index}`}  
              className="text-sm leading-relaxed text-white/75 md:text-base"  
            >  
              {paragraph}  
            </p>  
          ))}

          {document.sections.map((section, index) => (  
            <section key={`${section.heading}-${index}`} className="space-y-5">  
              <h2 className="text-xl font-medium tracking-wide text-[#C5A059]">  
                {section.heading}  
              </h2>

              {section.paragraphs?.map((paragraph, paragraphIndex) => (  
                <p  
                  key={`${section.heading}-paragraph-${paragraphIndex}`}  
                  className="text-sm leading-relaxed text-white/75 md:text-base"  
                >  
                  {paragraph}  
                </p>  
              ))}

              {section.bullets && section.bullets.length > 0 && (  
                <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-white/75 md:text-base">  
                  {section.bullets.map((bullet, bulletIndex) => (  
                    <li key={`${section.heading}-bullet-${bulletIndex}`}>  
                      {bullet}  
                    </li>  
                  ))}  
                </ul>  
              )}

              {section.subheadings?.map((subheading, subheadingIndex) => (  
                <div  
                  key={`${section.heading}-subheading-${subheadingIndex}`}  
                  className="space-y-4 border-l border-[#C5A059]/30 pl-5"  
                >  
                  <h3 className="text-base font-medium text-white">  
                    {subheading.heading}  
                  </h3>

                  {subheading.paragraphs?.map((paragraph, paragraphIndex) => (  
                    <p  
                      key={`${subheading.heading}-paragraph-${paragraphIndex}`}  
                      className="text-sm leading-relaxed text-white/70 md:text-base"  
                    >  
                      {paragraph}  
                    </p>  
                  ))}

                  {subheading.bullets &&  
                    subheading.bullets.length > 0 && (  
                      <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-white/70 md:text-base">  
                        {subheading.bullets.map((bullet, bulletIndex) => (  
                          <li  
                            key={`${subheading.heading}-bullet-${bulletIndex}`}  
                          >  
                            {bullet}  
                          </li>  
                        ))}  
                      </ul>  
                    )}  
                </div>  
              ))}  
            </section>  
          ))}

          {document.closing && (  
            <p className="border-t border-white/10 pt-8 text-sm italic leading-relaxed text-white/50">  
              {document.closing}  
            </p>  
          )}  
        </article>

        <footer className="flex flex-col gap-5 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">  
          <Link  
            href="/legal"  
            className="text-xs uppercase tracking-[0.2em] text-[#C5A059] transition-colors hover:text-white"  
          >  
            ← Back to Legal Directory  
          </Link>

          <span className="text-xs text-white/40">  
            NexVoyage Collective © 2026  
          </span>  
        </footer>  
      </div>  
    </main>  
  );  
}
