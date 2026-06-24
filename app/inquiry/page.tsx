'use client';

import { useState } from 'react';  
import { Cormorant_Garamond, Inter } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '600'] });  
const inter = Inter({ subsets: ['latin'] });

const OCCASIONS = [  
  { value: '', label: 'Select occasion' },  
  { value: 'anniversary', label: 'Anniversary' },  
  { value: 'birthday', label: 'Birthday' },  
  { value: 'honeymoon', label: 'Honeymoon' },  
  { value: 'family', label: 'Family' },  
  { value: 'business', label: 'Business' },  
  { value: 'wellness', label: 'Wellness' },  
  { value: 'adventure', label: 'Adventure' },  
  { value: 'celebration', label: 'Celebration' },  
  { value: 'other', label: 'Other' },  
];

const AVIATION_CLASSES = [  
  { value: '', label: 'Prefer not to specify' },  
  { value: 'commercial_first', label: 'Commercial First Class' },  
  { value: 'commercial_business', label: 'Commercial Business' },  
  { value: 'private_light', label: 'Private — Light Jet' },  
  { value: 'private_midsize', label: 'Private — Midsize Jet' },  
  { value: 'private_heavy', label: 'Private — Heavy Jet' },  
  { value: 'private_airliner', label: 'Private — Airbus/BBJ' },  
];

const HEAR_ABOUT = [  
  { value: '', label: 'Select' },  
  { value: 'referral', label: 'Personal Referral' },  
  { value: 'search', label: 'Web Search' },  
  { value: 'instagram', label: 'Instagram' },  
  { value: 'linkedin', label: 'LinkedIn' },  
  { value: 'event', label: 'Event / Gathering' },  
  { value: 'press', label: 'Press / Editorial' },  
  { value: 'other', label: 'Other' },  
];

