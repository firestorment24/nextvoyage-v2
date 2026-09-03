import LegalDocument, { LegalDocumentData } from '@/components/LegalDocument';

export const metadata = {  
title: 'Privacy Architecture & Data Sovereignty — NexVoyage Collective',  
description:  
  'Client privacy, confidential data handling, and data protection standards.',  
};

const document: LegalDocumentData = {  
protocol: 'Protocol 01',  
title: 'Privacy Architecture & Data Sovereignty',  
description:  
  'Stewardship of client data under strict international compliance and discretion standards.',  
effectiveDate: 'June 10, 2026',  
lastUpdated: 'June 10, 2026',  
introduction: [  
  'Privacy is not a policy at NexVoyage Collective; it is our primary architecture. We recognize that for our clientele, data is a vulnerability if not handled with absolute discretion. This document outlines our protocols for the protection of your digital and physical sovereignty.',  
],  
sections: [  
  {  
    heading: '1. Information Acquisition',  
    paragraphs: [  
      'We collect only the data essential for the execution of high-security itineraries.',  
    ],  
    bullets: [  
      'Sovereign identifiers: Encrypted storage of government-issued credentials and legal identity markers.',  
      'Behavioral information: Secure logging of travel preferences, health requirements, and lifestyle protocols to ensure seamless execution.',  
      'Security metadata: Real-time tracking data is utilized exclusively for emergency response and is purged upon the conclusion of the journey.',  
    ],  
  },  
  {  
    heading: '2. Secure Execution',  
    paragraphs: [  
      'Client information is shared only through confidential, need-to-know data sharing with partners cleared through our Sanctuary Protocol vetting process.',  
      'Information is disseminated only to partners who require the minimum data necessary for service fulfillment. Your full client profile is not disclosed where it is not needed.',  
    ],  
  },  
  {  
    heading: '3. Data Purging',  
    paragraphs: [  
      'We maintain a lean data footprint. Itineraries and sensitive preference logs are moved to cold storage or permanently erased according to the applicable client retention protocol and operational requirements.',  
    ],  
  },  
  {  
    heading: '4. Client Rights',  
    paragraphs: [  
      'You maintain control over your personal data. Requests for data access, correction, restriction, portability, or deletion are reviewed and prioritized by our privacy team, subject to applicable law and any legal or operational retention requirements.',  
    ],  
  },  
  {  
    heading: '5. Privacy Contact',  
    paragraphs: [  
      'For questions or concerns regarding this Client Privacy Policy or our data-handling practices, contact:',  
      'NexVoyage Collective — Privacy Contact / Data Protection Officer',  
      'Email: privacy@nexvoyagecollective.com',  
    ],  
  },  
],  
closing: 'NexVoyage Collective — Discretion by Design.',  
};

export default function PrivacyPage() {  
return <LegalDocument document={document} />;  
}  
