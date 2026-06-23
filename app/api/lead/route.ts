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

// --- Insert into DB ---  
const { createClient } = await import("@supabase/supabase-js")  
const supabase = createClient(  
process.env.NEXT_PUBLIC_SUPABASE_URL!,  
process.env.SUPABASE_SERVICE_ROLE_KEY!  
)

const { data, error } = await supabase  
.from("dossiers")  
.insert({  
name,  
email,  
phone,  
occasion,  
destinations,  
travel_dates: travelWindow,  
party_size: partySize || 0,  
aviation_class: aviationClass || null,  
hear_about: hearAbout || null,  
notes: notes || null,  
source: "Application for Entry",  
status: "New",  
})  
.select()

if (error) {  
console.error("DB insert error:", error)  
return NextResponse.json({ success: false, error: error.message }, { status: 500 })  
}

const dossierId = data?.[0]?.id

// --- Notify ---  
const { Resend } = await import("resend")  
const resend = new Resend(process.env.RESEND_API_KEY)

// Alert email to Daryl  
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
<p><strong>Dossier ID:</strong> ${dossierId}</p>  
<hr />  
<p style="color:#888;">Rachel — Reception & Orchestration • NexVoyage Collective</p>  
`,  
})

// Auto-reply to guest  
await resend.emails.send({  
from: "NexVoyage Collective <onboarding@resend.dev>",  
to: email,  
subject: "Your Application for Entry — NexVoyage Collective",  
html: `  
<div style="font-family:'Inter',sans-serif;background:#0A0A0A;padding:40px 20px;">  
<div style="max-width:480px;margin:0 auto;border:1px solid #D4AF37;padding:40px;">  
<h1 style="font-family:'Cormorant Garamond',serif;color:#D4AF37;font-size:28px;margin:0 0 8px;">Application Received</h1>  
<p style="color:#888;font-size:14px;margin:0 0 24px;">Dialogue Initiated.</p>  
<p style="color:#ccc;font-size:14px;line-height:1.6;">Thank you, ${name}. Your Sojourn Dossier has been received and is being reviewed by our concierge team.</p>  
<p style="color:#ccc;font-size:14px;line-height:1.6;">A member of our team will reach out within 24 hours to begin crafting your itinerary.</p>  
<hr style="border:none;border-top:1px solid #D4AF37/20;margin:24px 0;" />  
<p style="color:#666;font-size:11px;text-transform:uppercase;letter-spacing:0.2em;">Rachel — Reception & Orchestration • NexVoyage Collective</p>  
</div>  
</div>  
`,  
})

// Slack notification  
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
