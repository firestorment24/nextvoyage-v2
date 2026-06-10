// app/api/lead/route.ts  
import { NextResponse } from 'next/server';

export async function POST(request: Request) {  
  const data = await request.json();

  // This is where we'll eventually hook into Resend, SendGrid, or your email tool.  
  // For now, we're building the Dossier template.  
  const dossier = `  
    TRAVELER DOSSIER: ${data.name}  
    -----------------------------------------  
    CONTACT: ${data.contactMethod} (${data.contactDetail || 'Check form'})  
    GOAL: ${data.vibe}  
      
    LOGISTICS:  
    - Timeline: ${data.timeline}  
    - Party: ${data.adults} Adults, ${data.children} Children  
    - Investment: ${data.investment}  
      
    PREFERENCES:  
    - Past Favorite: ${data.pastExperience}  
    - Non-Negotiable: ${data.nonNegotiable}  
    - Loyalty: ${data.loyalty}  
      
    SOURCE: ${data.referral}  
    -----------------------------------------  
  `;

  console.log('Lead Dossier Created:', dossier);

  // In a production environment, you'd send this to daryl.clark@fora.travel here.  
  return NextResponse.json({ success: true, message: 'Dossier routed to Daryl' });  
}  
