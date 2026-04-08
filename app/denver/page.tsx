import type { Metadata } from "next";
import CityHero from "@/components/CityHero";

export const metadata: Metadata = {
  title: "Denver | Wine Spectator Grand Tour 2026",
  description:
    "Wine Spectator's Grand Tour Denver — April 10–12, 2026 at Sheraton Denver Downtown. Taste 200+ wines rated 90+ points.",
};

export default function DenverPage() {
  return (
    <CityHero
      city="Denver"
      date="April 10–12, 2026"
      venue="Sheraton Denver Downtown"
      venueAddress="1550 Court Pl, Denver, CO 80202"
      venuePhone="(303) 893-3333"
      heroImage="https://static.wixstatic.com/media/20fc31_ab5d72fc50ac4d97888cb1a530848d02~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/20fc31_ab5d72fc50ac4d97888cb1a530848d02~mv2.jpg"
      tixrUrl="https://www.tixr.com/groups/wsgrandtour/events/wine-spectator-s-grand-tour-denver-164327"
      hotelBookUrl="https://book.passkey.com/event/51082765/owner/3130/home"
      floorPlanUrl="https://mscwordpresscontent.s3.amazonaws.com/mshanken/wp-content/uploads/sites/3/2025/04/GT25map_Chicago2_letter.pdf"
      tickets={[
        {
          label: "VIP Admission",
          price: "$395",
          hours: "6:00 – 9:30 PM",
          highlight: true,
          perks: [
            "Exclusive extra hour of tasting (6:00–7:00 PM)",
            "Souvenir Riedel™ wine glass",
            "Tasting book with 200 wine descriptions",
            "Delicious selection of food",
          ],
        },
        {
          label: "General Admission",
          price: "$250",
          hours: "7:00 – 9:30 PM",
          perks: [
            "Souvenir Riedel™ wine glass",
            "Tasting book with 200 wine descriptions",
            "Delicious selection of food",
          ],
        },
        {
          label: "Young Connoisseur (30 & Under)",
          price: "$100",
          hours: "7:00 – 9:30 PM",
          perks: [
            "Souvenir Riedel™ wine glass",
            "Tasting book with 200 wine descriptions",
            "Delicious selection of food",
            "Valid proof of age required",
          ],
        },
      ]}
      restaurantAwards={[
        {
          name: "Guard & Grace",
          logo: "https://static.wixstatic.com/media/20fc31_b8d39c052ffa4616848e51915e9c0f29~mv2.png/v1/fill/w_640,h_352,al_c,q_85,enc_avif,quality_auto/GuardandGraceBLack_edited.png",
          href: "https://www.winespectator.com/restaurants/2509/guard-and-grace",
          tier: "Best of Award of Excellence",
        },
        {
          name: "Nocturne",
          logo: "https://static.wixstatic.com/media/20fc31_83c3ad91b0ac42018bdb0bdd2f3ca697~mv2.png/v1/fill/w_980,h_782,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Nocturne_logo_reverse_color_FA%20(1)_edited.png",
          href: "https://www.winespectator.com/restaurants/6623/nocturne",
          tier: "Award of Excellence",
          logoSurface: "dark",
        },
      ]}
      galleryImages={[
        "https://static.wixstatic.com/media/20fc31_a2b36588689e40228e6e7f7a361df440~mv2.jpg/v1/fill/w_360,h_700,q_90,enc_avif,quality_auto/20fc31_a2b36588689e40228e6e7f7a361df440~mv2.jpg",
        "https://static.wixstatic.com/media/20fc31_a09bd07083f14f3cb014fe3902019287~mv2.jpg/v1/fill/w_360,h_700,q_90,enc_avif,quality_auto/20fc31_a09bd07083f14f3cb014fe3902019287~mv2.jpg",
        "https://static.wixstatic.com/media/20fc31_3dcb09e52bbf46f7b95a2a97f45f02fa~mv2.jpg/v1/fill/w_360,h_700,q_90,enc_avif,quality_auto/20fc31_3dcb09e52bbf46f7b95a2a97f45f02fa~mv2.jpg",
        "https://static.wixstatic.com/media/20fc31_38552c5d525e43adabb6e263d2a30506~mv2.jpg/v1/fill/w_360,h_700,q_90,enc_avif,quality_auto/20fc31_38552c5d525e43adabb6e263d2a30506~mv2.jpg",
        "https://static.wixstatic.com/media/20fc31_aa88328d7c6141c2acee2eaa6e69d79f~mv2.jpg/v1/fill/w_360,h_700,q_90,enc_avif,quality_auto/20fc31_aa88328d7c6141c2acee2eaa6e69d79f~mv2.jpg",
        "https://static.wixstatic.com/media/20fc31_197468f73c9f48fa9c95be9cc74f6002~mv2.jpg/v1/fill/w_360,h_700,q_90,enc_avif,quality_auto/20fc31_197468f73c9f48fa9c95be9cc74f6002~mv2.jpg",
      ]}
    />
  );
}
