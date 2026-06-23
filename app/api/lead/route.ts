// app/api/lead/route.ts  
import { NextResponse } from "next/server";  
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const OCCASION_TAGS: Record<string, string> = {  
  celebrate: "Milestone Celebration",  
  explore: "Exploration & Discovery",  
  romance: "Romantic Getaway",  
  recharge: "Wellness & Recharge",  
  business: "Executive Business",  
  family: "Family Voyage",  
  adventure: "Adventure Expedition",  
};

function generateManifestId(): string {  
  const prefix = "NVC";  
  const timestamp = Date.now().toString(36).toUpperCase();  
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();  
  return `${prefix}-${timestamp}-${random}`;  
}

export async function POST(request: Request) {  
  try {  
    const body = await request.json();  
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
    } = body;

    const manifestId = generateManifestId();  
    const leadTag = OCCASION_TAGS[occasion] || "General Inquiry";

    const manifest = {  
      manifestId,  
      status: "PENDING_REVIEW",  
      analysisStatus: "QUEUED",  
      leadTag,  
      guestName: name,  
      email,  
      phone,  
      occasion,  
      destinations: destinations || "Not specified",  
      travelWindow: travelWindow || "Not specified",  
      partySize: partySize || "Not specified",  
      aviationClass: aviationClass || "Not specified",  
      hearAbout: hearAbout || "Not specified",  
      notes: notes || "None provided",  
      receivedAt: new Date().toISOString(),  
    };

    // Send email notification  
    const emailResponse = await resend.emails.send({  
      from: "NexVoyage <onboarding@resend.dev>",  
      to: "daryl.clark@fora.travel",  
      subject: `New Sojourn Dossier — ${manifestId} — ${leadTag}`,  
      html: `  
        <div style="background:#0A0A0A;color:#E8E0D0;font-family:'Inter',sans-serif;padding:40px;max-width:600px;margin:0 auto;">  
          <div style="border:1px solid #D4AF37;padding:32px;border-radius:4px;">  
            <h1 style="font-family:'Cormorant Garamond',serif;color:#D4AF37;font-size:24px;margin:0 0 24px 0;">✦ Sojourn Dossier</h1>  
            <p style="font-size:12px;color:#8A8070;margin:0 0 24px 0;">${manifestId}</p>  
            <table style="width:100%;border-collapse:collapse;">  
              <tr><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;color:#8A8070;font-size:13px;">Name</td><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;font-size:13px;">${name}</td></tr>  
              <tr><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;color:#8A8070;font-size:13px;">Email</td><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;font-size:13px;">${email}</td></tr>  
              <tr><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;color:#8A8070;font-size:13px;">Phone</td><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;font-size:13px;">${phone || "—"}</td></tr>  
              <tr><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;color:#8A8070;font-size:13px;">Occasion</td><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;font-size:13px;"><span style="color:#D4AF37;">${leadTag}</span></td></tr>  
              <tr><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;color:#8A8070;font-size:13px;">Destinations</td><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;font-size:13px;">${manifest.destinations}</td></tr>  
              <tr><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;color:#8A8070;font-size:13px;">Travel Window</td><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;font-size:13px;">${manifest.travelWindow}</td></tr>  
              <tr><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;color:#8A8070;font-size:13px;">Party Size</td><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;font-size:13px;">${manifest.partySize}</td></tr>  
              <tr><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;color:#8A8070;font-size:13px;">Aviation Class</td><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;font-size:13px;">${manifest.aviationClass}</td></tr>  
              <tr><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;color:#8A8070;font-size:13px;">Heard Via</td><td style="padding:8px 0;border-bottom:1px solid #1A1A1A;font-size:13px;">${manifest.hearAbout}</td></tr>  
              <tr><td style="padding:8px 0;color:#8A8070;font-size:13px;vertical-align:top;">Notes</td><td style="padding:8px 0;font-size:13px;">${manifest.notes}</td></tr>  
            </table>  
            <p style="font-size:11px;color:#4A4A4A;margin-top:24px;text-align:center;">NexVoyage Collective • Reception & Orchestration</p>  
          </div>  
        </div>  
      `,  
    });

    console.log(`[${manifestId}] Manifest created — ${leadTag}`);

    if (emailResponse.error) {  
      console.error(`[${manifestId}] Email send failed:`, emailResponse.error);  
    } else {  
      console.log(`[${manifestId}] Email sent:`, emailResponse.data?.id);  
    }

    return NextResponse.json({  
      success: true,  
      manifestId,  
      analysisStatus: "COMPLETED",  
      emailSent: !emailResponse.error,  
    });  
  } catch (error) {  
    console.error("Lead API error:", error);  
    return NextResponse.json(  
      { success: false, error: "Failed to process inquiry" },  
      { status: 500 }  
    );  
  }  
}  
