import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/sandiego", label: "San Diego" },
  { href: "/denver", label: "Denver" },
  { href: "/tampa", label: "Tampa" },
  { href: "/wineswineries", label: "Wineries & Wines" },
  { href: "/faq", label: "FAQ" },
  { href: "/signupforupdates", label: "Sign Up For Updates" },
];

export default function Footer() {
  return (
    <footer className="bg-black/60 border-t border-gold/20 text-cream/70 text-xs font-sans">
      {/* Wine row decorative strip */}
      <div
        className="w-full h-12 opacity-40 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/87b21c_6efdaecc7f804c1d885862067dd38515~mv2.png/v1/crop/x_6,y_0,w_4031,h_799/fill/w_979,h_194,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/winerow.png')",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link text-cream/60 hover:text-gold transition-colors py-2 px-1 inline-flex items-center min-h-[44px]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Social */}
        <div className="flex justify-center gap-5">
          <a
            href="https://www.instagram.com/wsgrandtour/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light transition-colors"
            aria-label="Instagram"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/WineSpectator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light transition-colors"
            aria-label="Facebook"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>

        {/* Terms */}
        <div className="border-t border-gold/10 pt-6 space-y-3 text-center leading-relaxed text-cream/50">
          <p>
            <strong className="text-cream/70">Refund Policy:</strong> A refund
            (minus processing fees) is available for all tickets until 60 days
            before that city&apos;s opening night: San Diego – Jan 12, 2026 |
            Denver – Feb 9, 2026 | Tampa – Feb 16, 2026. After those dates, no
            refunds are
            available.
          </p>
          <p>Must be 21 to enter; proof of age required.</p>
          <p>
            Questions?{" "}
            <a
              href="mailto:events@mshanken.com"
              className="text-gold hover:underline"
            >
              events@mshanken.com
            </a>
          </p>
          <p className="pt-2">
            © {new Date().getFullYear()} M. Shanken Communications, Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
