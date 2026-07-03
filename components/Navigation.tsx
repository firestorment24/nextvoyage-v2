"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavLink {
  title: string;
  href: string;
  subtitle: string;
}

const navLinks: NavLink[] = [
  { title: "LOBBY", href: "/", subtitle: "The Beginning" },
  { title: "MANDATE", href: "/mandate", subtitle: "Our Philosophy" },
  { title: "PERSPECTIVE", href: "/perspective", subtitle: "The Editorial" },
  { title: "ARCHIVE", href: "/archive", subtitle: "Curated Collection" },
  { title: "JOURNAL", href: "/journal", subtitle: "Travel Stories" },
  { title: "INQUIRY", href: "/inquiry", subtitle: "Direct Inquiry" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Fixed top bar — fully transparent background */}
      <nav className="fixed top-0 left-0 w-full z-[9999] bg-transparent">
        <div className="flex items-center justify-between px-6 md:px-10 py-5">
          {/* Brand — left side, links to home */}
          <Link
            href="/"
            aria-label="NexVoyage Collective — Home"
            className="text-[1.25rem] tracking-[0.25em] text-[#C5A059] hover:text-[#D4AF37] transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            NEXVOYAGE COLLECTIVE
          </Link>

          {/* Hamburger toggle — visible on all screen sizes */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="z-[10000] text-[#C5A059] hover:text-[#D4AF37] transition-colors duration-300"
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Full-screen overlay menu — pure black */}
      <div
        className={`fixed inset-0 z-[9998] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
          isOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ backgroundColor: "#050505" }}
      >
        {/* Subtle watermark */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "22vw",
            lineHeight: 1,
            color: "#ffffff",
            opacity: 0.04,
            bottom: "4%",
            right: "5%",
          }}
        >
          Voyage
        </span>

        {/* Close button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="z-[10000] absolute top-6 right-6 md:right-10 text-[#C5A059] hover:text-[#D4AF37] transition-colors duration-300"
        >
          <X size={28} strokeWidth={1.5} />
        </button>

        {/* Nav links — stacked vertically, brass gold titles + muted subtitles */}
        <ul className="relative z-10 flex flex-col items-center gap-7 md:gap-9">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex flex-col items-center text-center"
              >
                <span className="text-2xl md:text-3xl font-semibold tracking-[0.25em] text-[#C5A059] group-hover:text-[#D4AF37] transition-colors duration-300">
                  {link.title}
                </span>
                <span className="mt-1.5 text-[0.7rem] md:text-xs tracking-[0.2em] uppercase text-white/40">
                  {link.subtitle}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
