import type { Metadata } from "next";
import CityHero from "@/components/CityHero";

export const metadata: Metadata = {
  title: "Tampa | Wine Spectator Grand Tour 2026",
  description:
    "Grand Tour Tampa, Apr 17–19, 2026: Fri/Sat 10 AM start through evening Grand Tour; Sun goodbye breakfast. JW Marriott Tampa Water Street.",
};

export default function TampaPage() {
  return (
    <CityHero
      city="Tampa"
      date="Friday–Sunday, April 17–19, 2026"
      venue="JW Marriott Tampa Water Street"
      heroImage="https://static.wixstatic.com/media/87b21c_8f83d316b4dc4a07aa84bc10befcb7e3~mv2.jpg/v1/fit/w_963,h_700,q_90,enc_avif,quality_auto/87b21c_8f83d316b4dc4a07aa84bc10befcb7e3~mv2.jpg"
      tixrUrl="https://www.tixr.com/groups/wsgrandtour/events/wine-spectator-s-grand-tour-tampa-164457"
      tickets={[
        {
          label: "VIP Admission",
          price: "$395",
          hours: "Fri & Sat evenings · 6:00 – 9:30 PM",
          highlight: true,
          perks: [
            "Fri & Sat daytime: 10:00 AM seminars, lunch, afternoon session",
            "Sunday: goodbye breakfast (no evening tasting)",
            "Fri & Sat evenings: VIP from 6:00 PM (extra hour before General Admission)",
            "Souvenir Riedel™ wine glass",
            "Tasting book with 200 wine descriptions",
            "Food during Fri/Sat program & evening walk-around",
          ],
        },
        {
          label: "General Admission",
          price: "$250",
          hours: "Fri & Sat evenings · 7:00 – 9:30 PM",
          perks: [
            "Fri & Sat daytime: 10:00 AM seminars, lunch, afternoon session",
            "Sunday: goodbye breakfast (no evening tasting)",
            "Souvenir Riedel™ wine glass",
            "Tasting book with 200 wine descriptions",
            "Food during Fri/Sat program & evening walk-around",
          ],
        },
        {
          label: "Young Connoisseur (30 & Under)",
          price: "$100",
          hours: "Fri & Sat evenings · 7:00 – 9:30 PM",
          perks: [
            "Eligible Fri/Sat daytime + Sunday breakfast when included in your pass (see Tixr)",
            "Fri or Sat evening General Admission where Young Connoisseur is offered",
            "Souvenir Riedel™ wine glass",
            "Tasting book with 200 wine descriptions",
            "Food during included sessions",
            "Valid proof of age required",
          ],
        },
      ]}
      galleryImages={[
        "https://static.wixstatic.com/media/20fc31_35ca257037ee4fe3abf71f312d4ef63c~mv2.jpg/v1/fill/w_360,h_700,q_90,enc_avif,quality_auto/20fc31_35ca257037ee4fe3abf71f312d4ef63c~mv2.jpg",
        "https://static.wixstatic.com/media/20fc31_8a40ce9e0e3942258bfb56352b220f72~mv2.jpg/v1/fill/w_360,h_700,q_90,enc_avif,quality_auto/20fc31_8a40ce9e0e3942258bfb56352b220f72~mv2.jpg",
        "https://static.wixstatic.com/media/20fc31_6facae9061bb46abac8cf7454b723d2d~mv2.jpg/v1/fill/w_360,h_700,q_90,enc_avif,quality_auto/20fc31_6facae9061bb46abac8cf7454b723d2d~mv2.jpg",
        "https://static.wixstatic.com/media/20fc31_52cf241d3fb8452db6f0f1d6316b7da5~mv2.jpg/v1/fill/w_360,h_700,q_90,enc_avif,quality_auto/20fc31_52cf241d3fb8452db6f0f1d6316b7da5~mv2.jpg",
        "https://static.wixstatic.com/media/20fc31_9baa7802e5b54b64ad56b1c890588c2d~mv2.jpg/v1/fill/w_360,h_700,q_90,enc_avif,quality_auto/20fc31_9baa7802e5b54b64ad56b1c890588c2d~mv2.jpg",
      ]}
    />
  );
}
