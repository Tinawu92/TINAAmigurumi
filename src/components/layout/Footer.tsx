import Link from "next/link";

const SOCIAL_LINKS = [
  { label: "IG", href: "#", ariaLabel: "Instagram" },
  { label: "PT", href: "#", ariaLabel: "Pinterest" },
  { label: "TT", href: "#", ariaLabel: "TikTok" },
];

const SHOP_LINKS = [
  { label: "Browse All Kits", href: "/shop" },
  { label: "New Arrivals", href: "/shop" },
  { label: "Beginner Kits", href: "/shop" },
  { label: "Gift Sets", href: "/shop" },
];

const SELL_LINKS = [
  { label: "Start Selling", href: "/seller/apply" },
  { label: "Seller Dashboard", href: "/seller/dashboard" },
  { label: "Commission: 12%", href: "/seller/apply" },
  { label: "Seller Guidelines", href: "/about" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Press", href: "/contact" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4
        style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: 13,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "rgba(247,243,238,0.4)",
          marginBottom: 16,
        }}
      >
        {title}
      </h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {links.map((link) => (
          <li key={link.label} style={{ marginBottom: 10 }}>
            <Link
              href={link.href}
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: 14,
                color: "rgba(247,243,238,0.7)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              className="footer-link"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1A1612",
        color: "#F7F3EE",
        paddingTop: "clamp(60px,8vw,100px)",
        paddingBottom: 0,
      }}
    >
      <style>{`
        .footer-link:hover { color: #F7F3EE !important; }
        .social-icon:hover {
          border-color: #C8603A !important;
          color: #C8603A !important;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 48,
        }}
        className="footer-grid"
      >
        <div>
          <Link href="/">
            <span
              style={{
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                fontSize: 26,
                color: "#F7F3EE",
                fontWeight: 400,
                textDecoration: "none",
              }}
            >
              TINAAmigurumi
            </span>
          </Link>
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: 14,
              color: "rgba(247,243,238,0.6)",
              lineHeight: 1.7,
              marginTop: 12,
              maxWidth: 280,
            }}
          >
            Connecting makers with crafters worldwide. Every kit handmade with love.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.ariaLabel}
                href={social.href}
                aria-label={social.ariaLabel}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "rgba(247,243,238,0.7)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                className="social-icon"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Shop" links={SHOP_LINKS} />
        <FooterColumn title="Sell" links={SELL_LINKS} />
        <FooterColumn title="Company" links={COMPANY_LINKS} />
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          marginTop: 60,
          padding: "20px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: 12,
              color: "rgba(247,243,238,0.4)",
            }}
          >
            {"\u00a9"} 2025 TINAAmigurumi · All kits handcrafted by independent makers · 12% platform commission per sale
          </span>
          <span
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: 12,
              color: "rgba(247,243,238,0.4)",
            }}
          >
            🔒 SSL Secured · PCI Compliant
          </span>
        </div>
      </div>
    </footer>
  );
}