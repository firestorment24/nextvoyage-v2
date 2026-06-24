import { NextRequest, NextResponse } from 'next/server';  
import { sql } from '@vercel/postgres';

export async function PATCH(  
  req: NextRequest,  
  { params }: { params: Promise<{ id: string }> }  
) {  
  try {  
    const { id: idStr } = await params;  
    const id = parseInt(idStr);  
    const body = await req.json();  
    const { status, notes } = body;

    const setClauses: string[] = [];  
    const values: any[] = [];  
    let paramIndex = 1;

    if (status !== undefined) {  
      setClauses.push(`status = $${paramIndex++}`);  
      values.push(status);  
    }  
    if (notes !== undefined) {  
      setClauses.push(`notes = $${paramIndex++}`);  
      values.push(notes);  
    }

    if (setClauses.length === 0) {  
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 });  
    }

    setClauses.push(`updated_at = NOW()`);  
    values.push(id);

    const query = `  
      UPDATE dossiers  
      SET ${setClauses.join(', ')}  
      WHERE id = $${paramIndex}  
      RETURNING *  
    `;

    const { rows } = await sql.query(query, values);

    if (rows.length === 0) {  
      return NextResponse.json({ error: 'Dossier not found' }, { status: 404 });  
    }

    return NextResponse.json({ dossier: rows[0] }, { status: 200 });  
  } catch (error) {  
    console.error('[ADMIN] Error updating dossier:', error);  
    return NextResponse.json({ error: 'Failed to update dossier' }, { status: 500 });  
  }  
}

export async function DELETE(  
  req: NextRequest,  
  { params }: { params: Promise<{ id: string }> }  
) {  
  try {  
    const { id: idStr } = await params;  
    const id = parseInt(idStr);

    const { rowCount } = await sql.query('DELETE FROM dossiers WHERE id = $1', [id]);

    if (rowCount === 0) {  
      return NextResponse.json({ error: 'Dossier not found' }, { status: 404 });  
    }

    return NextResponse.json({ success: true }, { status: 200 });  
  } catch (error) {  
    console.error('[ADMIN] Error deleting dossier:', error);  
    return NextResponse.json({ error: 'Failed to delete dossier' }, { status: 500 });  
  }  
}  
