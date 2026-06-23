import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {  
  try {  
    const { email } = await request.json();

    if (!email) {  
      return NextResponse.json(  
        { valid: false, error: 'Email is required' },  
        { status: 400 }  
      );  
    }

    const apiKey = process.env.ZEROBOUNCE_API_KEY;  
    if (!apiKey) {  
      return NextResponse.json(  
        { valid: false, error: 'Server configuration error' },  
        { status: 500 }  
      );  
    }

    const response = await fetch(  
      `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${encodeURIComponent(email)}`  
    );

    const data = await response.json();

    // ZeroBounce statuses: 'valid', 'catch-all', 'unknown', 'invalid', 'do_not_mail', 'spamtrap', 'abuse'  
    const valid = data.status === 'valid' || data.status === 'catch-all';

    return NextResponse.json({  
      valid,  
      status: data.status,  
      subStatus: data.sub_status,  
      domain: data.domain,  
      didYouMean: data.did_you_mean,  
    });  
  } catch (error) {  
    console.error('Email verification error:', error);  
    return NextResponse.json(  
      { valid: false, error: 'Verification failed' },  
      { status: 500 }  
    );  
  }  
}  
