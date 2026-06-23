import { NextRequest, NextResponse } from 'next/server';  
import { Resend } from 'resend';  
import { sql } from '@vercel/postgres';

const resend = new Resend(process.env.RESEND_API_KEY);

const OCCASION_TAGS: Record<string, string> = {  
  anniversary: 'Milestone Celebration',  
  birthday: 'Milestone Celebration',  
  honeymoon: 'Romantic Getaway',  
  business_leisure: 'Executive Retreat',  
  family_gathering: 'Family & Heritage',  
  personal_retreat: 'Personal Retreat',  
  exploration: 'The Grand Journey',  
  other: 'Bespoke Inquiry',  
};

function generateManifestId(): string {  
  const timestamp = Date.now().toString(36).toUpperCase();  
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();  
  return `NVC-${timestamp}-${random}`;  
}

export async function POST(request: NextRequest) {  
  try {  
    const body = await request.json();

    const {  
      name,  
      email,  
      phone,  
      destination,  
      travelWindow,  
      partySize,  
      occasion,  
      aviationClass,  
      hearAbout,  
      notes,  
    } = body;

    const manifestId = generateManifestId();  
    const occasionTag = OCCASION_TAGS[occasion?.toLowerCase()] || occasion || 'Bespoke Inquiry';

    console.log(`[LEAD] Manifest ${manifestId} received from ${name} (${email})`);  
    console.log(`[LEAD] Occasion: ${occasion} → Tagged as: ${occasionTag}`);  
    console.log(`[LEAD] Destination: ${destination} | Travel Window: ${travelWindow} | Party: ${partySize}`);

    // ✉️ Send email notification via Resend  
    const emailResponse = await resend.emails.send({  
      from: 'NexVoyage <onboarding@resend.dev>',  
      to: 'daryl.clark@fora.travel',  
      subject: `New Sojourn Dossier — ${name} (${occasionTag})`,  
      html: `  
        <div style="font-family: 'Inter', sans-serif; background: #0A0A0A; padding: 40px;">  
          <div style="max-width: 600px; margin: 0 auto; background: #111; border: 1px solid #D4AF37; border-radius: 8px; padding: 32px;">  
            <h1 style="color: #D4AF37; font-family: 'Cormorant Garamond', serif; font-size: 28px; margin: 0 0 8px 0;">New Sojourn Dossier</h1>  
            <p style="color: #888; font-size: 14px; margin: 0 0 24px 0;">Manifest: ${manifestId} · ${new Date().toLocaleString()}</p>  
            <hr style="border: none; border-top: 1px solid #222; margin: 0 0 24px 0;">

            <table style="width: 100%; border-collapse: collapse; color: #ccc; font-size: 14px;">  
              <tr><td style="padding: 8px 0; color: #666;">Name</td><td style="padding: 8px 0; text-align: right;">${name}</td></tr>  
              <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0; text-align: right;">${email}</td></tr>  
              <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0; text-align: right;">${phone || '—'}</td></tr>  
              <tr><td style="padding: 8px 0; color: #666;">Destination</td><td style="padding: 8px 0; text-align: right;">${destination || '—'}</td></tr>  
              <tr><td style="padding: 8px 0; color: #666;">Travel Window</td><td style="padding: 8px 0; text-align: right;">${travelWindow || '—'}</td></tr>  
              <tr><td style="padding: 8px 0; color: #666;">Party Size</td><td style="padding: 8px 0; text-align: right;">${partySize || '—'}</td></tr>  
              <tr><td style="padding: 8px 0; color: #666;">Occasion</td><td style="padding: 8px 0; text-align: right;">${occasionTag}</td></tr>  
              <tr><td style="padding: 8px 0; color: #666;">Aviation Class</td><td style="padding: 8px 0; text-align: right;">${aviationClass || '—'}</td></tr>  
              <tr><td style="padding: 8px 0; color: #666;">Heard From</td><td style="padding: 8px 0; text-align: right;">${hearAbout || '—'}</td></tr>  
            </table>

            <hr style="border: none; border-top: 1px solid #222; margin: 24px 0;">  
            <p style="color: #666; font-size: 13px; margin: 0 0 8px 0;">Discretion Notes</p>  
            <p style="color: #ccc; font-size: 14px; margin: 0; font-style: italic;">${notes || 'None provided'}</p>  
          </div>  
        </div>  
      `,  
    });

    console.log(`[LEAD] Email sent: ${emailResponse.data?.id}`);

    // 💾 Write to Neon database  
    const result = await sql`  
      INSERT INTO dossiers (name, email, phone, destination, travel_window, party_size, occasion, aviation_class, hear_about, notes, status, source)  
      VALUES (${name}, ${email}, ${phone || null}, ${destination || null}, ${travelWindow || null}, ${partySize ? parseInt(partySize) : null}, ${occasionTag}, ${aviationClass || null}, ${hearAbout || null}, ${notes || null}, 'pending', 'Application for Entry')  
      RETURNING id;  
    `;

    const dossierId = result.rows[0]?.id;  
    console.log(`[LEAD] Dossier written to DB: ${dossierId}`);

    return NextResponse.json({  
      success: true,  
      manifestId,  
      dossierId,  
      analysisStatus: 'COMPLETED',  
      emailSent: true,  
    });  
  } catch (error) {  
    console.error('[LEAD] Error processing inquiry:', error);  
    return NextResponse.json(  
      { success: false, error: 'Failed to process inquiry' },  
      { status: 500 }  
    );  
  }  
}  
