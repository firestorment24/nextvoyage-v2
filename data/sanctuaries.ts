export interface Bucket {  
  name: string;  
  count: number;  
  description: string;  
}

export interface Sanctuary {  
  id: string;  
  slug: string;  
  name: string;  
  location: string;  
  tagline: string;  
  categoryDescription: string;  
  heroImage: string;  
  atmosphere: string;  
  highlights: string[];  
  propertyCount: number;  
  buckets: Bucket[];  
}

export const SANCTUARIES_DATA: Sanctuary[] = [  
  {  
    id: '1',  
    slug: 'metropolitan',  
    name: 'The Metropolitan',  
    location: 'Global Capitals',  
    tagline: 'The pulse of progress, refined.',  
    categoryDescription: 'High-altitude living in the world’s most influential zip codes.',  
    heroImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2000&auto=format&fit=crop',  
    atmosphere: 'Electric, authoritative, and strictly high-floor.',  
    highlights: ['Private rooftop access', 'Helipad connectivity', '24/7 Concierge'],  
    propertyCount: 42,  
    buckets: [  
      { name: 'Skyline Penthouses', count: 12, description: 'Floor-to-ceiling glass with 360-degree urban views.' },  
      { name: 'Historic Lofts', count: 8, description: 'Reimagined industrial heritage in the arts district.' },  
      { name: 'Corporate Suites', count: 22, description: 'Seamless transitions between boardroom and bedroom.' }  
    ]  
  },  
  {  
    id: '2',  
    slug: 'coastal',  
    name: 'The Coastal',  
    location: 'Maritime Borders',  
    tagline: 'Where the land meets the deep blue.',  
    categoryDescription: 'Exclusive waterfront estates and over-water architectural marvels.',  
    heroImage: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2000&auto=format&fit=crop',  
    atmosphere: 'Serene, rhythmic, and masterfully secluded.',  
    highlights: ['Deep-water docks', 'Infinity edge horizons', 'Salt-air filtration'],  
    propertyCount: 28,  
    buckets: [  
      { name: 'Private Peninsulas', count: 6, description: 'Gated land-ends with private beach access.' },  
      { name: 'Over-Water Villas', count: 14, description: 'Glass-bottomed living directly above the reef.' },  
      { name: 'Clifftop Manors', count: 8, description: 'Dramatic elevations overlooking the open ocean.' }  
    ]  
  },  
  {  
    id: '3',  
    slug: 'island',  
    name: 'The Island',  
    location: 'Remote Archipelagos',  
    tagline: 'Absolute isolation by design.',  
    categoryDescription: 'Private islands offering total sovereignty and unparalleled privacy.',  
    heroImage: 'https://images.unsplash.com/photo-1505881502353-a1986add3762?q=80&w=2000&auto=format&fit=crop',  
    atmosphere: 'Pristine, untouched, and strictly invitation-only.',  
    highlights: ['No-fly zones', 'Self-sustaining ecosystems', 'Marine sanctuaries'],  
    propertyCount: 15,  
    buckets: [  
      { name: 'Full-Island Estates', count: 4, description: 'The entire landmass is your private residence.' },  
      { name: 'Lagoon Hideaways', count: 7, description: 'Nested within protected coral rings.' },  
      { name: 'Sand-Bar Retreats', count: 4, description: 'Ephemeral luxury on shifting white sands.' }  
    ]  
  },  
  {  
    id: '4',  
    slug: 'alpine',  
    name: 'The Alpine',  
    location: 'High Altitudes',  
    tagline: 'Peak performance and thermal rest.',  
    categoryDescription: 'Ultra-luxury chalets and mountain-top glass pavilions.',  
    heroImage: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=2000&auto=format&fit=crop',  
    atmosphere: 'Crisp, monumental, and fire-warmed.',  
    highlights: ['Ski-in/Ski-out', 'Cryotherapy chambers', 'Glass-walled spas'],  
    propertyCount: 31,  
    buckets: [  
      { name: 'Summit Pavilions', count: 5, description: 'Cantilevered glass structures on the peak.' },  
      { name: 'Grand Chalets', count: 18, description: 'Traditional craftsmanship meets modern tech.' },  
      { name: 'Ice Glamp-sites', count: 8, description: 'Heated domes for aurora viewing.' }  
    ]  
  },  
  {  
    id: '5',  
    slug: 'safari',  
    name: 'The Safari',  
    location: 'Uncharted Wilds',  
    tagline: 'The primal rhythm of the plains.',  
    categoryDescription: 'High-design camps and lodges integrated into the wilderness.',  
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop',  
    atmosphere: 'Raw, organic, and vibrationally alive.',  
    highlights: ['Private game drives', 'Star-beds', 'Conservation focus'],  
    propertyCount: 22,  
    buckets: [  
      { name: 'Savannah Lodges', count: 10, description: 'Stone and thatch palaces in the tall grass.' },  
      { name: 'Treehouse Suites', count: 6, description: 'Elevated living among the ancient canopy.' },  
      { name: 'Mobile Expedition Camps', count: 6, description: 'Ultra-luxe tents following the great migration.' }  
    ]  
  },  
  {  
    id: '6',  
    slug: 'oasis',  
    name: 'The Oasis',  
    location: 'Arid Landscapes',  
    tagline: 'Liquid gold in the shifting sands.',  
    categoryDescription: 'Desert retreats where water is the ultimate luxury.',  
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',  
    atmosphere: 'Stark, mystical, and perfectly cooled.',  
    highlights: ['Thermal pools', 'Dune-side dining', 'Stargazing decks'],  
    propertyCount: 19,  
    buckets: [  
      { name: 'Dune Villas', count: 9, description: 'Architectural gems hidden in the sand waves.' },  
      { name: 'Wadi Retreats', count: 6, description: 'Built into natural canyon rock formations.' },  
      { name: 'Palm Palaces', count: 4, description: 'Lush gardens in the heart of the desert.' }  
    ]  
  },  
  {  
    id: '7',  
    slug: 'cinematic',  
    name: 'The Cinematic',  
    location: 'Cultural Epicenters',  
    tagline: 'Life, through a lens of grandeur.',  
    categoryDescription: 'Properties featured in film or designed with dramatic flair.',  
    heroImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop',  
    atmosphere: 'Narrative-driven, theatrical, and iconic.',  
    highlights: ['Private screening rooms', 'Art deco styling', 'Famous backdrops'],  
    propertyCount: 14,  
    buckets: [  
      { name: 'Film Heritage Mansions', count: 4, description: 'Recognizable locations from silver screen classics.' },  
      { name: 'Art Deco Apartments', count: 7, description: 'Glamour and symmetry in the city center.' },  
      { name: 'Avant-Garde Studios', count: 3, description: 'Experimental design for the creative elite.' }  
    ]  
  },  
  {  
    id: '8',  
    slug: 'fortress',  
    name: 'The Fortress',  
    location: 'Secure Perimeters',  
    tagline: 'Impenetrable peace.',  
    categoryDescription: 'The pinnacle of security, privacy, and architectural resilience.',  
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop',  
    atmosphere: 'Solid, reassuring, and completely private.',  
    highlights: ['Biometric access', 'Panic rooms', 'Signal shielding'],  
    propertyCount: 9,  
    buckets: [  
      { name: 'Underground Bunkers', count: 3, description: 'Subterranean luxury with full life support.' },  
      { name: 'Walled Estates', count: 4, description: 'Medieval strength meets modern comfort.' },  
      { name: 'Citadel Towers', count: 2, description: 'The highest point of defensible luxury.' }  
    ]  
  },  
  {  
    id: '9',  
    slug: 'arena',  
    name: 'The Arena',  
    location: 'Sporting Meccas',  
    tagline: 'Front row to history.',  
    categoryDescription: 'Exclusive access to the world’s greatest arenas and stadiums.',  
    heroImage: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2000&auto=format&fit=crop',  
    atmosphere: 'Vibrant, competitive, and front-row.',  
    highlights: ['Private box access', 'Athlete-grade gyms', 'Recovery suites'],  
    propertyCount: 11,  
    buckets: [  
      { name: 'Stadium Suites', count: 5, description: 'Living rooms that overlook the playing field.' },  
      { name: 'Racing Pavilions', count: 3, description: 'Trackside luxury for the motorsport elite.' },  
      { name: 'Olympic Lofts', count: 3, description: 'Heritage sites from the world’s greatest games.' }  
    ]  
  },  
  {  
    id: '10',  
    slug: 'estates',  
    name: 'The Estates',  
    location: 'Heritage Lands',  
    tagline: 'Legacy in stone and soil.',  
    categoryDescription: 'Sprawling manors and historical estates passed through generations.',  
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop',  
    atmosphere: 'Stately, timeless, and grand.',  
    highlights: ['Private vineyards', 'Equestrian facilities', 'Ancestral art'],  
    propertyCount: 25,  
    buckets: [  
      { name: 'Wine Estates', count: 12, description: 'Villas surrounded by world-class vineyards.' },  
      { name: 'Equestrian Manors', count: 8, description: 'Properties with professional-grade stables.' },  
      { name: 'Chateaus', count: 5, description: 'French-inspired grandeur in the countryside.' }  
    ]  
  },  
  {  
    id: '11',  
    slug: 'sanctuary',  
    name: 'The Sanctuary',  
    location: 'Spiritual Geographies',  
    tagline: 'Restoration of the self.',  
    categoryDescription: 'Wellness-focused retreats designed for physical and mental renewal.',  
    heroImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop',  
    atmosphere: 'Silent, fragrant, and deeply healing.',  
    highlights: ['Ayurvedic centers', 'Meditation halls', 'Mineral springs'],  
    propertyCount: 17,  
    buckets: [  
      { name: 'Zen Retreats', count: 8, description: 'Minimalist spaces for profound silence.' },  
      { name: 'Mineral Spa Villas', count: 6, description: 'Built directly over natural thermal springs.' },  
      { name: 'Forest Baths', count: 3, description: 'Glass cabins in the heart of ancient woods.' }  
    ]  
  },  
  {  
    id: '12',  
    slug: 'vault',  
    name: 'The Vault',  
    location: 'Hidden Dimensions',  
    tagline: 'Curating the extraordinary.',  
    categoryDescription: 'Spaces that house significant art, history, or collections.',  
    heroImage: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2000&auto=format&fit=crop',  
    atmosphere: 'Intellectual, curated, and museum-grade.',  
    highlights: ['Climate-controlled galleries', 'Security vaults', 'Curator services'],  
    propertyCount: 8,  
    buckets: [  
      { name: 'Gallery Residences', count: 4, description: 'Homes designed to showcase masterworks.' },  
      { name: 'Library Lofts', count: 2, description: 'Multi-story private archives for bibliophiles.' },  
      { name: 'Artifact Atriums', count: 2, description: 'Living spaces built around historical monuments.' }  
    ]  
  }  
];

export const sanctuaries = SANCTUARIES_DATA;  
