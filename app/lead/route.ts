// app/api/lead/route.ts  
import { NextResponse } from 'next/server'

export async function POST(request: Request) {  
  try {  
    const body = await request.json()  
      
    // This is where we'll eventually hook into Rachel's brain   
    // or send an email alert to you.  
    console.log('NEW INQUIRY DOSSIER:', body)

    return NextResponse.json({   
      success: true,   
      message: 'Dossier initialized successfully'   
    })  
  } catch (error) {  
    return NextResponse.json(  
      { success: false, message: 'Failed to process lead' },  
      { status: 500 }  
    )  
  }  
}  
