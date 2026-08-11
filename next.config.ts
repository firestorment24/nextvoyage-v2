import type { NextConfig } from 'next';

const nextConfig: NextConfig = {  
  images: {  
    remotePatterns: [  
      {  
        protocol: 'https',  
        hostname: '*.private.blob.vercel-storage.com',  
      },  
      {  
        protocol: 'https',  
        hostname: '*.public.blob.vercel-storage.com',  
      },  
    ],  
  },  
};

export default function(phase: string) {  
  return function() {  
    return (  
      nextConfig  
    )  
  }  
}  
