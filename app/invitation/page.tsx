'use client'

import { useState, type FormEvent } from 'react'

const OCCASIONS = [  
  'Select occasion…',  
  'Leisure & Discovery',  
  'Milestone Celebration',  
  'Corporate Retreat',  
  'Family Odyssey',  
  'Honeymoon',  
  'Private Event',  
  'Other',  
]

const AVIATION_CLASSES = [  
  'Select preference…',  
  'Commercial First Class',  
  'Commercial Business',  
  'Private Charter',  
  'NetJets / Fractional',  
  'Helicopter Transfer',  
]

const HEAR_ABOUT = [  
  'Select source…',  
  'Personal Referral',  
  'Social Media',  
  'Press / Editorial',  
  'Search Engine',  
  'Event',  
  'Travel Advisor',  
  'Other',  
]

export default function InvitationPage() {  
  const [submitted, setSubmitted] = useState(false)  
  const [loading, setLoading] = useState(false)  
  const [error, setError] = useState('')

  const [form, setForm] = useState({  
    name: '',  
    email: '',  
    phone: '',  
    occasion: '',  
    destinations: '',  
    travelWindow: '',  
    partySize: 1,  
    aviationClass: '',  
    hearAbout: '',  
    notes: '',  
  })

  function h(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {  
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))  
  }

  async function onSubmit(e: FormEvent) {  
    e.preventDefault()  
    setLoading(true)  
    setError('')  
    try {  
      const r = await fetch('/api/lead', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({ ...form, partySize: Number(form.partySize), source: 'Application for Entry' }),  
      })  
      if (!r.ok) throw new Error('fail')  
      setSubmitted(true)  
    } catch {  
      setError('Something went wrong. Please try again.')  
    } finally {  
      setLoading(false)  
    }  
  }

  if (submitted) {  
    return (  
      <main style={s.page}>  
        <div style={{ ...s.successWrap, background: 'transparent' }}>  
          <div style={s.check}>✓</div>  
          <h1 style={{ ...s.h1, marginBottom: 8 }}>Application Received</h1>  
          <p style={s.brass}>Dialogue Initiated</p>  
          <p style={s.body}>  
            Your travel preferences are now being reviewed by our concierge team.  
            A member of the Collective will reach out within 48 hours.  
          </p>  
          <a href="/" style={s.link}>Return to Lobby</a>  
        </div>  
        <p style={s.footer}>Rachel — Reception & Orchestration • NexVoyage Collective</p>  
        <style>{nukeCss}</style>  
      </main>  
    )  
  }

  return (  
    <main style={s.page}>  
      <div style={{ maxWidth: 560, width: '100%', margin: '0 auto', background: 'transparent' }}>  
        <p style={s.badge}>RACHEL — RECEPTION & ORCHESTRATION</p>  
        <h1 style={s.h1}>Application for Entry</h1>  
        <p style={s.sub}>The Collective operates on invitation. Submit your profile below for consideration.</p>

        <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20, background: 'transparent' }}>

          {/* 01 */}  
          <p style={s.num}>01</p>  
          <h2 style={s.secTitle}>The Sovereign Profile</h2>

          <div style={s.field}>  
            <label style={s.label}>Full Name *</label>  
            <input name="name" value={form.name} onChange={h} required style={s.inp} placeholder="e.g. James Whitfield" />  
          </div>  
          <div style={s.field}>  
            <label style={s.label}>Email Address *</label>  
            <input name="email" type="email" value={form.email} onChange={h} required style={s.inp} placeholder="james@example.com" />  
          </div>  
          <div style={s.field}>  
            <label style={s.label}>Phone Number *</label>  
            <input name="phone" type="tel" value={form.phone} onChange={h} required style={s.inp} placeholder="+1 212 555 0198" />  
          </div>

          <div style={{ height: 32, background: 'transparent' }} />

          {/* 02 */}  
          <p style={s.num}>02</p>  
          <h2 style={s.secTitle}>Mission Parameters</h2>

          <div style={s.field}>  
            <label style={s.label}>Occasion / Intent</label>  
            <select name="occasion" value={form.occasion} onChange={h} style={s.inp}>  
              {OCCASIONS.map(o => <option key={o} value={o === 'Select occasion…' ? '' : o}>{o}</option>)}  
            </select>  
          </div>  
          <div style={s.field}>  
            <label style={s.label}>Desired Destinations</label>  
            <input name="destinations" value={form.destinations} onChange={h} style={s.inp} placeholder="e.g. Santorini, Kyoto, Patagonia" />  
          </div>  
          <div style={s.field}>  
            <label style={s.label}>Travel Window</label>  
            <input name="travelWindow" value={form.travelWindow} onChange={h} style={s.inp} placeholder="e.g. Q4 2026 or March 2027" />  
          </div>  
          <div style={s.field}>  
            <label style={s.label}>Party Size</label>  
            <input name="partySize" type="number" min={1} value={form.partySize} onChange={h} style={s.inp} />  
          </div>  
          <div style={s.field}>  
            <label style={s.label}>Aviation Class</label>  
            <select name="aviationClass" value={form.aviationClass} onChange={h} style={s.inp}>  
              {AVIATION_CLASSES.map(a => <option key={a} value={a === 'Select preference…' ? '' : a}>{a}</option>)}  
            </select>  
          </div>

          <div style={{ height: 32, background: 'transparent' }} />

          {/* 03 */}  
          <p style={s.num}>03</p>  
          <h2 style={s.secTitle}>Cultural Fit</h2>

          <div style={s.field}>  
            <label style={s.label}>How did you hear about us?</label>  
            <select name="hearAbout" value={form.hearAbout} onChange={h} style={s.inp}>  
              {HEAR_ABOUT.map(h => <option key={h} value={h === 'Select source…' ? '' : h}>{h}</option>)}  
            </select>  
          </div>  
          <div style={s.field}>  
            <label style={s.label}>Additional Notes / Preferences</label>  
            <textarea name="notes" value={form.notes} onChange={h} style={{ ...s.inp, minHeight: 100, resize: 'vertical' }} placeholder="Anything else we should know…" />  
          </div>

          {error && <p style={{ color: '#c0392b', fontSize: 13 }}>{error}</p>}

          <button type="submit" disabled={loading} style={s.btn}>  
            {loading ? 'Transmitting…' : 'Submit Application'}  
          </button>  
        </form>  
      </div>

      <p style={s.footer}>Rachel — Reception & Orchestration • NexVoyage Collective</p>  
      <style>{nukeCss}</style>  
    </main>  
  )  
}

