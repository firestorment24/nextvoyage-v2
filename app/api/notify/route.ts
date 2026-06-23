// app/api/notify/route.ts  
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {  
  try {  
    const { guestName, email, phone, intent, source, destinations } = await request.json();

    // 1. Send auto-reply thank-you email to the guest  
    const emailRes = await resend.emails.send({  
      from: 'NexVoyage Collective <onboarding@resend.dev>',  
      to: email,  
      subject: 'Your Application for Entry — NexVoyage Collective',  
      html: `  
        <div style="font-family: 'Cormorant Garamond', serif; background: #0A0A0A; color: #F5F5F0; padding: 48px 24px; text-align: center;">  
          <h1 style="font-size: 28px; letter-spacing: 4px; color: #D4AF37; margin-bottom: 8px;">APPLICATION RECEIVED</h1>  
          <p style="font-size: 18px; font-family: Inter, sans-serif; color: #A0A0A0;">Thank you, ${guestName}.</p>  
          <div style="width: 60px; height: 1px; background: #D4AF37; margin: 24px auto;"></div>  
          <p style="font-size: 15px; font-family: Inter, sans-serif; color: #A0A0A0; max-width: 400px; margin: 0 auto 24px;">  
            Your dossier has been received and a member of our team will review it shortly.   
            If your travel vision aligns with our collective, we'll reach out within 48 hours.  
          </p>  
          <p style="font-size: 13px; font-family: Inter, sans-serif; color: #666;">  
            <em>This is an automated confirmation. Please do not reply directly.</em>  
          </p>  
          <div style="margin-top: 32px; font-size: 11px; letter-spacing: 2px; color: #555;">  
            NEXVOYAGE COLLECTIVE  
          </div>  
        </div>  
      `,  
    });

    // 2. Send Slack notification (Rachel's channel)  
    if (process.env.SLACK_WEBHOOK_URL) {  
      await fetch(process.env.SLACK_WEBHOOK_URL, {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({  
          text: `*New Application for Entry*\n• Name: ${guestName}\n• Email: ${email}\n• Phone: ${phone}\n• Intent: ${intent}\n• Destinations: ${destinations || 'Not specified'}\n• Source: ${source || 'Application for Entry'}`,  
        }),  
      });  
    }

    return Response.json({ success: true, emailId: emailRes.id });  
  } catch (error) {  
    console.error('Notification error:', error);  
    return Response.json({ success: false, error: 'Notification failed' }, { status: 500 });  
  }  
}  
