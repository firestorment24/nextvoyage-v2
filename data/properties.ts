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
  {  
    id: 'nv-ldr-002',  
    serial: 'NV-LDR-002',  
    name: 'Amangiri',  
    location: 'Canyon Point, Utah',  
    niche: 'Mountain Modern Sanctuary',  
    profile: 'Atmospheric',  
    image: 'https://images.unsplash.com/photo-1509023467864-1ecbb3f6354b',  
    highlight: 'Subliminal reset in the heart of the high desert.',  
  },  
  {  
    id: 'nv-ldr-005',  
    serial: 'NV-LDR-005',  
    name: 'Sensi Azores Nature & Spa',  
    location: 'Sao Miguel, Portugal',  
    niche: 'Torque & Tranquility',  
    profile: 'Active & Seasonal',  
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',  
    highlight: 'High-performance recovery series for the weary elite.',  
  },  
  {  
    id: 'nv-ldr-006',  
    serial: 'NV-LDR-006',  
    name: 'Hotel Amigo',  
    location: 'Brussels, Belgium',  
    niche: 'Soulful Sanctuary',  
    profile: 'Atmospheric',  
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4',  
    highlight: 'Boutique insider access with deep local soul.',  
  },  
  {  
    id: 'nv-ldr-011',  
    serial: 'NV-LDR-011',  
    name: 'Perry Lane Hotel',  
    location: 'Savannah, Georgia',  
    niche: 'Southern Gothic Sanctuary',  
    profile: 'Atmospheric',  
    image: 'https://images.unsplash.com/photo-1549918830-11ec3d403079',  
    highlight: 'Refined mystery and Savannah charm.',  
  },  
  {  
    id: 'nv-ldr-013',  
    serial: 'NV-LDR-013',  
    name: 'Cannes Private Villa',  
    location: 'Cannes, France',  
    niche: 'Autumn Riviera Sanctuary',  
    profile: 'Active & Seasonal',  
    status: 'LIMITED ACCESS',  
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077',  
    highlight: 'Seasonal focus bypassing festival chaos.',  
  },  
  {  
    id: 'nv-ldr-015',  
    serial: 'NV-LDR-015',  
    name: 'Nexus HQ Campus',  
    location: 'Global / Remote',  
    niche: 'Campus to Sanctuary',  
    profile: 'Core Pillar',  
    legalLink: true,  
    image: 'https://images.unsplash.com/photo-1523050335456-adabbf72c766',  
    highlight: 'Youth group and school administration framework.',  
  }  
  // ... Remaining properties mapped similarly  
];  
