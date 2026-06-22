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

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {  
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))  
  }

  async function handleSubmit(e: FormEvent) {  
    e.preventDefault()  
    setLoading(true)  
    setError('')

    try {  
      const res = await fetch('/api/lead', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({  
          ...form,  
          partySize: Number(form.partySize),  
          source: 'Application for Entry',  
        }),  
      })

      if (!res.ok) throw new Error('Submission failed')

      setSubmitted(true)  
    } catch {  
      setError('Something went wrong. Please try again.')  
    } finally {  
      setLoading(false)  
    }  
  }

  if (submitted) {  
    return (  
      <main style={styles.page}>  
        <div style={styles.successWrap}>  
          <div style={styles.checkmark}>✓</div>  
          <h1 style={styles.heading}>Application Received</h1>  
          <p style={styles.brassSub}>Dialogue Initiated</p>  
          <p style={styles.bodyText}>  
            Your travel preferences are now being reviewed by our concierge team.  
            A member of the Collective will reach out within 48 hours.  
          </p>  
          <a href="/" style={styles.returnLink}>Return to Lobby</a>  
        </div>  
        <p style={styles.footer}>Rachel — Reception & Orchestration • NexVoyage Collective</p>

        <style>{successKeyframes}</style>  
      </main>  
    )  
  }

  return (  
    <main style={styles.page}>  
      <div style={styles.container}>  
        <p style={styles.badge}>RACHEL — RECEPTION & ORCHESTRATION</p>  
        <h1 style={styles.heading}>Application for Entry</h1>  
        <p style={styles.subtitle}>  
          The Collective operates on invitation. Submit your profile below for consideration.  
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>  
          {/* Section 1 */}  
          <SectionNumber number="01" />  
          <SectionTitle text="The Sovereign Profile" />

          <Field label="Full Name" required>  
            <input name="name" value={form.name} onChange={handleChange} required style={styles.input} placeholder="e.g. James Whitfield" />  
          </Field>

          <Field label="Email Address" required>  
            <input name="email" type="email" value={form.email} onChange={handleChange} required style={styles.input} placeholder="james@example.com" />  
          </Field>

          <Field label="Phone Number" required>  
            <input name="phone" type="tel" value={form.phone} onChange={handleChange} required style={styles.input} placeholder="+1 212 555 0198" />  
          </Field>

          {/* Section 2 */}  
          <div style={styles.sectionGap} />  
          <SectionNumber number="02" />  
          <SectionTitle text="Mission Parameters" />

          <Field label="Occasion / Intent">  
            <select name="occasion" value={form.occasion} onChange={handleChange} style={styles.select}>  
              {OCCASIONS.map((o) => <option key={o} value={o === 'Select occasion…' ? '' : o}>{o}</option>)}  
            </select>  
          </Field>

          <Field label="Desired Destinations">  
            <input name="destinations" value={form.destinations} onChange={handleChange} style={styles.input} placeholder="e.g. Santorini, Kyoto, Patagonia" />  
          </Field>

          <Field label="Travel Window">  
            <input name="travelWindow" value={form.travelWindow} onChange={handleChange} style={styles.input} placeholder="e.g. Q4 2026 or March 2027" />  
          </Field>

          <Field label="Party Size">  
            <input name="partySize" type="number" min={1} value={form.partySize} onChange={handleChange} style={styles.input} />  
          </Field>

          <Field label="Aviation Class">  
            <select name="aviationClass" value={form.aviationClass} onChange={handleChange} style={styles.select}>  
              {AVIATION_CLASSES.map((a) => <option key={a} value={a === 'Select preference…' ? '' : a}>{a}</option>)}  
            </select>  
          </Field>

          {/* Section 3 */}  
          <div style={styles.sectionGap} />  
          <SectionNumber number="03" />  
          <SectionTitle text="Cultural Fit" />

          <Field label="How did you hear about us?">  
            <select name="hearAbout" value={form.hearAbout} onChange={handleChange} style={styles.select}>  
              {HEAR_ABOUT.map((h) => <option key={h} value={h === 'Select source…' ? '' : h}>{h}</option>)}  
            </select>  
          </Field>

          <Field label="Additional Notes / Preferences">  
            <textarea name="notes" value={form.notes} onChange={handleChange} style={{ ...styles.input, ...styles.textarea }} placeholder="Anything else we should know…" />  
          </Field>

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" disabled={loading} style={styles.button}>  
            {loading ? 'Transmitting…' : 'Submit Application'}  
          </button>  
        </form>  
      </div>

      <p style={styles.footer}>Rachel — Reception & Orchestration • NexVoyage Collective</p>  
    </main>  
  )  
}

// --- Helpers ---

function SectionNumber({ number }: { number: string }) {  
  return <p style={styles.sectionNumber}>{number}</p>  
}

