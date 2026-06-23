import { NextResponse } from "next/server"

export async function POST(request: Request) {  
try {  
  const body = await request.json()  
  const { name, email, phone, occasion, destinations, travelWindow, partySize, aviationClass, hearAbout, notes, turnstileToken } = body

  // --- Turnstile server-side verification ---  
  if (turnstileToken) {  
    const verifRes = await fetch(  
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",  
      {  
        method: "POST",  
        headers: { "Content-Type": "application/json" },  
        body: JSON.stringify({  
          secret: process.env.TURNSTILE_SECRET_KEY,  
          response: turnstileToken,  
        }),  
      }  
    )   
    const verifData = await verifRes.json()  
    if (!verifData.success) {  
      return NextResponse.json(  
        { success: false, error: "Verification failed. Please try again." },  
        { status: 403 }  
      )  
    }  
  } else {  
    return NextResponse.json(  
      { success: false, error: "Verification required." },  
      { status: 403 }  
    )  
  }

  // --- Non-blocking DB insert (won't block the response) ---  
  let dossierId: string | null = null

  ;(async () => {  
    try {  
      const { sql } = await import("@vercel/postgres")  
      const result = await sql`  
        INSERT INTO dossiers (name, email, phone, occasion, destinations, travel_dates, party_size, aviation_class, hear_about, notes, source, status)  
        VALUES (${name}, ${email}, ${phone}, ${occasion}, ${destinations}, ${travelWindow}, ${partySize || 0}, ${aviationClass || null}, ${hearAbout || null}, ${notes || null}, 'Application for Entry', 'New')  
        RETURNING id  
      `  
      dossierId = result.rows[0]?.id || null  
    } catch (dbError) {  
      console.error("DB insert error (non-blocking):", dbError)  
    }  
  })()

  // --- Send alert email to Daryl ---  
  const { Resend } = await import("resend")  
  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({  
    from: "NexVoyage Collective <onboarding@resend.dev>",  
    to: "daryl.clark@fora.travel",  
    subject: `New Dossier: ${name} — ${occasion}`,  
    html: `  
      <h2>New Sojourn Dossier</h2>  
      <p><strong>Name:</strong> ${name}</p>  
      <p><strong>Email:</strong> ${email}</p>  
      <p><strong>Phone:</strong> ${phone}</p>  
      <p><strong>Intent:</strong> ${occasion}</p>  
      <p><strong>Destinations:</strong> ${destinations}</p>  
      <p><strong>Timeline:</strong> ${travelWindow}</p>  
      <p><strong>Party Size:</strong> ${partySize}</p>  
      <p><strong>Dossier ID:</strong> ${dossierId || 'pending'}</p>  
      <hr />  
      <p><em>Rachel — Reception & Orchestration • NexVoyage Collective</em></p>  
    `,  
  })

  // --- Auto-reply to guest ---  
  await resend.emails.send({  
    from: "NexVoyage Collective <onboarding@resend.dev>",  
    to: email,  
    subject: "Your Application for Entry — NexVoyage Collective",  
    html: `  
      <h1>Application Received</h1>  
      <p><em>Dialogue Initiated.</em></p>  
      <p>Thank you, ${name}. Your Sojourn Dossier has been received and is being reviewed by our concierge team.</p>  
      <p>A member of our team will reach out within 24 hours to begin crafting your itinerary.</p>  
      <hr />  
      <p><em>Rachel — Reception & Orchestration • NexVoyage Collective</em></p>  
    `,  
  })

  // --- Slack notification ---  
  if (process.env.SLACK_WEBHOOK_URL) {  
    await fetch(process.env.SLACK_WEBHOOK_URL, {  
      method: "POST",  
      headers: { "Content-Type": "application/json" },  
      body: JSON.stringify({  
        text: `*New Dossier: ${name}*\n• Intent: ${occasion}\n• Email: ${email}\n• Phone: ${phone}\n• Destinations: ${destinations}\n• Source: Application for Entry`,  
      }),  
    })  
  }

  return NextResponse.json({  
    success: true,  
    dossierId,  
    status: "New",  
  })  
} catch (error: any) {  
  console.error("Lead API error:", error)  
  return NextResponse.json({ success: false, error: error.message }, { status: 500 })  
}  
}  
