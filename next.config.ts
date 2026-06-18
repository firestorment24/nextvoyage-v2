/** @type {import('next').NextConfig} */  
const nextConfig = {  
images: {  
  remotePatterns: [  
    {  
      protocol: 'https',  
      hostname: 'dynamic-media-cdn.tripadvisor.com',  
      pathname: '/**',  
    },  
    {  
      protocol: 'https',  
      hostname: 'www.aman.com',  
      pathname: '/**',  
    },  
    {  
      protocol: 'https',  
      hostname: 'images.luxuryhotelsmag.com',  
      pathname: '/**',  
    },  
    {  
      protocol: 'https',  
      hostname: 'www.ourhabitas.com',  
      pathname: '/**',  
    },  
    {  
      protocol: 'https',  
      hostname: 'images.unsplash.com',  
      pathname: '/**',  
    }  

     {  
      protocol: 'https',  
      hostname: 'cdn.marblism.com',  
      pathname: '/**',  
    }  
  ],  
},  
};

export default nextConfig;  
