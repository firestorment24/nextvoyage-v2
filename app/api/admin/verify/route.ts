import { NextRequest } from 'next/server'
2
3 interface VerifyRequest {
4 password?: string
5 }
6
7 export async function POST(request: NextRequest) {
8 const { password } = (await request.json()) as VerifyRequest
9
10 if (password && password === process.env.ADMIN_PASSWORD) {
11 return Response.json({ success: true })
12 }
13
14 return Response.json(
15 { success: false, error: 'Invalid password' },
16 { status: 401 },
17 )
18 }
