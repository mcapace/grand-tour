import Image from "next/image";
import Link from "next/link";

const LOGO_URL =
  "https://static.wixstatic.com/media/87b21c_fd04523daf3640989761afa9d8a7bdf5~mv2.avif/v1/fill/w_980,h_165,al_c,q_80,enc_avif,quality_auto/WSGrandTourLogoLockup2024.avif";

const HERO_BG =
  "https://static.wixstatic.com/media/20fc31_13798de3e9914edeb6159378936c05e0~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-1324340113_edited.jpg";

const GALLERY_IMAGES = [
  "https://static.wixstatic.com/media/87b21c_8f83d316b4dc4a07aa84bc10befcb7e3~mv2.jpg/v1/fit/w_963,h_700,q_90,enc_avif,quality_auto/87b21c_8f83d316b4dc4a07aa84bc10befcb7e3~mv2.jpg",
  "https://static.wixstatic.com/media/87b21c_297ee6c812a240c9a785321a38c35a96~mv2.jpg/v1/fit/w_493,h_700,q_90,enc_avif,quality_auto/87b21c_297ee6c812a240c9a785321a38c35a96~mv2.jpg",
  "https://static.wixstatic.com/media/87b21c_a734dc948a804a41889815b66ec790c6~mv2.png/v1/fit/w_894,h_700,q_90,enc_avif,quality_auto/87b21c_a734dc948a804a41889815b66ec790c6~mv2.png",
  "https://static.wixstatic.com/media/87b21c_0474bcf77bec42eab7143aff7be189d3~mv2.jpg/v1/fit/w_897,h_700,q_90,enc_avif,quality_auto/87b21c_0474bcf77bec42eab7143aff7be189d3~mv2.jpg",
  "https://static.wixstatic.com/media/87b21c_357784875c014bf9b0f09fc05fbfe57b~mv2.jpg/v1/fit/w_1235,h_700,q_90,enc_avif,quality_auto/87b21c_357784875c014bf9b0f09fc05fbfe57b~mv2.jpg",
  "https://static.wixstatic.com/media/87b21c_319f9d4f574c43a7b456f32972212c28~mv2.jpg/v1/fit/w_774,h_700,q_90,enc_avif,quality_auto/87b21c_319f9d4f574c43a7b456f32972212c28~mv2.jpg",
  "https://static.wixstatic.com/media/87b21c_bd9583bdd0ab466fb6c5e622eed30613~mv2.jpg/v1/fit/w_962,h_700,q_90,enc_avif,quality_auto/87b21c_bd9583bdd0ab466fb6c5e622eed30613~mv2.jpg",
  "https://static.wixstatic.com/media/87b21c_4d33b028cf9841028001095a53505509~mv2.jpg/v1/fit/w_846,h_700,q_90,enc_avif,quality_auto/87b21c_4d33b028cf9841028001095a53505509~mv2.jpg",
  "https://static.wixstatic.com/media/87b21c_84643c8dff044f2a9e8fc6301199cd31~mv2.jpg/v1/fit/w_759,h_700,q_90,enc_avif,quality_auto/87b21c_84643c8dff044f2a9e8fc6301199cd31~mv2.jpg",
];

const WINEMAKER_IMAGES = [
  "https://static.wixstatic.com/media/87b21c_a3261a8171574615b5a373bed177e815~mv2.jpg/v1/fill/w_360,h_700,q_90,enc_avif,quality_auto/87b21c_a3261a8171574615b5a373bed177e815~mv2.jpg",
  "https://static.wixstatic.com/media/87b21c_c720c1f5b0d7485c8c93f72a6675df51~mv2.jpg/v1/fill/w_360,h_700,fp_0.53_0.29,q_90,enc_avif,quality_auto/87b21c_c720c1f5b0d7485c8c93f72a6675df51~mv2.jpg",
  "https://static.wixstatic.com/media/87b21c_8726a2e36aa045398966ddfcfaa9553f~mv2.jpg/v1/fill/w_360,h_700,q_90,enc_avif,quality_auto/87b21c_8726a2e36aa045398966ddfcfaa9553f~mv2.jpg",
  "https://static.wixstatic.com/media/87b21c_2e68fc18a4cc446aad738b4e9844a06d~mv2.jpg/v1/fill/w_360,h_700,q_90,enc_avif,quality_auto/87b21c_2e68fc18a4cc446aad738b4e9844a06d~mv2.jpg",
  "https://static.wixstatic.com/media/87b21c_42d1225ae5524128b712bc7e0159793b~mv2.jpg/v1/fill/w_360,h_700,q_90,enc_avif,quality_auto/87b21c_42d1225ae5524128b712bc7e0159793b~mv2.jpg",
  "https://static.wixstatic.com/media/87b21c_3e4c4141d4cf4aabb3677e9bf96b913b~mv2.jpg/v1/fill/w_360,h_700,q_90,enc_avif,quality_auto/87b21c_3e4c4141d4cf4aabb3677e9bf96b913b~mv2.jpg",
];

