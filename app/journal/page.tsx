import { JournalHub } from '@/components/JournalHub';

export default function JournalPage() {  
  return (  
    <main className="min-h-screen bg-black text-white px-6 py-24">  
      <header className="max-w-4xl mb-16">  
        <h1 className="text-5xl font-light tracking-tight mb-4">The Journal</h1>  
        <p className="text-zinc-400 text-lg">Tactical intelligence and seasonal reports from the NexVoyage Collective.</p>  
      </header>  
        
      <JournalHub />  
    </main>  
  );  
}  
