export interface Destination {  
  slug: string;  
  title: string;  
  subtitle: string;  
  location: string;  
  region: string;  
  vibe: string;  
  bestTime: string;  
  topMustDos: string[];  
  insiderTip: string;  
  heroImage: string;  
  summary: string;  
  sanctuary?: string;  
  orchestration: string;  
  quote?: {  
    text: string;  
    attribution: string;  
  };  
  editorialHtml?: string;  
}

export const DESTINATIONS_DATA: Destination[] = [  
  {  
    slug: "amalfi",  
    title: "Amalfi & The Sorrentine Peninsula",  
    subtitle: "Clifftop Palazzos and Terraced Lemon Groves",  
    location: "Campania, Italy",  
    region: "Europe",  
    vibe: "Dramatic, aromatic, and timelessly glamorous.",  
    bestTime: "May to June or September to October",  
    topMustDos: [  
      "Private Chris Craft charter along the Faraglioni of Capri",  
      "Sunset aperitivo at Le Sirenuse overlooking Positano",  
      "Helicopter transfer directly from Naples to clifftop estate helipads"  
    ],  
    insiderTip: "Skip the coastal traffic entirely by utilizing private water limousines between Positano, Amalfi, and private coves accessible only by sea.",  
    heroImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=80",  
    summary: "Vertical cliffs plunging into lapis lazuli waters, historic lemon groves scenting the warm sea air, and legendary palazzos where old-world Italian romance reigns supreme.",  
    sanctuary: "Le Sirenuse / Il San Pietro di Positano",  
    orchestration: "Discreet helicopter arrival, private cliffside mooring coordination, and exclusive access to historic maritime villas.",  
    quote: {  
      text: "On the Amalfi coast, time doesn't slip away—it lingers, suspended between sky and sea.",  
      attribution: "NexVoyage Field Report"  
    },  
    editorialHtml: `  
      <p>The Amalfi Coast is a vertical masterpiece where pastel-tinted villages cling precariously to limestone cliffs that tumble sheer into the Tyrrhenian Sea. For the discerning traveler, true luxury here is not found in the bustling public piazzas of Positano, but in the shaded tranquility of private terraced gardens overlooking the water.</p>  
      <h3>The Architecture of Coastal Seclusion</h3>  
      <p>When navigating the Sorrentine Peninsula during high season, avoiding vehicular congestion is an art form. Our itineraries replace winding coastal highways with swift private Riva and Chris Craft water limousines, ferrying you directly from Naples airport or your private yacht mooring to hotel rock-cut elevators.</p>  
      <h3>Unlisted Access &amp; Culinary Heritage</h3>  
      <p>Beyond the celebrated terraces of Le Sirenuse and Il San Pietro, our advisory grants access to centuries-old lemon estates in Maiori and private cooking masterclasses with Michelin-starred chefs who source their ingredients from family-held clifftop plots. Every moment is choreographed for absolute privacy and effortless elegance.</p>  
    `  
  },  
  {  
    slug: "kyoto",  
    title: "Kyoto & The Japanese Alps",  
    subtitle: "Ancient Temples, Ryokan Mastery, and Silent Pines",  
    location: "Kyoto & Nagano, Japan",  
    region: "Asia",  
    vibe: "Serene, minimalist, and deeply contemplative.",  
    bestTime: "March to May (Cherry Blossoms) or October to November (Autumn Foliage)",  
    topMustDos: [  
      "Private after-hours tea ceremony at a centuries-old Zen temple",  
      "Helicopter transfer to secluded high-altitude onsen ryokan",  
      "Private curator-led viewing at Kyoto National Museum"  
    ],  
    insiderTip: "Request an early morning private opening of Ryoan-ji's Zen rock garden before the gates open to the public.",  
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=80",  
    summary: "A masterclass in quiet luxury, where moss gardens, cedar forests, and centuries of tea-ceremony tradition offer a profound recalibration of the senses.",  
    sanctuary: "Aman Kyoto / The Ritz-Carlton Kyoto",  
    orchestration: "Private temple access, master artisan introductions, and seamless luggage forwarding across bullet train networks.",  
    quote: {  
      text: "In Kyoto, silence is not merely the absence of noise—it is a tangible, architectural presence.",  
      attribution: "NexVoyage Field Report"  
    },  
    editorialHtml: `  
      <p>Kyoto is the cultural heartbeat of Japan, preserving an aesthetic philosophy rooted in wabi-sabi—the beauty of imperfection and transience. Navigating this city requires deep local relationships that unlock doors ordinarily sealed to outsiders.</p>  
      <h3>Private Temple Stewardship</h3>  
      <p>Our guests gain private entry to temple complexes closed to general tourism, accompanied by resident Zen monks who explain the meditative geometry of gravel gardens and historic temple architecture.</p>  
      <h3>The Ryokan Standard</h3>  
      <p>We curate stays in generational ryokans where multi-course kaiseki dining is served in your private tatami suite, complemented by mineral-rich onsen baths fed by pure mountain springs.</p>  
    `  
  },  
  {  
    slug: "courchevel",  
    title: "Courchevel 1850 & The French Alps",  
    subtitle: "Alpine Peaks, Three Valleys Skiing, and Michelin Gastronomy",  
    location: "Savoie, French Alps",  
    region: "Europe",  
    vibe: "Exhilarating, elite, and impeccably serviced.",  
    bestTime: "December to April",  
    topMustDos: [  
      "First tracks across Les Trois Vallées with a private Olympic ski guide",  
      "Heliskiing drop in the untouched powder bowls of the Italian border",  
      "Dinner at a three-Michelin-starred chalet paired with rare Burgundies"  
    ],  
    insiderTip: "Courchevel's altiport allows private jet and helicopter arrivals directly onto the mountain plateau, bypassing ground transfers from Geneva or Lyon.",  
    heroImage: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1600&q=80",  
    summary: "The pinnacle of alpine sophistication, uniting world-class ski domains with legendary slope-side chalets and haute cuisine.",  
    sanctuary: "Cheval Blanc Courchevel / Aman Le Mélézin",  
    orchestration: "Private altiport flight coordination, custom ski fitting in-chalet, and reserved tables at the world's finest high-altitude restaurants.",  
    quote: {  
      text: "Above the clouds in Courchevel, the air is crisp, the snow is pristine, and every logistical friction has vanished.",  
      attribution: "NexVoyage Field Report"  
    },  
    editorialHtml: `  
      <p>Courchevel 1850 represents the absolute summit of alpine luxury. Here, ski-in/ski-out chalets come fully staffed with private chefs, butler teams, and in-house ski instructors.</p>  
      <h3>The Three Valleys Domain</h3>  
      <p>With direct access to the largest ski area in the world, our guests explore boundless terrain accompanied by elite guides who know every hidden powder stash and sun-drenched mountain terrace.</p>  
    `  
  }  
  // ... (and remaining destinations in DESTINATIONS_DATA)  
];  
