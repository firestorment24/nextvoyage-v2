import { NextRequest } from 'next/server'

interface VerifyRequest {
  password?: string
}

export async function POST(request: NextRequest) {
  const body: VerifyRequest = await request.json()

  if (body.password === process.env.ADMIN_PASSWORD) {
    return Response.json({ success: true })
  }

  return Response.json(
    { success: false, error: 'Invalid password' },
    { status: 401 }
  )
}
