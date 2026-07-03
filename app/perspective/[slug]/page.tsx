import { sql } from "@vercel/postgres";  
import { notFound } from "next/navigation";

export const revalidate = 0;

export default async function ArticlePage({  
  params,  
}: {  
  params: Promise<{ slug: string }>;  
}) {  
  const resolvedParams = await params;  
  const slug = resolvedParams?.slug;

  if (!slug) notFound();

  let article: any = null;

  try {  
    const { rows } = await sql`  
      SELECT * FROM perspective_articles  
      WHERE slug = ${slug}  
      LIMIT 1  
    `;  
    article = rows[0] || null;  
  } catch (e) {  
    console.error("Failed to fetch article:", e);  
  }

  if (!article) notFound();

  return (  
    <article className="min-h-screen bg-black text-white px-6 py-20 md:px-20 max-w-3xl mx-auto">  
      <a href="/perspective" className="text-zinc-500 hover:text-amber-400 text-sm mb-8 inline-block">  
        ← Back to Perspective  
      </a>

      <span className="text-xs uppercase tracking-widest text-amber-500">  
        {article.category || "Uncategorized"}  
      </span>

      <h1 className="text-4xl md:text-5xl font-light mt-2 mb-4">{article.title}</h1>

      <div className="flex items-center gap-4 text-sm text-zinc-500 mb-10">  
        <span>{article.author}</span>  
        <span>·</span>  
        <span>  
          {article.published_at  
            ? new Date(article.published_at).toLocaleDateString("en-US", {  
                year: "numeric",  
                month: "long",  
                day: "numeric",  
              })  
            : ""}  
        </span>  
      </div>

      {article.image_url && (  
        <div  
          className="w-full h-72 md:h-96 rounded-xl mb-10 bg-cover bg-center"  
          style={{ backgroundImage: `url(${article.image_url})` }}  
        />  
      )}

      <div  
        className="prose prose-invert prose-amber max-w-none leading-relaxed"  
        dangerouslySetInnerHTML={{ __html: article.content }}  
      />  
    </article>  
  );  
}  
