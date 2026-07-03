import { sql } from '@vercel/postgres'

export interface PerspectiveArticle {  
  id: string  
  slug: string  
  title: string  
  excerpt: string | null  
  category: string | null  
  image_url: string | null  
  author: string | null  
  date: string | null  
  read_time: number | null  
  body: string | null  
  published_at: string | null  
  tags: string | null  
}
 
export async function getArticles(): Promise<PerspectiveArticle[]> {  
  const { rows } = await sql`  
    SELECT id, slug, title, excerpt, category, image_url, author,   
           published_at AS date, read_time, body, tags  
    FROM perspective_articles  
    ORDER BY published_at DESC NULLS LAST, created_at DESC  
  `  
  return rows as unknown as PerspectiveArticle[]  
}

export async function getArticleBySlug(slug: string): Promise<PerspectiveArticle | null> {  
  const { rows } = await sql`  
    SELECT id, slug, title, excerpt, category, image_url, author,   
           published_at AS date, read_time, body, tags  
    FROM perspective_articles  
    WHERE slug = ${slug}  
    LIMIT 1  
  `  
  return (rows[0] as unknown as PerspectiveArticle) ?? null  
}  
