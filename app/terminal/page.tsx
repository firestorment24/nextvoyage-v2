"use client";

import { useState } from "react";  
import { commitToLedger } from "./actions";

export default function AdminTerminal() {  
  const [isLocked, setIsLocked] = useState(true);  
  const [password, setPassword] = useState("");  
  const [activeTab, setActiveTab] = useState("sanctuary");  
  const [status, setStatus] = useState("");

  if (isLocked) {  
    return (  
      <main className="min-h-screen bg-black flex items-center justify-center p-6">  
        <div className="max-w-md w-full space-y-8 text-center">  
          <h1 className="text-white font-serif text-3xl tracking-[0.2em] uppercase">Terminal Access</h1>  
          <input   
            type="password"   
            placeholder="ENTER MASTER KEY"   
            className="w-full bg-transparent border border-white/20 p-4 text-center text-white font-mono tracking-widest focus:outline-none focus:border-white transition-colors"  
            value={password}  
            onChange={(e) => setPassword(e.target.value)}  
            onKeyDown={(e) => e.key === "Enter" && setIsLocked(false)}  
          />  
          <button   
            onClick={() => setIsLocked(false)}  
            className="text-[10px] uppercase tracking-[0.4em] text-[#444] hover:text-white transition-colors"  
          >  
            Authenticate Protocol  
          </button>  
        </div>  
      </main>  
    );  
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {  
    e.preventDefault();  
    setStatus("Committing to ledger...");  
    const formData = new FormData(e.currentTarget);  
    formData.append("password", password);  
    formData.append("type", activeTab);

    try {  
      await commitToLedger(formData);  
      setStatus("Success: Ledger Updated.");  
      (e.target as HTMLFormElement).reset();  
    } catch (err) {  
      setStatus("Error: Authorization Failed.");  
    }  
  };

  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] pt-24 pb-20 px-6">  
      <div className="max-w-4xl mx-auto">  
        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">  
          <h1 className="text-2xl font-serif tracking-widest uppercase">NexVoyage Terminal</h1>  
          <p className="text-[10px] text-[#444] tracking-[0.3em]">SECURE UPLOAD ACTIVE</p>  
        </div>

        <div className="flex gap-8 mb-12">  
          {["sanctuary", "journal", "perspective"].map(tab => (  
            <button   
              key={tab}  
              onClick={() => setActiveTab(tab)}  
              className={`text-[11px] uppercase tracking-[0.3em] pb-2 border-b transition-all ${activeTab === tab ? "border-white text-white" : "border-transparent text-[#444]"}`}  
            >  
              {tab}  
            </button>  
          ))}  
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">  
          {activeTab === "sanctuary" && (  
            <>  
              <div className="grid grid-cols-2 gap-4">  
                <Input label="Serial ID (e.g. NV-LDR-001)" name="property_id" required />  
                <Input label="Asset Name" name="name" required />  
              </div>  
              <Input label="Location" name="location" required />  
              <Input label="Image URL" name="image_url" />  
              <TextArea label="Narrative Overview" name="description" />  
              <Input label="Technical Highlight" name="highlight" />  
              <TextArea label="Specs (JSON format)" name="specs" placeholder='{"Elevation": "2,400m", "Seclusion": "Absolute"}' />  
            </>  
          )}

          {activeTab === "journal" && (  
            <>  
              <Input label="Article Title" name="title" required />  
              <Input label="URL Slug" name="slug" required />  
              <Input label="Thumbnail URL" name="thumbnail" />  
              <TextArea label="Content" name="content" rows={10} />  
            </>  
          )}

          <button className="w-full bg-white text-black py-4 text-[11px] font-mono uppercase tracking-[0.5em] hover:bg-[#ccc] transition-colors">  
            Commit to Ledger  
          </button>  
          {status && <p className="text-center text-[10px] uppercase tracking-widest text-white/50">{status}</p>}  
        </form>  
      </div>  
    </main>  
  );  
}

function Input({ label, ...props }: any) {  
  return (  
    <div className="space-y-2">  
      <label className="text-[9px] uppercase tracking-[0.3em] text-[#666]">{label}</label>  
      <input className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-white/30 transition-colors" {...props} />  
    </div>  
  );  
}

function TextArea({ label, ...props }: any) {  
  return (  
    <div className="space-y-2">  
      <label className="text-[9px] uppercase tracking-[0.3em] text-[#666]">{label}</label>  
      <textarea className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-white/30 transition-colors min-h-[100px]" {...props} />  
    </div>  
  );  
}  
