import { NextRequest, NextResponse } from 'next/server';  
import { neon } from '@neondatabase/serverless';

export async function PATCH(  
  request: NextRequest,  
  { params }: { params: Promise<{ id: string }> }  
) {  
  try {  
    const sql = neon(process.env.DATABASE_URL!);  
    const { id } = await params;  
    const body = await request.json();

    const setClauses: string[] = [];  
    const values: any[] = [];

    if (body.status !== undefined) {  
      const validStatuses = ['New', 'Contacted', 'In Discussion', 'Accepted', 'Declined'];  
      if (!validStatuses.includes(body.status)) {  
        return NextResponse.json({ error: 'Invalid status' }, { status: 400 });  
      }  
      setClauses.push(`status = $${values.length + 1}`);  
      values.push(body.status);  
    }

    if (body.notes !== undefined) {  
      setClauses.push(`notes = $${values.length + 1}`);  
      values.push(body.notes);  
    }

    if (setClauses.length === 0) {  
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 });  
    }

    setClauses.push(`updated_at = NOW()`);  
    values.push(id);

    const query = `  
      UPDATE dossiers  
      SET ${setClauses.join(', ')}  
      WHERE id = $${values.length}  
      RETURNING id, status, notes  
    `;

    const result = await sql(query, values);

    if (result.length === 0) {  
      return NextResponse.json({ error: 'Dossier not found' }, { status: 404 });  
    }

    return NextResponse.json({ dossier: result[0] });  
  } catch (error) {  
    console.error('Error updating dossier:', error);  
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });  
  }  
}  
