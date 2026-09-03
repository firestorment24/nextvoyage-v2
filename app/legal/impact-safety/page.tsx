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
