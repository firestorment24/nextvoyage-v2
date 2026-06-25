import { list } from '@vercel/blob';  
import 'dotenv/config';

const { blobs } = await list({ prefix: 'properties/' });

for (const blob of blobs) {  
  console.log(blob.pathname, '→', blob.url);  
}

console.log(`\nTotal: ${blobs.length} blobs`); 
