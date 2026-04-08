import type { Metadata } from "next";
import CityHero from "@/components/CityHero";

export const metadata: Metadata = {
  title: "Tampa | Wine Spectator Grand Tour 2026",
  description:
    "Wine Spectator's Grand Tour Tampa — weekend of April 17–19, 2026 (Fri–Sun) at JW Marriott Tampa Water Street. Three nights of 90+ point wines.",
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
          hours: "Nightly · 6:00 – 9:30 PM",
          highlight: true,
          perks: [
            "Morning seminars Friday–Sunday (times announced before the event)",
            "Sunday breakfast",
            "Exclusive first hour for VIPs each night (6:00–7:00 PM) before General Admission",
            "Souvenir Riedel™ wine glass",
            "Tasting book with 200 wine descriptions",
            "Delicious selection of food",
          ],
        },
        {
          label: "General Admission",
          price: "$250",
          hours: "Nightly · 7:00 – 9:30 PM",
          perks: [
            "Morning seminars Friday–Sunday (times announced before the event)",
            "Sunday breakfast",
            "Souvenir Riedel™ wine glass",
            "Tasting book with 200 wine descriptions",
            "Delicious selection of food",
          ],
        },
        {
          label: "Young Connoisseur (30 & Under)",
          price: "$100",
          hours: "Nightly · 7:00 – 9:30 PM",
          perks: [
            "Morning seminars Friday–Sunday (times announced before the event)",
            "Sunday breakfast",
            "Souvenir Riedel™ wine glass",
            "Tasting book with 200 wine descriptions",
            "Delicious selection of food",
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
