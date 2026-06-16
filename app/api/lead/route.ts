import { Resend } from 'resend';  
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {  
  try {  
    const body = await req.json();  
    const { name, email, phone, dates, city, vision, aesthetics } = body;

    const { data, error } = await resend.emails.send({  
      from: 'NexVoyage <onboarding@resend.dev>',  
      to: ['daryl.clark@fora.travel'],  
      subject: `Traveler Manifest: ${name}`,  
      html: `  
        <div style="font-family: sans-serif; max-width: 600px; color: #333;">  
          <h2 style="border-bottom: 1px solid #d4af37; padding-bottom: 10px; text-transform: uppercase; letter-spacing: 2px;">Traveler Manifest</h2>  
          <p><strong>Identity:</strong> ${name}</p>  
          <p><strong>Email:</strong> ${email}</p>  
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>  
          <p><strong>Departure City:</strong> ${city}</p>  
          <p><strong>Preferred Timeline:</strong> ${dates}</p>  
            
          <div style="margin-top: 20px;">  
            <h3 style="font-size: 12px; text-transform: uppercase; color: #999; letter-spacing: 1px;">The Vision</h3>  
            <p style="background: #f4f4f4; padding: 15px; border-left: 2px solid #d4af37;">${vision}</p>  
          </div>

          <div style="margin-top: 20px;">  
            <h3 style="font-size: 12px; text-transform: uppercase; color: #999; letter-spacing: 1px;">Aesthetic Requirements</h3>  
            <p style="background: #f4f4f4; padding: 15px; border-left: 2px solid #d4af37;">${aesthetics}</p>  
          </div>  
        </div>  
      `,  
    });

    if (error) return NextResponse.json({ error }, { status: 500 });  
    return NextResponse.json({ success: true, data });  
  } catch (err) {  
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });  
  }  
}  
