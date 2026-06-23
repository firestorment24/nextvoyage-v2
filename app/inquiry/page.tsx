"use client"

import { useState, useRef, useEffect } from "react"

const OCCASIONS = [  
"Leisure & Discovery",  
"Corporate & Executive",  
"Celebration & Milestone",  
"Event & Elite Access",  
"Wellness & Retreat",  
"Adventure & Expedition",  
"Romance & Honeymoon",  
"Private Aviation",  
"Yacht & Maritime",  
"Other (Discretion)",  
]

const AVIATION_CLASSES = [  
"First Class",  
"Business Class",  
"Premium Economy",  
"Private Charter",  
"Flexible / Advisor Recommend",  
]

const HEAR_ABOUT = [  
"Personal Referral",  
"Social Media",  
"Search Engine",  
"Event / Conference",  
"Advertisement",  
"Partner Agency",  
"Existing Client",  
"Other",  
]

export default function InquiryPage() {  
// --- Form state ---  
const [name, setName] = useState("")  
const [email, setEmail] = useState("")  
const [phone, setPhone] = useState("")  
const [occasion, setOccasion] = useState("")  
const [destinations, setDestinations] = useState("")  
const [travelWindow, setTravelWindow] = useState("")  
const [partySize, setPartySize] = useState("")  
const [aviationClass, setAviationClass] = useState("")  
const [hearAbout, setHearAbout] = useState("")  
const [notes, setNotes] = useState("")  
const [submitted, setSubmitted] = useState(false)

// --- Verification state ---  
const [emailStatus, setEmailStatus] = useState<"idle" | "valid" | "invalid" | "checking">("idle")  
const [smsSent, setSmsSent] = useState(false)  
const [smsCode, setSmsCode] = useState("")  
const [smsVerified, setSmsVerified] = useState(false)  
const [smsError, setSmsError] = useState("")

// --- Honeypot ---  
const honeypotRef = useRef<HTMLInputElement>(null)

// --- Turnstile ---  
const turnstileRef = useRef<HTMLDivElement>(null)  
const [turnstileToken, setTurnstileToken] = useState<string | null>(null)  
const turnstileWidgetId = useRef<string | null>(null)

useEffect(() => {  
const script = document.createElement("script")  
script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"  
script.async = true  
script.defer = true  
script.onload = () => {  
if (window.turnstile && turnstileRef.current) {  
turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {  
sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,  
callback: (token: string) => setTurnstileToken(token),  
"expired-callback": () => setTurnstileToken(null),  
theme: "dark",  
})  
}  
}  
document.head.appendChild(script)  
return () => {  
if (window.turnstile && turnstileWidgetId.current) {  
window.turnstile.remove(turnstileWidgetId.current)  
}  
}  
}, [])

const verifyEmail = async () => {  
if (!email.includes("@")) return  
setEmailStatus("checking")  
const res = await fetch("/api/verify-email", {  
method: "POST",  
headers: { "Content-Type": "application/json" },  
body: JSON.stringify({ email }),  
})  
const data = await res.json()  
setEmailStatus(data.valid ? "valid" : "invalid")  
}

const sendSmsCode = async () => {  
if (!phone || phone.length < 10) return  
setSmsError("")  
const res = await fetch("/api/verify-sms", {  
method: "POST",  
headers: { "Content-Type": "application/json" },  
body: JSON.stringify({ phone }),  
})  
const data = await res.json()  
if (data.success) {  
setSmsSent(true)  
} else {  
setSmsError(data.error || "Failed to send code")  
}  
}

const confirmSmsCode = async () => {  
setSmsError("")  
const res = await fetch("/api/verify-sms/confirm", {  
method: "POST",  
headers: { "Content-Type": "application/json" },  
body: JSON.stringify({ phone, code: smsCode }),  
})  
const data = await res.json()  
if (data.success) {  
setSmsVerified(true)  
} else {  
setSmsError(data.error || "Invalid code")  
}  
}

const handleSubmit = async (e: React.FormEvent) => {  
e.preventDefault()

// Honeypot check  
if (honeypotRef.current?.value) return

if (!turnstileToken) return alert("Please complete the verification check.")  
if (emailStatus !== "valid") return alert("Please verify your email address.")  
if (!smsVerified) return alert("Please verify your phone number via SMS.")

const payload = {  
name,  
email,  
phone,  
occasion,  
destinations,  
travelWindow,  
partySize: Number(partySize) || 0,  
aviationClass,  
hearAbout,  
notes,  
turnstileToken,  
}

const res = await fetch("/api/lead", {  
method: "POST",  
headers: { "Content-Type": "application/json" },  
body: JSON.stringify(payload),  
})

if (res.ok) {  
setSubmitted(true)  
window.scrollTo({ top: 0, behavior: "smooth" })  
}  
}

