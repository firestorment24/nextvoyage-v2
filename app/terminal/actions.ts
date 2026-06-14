'use server'

import { sql } from '@vercel/postgres'

export async function commitToLedger(formData: FormData, table: string) {  
  const file = formData.get('csv_file') as File

  // --- BATCH CSV PROCESSOR ---  
  if (file && file.size > 0) {  
    try {  
      const text = await file.text()  
      // Split by lines and filter out empty rows  
      const rows = text.split('\n').map(row => row.split(',')).filter(row => row.length > 1)  
        
      // Assume the first row is headers and skip it  
      const dataRows = rows.slice(1)  
      let count = 0

      for (const row of dataRows) {  
        // Trim each cell to remove whitespace/newlines  
        const cleanRow = row.map(cell => cell.trim())

        if (table === 'archive') {  
          // Schema: title, location, description, image_url, price  
          await sql`  
            INSERT INTO sanctuaries (title, location, description, image_url, price)  
            VALUES (${cleanRow[0]}, ${cleanRow[1]}, ${cleanRow[2]}, ${cleanRow[3]}, ${cleanRow[4]})  
          `  
        } else if (table === 'perspective') {  
          // Schema: title, category, author, content, image_url  
          await sql`  
            INSERT INTO perspectives (title, category, author, content, image_url)  
            VALUES (${cleanRow[0]}, ${cleanRow[1]}, ${cleanRow[2]}, ${cleanRow[3]}, ${cleanRow[4]})  
          `  
        } else if (table === 'journal') {  
          // Schema: title, date, excerpt, image_url  
          await sql`  
            INSERT INTO journal (title, date, excerpt, image_url)  
            VALUES (${cleanRow[0]}, ${cleanRow[1]}, ${cleanRow[2]}, ${cleanRow[3]})  
          `  
        }  
        count++  
      }

      return { message: `Batch Success: ${count} records committed to the ${table} ledger.` }  
    } catch (e) {  
      console.error(e)  
      return { message: 'Error: CSV format mismatch or database rejection.' }  
    }  
  }

  // --- MANUAL ENTRY PROCESSOR ---  
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

    return { message: `Success: Manual entry committed to ${table} ledger.` }  
  } catch (error) {  
    console.error(error)  
    return { message: 'Failed to commit to ledger. Check database connection.' }  
  }  
}  
