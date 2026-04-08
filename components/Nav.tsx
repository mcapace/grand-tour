"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

/** Same horizontal lockup as home hero — reads clearly on a solid cream chip */
const NAV_LOGO_URL =
  "https://static.wixstatic.com/media/87b21c_fd04523daf3640989761afa9d8a7bdf5~mv2.avif/v1/fill/w_980,h_165,al_c,q_80,enc_avif,quality_auto/WSGrandTourLogoLockup2024.avif";

const links = [
  { href: "/", label: "Home" },
  { href: "/sandiego", label: "San Diego" },
  { href: "/denver", label: "Denver" },
  { href: "/tampa", label: "Tampa" },
  { href: "/wineswineries", label: "Wineries & Wines" },
  { href: "/faq", label: "FAQ" },
  { href: "/signupforupdates", label: "Sign Up" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-charcoal/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-2 min-h-16 py-2 sm:py-0">
        {/* Logo — max width on xs so hamburger always fits */}
        <Link
          href="/"
          className="relative z-10 min-w-0 shrink rounded border-2 border-gold/50 bg-cream px-2 sm:px-2.5 py-1 shadow-[0_2px_12px_rgba(0,0,0,0.45)] max-w-[min(72vw,280px)]"
        >
          <Image
            src={NAV_LOGO_URL}
            alt="Wine Spectator Grand Tour"
            width={280}
            height={47}
            className="h-7 sm:h-8 w-full max-h-8 object-contain object-left"
            unoptimized
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden text-gold flex h-11 w-11 flex-shrink-0 items-center justify-center rounded border border-gold/30 active:bg-gold/10"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                d="M3 7h18M3 12h18M3 17h18"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-charcoal border-t border-gold/20 px-4 pb-4 pt-2 flex flex-col gap-0 max-h-[min(70vh,22rem)] overflow-y-auto overscroll-contain">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`nav-link py-3.5 border-b border-gold/10 last:border-0 ${pathname === l.href ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
