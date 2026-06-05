/**  
* SANCTUARIES DATA - V4 (Fleshed Out Copy)  
* High-intent descriptions for the 12 primary categories.  
*/

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
}

export const SANCTUARIES_DATA: Sanctuary[] = [  
 {  
   id: '1',  
   slug: 'the-metropolitan',  
   name: 'The Metropolitan',  
   location: 'Global Hubs',  
   tagline: 'The city, redefined.',  
   categoryDescription: 'Precision living in the world’s most vital urban centers. High-altitude estates overlooking the pulse of the metropolis.',  
   heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80',  
   atmosphere: 'Kinetic',  
   highlights: ['Penthouse Access', 'Private Concierge', 'Secret Entrances'],  
   propertyCount: 12  
 },  
 {  
   id: '2',  
   slug: 'the-island',  
   name: 'The Island',  
   location: 'Archipelagos',  
   tagline: 'Boundless horizons.',  
   categoryDescription: 'Untethered isolation on private archipelagos. Where the ocean meets absolute discretion and shoreline privacy.',  
   heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80',  
   atmosphere: 'Boundless',  
   highlights: ['Marine Sanctuaries', 'Private Seaplane Docks', 'Zero-Light Pollution'],  
   propertyCount: 8  
 },  
 {  
   id: '3',  
   slug: 'the-fortress',  
   name: 'The Fortress',  
   location: 'Historical Strongholds',  
   tagline: 'Heritage of security.',  
   categoryDescription: 'Restored historical strongholds offering unparalleled protection, bastion walls, and timeless architectural grandeur.',  
   heroImage: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&q=80',  
   atmosphere: 'Timeless',  
   highlights: ['Reinforced Security', 'Vaulted Cellars', 'Subterranean Access'],  
   propertyCount: 5  
 },  
 {  
   id: '4',  
   slug: 'the-safari',  
   name: 'The Safari',  
   location: 'Savannas',  
   tagline: 'The wild, curated.',  
   categoryDescription: 'Immersive wilderness encounters in remote savannas, where the raw beauty of nature meets refined expedition comfort.',  
   heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',  
   atmosphere: 'Primal',  
   highlights: ['Expert Tracking', 'Open-Air Dining', 'Private Wildlife Reserves'],  
   propertyCount: 7  
 },  
 {  
   id: '5',  
   slug: 'the-alpine',  
   name: 'The Alpine',  
   location: 'Mountain Ranges',  
   tagline: 'Peak existence.',  
   categoryDescription: 'High-altitude sanctuaries designed for the pursuit of verticality. Crisp air, heli-skiing, and monumental vistas.',  
   heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80',  
   atmosphere: 'Ethereal',  
   highlights: ['Heli-Skiing Access', 'Thermal Recovery', 'Oxygen-Rich Suites'],  
   propertyCount: 10  
 },  
 {  
   id: '6',  
   slug: 'the-oasis',  
   name: 'The Oasis',  
   location: 'Arid Lands',  
   tagline: 'Silence in the sand.',  
   categoryDescription: 'Hidden water-fed sanctuaries in the heart of the desert. A masterclass in survival, stillness, and stellar views.',  
   heroImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80',  
   atmosphere: 'Still',  
   highlights: ['Dune Trekking', 'Rare Botanical Gardens', 'Desert Starlight'],  
   propertyCount: 6  
 },  
 {  
   id: '7',  
   slug: 'the-nautical',  
   name: 'The Nautical',  
   location: 'Deep Waters',  
   tagline: 'Master of the tides.',  
   categoryDescription: 'Floating luxury without boundaries. Elite maritime estates and submersible living for the deep-sea enthusiast.',  
   heroImage: 'https://images.unsplash.com/photo-1502920338823-20516613398c?auto=format&fit=crop&q=80',  
   atmosphere: 'Fluid',  
   highlights: ['Underwater Viewing', 'Yacht-Integrated Docks', 'Hydrofoil Transfers'],  
   propertyCount: 4  
 },  
 {  
   id: '8',  
   slug: 'the-celestial',  
   name: 'The Celestial',  
   location: 'Observed Horizons',  
   tagline: 'Beyond the atmosphere.',  
   categoryDescription: 'The ultimate frontier. High-altitude observatories and space-adjacent living for those who look upward.',  
   heroImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80',  
   atmosphere: 'Infinite',  
   highlights: ['Zero-G Chambers', 'Star-Charting Decks', 'Specialized Training'],  
   propertyCount: 3  
 },  
 {  
   id: '9',  
   slug: 'the-cinematic',  
   name: 'The Cinematic',  
   location: 'Media Capitals',  
   tagline: 'Life as art.',  
   categoryDescription: 'Properties that have defined the screen. Historically significant estates that serve as backdrops for legends.',  
   heroImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80',  
   atmosphere: 'Iconic',  
   highlights: ['Private Screening Rooms', 'Film Set History', 'Production Support'],  
   propertyCount: 9  
 },  
 {  
   id: '10',  
   slug: 'the-stadium',  
   name: 'The Stadium',  
   location: 'Cultural Arenas',  
   tagline: 'Front row, always.',  
   categoryDescription: 'Exclusive residential integration within the world’s most iconic sports and entertainment arenas.',  
   heroImage: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80',  
   atmosphere: 'Electric',  
   highlights: ['VVIP Access', 'Player-Level Views', 'Private Event Hosting'],  
   propertyCount: 11  
 },  
 {  
   id: '11',  
   slug: 'the-arctic',  
   name: 'The Arctic',  
   location: 'Glacial Frontiers',  
   tagline: 'Purity of frost.',  
   categoryDescription: 'Monumental ice-bound estates in the far north. A testament to human endurance and luxury in total isolation.',  
   heroImage: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80',  
   atmosphere: 'Prismatic',  
   highlights: ['Aurora Viewing', 'Glacial Trekking', 'Thermal Architecture'],  
   propertyCount: 3  
 },  
 {  
   id: '12',  
   slug: 'the-rural',  
   name: 'The Rural',  
   location: 'Country Estates',  
   tagline: 'Earthly elegance.',  
   categoryDescription: 'Expansive agricultural estates and vineyard retreats. A return to the land, elevated by elite craftsmanship.',  
   heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80',  
   atmosphere: 'Grounded',  
   highlights: ['Estate Harvests', 'Equestrian Trails', 'Farm-to-Table Dining'],  
   propertyCount: 15  
 }  
];

export const sanctuaries = SANCTUARIES_DATA;  
