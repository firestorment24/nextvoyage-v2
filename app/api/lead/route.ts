import { NextRequest, NextResponse } from 'next/server';  
import { Resend } from 'resend';  
import { sql } from '@vercel/postgres';

const resend = new Resend(process.env.RESEND_API_KEY);

const OCCASION_TAGS: Record<string, string> = {  
  'anniversary': 'Anniversary Journey',  
  'birthday': 'Birthway Celebration',  
  'honeymoon': 'Honeymoon',  
  'family': 'Family Expedition',  
  'business': 'Executive Transit',  
  'wellness': 'Wellness Retreat',  
  'adventure': 'Adventure Seeker',  
  'celebration': 'Celebration',  
  'other': 'Custom Inquiry',  
};

function generateManifestId(): string {  
  const ts = Date.now().toString(36).toUpperCase();  
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();  
  return `NVC-${ts}-${rand}`;  
}

export async function POST(request: NextRequest) {  
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

    if (!name || !email) {  
      return NextResponse.json(  
        { success: false, error: 'Name and email are required.' },  
        { status: 400 }  
      );  
    }

    const manifestId = generateManifestId();  
    const occasionTag = OCCASION_TAGS[occasion] || 'Custom Inquiry';  
    const partySizeNum = partySize ? parseInt(partySize, 10) : 1;

    const manifest = [  
      `━━━ Sojourn Dossier ━━━`,  
      `Manifest ID : ${manifestId}`,  
      `Guest       : ${name}`,  
      `Contact     : ${email}  |  ${phone || '—'}`,  
      `Occasion    : ${occasionTag}`,  
      `Destinations: ${destinations || '—'}`,  
      `Window      : ${travelWindow || '—'}`,  
      `Party       : ${partySizeNum}`,  
      `Aviation    : ${aviationClass || '—'}`,  
      `Heard via   : ${hearAbout || '—'}`,  
      `Notes       : ${notes || '—'}`,  
      `━━━━━━━━━━━━━━━━━━━━━━━`,  
    ].join('\n');

    console.log(`📋 ${manifestId} — New Sojourn Dossier`);  
    console.log(manifest);

    // Non-blocking: insert into Postgres  
    sql`  
      INSERT INTO dossiers (manifest_id, name, email, phone, occasion, destinations, travel_window, party_size, aviation_class, hear_about, notes)  
      VALUES (${manifestId}, ${name}, ${email}, ${phone || null}, ${occasion || null}, ${destinations || null}, ${travelWindow || null}, ${partySizeNum}, ${aviationClass || null}, ${hearAbout || null}, ${notes || null})  
    `.catch((err) => {  
      console.error('DB insert failed (non-blocking):', err);  
    });

    // Send email notification  
    const emailHtml = `  
      <div style="background:#0A0A0A;color:#EAEAEA;font-family:Inter,sans-serif;padding:40px;max-width:600px;margin:0 auto;">  
        <div style="border-bottom:1px solid #D4AF37;padding-bottom:16px;margin-bottom:24px;">  
          <h1 style="font-family:Cormorant Garamond,serif;color:#D4AF37;font-size:24px;margin:0;">New Sojourn Dossier</h1>  
          <p style="color:#888;font-size:13px;margin:4px 0 0;">${manifestId}</p>  
        </div>  
        <table style="width:100%;border-collapse:collapse;">  
          ${[  
            ['Guest', name],  
            ['Email', email],  
            ['Phone', phone || '—'],  
            ['Occasion', occasionTag],  
            ['Destinations', destinations || '—'],  
            ['Travel Window', travelWindow || '—'],  
            ['Party Size', String(partySizeNum)],  
            ['Aviation Class', aviationClass || '—'],  
            ['Heard Via', hearAbout || '—'],  
            ['Notes', notes || '—'],  
          ].map(([label, value]) => `  
            <tr>  
              <td style="padding:8px 12px;border-bottom:1px solid #1A1A1A;color:#888;font-size:13px;width:140px;">${label}</td>  
              <td style="padding:8px 12px;border-bottom:1px solid #1A1A1A;color:#EAEAEA;font-size:14px;">${value}</td>  
            </tr>  
          `).join('')}  
        </table>  
        <p style="margin-top:32px;font-size:12px;color:#555;text-align:center;">  
          NexVoyage Collective · Reception &amp; Orchestration  
        </p>  
      </div>  
    `;

    const emailRes = await resend.emails.send({  
      from: 'NexVoyage <onboarding@resend.dev>',  
      to: 'daryl.clark@fora.travel',  
      subject: `New Inquiry • ${name} • ${manifestId}`,  
      html: emailHtml,  
    });

    console.log(`📧 Email sent: ${emailRes.data?.id || 'unknown'}`);

    return NextResponse.json({  
      success: true,  
      manifestId,  
      analysisStatus: 'RECEIVED',  
      emailSent: true,  
    });  
  } catch (error) {  
    console.error('❌ Lead API error:', error);  
    return NextResponse.json(  
      { success: false, error: 'Internal server error.' },  
      { status: 500 }  
    );  
  }  
}  
