export interface Property {  
  id: string;  
  name: string;  
  location: string;  
  image: string;  
  intel: {  
    positioning: string;  
    category: string;  
    memberBenefits: string[];  
  };  
}

export const PROPERTY_DATA: Property[] = [  
  {  
    id: "NV-LDR-001",  
    name: "Kilchoan Estate",  
    location: "Knoydart, Scotland",  
    image: "https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=2000",  
    intel: {  
      positioning: "The Last Wilderness of the Highlands. Off-grid industrial luxury.",  
      category: "Frontier Estate",  
      memberBenefits: ["Private ghillie service", "Chartered rib transfers", "Helipad access"]  
    }  
  },  
  {  
    id: "NV-LDR-002",  
    name: "Pongwe Island",  
    location: "Zanzibar, Tanzania",  
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000",  
    intel: {  
      positioning: "Private island isolation. Low-tide reef walks and raw coral aesthetics.",  
      category: "Island Outpost",  
      memberBenefits: ["Private dhow sunset cruise", "In-villa reef spa", "Sandbank picnic"]  
    }  
  },  
  {  
    id: "NV-LDR-013",  
    name: "Setouchi Retreat Aonagi",  
    location: "Matsuyama, Japan",  
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2000",  
    intel: {  
      positioning: "Tadao Ando minimalism. High-altitude concrete and water silence.",  
      category: "Architectural Vault",  
      memberBenefits: ["Private gallery tour", "OMAKASE in-suite", "Zen garden access"]  
    }  
  }  
  // ... (Add the remaining 26 properties here)  
];

// Backward compatibility for the Archive page  
export const properties = PROPERTY_DATA;  
