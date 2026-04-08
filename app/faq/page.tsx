"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is included in the ticket price?",
    a: "Full-weekend packages include everything for Friday and Saturday—10:00 AM seminars, lunch, a 2:30 PM afternoon seminar, the evening walk-around Grand Tour (200+ wines rated 90+), food during those days, and a souvenir Riedel™ wine glass—as well as Sunday’s goodbye breakfast. Sunday has no seminars or evening tasting. Single-day options may differ; see Tixr for exactly what your pass covers.",
  },
  {
    q: "What is included in the VIP ticket?",
    a: "Everything in General Admission for Friday and Saturday’s main events, plus an extra hour on the tasting floor before General Admission each of those nights: VIP from 6:00 PM, General Admission from 7:00 PM (both nights end at 9:30 PM). Sunday is breakfast only—no evening session.",
  },
  {
    q: "What time does the Grand Tour start?",
    a: "Friday and Saturday: the day begins at 10:00 AM with seminars, followed by lunch, then a 2:30 PM afternoon seminar, then the evening walk-around (VIP 6:00–9:30 PM · General Admission 7:00–9:30 PM). Sunday is a goodbye breakfast only—no 10:00 AM start and no evening Grand Tour. Final timings are on your Tixr ticket.",
  },
  {
    q: "How does Sunday work compared to Friday and Saturday?",
    a: "Friday and Saturday are full days ending with the main tasting. Sunday is a relaxed farewell: we host a goodbye breakfast so guests can wrap up the weekend together. There are no seminars or evening Grand Tour on Sunday.",
  },
  {
    q: "What is the dress code?",
    a: "Business casual.",
  },
  {
    q: "Do we have to create a Tixr fan account to purchase tickets?",
    a: "Yes, in order to purchase tickets you must first create a Tixr fan account. However, you will only have to do this once — you can use the same login moving forward. If you have any issues creating your account please email events@mshanken.com.",
  },
  {
    q: "I can't find my ticket to the event.",
    a: "Tickets will be emailed to you via our ticketing partner, Tixr. If you cannot find your ticket please reach out to events@mshanken.com.",
  },
  {
    q: "How do I request a refund or exchange?",
    a: "A refund (minus processing fees) is available until 60 days before that city’s opening night: San Diego – Jan 12, 2026 | Denver – Feb 9, 2026 | Tampa – Feb 16, 2026. After those dates there are no more refunds. To request a refund or exchange please send your request to events@mshanken.com.",
  },
  {
    q: "Can I transfer my ticket to a friend?",
    a: "Yes, you can! To transfer your ticket, log in to your fan account on Tixr.com, click on 'My Events' to view your Grand Tour ticket, then click 'Manage Transfers' and follow the prompts. Please note you may only transfer your ticket once.",
  },
  {
    q: "Will there be food at the tasting?",
    a: "Yes—lunch is served on Friday and Saturday between the 10:00 AM seminar block and the 2:30 PM afternoon seminar, chef-prepared bites during each evening walk-around, and a Sunday goodbye breakfast.",
  },
  {
    q: "Is there a Young Connoisseur program?",
    a: "Yes! Guests 30 and under can purchase General Admission for $100 for a qualifying Friday or Saturday main evening where the program is offered (see Tixr). Valid proof of age is required at check-in.",
  },
  {
    q: "Additional questions?",
    a: "Email us at events@mshanken.com and we'll be happy to help.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gold/20">
      <button
        type="button"
        className="w-full text-left py-4 sm:py-5 flex justify-between items-start gap-4 min-h-[3.25rem]"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-sans font-medium text-cream text-sm sm:text-base leading-snug text-pretty pr-2">
          {q}
        </span>
        <svg
          className={`flex-shrink-0 text-gold transition-transform duration-300 mt-1 ${open ? "rotate-180" : ""}`}
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="font-sans text-cream/70 text-sm sm:text-base leading-relaxed text-pretty pb-1">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-burgundy/20 to-charcoal py-14 sm:py-20 text-center px-4 sm:px-6">
        <h1 className="section-heading text-5xl sm:text-6xl mb-4">FAQ</h1>
        <p className="font-sans text-gold text-xs uppercase tracking-[0.2em]">
          Frequently Asked Questions
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {faqs.map((item) => (
          <FaqItem key={item.q} q={item.q} a={item.a} />
        ))}

        <div className="mt-12 text-center">
          <p className="font-sans text-cream/60 text-sm mb-4">Still have questions?</p>
          <a
            href="mailto:events@mshanken.com"
            className="btn-gold inline-flex w-full max-w-sm mx-auto items-center justify-center"
          >
            Email events@mshanken.com
          </a>
        </div>
      </section>
    </>
  );
}
