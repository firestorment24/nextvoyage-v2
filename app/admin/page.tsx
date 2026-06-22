/**
 * FILE: app/admin/page.tsx
 *
 * Also create:
 * - app/api/admin/verify/route.ts  (POST handler that checks password against process.env.ADMIN_PASSWORD)
 *
 * Add to .env.local:
 * ADMIN_PASSWORD=your_secret_password_here
 *
 * Add to Vercel Environment Variables:
 * ADMIN_PASSWORD=your_secret_password_here
 */

'use client';

import { useEffect, useMemo, useState } from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type LeadStatus = 'New' | 'Reviewed' | 'Contacted' | 'Archived';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  destination: string;
  timeline: string;
  hearAbout: string;
  message: string;
  status: LeadStatus;
  submittedAt: string; // ISO date
}

// ---------------------------------------------------------------------------
// Mock data — structured so it can be swapped for an API call later.
// To go live, replace MOCK_LEADS with:  const res = await fetch('/api/admin/leads')
// ---------------------------------------------------------------------------

const MOCK_LEADS: Lead[] = [
  {
    id: 'lead_001',
    name: 'Eleanor Vance',
    email: 'eleanor.vance@meridian.com',
    phone: '+1 (212) 555-0173',
    destination: 'Aman Tokyo',
    timeline: 'Q3 2026 — September',
    hearAbout: 'Referral — Private Client',
    message:
      'Seeking a discreet seven-night stay with a private guide for the Imperial gardens and a kaiseki tasting itinerary. Two travellers.',
    status: 'New',
    submittedAt: '2026-06-19T09:24:00.000Z',
  },
  {
    id: 'lead_002',
    name: 'Idris Okonkwo',
    email: 'idris@okonkwo-holdings.co',
    phone: '+44 20 7946 0958',
    destination: 'Habitas AlUla',
    timeline: 'Q4 2026 — November',
    hearAbout: 'Robb Report Feature',
    message:
      'Interested in the desert dossier — stargazing, the heritage sites, and a wellness arc. Flexible on dates around the listening season.',
    status: 'Reviewed',
    submittedAt: '2026-06-17T14:08:00.000Z',
  },
  {
    id: 'lead_003',
    name: 'Sofia Marchetti',
    email: 'sofia.marchetti@atelier-m.it',
    phone: '+39 06 9802 1144',
    destination: 'Hotel Amigo',
    timeline: 'Q2 2026 — Immediate',
    hearAbout: 'Instagram',
    message:
      'A long weekend in Brussels tied to a private gallery opening. Requires a chauffeured car and a curated antiques circuit.',
    status: 'Contacted',
    submittedAt: '2026-06-15T11:42:00.000Z',
  },
  {
    id: 'lead_004',
    name: 'Theodore Ashworth',
    email: 'theo@ashworthcapital.com',
    phone: '+1 (415) 555-0291',
    destination: 'Aman New York',
    timeline: 'Q3 2026 — August',
    hearAbout: 'Concierge Partner',
    message:
      'Anniversary sojourn. Suite with skyline exposure, a private dining arrangement, and spa reservations for two.',
    status: 'New',
    submittedAt: '2026-06-20T16:55:00.000Z',
  },
  {
    id: 'lead_005',
    name: 'Amara Diallo',
    email: 'amara.diallo@diallo-arts.fr',
    phone: '+33 1 70 18 99 00',
    destination: 'Aman Venice',
    timeline: '2027 — Spring',
    hearAbout: 'Word of Mouth',
    message:
      'Planning a milestone celebration during the Biennale. Eight guests, requiring coordinated palazzo access and water transfers.',
    status: 'Archived',
    submittedAt: '2026-05-28T08:13:00.000Z',
  },
  {
    id: 'lead_006',
    name: 'Lukas Brandt',
    email: 'l.brandt@brandt-werk.de',
    phone: '+49 30 9210 0000',
    destination: 'Habitas Namibia',
    timeline: 'Q4 2026 — October',
    hearAbout: 'Referral — Private Client',
    message:
      'A photographic expedition focus — sossusvlei at dawn, minimal footprint, expert naturalist guide preferred.',
    status: 'Reviewed',
    submittedAt: '2026-06-12T19:30:00.000Z',
  },
];

