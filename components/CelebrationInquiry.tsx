'use client';

import { FormEvent, useState } from 'react';

interface FormState {  
name: string;  
email: string;  
occasion: string;  
investmentRange: string;  
priorities: string[];  
destination: string;  
partySize: string;  
travelPeriod: string;  
notes: string;  
}

const initialState: FormState = {  
name: '',  
email: '',  
occasion: '',  
investmentRange: '',  
priorities: [],  
destination: '',  
partySize: '',  
travelPeriod: '',  
notes: '',  
};

const investmentOptions = [  
'$15,000–$25,000',  
'$25,000–$50,000',  
'$50,000–$100,000',  
'$100,000–$250,000',  
'$250,000+',  
'I would like guidance',  
];

const priorityOptions = [  
'Celebrating beautifully',  
'Privacy and discretion',  
'Exceptional accommodations',  
'Food and wine',  
'Wellness and restoration',  
'Culture and access',  
'Ease for the group',  
'Once-in-a-lifetime experiences',  
'A little of everything',  
];

export default function CelebrationInquiry() {  
const [form, setForm] = useState<FormState>(initialState);  
const [status, setStatus] = useState<  
'idle' | 'submitting' | 'success' | 'error'  
>('idle');

function updateField(field: keyof FormState, value: string) {  
setForm((current) => ({ ...current, [field]: value }));  
}

function togglePriority(priority: string) {  
setForm((current) => ({  
...current,  
priorities: current.priorities.includes(priority)  
? current.priorities.filter((item) => item !== priority)  
: [...current.priorities, priority],  
}));  
}

async function handleSubmit(event: FormEvent<HTMLFormElement>) {  
event.preventDefault();  
setStatus('submitting');

try {  
const response = await fetch('/api/lead', {  
method: 'POST',  
headers: { 'Content-Type': 'application/json' },  
body: JSON.stringify({  
name: form.name,  
email: form.email,  
occasion: form.occasion,  
investmentRange: form.investmentRange,  
priorities: form.priorities,  
destinations: form.destination,  
partySize: form.partySize,  
travelWindow: form.travelPeriod,  
notes: form.notes,  
source: 'Celebrating Her ,  The Celebration Collection',  
}),  
});

  if (!response.ok) {  
    throw new Error('Inquiry submission failed');  
  }

  setForm(initialState);  
  setStatus('success');  
} catch {  
  setStatus('error');  
}  
}

const inputClassName =  
'w-full border-b border-[#071421]/25 bg-transparent px-0 py-3 font-sans text-sm text-[#071421] outline-none placeholder:text-[#071421]/40 focus:border-[#8A6A2D]';

const labelClassName =  
'font-sans text-[10px] uppercase tracking-[0.18em] text-[#071421]/60';

return (  
<form  
onSubmit={handleSubmit}  
className="space-y-8"  
aria-describedby="inquiry-status"  
>  
<div className="grid gap-8 md:grid-cols-2">  
<label className="block">  
<span className={labelClassName}>Name</span>

<input  
required  
type="text"  
name="name"  
value={form.name}  
onChange={(event) => updateField('name', event.target.value)}  
placeholder="Your name"  
className={inputClassName}  
/>  
</label>

<label className="block">  
<span className={labelClassName}>Email</span>

<input  
required  
type="email"  
name="email"  
value={form.email}  
onChange={(event) => updateField('email', event.target.value)}  
placeholder="you@example.com"  
className={inputClassName}  
/>  
</label>

<label className="block">  
<span className={labelClassName}>Occasion</span>

<select  
required  
name="occasion"  
value={form.occasion}  
onChange={(event) => updateField('occasion', event.target.value)}  
className={inputClassName}  
>  
<option value="">Select an occasion</option>  
<option value="Milestone">Milestone</option>  
<option value="The Next Chapter">The Next Chapter</option>  
<option value="Sisterhood">Sisterhood</option>  
<option value="Legacy">Legacy</option>  
<option value="The Divine Nine / Sorority Journey">  
The Divine Nine / Sorority Journey  
</option>  
<option value="Women Who Lead">Women Who Lead</option>  
<option value="Other">Something else</option>  
</select>  
</label>

<label className="block">  
<span className={labelClassName}>Approximate travelers</span>

<input  
type="text"  
name="partySize"  
value={form.partySize}  
onChange={(event) => updateField('partySize', event.target.value)}  
placeholder="For example, 8–12"  
className={inputClassName}  
/>  
</label>

<label className="block">  
<span className={labelClassName}>  
Anticipated journey investment  
</span>

<select  
required  
name="investmentRange"  
value={form.investmentRange}  
onChange={(event) =>  
updateField('investmentRange', event.target.value)  
}  
className={inputClassName}  
>  
<option value="">Select a range</option>

{investmentOptions.map((option) => (  
<option key={option} value={option}>  
{option}  
</option>  
))}  
</select>

<span className="mt-2 block font-sans text-[11px] leading-relaxed text-[#071421]/45">  
A range helps us design at the right scale. It is never a  
quotation and nothing is committed here.  
</span>  
</label>

<label className="block">  
<span className={labelClassName}>  
Preferred destination or region  
</span>

<input  
type="text"  
name="destination"  
value={form.destination}  
onChange={(event) =>  
updateField('destination', event.target.value)  
}  
placeholder="A destination, region, or open to ideas"  
className={inputClassName}  
/>  
</label>

<label className="block">  
<span className={labelClassName}>Desired travel period</span>

<input  
type="text"  
name="travelPeriod"  
value={form.travelPeriod}  
onChange={(event) =>  
updateField('travelPeriod', event.target.value)  
}  
placeholder="Month, season, or approximate dates"  
className={inputClassName}  
/>  
</label>  
</div>

<fieldset className="border-t border-[#071421]/15 pt-6">  
<legend className={labelClassName}>  
What matters most about this journey?  
</legend>

<div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">  
{priorityOptions.map((priority) => (  
<label  
key={priority}  
className="flex cursor-pointer items-start gap-3 font-sans text-sm text-[#071421]/75"  
>  
<input  
type="checkbox"  
name="priorities"  
value={priority}  
checked={form.priorities.includes(priority)}  
onChange={() => togglePriority(priority)}  
className="mt-0.5 h-4 w-4 shrink-0 accent-[#8A6A2D]"  
/>

<span>{priority}</span>  
</label>  
))}  
</div>  
</fieldset>

<label className="block">  
<span className={labelClassName}>  
Notes about the celebration  
</span>

<textarea  
name="notes"  
value={form.notes}  
onChange={(event) => updateField('notes', event.target.value)}  
placeholder="Tell us what would make the journey meaningful."  
rows={4}  
className={`${inputClassName} resize-y`}  
/>  
</label>

<button  
type="submit"  
disabled={status === 'submitting'}  
className="border border-[#071421] px-7 py-4 font-sans text-[10px] uppercase tracking-[0.24em] text-[#071421] transition-colors hover:bg-[#071421] hover:text-[#F4EFE6] disabled:cursor-wait disabled:opacity-50"  
>  
{status === 'submitting' ? 'Sending…' : 'Design the Moment →'}  
</button>

<p  
id="inquiry-status"  
aria-live="polite"  
className="font-sans text-sm text-[#071421]/65"  
>  
{status === 'success' &&  
'Thank you. We received your celebration inquiry and will be in touch.'}

{status === 'error' &&  
'We could not submit the inquiry. Please try again or schedule a discovery call directly.'}  
</p>  
</form>  
);  
}  
