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
    // If it's a Vercel Blob URL, use the SDK's get() method  
    if (imageUrl.includes('.blob.vercel-storage.com')) {  
      const blob = await get(imageUrl, { access: 'private' })  
        
      if (!blob) {  
        return new NextResponse('Image not found', { status: 404 })  
      }

      // Convert the blob stream to a buffer  
      const buffer = Buffer.from(await new Response(blob).arrayBuffer())

      return new NextResponse(buffer, {  
        status: 200,  
        headers: {  
          'Content-Type': blob.contentType || 'image/jpeg',  
          'Cache-Control': 'public, max-age=31536000, immutable',  
        },  
      })  
    }

    // For non-blob URLs (like Unsplash), keep the existing fetch logic  
    const response = await fetch(imageUrl)  
    if (!response.ok) throw new Error('Failed to fetch image')  
      
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
