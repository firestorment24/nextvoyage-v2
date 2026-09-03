import LegalDocument, { LegalDocumentData } from '@/components/LegalDocument';

export const metadata = {  
title: 'Terms & Conditions of Engagement — NexVoyage Collective',  
description:  
'Terms governing advisory mandates, travel coordination, retainers, cancellations, and client engagements.',  
};

const document: LegalDocumentData = {  
protocol: 'Protocol 02',  
title: 'Terms & Conditions of Engagement',  
description:  
'Advisory mandates, commercial settlement structures, client responsibilities, and confidentiality covenants.',  
effectiveDate: 'August 19, 2026',  
lastUpdated: 'August 19, 2026',  
introduction: [  
'These Terms & Conditions ("Terms") govern the relationship between NexVoyage Collective ("NexVoyage," "we," "us") and each client ("you," "Client"). By engaging our services or accessing our digital properties, you accept these Terms.',  
'NexVoyage Collective is a boutique private travel office. We serve as the architect and steward of your journey — a guardian of time — coordinating bespoke travel planning, concierge services, private aviation and maritime charters, estate buyouts, and safety recommendations through our service tiers.',  
],  
sections: [  
{  
  heading: '1. Scope of Services',  
  paragraphs: ['NexVoyage provides advisory and execution services including:'],  
  bullets: [  
    'Bespoke travel planning and itinerary design.',  
    'Concierge and on-the-ground coordination.',  
    'Private aviation, yacht, and estate buyout arrangements.',  
    'Safety recommendations and coordination through applicable service tiers.',  
    'Coordination with hotels, guides, transport providers, expedition operators, and other third-party suppliers.',  
  ],  
  subheadings: [  
    {  
      heading: 'Role of NexVoyage',  
      paragraphs: [  
        'We act as an intermediary and travel architect, not as the operator of the underlying travel, hospitality, security, or transport services, unless expressly stated in a written mandate. All services are provided on a best-efforts basis. Nothing in these Terms constitutes a guarantee of specific outcomes, availability, or safety.',  
      ],  
    },  
  ],  
},  
{  
  heading: '2. Client Responsibilities',  
  paragraphs: ['You agree to:'],  
  bullets: [  
    'Provide accurate, current, and complete information necessary for planning and execution.',  
    'Maintain valid travel documentation, including passports, visas, health certificates, and required permits.',  
    'Represent that you are at least 18 years of age and possess the legal capacity to enter into these Terms.',  
    'Adhere to applicable laws, entry protocols, and the reasonable directions of our vetted partners.',  
    'Preserve the confidentiality of itineraries and proprietary information as set forth in Section 6.',  
  ],  
},  
{  
  heading: '3. Commercial Terms & Retainers',  
  bullets: [  
    'Curation and advisory fees are non-refundable fees reflecting the specialized labor of planning, sourcing, and vetting. Specific amounts are set forth in individual client mandates.',  
    'Complex engagements involving aviation, maritime travel, expeditions, or estates may require structured milestone retainers as detailed in the applicable client mandate.',  
    'All fees are payable according to the schedule in the mandate. Unless otherwise stated, transactions are processed in United States dollars.',  
    'Failure to meet settlement deadlines may result in suspension of active services, loss of availability, or rebooking at prevailing rates.',  
  ],  
},  
{  
  heading: '4. Cancellation & Contingencies',  
  bullets: [  
    'Private aviation charters, yacht voyages, remote expeditions, estate buyouts, hotels, and other third-party services are subject to the specialized cancellation and change terms of the underlying operators, which may be non-refundable.',  
    'Neither party shall be liable for delays or failures caused by events beyond reasonable control, including weather, geopolitical events, health crises, infrastructure failures, or regulatory actions.',  
    'Cancellations or modifications initiated by the client may incur fees charged by operators and, where applicable, NexVoyage planning or administrative fees.',  
    "Where third-party suppliers issue refunds or credits, NexVoyage will communicate the applicable process and timing. Any refund remains subject to the supplier's terms.",  
  ],  
},  
{  
  heading: '5. Liability',  
  bullets: [  
    'NexVoyage is not liable for the acts, omissions, negligence, insolvency, schedule changes, or failures of third-party suppliers, operators, security firms, venues, carriers, hotels, guides, or other service providers.',  
    'Travel — particularly in remote, alpine, maritime, wildlife, and other high-stakes environments — involves inherent risks. Service recommendations and coordination are guidance, not guarantees of safety or outcome.',  
    "To the fullest extent permitted by law, NexVoyage's aggregate liability arising out of or relating to these Terms or any engagement shall not exceed the total fees paid by the client for the specific engagement giving rise to the claim.",  
  ],  
},  
{  
  heading: '6. Intellectual Property & Itinerary Confidentiality',  
  bullets: [  
    'All itineraries, dossiers, frameworks, journals, and visual assets are the proprietary property of NexVoyage or its licensors and are protected by applicable intellectual property laws.',  
    'Itineraries and related materials are licensed to you for personal use only. Reproduction, redistribution, or commercial use without our prior written consent is prohibited.',  
    'You agree to hold in confidence the unlisted properties, routings, and operational details made available to you and to use them solely for your own engagement.',  
  ],  
},  
{  
  heading: '7. Data & Privacy',  
  paragraphs: [  
    'Our handling of personal data is governed by our Privacy Architecture & Data Sovereignty policy, incorporated by reference. We do not sell client data. Sharing with third-party security partners occurs only through confidential, need-to-know data sharing and applicable client consent protocols.',  
  ],  
},  
{  
  heading: '8. Governing Law & Confidential Arbitration',  
  paragraphs: [  
    'These Terms are governed by the laws of the State of New York, without regard to conflict-of-law principles. Any dispute arising out of or relating to these Terms or any engagement shall be resolved exclusively through confidential, binding arbitration conducted in New York, New York, under rules agreed by the parties, to protect client anonymity and reputational integrity.',  
  ],  
},  
{  
  heading: '9. Contact / Data Protection Officer',  
  paragraphs: [  
    'For questions regarding these Terms, our privacy practices, or to exercise data rights, contact:',  
    'NexVoyage Collective — Privacy Contact / Data Protection Officer',  
    'Email: privacy@nexvoyagecollective.com',  
  ],  
},  
],  
};

export default function TermsPage() {  
return <LegalDocument document={document} />;  
}  
