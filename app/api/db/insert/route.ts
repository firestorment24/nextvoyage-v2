import { sql } from '@vercel/postgres';  
import { NextResponse } from 'next/server';

export async function POST(request: Request) {  
  try {  
    const { table, data } = await request.json();

    if (table === 'perspective') {  
      const { title, slug, category, image_url, content, author } = data;  
        
      // We use COALESCE or default values to ensure the DB doesn't reject the insert  
      await sql`  
        INSERT INTO perspectives (title, slug, category, image_url, content, author, publish_date)  
        VALUES (  
          ${title},   
          ${slug},   
          ${category || 'Editorial'},   
          ${image_url || ''},   
          ${content},   
          ${author || 'NexVoyage Collective'},  
          CURRENT_DATE  
        )  
      `;  
    }   
      
    // Logic for other tables (Archive/Journal) can go here...  
    else if (table === 'archive') {  
      const { title, location, description, image_url, price } = data;  
      await sql`  
        INSERT INTO sanctuaries (title, location, description, image_url, price)  
        VALUES (${title}, ${location}, ${description}, ${image_url}, ${price})  
      `;  
    }

    return NextResponse.json({ success: true });  
  } catch (error) {  
    console.error('Database Error:', error);  
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });  
  }  
}  
