export interface Property {  
  id: string;  
  name: string;  
  location: string;  
  image: string;  
  hook?: string;  
  sanctuaryId: string; // Temporary fix for the old build routes  
}

export const PROPERTY_DATA: Property[] = [  
  { id: '001-NYC', sanctuaryId: 'elite-ledger', name: 'Aman New York', location: 'Manhattan, USA', image: 'https://www.aman.com/sites/default/files/2022-08/Correct_Aman%20New%20York_Landscape.jpg', hook: 'The Gilded Monolith' },  
  { id: '002-ALU', sanctuaryId: 'elite-ledger', name: 'Habitas AlUla', location: 'Ashar Valley, Saudi Arabia', image: 'https://www.ourhabitas.com/wp-content/uploads/2021/12/Habitas_Al-Ula_2021_01_000008.jpg', hook: 'The Echo of the Ancients' },  
  { id: '003-VAL', sanctuaryId: 'elite-ledger', name: '7132 Hotel', location: 'Vals, Switzerland', image: 'https://i0.wp.com/sidewalkhustle.com/wp-content/uploads/2026/03/web_20230116-357a8874_final-2023-julien-l-balmer-all-rights-reserved.jpg.webp', hook: 'The Quartz Sanctum' },  
  { id: '004-COM', sanctuaryId: 'elite-ledger', name: 'Passalacqua', location: 'Lake Como, Italy', image: 'https://bamo.com/wp-content/uploads/2025/04/bamo-passalacqua-hotel-luxury-design-09-e1759344642447.jpg', hook: 'The Lake-Side Aria' },  
  { id: '005-TYO', sanctuaryId: 'elite-ledger', name: 'Bulgari Hotel', location: 'Tokyo, Japan', image: 'https://www.bulgarihotels.com/.imaging/bhr-960-jpg/dam/TOKYO-HOTEL/THE-HOTEL/DESTINATION/bulgari-hotel-tokyo-floor-terrace.jpg/jcr%3Acontent', hook: 'The Sky Ledger' },  
  { id: '006-UBU', sanctuaryId: 'elite-ledger', name: 'Capella Ubud', location: 'Bali, Indonesia', image: 'https://capellahotels.com/assets/img/site_images/ubud/ubud-home01.jpg', hook: 'The Emerald Veil' },  
  { id: '007-AMN', sanctuaryId: 'elite-ledger', name: 'Amangiri', location: 'Canyon Point, USA', image: 'https://www.aman.com/sites/default/files/2021-02/210204_AmanHero_Landscape_Amangiri.jpg', hook: 'The Desert Monolith' },  
  { id: '008-RIV', sanctuaryId: 'elite-ledger', name: 'The Maybourne Riviera', location: 'Roquebrune-Cap-Martin, France', image: 'https://library.maybourne.com/transform/aa5bed1a-fc77-49f7-a3b5-7f9625871f68/MBR-AZUR-SUITE-01-jpg?format=avif&quality=80&io=transform%3Afill%2Cwidth%3A1260%2Cheight%3A840&resolution=high', hook: 'The Azure Precipice' },  
  { id: '009-KYO', sanctuaryId: 'elite-ledger', name: 'Aman Kyoto', location: 'Kyoto, Japan', image: 'https://www.aman.com/sites/default/files/2021-02/Aman-Kyoto_Homepage_1.jpg', hook: 'The Mossy Omen' },  
  { id: '010-RED', sanctuaryId: 'elite-ledger', name: 'Six Senses Southern Dunes', location: 'Red Sea, Saudi Arabia', image: 'https://archtene.com/wp-content/uploads/2026/03/ss5.jpg', hook: 'The Red Sea Altar' },  
  { id: '011-ATH', sanctuaryId: 'elite-ledger', name: 'One&Only Aesthesis', location: 'Athens, Greece', image: 'https://assets.kerzner.com/api/public/content/8761678806934ea9a633770485289849?v=7f8a1ab2&t=w2880', hook: 'The Athenian Shore' },  
  { id: '012-VNP', sanctuaryId: 'elite-ledger', name: 'Singita Kwitonda Lodge', location: 'Volcanoes National Park, Rwanda', image: 'https://images.ctfassets.net/wds1hqrprqxb/4xlmzPUDcL43cdOmzVGWb8/85ab1d40cc609879aa8b8da6ab1237de/SVNP_LODGE_Kwitonda_Lodge_Lounge_Ross_Couper_1.jpg?w=1920&h=1080&fl=progressive&q=90&fm=jpg', hook: 'The Virunga Sentinel' }  
];

// Placeholder to satisfy the old build routes while we migrate  
export const SANCTUARIES_DATA = [  
  { id: 'elite-ledger', name: 'The Elite Ledger', properties: PROPERTY_DATA }  
];  
