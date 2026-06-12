import { NextResponse } from 'next/server'  
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {  
try {  
  const body = await request.json()  
  const { name, email, occasion, timing, budget, objectives } = body  
  const manifestID = `NV-${Math.floor(Math.random() * 10000)}`

  // Rachel's Analysis Logic  
  const analysis = {  
    coreTension: objectives?.length > 50 ? "Complex Strategic Reset" : "Standard Logistics",  
    priority: budget?.toLowerCase().includes('50k') || budget?.toLowerCase().includes('100k') ? 'ALPHA' : 'STANDARD',  
    recommendedFocus: objectives?.toLowerCase().includes('family') ? 'Multi-Generational Nodes' : 'Solitude/Deep Work',  
  }

  // 1. Send the Strategic Manifest to YOU (Daryl)  
  await resend.emails.send({  
    from: 'Rachel AI <rachel@nexvoyage.com>',  
    to: 'daryl.clark@fora.travel',  
    subject: `[MANIFEST ${manifestID}] New Alpha Lead: ${name}`,  
    html: `  
      <div style="font-family: serif; background: #0D0D0D; color: #E2E0D5; padding: 40px;">  
        <h1 style="text-transform: uppercase; letter-spacing: 0.2em; border-bottom: 1px solid rgba(226,224,213,0.1); padding-bottom: 20px;">Strategic Manifest</h1>  
        <p><strong>ID:</strong> ${manifestID}</p>  
        <p><strong>Client:</strong> ${name} (${email})</p>  
        <p><strong>Occasion:</strong> ${occasion}</p>  
        <p><strong>Timing:</strong> ${timing}</p>  
        <hr style="border: 0; border-top: 1px solid rgba(226,224,213,0.1); margin: 20px 0;" />  
        <h2 style="font-style: italic;">Rachel's Analysis:</h2>  
        <p><strong>Priority:</strong> ${analysis.priority}</p>  
        <p><strong>Tension:</strong> ${analysis.coreTension}</p>  
        <p><strong>Strategic Focus:</strong> ${analysis.recommendedFocus}</p>  
        <p><strong>Raw Intent:</strong> ${objectives}</p>  
      </div>  
    `  
  })

  // 2. Send the "Acknowledge Strategic Intent" to the Traveler  
  await resend.emails.send({  
    from: 'Rachel AI <rachel@nexvoyage.com>',  
    to: email,  
    subject: `[Manifest ${manifestID}] Strategic Analysis Initialized`,  
    html: `  
      <div style="font-family: serif; color: #1a1a1a; padding: 40px; max-width: 600px;">  
        <p>I have received your inquiry regarding <strong>${occasion}</strong>.</p>  
        <p>My analysis is currently focused on the tension between your current landscape and the objectives you’ve described. I am architecting a roadmap to bridge that gap.</p>  
        <p>While I finalize your formal dossier, your priority access to Daryl Clark’s discovery calendar is now active.</p>  
        <p style="margin-top: 40px;">Regards,</p>  
        <p><strong>Rachel</strong><br/>Lead Analyst, NexVoyage Collective</p>  
      </div>  
    `  
  })

  return NextResponse.json({ success: true, manifestID })

} catch (error) {  
  console.error("Rachel's Analysis Interrupted:", error)  
  return NextResponse.json({ success: false, error: 'Analysis Interrupted' }, { status: 500 })  
}  
}  
