import type { MetadataRoute } from 'next'

const BASE_URL = 'https://nexvoyagecollective.com'

export default function robots(): MetadataRoute.Robots {  
return {  
rules: [  
  {  
    userAgent: '*',  
    allow: '/',  
    disallow: [  
      '/admin/',  
      '/api/',  
      '/terminal/',  
      '/lead/',  
      '/manifest/',  
      '/consent/',  
      '/success/',  
      '/the-reserve.html',  
      '/ontact/',  
    ],  
  },  
],  
sitemap: `${BASE_URL}/sitemap.xml`,  
host: BASE_URL,  
}  
}  
