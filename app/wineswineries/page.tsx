import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wineries & Wines | Wine Spectator Grand Tour 2026",
  description:
    "Explore 200+ Grand Tour wines (Fri & Sat main events). Weekend also includes daytime seminars and Sunday farewell breakfast.",
};

const cities = [
  {
    name: "San Diego",
    date: "Fri–Sun · March 13–15, 2026",
    tixr: "https://www.tixr.com/groups/wsgrandtour/events/wine-spectator-s-grand-tour-san-diego-164352",
    href: "/sandiego",
  },
  {
    name: "Denver",
    date: "Fri–Sun · April 10–12, 2026",
    tixr: "https://www.tixr.com/groups/wsgrandtour/events/wine-spectator-s-grand-tour-denver-164327",
    href: "/denver",
  },
  {
    name: "Tampa",
    date: "Fri–Sun · April 17–19, 2026",
    tixr: "https://www.tixr.com/groups/wsgrandtour/events/wine-spectator-s-grand-tour-tampa-164457",
    href: "/tampa",
  },
];

export default function WineriesWinesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-burgundy/30 to-charcoal py-24 text-center px-6">
        <h1 className="section-heading text-6xl md:text-8xl mb-4">Wineries &amp; Wines</h1>
        <p className="font-sans text-gold text-xs uppercase tracking-[0.2em] mb-6">
          200+ Wines Rated 90 Points or Higher
        </p>
        <p className="font-sans text-cream/70 max-w-xl mx-auto leading-relaxed">
          Taste from an incredible line-up of wines from the world&apos;s best wine-growing
          regions — Argentina, Australia, Italy, France, Chile, Spain, Portugal, New Zealand, the
          United States and more.
        </p>
      </section>

      {/* Coming soon message per city */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {cities.map((c) => (
            <div key={c.name} className="ticket-card p-8 flex flex-col gap-4">
              <h2 className="section-heading text-4xl">{c.name}</h2>
              <p className="font-sans text-gold text-sm">{c.date}</p>
              <p className="font-sans text-cream/50 text-sm flex-1">
                Wineries &amp; wines list coming soon! Check back as we get closer to your Grand Tour
                weekend.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={c.tixr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-center text-xs"
                >
                  Buy Tickets
                </a>
                <Link href={c.href} className="btn-outline text-center text-xs">
                  Event Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wine regions info */}
      <section className="bg-black/30 border-y border-gold/10 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="section-heading text-3xl mb-6">Wines from Around the World</h2>
          <p className="font-sans text-cream/70 leading-relaxed mb-4">
            Every wine poured at Grand Tour has been blind tasted by one of our expert Wine
            Spectator editors — giving you the most pure and unbiased review. Expect an extraordinary
            selection spanning:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              "France",
              "Italy",
              "Spain",
              "Portugal",
              "United States",
              "Argentina",
              "Chile",
              "Australia",
              "New Zealand",
              "Germany",
              "Austria",
            ].map((region) => (
              <span
                key={region}
                className="border border-gold/30 text-gold font-sans text-xs uppercase tracking-widest px-4 py-2"
              >
                {region}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center px-6">
        <h2 className="section-heading text-3xl mb-4">Get Your Tickets</h2>
        <p className="font-sans text-cream/60 text-sm mb-8">
          Buy 5 VIP tickets or more and save 25% · Promo code:{" "}
          <span className="text-gold font-semibold">WineVIP25</span>
        </p>
        <a
          href="https://www.tixr.com/groups/wsgrandtour"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          Buy Tickets — All Cities
        </a>
      </section>
    </>
  );
}
