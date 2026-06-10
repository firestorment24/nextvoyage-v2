13:08:22.897 Running build in Washington, D.C., USA (East) – iad1
13:08:22.897 Build machine configuration: 4 cores, 8 GB
13:08:23.097 Cloning github.com/firestorment24/nextvoyage-v2 (Branch: main, Commit: 85db928)
13:08:23.833 Cloning completed: 736.000ms
13:08:25.532 Restored build cache from previous deployment (GzzTgfMwFqJgCwvWRHdp7xoupnWy)
13:08:25.747 Running "vercel build"
13:08:25.761 Vercel CLI 54.10.2
13:08:25.957 Installing dependencies...
13:08:28.549 
13:08:28.549 up to date in 2s
13:08:28.550 
13:08:28.550 169 packages are looking for funding
13:08:28.550   run `npm fund` for details
13:08:28.577 Detected Next.js version: 16.2.4
13:08:28.582 Running "npm run build"
13:08:28.673 
13:08:28.673 > nextjs@0.1.0 build
13:08:28.674 > next build
13:08:28.674 
13:08:29.298   Applying modifyConfig from Vercel
13:08:29.311 ▲ Next.js 16.2.4 (Turbopack)
13:08:29.311 
13:08:29.347   Creating an optimized production build ...
13:08:34.639 ✓ Compiled successfully in 5.0s
13:08:34.640   Running TypeScript ...
13:08:34.775 
13:08:34.776   We detected TypeScript in your project and reconfigured your tsconfig.json file for you.
13:08:34.776   The following suggested values were added to your tsconfig.json. These values can be changed to fit your project's needs:
13:08:34.776 
13:08:34.776   	- include was updated to add '.next/dev/types/**/*.ts'
13:08:34.776 
13:08:34.776   The following mandatory changes were made to your tsconfig.json:
13:08:34.776 
13:08:34.776   	- jsx was set to react-jsx (next.js uses the React automatic runtime)
13:08:34.776 
13:08:37.521 Failed to type check.
13:08:37.521 
13:08:37.521 ./components/PropertyBuckets.tsx:31:27
13:08:37.521 Type error: Property 'imageUrl' does not exist on type 'Bucket'.
13:08:37.521 
13:08:37.521   29 |           >  
13:08:37.521   30 |             <img   
13:08:37.521 > 31 |               src={bucket.imageUrl}   
13:08:37.521      |                           ^
13:08:37.521   32 |               alt={bucket.name}   
13:08:37.522   33 |               className="absolute inset-0 w-full h-full object-cover opacity-50 group-hove...
13:08:37.522   34 |             />  
13:08:37.550 Next.js build worker exited with code: 1 and signal: null
13:08:37.587 Error: Command "npm run build" exited with 1
