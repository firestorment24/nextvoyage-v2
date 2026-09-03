import LegalDocument, { LegalDocumentData } from '@/components/LegalDocument';

export const metadata = {  
title: 'Cookie & Tracking Policy — NexVoyage Collective',  
description:  
'Disclosure of essential technologies, limited analytics, and third-party tracking practices.',  
};

const document: LegalDocumentData = {  
protocol: 'Protocol 05',  
title: 'Cookie & Tracking Policy',  
description:  
'A restrained approach to essential website technologies, limited analytics, and digital privacy.',  
effectiveDate: 'September 3, 2026',  
lastUpdated: 'September 3, 2026',  
introduction: [  
'NexVoyage Collective uses a restrained approach to cookies and similar technologies. Our website is designed to use only the technologies necessary to operate, secure, and improve the site, together with limited analytics that help us understand performance.',  
'We do not intentionally use third-party advertising trackers, behavioral advertising cookies, or advertising networks on the website.',  
],  
sections: [  
{  
heading: '1. What Cookies Are',  
paragraphs: [  
'Cookies are small text files placed on your device when you visit a website. Similar technologies, such as local storage or basic server logs, may perform comparable functions. These technologies can help a website remember essential information, maintain security, understand technical performance, and improve the visitor experience.',  
],  
},  
{  
heading: '2. Technologies We Use',  
subheadings: [  
{  
  heading: 'Essential Technologies',  
  paragraphs: [  
    'Essential cookies and similar technologies support the basic operation and security of the website.',  
  ],  
  bullets: [  
    'Maintain site functionality and navigation.',  
    'Protect forms and other interactive features.',  
    'Support session management.',  
    'Detect technical errors or unusual activity.',  
    'Remember choices necessary for the site to operate as requested.',  
  ],  
},  
{  
  heading: 'Limited Analytics',  
  paragraphs: [  
    'We may use limited analytics technologies to understand how visitors use the website and to improve its performance.',  
  ],  
  bullets: [  
    'Pages viewed.',  
    'General interaction with site features.',  
    'Approximate visit duration.',  
    'Browser, device, and operating-system information.',  
    'Referring pages.',  
    'Aggregated performance or error information.',  
  ],  
},  
],  
},  
{  
heading: '3. Advertising and Third-Party Tracking',  
paragraphs: [  
'NexVoyage does not intentionally deploy third-party advertising trackers or participate in advertising networks through this website. We do not use cookies for targeted advertising based on your activity across unrelated websites.',  
'Links to third-party websites, including scheduling or service-provider websites, may operate under those parties\' own cookie and privacy practices. NexVoyage does not control those practices and encourages visitors to review the relevant third-party policies.',  
],  
},  
{  
heading: '4. Managing Cookies',  
paragraphs: [  
'You can manage or restrict cookies through your browser settings. Most browsers allow you to view cookies stored on your device, delete existing cookies, block all or selected cookies, and receive a notice before cookies are placed.',  
'Disabling cookies may affect the availability or performance of certain website features. Where applicable law requires consent for non-essential cookies or similar technologies, the website may provide a consent or preference mechanism.',  
],  
},  
{  
heading: '5. Privacy and Personal Information',  
paragraphs: [  
'Cookies and similar technologies may collect information that can be associated with a device, browser, or online activity. Where that information is personal information under applicable law, NexVoyage handles it in accordance with our Privacy Architecture & Data Sovereignty policy.',  
'Sensitive travel details, itinerary information, and security-related information are handled under applicable privacy and consent protocols rather than collected through advertising or behavioral tracking technologies.',  
],  
},  
{  
heading: '6. Policy Changes',  
paragraphs: [  
'We may revise this Cookie & Tracking Policy to reflect changes in the website, technology, legal requirements, or our operating practices. The updated version will be posted on this page with a revised Last Updated date.',  
],  
},  
{  
heading: '7. Contact',  
paragraphs: [  
'Questions about cookies, tracking technologies, or our privacy practices may be directed to:',  
'NexVoyage Collective — Privacy Contact / Data Protection Officer',  
'Email: privacy@nexvoyagecollective.com',  
],  
},  
],  
closing: 'NexVoyage Collective — Discretion by Design.',  
};

export default function CookiesPage() {  
return <LegalDocument document={document} />;  
}  
