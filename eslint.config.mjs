cat > list-blobs.mjs << 'EOF'  
import { list } from '@vercel/blob';  
import dotenv from 'dotenv';  
dotenv.config({ path: '.env.local' });

const { blobs } = await list({ prefix: 'properties/' });

for (const blob of blobs) {  
  console.log(blob.pathname, '→', blob.url);  
}

console.log(`\nTotal: ${blobs.length} blobs`);  
EOF  
