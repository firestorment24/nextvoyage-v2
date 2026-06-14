"use server";

import { sql } from "@vercel/postgres";  
import { revalidatePath } from "next/cache";

export async function commitToLedger(formData: FormData): Promise<void> {  
  const password = formData.get("admin_password") as string;  
  const tableType = formData.get("table_type") as string;

  // 1. Security Check  
  if (password !== process.env.ADMIN_PASSWORD) {  
    console.error("Unauthorized access attempt.");  
    return;  
  }

  try {  
    if (tableType === "archive") {  
      const name = formData.get("name") as string;  
      const location = formData.get("location") as string;  
      const description = formData.get("description") as string;  
      const specs = formData.get("specs") as string;

      await sql`  
        INSERT INTO sanctuaries (name, location, description, specs)  
        VALUES (${name}, ${location}, ${description}, ${specs})  
      `;  
    }   
      
    else if (tableType === "perspective") {  
      const title = formData.get("title") as string;  
      const content = formData.get("content") as string;

      await sql`  
        INSERT INTO perspectives (title, content, created_at)  
        VALUES (${title}, ${content}, NOW())  
      `;  
    }   
      
    else if (tableType === "journal") {  
      const title = formData.get("title") as string;  
      const content = formData.get("content") as string;

      await sql`  
        INSERT INTO journal (title, content, created_at)  
        VALUES (${title}, ${content}, NOW())  
      `;  
    }

    // Refresh the site so the new data shows up immediately  
    revalidatePath("/archive");  
    revalidatePath("/perspective");  
    revalidatePath("/journal");  
      
    // We return nothing to satisfy the TypeScript 'void' requirement  
    return;

  } catch (error) {  
    console.error("Database Error:", error);  
    throw new Error("Failed to commit to ledger.");  
  }  
}  
