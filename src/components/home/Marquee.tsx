"use client";

export default function Marquee() {
  const text = "Handmade with Love · One of a Kind · No Factory Goods · Made by Real Makers · ";

  return (
    <div className="w-full overflow-hidden bg-[var(--bg-ink)] py-6">
      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div
        className="marquee-container flex whitespace-nowrap"
        style={{
          animation: "marquee 30s linear infinite",
        }}
      >
        {[1, 2, 3].map((group) => (
          <span key={group} className="flex items-center">
            {text.split(" · ").map((item, i) => (
              <span key={i} className="flex items-center">
                <span className="text-[44px] font-[var(--font-playfair)] italic text-[var(--text-inverse)]">
                  {item}
                </span>
                <span className="text-[var(--brand-terracotta)] text-[44px] mx-4">·</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}