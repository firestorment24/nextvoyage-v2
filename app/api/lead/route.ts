// app/api/lead/route.ts  
import { Resend } from 'resend';  
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {  
  try {  
    const body = await req.json();  
    const { name, email, dates, city, vision, aesthetics } = body;

    // Send the email via Resend  
    const { data, error } = await resend.emails.send({  
      from: 'NexVoyage <onboarding@resend.dev>', // Update this once you verify your domain  
      to: ['daryl.clark@fora.travel'],  
      subject: `Traveler Manifest: ${name}`,  
      html: `  
        <div style="font-family: sans-serif; max-width: 600px; color: #333;">  
          <h2 style="border-bottom: 1px solid #000; padding-bottom: 10px;">Traveler Manifest</h2>  
          <p><strong>Identity:</strong> ${name}</p>  
          <p><strong>Communication:</strong> ${email}</p>  
          <p><strong>Departure City:</strong> ${city}</p>  
          <p><strong>Preferred Dates:</strong> ${dates}</p>  
            
          <div style="margin-top: 20px;">  
            <h3 style="font-size: 14px; text-transform: uppercase; color: #666;">The Vision</h3>  
            <p style="background: #f9f9f9; padding: 15px; border-radius: 4px;">${vision}</p>  
          </div>

          <div style="margin-top: 20px;">  
            <h3 style="font-size: 14px; text-transform: uppercase; color: #666;">Aesthetic Notes</h3>  
            <p style="background: #f9f9f9; padding: 15px; border-radius: 4px;">${aesthetics}</p>  
          </div>  
        </div>  
      `,  
    });

    if (error) {  
      console.error('Resend Error:', error);  
      return NextResponse.json({ error }, { status: 500 });  
    }

    return NextResponse.json({ success: true, data });  
  } catch (err) {  
    console.error('Route Error:', err);  
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });  
  }  
}  