function SectionTitle({ text }: { text: string }) {  
  return <h2 style={styles.sectionTitle}>{text}</h2>  
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {  
  return (  
    <div style={styles.field}>  
      <label style={styles.label}>{label}{required && ' *'}</label>  
      {children}  
    </div>  
  )  
}

// --- Keyframes ---

const successKeyframes = `  
  @keyframes scaleIn {  
    0% { transform: scale(0); opacity: 0; }  
    60% { transform: scale(1.2); opacity: 1; }  
    100% { transform: scale(1); opacity: 1; }  
  }  
`

// --- Styles ---

const styles: Record<string, React.CSSProperties> = {  
  page: {  
    minHeight: '100vh',  
    backgroundColor: '#0a0a0a',  
    color: '#f0ede6',  
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",  
    display: 'flex',  
    flexDirection: 'column',  
    alignItems: 'center',  
    justifyContent: 'center',  
    padding: '60px 24px',  
  },  
  container: {  
    maxWidth: 560,  
    width: '100%',  
  },  
  badge: {  
    fontSize: 11,  
    letterSpacing: 3,  
    textTransform: 'uppercase' as const,  
    color: '#d4af37',  
    marginBottom: 8,  
  },  
  heading: {  
    fontSize: 32,  
    fontWeight: 300,  
    letterSpacing: 1,  
    margin: '0 0 8px 0',  
  },  
  subtitle: {  
    fontSize: 14,  
    color: '#a09c94',  
    lineHeight: 1.6,  
    marginBottom: 48,  
  },  
  form: {  
    display: 'flex',  
    flexDirection: 'column' as const,  
    gap: 20,  
  },  
  sectionGap: {  
    height: 32,  
  },  
  sectionNumber: {  
    fontSize: 48,  
    fontWeight: 100,  
    color: '#2a2a2a',  
    lineHeight: 1,  
    margin: '0 0 4px 0',  
  },  
  sectionTitle: {  
    fontSize: 20,  
    fontWeight: 300,  
    fontStyle: 'italic' as const,  
    color: '#d4af37',  
    margin: '0 0 20px 0',  
    letterSpacing: 0.5,  
  },  
  field: {  
    display: 'flex',  
    flexDirection: 'column' as const,  
    gap: 6,  
  },  
  label: {  
    fontSize: 11,  
    letterSpacing: 2,  
    textTransform: 'uppercase' as const,  
    color: '#8a867e',  
  },  
  input: {  
    background: 'transparent',  
    border: '1px solid #2a2a2a',  
    borderRadius: 0,  
    padding: '12px 14px',  
    fontSize: 14,  
    color: '#f0ede6',  
    outline: 'none',  
    fontFamily: 'inherit',  
    transition: 'border-color 0.2s',  
  },  
  textarea: {  
    minHeight: 100,  
    resize: 'vertical' as const,  
  },  
  select: {  
    background: 'transparent',  
    border: '1px solid #2a2a2a',  
    borderRadius: 0,  
    padding: '12px 14px',  
    fontSize: 14,  
    color: '#f0ede6',  
    outline: 'none',  
    fontFamily: 'inherit',  
    cursor: 'pointer',  
    appearance: 'none' as const,  
    WebkitAppearance: 'none',  
  },  
  button: {  
    marginTop: 12,  
    background: 'transparent',  
    border: '1px solid #d4af37',  
    color: '#d4af37',  
    padding: '14px 28px',  
    fontSize: 13,  
    letterSpacing: 2,  
    textTransform: 'uppercase' as const,  
    cursor: 'pointer',  
    transition: 'all 0.3s',  
    fontFamily: 'inherit',  
  },  
  error: {  
    color: '#c0392b',  
    fontSize: 13,  
  },  
  successWrap: {  
    textAlign: 'center' as const,  
    maxWidth: 480,  
  },  
  checkmark: {  
    fontSize: 64,  
    color: '#d4af37',  
    animation: 'scaleIn 0.5s ease-out',  
    marginBottom: 16,  
  },  
  brassSub: {  
    color: '#d4af37',  
    fontSize: 14,  
    letterSpacing: 2,  
    textTransform: 'uppercase' as const,  
    marginBottom: 24,  
  },  
  bodyText: {  
    fontSize: 14,  
    color: '#a09c94',  
    lineHeight: 1.7,  
    marginBottom: 32,  
  },  
  returnLink: {  
    color: '#d4af37',  
    textDecoration: 'none',  
    fontSize: 13,  
    letterSpacing: 2,  
    textTransform: 'uppercase' as const,  
    borderBottom: '1px solid #d4af37',  
    paddingBottom: 2,  
  },  
  footer: {  
    marginTop: 80,  
    fontSize: 11,  
    color: '#4a4a4a',  
    letterSpacing: 1.5,  
    textTransform: 'uppercase' as const,  
  },  
}  
