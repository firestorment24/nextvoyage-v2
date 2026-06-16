import { Resend } from 'resend';  
import { NextResponse } from 'next/server';

// Initialize Resend with your API Key from environment variables  
const resend = new Resend(process.env.RESEND_API_KEY);  
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

export async function POST(req: Request) {  
  try {  
    const body = await req.json();  
    const { guestName, phone, intent, source, email } = body;

    // 1. Send Email Notification via Resend  
    // NOTE: Ensure 'concierge@nexvoyage.com' (or your domain) is verified in your Resend dashboard.  
    // If not verified yet, you can use 'onboarding@resend.dev' for testing to your own email.  
    const emailResponse = await resend.emails.send({  
      from: 'NexVoyage Collective <concierge@nexvoyage.com>',  
      to: ['daryl.clark@fora.travel'],  
      subject: `[Lead Intelligence] ${guestName} via ${source}`,  
      html: `  
        <div style="font-family: 'Courier New', Courier, monospace; background-color: #0a0a0a; color: #d4af37; padding: 40px; border: 1px solid #d4af37;">  
          <h2 style="text-transform: uppercase; letter-spacing: 0.2em; border-bottom: 1px solid #d4af37; padding-bottom: 10px;">New Guest Manifest</h2>  
          <p style="margin-top: 20px;"><strong>GUEST IDENTIFIED:</strong> ${guestName}</p>  
          <p><strong>SECURE LINE:</strong> ${phone}</p>  
          ${email ? `<p><strong>EMAIL:</strong> ${email}</p>` : ''}  
          <p><strong>SOURCE:</strong> ${source}</p>  
          <div style="margin-top: 30px; padding: 20px; border: 1px solid rgba(212, 175, 55, 0.3);">  
            <p style="font-size: 10px; text-transform: uppercase; opacity: 0.6;">Orchestration Intent:</p>  
            <p style="font-style: italic;">"${intent}"</p>  
          </div>  
          <p style="font-size: 9px; margin-top: 40px; opacity: 0.4; text-transform: uppercase; letter-spacing: 0.1em;">  
            Processed by Rachel AI // NexVoyage Collective  
          </p>  
        </div>  
      `,  
    });

    // 2. Send Slack Notification (if Webhook URL is provided)  
    if (SLACK_WEBHOOK_URL) {  
      await fetch(SLACK_WEBHOOK_URL, {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({  
          text: `🔔 *New Lead Captured*\n*Guest:* ${guestName}\n*Intent:* ${intent}\n*Source:* ${source}\n*Phone:* ${phone}`  
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
