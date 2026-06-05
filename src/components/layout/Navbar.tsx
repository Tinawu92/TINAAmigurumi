"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
];

const MOBILE_NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/seller/apply", label: "Start Selling" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartCount = 3;
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(247,243,238,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #EDE8E1" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LEFT — WORDMARK */}
          <Link href="/">
            <span
              style={{
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                fontSize: 22,
                color: "#1A1612",
                fontWeight: 400,
              }}
            >
              TINAAmigurumi
            </span>
          </Link>

          {/* CENTER — DESKTOP NAV LINKS */}
          <div
            className="hidden md:flex"
            style={{ gap: 36, alignItems: "center" }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: 14,
                    color: isActive ? "#C8603A" : "#5C5148",
                    textDecoration: "none",
                    position: "relative",
                    paddingBottom: 2,
                  }}
                  className="nav-link"
                >
                  {link.label}
                  <style>{`
                    .nav-link:hover { color: #1A1612 !important; }
                    .nav-link::after {
                      content: '';
                      position: absolute;
                      bottom: 0;
                      left: 0;
                      width: 0;
                      height: 1px;
                      background: #C8603A;
                      transition: width 0.3s ease;
                    }
                    .nav-link:hover::after { width: 100%; }
                  `}</style>
                </Link>
              );
            })}
          </div>

          {/* RIGHT — ACTIONS */}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {/* Search */}
            <button
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "DM Sans, sans-serif",
                fontSize: 18,
                color: "#1A1612",
                transition: "background 0.2s",
              }}
              className="hover:bg-[#EDE8E1] transition-colors rounded-full"
            >
              <Search size={18} />
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              style={{
                position: "relative",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                transition: "background 0.2s",
              }}
              className="hover:bg-[#EDE8E1] transition-colors rounded-full"
            >
              <ShoppingBag size={18} color="#1A1612" />
              <span
                style={{
                  position: "absolute",
                  top: 2,
                  right: 2,
                  width: 18,
                  height: 18,
                  background: "#C8603A",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "DM Sans, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cartCount}
              </span>
            </Link>

            {/* Start Selling — desktop */}
            <Link
              href="/seller/apply"
              className="hidden md:flex"
              style={{
                border: "1.5px solid #1A1612",
                borderRadius: 999,
                padding: "8px 20px",
                fontFamily: "DM Sans, sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: "#1A1612",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              Start Selling
            </Link>

            {/* Mobile hamburger — mobile only */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                width: 40,
                height: 40,
                border: "none",
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "DM Sans, sans-serif",
                fontSize: 20,
                color: "#1A1612",
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#F7F3EE",
            zIndex: 40,
            padding: "80px 32px 32px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {MOBILE_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "16px 0",
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#1A1612",
                  textDecoration: "none",
                  borderBottom: "1px solid #EDE8E1",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart pill at bottom */}
          <Link
            href="/cart"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: "block",
              textAlign: "center",
              padding: "14px 0",
              background: "#C8603A",
              color: "white",
              borderRadius: 999,
              fontFamily: "DM Sans, sans-serif",
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              marginTop: 24,
            }}
          >
            Cart ({cartCount} items)
          </Link>
        </div>
      )}
    </>
  );
}