import { NextResponse } from 'next/server'

export async function POST(request: Request) {  
  try {  
    const body = await request.json()  
    const {  
      name,  
      email,  
      phone,  
      occasion,  
      destinations,  
      travelWindow,  
      partySize,  
      aviationClass,  
      hearAbout,  
      notes,  
      source,  
    } = body

    // Generate Manifest ID  
    const manifestId = `NV-${Math.random().toString(36).substring(2, 7).toUpperCase()}`

    // Tag lead based on occasion  
    let leadTag = 'Standard'  
    if (occasion === 'Bespoke / Confidential') leadTag = 'Alpha'  
    else if (occasion === 'Corporate Strategy') leadTag = 'Corporate'  
    else if (occasion === 'Sabbatical / Extended Stay') leadTag = 'Extended'

    const manifest = `  
╔═══════════════════════════════════════╗  
║    TRAVELER MANIFEST — ${manifestId}     ║  
╠═══════════════════════════════════════╣  
║ Tag: ${leadTag.padEnd(39)}║  
║ Source: ${(source || 'Application for Entry').padEnd(35)}║  
╠═══════════════════════════════════════╣  
║  I — THE SOVEREIGN PROFILE            ║  
║  Name:  ${(name || '').padEnd(37)}║  
║  Email: ${(email || '').padEnd(37)}║  
║  Phone: ${(phone || '').padEnd(37)}║  
╠═══════════════════════════════════════╣  
║  II — MISSION PARAMETERS              ║  
║  Occasion:  ${(occasion || '').padEnd(33)}║  
║  Destinations: ${(destinations || '').padEnd(30)}║  
║  Travel Window: ${(travelWindow || '').padEnd(29)}║  
║  Party Size:  ${(partySize || '').padEnd(32)}║  
║  Aviation:    ${(aviationClass || '').padEnd(32)}║  
╠═══════════════════════════════════════╣  
║  III — CULTURAL FIT                   ║  
║  Heard via: ${(hearAbout || '').padEnd(32)}║  
║  Notes: ${((notes || '').substring(0, 32)).padEnd(37)}║  
╚═══════════════════════════════════════╝`

    console.log(manifest)

    // Try sending via Resend  
    let emailResult = null  
    try {  
      const { Resend } = await import('resend')  
      const resend = new Resend(process.env.RESEND_API_KEY)  
      emailResult = await resend.emails.send({  
        from: 'NexVoyage <onboarding@resend.dev>',  
        to: 'daryl.clark@fora.travel',  
        subject: `[MANIFEST ${manifestId}] New ${leadTag} Lead: ${name}`,  
        text: manifest,  
      })  
    } catch (emailErr) {  
      console.warn('Resend not configured or failed:', emailErr)  
    }

    return NextResponse.json({  
      success: true,  
      manifestId,  
      analysisStatus: 'COMPLETED',  
      emailSent: !!emailResult,  
    })  
  } catch (error) {  
    console.error('Lead processing error:', error)  
    return NextResponse.json(  
      { success: false, message: 'Failed to process lead' },  
      { status: 500 }  
    )  
  }  
}  
