"use client";  
import { useState, useEffect } from 'react';  
import { useRouter } from 'next/navigation';

const ITEMS = [  
{ title: 'Metropolitan Sanctuary', slug: 'metropolitan', category: 'Sanctuary' },  
{ title: 'Floating Sanctuary', slug: 'floating', category: 'Sanctuary' },  
{ title: 'Island Sanctuary', slug: 'island', category: 'Sanctuary' },  
{ title: 'Alpine Sanctuary', slug: 'alpine', category: 'Sanctuary' },  
{ title: 'Stadium Sanctuary', slug: 'stadium', category: 'Sanctuary' },  
{ title: 'Cinematic Sanctuary', slug: 'cinematic', category: 'Sanctuary' },  
{ title: 'Fortress Sanctuary', slug: 'fortress', category: 'Sanctuary' },  
{ title: 'Safari Sanctuary', slug: 'safari', category: 'Sanctuary' },  
{ title: 'Oasis Sanctuary', slug: 'oasis', category: 'Sanctuary' },  
{ title: 'Privacy Policy', slug: 'privacy', category: 'Legal' },  
{ title: 'Terms & Conditions', slug: 'terms', category: 'Legal' },  
];

export default function GlobalSearch({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {  
const [query, setQuery] = useState('');  
const router = useRouter();

useEffect(() => {  
  const handleKeyDown = (e: KeyboardEvent) => {  
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {  
      e.preventDefault();  
      isOpen ? onClose() : null; // Toggle handled by parent, but safety first  
    }  
    if (e.key === 'Escape') onClose();  
  };  
  window.addEventListener('keydown', handleKeyDown);  
  return () => window.removeEventListener('keydown', handleKeyDown);  
}, [isOpen, onClose]);

const filtered = ITEMS.filter(item =>   
  item.title.toLowerCase().includes(query.toLowerCase())  
).slice(0, 5);

if (!isOpen) return null;

return (  
  <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-start justify-center pt-[15vh] px-6">  
    <div className="w-full max-w-2xl animate-in fade-in zoom-in duration-300">  
      <input  
        autoFocus  
        placeholder="SEARCH COLLECTIVE..."  
        className="w-full bg-transparent border-b border-white/20 pb-4 text-3xl font-light tracking-tighter text-white focus:outline-none focus:border-white transition-colors"  
        value={query}  
        onChange={(e) => setQuery(e.target.value)}  
      />  
        
      <div className="mt-8 space-y-2">  
        {query && filtered.map((item) => (  
          <button  
            key={item.slug}  
            onClick={() => {  
              router.push(item.category === 'Legal' ? `/${item.slug}` : `/sanctuary/${item.slug}`);  
              onClose();  
              setQuery('');  
            }}  
            className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors group"  
          >  
            <span className="text-lg font-light tracking-tight">{item.title}</span>  
            <span className="text-[10px] tracking-widest text-white/30 uppercase group-hover:text-white/60">  
              {item.category}  
            </span>  
          </button>  
        ))}  
        {query && filtered.length === 0 && (  
          <p className="text-white/30 text-sm tracking-widest uppercase p-4">No results found</p>  
        )}  
      </div>  
        
      <div className="mt-12 flex gap-4 text-[10px] tracking-widest text-white/20 uppercase">  
        <span>ESC to close</span>  
        <span>⏎ to select</span>  
      </div>  
    </div>  
  </div>  
);  
}  
