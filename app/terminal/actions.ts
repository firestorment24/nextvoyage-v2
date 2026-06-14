"use server";

import { sql } from "@vercel/postgres";  
import { revalidatePath } from "next/cache";

export async function commitToLedger(formData: FormData) {  
  const type = formData.get("type");  
  const password = formData.get("password");

  // Security Check  
  if (password !== process.env.ADMIN_PASSWORD) {  
    throw new Error("Unauthorized: Invalid Master Key");  
  }

  if (type === "sanctuary") {  
    const propertyId = formData.get("property_id") as string;  
    const name = formData.get("name") as string;  
    const location = formData.get("location") as string;  
    const image_url = formData.get("image_url") as string;  
    const description = formData.get("description") as string;  
    const highlight = formData.get("highlight") as string;  
    const specs = formData.get("specs") as string; // Expecting JSON string

    await sql`  
      INSERT INTO sanctuaries (property_id, name, location, image_url, description, highlight, specs)  
      VALUES (${propertyId}, ${name}, ${location}, ${image_url}, ${description}, ${highlight}, ${specs})  
      ON CONFLICT (property_id) DO UPDATE SET  
        name = EXCLUDED.name,  
        location = EXCLUDED.location,  
        image_url = EXCLUDED.image_url,  
        description = EXCLUDED.description,  
        highlight = EXCLUDED.highlight,  
        specs = EXCLUDED.specs;  
    `;  
    revalidatePath("/archive");  
  }

  if (type === "journal") {  
    const title = formData.get("title") as string;  
    const slug = formData.get("slug") as string;  
    const content = formData.get("content") as string;  
    const thumbnail = formData.get("thumbnail") as string;

    await sql`  
      INSERT INTO journal (title, slug, content, thumbnail_url)  
      VALUES (${title}, ${slug}, ${content}, ${thumbnail})  
      ON CONFLICT (slug) DO UPDATE SET  
        title = EXCLUDED.title,  
        content = EXCLUDED.content,  
        thumbnail_url = EXCLUDED.thumbnail_url;  
    `;  
    revalidatePath("/journal");  
  }

  return { success: true };  
}  
