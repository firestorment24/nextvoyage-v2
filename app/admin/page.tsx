'use client';

import { useState, useEffect } from 'react';

interface Dossier {  
  id: number;  
  name: string;  
  email: string;  
  phone: string;  
  destination: string;  
  travel_dates: string;  
  occasion: string;  
  party_size: number;  
  aviation_class: string;  
  hear_about: string;  
  notes: string;  
  status: string;  
  source: string;  
  created_at: string;  
}
 
const statusColors: Record<string, string> = {  
  'New': 'border-l-4 border-l-[#D4AF37]',  
  'Contacted': 'border-l-4 border-l-blue-400',  
  'In Discussion': 'border-l-4 border-l-purple-400',  
  'Accepted': 'border-l-4 border-l-green-400',  
  'Declined': 'border-l-4 border-l-red-400',  
};

const statusOptions = ['New', 'Contacted', 'In Discussion', 'Accepted', 'Declined'];

export default function AdminPage() {  
  const [password, setPassword] = useState('');  
  const [authenticated, setAuthenticated] = useState(false);  
  const [dossiers, setDossiers] = useState<Dossier[]>([]);  
  const [loading, setLoading] = useState(true);  
  const [selected, setSelected] = useState<Dossier | null>(null);  
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  useEffect(() => {  
    const stored = sessionStorage.getItem('adminAuth');  
    if (stored === 'true') {  
      setAuthenticated(true);  
      fetchDossiers();  
    } else {  
      setLoading(false);  
    }  
  }, []);

  const handleLogin = async () => {  
    const res = await fetch('/api/admin/verify', {  
      method: 'POST',  
      headers: { 'Content-Type': 'application/json' },  
      body: JSON.stringify({ password }),  
    });  
    if (res.ok) {  
      sessionStorage.setItem('adminAuth', 'true');  
      setAuthenticated(true);  
      fetchDossiers();  
    } else {  
      alert('Incorrect password');  
    }  
  };

  const fetchDossiers = async () => {  
    setLoading(true);  
    try {  
      const res = await fetch('/api/admin/dossiers');  
      const data = await res.json();  
      setDossiers(data.dossiers || []);  
    } catch (err) {  
      console.error('Failed to fetch dossiers:', err);  
    } finally {  
      setLoading(false);  
    }  
  };

  const updateStatus = async (id: number, newStatus: string) => {  
    setUpdatingId(id);  
    try {  
      const res = await fetch(`/api/lead/${id}`, {  
        method: 'PATCH',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({ status: newStatus }),  
      });  
      if (res.ok) {  
        setDossiers(prev =>  
          prev.map(d => (d.id === id ? { ...d, status: newStatus } : d))  
        );  
        setSelected(prev => (prev && prev.id === id ? { ...prev, status: newStatus } : prev));  
      }  
    } catch (err) {  
      console.error('Failed to update status:', err);  
    } finally {  
      setUpdatingId(null);  
    }  
  };

  const handleLogout = () => {  
    sessionStorage.removeItem('adminAuth');  
    setAuthenticated(false);  
    setPassword('');  
  };

  if (!authenticated) {  
    return (  
      <div style={{  
        minHeight: '100vh',  
        background: '#0A0A0A',  
        display: 'flex',  
        alignItems: 'center',  
        justifyContent: 'center',  
        fontFamily: 'Inter, sans-serif',  
      }}>  
        <div style={{  
          background: '#111',  
          padding: '48px',  
          borderRadius: '12px',  
          border: '1px solid #222',  
          width: '100%',  
          maxWidth: '400px',  
        }}>  
          <h1 style={{  
            fontFamily: '"Cormorant Garamond", serif',  
            fontSize: '28px',  
            color: '#D4AF37',  
            margin: '0 0 24px',  
            textAlign: 'center',  
          }}>  
            NexVoyage  
          </h1>  
          <p style={{ color: '#888', textAlign: 'center', margin: '0 0 24px', fontSize: '14px' }}>  
            Executive Dashboard  
          </p>  
          <input  
            type="password"  
            placeholder="Enter access code"  
            value={password}  
            onChange={e => setPassword(e.target.value)}  
            onKeyDown={e => e.key === 'Enter' && handleLogin()}  
            style={{  
              width: '100%',  
              padding: '12px 16px',  
              background: '#1A1A1A',  
              border: '1px solid #333',  
              borderRadius: '8px',  
              color: '#fff',  
              fontSize: '14px',  
              outline: 'none',  
              boxSizing: 'border-box',  
              marginBottom: '16px',  
            }}  
          />  
          <button  
            onClick={handleLogin}  
            style={{  
              width: '100%',  
              padding: '12px',  
              background: '#D4AF37',  
              border: 'none',  
              borderRadius: '8px',  
              color: '#0A0A0A',  
              fontSize: '14px',  
              fontWeight: 600,  
              cursor: 'pointer',  
            }}  
          >  
            Enter  
          </button>  
        </div>  
      </div>  
    );  
  }

  if (loading) {  
    return (  
      <div style={{  
        minHeight: '100vh',  
        background: '#0A0A0A',  
        display: 'flex',  
        alignItems: 'center',  
        justifyContent: 'center',  
        fontFamily: 'Inter, sans-serif',  
        color: '#888',  
      }}>  
        Loading dossiers...  
      </div>  
    );  
  }

  const stats = {  
    total: dossiers.length,  
    new: dossiers.filter(d => d.status === 'New').length,  
    inDiscussion: dossiers.filter(d => d.status === 'In Discussion').length,  
    accepted: dossiers.filter(d => d.status === 'Accepted').length,  
  };

  const formatDate = (dateStr: string) => {  
    if (!dateStr) return '—';  
    return new Date(dateStr).toLocaleDateString('en-US', {  
      month: 'short',  
      day: 'numeric',  
      year: 'numeric',  
    });  
  };

  return (  
    <div style={{  
      minHeight: '100vh',  
      background: '#0A0A0A',  
      fontFamily: 'Inter, sans-serif',  
      color: '#fff',  
    }}>  
      {/* Header */}  
      <header style={{  
        borderBottom: '1px solid #1A1A1A',  
        padding: '20px 32px',  
        display: 'flex',  
        justifyContent: 'space-between',  
        alignItems: 'center',  
      }}>  
        <div>  
          <h1 style={{  
            fontFamily: '"Cormorant Garamond", serif',  
            fontSize: '22px',  
            color: '#D4AF37',  
            margin: 0,  
          }}>  
            NexVoyage <span style={{ color: '#555', fontWeight: 300 }}>· Admin</span>  
          </h1>  
        </div>  
        <button  
          onClick={handleLogout}  
          style={{  
            background: 'none',  
            border: '1px solid #333',  
            color: '#888',  
            padding: '8px 16px',  
            borderRadius: '6px',  
            fontSize: '13px',  
            cursor: 'pointer',  
          }}  
        >  
          Sign Out  
        </button>  
      </header>

      <main style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>  
        {/* Stats */}  
        <div style={{  
          display: 'grid',  
          gridTemplateColumns: 'repeat(4, 1fr)',  
          gap: '16px',  
          marginBottom: '32px',  
        }}>  
          {[  
            { label: 'Total Dossiers', value: stats.total, color: '#D4AF37' },  
            { label: 'New', value: stats.new, color: '#fff' },  
            { label: 'In Discussion', value: stats.inDiscussion, color: '#a78bfa' },  
            { label: 'Accepted', value: stats.accepted, color: '#4ade80' },  
          ].map(stat => (  
            <div key={stat.label} style={{  
              background: '#111',  
              border: '1px solid #1A1A1A',  
              borderRadius: '10px',  
              padding: '20px',  
            }}>  
              <p style={{ color: '#666', fontSize: '12px', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '1px' }}>  
                {stat.label}  
              </p>  
              <p style={{ color: stat.color, fontSize: '36px', fontFamily: '"Cormorant Garamond", serif', margin: 0 }}>  
                {stat.value}  
              </p>  
            </div>  
          ))}  
        </div>

        {/* Table */}  
        <div style={{  
          background: '#111',  
          border: '1px solid #1A1A1A',  
          borderRadius: '10px',  
          overflow: 'hidden',  
        }}>  
          <div style={{  
            padding: '20px 24px',  
            borderBottom: '1px solid #1A1A1A',  
            display: 'flex',  
            justifyContent: 'space-between',  
            alignItems: 'center',  
          }}>  
            <h2 style={{  
              fontFamily: '"Cormorant Garamond", serif',  
              fontSize: '18px',  
              color: '#D4AF37',  
              margin: 0,  
            }}>  
              Sojourn Dossiers  
            </h2>  
            <span style={{ color: '#555', fontSize: '13px' }}>  
              {dossiers.length} total  
            </span>  
          </div>

          <div style={{ overflowX: 'auto' }}>  
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>  
              <thead>  
                <tr style={{ borderBottom: '1px solid #1A1A1A' }}>  
                  {['Name', 'Email', 'Destination', 'Status', 'Submitted', ''].map(h => (  
                    <th key={h} style={{  
                      textAlign: 'left',  
                      padding: '12px 20px',  
                      fontSize: '12px',  
                      color: '#555',  
                      textTransform: 'uppercase',  
                      letterSpacing: '1px',  
                      fontWeight: 500,  
                    }}>  
                      {h}  
                    </th>  
                  ))}  
                </tr>  
              </thead>  
              <tbody>  
                {dossiers.length === 0 ? (  
                  <tr>  
                    <td colSpan={6} style={{ padding: '40px', textAlign: 'center', color: '#555' }}>  
                      No dossiers yet  
                    </td>  
                  </tr>  
                ) : (  
                  dossiers.map(d => (  
                    <tr  
                      key={d.id}  
                      onClick={() => setSelected(d)}  
                      style={{  
                        borderBottom: '1px solid #0A0A0A',  
                        cursor: 'pointer',  
                        transition: 'background 0.15s',  
                        ...(d.id === selected?.id ? { background: '#1A1A1A' } : {}),  
                      }}  
                      onMouseEnter={e => { if (d.id !== selected?.id) e.currentTarget.style.background = '#161616'; }}  
                      onMouseLeave={e => { if (d.id !== selected?.id) e.currentTarget.style.background = 'transparent'; }}  
                    >  
                      <td style={{ padding: '14px 20px', fontSize: '14px' }}>{d.name}</td>  
                      <td style={{ padding: '14px 20px', fontSize: '13px', color: '#888' }}>{d.email}</td>  
                      <td style={{ padding: '14px 20px', fontSize: '13px', color: '#aaa' }}>{d.destination}</td>  
                      <td style={{ padding: '14px 20px' }}>  
                        <span style={{  
                          display: 'inline-block',  
                          padding: '4px 12px',  
                          borderRadius: '20px',  
                          fontSize: '12px',  
                          fontWeight: 500,  
                          background:  
                            d.status === 'New' ? 'rgba(212, 175, 55, 0.12)' :  
                            d.status === 'Contacted' ? 'rgba(96, 165, 250, 0.12)' :  
                            d.status === 'In Discussion' ? 'rgba(167, 139, 250, 0.12)' :  
                            d.status === 'Accepted' ? 'rgba(74, 222, 128, 0.12)' :  
                            'rgba(248, 113, 113, 0.12)',  
                          color:  
                            d.status === 'New' ? '#D4AF37' :  
                            d.status === 'Contacted' ? '#60a5fa' :  
                            d.status === 'In Discussion' ? '#a78bfa' :  
                            d.status === 'Accepted' ? '#4ade80' :  
                            '#f87171',  
                        }}>  
                          {d.status}  
                        </span>  
                      </td>  
                      <td style={{ padding: '14px 20px', fontSize: '13px', color: '#555' }}>  
                        {formatDate(d.created_at)}  
                      </td>  
                      <td style={{ padding: '14px 20px' }}>  
                        <button  
                          onClick={e => { e.stopPropagation(); setSelected(d); }}  
                          style={{  
                            background: 'none',  
                            border: '1px solid #333',  
                            color: '#aaa',  
                            padding: '6px 14px',  
                            borderRadius: '6px',  
                            fontSize: '12px',  
                            cursor: 'pointer',  
                          }}  
                        >  
                          View  
                        </button>  
                      </td>  
                    </tr>  
                  ))  
                )}  
              </tbody>  
            </table>  
          </div>  
        </div>  
      </main>

      {/* Detail Modal */}  
      {selected && (  
        <div  
          onClick={() => setSelected(null)}  
          style={{  
            position: 'fixed',  
            inset: 0,  
            background: 'rgba(0,0,0,0.7)',  
            display: 'flex',  
            alignItems: 'center',  
            justifyContent: 'center',  
            zIndex: 100,  
            padding: '20px',  
          }}  
        >  
          <div  
            onClick={e => e.stopPropagation()}  
            style={{  
              background: '#111',  
              border: '1px solid #222',  
              borderRadius: '12px',  
              width: '100%',  
              maxWidth: '560px',  
              maxHeight: '90vh',  
              overflowY: 'auto',  
            }}  
          >  
            {/* Modal Header */}  
            <div style={{  
              padding: '24px',  
              borderBottom: '1px solid #1A1A1A',  
              display: 'flex',  
              justifyContent: 'space-between',  
              alignItems: 'flex-start',  
            }}>  
              <div>  
                <h2 style={{  
                  fontFamily: '"Cormorant Garamond", serif',  
                  fontSize: '22px',  
                  color: '#D4AF37',  
                  margin: '0 0 4px',  
                }}>  
                  {selected.name}  
                </h2>  
                <p style={{ color: '#666', fontSize: '13px', margin: 0 }}>  
                  Dossier · {formatDate(selected.created_at)}  
                </p>  
              </div>  
              <button  
                onClick={() => setSelected(null)}  
                style={{  
                  background: 'none',  
                  border: '1px solid #333',  
                  color: '#888',  
                  width: '32px',  
                  height: '32px',  
                  borderRadius: '8px',  
                  cursor: 'pointer',  
                  fontSize: '16px',  
                  display: 'flex',  
                  alignItems: 'center',  
                  justifyContent: 'center',  
                }}  
              >  
                ✕  
              </button>  
            </div>

            {/* Modal Body */}  
            <div style={{ padding: '24px' }}>  
              {/* Contact Info */}  
              <div style={{ marginBottom: '24px' }}>  
                <p style={{ color: '#555', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 12px' }}>  
                  Contact  
                </p>  
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>  
                  <div>  
                    <p style={{ color: '#666', fontSize: '12px', margin: '0 0 4px' }}>Email</p>  
                    <p style={{ color: '#ccc', fontSize: '14px', margin: 0 }}>{selected.email}</p>  
                  </div>  
                  <div>  
                    <p style={{ color: '#666', fontSize: '12px', margin: '0 0 4px' }}>Phone</p>  
                    <p style={{ color: '#ccc', fontSize: '14px', margin: 0 }}>{selected.phone || '—'}</p>  
                  </div>  
                </div>  
              </div>

              {/* Trip Details */}  
              <div style={{ marginBottom: '24px' }}>  
                <p style={{ color: '#555', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 12px' }}>  
                  Mission Parameters  
                </p>  
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>  
                  <div>  
                    <p style={{ color: '#666', fontSize: '12px', margin: '0 0 4px' }}>Destination</p>  
                    <p style={{ color: '#ccc', fontSize: '14px', margin: 0 }}>{selected.destination}</p>  
                  </div>  
                  <div>  
                    <p style={{ color: '#666', fontSize: '12px', margin: '0 0 4px' }}>Travel Window</p>  
                    <p style={{ color: '#ccc', fontSize: '14px', margin: 0 }}>{selected.travel_dates || '—'}</p>  
                  </div>  
                  <div>  
                    <p style={{ color: '#666', fontSize: '12px', margin: '0 0 4px' }}>Occasion</p>  
                    <p style={{ color: '#ccc', fontSize: '14px', margin: 0 }}>{selected.occasion || '—'}</p>  
                  </div>  
                  <div>  
                    <p style={{ color: '#666', fontSize: '12px', margin: '0 0 4px' }}>Party Size</p>  
                    <p style={{ color: '#ccc', fontSize: '14px', margin: 0 }}>{selected.party_size || '—'}</p>  
                  </div>  
                  <div>  
                    <p style={{ color: '#666', fontSize: '12px', margin: '0 0 4px' }}>Aviation Class</p>  
                    <p style={{ color: '#ccc', fontSize: '14px', margin: 0 }}>{selected.aviation_class || '—'}</p>  
                  </div>  
                  <div>  
                    <p style={{ color: '#666', fontSize: '12px', margin: '0 0 4px' }}>Discovered Via</p>  
                    <p style={{ color: '#ccc', fontSize: '14px', margin: 0 }}>{selected.hear_about || '—'}</p>  
                  </div>  
                </div>  
              </div>

              {/* Notes */}  
              {selected.notes && (  
                <div style={{ marginBottom: '24px' }}>  
                  <p style={{ color: '#555', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 8px' }}>  
                    Discretion Notes  
                  </p>  
                  <p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>  
                    {selected.notes}  
                  </p>  
                </div>  
              )}

              {/* Source */}  
              <div style={{ marginBottom: '24px' }}>  
                <p style={{ color: '#555', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 4px' }}>  
                  Source  
                </p>  
                <p style={{ color: '#888', fontSize: '13px', margin: 0 }}>{selected.source || '—'}</p>  
              </div>

              {/* Status Controls */}  
              <div style={{  
                borderTop: '1px solid #1A1A1A',  
                paddingTop: '20px',  
              }}>  
                <p style={{ color: '#555', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 12px' }}>  
                  Funnel Status  
                </p>  
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>  
                  {statusOptions.map(s => {  
                    const isActive = selected.status === s;  
                    const isUpdating = updatingId === selected.id;

                    return (  
                      <button  
                        key={s}  
                        disabled={isUpdating}  
                        onClick={() => updateStatus(selected.id, s)}  
                        style={{  
                          padding: '8px 18px',  
                          borderRadius: '20px',  
                          border: '1px solid',  
                          fontSize: '13px',  
                          fontWeight: 500,  
                          cursor: isActive ? 'default' : 'pointer',  
                          opacity: isUpdating ? 0.6 : 1,  
                          transition: 'all 0.15s',  
                          ...(isActive  
                            ? {  
                                background:  
                                  s === 'New' ? 'rgba(212, 175, 55, 0.2)' :  
                                  s === 'Contacted' ? 'rgba(96, 165, 250, 0.2)' :  
                                  s === 'In Discussion' ? 'rgba(167, 139, 250, 0.2)' :  
                                  s === 'Accepted' ? 'rgba(74, 222, 128, 0.2)' :  
                                  'rgba(248, 113, 113, 0.2)',  
                                borderColor:  
                                  s === 'New' ? '#D4AF37' :  
                                  s === 'Contacted' ? '#60a5fa' :  
                                  s === 'In Discussion' ? '#a78bfa' :  
                                  s === 'Accepted' ? '#4ade80' :  
                                  '#f87171',  
                                color:  
                                  s === 'New' ? '#D4AF37' :  
                                  s === 'Contacted' ? '#60a5fa' :  
                                  s === 'In Discussion' ? '#a78bfa' :  
                                  s === 'Accepted' ? '#4ade80' :  
                                  '#f87171',  
                              }  
                            : {  
                                background: 'transparent',  
                                borderColor: '#333',  
                                color: '#666',  
                              })  
                        }}  
                      >  
                        {isUpdating && updatingId === selected.id ? '···' : s}  
                      </button>  
                    );  
                  })}  
                </div>  
              </div>  
            </div>  
          </div>  
        </div>  
      )}  
    </div>  
  );  
}  