const cities = [
  {
    name: "San Diego",
    date: "Fri–Sun · March 13–15, 2026",
    venue: "Gaylord Convention Center",
    href: "/sandiego",
    tixr: "https://www.tixr.com/groups/wsgrandtour/events/wine-spectator-s-grand-tour-san-diego-164352",
  },
  {
    name: "Denver",
    date: "Fri–Sun · April 10–12, 2026",
    venue: "Sheraton Denver Downtown",
    href: "/denver",
    tixr: "https://www.tixr.com/groups/wsgrandtour/events/wine-spectator-s-grand-tour-denver-164327",
  },
  {
    name: "Tampa",
    date: "Fri–Sun · April 17–19, 2026",
    venue: "JW Marriott Tampa Water Street",
    href: "/tampa",
    tixr: "https://www.tixr.com/groups/wsgrandtour/events/wine-spectator-s-grand-tour-tampa-164457",
  },
];

const otherEvents = [
  {
    name: "New York Wine Experience",
    logo: "https://static.wixstatic.com/media/20fc31_8919ca2703cb46e5a4f2972a983a6d55~mv2.png/v1/crop/x_3,y_0,w_1173,h_900/fill/w_958,h_735,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/nywe-wht-1200.png",
    href: "https://www.nywineexperience.com/",
  },
  {
    name: "Big Smoke & WhiskyFest",
    logo: "https://static.wixstatic.com/media/20fc31_40659d1e2fb04acda0a6218bfa5c951f~mv2.png/v1/fill/w_980,h_703,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/BSWF_WhiskyCigar_KO-01.png",
    href: "https://www.bigsmokewhiskyfest.com/",
  },
  {
    name: "WhiskyFest",
    logo: "https://static.wixstatic.com/media/20fc31_48ca4093ee36441fa6149e12085706e1~mv2.png/v1/crop/x_8,y_2,w_1190,h_231/fill/w_980,h_190,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/whiskyfest-wht-1200.png",
    href: "https://whiskyadvocate.com/whiskyfest",
  },
  {
    name: "Big Smoke Las Vegas",
    logo: "https://static.wixstatic.com/media/20fc31_c6094e1fb2634ee5a7366108229b4ad2~mv2.png/v1/fill/w_980,h_336,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bslv-wht-1200.png",
    href: "https://www.lasvegasbigsmoke.com/",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src={HERO_BG}
          alt="Wine glasses at Grand Tour"
          fill
          className="object-cover"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <Image
            src={LOGO_URL}
            alt="Wine Spectator Grand Tour"
            width={780}
            height={131}
            className="mx-auto mb-8 w-full max-w-xl drop-shadow-[0_4px_28px_rgba(0,0,0,0.85)] contrast-[1.08]"
            unoptimized
            priority
          />
          <h2 className="section-heading text-3xl md:text-5xl mb-10">
            3 Cities. 3 Spectacular Weekends.
          </h2>
          <a
            href="https://www.tixr.com/groups/wsgrandtour"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm"
          >
            Tickets On Sale Now
          </a>
          <p className="font-sans text-cream/50 text-xs mt-4 tracking-wider uppercase">
            Buy 5 VIP tickets or more &amp; get 25% off · Promo code:{" "}
            <span className="text-gold font-semibold">WineVIP25</span>
          </p>
        </div>
      </section>

      {/* City cards */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {cities.map((c) => (
            <div
              key={c.name}
              className="ticket-card group p-8 flex flex-col gap-4 hover:border-gold/60 transition-colors duration-300"
            >
              <div>
                <h3 className="section-heading text-5xl mb-1">{c.name}</h3>
                <p className="font-sans text-gold text-sm font-medium">{c.date}</p>
                <p className="font-sans text-cream/60 text-sm">{c.venue}</p>
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                <a
                  href={c.tixr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-center text-xs"
                >
                  Buy Tickets
                </a>
                <Link href={c.href} className="btn-outline text-center text-xs">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wine gallery marquee */}
      <section className="overflow-hidden border-y border-gold/10 py-4">
        <div className="marquee-track">
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-52 h-52 mx-1 overflow-hidden"
            >
              <Image
                src={src}
                alt=""
                width={208}
                height={208}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
          ))}
        </div>
      </section>

      {/* About section */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="section-heading text-4xl md:text-5xl mb-6">
          Taste Over 200 Wines Rated 90+ Points
        </h2>
        <p className="font-sans text-cream/70 leading-relaxed text-base mb-10">
          Each Grand Tour is a <strong className="text-cream/90">three-day weekend</strong> built
          around <strong className="text-cream/90">Friday and Saturday</strong>: days start at{" "}
          <strong className="text-cream/90">10:00 AM</strong> with seminars, then{" "}
          <strong className="text-cream/90">lunch</strong>, an{" "}
          <strong className="text-cream/90">afternoon session</strong>, and the signature evening
          walk-around with 200+ wines rated 90+.{" "}
          <strong className="text-cream/90">Sunday</strong> is a{" "}
          <strong className="text-cream/90">goodbye breakfast</strong> only—no main event that night.
          Your Riedel™ glass and food throughout the package are included per your Tixr pass.
        </p>
        <Link href="/signupforupdates" className="btn-outline">
          Sign Up For Updates
        </Link>
      </section>

      {/* Winemaker image strip */}
      <section className="overflow-hidden border-y border-gold/10 py-4">
        <div className="marquee-track" style={{ animationDirection: "reverse" }}>
          {[...WINEMAKER_IMAGES, ...WINEMAKER_IMAGES].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-36 h-64 mx-1 overflow-hidden"
            >
              <Image
                src={src}
                alt=""
                width={144}
                height={256}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
          ))}
        </div>
      </section>

      {/* Wine Spectator subscribe */}
      <section className="bg-burgundy/10 border-y border-gold/10 py-14">
        <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 rounded-lg bg-cream/95 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] ring-1 ring-black/10">
            <Image
              src="https://static.wixstatic.com/media/20fc31_8a55c5deeb17415e909fe346819b0948~mv2.png/v1/fill/w_394,h_212,al_c,q_85,enc_avif,quality_auto/WS%2BCvrs_394x212.png"
              alt="Wine Spectator Magazine"
              width={300}
              height={161}
              className="object-contain"
              unoptimized
            />
          </div>
          <div>
            <h2 className="section-heading text-3xl mb-3">Wine Spectator Magazine</h2>
            <p className="font-sans text-cream/70 text-sm leading-relaxed mb-5">
              Go from wine curious to wine connoisseur with Wine Spectator as your guide. Expert
              ratings and reviews, wine education, access to our database of over 400,000 wines, and
              much more.
            </p>
            <a
              href="https://sub.winespectator.com/pubs/M5/WNE/3-Subscribe-button-monthly.jsp"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Subscribe
            </a>
          </div>
        </div>
      </section>

      {/* Sponsor form */}
      <section className="max-w-2xl mx-auto px-6 py-20" id="sponsor">
        <h2 className="section-heading text-4xl text-center mb-10">Become a Grand Tour Sponsor</h2>
        <form
          action="mailto:events@mshanken.com"
          method="get"
          className="flex flex-col gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name *"
              required
              className="bg-white/5 border border-gold/20 text-cream placeholder:text-cream/30 px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/60"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-white/5 border border-gold/20 text-cream placeholder:text-cream/30 px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/60"
            />
          </div>
          <input
            type="tel"
            placeholder="Phone *"
            required
            className="bg-white/5 border border-gold/20 text-cream placeholder:text-cream/30 px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/60"
          />
          <input
            type="email"
            placeholder="Email *"
            required
            className="bg-white/5 border border-gold/20 text-cream placeholder:text-cream/30 px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/60"
          />
          <input
            type="text"
            placeholder="Company *"
            required
            className="bg-white/5 border border-gold/20 text-cream placeholder:text-cream/30 px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/60"
          />
          <input
            type="url"
            placeholder="Website *"
            required
            className="bg-white/5 border border-gold/20 text-cream placeholder:text-cream/30 px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/60"
          />
          <textarea
            placeholder="Message *"
            required
            rows={5}
            className="bg-white/5 border border-gold/20 text-cream placeholder:text-cream/30 px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/60 resize-none"
          />
          <p className="text-cream/40 text-xs font-sans">
            * Note: Submit will open your email client pre-addressed to{" "}
            <span className="text-gold">events@mshanken.com</span>. For a custom form integration,
            connect SendGrid or a form provider of your choice.
          </p>
          <button type="submit" className="btn-gold self-start">
            Submit
          </button>
        </form>
      </section>

      {/* Other events */}
      <section className="bg-black/40 border-t border-gold/10 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="section-heading text-3xl text-center mb-10">
            Check Out Our Other Events
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherEvents.map((e) => (
              <a
                key={e.name}
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ticket-card bg-zinc-950/95 border-gold/35 p-6 flex min-h-[5.5rem] items-center justify-center hover:border-gold/60 transition-colors"
              >
                <Image
                  src={e.logo}
                  alt={e.name}
                  width={200}
                  height={80}
                  className="object-contain h-14 w-full brightness-110 contrast-105 drop-shadow-[0_0_1px_rgba(255,255,255,0.35)]"
                  unoptimized
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
