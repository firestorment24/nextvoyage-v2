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

    // Build SET clauses dynamically based on what's provided  
    const updates: string[] = [];  
    const values: any[] = [];  
    let paramIndex = 1;

    if (body.status !== undefined) {  
      const validStatuses = ['New', 'Contacted', 'In Discussion', 'Accepted', 'Declined'];  
      if (!validStatuses.includes(body.status)) {  
        return NextResponse.json({ error: 'Invalid status' }, { status: 400 });  
      }  
      updates.push(`status = $${paramIndex++}`);  
      values.push(body.status);  
    }

    if (body.notes !== undefined) {  
      updates.push(`notes = $${paramIndex++}`);  
      values.push(body.notes);  
    }

    if (updates.length === 0) {  
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 });  
    }

    updates.push(`updated_at = NOW()`);  
    values.push(id);

    const result = await sql`  
      UPDATE dossiers  
      SET ${sql(updates.join(', '))}  
      WHERE id = ${id}  
      RETURNING id, status, notes  
    `;

    if (result.length === 0) {  
      return NextResponse.json({ error: 'Dossier not found' }, { status: 404 });  
    }

    return NextResponse.json({ dossier: result[0] });  
  } catch (error) {  
    console.error('Error updating dossier:', error);  
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });  
  }  
}  
