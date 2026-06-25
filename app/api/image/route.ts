import { NextRequest, NextResponse } from 'next/server'  
import { get } from '@vercel/blob'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {  
  const { searchParams } = new URL(request.url)  
  const imageUrl = searchParams.get('url')

  if (!imageUrl) {  
    return new NextResponse('Missing url parameter', { status: 400 })  
  }

  try {  
    // Use SDK for private blobs, raw fetch for everything else  
    if (imageUrl.includes('.private.blob.vercel-storage.com')) {  
      const { stream, blob: metadata } = await get(imageUrl, {   
        access: 'private'   
      })  
        
      if (!stream) {  
        return new NextResponse('Blob not found', { status: 404 })  
      }

      // Convert stream to buffer  
      const reader = stream.getReader()  
      const chunks: Uint8Array[] = []  
      while (true) {  
        const { done, value } = await reader.read()  
        if (done) break  
        chunks.push(value)  
      }  
      const buffer = Buffer.concat(chunks)

      return new NextResponse(buffer, {  
        status: 200,  
        headers: {  
          'Content-Type': metadata.contentType || 'image/jpeg',  
          'Cache-Control': 'public, max-age=31536000, immutable',  
        },  
      })  
    }

    // Non-blob URLs: regular fetch  
    const response = await fetch(imageUrl)  
    if (!response.ok) {  
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
