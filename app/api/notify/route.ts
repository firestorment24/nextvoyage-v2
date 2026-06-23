import { NextResponse } from "next/server";

export async function POST(request: Request) {  
  try {  
    const { guestName, email, phone, intent, destinations, source } = await request.json();

    // Format destinations for display  
    const destinationsDisplay = destinations && destinations.length > 0  
      ? destinations.join(", ")  
      : "Not specified";

    // Send email via Resend  
    const Resend = (await import("resend")).Resend;  
    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailResponse = await resend.emails.send({  
      from: "NexVoyage <onboarding@resend.dev>",  
      to: "daryl.clark@fora.travel",  
      subject: `New Lead: ${guestName} — ${intent || "Inquiry"}`,  
      html: `  
        <div style="font-family: 'Inter', sans-serif; background: #0A0A0A; color: #E5E5E5; padding: 40px; max-width: 600px;">  
          <h1 style="font-family: 'Cormorant Garamond', serif; color: #D4AF37; font-size: 28px; margin-bottom: 24px;">  
            New Lead · Application for Entry  
          </h1>  
          <table style="width: 100%; border-collapse: collapse;">  
            <tr>  
              <td style="padding: 12px 0; border-bottom: 1px solid #2A2A2A; color: #888; width: 120px;">Guest</td>  
              <td style="padding: 12px 0; border-bottom: 1px solid #2A2A2A; color: #E5E5E5;">${guestName}</td>  
            </tr>  
            <tr>  
              <td style="padding: 12px 0; border-bottom: 1px solid #2A2A2A; color: #888;">Email</td>  
              <td style="padding: 12px 0; border-bottom: 1px solid #2A2A2A; color: #E5E5E5;">${email || "—"}</td>  
            </tr>  
            <tr>  
              <td style="padding: 12px 0; border-bottom: 1px solid #2A2A2A; color: #888;">Phone</td>  
              <td style="padding: 12px 0; border-bottom: 1px solid #2A2A2A; color: #E5E5E5;">${phone || "—"}</td>  
            </tr>  
            <tr>  
              <td style="padding: 12px 0; border-bottom: 1px solid #2A2A2A; color: #888;">Intent</td>  
              <td style="padding: 12px 0; border-bottom: 1px solid #2A2A2A; color: #E5E5E5;">${intent || "General Inquiry"}</td>  
            </tr>  
            <tr>  
              <td style="padding: 12px 0; border-bottom: 1px solid #2A2A2A; color: #888;">Destinations</td>  
              <td style="padding: 12px 0; border-bottom: 1px solid #2A2A2A; color: #E5E5E5;">${destinationsDisplay}</td>  
            </tr>  
          </table>  
          <p style="margin-top: 24px; color: #555; font-size: 12px;">  
            Source: ${source || "Application for Entry"} · NexVoyage Collective  
          </p>  
        </div>  
      `,  
    });

    // Optional Slack notification  
    if (process.env.SLACK_WEBHOOK_URL) {  
      const slackMessage = {  
        text: `*New Lead: ${guestName}*\nEmail: ${email || "—"}\nPhone: ${phone || "—"}\nIntent: ${intent || "General Inquiry"}\nDestinations: ${destinationsDisplay}\nSource: ${source || "Application for Entry"}`,  
      };  
      await fetch(process.env.SLACK_WEBHOOK_URL, {  
        method: "POST",  
        headers: { "Content-Type": "application/json" },  
        body: JSON.stringify(slackMessage),  
      }).catch(() => {}); // fire-and-forget  
    }

    return NextResponse.json({ success: true, emailId: emailResponse.id });  
  } catch (error) {  
    console.error("Notify API error:", error);  
    return NextResponse.json(  
      { success: false, error: "Failed to send notification" },  
      { status: 500 }  
    );  
  }  
}  
