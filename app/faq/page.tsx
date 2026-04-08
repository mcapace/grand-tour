"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is included in the ticket price?",
    a: "200 wines rated 90+ for you to taste (red, white, rosé, sparkling and dessert), a beautiful souvenir Riedel™ wine glass, and a delicious selection of food to enjoy.",
  },
  {
    q: "What is included in the VIP ticket?",
    a: "Everything outlined above plus an extra hour to taste — VIP admission starts at 6:00 PM.",
  },
  {
    q: "What time does the Grand Tour start?",
    a: "The event runs from 7:00–9:30 PM. VIP admission begins at 6:00 PM for an extra hour of tasting.",
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
    a: "A refund (minus processing fees) is available for all tickets until 60 days prior to the event: Denver – Feb 17, 2026 | San Diego – Feb 24, 2026 | Tampa – March 3, 2026. After those dates there are no more refunds. To request a refund or exchange please send your request to events@mshanken.com.",
  },
  {
    q: "Can I transfer my ticket to a friend?",
    a: "Yes, you can! To transfer your ticket, log in to your fan account on Tixr.com, click on 'My Events' to view your Grand Tour ticket, then click 'Manage Transfers' and follow the prompts. Please note you may only transfer your ticket once.",
  },
  {
    q: "Will there be food at the tasting?",
    a: "Yes, there will be a light buffet with a variety of options to enjoy during the tasting.",
  },
  {
    q: "Is there a Young Connoisseur program?",
    a: "Yes! Guests 30 and under can purchase a General Admission ticket for $100. Valid proof of age required at the door.",
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
        className="w-full text-left py-5 flex justify-between items-center gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-sans font-medium text-cream text-sm leading-snug">{q}</span>
        <svg
          className={`flex-shrink-0 text-gold transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          width="16"
          height="16"
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
          <p className="font-sans text-cream/70 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-burgundy/20 to-charcoal py-20 text-center px-6">
        <h1 className="section-heading text-6xl mb-4">FAQ</h1>
        <p className="font-sans text-gold text-xs uppercase tracking-[0.2em]">
          Frequently Asked Questions
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-16">
        {faqs.map((item) => (
          <FaqItem key={item.q} q={item.q} a={item.a} />
        ))}

        <div className="mt-12 text-center">
          <p className="font-sans text-cream/60 text-sm mb-4">Still have questions?</p>
          <a href="mailto:events@mshanken.com" className="btn-gold">
            Email events@mshanken.com
          </a>
        </div>
      </section>
    </>
  );
}
