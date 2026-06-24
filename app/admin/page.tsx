'use client'

import { useState, useEffect } from 'react'

interface Dossier {  
  id: number  
  name: string  
  email: string  
  phone: string | null  
  destination: string | null  
  travel_dates: string | null  
  notes: string | null  
  status: string  
  created_at: string  
  updated_at: string  
  occasion: string | null  
  party_size: number | null  
  aviation_class: string | null  
  hear_about: string | null  
  source: string | null  
}

export default function AdminPage() {  
  const [isAuthenticated, setIsAuthenticated] = useState(false)  
  const [password, setPassword] = useState('')  
  const [error, setError] = useState('')  
  const [loading, setLoading] = useState(false)  
  const [dossiers, setDossiers] = useState<Dossier[]>([])  
  const [fetching, setFetching] = useState(true)  
  const [searchQuery, setSearchQuery] = useState('')  
  const [statusFilter, setStatusFilter] = useState('All')  
  const [selectedDossier, setSelectedDossier] = useState<Dossier | null>(null)  
  const [editNotes, setEditNotes] = useState('')  
  const [editStatus, setEditStatus] = useState('')  
  const [saving, setSaving] = useState(false)

  useEffect(() => {  
    if (!isAuthenticated) return  
    const fetchDossiers = async () => {  
      setFetching(true)  
      const res = await fetch('/api/admin/dossiers')  
      const data = await res.json()  
      setDossiers(data.dossiers || [])  
      setFetching(false)  
    }  
    fetchDossiers()  
  }, [isAuthenticated])

  const handleLogin = async (e: React.FormEvent) => {  
    e.preventDefault()  
    setError('')  
    setLoading(true)

    const res = await fetch('/api/admin/verify', {  
      method: 'POST',  
      headers: { 'Content-Type': 'application/json' },  
      body: JSON.stringify({ password }),  
    })

    const data = await res.json()  
    setLoading(false)

    if (data.success) {  
      setIsAuthenticated(true)  
    } else {  
      setError('Invalid password')  
    }  
  }

  const openDossier = (d: Dossier) => {  
    setSelectedDossier(d)  
    setEditNotes(d.notes || '')  
    setEditStatus(d.status)  
  }

  const saveDossier = async () => {  
    if (!selectedDossier) return  
    setSaving(true)  
    try {  
      const res = await fetch(`/api/admin/dossiers/${selectedDossier.id}`, {  
        method: 'PATCH',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({  
          status: editStatus,  
          notes: editNotes,  
        }),  
      })  
      const data = await res.json()  
      if (res.ok) {  
        // Update local state  
        setDossiers(prev => prev.map(d => d.id === selectedDossier.id ? data.dossier : d))  
        setSelectedDossier(data.dossier)  
      }  
    } catch (err) {  
      console.error('Failed to save:', err)  
    } finally {  
      setSaving(false)  
    }  
  }

  const uniqueStatuses = Array.from(new Set(dossiers.map((d) => {  
    const s = d.status.toLowerCase()  
    return s.charAt(0).toUpperCase() + s.slice(1)  
  }))).sort()

  const filteredDossiers = dossiers.filter((d) => {  
    const q = searchQuery.toLowerCase()  
    const matchesSearch = !searchQuery ||  
      d.name.toLowerCase().includes(q) ||  
      d.email.toLowerCase().includes(q) ||  
      (d.destination && d.destination.toLowerCase().includes(q)) ||  
      (d.occasion && d.occasion.toLowerCase().includes(q))  
    const matchesStatus = statusFilter === 'All' || d.status.toLowerCase() === statusFilter.toLowerCase()  
    return matchesSearch && matchesStatus  
  })

  const normalizeStatus = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()

  const stats = {  
    total: dossiers.length,  
    pending: dossiers.filter((d) => d.status.toLowerCase() === 'pending' || d.status.toLowerCase() === 'new').length,  
    contacted: dossiers.filter((d) => d.status.toLowerCase() === 'contacted').length,  
    cancelled: dossiers.filter((d) => d.status.toLowerCase() === 'cancelled').length,  
    declined: dossiers.filter((d) => d.status.toLowerCase() === 'declined').length,  
  }

  const statusColors: Record<string, string> = {  
    Pending: '#D4AF37',  
    New: '#D4AF37',  
    Contacted: '#4A9EFF',  
    Accepted: '#4CAF50',  
    Cancelled: '#FF8C00',  
    Declined: '#FF4A4A',  
  }

  if (!isAuthenticated) {  
    return (  
      <div style={{ minHeight: '100vh', background: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif' }}>  
        <form onSubmit={handleLogin} style={{ background: '#111', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '3rem', width: '100%', maxWidth: '400px' }}>  
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>  
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#D4AF37', fontSize: '1.8rem', fontWeight: 600, margin: '0 0 0.25rem', letterSpacing: '0.1em' }}>NEXVOYAGE COLLECTIVE</h1>  
            <p style={{ color: '#666', fontSize: '0.8rem', margin: 0, letterSpacing: '0.15em' }}>EXECUTIVE DASHBOARD</p>  
          </div>  
          <input type="password" placeholder="Access Code" value={password} onChange={(e) => setPassword(e.target.value)}  
            style={{ width: '100%', background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '4px', padding: '0.75rem 1rem', color: '#F5F5F0', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}  
            onFocus={(e) => e.target.style.borderColor = '#D4AF37'}  
            onBlur={(e) => e.target.style.borderColor = '#2A2A2A'} />  
          {error && <p style={{ color: '#FF4A4A', fontSize: '0.8rem', marginTop: '0.5rem' }}>{error}</p>}  
          <button type="submit" style={{ width: '100%', marginTop: '1.5rem', background: '#D4AF37', border: 'none', borderRadius: '4px', padding: '0.75rem', color: '#0A0A0A', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', letterSpacing: '0.1em' }}>  
            {loading ? 'VERIFYING...' : 'VERIFY'}  
          </button>  
        </form>  
      </div>  
    )  
  }

  if (selectedDossier) {  
    return (  
      <div style={{ minHeight: '100vh', background: '#0A0A0A', color: '#F5F5F0', fontFamily: 'Inter, sans-serif', padding: '2rem' }}>  
        <button onClick={() => setSelectedDossier(null)} style={{ background: 'none', border: '1px solid #2A2A2A', borderRadius: '4px', color: '#D4AF37', padding: '0.5rem 1rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', marginBottom: '1.5rem' }}>← BACK TO DOSSIERS</button>

        <div style={{ background: '#111', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '2rem', maxWidth: '700px' }}>  
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#D4AF37', fontSize: '1.6rem', margin: '0 0 1.5rem' }}>{selectedDossier.name}</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>  
            {[  
              { label: 'Email', value: selectedDossier.email },  
              { label: 'Phone', value: selectedDossier.phone || '—' },  
              { label: 'Destination', value: selectedDossier.destination || '—' },  
              { label: 'Travel Window', value: selectedDossier.travel_dates || '—' },  
              { label: 'Occasion', value: selectedDossier.occasion || '—' },  
              { label: 'Party Size', value: selectedDossier.party_size ? String(selectedDossier.party_size) : '—' },  
              { label: 'Aviation Class', value: selectedDossier.aviation_class || '—' },  
              { label: 'Source', value: selectedDossier.source || '—' },  
              { label: 'Heard Via', value: selectedDossier.hear_about || '—' },  
              { label: 'Submitted', value: new Date(selectedDossier.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) },  
            ].map((field) => (  
              <div key={field.label}>  
                <p style={{ color: '#666', fontSize: '0.75rem', margin: '0 0 0.25rem', letterSpacing: '0.1em' }}>{field.label}</p>  
                <p style={{ margin: 0, fontSize: '0.9rem' }}>{field.value}</p>  
              </div>  
            ))}  
          </div>

          {/* Status Dropdown */}  
          <div style={{ marginTop: '1.5rem', borderTop: '1px solid #2A2A2A', paddingTop: '1rem' }}>  
            <p style={{ color: '#666', fontSize: '0.75rem', margin: '0 0 0.5rem', letterSpacing: '0.1em' }}>STATUS</p>  
            <select value={editStatus} onChange={(e) => setEditStatus(e.target.value)}  
              style={{ width: '100%', background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '4px', padding: '0.6rem 1rem', color: '#F5F5F0', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', outline: 'none' }}>  
              {['New', 'Pending', 'Contacted', 'Accepted', 'Cancelled', 'Declined'].map((s) => (  
                <option key={s} value={s}>{s}</option>  
              ))}  
            </select>  
          </div>

          {/* Notes Editor */}  
          <div style={{ marginTop: '1.5rem', borderTop: '1px solid #2A2A2A', paddingTop: '1rem' }}>  
            <p style={{ color: '#666', fontSize: '0.75rem', margin: '0 0 0.5rem', letterSpacing: '0.1em' }}>NOTES</p>  
            <textarea value={editNotes} onChange={(e) => setEditNotes(e.target.value)} rows={5}  
              style={{ width: '100%', background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '4px', padding: '0.75rem 1rem', color: '#F5F5F0', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box', lineHeight: 1.6 }}  
              onFocus={(e) => e.target.style.borderColor = '#D4AF37'}  
              onBlur={(e) => e.target.style.borderColor = '#2A2A2A'} />  
          </div>

          {/* Save Button */}  
          <button onClick={saveDossier} disabled={saving}  
            style={{ marginTop: '1rem', background: '#D4AF37', border: 'none', borderRadius: '4px', padding: '0.6rem 2rem', color: '#0A0A0A', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', opacity: saving ? 0.6 : 1 }}>  
            {saving ? 'SAVING...' : 'SAVE CHANGES'}  
          </button>  
          {selectedDossier.updated_at && (  
            <p style={{ color: '#555', fontSize: '0.7rem', marginTop: '0.75rem' }}>  
              Last updated: {new Date(selectedDossier.updated_at).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}  
            </p>  
          )}  
        </div>

        <button onClick={() => { setIsAuthenticated(false); setPassword(''); setSelectedDossier(null) }} style={{ marginTop: '2rem', background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '4px', color: '#F5F5F0', padding: '0.5rem 1.5rem', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', cursor: 'pointer' }}>Sign Out</button>  
      </div>  
    )  
  }

  return (  
    <div style={{ minHeight: '100vh', background: '#0A0A0A', color: '#F5F5F0', fontFamily: 'Inter, sans-serif', padding: '2rem' }}>  
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #2A2A2A', paddingBottom: '1rem' }}>  
        <div>  
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#D4AF37', fontSize: '1.4rem', fontWeight: 600, margin: 0, letterSpacing: '0.1em' }}>NEXVOYAGE COLLECTIVE · ADMIN</h1>  
          <p style={{ color: '#666', fontSize: '0.75rem', margin: '0.25rem 0 0', letterSpacing: '0.1em' }}>{dossiers.length} DOSSIER{dossiers.length !== 1 ? 'S' : ''} ON FILE</p>  
        </div>  
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', marginBottom: '2rem' }}>  
        {[  
          { label: 'Total Dossiers', value: stats.total },  
          { label: 'Pending Review', value: stats.pending },  
          { label: 'Contacted', value: stats.contacted },  
          { label: 'Cancelled', value: stats.cancelled },  
          { label: 'Declined', value: stats.declined },  
        ].map((stat) => (  
          <div key={stat.label} style={{ background: '#111', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '1.25rem', textAlign: 'center' }}>  
            <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#D4AF37', fontSize: '2rem', margin: '0 0 0.25rem' }}>{stat.value}</p>  
            <p style={{ color: '#666', fontSize: '0.75rem', margin: 0, letterSpacing: '0.1em' }}>{stat.label}</p>  
          </div>  
        ))}  
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>  
        <input type="text" placeholder="Search by name, email, destination, or occasion..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}  
          style={{ flex: 1, background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '4px', padding: '0.6rem 1rem', color: '#F5F5F0', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', outline: 'none' }}  
          onFocus={(e) => e.target.style.borderColor = '#D4AF37'}  
          onBlur={(e) => e.target.style.borderColor = '#2A2A2A'} />  
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}  
          style={{ background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '4px', padding: '0.6rem 1rem', color: '#F5F5F0', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', outline: 'none', minWidth: '150px' }}>  
          <option value="All">All Statuses</option>  
          {uniqueStatuses.map((s) => (  
            <option key={s} value={s}>{s}</option>  
          ))}  
        </select>  
      </div>

      <div style={{ background: '#111', border: '1px solid #2A2A2A', borderRadius: '8px', overflow: 'hidden' }}>  
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>  
          <thead>  
            <tr style={{ borderBottom: '1px solid #2A2A2A', background: '#1A1A1A' }}>  
              {['Name', 'Email', 'Destination', 'Occasion', 'Party', 'Status', 'Submitted', ''].map((h) => (  
                <th key={h} style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#666', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em' }}>{h}</th>  
              ))}  
            </tr>  
          </thead>  
          <tbody>  
            {fetching ? (  
              <tr><td colSpan={8} style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>Loading dossiers...</td></tr>  
            ) : filteredDossiers.length === 0 ? (  
              <tr><td colSpan={8} style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>{dossiers.length === 0 ? 'No dossiers found' : 'No results match your search'}</td></tr>  
            ) : (  
              filteredDossiers.map((dossier) => {  
                const displayStatus = normalizeStatus(dossier.status)  
                return (  
                  <tr key={dossier.id} style={{ borderBottom: '1px solid #2A2A2A' }}>  
                    <td style={{ padding: '0.75rem 1rem', fontSize: '0.85rem' }}>{dossier.name}</td>  
                    <td style={{ padding: '0.75rem 1rem', fontSize: '0.8rem', color: '#999' }}>{dossier.email}</td>  
                    <td style={{ padding: '0.75rem 1rem', fontSize: '0.8rem' }}>{dossier.destination || '—'}</td>  
                    <td style={{ padding: '0.75rem 1rem', fontSize: '0.8rem' }}>{dossier.occasion || '—'}</td>  
                    <td style={{ padding: '0.75rem 1rem', fontSize: '0.8rem' }}>{dossier.party_size || '—'}</td>  
                    <td style={{ padding: '0.75rem 1rem' }}>  
                      <span style={{ background: `${(statusColors[displayStatus] || '#666')}20`, color: statusColors[displayStatus] || '#666', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 500 }}>{displayStatus}</span>  
                    </td>  
                    <td style={{ padding: '0.75rem 1rem', fontSize: '0.75rem', color: '#666' }}>{new Date(dossier.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>  
                    <td style={{ padding: '0.75rem 1rem' }}>  
                      <button onClick={() => openDossier(dossier)} style={{ background: 'none', border: '1px solid #D4AF37', borderRadius: '4px', color: '#D4AF37', padding: '0.3rem 0.8rem', fontSize: '0.75rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>View</button>  
                    </td>  
                  </tr>  
                )  
              })  
            )}  
          </tbody>  
        </table>  
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>  
        <button onClick={() => { setIsAuthenticated(false); setPassword(''); setSelectedDossier(null) }} style={{ background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '4px', color: '#F5F5F0', padding: '0.5rem 1.5rem', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', cursor: 'pointer' }}>Sign Out</button>  
      </div>  
    </div>  
  )  
}  
