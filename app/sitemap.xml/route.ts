import { NextResponse } from 'next/server'  


const BASE_URL = 'https://nexvoyagecollective.com'

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
]

export async function GET() {  
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>  
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">  
${staticRoutes  
  .map(  
    (route) => `  
  <url>  
    <loc>${BASE_URL}${route}</loc>  
    <lastmod>2026-08-13</lastmod>  
    <changefreq>monthly</changefreq>  
    <priority>${route === '' ? '1.0' : '0.8'}</priority>  
  </url>`  
  )  
  .join('')}  
</urlset>`

return new NextResponse(sitemapXml, {  
  headers: {  
    'Content-Type': 'application/xml',  
    'Cache-Control': 'public, max-age=3600, s-maxage=86400',  
  },  
})  
}  
