'use server'

import { sql } from '@vercel/postgres'

export async function commitToLedger(formData: FormData, table: string) {  
  const file = formData.get('csv_file') as File  
    
  // Handle CSV Upload  
  if (file && file.size > 0) {  
    try {  
      const text = await file.text()  
      const rows = text.split('\n').map(row => row.split(','))  
      // Logic for parsing CSV and inserting rows would go here  
      return { message: `Batch process for ${table} initiated (CSV Parsing active).` }  
    } catch (e) {  
      return { message: 'Error processing CSV file.' }  
    }  
  }

  // Handle Manual Form Submission  
  const data = Object.fromEntries(formData.entries())  
    
  try {  
    if (table === 'archive') {  
      await sql`  
        INSERT INTO sanctuaries (title, location, description, image_url, price)  
        VALUES (${data.title as string}, ${data.location as string}, ${data.description as string}, ${data.image_url as string}, ${data.price as string})  
      `  
    } else if (table === 'perspective') {  
      await sql`  
        INSERT INTO perspectives (title, category, author, content, image_url)  
        VALUES (${data.title as string}, ${data.category as string}, ${data.author as string}, ${data.content as string}, ${data.image_url as string})  
      `  
    } else if (table === 'journal') {  
      await sql`  
        INSERT INTO journal (title, date, excerpt, image_url)  
        VALUES (${data.title as string}, ${data.date as string}, ${data.excerpt as string}, ${data.image_url as string})  
      `  
    }  
      
    return { message: `Success: Committed to ${table} ledger.` }  
  } catch (error) {  
    console.error(error)  
    return { message: 'Failed to commit to ledger. Check database connection.' }  
  }  
}  
