"use client";

import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";

import { AuroraText } from "@/components/magicui/aurora-text";

export function ConfettiOnScroll() {
  const confettiTriggered = useRef(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Function to trigger confetti
    const showConfetti = () => {
      const end = Date.now() + 3 * 1000; // 3 seconds
      const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

      const frame = () => {
        if (Date.now() > end) return;

        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          startVelocity: 60,
          origin: { x: 0, y: 0.5 },
          colors: colors,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          startVelocity: 60,
          origin: { x: 1, y: 0.5 },
          colors: colors,
        });

        requestAnimationFrame(frame);
      };

      frame();
    };

    // Scroll event handler
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return; 
      const rect = footer.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom >= 0 && !confettiTriggered.current) {
        confettiTriggered.current = true;
        showConfetti();
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 5000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <AnimatePresence>
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center pointer-events-none z-50 text-white text-4xl font-bold text-center"
        >
          <div className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
          THANKS FOR <AuroraText>THE VISIT!</AuroraText>✨
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 