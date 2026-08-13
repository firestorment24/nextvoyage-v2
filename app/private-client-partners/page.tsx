import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
 
const partnerCategories = [
  {
    title: "Family Offices & Wealth Advisors",
    description:
      "A discreet travel layer for principals whose time, privacy, and preferences require considered stewardship.",
  },
  {
    title: "Private Banks & Estate Attorneys",
    description:
      "A trusted extension of the advisory relationship, supporting travel decisions around estates, liquidity events, and legacy moments.",
  },
  {
    title: "Luxury Realtors & Asset Managers",
    description:
      "A seamless way to translate property access and portfolio relationships into complete, globally coordinated stays.",
  },
  {
    title: "Executive Assistants & Chief of Staff",
    description:
      "An experienced second set of hands for complex itineraries, shifting priorities, and the details no one else should have to chase.",
  },
  {
    title: "Private Aviation & Maritime Partners",
    description:
      "A complementary stewardship layer that aligns air, sea, ground, and sanctuary with one quiet point of accountability.",
  },
];
 
const whatWeHandle = [
  "Unlisted estates and off-market retreats",
  "Complex multi-jurisdictional logistics",
  "Preferred Virtuoso and brand-partner benefits",
  "Private security routing and arrival choreography",
  "24/7 dedicated stewardship across the global footprint",
];
 
export default function PrivateClientPartnersPage() {
  return (
    <>
      <Navigation />
 
      <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D4AF37] selection:text-black">
        {/* Hero */}
        <section className="relative flex min-h-[78vh] items-end overflow-hidden border-b border-white/10 px-6 pb-24 pt-40 md:px-12 md:pb-32 lg:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(212,175,55,0.12),transparent_30%),linear-gradient(180deg,#0A0A0A_0%,#0A0A0A_64%,#11100C_100%)]" />
          <div className="absolute right-[10%] top-[18%] h-56 w-56 rounded-full border border-[#D4AF37]/20 blur-[1px] md:h-80 md:w-80" />
          <div className="relative z-10 max-w-5xl">
            <p className="mb-7 font-sans text-[11px] uppercase tracking-[0.36em] text-[#D4AF37]">
              Private Client Partners
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-light leading-[0.98] tracking-[-0.03em] text-white md:text-7xl lg:text-8xl">
              Extend your standard of service beyond your office.
            </h1>
            <p className="mt-9 max-w-2xl font-sans text-base font-light leading-8 text-white/65 md:text-lg">
              A seamless private travel advisory partnership designed for family offices, wealth advisors, private banks, estate attorneys, luxury realtors, executive assistants, and private aviation partners.
            </p>
          </div>
        </section>
 
        {/* Partnership model */}
        <section className="border-b border-white/10 px-6 py-24 md:px-12 md:py-32 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.34em] text-white/35">
                The Partnership Model
              </p>
              <h2 className="mt-6 max-w-md font-serif text-4xl font-light leading-tight text-[#D4AF37] md:text-5xl">
                Your relationship stays yours. The complexity becomes ours.
              </h2>
            </div>
            <div className="space-y-7 font-sans text-sm font-light leading-8 text-white/65 md:text-base">
              <p>
                NexVoyage integrates with the client teams already trusted to protect a principal&apos;s time and interests. We do not replace your relationship; we extend its standard into the private travel environment, with a clear chain of communication and a single point of accountability.
              </p>
              <p>
                Choose the operating model that best suits the relationship: white-label coordination behind your office, or a direct concierge contact introduced with your approval. Either way, the experience is quiet, precise, and designed to create zero friction for your team or your client.
              </p>
              <p>
                Every engagement is handled with strict confidentiality, appropriate NDA standards, and a zero-knowledge posture toward sensitive personal and family information. Discretion is not a feature of the service. It is the condition of entry.
              </p>
            </div>
          </div>
        </section>
 
        {/* Partner categories */}
        <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-2xl">
              <p className="font-sans text-[10px] uppercase tracking-[0.34em] text-white/35">
                Who We Support
              </p>
              <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-white md:text-5xl">
                A natural extension of the private office.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
              {partnerCategories.map((partner, index) => (
                <article
                  key={partner.title}
                  className={
                    "group min-h-64 bg-[#0A0A0A] p-8 transition-colors duration-500 hover:bg-[#15130D] md:p-10 " +
                    (index === partnerCategories.length - 1 ? "lg:col-span-2" : "")
                  }
                >
                  <div className="mb-12 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-[#D4AF37]/60">
                      0{index + 1}
                    </span>
                    <span className="h-px w-12 bg-[#D4AF37]/30 transition-all duration-500 group-hover:w-20 group-hover:bg-[#D4AF37]" />
                  </div>
                  <h3 className="max-w-xs font-serif text-2xl font-light leading-tight text-white">
                    {partner.title}
                  </h3>
                  <p className="mt-5 max-w-md font-sans text-sm font-light leading-7 text-white/50">
                    {partner.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
 
        {/* What we handle */}
        <section className="border-y border-white/10 bg-[#11100C] px-6 py-24 md:px-12 md:py-32 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.34em] text-[#D4AF37]">
                The Value We Add
              </p>
              <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-white md:text-5xl">
                We handle what cannot be handed off.
              </h2>
              <p className="mt-7 max-w-md font-sans text-sm font-light leading-7 text-white/50">
                From the first preference to the last departure, the invisible work is managed by a private office built for demanding itineraries.
              </p>
            </div>
            <div className="border-t border-white/15">
              {whatWeHandle.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-7 border-b border-white/10 py-7 md:gap-10"
                >
                  <span className="pt-1 font-mono text-[10px] tracking-[0.2em] text-[#D4AF37]/60">
                    0{index + 1}
                  </span>
                  <p className="font-serif text-xl font-light text-white md:text-2xl">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
 
        {/* Conversion banner */}
        <section className="px-6 py-28 text-center md:px-12 md:py-40 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="font-sans text-[10px] uppercase tracking-[0.34em] text-white/35">
              A Private Introduction
            </p>
            <h2 className="mt-6 font-serif text-5xl font-light leading-[0.98] tracking-[-0.03em] text-[#D4AF37] md:text-7xl">
              One introduction. We handle the rest.
            </h2>
            <p className="mx-auto mt-8 max-w-xl font-sans text-base font-light leading-8 text-white/60">
              Introduce your principals or clients to our private office for a confidential discussion of their global travel footprint.
            </p>
            <Link
              href="https://cal.com/nexvoyagecollective/discovery-call"
              className="mt-10 inline-flex border border-[#D4AF37] px-8 py-4 font-sans text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] transition-colors duration-300 hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
            >
              Initiate Partner Introduction
            </Link>
          </div>
        </section>
      </main>
 
      <Footer />
    </>
  );
}
 
