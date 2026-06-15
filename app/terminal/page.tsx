'use client'

import { useState } from 'react'    
import { commitToLedger } from './actions'

export default function Terminal() {    
  const [password, setPassword] = useState('')    
  const [authenticated, setAuthenticated] = useState(false)    
  const [activeTab, setActiveTab] = useState('perspective')    
  const [status, setStatus] = useState('')

  if (!authenticated) {    
    return (    
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">    
        <div className="max-w-sm w-full space-y-4 border border-amber-900/30 p-8 rounded-sm">    
          <h1 className="text-amber-200 font-serif text-2xl text-center">Terminal Access</h1>    
          <input     
            type="password"     
            placeholder="ADMIN_PASSWORD"    
            className="w-full bg-neutral-900 border border-amber-900/20 text-amber-100 p-3 outline-none focus:border-amber-500 transition-colors"    
            value={password}    
            onChange={(e) => setPassword(e.target.value)}    
            onKeyDown={(e) => e.key === 'Enter' && password === 'NV2026' && setAuthenticated(true)}  
          />    
          <button     
            onClick={() => password === 'NV2026' ? setAuthenticated(true) : alert('Access Denied')}    
            className="w-full bg-amber-200 text-black p-3 font-medium hover:bg-amber-100 transition-colors"    
          >    
            Authenticate    
          </button>    
        </div>    
      </div>    
    )    
  }

  return (    
    <main className="min-h-screen bg-neutral-950 text-amber-100 pt-32 pb-20 px-6">    
      <div className="max-w-3xl mx-auto">    
        <header className="mb-12 border-b border-amber-900/30 pb-6">    
          <h1 className="font-serif text-4xl text-amber-200">Admin Terminal</h1>    
          <p className="text-amber-900 uppercase tracking-widest text-xs mt-2">NexVoyage Collective Data Ledger</p>    
        </header>

        {/* Tabs */}    
        <div className="flex gap-8 mb-8 border-b border-amber-900/10">    
          {['archive', 'perspective', 'journal'].map((tab) => (    
            <button    
              key={tab}    
              onClick={() => setActiveTab(tab)}    
              className={`pb-4 text-sm uppercase tracking-widest transition-colors ${    
                activeTab === tab ? 'text-amber-200 border-b border-amber-200' : 'text-amber-900 hover:text-amber-500'    
              }`}    
            >    
              {tab}    
            </button>    
          ))}    
        </div>

        {/* Status Message */}    
        {status && (    
          <div className="mb-6 p-4 bg-amber-950/20 border border-amber-900/50 text-amber-200 text-sm">    
            {status}    
          </div>    
        )}

        {/* Manual Entry Form */}    
        <form action={async (formData) => {    
          setStatus('Committing to ledger...')    
          const res = await commitToLedger(formData, activeTab)    
          setStatus(res.message)    
        }} className="space-y-6">    
              
          <div className="grid grid-cols-1 gap-6">    
            {activeTab === 'archive' && (    
              <>    
                <Field label="Property Name" name="title" />    
                <Field label="Location" name="location" />    
                <Field label="Image URL" name="image_url" />    
                <Field label="Price/Details" name="price" />    
                <Area label="Detailed Description" name="description" />    
              </>    
            )}

            {activeTab === 'perspective' && (    
              <>    
                <Field label="Guide Title" name="title" />    
                <Field label="URL Slug (e.g. the-silent-roi)" name="slug" placeholder="the-silent-roi" />    
                <Field label="Category" name="category" placeholder="EDITORIAL / PHILOSOPHY" />    
                <Field label="Author" name="author" placeholder="NexVoyage Collective" />    
                <Field label="Hero Image URL" name="image_url" />    
                <Area label="Editorial Content" name="content" />    
              </>    
            )}

            {activeTab === 'journal' && (    
              <>    
                <Field label="Entry Title" name="title" />    
                <Field label="Date" name="date" placeholder="June 14, 2026" />    
                <Field label="Image URL" name="image_url" />    
                <Area label="Excerpt/Summary" name="excerpt" />    
              </>    
            )}    
          </div>

          <div className="pt-8 border-t border-amber-900/30">    
            <h3 className="text-amber-900 uppercase tracking-widest text-xs mb-4">Manual Submission</h3>    
            <button     
              type="submit"    
              className="w-full bg-amber-200 text-black p-4 font-serif text-lg hover:bg-amber-100 transition-colors uppercase tracking-widest"    
            >    
              Commit Single Entry    
            </button>    
          </div>

          {/* CSV Upload Section */}    
          <div className="pt-12 mt-12 border-t border-amber-900/30">    
            <h3 className="text-amber-900 uppercase tracking-widest text-xs mb-4">Batch Upload (.csv)</h3>    
            <div className="p-8 border-2 border-dashed border-amber-900/20 bg-neutral-900/30 text-center">    
              <input     
                type="file"     
                name="csv_file"    
                accept=".csv"    
                className="text-sm text-amber-900 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-xs file:uppercase file:bg-amber-900/20 file:text-amber-200 hover:file:bg-amber-900/40 cursor-pointer"    
              />    
              <p className="text-amber-900 text-[10px] mt-4 uppercase tracking-tighter">    
                Upload a CSV matching the {activeTab} schema to batch process records.    
              </p>    
            </div>    
            <button     
              type="submit"    
              className="w-full mt-4 border border-amber-200 text-amber-200 p-4 font-serif text-lg hover:bg-amber-200 hover:text-black transition-all uppercase tracking-widest"    
            >    
              Execute Batch Process    
            </button>    
          </div>    
        </form>    
      </div>    
    </main>    
  )    
}

function Field({ label, name, placeholder = "" }: { label: string, name: string, placeholder?: string }) {    
  return (    
    <div className="space-y-2">    
      <label className="text-[10px] uppercase tracking-[0.2em] text-amber-900">{label}</label>    
      <input     
        name={name}    
        placeholder={placeholder}    
        className="w-full bg-neutral-900 border border-amber-900/20 text-amber-100 p-3 outline-none focus:border-amber-500 transition-colors font-light"    
      />    
    </div>    
  )    
}

function Area({ label, name }: { label: string, name: string }) {    
  return (    
    <div className="space-y-2">    
      <label className="text-[10px] uppercase tracking-[0.2em] text-amber-900">{label}</label>    
      <textarea     
        name={name}    
        rows={6}    
        className="w-full bg-neutral-900 border border-amber-900/20 text-amber-100 p-3 outline-none focus:border-amber-500 transition-colors font-light"    
      />    
    </div>    
  )    
}  
