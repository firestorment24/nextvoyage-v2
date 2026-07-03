import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {  
  const url = request.nextUrl.searchParams.get('url')  
  if (!url) {  
    return new NextResponse('Missing url parameter', { status: 400 })  
  }

  try {  
    const res = await fetch(decodeURIComponent(url), {  
      headers: process.env.BLOB_READ_WRITE_TOKEN  
        ? { Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}` }  
        : {},  
    })

    if (!res.ok) {  
      return new NextResponse('Image fetch failed', { status: res.status })  
    }

    const blob = await res.blob()  
    return new NextResponse(blob, {  
      headers: {  
        'Content-Type': blob.type || 'image/jpeg',  
        'Cache-Control': 'public, max-age=31536000, immutable',  
      },  
    })  
  } catch {  
    return new NextResponse('Internal server error', { status: 500 })  
  }  
}  
