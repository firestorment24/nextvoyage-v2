'use server'

import { sql } from '@vercel/postgres'  
import { revalidatePath } from 'next/cache'

export async function commitToLedger(formData: FormData, activeTab: string) {  
  const password = formData.get('password') as string  
    
  // Authentication check  
  if (password !== 'NV2026') {  
    throw new Error('Authentication failed: Invalid registry key.')  
  }

  try {  
    if (activeTab === 'archive') {  
      const name = formData.get('name') as string  
      const location = formData.get('location') as string  
      const description = formData.get('description') as string  
      const imageUrl = formData.get('image_url') as string  
      const slug = formData.get('slug') as string  
      const price = formData.get('price') as string

      await sql`  
        INSERT INTO sanctuaries (name, location, description, image_url, slug, price)  
        VALUES (${name}, ${location}, ${description}, ${imageUrl}, ${slug}, ${price})  
      `  
      revalidatePath('/archive')  
    }   
      
    else if (activeTab === 'perspective') {  
      const title = formData.get('title') as string  
      const author = formData.get('author') as string  
      const date = formData.get('date') as string  
      const content = formData.get('content') as string  
      const slug = formData.get('slug') as string  
      const imageUrl = formData.get('image_url') as string

      await sql`  
        INSERT INTO perspectives (title, author, date, content, slug, image_url)  
        VALUES (${title}, ${author}, ${date}, ${content}, ${slug}, ${imageUrl})  
      `  
      revalidatePath('/perspective')  
    }   
      
    else if (activeTab === 'journal') {  
      const title = formData.get('title') as string  
      const author = formData.get('author') as string  
      const date = formData.get('date') as string  
      const content = formData.get('content') as string  
      const imageUrl = formData.get('image_url') as string  
      const slug = formData.get('slug') as string

      await sql`  
        INSERT INTO journal (title, author, publish_date, content, thumbnail_url, slug)  
        VALUES (${title}, ${author}, ${date}, ${content}, ${imageUrl}, ${slug})  
      `  
      revalidatePath('/journal')  
    }

    return { success: true }  
  } catch (error: any) {  
    console.error('Database Error:', error)  
    throw new Error(error.message || 'Failed to commit record to ledger.')  
  }  
}  
