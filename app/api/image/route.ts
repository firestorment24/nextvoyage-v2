import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {  
  const url = request.nextUrl.searchParams.get('url')

  if (!url) {  
    return new NextResponse('Missing url parameter', { status: 400 })  
  }

  try {  
    const response = await fetch(url)

    if (!response.ok) {  
      return new NextResponse('Failed to fetch image', { status: response.status })  
    }

    const headers = new Headers()  
    headers.set('Content-Type', response.headers.get('Content-Type') || 'image/jpeg')  
    headers.set('Cache-Control', 'public, max-age=31536000, immutable')

    return new NextResponse(response.body, { headers, status: 200 })  
  } catch {  
    return new NextResponse('Failed to fetch image', { status: 500 })  
  }  
}  
