<header className="fixed top-0 left-0 right-0 z-[100] px-6 py-8 flex justify-between items-center mix-blend-difference">  
  {/* LOGO */}  
  <Link href="/" className="group flex flex-col">  
    <span className="text-xl tracking-[0.3em] font-light text-amber-100/90 uppercase">  
      NexVoyage  
    </span>  
    <span className="text-[10px] tracking-[0.5em] text-amber-200/40 uppercase -mt-1 group-hover:text-amber-200/70 transition-colors">  
      Collective  
    </span>  
  </Link>

  {/* RIGHT SIDE: MENU TOGGLE ONLY */}  
  <div className="flex items-center">  
    <button   
      onClick={() => setIsOpen(!isOpen)}  
      className="group flex flex-col gap-1.5 p-2"  
    >  
      <span className={`h-[1px] bg-amber-100/50 group-hover:bg-amber-100 transition-all duration-500 ${isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />  
      <span className={`h-[1px] bg-amber-100/50 group-hover:bg-amber-100 transition-all duration-500 ${isOpen ? 'opacity-0' : 'w-5'}`} />  
      <span className={`h-[1px] bg-amber-100/50 group-hover:bg-amber-100 transition-all duration-500 ${isOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`} />  
    </button>  
  </div>  
</header>  