// ---------------------------------------------------------------------------
// Status badge styling
// ---------------------------------------------------------------------------

const STATUS_STYLES: Record<LeadStatus, { color: string; bg: string; border: string }> = {
  New: { color: '#D4AF37', bg: 'rgba(212,175,55,0.10)', border: 'rgba(212,175,55,0.45)' },
  Reviewed: { color: '#9CA3AF', bg: 'rgba(107,114,128,0.12)', border: 'rgba(107,114,128,0.45)' },
  Contacted: { color: '#60A5FA', bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.45)' },
  Archived: { color: '#9CA3AF', bg: 'rgba(75,85,99,0.14)', border: 'rgba(75,85,99,0.45)' },
};

const STATUS_OPTIONS: LeadStatus[] = ['New', 'Reviewed', 'Contacted', 'Archived'];

function StatusBadge({ status }: { status: LeadStatus }) {
  const s = STATUS_STYLES[status];
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide"
      style={{ color: s.color, backgroundColor: s.bg, border: `1px solid ${s.border}` }}
    >
      {status}
    </span>
  );
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}

// ---------------------------------------------------------------------------
// Login overlay
// ---------------------------------------------------------------------------

function LoginOverlay({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        localStorage.setItem('admin_authenticated', 'true');
        onSuccess();
      } else {
        setError('Invalid credentials');
      }
    } catch {
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A] px-6">
      <div className="w-full max-w-md text-center">
        <h1
          className="text-4xl text-[#D4AF37] tracking-wide"
          style={{ fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif' }}
        >
          NexVoyage Collective
        </h1>
        <p className="mt-3 text-sm uppercase tracking-[0.35em] text-[#E8E0D8]/50">
          Administrative Terminal
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4 text-left">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter passphrase"
            autoFocus
            className="w-full bg-transparent px-4 py-3 text-[#E8E0D8] placeholder-[#E8E0D8]/30 outline-none transition-colors focus:border-[#D4AF37]"
            style={{ border: '1px solid rgba(212,175,55,0.35)' }}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#D4AF37] px-4 py-3 text-sm font-medium uppercase tracking-[0.25em] text-[#0A0A0A] transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? 'Verifying…' : 'Verify'}
          </button>
          {error && (
            <p className="text-center text-sm" style={{ color: '#B45454' }}>
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Dossier modal
// ---------------------------------------------------------------------------

function DossierModal({
  lead,
  onClose,
  onSave,
}: {
  lead: Lead;
  onClose: () => void;
  onSave: (id: string, status: LeadStatus) => void;
}) {
  const [status, setStatus] = useState<LeadStatus>(lead.status);

  return (
    <div
      className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto bg-black/80 px-4 py-10 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#0A0A0A]"
        style={{ border: '1px solid rgba(212,175,55,0.35)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between px-8 py-5"
          style={{ borderBottom: '1px solid rgba(212,175,55,0.18)' }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">Sojourn Dossier</span>
          <button
            onClick={onClose}
            className="text-[#E8E0D8]/50 transition-colors hover:text-[#D4AF37]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="px-8 py-8">
          <h2
            className="text-4xl text-[#E8E0D8]"
            style={{ fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif' }}
          >
            {lead.name}
          </h2>
          <p className="mt-1 text-sm text-[#D4AF37]">{lead.destination}</p>

          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            <Field label="Email" value={lead.email} />
            <Field label="Phone" value={lead.phone} />
            <Field label="Timeline" value={lead.timeline} />
            <Field label="Heard About Us" value={lead.hearAbout} />
            <Field label="Submitted" value={formatDate(lead.submittedAt)} />
            <Field label="Reference" value={lead.id} />
          </div>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#E8E0D8]/40">Message</p>
            <p className="mt-2 leading-relaxed text-[#E8E0D8]/85">{lead.message}</p>
          </div>

          <div
            className="mt-8 flex flex-col gap-4 pt-6 sm:flex-row sm:items-end sm:justify-between"
            style={{ borderTop: '1px solid rgba(212,175,55,0.18)' }}
          >
            <div className="w-full sm:w-auto">
              <p className="text-xs uppercase tracking-[0.3em] text-[#E8E0D8]/40">Status</p>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as LeadStatus)}
                className="mt-2 w-full bg-[#1A1A1A] px-4 py-2.5 text-[#E8E0D8] outline-none sm:w-56"
                style={{ border: '1px solid rgba(212,175,55,0.35)' }}
              >
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => onSave(lead.id, status)}
              className="bg-[#D4AF37] px-6 py-2.5 text-sm font-medium uppercase tracking-[0.2em] text-[#0A0A0A] transition-opacity hover:opacity-90"
            >
              Save Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-[#E8E0D8]/40">{label}</p>
      <p className="mt-1.5 text-[#E8E0D8]/90 break-words">{value}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Stat card
// ---------------------------------------------------------------------------

function StatCard({ value, label }: { value: number; label: string }) {
  return (
    <div
      className="bg-[#0A0A0A] px-8 py-7 transition-colors hover:border-[#D4AF37]/60"
      style={{ border: '1px solid rgba(212,175,55,0.22)' }}
    >
      <p
        className="text-5xl text-[#D4AF37]"
        style={{ fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif' }}
      >
        {value}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#E8E0D8]/55">{label}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Avatar
// ---------------------------------------------------------------------------

function Avatar({ name }: { name: string }) {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm text-[#D4AF37]"
      style={{ border: '1px solid rgba(212,175,55,0.45)' }}
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Toast
// ---------------------------------------------------------------------------

function Toast({ message }: { message: string }) {
  return (
    <div
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 bg-[#1A1A1A] px-6 py-3 text-sm text-[#E8E0D8] shadow-lg"
      style={{ border: '1px solid rgba(212,175,55,0.45)' }}
    >
      {message}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [ready, setReady] = useState(false);

  const [leads, setLeads] = useState<Lead[]>(MOCK_LEADS);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | LeadStatus>('All');
  const [activeLead, setActiveLead] = useState<Lead | null>(null);
  const [toast, setToast] = useState('');

  useEffect(() => {
    setAuthed(localStorage.getItem('admin_authenticated') === 'true');
    setReady(true);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(''), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  const stats = useMemo(
    () => ({
      total: leads.length,
      pending: leads.filter((l) => l.status === 'New' || l.status === 'Reviewed').length,
      contacted: leads.filter((l) => l.status === 'Contacted').length,
    }),
    [leads],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return leads.filter((l) => {
      const matchesStatus = statusFilter === 'All' || l.status === statusFilter;
      const matchesSearch =
        !q ||
        l.name.toLowerCase().includes(q) ||
        l.destination.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [leads, search, statusFilter]);

  function handleLogout() {
    localStorage.removeItem('admin_authenticated');
    window.location.reload();
  }

  function handleSaveStatus(id: string, status: LeadStatus) {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    setActiveLead(null);
    setToast('Dossier updated');
  }

  if (!ready) {
    return <div className="min-h-screen bg-[#0A0A0A]" />;
  }

  if (!authed) {
    return <LoginOverlay onSuccess={() => setAuthed(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E8E0D8]">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16">
        {/* Header */}
        <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1
              className="text-5xl text-[#D4AF37] sm:text-6xl"
              style={{ fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif' }}
            >
              Admin Terminal
            </h1>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#E8E0D8]/50">
              Manage Applications &amp; Sojourn Dossiers
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="self-start px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-[#E8E0D8]/70 transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37] sm:self-auto"
            style={{ border: '1px solid rgba(212,175,55,0.3)' }}
          >
            Logout
          </button>
        </header>

        {/* Stats */}
        <section className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <StatCard value={stats.total} label="Total Applications" />
          <StatCard value={stats.pending} label="Pending Review" />
          <StatCard value={stats.contacted} label="Contacted" />
        </section>

        {/* Search & filter */}
        <section className="mt-12 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]">
              {/* search icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, destination…"
              className="w-full bg-[#0A0A0A] py-3 pl-12 pr-4 text-[#E8E0D8] placeholder-[#E8E0D8]/35 outline-none transition-colors focus:border-[#D4AF37]"
              style={{ border: '1px solid rgba(212,175,55,0.25)' }}
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as 'All' | LeadStatus)}
            className="bg-[#0A0A0A] px-4 py-3 text-[#E8E0D8] outline-none transition-colors focus:border-[#D4AF37] sm:w-52"
            style={{ border: '1px solid rgba(212,175,55,0.25)' }}
          >
            <option value="All">All Statuses</option>
            <option value="New">New</option>
            <option value="Reviewed">Reviewed</option>
            <option value="Contacted">Contacted</option>
            <option value="Archived">Archived</option>
          </select>
        </section>

        {/* Table — desktop */}
        <section className="mt-8 hidden md:block">
          <div style={{ border: '1px solid rgba(212,175,55,0.18)' }}>
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="text-xs uppercase tracking-[0.2em] text-[#E8E0D8]/40">
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Destination</th>
                  <th className="px-6 py-4 font-medium">Timeline</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Submitted</th>
                  <th className="px-6 py-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((lead) => (
                  <tr
                    key={lead.id}
                    className="transition-colors hover:bg-[#D4AF37]/[0.04]"
                    style={{ borderTop: '1px solid rgba(212,175,55,0.12)' }}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar name={lead.name} />
                        <div>
                          <p className="text-[#E8E0D8]">{lead.name}</p>
                          <p className="text-xs text-[#E8E0D8]/40">{lead.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#E8E0D8]/80">{lead.destination}</td>
                    <td className="px-6 py-4 text-[#E8E0D8]/70">{lead.timeline}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={lead.status} />
                    </td>
                    <td className="px-6 py-4 text-[#E8E0D8]/60">{formatDate(lead.submittedAt)}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => setActiveLead(lead)}
                        className="px-4 py-2 text-xs uppercase tracking-[0.15em] text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
                        style={{ border: '1px solid rgba(212,175,55,0.4)' }}
                      >
                        View Dossier
                      </button>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr style={{ borderTop: '1px solid rgba(212,175,55,0.12)' }}>
                    <td colSpan={6} className="px-6 py-10 text-center text-[#E8E0D8]/40">
                      No applications match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Card list — mobile */}
        <section className="mt-8 space-y-4 md:hidden">
          {filtered.map((lead) => (
            <div
              key={lead.id}
              className="bg-[#0A0A0A] px-5 py-5"
              style={{ border: '1px solid rgba(212,175,55,0.18)' }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar name={lead.name} />
                  <div>
                    <p className="text-[#E8E0D8]">{lead.name}</p>
                    <p className="text-xs text-[#E8E0D8]/40">{lead.destination}</p>
                  </div>
                </div>
                <StatusBadge status={lead.status} />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-[#E8E0D8]/50">
                <span>{lead.timeline}</span>
                <span>{formatDate(lead.submittedAt)}</span>
              </div>
              <button
                onClick={() => setActiveLead(lead)}
                className="mt-4 w-full py-2.5 text-xs uppercase tracking-[0.2em] text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
                style={{ border: '1px solid rgba(212,175,55,0.4)' }}
              >
                View Dossier
              </button>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="py-10 text-center text-[#E8E0D8]/40">No applications match your search.</p>
          )}
        </section>
      </div>

      {activeLead && (
        <DossierModal lead={activeLead} onClose={() => setActiveLead(null)} onSave={handleSaveStatus} />
      )}
      {toast && <Toast message={toast} />}
    </div>
  );
}
Server Route
The Verifier
A minimal POST handler that checks the passphrase against process.env.ADMIN_PASSWORD and fails closed.

app/api/admin/verify/route.ts
TS · 39 lines
Copy
/**
 * FILE: app/api/admin/verify/route.ts
 *
 * POST handler that checks the submitted password against
 * process.env.ADMIN_PASSWORD.
 *
 * Add to .env.local:
 *   ADMIN_PASSWORD=your_secret_password_here
 *
 * Add to Vercel Environment Variables:
 *   ADMIN_PASSWORD=your_secret_password_here
 */

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let password = '';

  try {
    const body = await request.json();
    password = typeof body?.password === 'string' ? body.password : '';
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const expected = process.env.ADMIN_PASSWORD;

  // Fail closed if the server is misconfigured.
  if (!expected) {
    return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
  }

  if (password && password === expected) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
