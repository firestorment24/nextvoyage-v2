import { Resend } from 'resend';  
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);  
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

export async function POST(req: Request) {  
  try {  
    const { guestName, email, phone, intent, source } = await req.json();

    // 1. Send Email via Resend  
    await resend.emails.send({  
      from: 'NexVoyage <concierge@nexvoyage.com>', // Ensure this domain is verified in Resend  
      to: ['daryl.clark@fora.travel'],  
      subject: `New Lead: ${guestName} (${source})`,  
      html: `  
        <div style="font-family: sans-serif; line-height: 1.5; color: #1a1a1a;">  
          <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">New Guest Intelligence</h2>  
          <p><strong>Name:</strong> ${guestName}</p>  
          <p><strong>Email:</strong> ${email}</p>  
          <p><strong>Phone:</strong> ${phone}</p>  
          <p><strong>Intent:</strong> ${intent}</p>  
          <p><strong>Source:</strong> ${source}</p>  
          <hr style="border: 0; border-top: 1px solid #eee;" />  
          <p style="font-size: 12px; color: #666;">NexVoyage Collective - Notification Engine</p>  
        </div>  
      `,  
    });

    // 2. Send to Slack  
    if (SLACK_WEBHOOK_URL) {  
      await fetch(SLACK_WEBHOOK_URL, {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({  
          text: `🔔 *New Lead Captured*\n*Guest:* ${guestName}\n*Phone:* ${phone}\n*Intent:* ${intent}\n*Source:* ${source}`  
        }),  
      });  
    }

    return NextResponse.json({ success: true });  
  } catch (error) {  
    console.error('Notification Error:', error);  
    return NextResponse.json({ success: false }, { status: 500 });  
  }  
}  