if (submitted) {  
return (  
<main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-4">  
<div className="max-w-lg text-center space-y-6">  
<div className="w-16 h-16 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto">  
<span className="text-[#D4AF37] text-3xl">✓</span>  
</div>  
<h1 className="font-['Cormorant_Garamond'] text-4xl text-[#D4AF37] tracking-wide">  
Application Received  
</h1>  
<p className="font-['Inter'] text-gray-400 text-lg">  
Dialogue Initiated.  
</p>  
<p className="font-['Inter'] text-gray-500 text-sm">  
A member of our concierge team will review your dossier and reach out within 24 hours.  
</p>  
</div>  
<footer className="mt-16 text-center font-['Inter'] text-xs text-gray-600 tracking-widest uppercase">  
Rachel — Reception & Orchestration • NexVoyage Collective  
</footer>  
</main>  
)  
}

return (  
<main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center px-4 py-16">  
<div className="max-w-2xl w-full">  
<div className="text-center mb-12">  
<h1 className="font-['Cormorant_Garamond'] text-5xl text-[#D4AF37] tracking-wider">  
Rachel  
<span className="block text-2xl text-gray-400 font-['Inter'] font-light tracking-widest mt-2">  
Reception & Orchestration  
</span>  
</h1>  
<div className="mt-6 border-t border-[#D4AF37]/20 pt-6">  
<h2 className="font-['Cormorant_Garamond'] text-3xl text-white tracking-wide">  
Application for Entry  
</h2>  
</div>  
</div>

<form onSubmit={handleSubmit} className="space-y-10">  
<div className="absolute -left-[9999px]" aria-hidden="true">  
<label htmlFor="website">Website</label>  
<input  
ref={honeypotRef}  
id="website"  
name="website"  
type="text"  
tabIndex={-1}  
autoComplete="off"  
/>  
</div>

<fieldset className="space-y-5">  
<legend className="font-['Cormorant_Garamond'] text-xl text-[#D4AF37] tracking-wider mb-4">  
The Sovereign Profile  
</legend>  
<div>  
<label className="block font-['Inter'] text-xs text-gray-400 uppercase tracking-widest mb-2">  
Full Name  
</label>  
<input  
type="text"  
required  
value={name}  
onChange={(e) => setName(e.target.value)}  
className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 font-['Inter'] text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"  
/>  
</div>  
<div>  
<label className="block font-['Inter'] text-xs text-gray-400 uppercase tracking-widest mb-2">  
Email  
</label>  
<div className="flex gap-3">  
<input  
type="email"  
required  
value={email}  
onChange={(e) => setEmail(e.target.value)}  
onBlur={verifyEmail}  
className="flex-1 bg-transparent border border-gray-700 text-white px-4 py-3 font-['Inter'] text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"  
/>  
<button  
type="button"  
onClick={verifyEmail}  
disabled={emailStatus === "checking" || !email}  
className="px-4 py-3 border border-[#D4AF37]/40 text-[#D4AF37] font-['Inter'] text-xs uppercase tracking-widest hover:bg-[#D4AF37]/10 disabled:opacity-40 transition-all"  
>  
{emailStatus === "checking" ? "..." : "Verify"}  
</button>  
</div>  
{emailStatus === "valid" && (  
<p className="mt-1 text-xs text-green-500 font-['Inter']">✓ Verified</p>  
)}  
{emailStatus === "invalid" && (  
<p className="mt-1 text-xs text-red-400 font-['Inter']">Invalid email address</p>  
)}  
</div>  
<div>  
<label className="block font-['Inter'] text-xs text-gray-400 uppercase tracking-widest mb-2">  
Phone  
</label>  
<div className="flex gap-3">  
<input  
type="tel"  
required  
value={phone}  
onChange={(e) => setPhone(e.target.value)}  
placeholder="+1 (555) 000-0000"  
className="flex-1 bg-transparent border border-gray-700 text-white px-4 py-3 font-['Inter'] text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"  
/>  
{!smsVerified && (  
<button  
type="button"  
onClick={smsSent ? confirmSmsCode : sendSmsCode}  
disabled={!phone}  
className="px-4 py-3 border border-[#D4AF37]/40 text-[#D4AF37] font-['Inter'] text-xs uppercase tracking-widest hover:bg-[#D4AF37]/10 disabled:opacity-40 transition-all whitespace-nowrap"  
>  
{smsSent ? "Confirm" : "Send Code"}  
</button>  
)}  
</div>  
{smsSent && !smsVerified && (  
<div className="mt-3 flex gap-3">  
<input  
type="text"  
value={smsCode}  
onChange={(e) => setSmsCode(e.target.value)}  
placeholder="Enter 6-digit code"  
maxLength={6}  
className="flex-1 bg-transparent border border-gray-700 text-white px-4 py-3 font-['Inter'] text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"  
/>  
</div>  
)}  
{smsVerified && (  
<p className="mt-1 text-xs text-green-500 font-['Inter']">✓ Phone verified</p>  
)}  
{smsError && (  
<p className="mt-1 text-xs text-red-400 font-['Inter']">{smsError}</p>  
)}  
</div>  
</fieldset>

<fieldset className="space-y-5">  
<legend className="font-['Cormorant_Garamond'] text-xl text-[#D4AF37] tracking-wider mb-4">  
Mission Parameters  
</legend>  
<div>  
<label className="block font-['Inter'] text-xs text-gray-400 uppercase tracking-widest mb-2">  
Occasion / Intent  
</label>  
<select  
required  
value={occasion}  
onChange={(e) => setOccasion(e.target.value)}  
className="w-full bg-[#0A0A0A] border border-gray-700 text-white px-4 py-3 font-['Inter'] text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"  
>  
<option value="" disabled>Select occasion</option>  
{OCCASIONS.map((o) => (  
<option key={o} value={o}>{o}</option>  
))}  
</select>  
</div>  
<div>  
<label className="block font-['Inter'] text-xs text-gray-400 uppercase tracking-widest mb-2">  
Destinations of Interest  
</label>  
<input  
type="text"  
required  
value={destinations}  
onChange={(e) => setDestinations(e.target.value)}  
placeholder="e.g. Sardinia, Monaco, St. Barths"  
className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 font-['Inter'] text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"  
/>  
</div>  
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">  
<div>  
<label className="block font-['Inter'] text-xs text-gray-400 uppercase tracking-widest mb-2">  
Preferred Timeline  
</label>  
<input  
type="text"  
required  
value={travelWindow}  
onChange={(e) => setTravelWindow(e.target.value)}  
placeholder="e.g. July 2026"  
className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 font-['Inter'] text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"  
/>  
</div>  
<div>  
<label className="block font-['Inter'] text-xs text-gray-400 uppercase tracking-widest mb-2">  
Party Size  
</label>  
<input  
type="number"  
min="1"  
required  
value={partySize}  
onChange={(e) => setPartySize(e.target.value)}  
placeholder="2"  
className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 font-['Inter'] text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"  
/>  
</div>  
</div>  
<div>  
<label className="block font-['Inter'] text-xs text-gray-400 uppercase tracking-widest mb-2">  
Aviation Class  
</label>  
<select  
value={aviationClass}  
onChange={(e) => setAviationClass(e.target.value)}  
className="w-full bg-[#0A0A0A] border border-gray-700 text-white px-4 py-3 font-['Inter'] text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"  
>  
<option value="" disabled>Select preference</option>  
{AVIATION_CLASSES.map((c) => (  
<option key={c} value={c}>{c}</option>  
))}  
</select>  
</div>  
</fieldset>

<fieldset className="space-y-5">  
<legend className="font-['Cormorant_Garamond'] text-xl text-[#D4AF37] tracking-wider mb-4">  
Cultural Fit  
</legend>  
<div>  
<label className="block font-['Inter'] text-xs text-gray-400 uppercase tracking-widest mb-2">  
How did you hear about us?  
</label>  
<select  
value={hearAbout}  
onChange={(e) => setHearAbout(e.target.value)}  
className="w-full bg-[#0A0A0A] border border-gray-700 text-white px-4 py-3 font-['Inter'] text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"  
>  
<option value="" disabled>Select source</option>  
{HEAR_ABOUT.map((h) => (  
<option key={h} value={h}>{h}</option>  
))}  
</select>  
</div>  
<div>  
<label className="block font-['Inter'] text-xs text-gray-400 uppercase tracking-widest mb-2">  
Discretion Notes  
</label>  
<textarea  
rows={3}  
value={notes}  
onChange={(e) => setNotes(e.target.value)}  
placeholder="Any special considerations, privacy requests, or context..."  
className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 font-['Inter'] text-sm focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"  
/>  
</div>  
</fieldset>

<div className="flex justify-center">  
<div ref={turnstileRef} />  
</div>

<div className="text-center pt-4">  
<button  
type="submit"  
disabled={!turnstileToken || emailStatus !== "valid" || !smsVerified}  
className="px-12 py-4 border border-[#D4AF37] text-[#D4AF37] font-['Inter'] text-sm uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-[#0A0A0A] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"  
>  
Submit Application  
</button>  
</div>  
</form>

<footer className="mt-16 text-center font-['Inter'] text-xs text-gray-600 tracking-widest uppercase">  
Rachel — Reception & Orchestration • NexVoyage Collective  
</footer>  
</div>  
</main>  
)  
}  
