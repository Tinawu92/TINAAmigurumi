"use client";
import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).hasAttribute("data-cursor")) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div
        className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-[var(--brand-terracotta)] text-[var(--text-inverse)] font-[var(--font-dm-sans)] font-medium transition-all duration-300"
        style={{
          width: expanded ? "64px" : "8px",
          height: expanded ? "64px" : "8px",
          opacity: expanded ? 0.9 : 0.7,
        }}
      >
        {expanded && (
          <span className="text-xs tracking-wider">VIEW</span>
        )}
      </div>
    </div>
  );
}