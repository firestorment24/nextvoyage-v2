export interface CuratedJourney {  
  slug: string;  
  title: string;  
  category: string;  
  subtitle: string;  
  location: string;  
  duration: string;  
  startingPrice: string;  
  heroImage: string;  
  summary: string;  
  bestTime: string;  
  idealLength: string;  
  targetAudience: string;  
  hotels: { name: string; description: string }[];  
  highlights: { day: string; title: string; narrative: string }[];  
  dining: string[];  
  clientFeedback?: {  
    quote: string;  
    name: string;  
    location: string;  
  };  
}  

  {  
    slug: "anguilla",  
    title: "Anguilla Beach & Villa Sanctuary",  
    // ... other fields ...  
    clientFeedback: {  
      quote: "From the moment we arrived, everything felt effortless. The transfers, the villa, the table by the water at dinner — it all flowed without us ever thinking about logistics.",  
      name: "Claire & David R.",  
      location: "New York"  
    }  
  },  
  {  
    slug: "napa-valley",  
    title: "Napa Valley Wine & Estate Journey",  
    // ... other fields ...  
    clientFeedback: {  
      quote: "The pace was exactly right. Private tastings when we wanted depth, and enough open time to just wander the valley on our own. We never once felt rushed.",  
      name: "Marcus T.",  
      location: "London"  
    }  
  },  
