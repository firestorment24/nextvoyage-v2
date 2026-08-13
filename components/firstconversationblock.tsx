SOURCE
File: components/FirstConversationBlock.tsx
CTA: https://cal.com/nexvoyagecollective/discovery-call

export default function FirstConversationBlock() {
  return (
    <section
      aria-labelledby="first-conversation-title"
      className="relative overflow-hidden bg-[#0A0A0A] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-[#D4AF37]">
          Begin Your Journey
        </p>
        <h2
          id="first-conversation-title"
          className="font-serif text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Your First Conversation
        </h2>
        <div className="mx-auto mt-8 max-w-2xl space-y-5 text-base leading-8 text-white/70 sm:text-lg">
          <p>
            In a 20–30 minute discovery call, we will discuss your travel
            aspirations, preliminary itineraries, privacy needs, and how our
            private office coordinates your global footprint.
          </p>
          <p>
            We will also determine whether our capped-client model aligns with
            your requirements before moving forward.
          </p>
        </div>
        <a
          href="https://cal.com/nexvoyagecollective/discovery-call"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center justify-center border border-[#D4AF37] bg-[#D4AF37] px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#0A0A0A] transition-colors duration-300 hover:bg-transparent hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
        >
          Schedule Discovery Call
        </a>
      </div>
    </section>
  );
}
