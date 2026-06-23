import { NextResponse } from 'next/server';

export async function GET() {  
  try {  
    const { sql } = await import('@vercel/postgres');  
    const { rows } = await sql`  
      SELECT * FROM dossiers ORDER BY created_at DESC  
    `;  
    return NextResponse.json({ dossiers: rows }, { status: 200 });  
  } catch (error: any) {  
    console.error('[ADMIN] Error fetching dossiers:', error);  
    return NextResponse.json(  
      { error: error.message || 'Failed to fetch dossiers' },  
      { status: 500 }  
    );  
  }  
}  
