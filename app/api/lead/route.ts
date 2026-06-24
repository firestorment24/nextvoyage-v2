import { Resend } from 'resend';  
import { NextResponse } from 'next/server';  
import { sql } from '@vercel/postgres';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {  
  try {  
    const body = await req.json();  
    const { name, email, phone, occasion, destinations, travelWindow, partySize, aviationClass, hearAbout, notes, source } = body;

    // 1️⃣ Send email notification  
    const { error: emailError } = await resend.emails.send({  
      from: 'NexVoyage <daryl.clark@fora.travel>',  
      to: ['daryl.clark@fora.travel'],  
      subject: `Traveler Manifest: ${name}`,  
      html: `  
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem;">  
          <h2 style="color: #D4AF37; border-bottom: 1px solid #2A2A2A; padding-bottom: 1rem;">Traveler Manifest</h2>  
          <table style="width: 100%; border-collapse: collapse;">  
            <tr><td style="padding: 0.5rem 0; color: #666; width: 140px;">Identity</td><td style="padding: 0.5rem 0;">${name}</td></tr>  
            <tr><td style="padding: 0.5rem 0; color: #666;">Email</td><td style="padding: 0.5rem 0;">${email}</td></tr>  
            <tr><td style="padding: 0.5rem 0; color: #666;">Phone</td><td style="padding: 0.5rem 0;">${phone || 'Not provided'}</td></tr>  
            <tr><td style="padding: 0.5rem 0; color: #666;">Occasion</td><td style="padding: 0.5rem 0;">${occasion || 'Not specified'}</td></tr>  
            <tr><td style="padding: 0.5rem 0; color: #666;">Destinations</td><td style="padding: 0.5rem 0;">${destinations || 'Not specified'}</td></tr>  
            <tr><td style="padding: 0.5rem 0; color: #666;">Travel Window</td><td style="padding: 0.5rem 0;">${travelWindow || 'Not specified'}</td></tr>  
            <tr><td style="padding: 0.5rem 0; color: #666;">Party Size</td><td style="padding: 0.5rem 0;">${partySize || 'Not specified'}</td></tr>  
            <tr><td style="padding: 0.5rem 0; color: #666;">Aviation</td><td style="padding: 0.5rem 0;">${aviationClass || 'Not specified'}</td></tr>  
            <tr><td style="padding: 0.5rem 0; color: #666;">Source</td><td style="padding: 0.5rem 0;">${hearAbout || 'Not specified'}</td></tr>  
          </table>  
          ${notes ? `<div style="margin-top: 1rem; border-top: 1px solid #2A2A2A; padding-top: 1rem; color: #999;">${notes}</div>` : ''}  
        </div>  
      `,  
    });

    if (emailError) console.error('[LEAD] Email error:', emailError);

    // 2️⃣ Save to database  
    const { rows } = await sql`  
      INSERT INTO dossiers (  
        name, email, phone,  
        destination, travel_dates,  
        occasion, party_size, aviation_class,  
        hear_about, notes, source  
      ) VALUES (  
        ${name}, ${email}, ${phone || null},  
        ${destinations || null}, ${travelWindow || null},  
        ${occasion || null}, ${partySize ? Number(partySize) : null}, ${aviationClass || null},  
        ${hearAbout || null}, ${notes || null}, ${source || 'Travel Inquiry'}  
      )  
      RETURNING *  
    `;

    console.log('[LEAD] Dossier created:', rows[0].id);  
    return NextResponse.json({ success: true, dossier: rows[0] }, { status: 201 });  
  } catch (err) {  
    console.error('[LEAD] Error:', err);  
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });  
  }  
}  
