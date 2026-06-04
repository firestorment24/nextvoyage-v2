import Navigation from '../Navigation'; // One level up from /sanctuaries/ to /app/  
import Footer from '../Footer';         // One level up  
// I'm leaving the data out for one more second to make sure the components link up first.

export default function SanctuariesPage() {  
  return (  
    <main className="p-20">  
      <Navigation />  
      <h1 className="text-4xl font-serif">Components Found</h1>  
      <Footer />  
    </main>  
  );  
}  
