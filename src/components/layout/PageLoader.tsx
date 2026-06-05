"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDMARK = "AMIGUMI";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg-canvas)]"
          style={{ pointerEvents: visible ? "auto" : "none" }}
        >
          <div className="flex gap-1">
            {WORDMARK.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-[clamp(48px,8vw,80px)] font-[var(--font-playfair)] italic text-[var(--text-primary)]"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}