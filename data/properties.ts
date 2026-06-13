export interface Property {  
  id: string;  
  serial: string;  
  name: string;  
  location: string;  
  niche: string;  
  profile: 'Core Pillar' | 'Atmospheric' | 'Active & Seasonal';  
  image: string;  
  highlight: string;  
  status?: string;  
  legalLink?: boolean;  
}

export const PROPERTY_DATA: Property[] = [  
  {  
    id: 'nv-ldr-001',  
    serial: 'NV-LDR-001',  
    name: 'Aman New York',  
    location: 'Manhattan, NY',  
    niche: 'Executive Sanctuary',  
    profile: 'Core Pillar',  
    image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d',  
    highlight: 'Business to Bliss: The Guardian Layer of Corporate Travel.',  
  },  
  // ... rest of your 19 properties  
];

// COMPATIBILITY EXPORT: This fixes the build errors in /properties pages  
export const properties = PROPERTY_DATA;  
