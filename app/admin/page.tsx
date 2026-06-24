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

export default function AdminPage() {  
  const [isAuthenticated, setIsAuthenticated] = useState(false)  
  const [password, setPassword] = useState('')  
  const [error, setError] = useState('')  
  const [loading, setLoading] = useState(false)  
  const [dossiers, setDossiers] = useState<Dossier[]>([])  
  const [fetching, setFetching] = useState(true)  
  const [searchQuery, setSearchQuery] = useState('')  
  const [statusFilter, setStatusFilter] = useState('All')

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

  const handleDelete = async (id: number) => {  
    if (!confirm('Delete this dossier? This cannot be undone.')) return  
    const res = await fetch(`/api/admin/dossiers/${id}`, { method: 'DELETE' })  
    if (res.ok) {  
      setDossiers(dossiers.filter((d) => d.id !== id))  
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

  return (  
    <div style={{  
      minHeight: '100vh',  
      background: '#0A0A0A',  
      color: '#F5F5F0',  
      fontFamily: 'Inter, sans-serif',  
      padding: '2rem',  
    }}>  
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

      {/* Filters */}  
      <div style={{  
        display: 'flex',  
        gap: '1rem',  
        marginBottom: '1.5rem',  
      }}>  
        <input  
          type="text"  
          placeholder="Search by name or email..."  
          value={searchQuery}  
          onChange={(e) => setSearchQuery(e.target.value)}  
          style={{  
            flex: 1,  
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
        <select  
          value={statusFilter}  
          onChange={(e) => setStatusFilter(e.target.value)}  
          style={{  
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
          {['All', 'Pending', 'Accepted', 'Declined'].map((s) => (  
            <option key={s} value={s}>{s}</option>  
          ))}  
        </select>  
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
              filteredDossiers.map((dossier) => (  
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
                      background: dossier.status === 'Pending' ? '#2A2A1A' : dossier.status === 'Accepted' ? '#1A2A1A' : '#2A1A1A',  
                      color: dossier.status === 'Pending' ? '#D4AF37' : dossier.status === 'Accepted' ? '#4CAF50' : '#8B3A3A',  
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
                        transition: 'all 0.15s',  
                      }}  
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#5C1A1A'; e.currentTarget.style.color = '#F5F5F0' }}  
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8B3A3A' }}  
                    >  
                      Delete  
                    </button>  
                  </td>  
                </tr>  
              ))  
            )}  
          </tbody>  
        </table>  
      </div>  
    </div>  
  )  
}  
