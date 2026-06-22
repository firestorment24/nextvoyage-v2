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
      paddingTop: '6rem',  
    }}>  
      <form onSubmit={handleLogin} style={{  
        display: 'flex',  
        flexDirection: 'column',  
        gap: '1.5rem',  
        width: '100%',  
        maxWidth: '400px',  
        padding: '2rem',  
      }}>  
        <div style={{  
          fontFamily: 'Cormorant Garamond, serif',  
          fontSize: '0.75rem',  
          letterSpacing: '0.15em',  
          textTransform: 'uppercase',  
          color: '#D4AF37',  
          textAlign: 'center',  
        }}>  
          NexVoyage Admin  
        </div>  
        <input  
          type="password"  
          placeholder="Enter password"  
          value={password}  
          onChange={(e) => setPassword(e.target.value)}  
          style={{  
            background: '#1A1A1A',  
            border: '1px solid #2A2A2A',  
            borderRadius: '4px',  
            padding: '0.75rem 1rem',  
            color: '#F5F5F0',  
            fontFamily: 'Inter, sans-serif',  
            fontSize: '0.9rem',  
            outline: 'none',  
          }}  
          onFocus={(e) => e.target.style.borderColor = '#D4AF37'}  
          onBlur={(e) => e.target.style.borderColor = '#2A2A2A'}  
        />  
        {error && (  
          <div style={{ color: '#E74C3C', fontSize: '0.85rem', textAlign: 'center' }}>  
            {error}  
          </div>  
        )}  
        <button  
          type="submit"  
          disabled={loading}  
          style={{  
            background: '#D4AF37',  
            color: '#0A0A0A',  
            border: 'none',  
            borderRadius: '4px',  
            padding: '0.75rem',  
            fontFamily: 'Inter, sans-serif',  
            fontWeight: 600,  
            fontSize: '0.85rem',  
            letterSpacing: '0.05em',  
            cursor: 'pointer',  
            opacity: loading ? 0.6 : 1,  
          }}  
        >  
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
  }}>  
    <header style={{  
      borderBottom: '1px solid #1A1A1A',  
      padding: '1rem 2rem',  
      display: 'flex',  
      justifyContent: 'space-between',  
      alignItems: 'center',  
    }}>  
      <div style={{  
        fontFamily: 'Cormorant Garamond, serif',  
        fontSize: '1.1rem',  
        letterSpacing: '0.05em',  
      }}>  
        NEXVOYAGE COLLECTIVE <span style={{ color: '#D4AF37' }}>·</span> ADMIN  
      </div>  
      <button  
        onClick={() => {  
          setIsAuthenticated(false)  
          setPassword('')  
        }}  
        style={{  
          background: 'none',  
          border: '1px solid #2A2A2A',  
          borderRadius: '4px',  
          color: '#F5F5F0',  
          padding: '0.5rem 1rem',  
          fontFamily: 'Inter, sans-serif',  
          fontSize: '0.8rem',  
          cursor: 'pointer',  
        }}  
      >  
        Sign Out  
      </button>  
    </header>

    <main style={{ padding: '6rem 2rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>  
      <div style={{  
        display: 'grid',  
        gridTemplateColumns: 'repeat(4, 1fr)',  
        gap: '1rem',  
        marginBottom: '3rem',  
      }}>  
        {[  
          { label: 'Total Dossiers', value: stats.total },  
          { label: 'Pending Review', value: stats.pending },  
          { label: 'Accepted', value: stats.accepted },  
          { label: 'Declined', value: stats.declined },  
        ].map((stat) => (  
          <div key={stat.label} style={{  
            background: '#111111',  
            border: '1px solid #1A1A1A',  
            borderRadius: '4px',  
            padding: '1.5rem',  
          }}>  
            <div style={{  
              fontSize: '2.5rem',  
              fontWeight: 300,  
              color: '#D4AF37',  
              fontFamily: 'Cormorant Garamond, serif',  
            }}>  
              {stat.value}  
            </div>  
            <div style={{  
              fontSize: '0.75rem',  
              textTransform: 'uppercase',  
              letterSpacing: '0.1em',  
              color: '#888',  
              marginTop: '0.25rem',  
            }}>  
              {stat.label}  
            </div>  
          </div>  
        ))}  
      </div>

      <div style={{ marginBottom: '2rem' }}>  
        <h2 style={{  
          fontFamily: 'Cormorant Garamond, serif',  
          fontSize: '1.5rem',  
          fontWeight: 400,  
          marginBottom: '1rem',  
        }}>  
          Sojourn Dossiers  
        </h2>  
        <div style={{ display: 'flex', gap: '1rem' }}>  
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
      </div>

      <div style={{  
        background: '#111111',  
        border: '1px solid #1A1A1A',  
        borderRadius: '4px',  
        overflow: 'hidden',  
      }}>  
        <div style={{  
          display: 'grid',  
          gridTemplateColumns: '2fr 2fr 1fr 1.5fr 1fr',  
          padding: '0.75rem 1rem',  
          borderBottom: '1px solid #1A1A1A',  
          fontSize: '0.7rem',  
          textTransform: 'uppercase',  
          letterSpacing: '0.1em',  
          color: '#666',  
        }}>  
          <div>Name</div>  
          <div>Email</div>  
          <div>Status</div>  
          <div>Submitted</div>  
          <div>Actions</div>  
        </div>  
        {fetching ? (  
          <div style={{  
            padding: '3rem 1rem',  
            textAlign: 'center',  
            color: '#666',  
            fontSize: '0.9rem',  
          }}>  
            <div style={{ animation: 'pulse 1.5s ease-in-out infinite' }}>  
              Loading dossiers...  
            </div>  
            <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }`}</style>  
          </div>  
        ) : filteredDossiers.length === 0 ? (  
          <div style={{  
            padding: '3rem 1rem',  
            textAlign: 'center',  
            color: '#666',  
            fontSize: '0.9rem',  
          }}>  
            {dossiers.length === 0 ? 'No dossiers found' : 'No results match your search'}  
          </div>  
        ) : (  
          filteredDossiers.map((dossier) => (  
            <div key={dossier.id} style={{  
              display: 'grid',  
              gridTemplateColumns: '2fr 2fr 1fr 1.5fr 1fr',  
              padding: '0.75rem 1rem',  
              borderBottom: '1px solid #1A1A1A',  
              fontSize: '0.85rem',  
              alignItems: 'center',  
            }}>  
              <div>{dossier.name}</div>  
              <div style={{ color: '#888' }}>{dossier.email}</div>  
              <div>  
                <span style={{  
                  display: 'inline-block',  
                  padding: '0.2rem 0.5rem',  
                  borderRadius: '3px',  
                  fontSize: '0.75rem',  
                  fontWeight: 500,  
                  background: dossier.status === 'Accepted' ? '#1A3A1A' : dossier.status === 'Declined' ? '#3A1A1A' : '#2A2A1A',  
                  color: dossier.status === 'Accepted' ? '#7ED37E' : dossier.status === 'Declined' ? '#E74C3C' : '#D4AF37',  
                }}>  
                  {dossier.status}  
                </span>  
              </div>  
              <div style={{ color: '#666', fontSize: '0.8rem' }}>  
                {new Date(dossier.created_at).toLocaleDateString('en-US', {  
                  month: 'short',  
                  day: 'numeric',  
                  year: 'numeric',  
                })}  
              </div>  
              <div>  
                <button style={{  
                  background: 'none',  
                  border: '1px solid #2A2A2A',  
                  borderRadius: '3px',  
                  color: '#F5F5F0',  
                  padding: '0.3rem 0.75rem',  
                  fontFamily: 'Inter, sans-serif',  
                  fontSize: '0.75rem',  
                  cursor: 'pointer',  
                }}>  
                  View  
                </button>  
              </div>  
            </div>  
          ))  
        )}  
      </div>  
    </main>  
  </div>  
)  
}  
