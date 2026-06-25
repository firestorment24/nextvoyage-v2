import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {  
  const { searchParams } = new URL(request.url)  
  const imageUrl = searchParams.get('url')

  if (!imageUrl) {  
    return new NextResponse('Missing url parameter', { status: 400 })  
  }

  try {  
    const headers: HeadersInit = {}  
      
    // Explicitly add the token for private blob storage URLs  
    if (imageUrl.includes('.private.blob.vercel-storage.com')) {  
      if (process.env.BLOB_READ_WRITE_TOKEN) {  
        headers['Authorization'] = `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`  
      } else {  
        console.error('BLOB_READ_WRITE_TOKEN is missing in environment variables')  
      }  
    }

    const response = await fetch(imageUrl, { headers })

    if (!response.ok) {  
      // Log the full response for debugging if it fails  
      const errorText = await response.text()  
      console.error(`Blob fetch failed: ${response.status} - ${errorText}`)  
      return new NextResponse(`Failed to fetch image: ${response.statusText}`, {  
        status: response.status,  
      })  
    }

    const buffer = Buffer.from(await response.arrayBuffer())

    return new NextResponse(buffer, {  
      status: 200,  
      headers: {  
        'Content-Type': response.headers.get('content-type') || 'image/jpeg',  
        'Cache-Control': 'public, max-age=31536000, immutable',  
      },  
    })  
  } catch (error) {  
    console.error('Image proxy error:', error)  
    return new NextResponse('Internal server error', { status: 500 })  
  }  
}  
