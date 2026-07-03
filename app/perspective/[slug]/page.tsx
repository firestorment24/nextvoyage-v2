import { createClient } from "@supabase/supabase-js";  
import { notFound } from "next/navigation";  
import Link from "next/link";  
import Navigation from "@/components/Navigation";  
import Footer from "@/components/Footer";

const supabase = createClient(  
  process.env.NEXT_PUBLIC_SUPABASE_URL!,  
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!  
);

export const revalidate = 0;

export default async function PerspectiveArticle({  
  params,  
}: {  
  params: Promise<{ slug: string }>;  
}) {  
  const { slug } = await params;

  const { data: article, error } = await supabase  
    .from("perspectives")  
    .select("*")  
    .or(`slug.eq.${slug},id.eq.${slug}`)  
    .single();

  if (!article || error) {  
    notFound();  
  }

  const paragraphs = article.content  
    ? article.content.split("\n").filter((p: string) => p.trim().length > 0)  
    : [];

  const tags = article.tags  
    ? article.tags.split(",").map((t: string) => t.trim())  
    : [];

  return (  
    <main className="min-h-screen bg-[#0A0A0A]">  
      <Navigation />

      {/* Hero Section */}  
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">  
        <img  
          src={article.image_url || "/placeholder.jpg"}  
          alt={article.title}  
          className="w-full h-full object-cover"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />  
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-5xl mx-auto">  
          <div className="flex items-center gap-4 mb-4">  
            {article.category && (  
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light">  
                {article.category}  
              </span>  
            )}  
            {article.publish_date && (  
              <span className="text-white/40 text-xs uppercase tracking-[0.2em] font-light">  
                {new Date(article.publish_date).toLocaleDateString("en-US", {  
                  year: "numeric",  
                  month: "long",  
                  day: "numeric",  
                })}  
              </span>  
            )}  
          </div>  
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight max-w-3xl">  
            {article.title}  
          </h1>  
          {article.author && (  
            <p className="text-white/50 text-sm uppercase tracking-[0.2em] mt-4 font-light">  
              By {article.author}  
            </p>  
          )}  
        </div>  
      </section>

      {/* Tags Bar */}  
      {tags.length > 0 && (  
        <section className="border-b border-white/5">  
          <div className="max-w-3xl mx-auto px-8 py-4 flex flex-wrap gap-3">  
            {tags.map((tag: string, i: number) => (  
              <span  
                key={i}  
                className="text-[#D4AF37]/70 text-xs uppercase tracking-[0.25em] font-light border border-[#D4AF37]/20 px-4 py-1.5"  
              >  
                {tag}  
              </span>  
            ))}  
          </div>  
        </section>  
      )}

      {/* Article Body */}  
      <article className="max-w-3xl mx-auto px-8 py-12 md:py-20">  
        <div className="space-y-6 md:space-y-8">  
          {paragraphs.map((paragraph: string, i: number) => (  
            <p  
              key={i}  
              className="text-white/70 text-base md:text-lg leading-[1.9] font-light tracking-wide"  
            >  
              {paragraph}  
            </p>  
          ))}  
        </div>

        {/* Divider */}  
        <div className="w-12 h-px bg-[#D4AF37]/30 mx-auto my-16" />

        {/* CTA */}  
        <div className="text-center">  
          <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-6 font-light">  
            Ready to experience the perspective?  
          </p>  
          <Link  
            href="/inquiry"  
            className="inline-block border border-[#D4AF37] text-[#D4AF37] px-10 py-3 text-sm uppercase tracking-[0.3em] font-light hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-500"  
          >  
            Begin Your Inquiry  
          </Link>  
        </div>  
      </article>

      {/* Back Link */}  
      <div className="max-w-3xl mx-auto px-8 pb-12">  
        <Link  
          href="/perspective"  
          className="text-white/30 hover:text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light transition-colors duration-300"  
        >  
          ← Back to Perspective  
        </Link>  
      </div>

      <Footer />  
    </main>  
  );  
}  
