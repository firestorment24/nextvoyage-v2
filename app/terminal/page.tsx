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
          <h1 className="text-stone-400 font-serif text-2xl text-center uppercase tracking-widest">Identify</h1>  
          <input   
            type="password"   
            placeholder="ACCESS CODE"   
            className="w-full bg-stone-900 border border-stone-800 p-3 text-stone-200 focus:outline-none focus:border-stone-500 transition-colors"  
            value={password}  
            onChange={(e) => setPassword(e.target.value)}  
          />  
          <button   
            onClick={() => setIsAuthenticated(true)} // Note: The actual check happens in the server action, this just unlocks UI  
            className="w-full bg-stone-200 text-black py-3 uppercase text-xs font-bold hover:bg-white transition-colors"  
          >  
            Authenticate  
          </button>  
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
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-stone-500 mt-2">NexVoyage Collective / Ledger Management</p>  
          </div>  
          <div className="flex gap-6 text-xs font-sans uppercase tracking-widest">  
            <button onClick={() => setActiveTab("archive")} className={activeTab === "archive" ? "text-white underline underline-offset-8" : "hover:text-white"}>Archive</button>  
            <button onClick={() => setActiveTab("perspective")} className={activeTab === "perspective" ? "text-white underline underline-offset-8" : "hover:text-white"}>Perspective</button>  
            <button onClick={() => setActiveTab("journal")} className={activeTab === "journal" ? "text-white underline underline-offset-8" : "hover:text-white"}>Journal</button>  
          </div>  
        </header>

        <form action={commitToLedger} className="space-y-8 max-w-2xl">  
          {/* Hidden password field to pass through to the server action */}  
          <input type="hidden" name="admin_password" value={password} />  
          <input type="hidden" name="table_type" value={activeTab} />

          {activeTab === "archive" && (  
            <div className="space-y-6 animate-in fade-in duration-500">  
              <div className="grid grid-cols-2 gap-4">  
                <div className="space-y-1">  
                  <label className="text-[10px] uppercase text-stone-500 font-sans">Name</label>  
                  <input name="name" required className="w-full bg-stone-900 border border-stone-800 p-3 focus:border-stone-500 outline-none" />  
                </div>  
                <div className="space-y-1">  
                  <label className="text-[10px] uppercase text-stone-500 font-sans">Location</label>  
                  <input name="location" required className="w-full bg-stone-900 border border-stone-800 p-3 focus:border-stone-500 outline-none" />  
                </div>  
              </div>  
              <div className="space-y-1">  
                <label className="text-[10px] uppercase text-stone-500 font-sans">Description</label>  
                <textarea name="description" rows={4} className="w-full bg-stone-900 border border-stone-800 p-3 focus:border-stone-500 outline-none" />  
              </div>  
              <div className="space-y-1">  
                <label className="text-[10px] uppercase text-stone-500 font-sans">Specifications (Price/Stats/Details)</label>  
                <input name="specs" placeholder="e.g. 5 BD / 6 BA / $14M" className="w-full bg-stone-900 border border-stone-800 p-3 focus:border-stone-500 outline-none" />  
              </div>  
            </div>  
          )}

          {activeTab === "perspective" && (  
            <div className="space-y-6 animate-in fade-in duration-500">  
              <div className="space-y-1">  
                <label className="text-[10px] uppercase text-stone-500 font-sans">Article Title</label>  
                <input name="title" required className="w-full bg-stone-900 border border-stone-800 p-3 focus:border-stone-500 outline-none" />  
              </div>  
              <div className="space-y-1">  
                <label className="text-[10px] uppercase text-stone-500 font-sans">Full Perspective Content</label>  
                <textarea name="content" rows={12} required className="w-full bg-stone-900 border border-stone-800 p-3 focus:border-stone-500 outline-none font-sans text-sm leading-relaxed" />  
              </div>  
            </div>  
          )}

          {activeTab === "journal" && (  
            <div className="space-y-6 animate-in fade-in duration-500">  
              <div className="space-y-1">  
                <label className="text-[10px] uppercase text-stone-500 font-sans">Log Entry Title</label>  
                <input name="title" required className="w-full bg-stone-900 border border-stone-800 p-3 focus:border-stone-500 outline-none" />  
              </div>  
              <div className="space-y-1">  
                <label className="text-[10px] uppercase text-stone-500 font-sans">Journal Entry</label>  
                <textarea name="content" rows={8} required className="w-full bg-stone-900 border border-stone-800 p-3 focus:border-stone-500 outline-none" />  
              </div>  
            </div>  
          )}

          <div className="pt-8 flex flex-col gap-4">  
            <button type="submit" className="bg-stone-200 text-black py-4 uppercase text-xs font-bold tracking-widest hover:bg-white transition-colors">  
              Commit to Ledger  
            </button>  
              
            <div className="relative border-t border-stone-900 pt-8 mt-4">  
               <p className="text-[10px] uppercase text-stone-600 font-sans mb-4 tracking-tighter text-center">— Or Batch Import via Data File (.csv) —</p>  
               <input   
                  type="file"   
                  accept=".csv"  
                  className="block w-full text-xs text-stone-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-[10px] file:font-sans file:uppercase file:bg-stone-900 file:text-stone-400 hover:file:bg-stone-800 cursor-pointer"  
               />  
            </div>  
          </div>  
        </form>  
      </div>  
    </div>  
  );  
}  