// --- Styles ---

const s: Record<string, React.CSSProperties> = {  
  page: {  
    backgroundColor: '#0a0a0a',  
    minHeight: '100vh',  
    color: '#f0ede6',  
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",  
    padding: '60px 24px',  
    display: 'flex',  
    flexDirection: 'column',  
    alignItems: 'center',  
    justifyContent: 'center',  
  },  
  badge: {  
    fontSize: 11,  
    letterSpacing: 3,  
    textTransform: 'uppercase',  
    color: '#d4af37',  
    marginBottom: 8,  
  },  
  h1: {  
    fontSize: 32,  
    fontWeight: 300,  
    letterSpacing: 1,  
    margin: '0 0 8px 0',  
    color: '#f0ede6',  
  },  
  sub: {  
    fontSize: 14,  
    color: '#a09c94',  
    lineHeight: 1.6,  
    marginBottom: 48,  
  },  
  num: {  
    fontSize: 48,  
    fontWeight: 100,  
    color: '#2a2a2a',  
    lineHeight: 1,  
    margin: '0 0 4px 0',  
  },  
  secTitle: {  
    fontSize: 20,  
    fontWeight: 300,  
    fontStyle: 'italic',  
    color: '#d4af37',  
    margin: '0 0 20px 0',  
    letterSpacing: 0.5,  
  },  
  field: {  
    display: 'flex',  
    flexDirection: 'column',  
    gap: 6,  
    background: 'transparent',  
  },  
  label: {  
    fontSize: 11,  
    letterSpacing: 2,  
    textTransform: 'uppercase',  
    color: '#8a867e',  
  },  
  inp: {  
    background: 'transparent',  
    border: '1px solid #2a2a2a',  
    borderRadius: 0,  
    padding: '12px 14px',  
    fontSize: 14,  
    color: '#f0ede6',  
    outline: 'none',  
    fontFamily: 'inherit',  
    WebkitAppearance: 'none',  
  },  
  btn: {  
    marginTop: 12,  
    background: 'transparent',  
    border: '1px solid #d4af37',  
    color: '#d4af37',  
    padding: '14px 28px',  
    fontSize: 13,  
    letterSpacing: 2,  
    textTransform: 'uppercase',  
    cursor: 'pointer',  
    fontFamily: 'inherit',  
  },  
  successWrap: {  
    textAlign: 'center' as const,  
    maxWidth: 480,  
  },  
  check: {  
    fontSize: 64,  
    color: '#d4af37',  
    animation: 'scaleIn 0.5s ease-out',  
    marginBottom: 16,  
  },  
  brass: {  
    color: '#d4af37',  
    fontSize: 14,  
    letterSpacing: 2,  
    textTransform: 'uppercase',  
    marginBottom: 24,  
  },  
  body: {  
    fontSize: 14,  
    color: '#a09c94',  
    lineHeight: 1.7,  
    marginBottom: 32,  
  },  
  link: {  
    color: '#d4af37',  
    textDecoration: 'none',  
    fontSize: 13,  
    letterSpacing: 2,  
    textTransform: 'uppercase',  
    borderBottom: '1px solid #d4af37',  
    paddingBottom: 2,  
  },  
  footer: {  
    marginTop: 80,  
    fontSize: 11,  
    color: '#4a4a4a',  
    letterSpacing: 1.5,  
    textTransform: 'uppercase',  
  },  
}

// --- Nuclear ghost killer ---

const nukeCss = `  
@keyframes scaleIn {  
  0% { transform: scale(0); opacity: 0; }  
  60% { transform: scale(1.2); opacity: 1; }  
  100% { transform: scale(1); opacity: 1; }  
}  
html, body, main, div, section, form, p, h1, h2, span, a {  
  background-color: #0a0a0a !important;  
}  
input, select, textarea, button {  
  background-color: #0a0a0a !important;  
  border-color: #2a2a2a !important;  
  color: #f0ede6 !important;  
}  
input:-webkit-autofill,  
input:-webkit-autofill:hover,  
input:-webkit-autofill:focus,  
input:-webkit-autofill:active,  
select:-webkit-autofill,  
textarea:-webkit-autofill {  
  -webkit-box-shadow: 0 0 0 1000px #0a0a0a inset !important;  
  -webkit-text-fill-color: #f0ede6 !important;  
}  
option {  
  background-color: #0a0a0a !important;  
  color: #f0ede6 !important;  
}  
`  
