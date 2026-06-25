// app/api/image/route.ts  
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {  
  const { searchParams } = new URL(request.url)  
  const imageUrl = searchParams.get('url')

  if (!imageUrl) {  
    return new NextResponse('Missing url parameter', { status: 400 })  
  }

  try {  
    const response = await fetch(imageUrl, {  
      headers: {  
        // Forward any auth/cookie headers if your Blob store needs them  
        ...(process.env.BLOB_READ_WRITE_TOKEN  
          ? { Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}` }  
          : {}),  
      },  
    })

    if (!response.ok) {  
      return new NextResponse(`Failed to fetch image: ${response.statusText}`, {  
        status: response.status,  
      })  
    }

    const contentType =  
      response.headers.get('content-type') || 'image/jpeg'  
    const buffer = Buffer.from(await response.arrayBuffer())

    return new NextResponse(buffer, {  
      status: 200,  
      headers: {  
        'Content-Type': contentType,  
        'Cache-Control': 'public, max-age=31536000, immutable',  
        'Content-Length': buffer.length.toString(),  
      },  
    })  
  } catch (error) {  
    console.error('Image proxy error:', error)  
    return new NextResponse('Internal server error', { status: 500 })  
  }  
}  
