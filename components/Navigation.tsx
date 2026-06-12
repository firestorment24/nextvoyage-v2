12:56:29.286 Running build in Washington, D.C., USA (East) – iad1
12:56:29.287 Build machine configuration: 4 cores, 8 GB
12:56:29.388 Cloning github.com/firestorment24/nextvoyage-v2 (Branch: main, Commit: 7e0db4d)
12:56:29.635 Cloning completed: 246.000ms
12:56:30.629 Restored build cache from previous deployment (4Pj36SdkvoUUf5poJbiHtyATpgns)
12:56:31.117 Running "vercel build"
12:56:31.131 Vercel CLI 54.12.2
12:56:31.414 Installing dependencies...
12:56:34.004 
12:56:34.004 up to date in 2s
12:56:34.004 
12:56:34.005 169 packages are looking for funding
12:56:34.005   run `npm fund` for details
12:56:34.035 Detected Next.js version: 16.2.4
12:56:34.039 Running "npm run build"
12:56:34.133 
12:56:34.133 > nextjs@0.1.0 build
12:56:34.133 > next build
12:56:34.133 
12:56:34.776   Applying modifyConfig from Vercel
12:56:34.789 ▲ Next.js 16.2.4 (Turbopack)
12:56:34.790 
12:56:34.827   Creating an optimized production build ...
12:56:41.414 
12:56:41.415 > Build error occurred
12:56:41.417 Error: Turbopack build failed with 1 errors:
12:56:41.417 ./components/Navigation.tsx:29:22
12:56:41.417 Expected '</', got ':'
12:56:41.417   27 |           className="text-[#C5A059] font-sans text-xs uppercase tracking-[0.3em]"  
12:56:41.418   28 |         >  
12:56:41.418 > 29 |           {isOpen ?  : ' Concierge '}  
12:56:41.418      |                      ^
12:56:41.418   30 |         </button>  
12:56:41.418   31 |       </nav>
12:56:41.418   32 |
12:56:41.418 
12:56:41.418 Parsing ecmascript source code failed
12:56:41.418 
12:56:41.418 Import traces:
12:56:41.418   Server Component:
12:56:41.418     ./components/Navigation.tsx
12:56:41.418     ./app/page.tsx
12:56:41.418 
12:56:41.418   Client Component Browser:
12:56:41.418     ./components/Navigation.tsx [Client Component Browser]
12:56:41.418     ./app/manifest/page.tsx [Client Component Browser]
12:56:41.418     ./app/manifest/page.tsx [Server Component]
12:56:41.418 
12:56:41.418   Client Component SSR:
12:56:41.419     ./components/Navigation.tsx [Client Component SSR]
12:56:41.419     ./app/manifest/page.tsx [Client Component SSR]
12:56:41.419     ./app/manifest/page.tsx [Server Component]
12:56:41.419 
12:56:41.419 
12:56:41.419     at <unknown> (./components/Navigation.tsx:29:22)
12:56:41.476 Error: Command "npm run build" exited with 1
