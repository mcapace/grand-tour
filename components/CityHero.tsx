import Image from "next/image";
import Link from "next/link";

interface TicketTier {
  label: string;
  price: string;
  hours: string;
  perks: string[];
  highlight?: boolean;
}

interface CityHeroProps {
  city: string;
  date: string;
  venue: string;
  venueAddress?: string;
  venuePhone?: string;
  heroImage: string;
  tixrUrl: string;
  hotelBookUrl?: string;
  floorPlanUrl?: string;
  tickets: TicketTier[];
  restaurantAwards?: { name: string; logo: string; href: string; tier: string }[];
  galleryImages?: string[];
}

export default function CityHero({
  city,
  date,
  venue,
  venueAddress,
  venuePhone,
  heroImage,
  tixrUrl,
  hotelBookUrl,
  floorPlanUrl,
  tickets,
  restaurantAwards,
  galleryImages,
}: CityHeroProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end overflow-hidden">
        <Image
          src={heroImage}
          alt={`Grand Tour ${city}`}
          fill
          className="object-cover"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 w-full">
          <p className="font-sans text-gold uppercase tracking-[0.2em] text-xs mb-3">
            Presented by the Wine Spectator Scholarship Foundation
          </p>
          <h1 className="section-heading text-6xl md:text-8xl mb-2">{city}</h1>
          <p className="font-sans text-cream/80 text-lg">{date}</p>
          <p className="font-sans text-cream/60 text-base mb-8">{venue}</p>
          <div className="flex flex-wrap gap-3">
            <a href={tixrUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Buy Tickets
            </a>
            {floorPlanUrl && (
              <a href={floorPlanUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                View Floor Plan
              </a>
            )}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="section-heading text-4xl mb-6">An Evening of Exceptional Wine</h2>
        <p className="font-sans text-cream/70 leading-relaxed text-base">
          Enjoy an evening of exceptional wines from the world&apos;s best wine-growing regions at
          Wine Spectator&apos;s Grand Tour. All wines are rated 90 points or higher by Wine
          Spectator&apos;s editors. Meet the winemakers, enjoy a delicious selection of food and take
          home a souvenir Riedel™ wine glass — all included in your ticket price.
        </p>
      </section>

      {/* Gallery strip */}
      {galleryImages && galleryImages.length > 0 && (
        <section className="overflow-hidden py-4">
          <div className="marquee-track">
            {[...galleryImages, ...galleryImages].map((src, i) => (
              <div key={i} className="flex-shrink-0 w-48 h-48 mx-1 overflow-hidden">
                <Image
                  src={src}
                  alt=""
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tickets */}
      <section id="tickets" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="section-heading text-4xl text-center mb-2">Tickets</h2>
        <p className="text-center text-gold font-sans text-xs uppercase tracking-widest mb-10">
          {venue.toUpperCase()} · {date.toUpperCase()}
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {tickets.map((t) => (
            <div
              key={t.label}
              className={`ticket-card p-8 flex flex-col gap-4 ${
                t.highlight ? "border-gold/60 bg-gold/5" : ""
              }`}
            >
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-gold mb-1">{t.label}</p>
                <p className="section-heading text-5xl mb-1">{t.price}</p>
                <p className="font-sans text-cream/60 text-sm">{t.hours}</p>
              </div>
              <hr className="gold-rule" />
              <ul className="space-y-2 flex-1">
                {t.perks.map((p) => (
                  <li key={p} className="font-sans text-sm text-cream/70 flex gap-2">
                    <span className="text-gold mt-0.5">✦</span>
                    {p}
                  </li>
                ))}
              </ul>
              <a href={tixrUrl} target="_blank" rel="noopener noreferrer" className="btn-gold text-center mt-2">
                Buy Tickets
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-cream/40 font-sans text-xs mt-6">
          Flexible payment options available · Must be 21+ · Proof of age required
        </p>
      </section>

      {/* Young Connoisseur */}
      <section className="bg-burgundy/20 border-y border-gold/20 py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="section-heading text-3xl mb-4">Young Connoisseur Program</h2>
          <p className="font-sans text-cream/70 leading-relaxed mb-6">
            Wine Spectator is introducing a new initiative to welcome the next generation of wine
            lovers. Guests <strong>30 and under</strong> can purchase a General Admission ticket for
            only <strong className="text-gold">$100</strong>, making it easier for young professionals
            and emerging connoisseurs to experience our world-class tastings. Valid proof of age is
            required at the door.
          </p>
          <a href={tixrUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Buy Young Connoisseur Ticket — $100
          </a>
        </div>
      </section>

      {/* Wineries & Wines teaser */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="section-heading text-4xl mb-4">Wineries &amp; Wines</h2>
        <p className="font-sans text-cream/70 leading-relaxed mb-8">
          Taste from an incredible line-up of 200+ wines from the world&apos;s best wine-growing
          regions — Argentina, Australia, Italy, France, Chile, Spain, Portugal, New Zealand, the
          United States and more. All rated 90 points or higher by Wine Spectator&apos;s editors.
        </p>
        <Link href="/wineswineries" className="btn-outline">
          See Wineries &amp; Wines
        </Link>
      </section>

      {/* Restaurant Awards */}
      {restaurantAwards && restaurantAwards.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <h2 className="section-heading text-3xl text-center mb-2">
            Participating Restaurant Award Winners
          </h2>
          <p className="font-sans text-cream/60 text-sm text-center mb-10 leading-relaxed">
            Wine Spectator&apos;s Restaurant Awards celebrate restaurants whose wine lists showcase
            distinctive selections. These {city} winners will be pouring at the event.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {restaurantAwards.map((r) => (
              <a
                key={r.name}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ticket-card p-8 flex flex-col items-center gap-4 hover:border-gold/60 transition-colors"
              >
                <Image src={r.logo} alt={r.name} width={280} height={120} className="object-contain h-20 w-auto" unoptimized />
                <p className="font-sans text-xs uppercase tracking-widest text-gold">{r.tier}</p>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Hotel */}
      {hotelBookUrl && venueAddress && (
        <section className="bg-black/40 border-t border-gold/10 py-14">
          <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="section-heading text-3xl mb-3">Hotel Accommodations</h2>
              <p className="font-sans text-cream/70 mb-1 font-medium">{venue}</p>
              {venueAddress && (
                <p className="font-sans text-cream/50 text-sm mb-1">{venueAddress}</p>
              )}
              {venuePhone && (
                <p className="font-sans text-cream/50 text-sm mb-6">{venuePhone}</p>
              )}
              <a href={hotelBookUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
                Book Room
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
