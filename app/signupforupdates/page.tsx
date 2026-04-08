import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign Up For Updates | Wine Spectator Grand Tour 2026",
  description:
    "Sign up for updates about Wine Spectator's Grand Tour and other M. Shanken events.",
};

export default function SignUpPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-burgundy/30 to-charcoal py-16 sm:py-24 text-center px-4 sm:px-6">
        <h1 className="section-heading text-4xl sm:text-6xl md:text-7xl mb-4 text-balance">
          Stay in the Know
        </h1>
        <p className="font-sans text-gold text-xs uppercase tracking-[0.2em] mb-6">
          Grand Tour Updates &amp; M. Shanken Events
        </p>
        <p className="font-sans text-cream/70 max-w-md mx-auto leading-relaxed">
          Be the first to hear about ticket on-sale dates, winery announcements, exclusive offers,
          and other Wine Spectator events.
        </p>
      </section>

      {/* Embed area — swap in your Mailchimp or other form embed here */}
      <section className="max-w-xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="ticket-card p-6 sm:p-10">
          <h2 className="section-heading text-3xl text-center mb-2">Sign Up</h2>
          <p className="font-sans text-cream/50 text-xs text-center uppercase tracking-widest mb-8">
            M. Shanken Communications, Inc.
          </p>

          {/*
            ─────────────────────────────────────────────────────────────
            REPLACE THIS FORM with your Mailchimp / Klaviyo / HubSpot
            embed snippet. The action URL below points to the Wix signup
            page as a temporary passthrough until your list is connected.
            ─────────────────────────────────────────────────────────────
          */}
          <form
            action="https://grandtour.winespectator.com/signupforupdates"
            method="get"
            target="_blank"
            className="flex flex-col gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-sans text-xs uppercase tracking-widest text-gold">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="bg-white/5 border border-gold/20 text-cream placeholder:text-cream/30 px-4 py-3 font-sans text-base sm:text-sm focus:outline-none focus:border-gold/60 transition-colors rounded-none min-h-[44px]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-sans text-xs uppercase tracking-widest text-gold">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="bg-white/5 border border-gold/20 text-cream placeholder:text-cream/30 px-4 py-3 font-sans text-base sm:text-sm focus:outline-none focus:border-gold/60 transition-colors rounded-none min-h-[44px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-sans text-xs uppercase tracking-widest text-gold">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                className="bg-white/5 border border-gold/20 text-cream placeholder:text-cream/30 px-4 py-3 font-sans text-base sm:text-sm focus:outline-none focus:border-gold/60 transition-colors rounded-none min-h-[44px]"
              />
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <p className="font-sans text-xs uppercase tracking-widest text-gold mb-1">
                I&apos;m interested in: (optional)
              </p>
              {[
                { id: "sandiego", label: "Grand Tour San Diego" },
                { id: "denver", label: "Grand Tour Denver" },
                { id: "tampa", label: "Grand Tour Tampa" },
                { id: "nywe", label: "NY Wine Experience" },
                { id: "whiskyfest", label: "WhiskyFest" },
                { id: "bigsmoke", label: "Big Smoke" },
              ].map((item) => (
                <label
                  key={item.id}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    name="interest"
                    value={item.id}
                    className="accent-gold w-5 h-5 min-h-[1.25rem] min-w-[1.25rem] shrink-0"
                  />
                  <span className="font-sans text-sm text-cream/70 group-hover:text-cream transition-colors">
                    {item.label}
                  </span>
                </label>
              ))}
            </div>

            <p className="font-sans text-cream/40 text-xs leading-relaxed mt-2">
              By submitting this form you agree to receive marketing emails from M. Shanken
              Communications, Inc. You may unsubscribe at any time.
            </p>

            <button type="submit" className="btn-gold mt-2 w-full sm:w-auto">
              Sign Me Up
            </button>
          </form>
        </div>

        {/* TODO note for developer */}
        <p className="font-sans text-cream/30 text-xs text-center mt-6 leading-relaxed">
          <span className="text-gold">Developer note:</span> Replace the form action above with
          your Mailchimp, Klaviyo, or HubSpot embed. The current action passes through to the
          existing Wix page as a temporary fallback.
        </p>
      </section>

      {/* Other events cross-promo */}
      <section className="border-t border-gold/10 py-12 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-heading text-2xl sm:text-3xl mb-6 text-balance">
            Other M. Shanken Events
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            {[
              { label: "NY Wine Experience", href: "https://www.nywineexperience.com/" },
              { label: "WhiskyFest", href: "https://whiskyadvocate.com/whiskyfest" },
              { label: "Big Smoke Las Vegas", href: "https://www.lasvegasbigsmoke.com/" },
              { label: "Big Smoke & WhiskyFest", href: "https://www.bigsmokewhiskyfest.com/" },
            ].map((e) => (
              <a
                key={e.label}
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs w-full sm:w-auto inline-flex items-center justify-center"
              >
                {e.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Grand Tour CTA */}
      <section className="bg-burgundy/10 border-t border-gold/10 py-12 sm:py-14 text-center px-4 sm:px-6">
        <h2 className="section-heading text-2xl sm:text-3xl mb-4 text-balance">
          Ready to Buy Tickets?
        </h2>
        <p className="font-sans text-cream/60 text-sm mb-8 max-w-lg mx-auto text-pretty">
          Don&apos;t wait — buy 5 VIP tickets or more and save 25% with promo code{" "}
          <span className="text-gold font-semibold">WineVIP25</span>.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
          <Link
            href="/sandiego"
            className="btn-outline text-xs w-full sm:w-auto inline-flex items-center justify-center text-center leading-snug px-4"
          >
            San Diego — Fri–Sun, Mar 13–15, 2026
          </Link>
          <Link
            href="/denver"
            className="btn-outline text-xs w-full sm:w-auto inline-flex items-center justify-center text-center leading-snug px-4"
          >
            Denver — Fri–Sun, Apr 10–12, 2026
          </Link>
          <Link
            href="/tampa"
            className="btn-outline text-xs w-full sm:w-auto inline-flex items-center justify-center text-center leading-snug px-4"
          >
            Tampa — Fri–Sun, Apr 17–19, 2026
          </Link>
        </div>
        <div className="mt-6 px-2">
          <a
            href="https://www.tixr.com/groups/wsgrandtour"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex w-full max-w-sm mx-auto items-center justify-center"
          >
            Buy Tickets Now
          </a>
        </div>
      </section>
    </>
  );
}
