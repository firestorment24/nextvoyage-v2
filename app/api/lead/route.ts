// app/api/lead/route.ts  
import { Resend } from 'resend';  
import { NextResponse } from 'next/server';  
import { sql } from '@vercel/postgres';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {  
  try {  
    const body = await req.json();  
    const {  
      name, email, phone, occasion, destinations,  
      travelWindow, partySize, aviationClass, hearAbout, notes  
    } = body;
 
    // --- 1. Validate email via ZeroBounce ---  
    if (process.env.ZEROBOUNCE_API_KEY) {  
      const zbRes = await fetch(  
        `https://api.zerobounce.net/v2/validate?api_key=${process.env.ZEROBOUNCE_API_KEY}&email=${encodeURIComponent(email)}`  
      );  
      const zbData = await zbRes.json();  
      if (zbData.status === 'invalid' || zbData.status === 'do_not_mail') {  
        return NextResponse.json(  
          { error: 'Email address is not valid. Please check and try again.' },  
          { status: 400 }  
        );  
      }  
    }

    // --- 2. Notify (auto-reply email + Slack) — non-blocking ---  
    const notifyPromise = fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.vercel.app'}/api/notify`, {  
      method: 'POST',  
      headers: { 'Content-Type': 'application/json' },  
      body: JSON.stringify({  
        guestName: name,  
        email,  
        phone,  
        intent: occasion,  
        source: 'Application for Entry',  
        destinations,  
      }),  
    }).catch(err => console.error('Notify failed (non-blocking):', err));

    // --- 3. Store in Vercel Postgres — non-blocking ---  
    const dbPromise = sql`  
      INSERT INTO dossiers (name, email, phone, occasion, destinations, travel_window, party_size, aviation_class, hear_about, notes, status)  
      VALUES (${name}, ${email}, ${phone}, ${occasion}, ${destinations}, ${travelWindow}, ${partySize}, ${aviationClass}, ${hearAbout}, ${notes}, 'New')  
      ON CONFLICT (email) DO NOTHING;  
    `.catch(err => console.error('DB insert failed (non-blocking):', err));

    // Wait for both (they'll resolve even if one fails)  
    await Promise.all([notifyPromise, dbPromise]);

    return NextResponse.json({ success: true });  
  } catch (err) {  
    console.error('Lead API error:', err);  
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });  
  }  
}  
