"use client";

import { useEffect, useState } from "react";

const words = [
  "FOCUS. Ship features.",
  "GRIND. Learn deeply.",
  "DEBUG. Fix faster.",
  "BUILD. Break limits.",
  "REFINE. Clean code.",
  "DEPLOY. Go live.",
  "OPTIMIZE. Go brrr.",
  "DOCUMENT. Stay sharp.",
  "OVERCOME. Keep shipping.",
  "BE NOTORIOUS.",
]

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(true);
      }, 300); // Wait for fade-out before changing word
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`
        text-base sm:text-3xl md:text-4xl font-semibold tracking-wide
        text-primary/90
        transition-all duration-300 ease-in-out
        ${isAnimating ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
      `}
    >
      {words[currentIndex]}
    </div>
  );
}
