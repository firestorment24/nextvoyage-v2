import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {  
  try {  
    const { objective, narrative, identity } = await req.json();

    // NOTE: You MUST use 'onboarding@resend.dev' until you verify your domain in Resend  
    const { data, error } = await resend.emails.send({  
      from: 'NexVoyage Concierge <onboarding@resend.dev>',  
      to: ['daryl.clark@fora.travel'],  
      subject: `New Inquiry: ${objective || 'General'}`,  
      html: `  
        <h2>New Concierge Inquiry</h2>  
        <p><strong>The Objective:</strong> ${objective}</p>  
        <p><strong>The Narrative:</strong> ${narrative}</p>  
        <p><strong>The Identity:</strong> ${identity}</p>  
      `,  
    });

    if (error) {  
      console.error('Resend Error:', error);  
      return Response.json({ error }, { status: 400 });  
    }

    return Response.json({ success: true, data });  
  } catch (error) {  
    console.error('API Route Error:', error);  
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });  
  }  
}  
