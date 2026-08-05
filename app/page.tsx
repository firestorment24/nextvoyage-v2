{/* Selected Engagements Preview */}  
<section className="py-24 border-t border-white/5">  
  <div className="max-w-7xl mx-auto px-6">  
    <div className="flex justify-between items-end mb-16">  
      <div>  
        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">  
          The Record  
        </span>  
        <h2 className="text-white/80 text-3xl md:text-4xl font-serif font-light mt-3">  
          Selected Engagements  
        </h2>  
      </div>  
      <Link  
        href="/selected-engagements"  
        className="text-white/60 text-xs uppercase tracking-widest border-b border-[#D4AF37] pb-1 hover:text-white transition-colors font-sans"  
      >  
        View all engagements →  
      </Link>  
    </div>  
    <div className="grid md:grid-cols-3 gap-10">  
      {[  
        {  
          title: "Multi-Generational Japan",  
          outcome: "The grandparents attended every activity. The family has since booked three additional trips with us."  
        },  
        {  
          title: "Last-Minute Alpine Rebook",  
          outcome: "A better experience than the original booking at the same cost. Two referrals."  
        },  
        {  
          title: "Private Anniversary, Amalfi Coast",  
          outcome: "Confirmed within three days. Described as 'the most seamless trip we've ever taken.'"  
        }  
      ].map((item, i) => (  
        <div key={i} className="border-t border-white/10 pt-8 space-y-4">  
          <span className="text-white/20 text-[10px] font-mono">  
            {String(i + 1).padStart(2, '0')}  
          </span>  
          <h3 className="text-white text-lg font-light tracking-tight">  
            {item.title}  
          </h3>  
          <p className="text-white/50 text-sm leading-relaxed font-sans font-light">  
            &ldquo;{item.outcome}&rdquo;  
          </p>  
          <Link  
            href="/selected-engagements"  
            className="inline-block text-[#D4AF37] text-[10px] uppercase tracking-widest font-sans hover:text-white transition-colors"  
          >  
            Read full brief →  
          </Link>  
        </div>  
      ))}  
    </div>  
  </div>  
</section>  
