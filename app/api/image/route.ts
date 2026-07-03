import { NextRequest, NextResponse } from 'next/server'  
import { get } from '@vercel/blob'

export async function GET(request: NextRequest) {  
  const url = request.nextUrl.searchParams.get('url')  
  if (!url) {  
    return new NextResponse('Missing url parameter', { status: 400 })  
  }

  // searchParams already decodes the URL — no extra decodeURIComponent  
  try {  
    const result = await get(url, { access: 'private' })

    if (!result || result.statusCode !== 200) {  
      return new NextResponse('Not found', { status: 404 })  
    }

    return new NextResponse(result.stream, {  
      headers: {  
        'Content-Type': result.blob.contentType,  
        'X-Content-Type-Options': 'nosniff',  
        'Cache-Control': 'public, max-age=31536000, immutable',  
      },  
    })  
  } catch {  
    return new NextResponse('Internal server error', { status: 500 })  
  }  
}  
