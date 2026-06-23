import { NextRequest, NextResponse } from 'next/server';  
import { neon } from '@neondatabase/serverless';

export async function PATCH(  
  request: NextRequest,  
  { params }: { params: { id: string } }  
) {  
  try {  
    const sql = neon(process.env.DATABASE_URL!);  
    const { status } = await request.json();

    const validStatuses = ['New', 'Contacted', 'In Discussion', 'Accepted', 'Declined'];  
    if (!validStatuses.includes(status)) {  
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });  
    }

    const result = await sql`  
      UPDATE dossiers  
      SET status = ${status}, updated_at = NOW()  
      WHERE id = ${params.id}  
      RETURNING id, status  
    `;

    if (result.length === 0) {  
      return NextResponse.json({ error: 'Dossier not found' }, { status: 404 });  
    }

    return NextResponse.json({ dossier: result[0] });  
  } catch (error) {  
    console.error('Error updating dossier status:', error);  
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });  
  }  
}  
