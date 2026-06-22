import { NextRequest } from 'next/server'
import { sql } from '@vercel/postgres'

export async function GET() {
  try {
    const { rows } = await sql`SELECT * FROM dossiers ORDER BY created_at DESC`
    return Response.json({ dossiers: rows })
  } catch (error) {
    console.error('Failed to fetch dossiers:', error)
    return Response.json({ dossiers: [] })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, destination, travel_dates, budget_range, notes } = body

    const { rows } = await sql`
      INSERT INTO dossiers (name, email, phone, destination, travel_dates, budget_range, notes)
      VALUES (${name}, ${email}, ${phone || null}, ${destination || null}, ${travel_dates || null}, ${budget_range || null}, ${notes || null})
      RETURNING *
    `

    return Response.json({ dossier: rows[0] }, { status: 201 })
  } catch (error) {
    console.error('Failed to create dossier:', error)
    return Response.json({ error: 'Failed to create dossier' }, { status: 500 })
  }
}
