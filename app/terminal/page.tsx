"use client";

import { useState } from "react";  
import { commitToLedger } from "./actions";

export default function AdminTerminal() {  
const [activeTab, setActiveTab] = useState("archive");  
const [isAuthenticated, setIsAuthenticated] = useState(false);  
const [password, setPassword] = useState("");

if (!isAuthenticated) {  
  return (  
    <div className="min-h-screen bg-black flex items-center justify-center p-6">  
      <div className="w-full max-w-sm space-y-4">  
        <h1 className="text-stone-400 font-serif text-2xl text-center uppercase tracking-widest text-white">Identify</h1>  
        <input   
          type="password"   
          placeholder="ACCESS CODE"   
          className="w-full bg-stone-900 border border-stone-800 p-3 text-stone-200 focus:outline-none focus:border-stone-500"  
          value={password}  
          onChange={(e) => setPassword(e.target.value)}  
        />  
        <button onClick={() => setIsAuthenticated(true)} className="w-full bg-stone-200 text-black py-3 uppercase text-xs font-bold">Authenticate</button>  
      </div>  
    </div>  
  );  
}

return (  
  <div className="min-h-screen bg-black text-stone-300 p-8 font-serif">  
    <div className="max-w-4xl mx-auto">  
      <header className="flex justify-between items-end border-b border-stone-800 pb-8 mb-12">  
        <div>  
          <h1 className="text-4xl uppercase tracking-tighter text-white">Admin Terminal</h1>  
          <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-stone-500 mt-2">NexVoyage Collective / Ledger</p>  
        </div>  
        <div className="flex gap-6 text-xs font-sans uppercase tracking-widest">  
          {["archive", "perspective", "journal"].map((tab) => (  
            <button   
              key={tab}  
              onClick={() => setActiveTab(tab)}   
              className={activeTab === tab ? "text-white underline underline-offset-8" : "text-stone-600 hover:text-white transition-colors"}  
            >  
              {tab}  
            </button>  
          ))}  
        </div>  
      </header>

      {/* Increased top margin (mt-24) to prevent header overlap */}  
      <form action={commitToLedger} key={activeTab} className="space-y-12 max-w-2xl mt-24 animate-in fade-in slide-in-from-bottom-4 duration-700">  
        <input type="hidden" name="admin_password" value={password} />  
        <input type="hidden" name="table_type" value={activeTab} />

        <div className="min-h-[400px] space-y-8">  
          {activeTab === "archive" && (  
            <div className="space-y-6">  
              <div className="grid grid-cols-2 gap-6">  
                <div className="space-y-1">  
                  <label className="text-[10px] uppercase text-stone-500 font-sans tracking-widest">Property Name</label>  
                  <input name="name" required className="w-full bg-stone-900 border border-stone-800 p-3 focus:border-stone-500 outline-none transition-colors" />  
                </div>  
                <div className="space-y-1">  
                  <label className="text-[10px] uppercase text-stone-500 font-sans tracking-widest">Location</label>  
                  <input name="location" required className="w-full bg-stone-900 border border-stone-800 p-3 focus:border-stone-500 outline-none transition-colors" />  
                </div>  
              </div>  
              <div className="space-y-1">  
                <label className="text-[10px] uppercase text-stone-500 font-sans tracking-widest">Description</label>  
                <textarea name="description" rows={5} className="w-full bg-stone-900 border border-stone-800 p-3 focus:border-stone-500 outline-none transition-colors" />  
              </div>  
              <div className="space-y-1">  
                <label className="text-[10px] uppercase text-stone-500 font-sans tracking-widest">Specifications (Price / Details)</label>  
                <input name="specs" placeholder="e.g. 5 BD / 6 BA / $14M" className="w-full bg-stone-900 border border-stone-800 p-3 focus:border-stone-500 outline-none transition-colors" />  
              </div>  
            </div>  
          )}

          {activeTab === "perspective" && (  
            <div className="space-y-6">  
              <div className="space-y-1">  
                <label className="text-[10px] uppercase text-stone-500 font-sans tracking-widest">Article Title</label>  
                <input name="title" required className="w-full bg-stone-900 border border-stone-800 p-3 focus:border-stone-500 outline-none transition-colors" />  
              </div>  
              <div className="space-y-1">  
                <label className="text-[10px] uppercase text-stone-500 font-sans tracking-widest">Perspective Content</label>  
                <textarea name="content" rows={15} required className="w-full bg-stone-900 border border-stone-800 p-3 focus:border-stone-500 outline-none font-sans text-sm leading-relaxed" />  
              </div>  
            </div>  
          )}

          {activeTab === "journal" && (  
            <div className="space-y-6">  
              <div className="space-y-1">  
                <label className="text-[10px] uppercase text-stone-500 font-sans tracking-widest">Log Entry Title</label>  
                <input name="title" required className="w-full bg-stone-900 border border-stone-800 p-3 focus:border-stone-500 outline-none transition-colors" />  
              </div>  
              <div className="space-y-1">  
                <label className="text-[10px] uppercase text-stone-500 font-sans tracking-widest">Journal Entry</label>  
                <textarea name="content" rows={10} required className="w-full bg-stone-900 border border-stone-800 p-3 focus:border-stone-500 outline-none transition-colors" />  
              </div>  
            </div>  
          )}  
        </div>

        <div className="pt-12 border-t border-stone-900 space-y-8">  
           <div className="space-y-4">  
             <label className="text-[10px] uppercase text-stone-600 font-sans block tracking-[0.3em] text-center">Batch Import via Data File (.csv)</label>  
             <input   
                type="file"   
                name="csv_file"   
                accept=".csv"   
                className="block w-full text-[10px] text-stone-500 file:mr-4 file:py-2 file:px-4 file:border file:border-stone-800 file:bg-transparent file:text-stone-400 file:uppercase file:tracking-widest hover:file:bg-stone-900 cursor-pointer"   
             />  
           </div>  
             
           <button type="submit" className="w-full bg-stone-200 text-black py-5 uppercase text-[10px] font-bold tracking-[0.4em] hover:bg-white transition-all duration-500">  
             Commit to Ledger  
           </button>  
        </div>  
      </form>  
    </div>  
  </div>  
);  
}  
