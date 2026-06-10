import { Resend } from 'resend';  
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {  
  try {  
    const { objective, narrative, identity } = await request.json();

    const data = await resend.emails.send({  
      from: 'NexVoyage <inquiries@nexvoyagecollective.com>', // Or your verified domain  
      to: ['daryl.clark@fora.travel'],  
      subject: `New Concierge Inquiry: ${objective}`,  
      text: `Objective: ${objective}\nRequirements: ${narrative}\nContact: ${identity}`,  
    });

    return NextResponse.json(data);  
  } catch (error) {  
    return NextResponse.json({ error });  
  }  
}  
