import React, { useState, useEffect } from 'react';  
import { Search, X, MapPin, Shield, FileText } from 'lucide-react';

const GlobalSearch = () => {  
  const [isOpen, setIsOpen] = useState(false);  
  const [query, setQuery] = useState('');

  // Data to search through  
  const items = [  
    { name: 'Metropolitan Sanctuary', type: 'Sanctuary', href: '/#metropolitan', icon: MapPin },  
    { name: 'Floating Sanctuary', type: 'Sanctuary', href: '/#floating', icon: MapPin },  
    { name: 'Island Sanctuary', type: 'Sanctuary', href: '/#island', icon: MapPin },  
    { name: 'Alpine Sanctuary', type: 'Sanctuary', href: '/#alpine', icon: MapPin },  
    { name: 'Stadium Sanctuary', type: 'Sanctuary', href: '/#stadium', icon: MapPin },  
    { name: 'Cinematic Sanctuary', type: 'Sanctuary', href: '/#cinematic', icon: MapPin },  
    { name: 'Soulful Sanctuary', type: 'Sanctuary', href: '/#soulful', icon: MapPin },  
    { name: 'Education Sanctuary', type: 'Sanctuary', href: '/#education', icon: MapPin },  
    { name: 'Mobile Sanctuary', type: 'Sanctuary', href: '/#mobile', icon: MapPin },  
    { name: 'Privacy Policy', type: 'Legal', href: '/privacy', icon: Shield },  
    { name: 'Terms & Conditions', type: 'Legal', href: '/terms', icon: FileText },  
    { name: 'Impact & Safety', type: 'Legal', href: '/safety', icon: Shield },  
    { name: 'Private Concierge', type: 'Service', href: '/concierge', icon: Search },  
  ];

  const filteredItems = items.filter(item =>   
    item.name.toLowerCase().includes(query.toLowerCase())  
  );

  // Keyboard shortcut: Cmd+K to open  
  useEffect(() => {  
    const handleKeyDown = (e: KeyboardEvent) => {  
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {  
        e.preventDefault();  
        setIsOpen(prev => !prev);  
      }  
    };  
    window.addEventListener('keydown', handleKeyDown);  
    return () => window.removeEventListener('keydown', handleKeyDown);  
  }, []);

  if (!isOpen) return null;

  return (  
    <div className="fixed inset-0 z-[100] bg-zinc-950/90 backdrop-blur-sm flex items-start justify-center pt-[15vh]">  
      <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl overflow-hidden mx-4">  
          
        {/* Search Input */}  
        <div className="flex items-center px-6 py-4 border-b border-zinc-800">  
          <Search size={20} className="text-zinc-500 mr-4" strokeWidth={1} />  
          <input   
            autoFocus  
            className="flex-1 bg-transparent text-white outline-none text-lg font-light tracking-wide placeholder:text-zinc-600"  
            placeholder="Search Sanctuaries, Legal, or Concierge..."  
            value={query}  
            onChange={(e) => setQuery(e.target.value)}  
          />  
          <button onClick={() => setIsOpen(false)}>  
            <X size={20} className="text-zinc-500 hover:text-white transition-colors" />  
          </button>  
        </div>

        {/* Results */}  
        <div className="max-h-[60vh] overflow-y-auto p-4">  
          {filteredItems.length > 0 ? (  
            filteredItems.map((item) => (  
              <a   
                key={item.name}   
                href={item.href}  
                className="flex items-center p-4 rounded-md hover:bg-zinc-800 transition-colors group"  
                onClick={() => setIsOpen(false)}  
              >  
                <item.icon size={18} className="text-zinc-500 mr-4 group-hover:text-white transition-colors" />  
                <div className="flex flex-col">  
                  <span className="text-zinc-200 group-hover:text-white">{item.name}</span>  
                  <span className="text-[10px] uppercase tracking-widest text-zinc-600">{item.type}</span>  
                </div>  
              </a>  
            ))  
          ) : (  
            <div className="p-8 text-center text-zinc-600 italic font-light">  
              No sanctuaries found. Try searching for "Floating" or "Safety."  
            </div>  
          )}  
        </div>  
          
        {/* Footer Hint */}  
        <div className="bg-zinc-950/50 px-6 py-3 border-t border-zinc-800 flex justify-between items-center">  
          <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em]">Esc to Close</p>  
          <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em]">NexVoyage Intelligence</p>  
        </div>  
      </div>  
    </div>  
  );  
};

export default GlobalSearch;  
