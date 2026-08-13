import type { MetadataRoute } from 'next'

const BASE_URL = 'https://nexvoyagecollective.com'

export default function sitemap(): MetadataRoute.Sitemap {  
const staticRoutes = [  
'',  
'/archive',  
'/journal',  
'/journeys',  
'/founder',  
'/services',  
'/mandate',  
'/perspective',  
'/selected-engagements',  
'/events',  
'/how-it-works',  
'/collective',  
'/roi-of-rest',  
'/safety',  
'/inquiry',  
'/privacy',  
'/privacy-policy',  
'/terms',  
'/terms-and-conditions',  
].map((route) => ({  
url: `${BASE_URL}${route}`,  
lastModified: new Date('2026-08-13'),  
changeFrequency: 'monthly' as const,  
priority: route === '' ? 1 : 0.8,  
}))

return staticRoutes  
}  
 
