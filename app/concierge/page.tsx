import Navigation from '../Navigation'  
import Footer from '../components/Footer'

export default function ConciergePage() {  
return (  
  <main className="min-h-screen bg-[#0A0A0A] text-white font-light selection:bg-white/20">  
    <Navigation />

    <section className="pt-40 pb-32 px-6 max-w-4xl mx-auto">  
      {/* Header - Editorial Style */}  
      <header className="mb-20">  
        <p className="text-[10px] uppercase tracking-[0.5em] mb-6 opacity-40">Direct Access</p>  
        <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mb-8 leading-none">  
          Initiate <span className="italic">Discovery</span>  
        </h1>  
        <p className="text-xl opacity-60 font-serif leading-relaxed">  
          Our concierge service is a high-touch, human-centric engine. To begin, share the coordinates of your next objective.  
        </p>  
      </header>

      {/* The Inquiry Flow - Minimalist Form */}  
      <form className="space-y-20">  
        {/* Step 1: The Objective */}  
        <div className="group">  
          <label className="block text-[10px] uppercase tracking-[0.3em] opacity-30 mb-8 group-focus-within:opacity-100 transition-opacity">  
            01 / Primary Objective  
          </label>  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
            {['Private Sanctuary', 'Strategic Travel', 'Corporate Retreat', 'Relocation'].map((option) => (  
              <button   
                key={option}  
                type="button"  
                className="text-left px-8 py-6 border border-white/10 hover:border-white/40 transition-all text-sm tracking-widest hover:bg-white/5"  
              >  
                {option}  
              </button>  
            ))}  
          </div>  
        </div>

        {/* Step 2: The Context */}  
        <div className="group">  
          <label className="block text-[10px] uppercase tracking-[0.3em] opacity-30 mb-8 group-focus-within:opacity-100 transition-opacity">  
            02 / Narrative & Requirements  
          </label>  
          <textarea   
            placeholder="Tell us about the atmosphere, the logistics, or the specific sanctuary archetype you're targeting..."  
            className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors text-lg font-serif italic placeholder:opacity-20 min-h-[150px] resize-none"  
          />  
        </div>

        {/* Step 3: Identity */}  
        <div className="group grid grid-cols-1 md:grid-cols-2 gap-12">  
          <div className="space-y-8">  
            <label className="block text-[10px] uppercase tracking-[0.3em] opacity-30 group-focus-within:opacity-100 transition-opacity">  
              03 / Contact Identity  
            </label>  
            <input   
              type="text"   
              placeholder="Full Name"  
              className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors text-sm uppercase tracking-widest placeholder:opacity-20"  
            />  
            <input   
              type="email"   
              placeholder="Private Email Address"  
              className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors text-sm uppercase tracking-widest placeholder:opacity-20"  
            />  
          </div>  
            
          <div className="flex flex-col justify-end">  
            <button   
              type="submit"   
              className="w-full py-6 bg-white text-black text-[10px] uppercase tracking-[0.5em] hover:bg-neutral-200 transition-all font-bold"  
            >  
              Request Consultation  
            </button>  
            <p className="mt-4 text-[9px] opacity-30 uppercase tracking-widest text-center">  
              All inquiries are strictly confidential.  
            </p>  
          </div>  
        </div>  
      </form>  
    </section>

    <Footer />  
  </main>  
)  
}  
