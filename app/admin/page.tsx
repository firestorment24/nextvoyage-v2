'use client'

import { useState, useEffect } from 'react'

interface Dossier {  
id: number  
name: string  
email: string  
phone: string | null  
destination: string | null  
travel_dates: string | null  
budget_range: string | null  
notes: string | null  
status: string  
created_at: string  
}

const STATUS_OPTIONS = ['Pending', 'Accepted', 'Declined', 'In Discussion', 'On Hold']

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {  
  Pending:       { bg: '#2A2A1A', text: '#D4AF37' },  
  Accepted:      { bg: '#1A2A1A', text: '#4CAF50' },  
  Declined:      { bg: '#2A1A1A', text: '#8B3A3A' },  
  'In Discussion': { bg: '#1A1A2A', text: '#5B9BD5' },  
  'On Hold':     { bg: '#1A1A1A', text: '#888' },  
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

// View modal state  
const [selectedDossier, setSelectedDossier] = useState<Dossier | null>(null)  
const [editStatus, setEditStatus] = useState('')  
const [editNotes, setEditNotes] = useState('')  
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

const openViewModal = (dossier: Dossier) => {  
  setSelectedDossier(dossier)  
  setEditStatus(dossier.status)  
  setEditNotes(dossier.notes || '')  
}

const closeViewModal = () => {  
  setSelectedDossier(null)  
  setEditStatus('')  
  setEditNotes('')  
}

const handleSave = async () => {  
  if (!selectedDossier) return  
  setSaving(true)

  const res = await fetch(`/api/admin/dossiers/${selectedDossier.id}`, {  
    method: 'PATCH',  
    headers: { 'Content-Type': 'application/json' },  
    body: JSON.stringify({ status: editStatus, notes: editNotes }),  
  })

  const data = await res.json()  
  setSaving(false)

  if (data.dossier) {  
    setDossiers(dossiers.map((d) => (d.id === selectedDossier.id ? data.dossier : d)))  
    setSelectedDossier(data.dossier)  
  }  
}

const handleDelete = async (id: number) => {  
  if (!confirm('Delete this dossier? This cannot be undone.')) return  
  const res = await fetch(`/api/admin/dossiers/${id}`, { method: 'DELETE' })  
  if (res.ok) {  
    setDossiers(dossiers.filter((d) => d.id !== id))  
    if (selectedDossier?.id === id) closeViewModal()  
  }  
}

const filteredDossiers = dossiers.filter((d) => {  
  const matchesSearch = !searchQuery ||  
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||  
    d.email.toLowerCase().includes(searchQuery.toLowerCase())  
  const matchesStatus = statusFilter === 'All' || d.status === statusFilter  
  return matchesSearch && matchesStatus  
})

const stats = {  
  total: dossiers.length,  
  pending: dossiers.filter((d) => d.status === 'Pending').length,  
  accepted: dossiers.filter((d) => d.status === 'Accepted').length,  
  declined: dossiers.filter((d) => d.status === 'Declined').length,  
}

// ---- LOGIN VIEW ----  
if (!isAuthenticated) {  
  return (  
    <div style={{  
      minHeight: '100vh',  
      background: '#0A0A0A',  
      display: 'flex',  
      alignItems: 'center',  
      justifyContent: 'center',  
      fontFamily: 'Inter, sans-serif',  
    }}>  
      <form onSubmit={handleLogin} style={{  
        background: '#111',  
        border: '1px solid #2A2A2A',  
        borderRadius: '8px',  
        padding: '2.5rem',  
        width: '100%',  
        maxWidth: '360px',  
      }}>  
        <h1 style={{  
          fontFamily: 'Cormorant Garamond, serif',  
          fontSize: '1.5rem',  
          color: '#D4AF37',  
          margin: '0 0 1.5rem',  
          textAlign: 'center',  
          letterSpacing: '0.1em',  
        }}>  
          NexVoyage Admin  
        </h1>  
        <input  
          type="password"  
          placeholder="Password"  
          value={password}  
          onChange={(e) => setPassword(e.target.value)}  
          style={{  
            width: '100%',  
            boxSizing: 'border-box',  
            background: '#1A1A1A',  
            border: '1px solid #2A2A2A',  
            borderRadius: '4px',  
            padding: '0.75rem 1rem',  
            color: '#F5F5F0',  
            fontFamily: 'Inter, sans-serif',  
            fontSize: '0.9rem',  
            outline: 'none',  
            marginBottom: '1rem',  
          }}  
          onFocus={(e) => e.target.style.borderColor = '#D4AF37'}  
          onBlur={(e) => e.target.style.borderColor = '#2A2A2A'}  
        />  
        {error && (  
          <p style={{ color: '#8B3A3A', fontSize: '0.8rem', margin: '0 0 1rem', textAlign: 'center' }}>  
            {error}  
          </p>  
        )}  
        <button type="submit" style={{  
          width: '100%',  
          background: '#D4AF37',  
          border: 'none',  
          borderRadius: '4px',  
          padding: '0.75rem',  
          color: '#0A0A0A',  
          fontFamily: 'Inter, sans-serif',  
          fontSize: '0.85rem',  
          fontWeight: 600,  
          cursor: 'pointer',  
          letterSpacing: '0.05em',  
        }}>  
          {loading ? 'VERIFYING...' : 'VERIFY'}  
        </button>  
      </form>  
    </div>  
  )  
}

// ---- DASHBOARD VIEW ----  
return (  
  <div style={{  
    minHeight: '100vh',  
    background: '#0A0A0A',  
    color: '#F5F5F0',  
    fontFamily: 'Inter, sans-serif',  
    padding: '2rem',  
  }}>  
    {/* Header */}  
    <div style={{  
      display: 'flex',  
      justifyContent: 'space-between',  
      alignItems: 'center',  
      marginBottom: '2rem',  
    }}>  
      <h1 style={{  
        fontFamily: 'Cormorant Garamond, serif',  
        fontSize: '1.8rem',  
        color: '#D4AF37',  
        margin: 0,  
        letterSpacing: '0.08em',  
      }}>  
        Sojourn Dossiers  
      </h1>  
      <button  
        onClick={() => {  
          setIsAuthenticated(false)  
          setPassword('')  
        }}  
        style={{  
          background: '#1A1A1A',  
          border: '1px solid #2A2A2A',  
          borderRadius: '4px',  
          color: '#F5F5F0',  
          padding: '0.5rem 1.5rem',  
          fontFamily: 'Inter, sans-serif',  
          fontSize: '0.8rem',  
          cursor: 'pointer',  
        }}  
      >  
        Sign Out  
      </button>  
    </div>

    {/* Stats */}  
    <div style={{  
      display: 'grid',  
      gridTemplateColumns: 'repeat(4, 1fr)',  
      gap: '1rem',  
      marginBottom: '2rem',  
    }}>  
      {[  
        { label: 'Total Dossiers', value: stats.total },  
        { label: 'Pending Review', value: stats.pending },  
        { label: 'Accepted', value: stats.accepted },  
        { label: 'Declined', value: stats.declined },  
      ].map((stat) => (  
        <div key={stat.label} style={{  
          background: '#111',  
          border: '1px solid #2A2A2A',  
          borderRadius: '6px',  
          padding: '1.25rem',  
          textAlign: 'center',  
        }}>  
          <div style={{  
            fontSize: '2rem',  
            fontWeight: 700,  
            color: '#D4AF37',  
            fontFamily: 'Cormorant Garamond, serif',  
          }}>  
            {stat.value}  
          </div>  
          <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.25rem', letterSpacing: '0.05em' }}>  
            {stat.label}  
          </div>  
        </div>  
      ))}  
    </div>

    {/* Filters — Search + Color-coded chips */}  
    <div style={{  
      display: 'flex',  
      flexDirection: 'column',  
      gap: '0.75rem',  
      marginBottom: '1.5rem',  
    }}>  
      <input  
        type="text"  
        placeholder="Search by name or email..."  
        value={searchQuery}  
        onChange={(e) => setSearchQuery(e.target.value)}  
        style={{  
          width: '100%',  
          boxSizing: 'border-box',  
          background: '#1A1A1A',  
          border: '1px solid #2A2A2A',  
          borderRadius: '4px',  
          padding: '0.6rem 1rem',  
          color: '#F5F5F0',  
          fontFamily: 'Inter, sans-serif',  
          fontSize: '0.85rem',  
          outline: 'none',  
        }}  
      />  
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>  
        {/* "All" chip */}  
        <button  
          onClick={() => setStatusFilter('All')}  
          style={{  
            background: statusFilter === 'All' ? '#D4AF37' : 'transparent',  
            border: statusFilter === 'All' ? '1px solid #D4AF37' : '1px solid #333',  
            borderRadius: '20px',  
            padding: '0.35rem 1rem',  
            color: statusFilter === 'All' ? '#0A0A0A' : '#888',  
            fontFamily: 'Inter, sans-serif',  
            fontSize: '0.78rem',  
            fontWeight: statusFilter === 'All' ? 600 : 400,  
            cursor: 'pointer',  
            transition: 'all 0.15s',  
          }}  
          onMouseEnter={(e) => {  
            if (statusFilter !== 'All') {  
              e.currentTarget.style.borderColor = '#666'  
              e.currentTarget.style.color = '#F5F5F0'  
            }  
          }}  
          onMouseLeave={(e) => {  
            if (statusFilter !== 'All') {  
              e.currentTarget.style.borderColor = '#333'  
              e.currentTarget.style.color = '#888'  
            }  
          }}  
        >  
          All  
        </button>  
        {STATUS_OPTIONS.map((s) => {  
          const colors = STATUS_COLORS[s]  
          const isActive = statusFilter === s  
          return (  
            <button  
              key={s}  
              onClick={() => setStatusFilter(s)}  
              style={{  
                background: isActive ? colors.text : colors.bg,  
                border: `1px solid ${isActive ? colors.text : '#333'}`,  
                borderRadius: '20px',  
                padding: '0.35rem 1rem',  
                color: isActive ? '#0A0A0A' : colors.text,  
                fontFamily: 'Inter, sans-serif',  
                fontSize: '0.78rem',  
                fontWeight: isActive ? 600 : 400,  
                cursor: 'pointer',  
                transition: 'all 0.15s',  
                opacity: isActive ? 1 : 0.7,  
              }}  
              onMouseEnter={(e) => {  
                if (!isActive) {  
                  e.currentTarget.style.opacity = '1'  
                  e.currentTarget.style.borderColor = colors.text  
                }  
              }}  
              onMouseLeave={(e) => {  
                if (!isActive) {  
                  e.currentTarget.style.opacity = '0.7'  
                  e.currentTarget.style.borderColor = '#333'  
                }  
              }}  
            >  
              {s}  
            </button>  
          )  
        })}  
      </div>  
    </div>

    {/* Table */}  
    <div style={{  
      background: '#111',  
      border: '1px solid #2A2A2A',  
      borderRadius: '6px',  
      overflow: 'hidden',  
    }}>  
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>  
        <thead>  
          <tr style={{ borderBottom: '1px solid #2A2A2A' }}>  
            <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: '#888', letterSpacing: '0.05em' }}>Name</th>  
            <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: '#888', letterSpacing: '0.05em' }}>Email</th>  
            <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: '#888', letterSpacing: '0.05em' }}>Status</th>  
            <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: '#888', letterSpacing: '0.05em' }}>Submitted</th>  
            <th style={{ padding: '0.75rem 1rem', textAlign: 'center', fontSize: '0.75rem', color: '#888', letterSpacing: '0.05em' }}>Actions</th>  
          </tr>  
        </thead>  
        <tbody>  
          {fetching ? (  
            <tr>  
              <td colSpan={5} style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>  
                Loading dossiers...  
              </td>  
            </tr>  
          ) : filteredDossiers.length === 0 ? (  
            <tr>  
              <td colSpan={5} style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>  
                {dossiers.length === 0 ? 'No dossiers found' : 'No results match your search'}  
              </td>  
            </tr>  
          ) : (  
            filteredDossiers.map((dossier) => {  
              const badgeColors = STATUS_COLORS[dossier.status] || { bg: '#1A1A1A', text: '#888' }  
              return (  
                <tr key={dossier.id} style={{ borderBottom: '1px solid #1A1A1A' }}>  
                  <td style={{ padding: '0.75rem 1rem', fontSize: '0.9rem' }}>{dossier.name}</td>  
                  <td style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', color: '#999' }}>{dossier.email}</td>  
                  <td style={{ padding: '0.75rem 1rem' }}>  
                    <span style={{  
                      display: 'inline-block',  
                      padding: '0.2rem 0.6rem',  
                      borderRadius: '3px',  
                      fontSize: '0.75rem',  
                      fontWeight: 600,  
                      background: badgeColors.bg,  
                      color: badgeColors.text,  
                    }}>  
                      {dossier.status}  
                    </span>  
                  </td>  
                  <td style={{ padding: '0.75rem 1rem', fontSize: '0.8rem', color: '#777' }}>  
                    {new Date(dossier.created_at).toLocaleDateString('en-US', {  
                      month: 'short',  
                      day: 'numeric',  
                      year: 'numeric',  
                    })}  
                  </td>  
                  <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>  
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>  
                      <button  
                        onClick={() => openViewModal(dossier)}  
                        style={{  
                          background: 'transparent',  
                          border: '1px solid #D4AF37',  
                          borderRadius: '4px',  
                          color: '#D4AF37',  
                          padding: '0.3rem 0.8rem',  
                          fontFamily: 'Inter, sans-serif',  
                          fontSize: '0.75rem',  
                          cursor: 'pointer',  
                        }}  
                        onMouseEnter={(e) => { e.currentTarget.style.background = '#D4AF37'; e.currentTarget.style.color = '#0A0A0A' }}  
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#D4AF37' }}  
                      >  
                        View  
                      </button>  
                      <button  
                        onClick={() => handleDelete(dossier.id)}  
                        style={{  
                          background: 'transparent',  
                          border: '1px solid #5C1A1A',  
                          borderRadius: '4px',  
                          color: '#8B3A3A',  
                          padding: '0.3rem 0.8rem',  
                          fontFamily: 'Inter, sans-serif',  
                          fontSize: '0.75rem',  
                          cursor: 'pointer',  
                        }}  
                        onMouseEnter={(e) => { e.currentTarget.style.background = '#5C1A1A'; e.currentTarget.style.color = '#F5F5F0' }}  
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8B3A3A' }}  
                      >  
                        Delete  
                      </button>  
                    </div>  
                  </td>  
                </tr>  
              )  
            })  
          )}  
        </tbody>  
      </table>  
    </div>

    {/* ---- VIEW MODAL ---- */}  
    {selectedDossier && (  
      <div  
        onClick={closeViewModal}  
        style={{  
          position: 'fixed',  
          top: 0, left: 0, right: 0, bottom: 0,  
          background: 'rgba(0,0,0,0.7)',  
          display: 'flex',  
          alignItems: 'center',  
          justifyContent: 'center',  
          zIndex: 1000,  
        }}  
      >  
        <div  
          onClick={(e) => e.stopPropagation()}  
          style={{  
            background: '#111',  
            border: '1px solid #2A2A2A',  
            borderRadius: '8px',  
            width: '90%',  
            maxWidth: '600px',  
            maxHeight: '85vh',  
            overflowY: 'auto',  
            padding: '2rem',  
          }}  
        >  
          {/* Modal header */}  
          <div style={{  
            display: 'flex',  
            justifyContent: 'space-between',  
            alignItems: 'center',  
            marginBottom: '1.5rem',  
          }}>  
            <h2 style={{  
              fontFamily: 'Cormorant Garamond, serif',  
              fontSize: '1.3rem',  
              color: '#D4AF37',  
              margin: 0,  
            }}>  
              {selectedDossier.name}  
            </h2>  
            <button  
              onClick={closeViewModal}  
              style={{  
                background: 'transparent',  
                border: 'none',  
                color: '#666',  
                fontSize: '1.2rem',  
                cursor: 'pointer',  
              }}  
            >  
              ✕  
            </button>  
          </div>

          {/* Dossier details */}  
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>  
            <div>  
              <label style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>EMAIL</label>  
              <p style={{ margin: 0, fontSize: '0.85rem' }}>{selectedDossier.email}</p>  
            </div>  
            <div>  
              <label style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>PHONE</label>  
              <p style={{ margin: 0, fontSize: '0.85rem' }}>{selectedDossier.phone || '—'}</p>  
            </div>  
            <div>  
              <label style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>DESTINATION</label>  
              <p style={{ margin: 0, fontSize: '0.85rem' }}>{selectedDossier.destination || '—'}</p>  
            </div>  
            <div>  
              <label style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>TRAVEL DATES</label>  
              <p style={{ margin: 0, fontSize: '0.85rem' }}>{selectedDossier.travel_dates || '—'}</p>  
            </div>  
            <div>  
              <label style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>BUDGET</label>  
              <p style={{ margin: 0, fontSize: '0.85rem' }}>{selectedDossier.budget_range || '—'}</p>  
            </div>  
            <div>  
              <label style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>SUBMITTED</label>  
              <p style={{ margin: 0, fontSize: '0.85rem' }}>  
                {new Date(selectedDossier.created_at).toLocaleDateString('en-US', {  
                  month: 'long', day: 'numeric', year: 'numeric',  
                })}  
              </p>  
            </div>  
          </div>

          {/* Status control */}  
          <div style={{ marginBottom: '1.5rem' }}>  
            <label style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>  
              FUNNEL STATUS  
            </label>  
            <select  
              value={editStatus}  
              onChange={(e) => setEditStatus(e.target.value)}  
              style={{  
                width: '100%',  
                boxSizing: 'border-box',  
                background: '#1A1A1A',  
                border: '1px solid #2A2A2A',  
                borderRadius: '4px',  
                padding: '0.6rem 1rem',  
                color: '#F5F5F0',  
                fontFamily: 'Inter, sans-serif',  
                fontSize: '0.85rem',  
                outline: 'none',  
              }}  
            >  
              {STATUS_OPTIONS.map((s) => (  
                <option key={s} value={s}>{s}</option>  
              ))}  
            </select>  
          </div>

          {/* Notes editor */}  
          <div style={{ marginBottom: '1.5rem' }}>  
            <label style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>  
              INTERNAL NOTES  
            </label>  
            <textarea  
              value={editNotes}  
              onChange={(e) => setEditNotes(e.target.value)}  
              placeholder="Add internal notes about this client..."  
              rows={5}  
              style={{  
                width: '100%',  
                boxSizing: 'border-box',  
                background: '#1A1A1A',  
                border: '1px solid #2A2A2A',  
                borderRadius: '4px',  
                padding: '0.6rem 1rem',  
                color: '#F5F5F0',  
                fontFamily: 'Inter, sans-serif',  
                fontSize: '0.85rem',  
                outline: 'none',  
                resize: 'vertical',  
              }}  
            />  
          </div>

          {/* Save button */}  
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>  
            <button  
              onClick={closeViewModal}  
              style={{  
                background: 'transparent',  
                border: '1px solid #2A2A2A',  
                borderRadius: '4px',  
                color: '#999',  
                padding: '0.6rem 1.5rem',  
                fontFamily: 'Inter, sans-serif',  
                fontSize: '0.85rem',  
                cursor: 'pointer',  
              }}  
            >  
              Cancel  
            </button>  
            <button  
              onClick={handleSave}  
              disabled={saving}  
              style={{  
                background: '#D4AF37',  
                border: 'none',  
                borderRadius: '4px',  
                color: '#0A0A0A',  
                padding: '0.6rem 1.5rem',  
                fontFamily: 'Inter, sans-serif',  
                fontSize: '0.85rem',  
                fontWeight: 600,  
                cursor: 'pointer',  
                opacity: saving ? 0.6 : 1,  
              }}  
            >  
              {saving ? 'Saving...' : 'Save Changes'}  
            </button>  
          </div>  
        </div>  
      </div>  
    )}  
  </div>  
)  
}  
