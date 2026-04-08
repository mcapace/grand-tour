import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wine Spectator's Grand Tour",
  description:
    "Three cities, three weekends of walk-around tastings in 2026: San Diego Mar 13–15, Denver Apr 10–12, Tampa Apr 17–19 (each Fri–Sun). 200+ wines rated 90+ by Wine Spectator editors.",
  openGraph: {
    title: "Wine Spectator's Grand Tour",
    description:
      "Three weekend destinations in 2026—walk-around tastings Fri–Sun, 200+ wines rated 90+.",
    images: [
      "https://static.wixstatic.com/media/87b21c_fd04523daf3640989761afa9d8a7bdf5~mv2.avif",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-charcoal text-cream">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
