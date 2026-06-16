// lib/data/perspectives.ts

export interface PerspectivePost {  
  id: string;  
  title: string;  
  subtitle: string;  
  category: 'Manifesto' | 'Protocol' | 'Orchestration';  
  date: string;  
  size: 'small' | 'medium' | 'large' | 'tall';  
  image: string;  
}

export const PERSPECTIVE_POSTS: PerspectivePost[] = [  
  {  
    id: 'ceo-reset-bcmc-2026',  
    title: 'The CEO Reset: BCMC 2026',  
    subtitle: 'A manifesto on high-performance recovery and the architecture of elite downtime.',  
    category: 'Manifesto',  
    date: 'June 2026',  
    size: 'large',  
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'  
  },  
  {  
    id: 'suncoast-jazz-protocol',  
    title: 'Suncoast Jazz Festival',  
    subtitle: 'The orchestration of sound and setting on the Gulf Coast.',  
    category: 'Protocol',  
    date: 'May 2026',  
    size: 'medium',  
    image: 'https://images.unsplash.com/photo-1514525253361-bee8718a300c?auto=format&fit=crop&q=80&w=800'  
  },  
  {  
    id: 'gsx-security-serenity',  
    title: 'GSX 2026: Security & Serenity',  
    subtitle: 'Advanced logistics for the global security exchange.',  
    category: 'Protocol',  
    date: 'April 2026',  
    size: 'tall',  
    image: 'https://images.unsplash.com/photo-1557597774-9d2739f85a94?auto=format&fit=crop&q=80&w=600'  
  },  
  {  
    id: 'rosewood-retreat-logic',  
    title: 'Rosewood Retreats',  
    subtitle: 'Defining the new standard of ultra-luxury hospitality.',  
    category: 'Orchestration',  
    date: 'March 2026',  
    size: 'small',  
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400'  
  },  
  {  
    id: 'built-world-cretech',  
    title: 'The Built World: CREtech',  
    subtitle: 'Where property technology meets physical sanctuary.',  
    category: 'Orchestration',  
    date: 'February 2026',  
    size: 'medium',  
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'  
  },  
  {  
    id: 'summer-peak-protocol',  
    title: 'The Summer Peak Protocol',  
    subtitle: 'Mitigating friction during the highest-volume travel windows.',  
    category: 'Protocol',  
    date: 'January 2026',  
    size: 'medium',  
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800'  
  },  
  {  
    id: 'performance-pulse-ledger',  
    title: 'The Performance Pulse',  
    subtitle: 'Real-time intelligence for the nomadic executive.',  
    category: 'Manifesto',  
    date: 'December 2025',  
    size: 'tall',  
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=600'  
  },  
  {  
    id: 'beachfront-bebop-logic',  
    title: 'Beachfront Bebop',  
    subtitle: 'Jazz, tides, and the orchestration of coastal gatherings.',  
    category: 'Orchestration',  
    date: 'November 2025',  
    size: 'large',  
    image: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&q=80&w=1200'  
  },  
  {  
    id: 'impact-ledger-2026',  
    title: 'The Impact Ledger',  
    subtitle: 'Measuring the ROI of strategic disconnection.',  
    category: 'Manifesto',  
    date: 'October 2025',  
    size: 'small',  
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400'  
  },  
  {  
    id: 'engineering-downtime-protocol',  
    title: 'Engineering Downtime',  
    subtitle: 'A technical guide to scheduled recovery.',  
    category: 'Protocol',  
    date: 'September 2025',  
    size: 'small',  
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=400'  
  },  
  {  
    id: 'elite-circuit-2026',  
    title: 'The 2026 Elite Circuit',  
    subtitle: 'Mapping the events that define the global calendar.',  
    category: 'Orchestration',  
    date: 'August 2025',  
    size: 'medium',  
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'  
  },  
  {  
    id: 'art-of-gathering',  
    title: 'The Art of the Gathering',  
    subtitle: 'The logistics behind unforgettable group dynamics.',  
    category: 'Orchestration',  
    date: 'July 2025',  
    size: 'tall',  
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600'  
  },  
  {  
    id: 'atlanta-directive',  
    title: 'The Atlanta Directive',  
    subtitle: 'Security protocols for the professional in transit.',  
    category: 'Protocol',  
    date: 'June 2025',  
    size: 'medium',  
    image: 'https://images.unsplash.com/photo-1575917649705-5b59afe1c77e?auto=format&fit=crop&q=80&w=800'  
  },  
  {  
    id: 'fort-worth-syndicate',  
    title: 'The Fort Worth Syndicate',  
    subtitle: 'Fundraising, finance, and the future of Texas luxury.',  
    category: 'Orchestration',  
    date: 'May 2025',  
    size: 'small',  
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=400'  
  },  
  {  
    id: 'summit-protocol-high',  
    title: 'The Summit Protocol',  
    subtitle: 'A framework for high-altitude negotiations.',  
    category: 'Protocol',  
    date: 'April 2025',  
    size: 'large',  
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200'  
  },  
  {  
    id: 'fort-worth-grid',  
    title: 'The Fort Worth Grid',  
    subtitle: 'Reliability engineering applied to luxury travel.',  
    category: 'Protocol',  
    date: 'March 2025',  
    size: 'small',  
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=400'  
  },  
  {  
    id: 'journey-manifesto-core',  
    title: 'The Journey Manifesto',  
    subtitle: 'How we design for the traveler who has seen everything.',  
    category: 'Manifesto',  
    date: 'February 2025',  
    size: 'medium',  
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=800'  
  },  
  {  
    id: 'ai-infrastructure-blueprint',  
    title: 'The AI Infrastructure Blueprint',  
    subtitle: 'Predictive logistics and the next wave of travel tech.',  
    category: 'Protocol',  
    date: 'January 2025',  
    size: 'tall',  
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600'  
  },  
  {  
    id: 'berkshires-orchestration',  
    title: 'The Berkshires Orchestration',  
    subtitle: 'Seasonal sanctuaries in the Northeast.',  
    category: 'Orchestration',  
    date: 'December 2024',  
    size: 'small',  
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400'  
  },  
  {  
    id: 'momentum-manifesto',  
    title: 'The Momentum Manifesto',  
    subtitle: 'Maintaining velocity without sacrificing presence.',  
    category: 'Manifesto',  
    date: 'November 2024',  
    size: 'medium',  
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800'  
  }  
];  
