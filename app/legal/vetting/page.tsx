import LegalDocument, { LegalDocumentData } from '@/components/LegalDocument';

export const metadata = {  
  title: 'The Sanctuary Protocol — NexVoyage Collective',  
  description:  
    'Client vetting, confidentiality, and discretion standards for selected engagements.',  
};

const document: LegalDocumentData = {  
  protocol: 'Protocol 03',  
  title: 'Vetting Standard: The Sanctuary Protocol',  
  description:  
    'Client vetting, financial verification, reputational alignment, and mutual confidentiality standards.',  
  effectiveDate: 'June 10, 2026',  
  lastUpdated: 'June 10, 2026',  
  introduction: [  
    'At NexVoyage Collective, we maintain a carefully managed client and supplier ecosystem. Our commitment to discretion and security requires an appropriate level of diligence for certain engagements, properties, and operational arrangements.',  
  ],  
  sections: [  
    {  
      heading: '1. Financial Verification',  
      paragraphs: [  
        'For certain high-value or specialized engagements, clients may be asked to provide reasonable evidence of financial standing. Any such process is handled discreetly and proportionately to the engagement.',  
      ],  
      bullets: [  
        'Proof of standing: Prospective clients may be required to provide an attestation from a recognized financial institution, professional adviser, or private family office.',  
        'Transaction integrity: Financial discussions and supporting information are handled through secure channels and shared only on a confidential, need-to-know basis.',  
      ],  
    },  
    {  
      heading: '2. Personal Referrals & Reputation',  
      paragraphs: [  
        'NexVoyage may receive clients through referrals, direct inquiries, professional networks, or other appropriate channels.',  
      ],  
      bullets: [  
        "The collective network: Referrals may assist with understanding a prospective client's expectations and operating preferences.",  
        'Background discretion: Where appropriate and lawful, we may conduct proportionate reputation checks to protect clients, suppliers, and the integrity of confidential arrangements.',  
      ],  
    },  
    {  
      heading: '3. Discretion Protocols',  
      bullets: [  
        'Itineraries and operational details are shared only through appropriate secure channels and only with the people or suppliers who require them.',  
        'Clients agree to maintain the confidentiality of unlisted properties, private estate locations, proprietary routings, and other confidential information made available through an engagement.',  
        'Clients must not disclose information about other clients, suppliers, or private arrangements without prior written consent.',  
      ],  
    },  
    {  
      heading: '4. Acceptance and Service Decisions',  
      paragraphs: [  
        'NexVoyage may decline or discontinue an engagement where it reasonably believes that doing so is necessary to protect client privacy, supplier relationships, legal compliance, safety, or the integrity of a confidential arrangement. We may limit the information provided about internal diligence for security and privacy reasons.',  
      ],  
    },  
  ],  
  closing: 'NexVoyage Collective — Discreet. Authoritative. Considered.',  
};

export default function VettingPage() {  
  return <LegalDocument document={document} />;  
}  
