import type { Metadata } from "next";
import CityHero from "@/components/CityHero";

export const metadata: Metadata = {
  title: "San Diego | Wine Spectator Grand Tour 2026",
  description:
    "Grand Tour San Diego, Mar 13–15, 2026: Fri/Sat full days ending with evening walk-around; Sun farewell breakfast. Gaylord Convention Center.",
};

export default function SanDiegoPage() {
  return (
    <CityHero
      city="San Diego"
      date="Friday–Sunday, March 13–15, 2026"
      venue="Gaylord Convention Center"
      heroImage="https://static.wixstatic.com/media/87b21c_265dae08eaee43d4aec1e436c47328e1~mv2.jpg/v1/fit/w_805,h_700,q_90,enc_avif,quality_auto/87b21c_265dae08eaee43d4aec1e436c47328e1~mv2.jpg"
      tixrUrl="https://www.tixr.com/groups/wsgrandtour/events/wine-spectator-s-grand-tour-san-diego-164352"
      hotelBookUrl="https://book.passkey.com/event/50742596/owner/6139/landing"
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
        "https://static.wixstatic.com/media/87b21c_265dae08eaee43d4aec1e436c47328e1~mv2.jpg/v1/fit/w_805,h_700,q_90,enc_avif,quality_auto/87b21c_265dae08eaee43d4aec1e436c47328e1~mv2.jpg",
        "https://static.wixstatic.com/media/87b21c_7c66d3080f8f49fbba92f4bd5ec98176~mv2.jpg/v1/fit/w_1046,h_700,q_90,enc_avif,quality_auto/87b21c_7c66d3080f8f49fbba92f4bd5ec98176~mv2.jpg",
        "https://static.wixstatic.com/media/87b21c_319f9d4f574c43a7b456f32972212c28~mv2.jpg/v1/fit/w_774,h_700,q_90,enc_avif,quality_auto/87b21c_319f9d4f574c43a7b456f32972212c28~mv2.jpg",
        "https://static.wixstatic.com/media/87b21c_47f910dbe6454c379deb82cf5f6e166e~mv2.jpg/v1/fit/w_1018,h_700,q_90,enc_avif,quality_auto/87b21c_47f910dbe6454c379deb82cf5f6e166e~mv2.jpg",
        "https://static.wixstatic.com/media/87b21c_b964e5652e624d71b30029759fc0feea~mv2.jpg/v1/fit/w_843,h_700,q_90,enc_avif,quality_auto/87b21c_b964e5652e624d71b30029759fc0feea~mv2.jpg",
      ]}
    />
  );
}
