import LegalDocument, {  
  LegalDocumentData,  
} from '@/components/LegalDocument';

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
3. Replace app/legal/terms/page.tsx
import LegalDocument, {  
  LegalDocumentData,  
} from '@/components/LegalDocument';

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
    'These Terms & Conditions (“Terms”) govern the relationship between NexVoyage Collective (“NexVoyage,” “we,” “us”) and each client (“you,” “Client”). By engaging our services or accessing our digital properties, you accept these Terms.',  
    'NexVoyage Collective is a boutique private travel office. We serve as the architect and steward of your journey — a guardian of time — coordinating bespoke travel planning, concierge services, private aviation and maritime charters, estate buyouts, and safety recommendations through our service tiers.',  
  ],  
  sections: [  
    {  
      heading: '1. Scope of Services',  
      paragraphs: [  
        'NexVoyage provides advisory and execution services including:',  
      ],  
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
        'Where third-party suppliers issue refunds or credits, NexVoyage will communicate the applicable process and timing. Any refund remains subject to the supplier’s terms.',  
      ],  
    },  
    {  
      heading: '5. Liability',  
      bullets: [  
        'NexVoyage is not liable for the acts, omissions, negligence, insolvency, schedule changes, or failures of third-party suppliers, operators, security firms, venues, carriers, hotels, guides, or other service providers.',  
        'Travel — particularly in remote, alpine, maritime, wildlife, and other high-stakes environments — involves inherent risks. Service recommendations and coordination are guidance, not guarantees of safety or outcome.',  
        'To the fullest extent permitted by law, NexVoyage’s aggregate liability arising out of or relating to these Terms or any engagement shall not exceed the total fees paid by the client for the specific engagement giving rise to the claim.',  
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
4. Replace app/legal/vetting/page.tsx
import LegalDocument, {  
  LegalDocumentData,  
} from '@/components/LegalDocument';

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
        'The collective network: Referrals may assist with understanding a prospective client’s expectations and operating preferences.',  
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
5. Replace app/legal/impact-safety/page.tsx
import LegalDocument, {  
  LegalDocumentData,  
} from '@/components/LegalDocument';

export const metadata = {  
  title: 'Impact & Security Architecture — NexVoyage Collective',  
  description:  
    'Security coordination, risk mitigation, private transport oversight, and environmental stewardship.',  
};

const document: LegalDocumentData = {  
  protocol: 'Protocol 04',  
  title: 'The NexVoyage Standard: Impact & Security Architecture',  
  description:  
    'Risk mitigation, private transport oversight, responsible stewardship, and destination integrity.',  
  effectiveDate: 'June 10, 2026',  
  lastUpdated: 'June 10, 2026',  
  introduction: [  
    'At NexVoyage Collective, we believe that global access carries a responsibility to preserve the world’s most exclusive and fragile environments. Our approach to security and stewardship is designed to be quiet, proportionate, and integrated into the journey.',  
  ],  
  sections: [  
    {  
      heading: '1. Security Architecture',  
      paragraphs: [  
        'Security recommendations and coordination are developed in response to the destination, itinerary, client requirements, and advice from appropriately qualified providers.',  
      ],  
      bullets: [  
        'Vetted partnerships: We seek to work with security professionals and transport providers who understand the requirements of high-net-worth clients and confidential travel.',  
        'Risk-aware itineraries: Journey planning considers current conditions, local guidance, transport reliability, medical access, communications, and emergency procedures.',  
        'Confidential, need-to-know data sharing: Client information is provided only to the partners who require it to deliver an agreed service.',  
      ],  
    },  
    {  
      heading: '2. Impact Stewardship',  
      paragraphs: [  
        'We prioritize partnerships with artisans, boutique estates, local leaders, conservation organizations, and suppliers who contribute to the preservation of cultural and natural environments.',  
      ],  
      bullets: [  
        'Legacy preservation: We favor experiences and suppliers that respect heritage, local communities, and cultural custodianship.',  
        'Responsible logistics: Where practical, we facilitate efficient, low-disruption transport and operational planning while maintaining the client’s comfort and safety requirements.',  
      ],  
    },  
    {  
      heading: '3. Wilderness & Expedition Risk',  
      paragraphs: [  
        'High alpine, remote maritime, wildlife, polar, and other expedition environments carry inherent risks. Where available and appropriate, itineraries may include local emergency procedures, satellite communications, evacuation planning, insurance requirements, and qualified expedition leadership.',  
        'These arrangements reduce risk but cannot eliminate it. The underlying operator’s terms, safety procedures, and limitations remain applicable.',  
      ],  
    },  
    {  
      heading: '4. Mutual Respect',  
      paragraphs: [  
        'The NexVoyage Standard requires a mutual commitment between the Collective and the traveler. We seek to leave destinations better than we found them, ensuring that the relationships and environments supporting today’s journeys remain available for the future.',  
      ],  
    },  
  ],  
  closing: 'NexVoyage Collective — Protect the Traveler. Preserve the World.',  
};

export default function ImpactSafetyPage() {  
  return <LegalDocument document={document} />;  
}  
6. Replace app/legal/cookies/page.tsx
import LegalDocument, {  
  LegalDocumentData,  
} from '@/components/LegalDocument';

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
        'Links to third-party websites, including scheduling or service-provider websites, may operate under those parties’ own cookie and privacy practices. NexVoyage does not control those practices and encourages visitors to review the relevant third-party policies.',  
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
The five pages now use Linda’s consolidated text, with the internal counsel-review notes removed before publication, the DPO contact standardized to privacy@nexvoyagecollective.com, and the “zero-knowledge” wording changed to confidential, need-to-know data sharing.

The build can proceed without external counsel review, as approved.

