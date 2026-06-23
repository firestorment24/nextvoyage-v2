import { Resend } from 'resend';  
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);  
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

export async function POST(req: Request) {  
  try {  
    const body = await req.json();  
    const { guestName, phone, intent, source, email, destinations } = body;

    const destinationsHtml = destinations?.length  
      ? `<p><strong>DESTINATIONS:</strong> ${destinations.join(', ')}</p>`  
      : '';

    // 1. Send Email Notification via Resend  
    const emailResponse = await resend.emails.send({  
      from: 'NexVoyage Collective <concierge@nexvoyage.com>',  
      to: ['daryl.clark@fora.travel'],  
      subject: `[Lead Intelligence] ${guestName} via ${source}`,  
      html: `  
        <h2>New Guest Manifest</h2>  
        <p><strong>GUEST IDENTIFIED:</strong> ${guestName}</p>  
        <p><strong>SECURE LINE:</strong> ${phone}</p>  
        ${email ? `<p><strong>EMAIL:</strong> ${email}</p>` : ''}  
        ${destinationsHtml}  
        <p><strong>SOURCE:</strong> ${source}</p>  
        <p><strong>Orchestration Intent:</strong></p>  
        <p>"${intent}"</p>  
        <hr />  
        <p><em>Processed by Rachel AI // NexVoyage Collective</em></p>  
      `,  
    });

    // 2. Send Slack Notification (if Webhook URL is provided)  
    if (SLACK_WEBHOOK_URL) {  
      await fetch(SLACK_WEBHOOK_URL, {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({  
          text: `🔔 *New Lead Captured*\n*Guest:* ${guestName}\n*Intent:* ${intent}\n*Destinations:* ${destinations?.join(', ') || 'N/A'}\n*Source:* ${source}\n*Phone:* ${phone}`  
        }),  
      });  
    }

    return NextResponse.json({  
      success: true,  
      id: emailResponse.data?.id  
    }, { status: 200 });

  } catch (error: any) {  
    console.error('Notification Error:', error);  
    return NextResponse.json({  
      success: false,  
      error: error.message  
    }, { status: 500 });  
  }  
}  
