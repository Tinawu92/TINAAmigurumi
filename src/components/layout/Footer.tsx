import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-ink)] text-[var(--text-inverse)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-xs">
            <Link href="/" className="text-[24px] font-[var(--font-playfair)] italic text-[var(--text-inverse)]">
              AMIGUMI
            </Link>
            <p className="mt-4 text-[14px] text-[var(--text-inverse)] opacity-60 leading-relaxed">
              Connecting makers with collectors worldwide.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 hover:text-[var(--brand-terracotta)] transition-colors text-lg" aria-label="Instagram">📷</a>
              <a href="#" className="p-2 hover:text-[var(--brand-terracotta)] transition-colors text-lg" aria-label="Pinterest">📌</a>
              <a href="#" className="p-2 hover:text-[var(--brand-terracotta)] transition-colors text-lg" aria-label="YouTube">▶️</a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-12">
            <div>
              <h4 className="text-[14px] font-medium mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/shop" className="text-[13px] opacity-60 hover:opacity-100 transition-opacity">
                    Browse All
                  </Link>
                </li>
                <li>
                  <Link href="/shop?sort=newest" className="text-[13px] opacity-60 hover:opacity-100 transition-opacity">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-[13px] opacity-60 hover:opacity-100 transition-opacity">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/sellers" className="text-[13px] opacity-60 hover:opacity-100 transition-opacity">
                    Makers Directory
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[14px] font-medium mb-4">Sell</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/seller/apply" className="text-[13px] opacity-60 hover:opacity-100 transition-opacity">
                    Start Selling
                  </Link>
                </li>
                <li>
                  <Link href="/seller/dashboard" className="text-[13px] opacity-60 hover:opacity-100 transition-opacity">
                    Seller Dashboard
                  </Link>
                </li>
                <li>
                  <span className="text-[13px] opacity-60">Commission: 12%</span>
                </li>
                <li>
                  <Link href="/about" className="text-[13px] opacity-60 hover:opacity-100 transition-opacity">
                    Seller Guidelines
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[14px] font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-[13px] opacity-60 hover:opacity-100 transition-opacity">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-[13px] opacity-60 hover:opacity-100 transition-opacity">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-[13px] opacity-60 hover:opacity-100 transition-opacity">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[13px] opacity-60 hover:opacity-100 transition-opacity">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--text-inverse)] border-opacity-10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-[12px] opacity-40">
            <span>© 2025 Amigumi Market</span>
            <span className="hidden md:inline">·</span>
            <span>All pieces handmade by independent creators</span>
            <span className="hidden md:inline">·</span>
            <span>12% platform commission on each transaction</span>
          </div>
        </div>
      </div>
    </footer>
  );
}