export default function InquiryPage() {  
  const [form, setForm] = useState({  
    name: '',  
    email: '',  
    phone: '',  
    occasion: '',  
    destinations: '',  
    travelWindow: '',  
    partySize: '1',  
    aviationClass: '',  
    hearAbout: '',  
    notes: '',  
  });  
  const [submitting, setSubmitting] = useState(false);  
  const [submitted, setSubmitted] = useState(false);  
  const [manifestId, setManifestId] = useState('');

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {  
    setForm({ ...form, [field]: e.target.value });  
  };

  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault();  
    if (!form.name || !form.email) return;  
    setSubmitting(true);

    try {  
      const res = await fetch('/api/lead', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify(form),  
      });  
      const data = await res.json();  
      if (data.success) {  
        setManifestId(data.manifestId);  
        setSubmitted(true);  
      }  
    } catch (err) {  
      console.error(err);  
    } finally {  
      setSubmitting(false);  
    }  
  };

  if (submitted) {  
    return (  
      <main style={{  
        minHeight: '100vh',  
        background: '#0A0A0A',  
        color: '#EAEAEA',  
        display: 'flex',  
        flexDirection: 'column',  
        alignItems: 'center',  
        justifyContent: 'center',  
        padding: '40px 24px',  
        fontFamily: inter.style.fontFamily,  
      }}>  
        <div style={{ maxWidth: 480, textAlign: 'center' }}>  
          <div style={{  
            width: 48, height: 48, border: '1px solid #D4AF37', borderRadius: '50%',  
            display: 'flex', alignItems: 'center', justifyContent: 'center',  
            margin: '0 auto 24px', fontSize: 20, color: '#D4AF37',  
          }}>✓</div>  
          <h1 style={{  
            fontFamily: cormorant.style.fontFamily, fontSize: 28, fontWeight: 300,  
            color: '#D4AF37', margin: '0 0 8px', letterSpacing: '0.08em',  
          }}>Application Received</h1>  
          <p style={{ fontSize: 14, color: '#888', margin: '0 0 4px' }}>  
            Dialogue Initiated  
          </p>  
          <p style={{ fontSize: 12, color: '#666', margin: '24px 0 0' }}>  
            Reference: {manifestId}  
          </p>  
        </div>  
      </main>  
    );  
  }

  return (  
    <main style={{  
      minHeight: '100vh',  
      background: '#0A0A0A',  
      color: '#EAEAEA',  
      padding: '80px 24px 40px',  
      fontFamily: inter.style.fontFamily,  
    }}>  
      <div style={{ maxWidth: 560, margin: '0 auto' }}>  
        {/* Header */}  
        <div style={{ marginBottom: 48 }}>  
          <p style={{  
            fontSize: 11, color: '#D4AF37', letterSpacing: '0.15em', textTransform: 'uppercase',  
            margin: '0 0 8px',  
          }}>  
            Rachel — Reception & Orchestration  
          </p>  
          <h1 style={{  
            fontFamily: cormorant.style.fontFamily, fontSize: 32, fontWeight: 300,  
            color: '#EAEAEA', margin: 0, letterSpacing: '0.06em',  
          }}>  
            Application for Entry  
          </h1>  
        </div>

        <form onSubmit={handleSubmit}>  
          {/* Section: Sovereign Profile */}  
          <SectionTitle title="The Sovereign Profile" />

          <Field label="Full Name" required>  
            <input type="text" value={form.name} onChange={update('name')} placeholder="Full name" required />  
          </Field>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>  
            <Field label="Email" required>  
              <input type="email" value={form.email} onChange={update('email')} placeholder="Email address" required />  
            </Field>  
            <Field label="Phone">  
              <input type="tel" value={form.phone} onChange={update('phone')} placeholder="Phone number" />  
            </Field>  
          </div>

          {/* Section: Mission Parameters */}  
          <SectionTitle title="Mission Parameters" />

          <Field label="Occasion">  
            <select value={form.occasion} onChange={update('occasion')}>  
              {OCCASIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}  
            </select>  
          </Field>

          <Field label="Destinations of Interest">  
            <input type="text" value={form.destinations} onChange={update('destinations')} placeholder="e.g. Maldives, Kyoto, Tuscany" />  
          </Field>

          <Field label="Preferred Travel Window">  
            <input type="text" value={form.travelWindow} onChange={update('travelWindow')} placeholder="e.g. September 2026" />  
          </Field>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>  
            <Field label="Party Size">  
              <input type="number" min={1} value={form.partySize} onChange={update('partySize')} />  
            </Field>  
            <Field label="Aviation Class">  
              <select value={form.aviationClass} onChange={update('aviationClass')}>  
                {AVIATION_CLASSES.map(a => <option key={a.value} value={a.value}>{a.label}</option>)}  
              </select>  
            </Field>  
          </div>

          {/* Section: Cultural Fit */}  
          <SectionTitle title="Cultural Fit" />

          <Field label="How did you hear about us?">  
            <select value={form.hearAbout} onChange={update('hearAbout')}>  
              {HEAR_ABOUT.map(h => <option key={h.value} value={h.value}>{h.label}</option>)}  
            </select>  
          </Field>

          <Field label="Discretion Notes">  
            <textarea rows={3} value={form.notes} onChange={update('notes')} placeholder="Any preferences, constraints, or details we should know..." style={{ resize: 'vertical' }} />  
          </Field>

          <button type="submit" disabled={submitting || !form.name || !form.email} style={{  
            width: '100%', marginTop: 32, padding: '14px 24px',  
            background: submitting ? '#1A1A1A' : '#D4AF37', color: submitting ? '#666' : '#0A0A0A',  
            border: 'none', borderRadius: 2, fontSize: 13, fontWeight: 600,  
            letterSpacing: '0.12em', textTransform: 'uppercase', cursor: submitting ? 'not-allowed' : 'pointer',  
            transition: 'all 0.2s',  
          }}>  
            {submitting ? 'Submitting...' : 'Submit Application'}  
          </button>  
        </form>

        {/* Footer */}  
        <p style={{  
          textAlign: 'center', fontSize: 11, color: '#444', letterSpacing: '0.08em',  
          marginTop: 48, paddingTop: 24, borderTop: '1px solid #1A1A1A',  
        }}>  
          Rachel — Reception & Orchestration · NexVoyage Collective  
        </p>  
      </div>  
    </main>  
  );  
}

/* ---- Helpers ---- */

function SectionTitle({ title }: { title: string }) {  
  return (  
    <div style={{ margin: '32px 0 16px' }}>  
      <span style={{  
        fontSize: 10, color: '#D4AF37', letterSpacing: '0.18em', textTransform: 'uppercase',  
      }}>  
        {title}  
      </span>  
      <div style={{ height: 1, background: '#1A1A1A', marginTop: 6 }} />  
    </div>  
  );  
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {  
  return (  
    <div style={{ marginBottom: 16 }}>  
      <label style={{  
        display: 'block', fontSize: 11, color: '#888', letterSpacing: '0.08em',  
        textTransform: 'uppercase', marginBottom: 6,  
      }}>  
        {label}{required && <span style={{ color: '#D4AF37', marginLeft: 4 }}>*</span>}  
      </label>  
      {children}  
      <style>{`  
        input, select, textarea {  
          width: 100%;  
          padding: 10px 12px;  
          background: #111;  
          border: 1px solid #222;  
          border-radius: 2px;  
          color: #EAEAEA;  
          font-family: ${inter.style.fontFamily};  
          font-size: 14px;  
          outline: none;  
          transition: border-color 0.2s;  
          box-sizing: border-box;  
        }  
        input:focus, select:focus, textarea:focus {  
          border-color: #D4AF37;  
        }  
        input::placeholder, textarea::placeholder {  
          color: #444;  
        }  
        select {  
          cursor: pointer;  
        }  
        select option {  
          background: #0A0A0A;  
          color: #EAEAEA;  
        }  
      `}</style>  
    </div>  
  );  
}  
