import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1C1C1C",
};

export const metadata: Metadata = {
  title: "Wine Spectator's Grand Tour",
  description:
    "Grand Tour 2026: Fri–Sat 10 AM seminars, lunch, 2:30 PM afternoon seminar, evening walk-around (90+ wines); Sun goodbye breakfast. San Diego Mar 13–15, Denver Apr 10–12, Tampa Apr 17–19.",
  openGraph: {
    title: "Wine Spectator's Grand Tour",
    description:
      "Weekend wine weekends—Fri/Sat full days + Sun farewell breakfast. 200+ wines rated 90+.",
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
      <body className="min-h-screen flex flex-col overflow-x-hidden bg-charcoal text-cream antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
